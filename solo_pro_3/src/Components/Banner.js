import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import spaceImg from '../assets/pngegg.png'

const Banner = () => {
  const[loopNum, setLoopNum] = React.useState(0);
  const[isDeleting, setIsDeleting] = React.useState(false);
  let rotate = ['Web Developer', 'Node Js Developer', 'React Developer'];
  const [text, setText] = React.useState('');
  const [delta, setDelta] = React.useState(300 - (Math.random() * 100 ));
  let period = 2000;

  React.useEffect(() => {

    let ticker = setInterval(() => {
        tick();
    },delta); 

    return () => clearInterval(ticker);
     
  // eslint-disable-next-line
  },[text])

  let tick = () => {
    let i = loopNum % rotate.length;
    let fullText = rotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta / 2);
    }

    if(!isDeleting && updatedText === fullText){ 
        setIsDeleting(true);
        setDelta(period);
    }else if  (isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
         setDelta(500);

    }
  }



  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>Hi! I am <span className='wrap'>{text} </span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <button>Let's Connect&nbsp;<ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={spaceImg} alt='header-img' className='space-img'/>

                     
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner