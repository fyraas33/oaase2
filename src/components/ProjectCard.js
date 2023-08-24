import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDesktop, faRocket,faChartPie } from '@fortawesome/free-solid-svg-icons';
import rockett from '../assets/img/rocket.svg'
import desktop from '../assets/img/desktop.svg'
import chart from '../assets/img/chart.svg'

export const ProjectCard = ({title, content, icon }) => {
  let selectedIcon;
  switch (icon) {
    case 'chart':
      selectedIcon = chart ;
      break;
    case 'desktop':
      selectedIcon = desktop ;
      break;
    case 'rocket':
      selectedIcon = rockett;
      break;
    default:
      selectedIcon = desktop;
      break;
  }
  
  return (
    <div className="cardd">
      
    <div className="icon-container">
       <img src={selectedIcon} alt="" />
      </div>
      <h2 className='cardtitle'>{title}</h2>
      <hr /> 
      <p>{content}</p>
  
  </div>
    
  )
}
