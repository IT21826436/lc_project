import React from 'react'
import ParentSidebar from '../components/ParentSidebar'

export default function MyQr() {
  return (
    <div>
         <>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* Menu */}
            <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme shadow"
            >
              <div className="app-brand demo">
                <a href="/" className="app-brand-link">
                  <span className="app-brand-logo demo">
                    <img
                      className="logo-light"
                      src="img/ls.png"
                      alt="logo"
                      style={{ width: "200px" }}
                    />
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                >
                  <i className="bx bx-chevron-left bx-sm align-middle" />
                </a>
              </div>

              <div className="menu-inner-shadow" />
              <ul className="menu-inner py-1">
                {/* Dashboard */}
                <li className="menu-item active mt-3">
                  <a href="/parent" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Dashboard</div>
                  </a>
                </li>
                {/* Layouts */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-layout" />
                    <div data-i18n="Layouts">Layouts</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="layouts-without-menu.html" className="menu-link">
                        <div data-i18n="Without menu">Without menu</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="layouts-without-navbar.html"
                        className="menu-link"
                      >
                        <div data-i18n="Without navbar">Without navbar</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-container.html" className="menu-link">
                        <div data-i18n="Container">Container</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-fluid.html" className="menu-link">
                        <div data-i18n="Fluid">Fluid</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-blank.html" className="menu-link">
                        <div data-i18n="Blank">Blank</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Pages</span>
                </li>
                <li className="menu-item">
                  <a
                    href="/children"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-user" />{" "}
                    <div data-i18n="Account Settings">Children</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/bank-payment"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-money" />
                    <div data-i18n="Authentications">Bank Payment</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/online-bank"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-credit-card" />
                    <div data-i18n="Misc">Online Bank</div>
                  </a>
                </li>

                <li className="menu-item">
                  <a
                    href="/my-qr"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-qr-scan" />
                    <div data-i18n="Misc">My QR</div>
                  </a>
                </li>
                {/* Components */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Components</span>
                </li>
                {/* Cards */}
                <li className="menu-item">
                  <a href="cards-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-collection" />
                    <div data-i18n="Basic">Cards</div>
                  </a>
                </li>
                {/* User interface */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-box" />
                    <div data-i18n="User interface">User interface</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="ui-accordion.html" className="menu-link">
                        <div data-i18n="Accordion">Accordion</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-alerts.html" className="menu-link">
                        <div data-i18n="Alerts">Alerts</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-badges.html" className="menu-link">
                        <div data-i18n="Badges">Badges</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-buttons.html" className="menu-link">
                        <div data-i18n="Buttons">Buttons</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-carousel.html" className="menu-link">
                        <div data-i18n="Carousel">Carousel</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-collapse.html" className="menu-link">
                        <div data-i18n="Collapse">Collapse</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-dropdowns.html" className="menu-link">
                        <div data-i18n="Dropdowns">Dropdowns</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-footer.html" className="menu-link">
                        <div data-i18n="Footer">Footer</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-list-groups.html" className="menu-link">
                        <div data-i18n="List Groups">List groups</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-modals.html" className="menu-link">
                        <div data-i18n="Modals">Modals</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-navbar.html" className="menu-link">
                        <div data-i18n="Navbar">Navbar</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-offcanvas.html" className="menu-link">
                        <div data-i18n="Offcanvas">Offcanvas</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="ui-pagination-breadcrumbs.html"
                        className="menu-link"
                      >
                        <div data-i18n="Pagination & Breadcrumbs">
                          Pagination &amp; Breadcrumbs
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-progress.html" className="menu-link">
                        <div data-i18n="Progress">Progress</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-spinners.html" className="menu-link">
                        <div data-i18n="Spinners">Spinners</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-tabs-pills.html" className="menu-link">
                        <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-toasts.html" className="menu-link">
                        <div data-i18n="Toasts">Toasts</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-tooltips-popovers.html" className="menu-link">
                        <div data-i18n="Tooltips & Popovers">
                          Tooltips &amp; popovers
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-typography.html" className="menu-link">
                        <div data-i18n="Typography">Typography</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Extended components */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-copy" />
                    <div data-i18n="Extended UI">Extended UI</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="extended-ui-perfect-scrollbar.html"
                        className="menu-link"
                      >
                        <div data-i18n="Perfect Scrollbar">
                          Perfect scrollbar
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="extended-ui-text-divider.html"
                        className="menu-link"
                      >
                        <div data-i18n="Text Divider">Text Divider</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="icons-boxicons.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-crown" />
                    <div data-i18n="Boxicons">Boxicons</div>
                  </a>
                </li>
                {/* Forms & Tables */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Forms &amp; Tables</span>
                </li>
                {/* Forms */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-detail" />
                    <div data-i18n="Form Elements">Form Elements</div>
                  </a>
                </li>
              </ul>
            </aside>

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
                      My QR /
                    </span>{" "}
                    Mobile App
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
