import StarsLeft from "../assets/Footer/stars-left.jpg";
import StarsRight from "../assets/Footer/stars-right.png";
import logoblackSoftw from "../assets/Footer/logoblackSoftw.jpg"
import './Footer.css'

const Footer = ({style }) => {
  return (
      <footer className="bg-black" style={style} >
        <div className="footer-div">
          <img src={StarsLeft} alt="stars" className="stars" />

          <div className="terms text-white text-center">
            <img src={logoblackSoftw} alt="logo-black" className="logo-black" />

            <ul className="d-flex justify-content-around align-items-center list-unstyled p-0">
              <li><a href="/privacy"><b>Privacy Policy</b></a></li>
              <li><a href="/terms"><b>Terms of Service</b></a></li>
              <li><a href="/career"><b>Contact us</b></a></li>
            </ul>
            <div className="container">
              <p className="text-center small ">© 2025 SOFTWARETICH. All rights reserved.</p>
            </div>
          </div>

          <img src={StarsRight} alt="stars" className="stars" />
        </div>
      </footer>
  );
};
export default Footer;