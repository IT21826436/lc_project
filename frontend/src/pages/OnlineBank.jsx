import React from 'react'
import ParentSidebar from '../components/ParentSidebar'

export default function OnlineBank() {
  return (
    <div>
         <>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* Menu */}
            <ParentSidebar/>
            {/* / Menu */}

            {/* Layout container */}
            <div className="layout-page">
              {/* Navbar */}
              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <a
                    className="nav-item nav-link px-0 me-xl-4"
                    href="javascript:void(0)"
                  >
                    <i className="bx bx-menu bx-sm" />
                  </a>
                </div>
                <div
                  className="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
                >
                  {/* Search */}
                  <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                      <i className="bx bx-search fs-4 lh-0" />
                      <input
                        type="text"
                        className="form-control border-0 shadow-none"
                        placeholder="Search..."
                        aria-label="Search..."
                      />
                    </div>
                  </div>
                  {/* /Search */}
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* Place this tag where you want the button to render. */}
                    <li className="nav-item lh-1 me-3">
                      <a
                        className="github-button"
                        href="https://github.com/themeselection/sneat-html-admin-template-free"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                      >
                        Star
                      </a>
                    </li>
                    {/* User */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                      >
                        <div className="avatar avatar-online">
                          <img
                            src="../assets/img/avatars/1.png"
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img
                                    src="../assets/img/avatars/1.png"
                                    alt=""
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <span className="fw-semibold d-block">
                                  John Doe
                                </span>
                                <small className="text-muted">Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-user me-2" />
                            <span className="align-middle">My Profile</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-cog me-2" />
                            <span className="align-middle">Settings</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="d-flex align-items-center align-middle">
                              <i className="flex-shrink-0 bx bx-credit-card me-2" />
                              <span className="flex-grow-1 align-middle">
                                Billing
                              </span>
                              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                                4
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="auth-login-basic.html"
                          >
                            <i className="bx bx-power-off me-2" />
                            <span className="align-middle">Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*/ User */}
                  </ul>
                </div>
              </nav>
              {/* / Navbar */}
              {/* Content wrapper */}
              <div className="content-wrapper mt-3" style={{textAlign:"start", width:"1378px" , marginLeft:"25px"}}>
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                  <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">
                      Payments /
                    </span>{" "}
                    Online Bank
                  </h4>
                  {/* <div className="row">
                    <div className="col-md-12">
                      <ul className="nav nav-pills flex-column flex-md-row mb-3">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="javascript:void(0);"
                          >
                            <i className="bx bx-user me-1" /> Account
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages-account-settings-notifications.html"
                          >
                            <i className="bx bx-bell me-1" /> Notifications
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages-account-settings-connections.html"
                          >
                            <i className="bx bx-link-alt me-1" /> Connections
                          </a>
                        </li>
                      </ul> 
                     
                    </div>
                  </div> */}
                </div>
                {/* / Content */}
                {/* Footer */}
                
                {/* / Footer */}
                <div className="content-backdrop fade" />
              </div>

              {/* Content wrapper */}
            </div>
            {/* / Layout page */}
          </div>
          {/* Overlay */}
          <div className="layout-overlay layout-menu-toggle" />
        </div>
        {/* / Layout wrapper */}
      </>
    </div>
  )
}
