import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Stepper from "bs-stepper";
import $ from "jquery"; // Import jQuery

import "bs-stepper/dist/css/bs-stepper.min.css";

export default function Register() {
  useEffect(() => {
    const wizardNumbered = document.querySelector(".wizard-numbered");
    if (wizardNumbered) {
      const wizardNumberedBtnNextList = Array.from(
        wizardNumbered.querySelectorAll(".btn-next")
      );
      const wizardNumberedBtnPrevList = Array.from(
        wizardNumbered.querySelectorAll(".btn-prev")
      );
      const wizardNumberedBtnSubmit =
        wizardNumbered.querySelector(".btn-submit");

      const numberedStepper = new Stepper(wizardNumbered, {
        linear: false,
      });

      if (wizardNumberedBtnNextList) {
        wizardNumberedBtnNextList.forEach((wizardNumberedBtnNext) => {
          wizardNumberedBtnNext.addEventListener("click", (event) => {
            numberedStepper.next();
          });
        });
      }

      if (wizardNumberedBtnPrevList) {
        wizardNumberedBtnPrevList.forEach((wizardNumberedBtnPrev) => {
          wizardNumberedBtnPrev.addEventListener("click", (event) => {
            numberedStepper.previous();
          });
        });
      }

      if (wizardNumberedBtnSubmit) {
        wizardNumberedBtnSubmit.addEventListener("click", (event) => {
          alert("Submitted..!!");
        });
      }

      return () => {
        // Cleanup code (if needed)
      };
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    // Form Repeater logic
    const formRepeater = document.querySelector(".form-repeater");
    let row = 2;
    let col = 1;

    if (!formRepeater) return;

    formRepeater.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    function showElement() {
      const fromControl = this.querySelectorAll(".form-control, .form-select");
      const formLabel = this.querySelectorAll(".form-label");

      fromControl.forEach((control, i) => {
        const id = `form-repeater-${row}-${col}`;
        control.setAttribute("id", id);
        formLabel[i].setAttribute("for", id);
        col++;
      });

      row++;

      this.style.display = "block";
    }

    function hideElement(e) {
      if (window.confirm("Are you sure you want to delete this element?")) {
        this.style.display = "none";
      }
    }

    const addButton = formRepeater.querySelector(".add-button");
    if (addButton) {
      addButton.addEventListener("click", function () {
        showElement.call(formRepeater);
      });
    }

    const deleteButtons = formRepeater.querySelectorAll(".delete-button");
    if (deleteButtons) {
      deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
          hideElement.call(formRepeater);
        });
      });
    }
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    <div>
      <Navbar />

      <div>
        <div
          className="p-4 mt-5 text-start"
          style={{ width: "1100px", marginLeft: "200px" }}
        >
          <div className="bs-stepper wizard-numbered mt-2">
            <div className="bs-stepper-header">
              <div className="step" data-target="#account-details">
                <button
                  type="button"
                  className="step-trigger shadow"
                  style={{ marginRight: "24px" }}
                >
                  <span className="bs-stepper-circle">1</span>
                  <span className="bs-stepper-label">
                    <span className="bs-stepper-title ">Parent Details</span>
                  </span>
                </button>
              </div>

              <div className="step" data-target="#personal-info">
                <button type="button" className="step-trigger shadow">
                  <span className="bs-stepper-circle">2</span>
                  <span className="bs-stepper-label mt-1">
                    <span className="bs-stepper-title">Student Info</span>
                  </span>
                </button>
              </div>

              <div className="step" data-target="#social-links">
                <button
                  type="button"
                  className="step-trigger shadow"
                  style={{ marginLeft: "24px" }}
                >
                  <span className="bs-stepper-circle">3</span>
                  <span className="bs-stepper-label mt-1">
                    <span className="bs-stepper-title">Password</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="bs-stepper-content shadow mt-5">
              <form onsubmit="return false ">
                {/* Account Details */}
                <div id="account-details" className="content">
                  <div className="content-header mb-3 "></div>
                  <div className="row g-4 p-2">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="username">
                        name
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="johndoe"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="username">
                        address
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="johndoe"
                      />
                    </div>

                    <div class="col-md-6">
                      <label for="defaultSelect" class="form-label">
                        Country
                      </label>
                      <select id="defaultSelect" class="form-select">
                        <option> select country</option>
                        <option value="1">Italy</option>
                        <option value="2">Srilanka</option>
                        <option value="3">Australia</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="username">
                        occupation
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="johndoe"
                      />
                    </div>

                    <div class="col-md-6">
                      <label for="exampleFormControlInput1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="username">
                        contact
                      </label>
                      <input
                        type="mobile"
                        id="username"
                        className="form-control"
                        placeholder="johndoe"
                      />
                    </div>

                    <div class="col-md-6">
                      <label for="defaultSelect" class="form-label">
                        intake
                      </label>
                      <select id="defaultSelect" class="form-select">
                        <option> select intake</option>
                        <option value="1">July intake</option>
                        <option value="2">Regular intake</option>
                      </select>
                    </div>

                    <div className="col-12 d-flex justify-content-between mt-4">
                      <button
                        className="btn btn-label-secondary btn-prev"
                        disabled=""
                      >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none me-sm-1 me-0">
                          Next
                        </span>
                        <i className="bx bx-chevron-right bx-sm me-sm-n2" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div id="personal-info" className="content">
                  <form className="form-repeater">
                    <div data-repeater-list="group-a ">
                      <div data-repeater-item="">
                        <div className="row p-4">
                          <div className="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                            <label
                              className="form-label"
                              htmlFor="form-repeater-1-1"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="form-repeater-1-1"
                              className="form-control"
                              placeholder="john.doe"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                            <label
                              className="form-label"
                              htmlFor="form-repeater-1-2"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form-repeater-1-2"
                              className="form-control"
                              placeholder="············"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                            <label
                              className="form-label"
                              htmlFor="form-repeater-1-3"
                            >
                              Gender
                            </label>
                            <select
                              id="form-repeater-1-3"
                              className="form-select"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                            <label
                              className="form-label"
                              htmlFor="form-repeater-1-4"
                            >
                              Profession
                            </label>
                            <select
                              id="form-repeater-1-4"
                              className="form-select"
                            >
                              <option value="Designer">Designer</option>
                              <option value="Developer">Developer</option>
                              <option value="Tester">Tester</option>
                              <option value="Manager">Manager</option>
                            </select>
                          </div>
                          <div className="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
                            <button
                              className="btn btn-label-danger mt-4"
                              data-repeater-delete=""
                            >
                              <i className="bx bx-x me-1" />
                              <span className="align-middle">Delete</span>
                            </button>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="mb-0">
                      <button
                        className="btn btn-primary"
                        data-repeater-create=""
                      >
                        <i className="bx bx-plus me-1" />
                        <span className="align-middle">Add</span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* Social Links */}
                <div id="social-links" className="content mt-3">
                  <div className="content-header mb-3">
                   
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="twitter">
                        Twitter
                      </label>
                      <input
                        type="text"
                        id="twitter"
                        className="form-control"
                        placeholder="https://twitter.com/abc"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="facebook">
                        Facebook
                      </label>
                      <input
                        type="text"
                        id="facebook"
                        className="form-control"
                        placeholder="https://facebook.com/abc"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="google">
                        Google+
                      </label>
                      <input
                        type="text"
                        id="google"
                        className="form-control"
                        placeholder="https://plus.google.com/abc"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="linkedin">
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        id="linkedin"
                        className="form-control"
                        placeholder="https://linkedin.com/abc"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        {" "}
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
