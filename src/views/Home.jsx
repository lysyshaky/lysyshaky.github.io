import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Portfolio from "../components/PortfolioCreative";

const HomeLight = () => {
  const [isDark, setIsDark] = useState(false);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("-light");
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
            <div className="logo">
  <a href="https://lyqx.webflow.io/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/img/logo/dark.png" alt="brand" />
  </a>
</div>

              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Yurii Lysyshak</p>
              </div>
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                  </div>
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <About />
                  </div>
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <Contact />
                  </div>
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
