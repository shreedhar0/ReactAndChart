import "bootstrap/dist/css/bootstrap.css";
import "./RegistrationForm.css";
import { useState, useRef } from "react";
import axios from "axios";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/student/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <>
      <form
        name="register-student"
        className="registration-form"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="form-group row mt-2">
          <label htmlFor="heading" className="col-form-label text-center">
            <h2>Registration Form</h2>
          </label>
        </div>
        <div className="form-group row mt-2">
          <label
            htmlFor="firstName"
            className="col-sm-1 col-form-label offset-sm-4"
          >
            First Name :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label
            htmlFor="lastName"
            className="col-sm-1 col-form-label offset-sm-4"
          >
            Last Name :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label
            htmlFor="email"
            className="col-sm-1 col-form-label offset-sm-4"
          >
            Email :
          </label>
          <div className="col-sm-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <div className="col-sm-1 offset-sm-5">
            <input
              type="submit"
              className="btn btn-primary btn-lg"
              value="Submit"
              name="submit"
            />
          </div>
          <div className="col-sm-1">
            <input
              type="reset"
              className="btn btn-danger btn-lg"
              value="Reset"
              name="reset"
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default RegistrationForm;
