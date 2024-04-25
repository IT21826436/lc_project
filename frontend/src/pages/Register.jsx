import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Stepper from "bs-stepper";

import "bs-stepper/dist/css/bs-stepper.min.css";
import Footer from "../components/Footer";
import "../css/Register.css";

export default function Register() {
  useEffect(() => {
    const wizardNumbered = document.querySelector(".wizard-numbered");

    if (typeof wizardNumbered !== "undefined" && wizardNumbered !== null) {
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

      wizardNumberedBtnNextList.forEach((wizardNumberedBtnNext) => {
        wizardNumberedBtnNext.addEventListener("click", (event) => {
          numberedStepper.next();
        });
      });

      wizardNumberedBtnPrevList.forEach((wizardNumberedBtnPrev) => {
        wizardNumberedBtnPrev.addEventListener("click", (event) => {
          numberedStepper.previous();
        });
      });

      if (wizardNumberedBtnSubmit) {
        wizardNumberedBtnSubmit.addEventListener("click", (event) => {
          alert("Submitted..!!");
        });
      }

      // Cleanup function
      return () => {
        wizardNumberedBtnNextList.forEach((wizardNumberedBtnNext) => {
          wizardNumberedBtnNext.removeEventListener("click", () => {});
        });
        wizardNumberedBtnPrevList.forEach((wizardNumberedBtnPrev) => {
          wizardNumberedBtnPrev.removeEventListener("click", () => {});
        });
        if (wizardNumberedBtnSubmit) {
          wizardNumberedBtnSubmit.removeEventListener("click", () => {});
        }
      };
    }
  }, []);

  useEffect(() => {
    const formRepeater = document.querySelector(".form-repeater");

    let row = 2;
    let col = 1;

    const showRepeater = function () {
      const formControl = this.querySelectorAll(
        ".mb-3 .form-control, .mb-3 .form-select"
      );
      const formLabel = this.querySelectorAll(".mb-3 label");

      formControl.forEach((control, i) => {
        const id = "form-repeater-" + row + "-" + col;
        control.setAttribute("id", id);
        formLabel[i].setAttribute("for", id);
        col++;
      });

      row++;
      this.style.display = "block";
    };

    const hideRepeater = function (e) {
      if (window.confirm("Are you sure you want to delete this element?")) {
        this.remove();
      }
    };

    const addRepeaterItem = function () {
      const repeaterList = document.querySelector(
        '[data-repeater-list="group-a"]'
      );
      const clone = document.createElement("div");
      clone.className = "row";
      clone.setAttribute("data-repeater-item", "");

      const formFields = repeaterList.firstElementChild
        .querySelector("[data-repeater-item]")
        .cloneNode(true);
      clone.appendChild(formFields);

      repeaterList.appendChild(clone);

      const controls = clone.querySelectorAll(
        ".mb-3 .form-control, .mb-3 .form-select"
      );
      controls.forEach((control) => {
        const id = "form-repeater-" + row + "-" + col;
        control.setAttribute("id", id);
        col++;
        const label = clone.querySelector(`label[for="${control.id}"]`);
        if (label) {
          label.setAttribute("for", id);
        }
      });
      row++;
      col = 1;
    };

    if (formRepeater) {
      formRepeater.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        console.log("Form submitted");
      });

      formRepeater.addEventListener("click", function (event) {
        if (event.target.matches("[data-repeater-delete]")) {
          event.preventDefault(); // Prevent default button behavior
          hideRepeater.call(event.target.closest("[data-repeater-item]")); // Hide repeater item
        } else if (event.target.matches("[data-repeater-create]")) {
          event.preventDefault(); // Prevent default button behavior
          addRepeaterItem(); // Add repeater item
        }
      });

      formRepeater.show = showRepeater;
      formRepeater.hide = hideRepeater;
    }

    // Cleanup function
    return () => {
      if (formRepeater) {
        formRepeater.removeEventListener("submit", function (e) {
          e.preventDefault();
        });
      }
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="mb-5"
        style={{
          marginTop: "50px",
          marginLeft: "390px",
          width: "870px",
          border: "black",
        }}
      >
        <div className="bs-stepper wizard-numbered ">
          <div className="bs-stepper-header">
            <div className="step" data-target="#account-details">
              <button type="button" className="step-trigger">
                <div className="d-flex">
                  <div>
                    <span className="bs-stepper-circle">1</span>
                  </div>
                  <div>
                    <span className="bs-stepper-label mt-1">
                      <span className="bs-stepper-title">Parent Details</span>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "-28px" }}>
                  <span
                    className="bs-stepper-subtitle"
                    style={{ fontSize: "12px", marginLeft: "33px" }}
                  >
                    Add parent info
                  </span>
                </div>
              </button>
            </div>
            <div className="">
              <i className="bx bx-chevron-right" />
            </div>
            <div className="step" data-target="#personal-info">
              <button type="button" className="step-trigger">
                <div className="d-flex">
                  <div>
                    <span className="bs-stepper-circle">2</span>
                  </div>
                  <div>
                    <span className="bs-stepper-label mt-1">
                      <span className="bs-stepper-title">Student Details</span>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "-28px" }}>
                  <span
                    className="bs-stepper-subtitle"
                    style={{ fontSize: "12px", marginLeft: "32px" }}
                  >
                    Add student info
                  </span>
                </div>
              </button>
            </div>
            <div className="">
              <i className="bx bx-chevron-right" />
            </div>
            <div className="step" data-target="#social-links">
              <button type="button" className="step-trigger">
                <div className="d-flex">
                  <div>
                    <span className="bs-stepper-circle">3</span>
                  </div>
                  <div>
                    <span className="bs-stepper-label mt-1">
                      <span className="bs-stepper-title">Password Details</span>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "-28px" }}>
                  <span
                    className="bs-stepper-subtitle"
                    style={{ fontSize: "12px", marginLeft: "27px" }}
                  >
                    Add password info
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content mt-4">
            <form>
              {/* Account Details */}
              <div id="account-details" className="content">
                <div className="content-header mb-3">
                  <h6 className="mb-0">Parent Details</h6>
                  <small>Enter Parent Details.</small>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="username">
                      full name
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
                    <label for="exampleFormControlSelect1" class="form-label">
                      country
                    </label>
                    <select
                      class="form-select"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                    >
                      <option selected="">select country</option>
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

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="john.doe@email.com"
                      aria-label="john.doe"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="username">
                      contact
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="+94-775643287"
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="exampleFormControlSelect1" class="form-label">
                      intake
                    </label>
                    <select
                      class="form-select"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                    >
                      <option selected="">select intake</option>
                      <option value="1">June intake</option>
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
                <div className="content-header mb-3">
                  <h6 className="mb-0">Student Details</h6>
                  <small>Enter Your Student Details.</small>
                </div>

                <div data-repeater-list="group-a">
                  <div className="row" data-repeater-item>
                    <form className="form-repeater">
                      <div data-repeater-list="group-a">
                        <div className="row" data-repeater-item>
                          <div class="col-md-6 mb-3">
                            <label class="form-label" for="form-repeater-1-1">
                              Name
                            </label>
                            <input
                              type="text"
                              id="form-repeater-1-1"
                              class="form-control"
                              placeholder="john.doe"
                            />
                          </div>

                          <div class="col-md-6 mb-3">
                            <label class="form-label" for="form-repeater-1-1">
                              age
                            </label>
                            <input
                              type="number"
                              id="form-repeater-1-1"
                              class="form-control"
                              placeholder="john.doe"
                            />
                          </div>

                          <div class="col-md-6 mb-3">
                            <label class="form-label" for="form-repeater-1-3">
                              Gender
                            </label>
                            <select id="form-repeater-1-3" class="form-select">
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>

                          <div class="col-md-6 mb-3">
                            <label
                              for="html5-date-input"
                              class="col-md-2 col-form-label"
                            >
                              Date
                            </label>
                            <div class="">
                              <input
                                class="form-control"
                                type="date"
                                value="2021-06-18"
                                id="html5-date-input"
                              />
                            </div>
                          </div>

                          <div class="col-md-6 mb-3">
                            <label
                              for="exampleFormControlSelect1"
                              class="form-label"
                            >
                              exam level
                            </label>
                            <select
                              class="form-select"
                              id="exampleFormControlSelect1"
                              aria-label="Default select example"
                            >
                              <option selected="">select level</option>
                              <option value="1">level 1</option>
                              <option value="2">level 2</option>
                              <option value="3">level 3</option>
                              <option value="3">level 4</option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label
                              for="exampleFormControlSelect1"
                              class="form-label"
                            >
                              grade
                            </label>
                            <select
                              class="form-select"
                              id="exampleFormControlSelect1"
                              aria-label="Default select example"
                            >
                              <option selected="">select grade</option>
                              <option value="1">grade 1</option>
                              <option value="2">grade 2</option>
                              <option value="3">grade 3</option>
                              <option value="3">grade 4</option>
                            </select>
                          </div>

                          <div className="col-md-12 d-flex justify-content-between mb-4 mt-3">
                            <button
                              className="btn btn-success btn-sm text-nowrap px-3"
                              type="button"
                              data-repeater-create
                            >
                              <i className="bx bx-plus" /> Add More
                            </button>
                            <button
                              className="btn btn-danger btn-sm text-nowrap px-3"
                              type="button"
                              data-repeater-delete
                            >
                              <i className="bx bx-x" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-12 d-flex justify-content-between mb-4 mt-3"></div>
                </div>

                <div className="row g-3">
                  <div className="col-12 d-flex justify-content-between mt-4">
                    <button className="btn btn-label-secondary btn-prev">
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

              {/* Social Links */}
              <div id="social-links" className="content">
                <div className="content-header mb-3">
                  <h6 className="mb-0">Password Details</h6>
                  <small>Enter Your Password.</small>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="username">
                      password
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
                      confirm password
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="johndoe"
                    />
                  </div>
                </div>

                <div className="row g-3 mt-3">
                  <div className="col-12 d-flex justify-content-between mt-4">
                    <button className="btn btn-label-secondary btn-prev">
                      <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                      <span className="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button className="btn btn-success">
                      <span className="align-middle d-sm-inline-block d-none me-sm-1 me-0">
                        Submit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
