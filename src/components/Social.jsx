import React from "react";

const SocialShare = [
  { iconName: "twitter", link: "https://twitter.com/lysyshaky" },
  {
    iconName: "github",
    link: "https://github.com/Lysyshaky",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/yura-lysyshak-651b72190/",
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
