import React from "react";
import "../css/components/ourPartners.css"; // Import your external CSS file for styling

const Logo = ({ cloudinaryUrl, alt, ...props }) => (
  <img src={cloudinaryUrl} alt={alt} {...props} className="logo" />
);

const OurPartners = () => {
  const cloudinaryUrls = {
    zapier:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704777032/E-Learning%20Educational/79d8a704-c716-4ee0-baab-2c74c2472136_q1whih.png",
    spotify:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704777051/E-Learning%20Educational/be361ad1-cba1-46f3-ad5a-6e060421644a_v4o9ue.png",
    zoom: "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708376302/E-Learning%20Educational/Card_gmvfj1.png",
    amazon:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704777233/E-Learning%20Educational/4ff196b0-8eb8-4ad2-aa56-3675674528fc_ywszjw.png",
    adobe:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704777302/E-Learning%20Educational/f4711ed0-6c43-498c-8ea7-016d9f317875_ll8le1.png",
    notion:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704777329/E-Learning%20Educational/93a071ed-20a2-4042-855f-bc747a059f8d_qtutpz.png",
    netflix:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1708376305/E-Learning%20Educational/Card_1_if6q92.png",
  };

  return (
    <div className="container">
      <div className="column">
        {Object.keys(cloudinaryUrls).map((key) => (
          <div className="logo" key={key}>
            <Logo cloudinaryUrl={cloudinaryUrls[key]} alt={key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
