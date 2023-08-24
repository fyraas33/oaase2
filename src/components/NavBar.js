import { useState, useEffect } from "react";
import logo1 from '../assets/img/logo1.png';
import {   NavLink} from "react-router-dom";

import cookies from 'js-cookie'
import Hamburger from "hamburger-react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const languages = [
  {
    code : 'en',
  },
  {
    code : 'fr',
  },
  {
    code : 'de',
  }
    ];



export const NavBar = () => {
 
  const [isOpen, setOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const currentLanguageCode = cookies.get('i18next') || 'en'
  
  const { t } = useTranslation()

  
  

 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

 
 

  return (
    
   
       
      <div className={`navvbar ${visible ? 'navvbar-visible' : 'navvbar-hidden'}`} >
        <link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>
  <input type="checkbox" name="" id="chk1" />
  
 
  <div className="logo">
  <img src={logo1} alt="Logo" />
  </div>
   
 
<ul >
  
    <li >
   
   <HashLink to="/#Home"> {t('navbar.home')}</HashLink>
     
    </li>
    
    
    <li>
      <div className="drpdown">
      
      <HashLink to="/#Services">   {t('navbar.services')} <i className="arrow down"></i> </HashLink >
      
      <div className="dropdown-content">
        <div className="drpcontent">
   <NavLink  to="/Outsourcing">Outsourcing</NavLink> 
   <NavLink   to="/3D-Visualization">{t('services.3d')}</NavLink > 
   <NavLink   to="/Microsoft-solutions">  Microsoft solutions</NavLink > 
   <NavLink   to="/Web-3.0-solutions">  {t('services.web3')}</NavLink > 
   <NavLink   to="/Cyberance">  Cyberance</NavLink > 
   <NavLink   to="/Digital-Marketing"> Digital Marketing</NavLink > 
    </div>
  </div>
      </div>
    </li>
    
    <li>
    <HashLink to="/#Solutions"> {t('navbar.solutions')}</HashLink>
    </li>
    <li>
    <HashLink to="/#About">{t('navbar.about')}</HashLink>
    </li>
    <li>
    <NavLink   to="/Insights"> insights</NavLink > 
    </li>
    <li>
      <NavLink to="/Contact" >{t('navbar.contact')}</NavLink>
    </li>
    {languages.map(({ code}) => (
                <li key={code}>
                  <a
                    
                    
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                   
                    {code}
                  </a>
                </li>
              ))}
  
  
  </ul>
        
  
  <div className="menu"  >
    <label htmlFor="chk1" >
    
    <Hamburger toggled={isOpen} toggle={setOpen} />
     
    </label>
  </div>
  </div>

    
  )
}