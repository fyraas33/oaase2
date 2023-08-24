import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import conatcti from "../assets/img/contacti.jpg"
import 'animate.css';
import { useTranslation } from "react-i18next";


export const Contact = () => {
  const { t } = useTranslation()
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t('contact.8'));
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setButtonText(t('contact.9'));
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message:t('contact.10')});
    } else {
      setStatus({ succes: false, message: t('contact.11')});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
           
             
                <img   className= "animate__animated animate__zoomIn"  src={conatcti} alt="Contact Us"/>
              
           
          </Col>
          <Col size={12} md={6}>
           
            
                <div className= "animate__animated animate__fadeIn" >
                <h2>{t('contact.1')}</h2>
                <p>{t('contact.2')}</p>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder={t('contact.3')} onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder={t('contact.4')} onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder={t('contact.5')} onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      
                      <select  value={formDetails.service} onChange={(e) => onFormUpdate('service', e.target.value)} required>
                      <option value="1">{t('contact.6')}</option>
                   <option value="Outsourcing">Outsourcing</option>
                     <option value="3D Visualization">3D Visualization</option>
                     <option value="Microsoft Solutions">Microsoft Solutions</option>
                   <option value="Web 3.0 Solutions">Web 3.0 Solutions</option>
                     <option value="Cybrance">Cybrance</option>
                     <option value="Digital Marketing">Digital Marketing</option>
                   </select>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder={t('contact.7')} onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}
