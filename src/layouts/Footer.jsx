import React from "react";

// CSS
import "../Styles/Layout.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-margin">
        <FooterHead />
        <hr className="border-grey mb-5" />
        <WhatWeDo />
        <ContactInfo />
        <Bottom />
      </div>
    </div>
  );
}
export const FooterHead = () => {
  return (
    <div className="footer-head">
      <div className="brand">
        <img
          src="https://i.imgur.com/UKGl5Qk.png"
          alt="Techalive logo"
          className="w-[50px] h-[50px]"
        />
        <div>
          <span className="text-pink font-bld">TECHALIVE</span>
        </div>
      </div>
      <div className="quick-link">
        <ul className="flex flex-row items-center justify-center">
          <li>BOOK AN APPOINTMENT</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>CONTACT US</li>
        </ul>
      </div>

      <div className="media-link">
        <i className="pi pi-facebook"></i>
        <i className="pi pi-twitter"></i>
        <i className="pi pi-instagram"></i>
        <i className="pi pi-telegram"></i>
      </div>
    </div>
  );
};

export const WhatWeDo = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-5 text-[10px] w-full">
      <p>SALES | </p>
      <p>REPAIRS | </p>
      <p>TRAINING | </p>
      <p>TECHNICAL CONSULTANCY </p>
    </div>
  );
};

export const ContactInfo = () => {
  return (
    <div className="footer-contact-info">
      <div className="contact-info">
        <div className="info">
          <i className="pi pi-phone"></i>
          <p>+234 805 0500 466</p>
        </div>
        <div className="info">
          <i className="pi pi-envelope"></i>
          <p>techalive.inc@gmail.com</p>
        </div>
        <div className="info">
          <i className="pi pi-map-marker"></i>
          <p>
            Shop 3, Phill Adeoye Complex Opposite Sabo Trailer Garage, Ogbomoso,
            Oyo State.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Bottom = () => {
  return (
    <div className="grid place-items-center mt-10 pb-3">
      <p className="italic text-pink">Technology in all spheres...</p>
      <div className="flex items-center gap-1">
        <p>Techalive </p>
        <b className="border border-grey rounded-full w-[20px] h-[20px] flex items-center justify-center">
          C
        </b>
        <p>2023</p>
      </div>
    </div>
  );
};
