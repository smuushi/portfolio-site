import React from "react";

const SocialShare = [
  { iconName: "linkedin", link: "https://linkedin.com/in/michael-shih-smuushi/" },
  { iconName: "github", link: "https://github.com/smuushi"},
  {
    iconName: "instagram",
    link: "https://www.instagram.com/whereismyalbuterol",
  },
  { iconName: "twitter", link: "https://twitter.com/smuushi" },
  {
    iconName: "angellist",
    link: "https://wellfound.com/u/michael-shih-6",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
