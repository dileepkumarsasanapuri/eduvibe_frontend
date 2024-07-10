import React from 'react';
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy;2024 Our EduVIBE platform . All rights are reserved.<br/>
                Made with <a href="" style={{color:"white"}}>eduvibe</a>
            </p>
            <div className="social-links">
                <a href="">
                    <FaFacebookF/>
                </a>
                <a href="">
                    <FaTwitter/>
                </a>
                <a href="">
                    <FaInstagram/>
                </a>

            </div>
        </div>
    </footer>
  )
}

export default Footer;