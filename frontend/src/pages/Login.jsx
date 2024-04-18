import React from 'react'

export default function Login() {
  return (
    <div>
        <>

  <div className="container-xxl ">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner">
        {/* Register */}
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            {/* Logo */}
            <div className="app-brand justify-content-center">
              <a href="index.html" className="app-brand-link gap-2">
              <img
              className="logo-light"
              src="img/ls.png"
              alt="logo"
              style={{ width: "200px" }}
            />
              </a>
            </div>
            {/* /Logo */}
            <h4 className="mb-2">Welcome to Sneat! 👋</h4>
            <p className="mb-4">
              Please sign-in to your account and start the adventure
            </p>
            <form
              id="formAuthentication"
              action="https://www.demo-hotspot-client.gzeinnumer.com/login"
              className="mb-3"
              method="POST"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="bmnc1e7hrdY57Hi2lpVdxmzz37kmdiSM8l3h1xNF"
              />{" "}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email or Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your email or username"
                  autofocus=""
                  defaultValue=""
                  fdprocessedid="qd7lzj"
                />
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="············"
                    aria-describedby="password"
                    defaultValue=""
                    fdprocessedid="1wejzfq"
                  />
                  <span className="input-group-text cursor-pointer">
                    <i className="bx bx-hide" />
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary d-grid w-100"
                  type="submit"
                  fdprocessedid="pgcaab"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  </div>
  {/* Core JS */}
  {/* build:js assets/vendor/js/core.js */}
  {/* endbuild */}
  {/* Vendors JS */}
  {/* Main JS */}
  {/* Page JS */}
  {/* Place this tag in your head or just before your close body tag. */}
  {/* / Content */}
  <iframe
    frameBorder={0}
    scrolling="no"
    style={{ backgroundColor: "transparent", border: 0, display: "none" }}
  />
  <div
    id="GOOGLE_INPUT_CHEXT_FLAG"
    input=""
    input_stat='{"tlang":true,"tsbc":true,"pun":true,"mk":true,"ss":true}'
    style={{ display: "none" }}
  />
  <span id="PING_IFRAME_FORM_DETECTION" style={{ display: "none" }} />
</>

    </div>
  )
}
