import microsoft from "../assets/img/10005.png"
import netzero from "../assets/img/10004.png"
import facebook from "../assets/img/facebook.svg"
import instagram from "../assets/img/instagram.svg"
import linkd from "../assets/img/linkd.svg"
import '../Allcss/Footer.css'


import Modal from 'react-modal';
import React, { useState } from 'react';
import { Contact } from "./Contact"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
export const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      width: '75%',
      height: '75%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
   };
   const closeButtonStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'red',
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '1px',
    right: '10px',
  };
 
  return (
    
     <footer>
  <div className="container">
    <div className="footer-top">
      <div className="row">
        <div className="col-md-6 col-lg-3 about-footer">
      
          <ul>
            <li>
         <a href="https://appsource.microsoft.com/de/marketplace/partner-dir/02c3b6f4-80ea-4d7e-819d-7ea15e2d3bbf/overview?exp=ubp8" target="_blank">
          <img src={microsoft} alt="" /></a>  
            </li>
            <li>
          <a href="https://tree-nation.com/de/profil/auswirkung/oaase#co2" target="_blank">
            <img className="netzero" src={netzero} alt="" /></a>
           
              <br />
            
            </li>
          </ul>
          <button className="btn red-btn" onClick={openModal}>
          {t('footer.make')} 
          </button>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <Contact/>
       <button onClick={closeModal} style={closeButtonStyles}>
          &#10060;
        </button>
      </Modal>
        </div>
        <div className="col-md-6 col-lg-4 open-hours">
          <div className="footer-title">
            <h2>{t('footer.talk')} </h2>
           
          </div>
         
         
          <div className="footer-logo">
            <table>
              <tbody>
                <tr>
                 
               
                  <td>
                  <a href="https://www.facebook.com/oaasecom" target="_blank">
                    <img src={facebook} className="footer-social" /></a>
                  </td>
                  <td>
                  <a href="https://www.instagram.com/oaaseofficial/" target="_blank">
                    <img src={instagram} className="footer-social" /></a>
                  </td> 
                  <td>
                  <a href="https://www.linkedin.com/company/oaasecom/" target="_blank">
                    <img src={linkd} className="footer-social" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       
        <div className="col-md-6 col-lg-4 open-hours">
          <div className="footer-title">
            <h2>{t('footer.nmbr')} </h2>
           
          </div>
          <table className="tablee">
            <tbody>
              <tr>
                <td>
                  <i className="far fa-clock" />
                  {t('footer.swiss')} 
                </td>
                <td>+41 79 221 14 14</td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-clock" />
                  Tunisia.
                </td>
                <td>+216 24 372 574</td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-clock" />
                  Dubai.
                </td>
                <td>+971 52 268 1064</td>
              </tr>
             
            </tbody>
          </table>
         
         
        </div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <div className="row">
        <div className="col-sm-4">
        
       
          <NavLink  to="/AGB" className="mx-6">{t('footer.agb')} </NavLink> 
  
<NavLink  to="/Impressum" className="mx-6">{t('footer.Impressum')} </NavLink> 

<NavLink  to="/Datenschutzerklärung" className="mx-6">{t('footer.Datens')}</NavLink> 

        </div>
        <div className="col-sm-8">
          <p>2023 © OAASE Suisse GmbH – We do DIGITAL things. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
   
  )
}
