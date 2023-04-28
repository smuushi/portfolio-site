import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Michael Shih",
    designation: "Full Stack Web Developer",
    text: (
      <>
        <p>
          I am a software developer who frequently reads about open source projects on GitHub 
          and MDN to know more about the browser's environment. I have a strong 
          full-stack foundation with React and Ruby on Rails through my training at 
          AppAcademy's NYC campus, where I grew my debugging skills and fostered the knowledge 
          to start my own research into other frontier computer systems. 
        </p>

        <p>
          Im currently expanding my skillset to include C, AI models, and webscraping. 
        </p>

        <p>
          As a graduate from St. John's University with two degrees in Biology and Philosophy, 
          I've always been invested in researching practical wisdom and real solutions. This led 
          me to working in public health and further exposure to the technologies that influence and 
          empower consumer decisions. As as result, I discovered an avenue to segue my talent for 
          innovative problem solving and consumer empathy; now I can help develop those impactful technologies!
        </p>

        <p>
          Take a look at my projects to see my work with React, Redux, Ruby on Rails, Javascript, OpenAI, AWS, and websockets.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
