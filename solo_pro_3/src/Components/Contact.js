import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/contact-img.svg';


const Contact = () => {

    const [formDetails, setFormDetails] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });


    const [submitBtn, setSubmitBtn] = React.useState('send');
    const [status, setStatus] = React.useState({});
    console.table(formDetails);
    const handleformEnter = (field,value) => {
        setFormDetails(prevFormDetails => {
            return {
               ...prevFormDetails,
               [field]:value
            }
        })
    }

    const handleSubmit = () => {

    }
      
  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt='contact us' />
                </Col>
                <Col md={6}>
                    <h2>Get in touch</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='first name' onChange={(e) => handleformEnter('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.lastName} placeholder='last name' onChange={(e) => handleformEnter('lastName',e.target.value)}/>
                            </Col>
                       
                            <Col sm={12}  className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='Enter your mail' onChange={(e) => handleformEnter('email',e.target.value)}/>
                            </Col>
                            <Col sm={12} className='px-1'>
                            <input type='tel' value={formDetails.phone} placeholder='Enter Phone number' onChange={(e) => handleformEnter('phone',e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea row='6' value={formDetails.message} placeholder='message' onChange={(e) => handleformEnter('phone',e.target.value)} ></textarea>
                            <button type='submit' ><span>{submitBtn}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col><p className={status.success === false ? "danger" : "success"}>{status.message}</p></Col>
                            }
                        </Row>
                      
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;