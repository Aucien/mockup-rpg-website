import React from "react";
import { useHistory } from "react-router-dom";

function CreateAccount() {
  const history = useHistory();
  const routeChange = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Create Account</h1>
      <section>
        <form>
          <p>Create an account</p>
          <label for="username">Username</label>
          <input type="text" name="username" required />
          <br />
          <label for="user-pw">Password</label>
          <input type="password" name="user-pw" id="user-pw" required />
          <br />
          <button onClick={routeChange}>Create Account</button>
        </form>
      </section>
    </div>
  );
}

export default CreateAccount;
