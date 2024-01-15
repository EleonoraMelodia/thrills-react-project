import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

type FooterOptions = {
  name: string;
  link: string;
}[];

type FooterLinks = {
  [key: string]: FooterOptions;
};

const FooterItems = ({ links }: { links: FooterLinks }) => {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-20 p-10 md:grid-cols-5">
        {Object.keys(links).map((sectionName, index) => (
          <div key={index}>
            <h3 className="text-2xl mb-4">
              {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
            </h3>
            <ul>
              {sectionName === "social"
                ? links[sectionName].map((item, itemIndex) => (
                    <li className="text-white m-6" key={itemIndex}>
                      <a href="https://www.facebook.com/eleonora.melodia">
                        {item.name === "logo-facebook" && <FaFacebook />}
                      </a>
                      <a href="https://www.instagram.com/eleonora_melodia/">
                        {item.name === "logo-instagram" && <FaInstagram />}
                      </a>
                      <a href="https://www.linkedin.com/in/eleonora-melodia/">
                        {item.name === "logo-linkedin" && <FaLinkedin />}
                      </a>
                    </li>
                  ))
                : links[sectionName].map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
//footer icons missing!

export default FooterItems;
