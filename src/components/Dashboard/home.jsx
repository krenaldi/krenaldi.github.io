import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Home = () => {
  const form = useRef();

  const submitPortfolio = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      title: formData.get('title'),
      hasVideo: formData.get('hasVideo') === 'on' ? true : false,
      repo_url: formData.get('repo_url'),
      deploy_url: formData.get('deploy_url'),
      description: formData.get('description'),
      image: formData.get('image'),
    };

    const storageRef = ref(storage, `portfolio/${data.image.name}`);

    uploadBytes(storageRef, data.image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(
        (downloadUrl) => {
          savePortfolio({
            ...data,
            image: downloadUrl,
          });
        },
        () => {
          savePortfolio({
            ...data,
            image: null,
          });
        }
      );
    }, () => {
      savePortfolio({
        ...data,
        image: null,
      });
    });
  };

  const savePortfolio = async (portfolio) => {
    portfolio.timestamp = serverTimestamp();
    try {
      await addDoc(collection(db, 'portfolio'), portfolio);
      window.location.reload(false);
    } catch (error) {
      alert("Failed to load portfolio\n", error.message);
    }
  };

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <label>
          Title:
          <input placeholder="Title" type="text" name="title" />
        </label>
        <br />
        <label>
          Repo URL:
          <input placeholder="Repo URL" type="text" name="repo_url" />
        </label>
        <br />
        <label>
          Deployed URL:
          <input placeholder="Deployed URL" type="text" name="deploy_url" />
        </label>
        <br />
        <label>
          Description:
          <textarea placeholder="Description" type="text" name="description" />
        </label>
        <br />
        <label>
          Image:
          <input placeholder="Image" type="file" name="image" />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </form>
    </div>
  );
};

export default Home;
