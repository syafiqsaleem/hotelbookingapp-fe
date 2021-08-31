import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Upon clicking submit button, data will be sent to backend
  const handleSubmit = () => {
    alert("send user info to backend");
  };

  // Register details
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      show the form <button type="submit">Submit</button>
      {""}
    </form>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">{registerForm()}</div>
        </div>
      </div>
    </>
  );
};

export default Register;
