import { signInWithGoogle } from "../../firebase";

const Login = () => {
  return (
    <div className="dashboard">
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Login;
