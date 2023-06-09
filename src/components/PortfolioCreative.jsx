import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  // for popup video for youtube
  const [isOpen, setOpen] = useState(false);

  // popup video for vimeo
  const [isOpen2, setOpen2] = useState(false);

  // for modal details
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);


  // for modal details method
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Projects</h3>
                </div>
              </div>
            </div>
            {/* END TOKYO_TM_TITLE */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>Full Stack</Tab>
                  <Tab>Pure JavaScript</Tab>
                  <Tab>Collaborative</Tab>
                  <Tab>Open Source</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/D15_overview.png"
                              alt="Vimeo"
                              data-tip
                              data-for="vimeo"
                              onClick={toggleModalThree}
                            />
                            <ReactTooltip
                              id="vimeo"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>D15C0RD</h5>
                                <span>Full Stack App</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/overview.png"
                              alt="Youtube"
                              data-tip
                              data-for="youtube"
                              onClick={toggleModalFour}
                            />
                            <ReactTooltip
                              id="youtube"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Ravine-JS</h5>
                                <span>Pure JavaScript</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <Item
                              original="assets/img/portfolio/overview.png"
                              thumbnail="assets/img/portfolio/overview.png"
                              width={500}
                              height={550}
                            >
                              {({ ref, open }) => (
                                <img
                                  src="assets/img/portfolio/splashpage.png"
                                  alt="Childhood"
                                  data-tip
                                  data-for="shot"
                                  role="button"
                                  ref={ref}
                                  onClick={toggleModalFive}
                                />
                              )}
                            </Item>
                            <ReactTooltip
                              id="shot"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>What-Ai-Want</h5>
                                <span>MERN-Stack</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                      
                      {/* END SHOT */}

                      
                      {/* END DETAILS */}
                      {/* <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                      
                      </li> */}
                      {/* END DETAILS */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/D15_overview.png"
                              alt="Vimeo"
                              data-tip
                              data-for="d15c0rd"
                              onClick={() => setIsOpen3(true)}
                            />
                            <ReactTooltip
                              id="d15c0rd"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>D15C0RD</h5>
                                <span>Full Stack App</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END VIMEO VIDEO */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/overview.png"
                              alt="Youtube"
                              data-tip
                              data-for="youtube"
                              onClick={toggleModalFour}
                            />
                            <ReactTooltip
                              id="youtube"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Ravine-JS</h5>
                                <span>Pure JavaScript</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END YOUTUBE VIDEO */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <Item
                              original="assets/img/portfolio/4.jpg"
                              thumbnail="assets/img/portfolio/4.jpg"
                              width={500}
                              height={550}
                            >
                              {({ ref, open }) => (
                                <img
                                  src="assets/img/portfolio/splashpage.png"
                                  alt="Childhood"
                                  data-tip
                                  data-for="shot"
                                  role="button"
                                  ref={ref}
                                  onClick={toggleModalFive}
                                />
                              )}
                            </Item>
                            <ReactTooltip
                              id="shot"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>What-Ai-Want</h5>
                                <span>MERN Stack</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                      
                      {/* END SHOT */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END PHOTOGRAHY */}

                  <TabPanel>
                    <h3>Projects I'm looking at</h3>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="https://github.com/openseadragon/openseadragon">OpenSeaDragon</a>
                            
                            <ReactTooltip
                              id="detail"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>OpenSeaDragon</h5>
                                <span>Open Source</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                  
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="https://github.com/bitwarden/mobile">bitwarden mobile</a>

                            <ReactTooltip
                              id="detail2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Ravine-JS</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                    </ul>
                    {/* END DETAILS GALLERY */}
                  </TabPanel>
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>
      {/* popup vidoe for youtube modal activation */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />

      {/* popup vidoe for vimeo modal activation */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      />

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/D15_overview.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>D15C0RD</h3>
                <span>A Full Stack Clone of Discord</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    <h6>
                      Tech Stack: 
                    </h6>
                    <ul style={{marginLeft: "30px"}}>
                      <li>React</li>
                      <li>Ruby On Rails</li>
                      <li>PostgreSQL</li>
                      <li>AWS S3</li>
                      <li>Redis</li>
                      <li>Languages: JavaScript, Ruby, SQL, HTML, CSS</li>
                    </ul>
                  </p>

                  <p>
                    A recreation of Discord with features including: 

                    <ul style={{marginLeft: "30px"}}>
                      <li>Live chat using websocket architecture</li>
                      <li>Image posting and hosting with AWS S3</li>
                      <li>User auth</li>
                      <li>Server invite management system</li>
                      <li>Account customization management</li>
                      <li>Live site scalability with Redis, in-memory-database</li>
                    </ul>

                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Live Link</span>
                      <span><a href="https://d15c0rd.onrender.com" target="_blank" rel="noopener noreferrer">D15C0RD</a></span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Full Stack</span>
                    </li>
                    <li>
                      <span className="first">Development Time Span</span>
                      <span>2 weeks | 4/3 - 4/14, 2023</span>
                    </li>
                    <li>
                      <span className="first">GitHub</span>
                      <span><a href="https://github.com/smuushi/D15C0RD" target="_blank" rel="noopener noreferrer">See the code!</a></span>

                      {/* <Social /> */}
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/livechat.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/serverinvites.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/userauth.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/overview.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Ravine-JS</h3>
                <span>A pixel art survival game about staying alive while collecting food!</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    The goal of this project was to develop a javascript application with minimal dependencies.
                    I chose to make a game that reminded me of those old flash games I played growing up.
                     
                  </p>
                  <p>
                    The features include: 
                    <ul style={{marginLeft: "30px"}}>
                      <li>Pure JS Canvas manipulation</li>
                      <li>A custom engine using setInterval() to update game entities and facilitate interactions</li>
                      <li>A score and progress tracker using the browser's local storage</li>
                      <li>Cute pixel art animated using a custom-built frame counter</li>
                      <li>Debugging visuals to tune entities and interactions</li>
                    </ul>
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Live Link</span>
                      <span><a href="https://smuushi.github.io/ravine_js/" target="_blank" rel="noopener noreferrer">Ravine-JS</a></span>                      
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Pure JavaScript</span>
                    </li>
                    <li>
                      <span className="first">Development Time Span</span>
                      <span>1 week | 3/8 - 3/16, 2023</span>
                    </li>
                    <li>
                      <span className="first">GitHub</span>
                      <span><a href="https://github.com/smuushi/ravine_js" target="_blank" rel="noopener noreferrer">See the code!</a></span>

                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/menus.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/aliveoptions.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/hitbox.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/splashpage.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>What-Ai-Want</h3>
                <span>A website for users to generate images through OpenAi's image generation</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Utilizing the MERN stack workflow (MongoDB, Express, React, Node.js), I led a team of 4 developers to create a web platform for users to easily interact with OpenAi's image generation API. 
                  </p>
                  <p>
                    The features include: 
                    <ul style={{marginLeft: "30px"}}>
                      <li>CRUD functionality for images</li>
                      <li>Account management</li>
                      <li>Build in API calls to OpenAi's beta API</li>
                      <li>Image hosting and saving through AWS S3</li>
                    </ul>
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Live Link</span>
                      <span><a href="https://what-ai-want.onrender.com" target="_blank" rel="noopener noreferrer">What-Ai-Want</a></span>                      
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Group Project</span>
                    </li>
                    <li>
                      <span className="first">Development Time Span</span>
                      <span>4 days | 4/10 - 4/14, 2023</span>
                    </li>
                    <li>
                      <span className="first">GitHub</span>
                      <span><a href="https://github.com/smuushi/what-ai-want" target="_blank" rel="noopener noreferrer">See the code!</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/SplashDemo.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/MaikeDemo.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/ProfileUpload.gif)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
