import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";

export default function Register() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const processChange = (e) => {
    switch (e.target.name) {
      case "name":
        setData({
          ...data,
          name: e.target.value
        });
        break;

        case "email":
        setData({
          ...data,
          email: e.target.value
        });
        break;

        case "password":
        setData({
          ...data,
          password: e.target.value
        });
        break;
    
      default:
        break;
    }
  }

  const emailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const [errors, setErrors] = useState({
    name_error: "",
    email_error: "",
    password_error: ""
  });


  function validateTheForm() {
    setErrors({
      name_error: !data.name ? "name is required" : "",
      email_error: !data.email ? "email is required" : !emailRegexPattern.test(data.email) ? 'not email format ' : "",
      password_error: !data.password ? "password is required" : "",

    })
    // if (data.name && data.email && data.password) {
    //   alert('done');
    // } 
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateTheForm();
    // request backend api
  }
  return (
    
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route">
   
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6" style={{'margin': 'auto'}}>
                  <div className="title-box-2">
                    <h5 className="title-left">
                      Register a new account ?
                    </h5>
                  </div>
                  <div>
                    <form action="forms/contact.php" method="post" role="form" onSubmit={handleSubmit} className="php-email-form">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Name" onChange={processChange} />
                            {errors.name_error && <p> {errors.name_error} </p> }
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={processChange}  />
                            {errors.email_error && <p> {errors.email_error} </p> }
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="password" placeholder="Password" onChange={processChange}  />
                            {errors.password_error && <p> {errors.password_error} </p> }
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="cnfrmPasswd" placeholder="Confirm Password" onChange={processChange}  />
                          </div>
                        </div>

                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <label >upload image</label>
                            <input type="file" className="form-control" name="image" />
                          </div>
                        </div>

                        <div className="col-md-12 text-center">
                          <button type="submit" onClick={handleSubmit} className="button button-a button-big button-rouded">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}
