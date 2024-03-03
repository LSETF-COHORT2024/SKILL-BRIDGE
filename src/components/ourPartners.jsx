import React from "react";
import "../css/components/ourPartners.css";
import "../css/styleguide.css";


const Logo = ({ cloudinaryUrl, alt, link, ...props }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="logo-link"
  >
    <img src={cloudinaryUrl} alt={alt} {...props} className="logo" />
  </a>
);

const OurPartners = () => {
  const cloudinaryUrls = {
    zapier: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708546237/E-Learning%20Educational/Card_2_fli5uu.png",
      link: "https://www.zapier.com",
    },
    spotify: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708546236/E-Learning%20Educational/Card_3_cbzpfl.png",
      link: "https://www.spotify.com",
    },
    zoom: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708376302/E-Learning%20Educational/Card_gmvfj1.png",
      link: "https://www.zoom.us",
    },
    amazon: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708546237/E-Learning%20Educational/Card_4_eztszo.png",
      link: "https://www.amazon.com",
    },
    adobe: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708546237/E-Learning%20Educational/Card_5_inpaax.png",
      link: "https://www.adobe.com",
    },
    notion: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708546236/E-Learning%20Educational/Card_6_oziv6a.png",
      link: "https://www.notion.so",
    },
    netflix: {
      url: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708376305/E-Learning%20Educational/Card_1_if6q92.png",
      link: "https://www.netflix.com",
    },
  };

  return (
    <div className="container">
      <div className="column">
        {Object.keys(cloudinaryUrls).map((key) => (
          <div className="logo" key={key}>
            <Logo
              cloudinaryUrl={cloudinaryUrls[key].url}
              alt={key}
              link={cloudinaryUrls[key].link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
