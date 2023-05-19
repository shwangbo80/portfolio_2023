import React from "react";

function NavComponent() {
  return (
    <>
      {/* Header
		============================================= */}
      <header
        id="header"
        className="border-bottom-0 no-sticky transparent-header">
        <div id="header-wrap">
          <div className="container">
            <div className="header-row">
              {/* Logo
						============================================= */}
              <div id="logo">
                <a href="/">
                  <h3 className="fw-bold text-primary mt-4">Soo_Hwangbo</h3>
                </a>
                <a href="/" className="retina-logo">
                  <h3 className="fw-bold text-primary mt-4">Soo_Hwangbo</h3>
                </a>
              </div>
              {/* #logo end */}
              <div id="primary-menu-trigger">
                <svg className="svg-trigger" viewBox="0 0 100 100">
                  <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                  <path d="m 30,50 h 40" />
                  <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>
              </div>
              {/* Primary Navigation
						============================================= */}
              <nav className="primary-menu">
                <ul className="menu-container">
                  <li>
                    <a
                      href="#"
                      data-scrollto="#about"
                      data-easing="easeInOutExpo"
                      data-speed={1250}
                      data-offset={70}
                      className="menu-link">
                      <div>About me</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-scrollto="#projects"
                      data-easing="easeInOutExpo"
                      data-speed={1250}
                      data-offset={70}
                      className="menu-link">
                      <div>Works</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="menu-link"
                      href="#"
                      data-scrollto="#footer"
                      data-easing="easeInOutExpo"
                      data-speed={1250}
                      data-offset={70}>
                      <div>Contact</div>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* #primary-menu end */}
            </div>
          </div>
        </div>
      </header>
      {/* #header end */}
    </>
  );
}

export default NavComponent;
