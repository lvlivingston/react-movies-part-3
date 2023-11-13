import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser(inputValue);
  };

  return (
    <>
      <main>
        <div>
          <h1> Login Page </h1>
          <h3> Please enter your desired username below</h3>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" onChange={handleChange} />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </main>
    </>
  );
}