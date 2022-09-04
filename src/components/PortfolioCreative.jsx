import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import Social from "./Social";
import data from "../data.json";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>My Projects</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab />
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    {data.projects.map((project, index) => {
                      return (
                        <li
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          key={index.toString()}
                        >
                          <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                              <img
                                src={project.image}
                                alt="Details"
                                data-tip
                                data-for={`detail${index}`}
                                onClick={() => {
                                  setSelectedProject(project);
                                  setShowModal(true);
                                }}
                                style={{
                                  borderRadius: "15px",
                                }}
                              />

                              <ReactTooltip
                                id={`detail${index}`}
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                                key={index.toString()}
                              >
                                <div>
                                  <h5>{project.title}</h5>
                                  <span>{project.tooltip}</span>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END CREATIVE PORTFOLIO GALLERY */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={() => setShowModal(false)}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            {selectedProject && (
              <div className="description_wrap scrollable">
                <div className="image">
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${selectedProject.backgroundImage})`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="portfolio_main_title">
                  <h3>{selectedProject.title}</h3>
                  <span>Details</span>
                </div>
                {/* END portfolio_main_title */}
                <div className="main_details">
                  <div className="textbox">
                    <p>{selectedProject.description}</p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Client</span>
                        <span>{selectedProject.client}</span>
                      </li>
                      <li>
                        <span className="first">Launch Project </span>
                        {selectedProject.links.map((link, index) => {
                          return (
                            <>
                              <a href={link.url} key={index.toString()}>
                                <span>{link.name}</span>
                              </a>
                              <br />
                            </>
                          );
                        })}
                      </li>

                      <li>
                        <span className="first">Contact Me</span>
                        <Social />
                        {/* END SOCIAL SHARE */}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* main_details */}

                <div className="additional_images">
                  <ul className="gallery_zoom">
                    {selectedProject.images.map((image, index) => {
                      return (
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="thumb" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: `url(${image})`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
