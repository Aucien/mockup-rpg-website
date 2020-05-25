import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to MOCKUP RPG Website</h1>
      <section className="homePage">
        <form>
          <p>Login to your account</p>
          <label for="username">Username: </label>
          <input type="text" name="username" required />
          <br />
          <label for="user-pw">Password: </label>
          <input type="password" name="user-pw" id="user-pw" required />
          <br />
          <input type="submit" value="login" />
        </form>
        <br />
        <NavLink to="/createAccount">Create an Account</NavLink>
      </section>
    </div>
  );
};

export default HomePage;
