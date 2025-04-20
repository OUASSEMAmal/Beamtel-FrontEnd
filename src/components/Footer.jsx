import StarsLeft from "../assets/Footer/stars-left.jpg";
import StarsRight from "../assets/Footer/stars-right.png";
import LogoBlack from "../assets/Footer/logo-black.jpg";


const Footer = () => {
  return (
      <footer className="bg-black">
        <div className="footer-div d-flex justify-content-between align-items-center">
          <img src={StarsLeft} alt="stars" className="stars" />

          <div className="terms text-white text-center">
            <img src={LogoBlack} alt="logo-black" className="logo-black" />

            <ul className="d-flex justify-content-around align-items-center list-unstyled p-0">
              <li><a href="/privacy"><b>Privacy Policy</b></a></li>
              <li><a href="/terms"><b>Terms of Service</b></a></li>
              <li><a href="/contact-us"><b>Contact us</b></a></li>
            </ul>
            <div className="container">
              <p className="text-center small ">© 2025 SOFTAWERTICH. All rights reserved.</p>
            </div>
          </div>

          <img src={StarsRight} alt="stars" className="stars" />
        </div>
      </footer>
  );
};
export default Footer;