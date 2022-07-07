import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [city, setCity] = useState("");

  const validateEmail = () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.toLowerCase().match(regEx)) {
      return email;
    } else {
      alert("Kindly Add A Valid Email");
    }
  };

  const validatePass = () => {
    if (pass.length < 8) {
      return alert("Password Length Must Be More Than 8 Characters");
    }
  };
  const validateCity = () => {
    if (!city || city.length < 4) {
      return alert(" Kindly Add Your City");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    validateEmail();
    validatePass();
    validateCity();
  };
  return (
    <form className="container" onSubmit={submitHandler}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address (optional</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default Contact;
