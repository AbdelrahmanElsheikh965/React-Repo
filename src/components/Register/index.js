import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";

export default function Register() {

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
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Name" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Password" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Confirm Password" required />
                          </div>
                        </div>
                        <div className="col-md-12 text-center my-3">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="col-md-12 text-center">
                          <button type="submit" className="button button-a button-big button-rouded">Save</button>
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
