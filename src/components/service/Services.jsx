import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);



  function toggleModal(e) {
    // debugger
    switch (e.currentTarget.id){
      case "1":
      setIsOpen(!isOpen);
      break;

      case "2":
      setIsOpen2(!isOpen2);
      break;  

      case "3":
      setIsOpen3(!isOpen3);
      break;

      case "4":
      setIsOpen4(!isOpen4);
      break;

      case "5":
      setIsOpen5(!isOpen5);
      break;

      case "6":
      setIsOpen6(!isOpen6);
      break;

    }
    e.preventDefault();
  }
  // function toggleModal2(e) {
  //   setIsOpen2(!isOpen2);
  //   e.preventDefault();
  // }

  const serviceContent = [
    {
      id: 1,
      no: "01",
      title: "Web Dev",
      text: `Web developing through ...`,
    },
    {
      id: 2,
      no: "02",
      title: "Documentation Research",
      text: `Understanding just one level deeper ...`,
    },
    {
      id: 3,
      no: "03",
      title: "Timeline Driven Development",
      text: `Understanding the programming triangle ...`,
    },
    {
      id: 4,
      no: "04",
      title: "Web sockets",
      text: `Real time updates for users through websockets ...`,
    },
    {
      id: 5,
      no: "05",
      title: "AWS",
      text: `Unerstanding the Amazon Web Services ecosystem ...`,
    },
    {
      id: 6,
      no: "06",
      title: "CI/CD Services",
      text: `Deployment using various services and differing ENVs ...`,
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
            <div className="tokyo_tm_read_more">
              <a id={item.id} href="#" onClick={toggleModal}>
                <span>Read More</span>
              </a>
            </div>
          </div>
        </li>
      ))}

      {/* START MODAL */}
      <Modal
        isOpen={isOpen}
        id="1"
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button id="1" className="close-modal" onClick={toggleModal}>
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
                    backgroundImage: "url(assets/img/portfolio/React_Banner.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                {/* <div className="extra">
                  <p className="date">


                  </p>
                </div> */}
                <h3 className="title">
                  Web Development
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    Webdev is a constantly evolving discipline. There's new frameworks, framework upgrades, and new libraries every moment. For me, learning
                    to embrace the constant change helped me learn the underlying programming patterns in webdev. 

                  </p>
                  <p>
                    This means, reading documentation, collaborating with others, and poking around new websites for myself. There's multiple
                    ways of making great webpages for the end-user, and the best implementation will depend on the team and the job. 

                  </p>
                  <p>
                    As a result, while I have the most practice in React and its hooks, it hasn't stopped me from exploring other frameworks, for instance, Angular and their new signals.
                    I believe that learning to be flexible and adaptable is especially vital in the webdev field. Frameworks often give us a lot of convenience, but 
                    it's important to not let them become crutches for our programming. 
                  </p>
                  {/* <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div> */}
                  {/* END QUOTEBOX */}
                  {/* <p>
                    Pretend everything is new and that you haven’t seen it
                    before, and then you will be free to notice the leading
                    lines, the places where one edge meets another in delightful
                    geometric harmony, and how the ordinary things in the
                    kitchen are transformed when the light is on or off.
                  </p> */}
                  {/* <p>
                    The trick here is to look slowly, and then look again. Take
                    the time to look in detail and to look at the same thing
                    from different angles, with different light, long lenses and
                    wide lenses. Then move to the left a bit. You may never feel
                    the need to leave the house again.
                  </p> */}
                </div>
                {/* END DESCRIPTION */}
                {/* <div className="news_share">
                  <span>Share:</span>
                  <Social />

                </div> */}
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}



      {/* START MODAL */}
      <Modal
        id="2"
        isOpen={isOpen2}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button id="2" className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div> */}
              {/* END IMAGE */}
              <div className="details">
                {/* <div className="extra">
                  <p className="date">
                    By <a href="#">Alex Watson</a>
                    <span>05 April 2021</span>
                  </p>
                </div> */}
                <h3 className="title">
                  Documentation Research
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    A lot of the coolest magic tricks have some manual somewhere..
                  </p>
                  <p>
                    Reading documentation was a skill I learned early on in my career. Aside from just just programming, 
                    reading the manuals is an important step in mastering our tools. This point is sharper as our tools become more complex. 

                  </p>
                  <p>
                    I frequently read the newest updates on MDN or if I watch a demo, I always make sure to look at some documentation as well. 
                    A lot of programming is about abstracting different pieces of logic, and sometimes the only way to step down from that is to read the documentations. 
                  </p>
                  {/* <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div> */}
                  {/* END QUOTEBOX */}
                  <p>
                    The trick is to be humble and understand the collaborative nature of programming and software engineering. 
                    There will always be other people smarter than me who are making tools in ways I never thought of, so reading
                    their notes they left behind is a good first step to following their footsteps. 
                  </p>
                  
                </div>
                {/* END DESCRIPTION */}
                {/* <div className="news_share">
                  <span>Share:</span>
                  <Social />
                  {/* END SOCIAL SHARE
                </div> */}
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}


      {/* START MODAL */}
      <Modal
        isOpen={isOpen3}
        id="3"
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button id="3" className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div> */}
              {/* END IMAGE */}
              <div className="details">
                {/* <div className="extra">
                  <p className="date">
                    By <a href="#">Alex Watson</a>
                    <span>05 April 2021</span>
                  </p>
                </div> */}
                <h3 className="title">
                  Development Time Planning
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    My experience with coding is in a triangle between velocity, adaptability/reusability, and optimization.
                  </p>
                  <p>
                    For me, the best way to approach a project will fall somewhere in that triangle, and being deliberate about the general position inside the triangle will help me 
                    vizualize a more accurate development timeline.
                  </p>
                  <p>
                    My approach to timeline estimations is to stick to realistic development timeblocks (ie. usually no more than 2 weeks planning at a time), and to reassess and reevaluate my pace when I get new experience. 
                    Throughout my time working, this has led me to be punctual and communicative to my PMs about any updates. Being deliberate about my development pacing lets me 
                    alert my teammates as soon as I notice any roadblocks.
                  </p>
                  {/* <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div> */}
                  {/* END QUOTEBOX */}
                  {/* <p>
                    Pretend everything is new and that you haven’t seen it
                    before, and then you will be free to notice the leading
                    lines, the places where one edge meets another in delightful
                    geometric harmony, and how the ordinary things in the
                    kitchen are transformed when the light is on or off.
                  </p>
                  <p>
                    The trick here is to look slowly, and then look again. Take
                    the time to look in detail and to look at the same thing
                    from different angles, with different light, long lenses and
                    wide lenses. Then move to the left a bit. You may never feel
                    the need to leave the house again.
                  </p> */}
                </div>
                {/* END DESCRIPTION */}
                {/* <div className="news_share">
                  <span>Share:</span>
                  <Social />
                  {/* END SOCIAL SHARE 
                </div> */}
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}


      {/* START MODAL */}
      <Modal
        isOpen={isOpen4}
        id="4"
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button id="4" className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div> */}
              {/* END IMAGE */}
              <div className="details">
                {/* <div className="extra">
                  <p className="date">


                  </p>
                </div> */}
                <h3 className="title">
                  Websocket Approach
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    Programming live updates
                  </p>
                  <p>  
                    The main question is, "how do we keep the end-user up-to-date with new database changes without
                    having them call our backend?" 
                    To solve this, we program a websocket that creates a 
                    channel that will listen for changes. This means we essentially have 3 baseline 
                    requirements to programming a functional websocket for our application.
                  </p>
                  <p>
                    <ul style={{marginLeft: "20px"}}>
                      <li>
                        A way to establish a connection/channel
                      </li>
                      <li>
                        What do with the data coming to the user from the connection/channel
                      </li>
                      <li>
                        How and when do we send data from our backend through the connection/channel
                      </li>
                    </ul>
                  </p>
                  <p>
                    The technical details will vary between different projects and frameworks, but simplifying websockets this way makes it approachable in most contexts!
                  </p>
                  {/* <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div> */}
                  {/* END QUOTEBOX */}
                  {/* <p>
                    Pretend everything is new and that you haven’t seen it
                    before, and then you will be free to notice the leading
                    lines, the places where one edge meets another in delightful
                    geometric harmony, and how the ordinary things in the
                    kitchen are transformed when the light is on or off.
                  </p>
                  <p>
                    The trick here is to look slowly, and then look again. Take
                    the time to look in detail and to look at the same thing
                    from different angles, with different light, long lenses and
                    wide lenses. Then move to the left a bit. You may never feel
                    the need to leave the house again.
                  </p> */}
                </div>
                {/* END DESCRIPTION */}
                {/* <div className="news_share">
                  <span>Share:</span>
                  <Social /> */}
                  {/* END SOCIAL SHARE */}
                {/* </div> */}
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}

      {/* START MODAL */}
      <Modal
        isOpen={isOpen5}
        id="5"
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button id="5" className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div> */}
              {/* END IMAGE */}
              <div className="details">
                {/* <div className="extra">
                  <p className="date">


                  </p>
                </div> */}
                <h3 className="title">
                  Understanding AWS
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    AWS has an overwhelming amount of services and tools, which makes it 
                    easy to get lost and frustrated. 
                    Taking advantage of this corporate ecosystem necessitates a few approaches. 
                  </p>
                  <p>
                    I believe understanding that it's the most popular cloud platform that lowers the barrier for entry helps 
                    us as developers. 
                  </p>  
                  <p>
                    It's a new way of understanding the IT infrastucture, so navigating the various services as a 
                    developer and consumer at the same time makes the frustrations more tolerable, and even fun to explore -- like walking into a megastore for the first time. 
                  </p>
                  {/* <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div> */}
                  {/* END QUOTEBOX */}
                  {/* <p>
                    Pretend everything is new and that you haven’t seen it
                    before, and then you will be free to notice the leading
                    lines, the places where one edge meets another in delightful
                    geometric harmony, and how the ordinary things in the
                    kitchen are transformed when the light is on or off.
                  </p>
                  <p>
                    The trick here is to look slowly, and then look again. Take
                    the time to look in detail and to look at the same thing
                    from different angles, with different light, long lenses and
                    wide lenses. Then move to the left a bit. You may never feel
                    the need to leave the house again.
                  </p> */}
                </div>
                {/* END DESCRIPTION */}
                {/* <div className="news_share">
                  <span>Share:</span>
                  <Social /> */}
                  {/* END SOCIAL SHARE */}
                {/* </div> */}
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}            


      {/* START MODAL */}
      <Modal
        isOpen={isOpen6}
        id="6"
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button id="6" className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div> */}
              {/* END IMAGE */}
              <div className="details">
                {/* <div className="extra">
                  <p className="date">


                  </p>
                </div> */}
                <h3 className="title">
                  CI/CD Services
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    Always looking for upgrades and making sure it doesn't break through using testing tools.
                  </p>
                  <p>
                    The technologies and collaborations never stop, which means updates and improvements never stop. 
                    This further means that developers need to balance constant updates with constant uptime.
                  </p>
                  <p>
                    In my project experience, this means that during development, it's important to be aware of your different environemnts. 
                    Specifically in how certain microbenchmarks may be great in development, but garbage collection can result in poor production performance.
                    As a result, I am always making sure I read about the different CI/CD services and how they operate, as well as keeping in mind the different angles
                    that users may interact with the product. Benchmarking and developing tests in that context has always been more accurate and meaningful. 
                  </p>
                  {/* <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div> */}
                  {/* END QUOTEBOX */}
                  {/* <p>
                    Pretend everything is new and that you haven’t seen it
                    before, and then you will be free to notice the leading
                    lines, the places where one edge meets another in delightful
                    geometric harmony, and how the ordinary things in the
                    kitchen are transformed when the light is on or off.
                  </p>
                  <p>
                    The trick here is to look slowly, and then look again. Take
                    the time to look in detail and to look at the same thing
                    from different angles, with different light, long lenses and
                    wide lenses. Then move to the left a bit. You may never feel
                    the need to leave the house again.
                  </p> */}
                </div>
                {/* END DESCRIPTION */}
                {/* <div className="news_share">
                  <span>Share:</span>
                  <Social /> */}
                  {/* END SOCIAL SHARE */}
                {/* </div> */}
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}



    </>
  );
};

export default Services;
