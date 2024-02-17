import "./App.css";
import Input from "./component/Input";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { password } = inputs;

  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    //check for validation
    if (event.target.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setIsValid((prevState) => {
        return {
          ...prevState,
          email: emailRegex.test(event.target.value),
        };
      });
    }
    if (event.target.name === "password") {
      setIsValid((prevState) => {
        return {
          ...prevState,
          password: event.target.value.length >= 8,
        };
      });
    }
    if (event.target.name === "confirmPassword") {
      setIsValid((prevState) => {
        return {
          ...prevState,
          confirmPassword: event.target.value === password,
        };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //check isValid values are true
    if (isValid.email && isValid.password && isValid.confirmPassword) {
      alert("Form Submitted");
      setInputs({ email: "", password: "", confirmPassword: "" });
      setIsValid({
        email: false,
        password: false,
        confirmPassword: false,
      });
    } else {
      alert("Form values are not correct");
    }
    return;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          title="Email"
          type="email"
          value={inputs.email}
          onChange={handleChange}
          name="email"
          classForInput={isValid.email ? "valid" : "invalid"}>
          {!isValid.email && <p>Invalid Email Format</p>}
        </Input>

        <Input
          title="Password"
          type="password"
          value={inputs.password}
          onChange={handleChange}
          name="password"
          classForInput={isValid.password ? "valid" : "invalid"}>
          {!isValid.password && <p>Password must be atleast 8 characters </p>}
        </Input>
        <Input
          title="Confirm Password"
          type="password"
          value={inputs.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          classForInput={isValid.confirmPassword ? "valid" : "invalid"}>
          {!isValid.confirmPassword && <p> Password do not match</p>}
        </Input>
        <div className="button-div">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
