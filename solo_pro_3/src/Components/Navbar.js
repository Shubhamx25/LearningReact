import React from 'react';
import { Navbar,Container, Nav} from 'react-bootstrap';
import logoImg from '../assets/Logo-09 asthetic thumbnail.png';

const Navigbar = () => {
   
  const [activeLink, setActiiveLink] = React.useState('home');  
  const handleLinkActivation = (clickedLink) => {
    setActiiveLink(clickedLink);
  }


  const[scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    let onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true);
            console.log('scrolled')
        }else{
            setScrolled(false);
        }
    }
   
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll',onScroll);
  },[])

  



  return (
   
        <Navbar  expand="lg" className={scrolled ? 'scrolled navbar-container' : 'navbar-container'}>
            <Container>

                <Navbar.Brand href="#home">
                    <img src={logoImg} alt='logo' />  
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link href="#home" className={activeLink === 'home' ? 'navbar-link liactive' : 'navbar-link'} onClick={() => handleLinkActivation('home')} >
                        Home
                    </Nav.Link>

                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'navbar-link liactive' : 'navbar-link'} onClick={() => handleLinkActivation('projects')}>
                        Projects
                    </Nav.Link>

                    <Nav.Link href="#link" className={activeLink === 'links' ? 'navbar-link liactive' : 'navbar-link'} onClick={() => handleLinkActivation('links')}>
                        Links
                    </Nav.Link>
                    
                    
                </Nav>

                <span className='links-container'>
                    <div className='navbar-social-icons'>
                        <a href='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'><img src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png' alt='social media'/></a>
                        <a href='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'><img src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png' alt='social media'/></a>
                        <a href='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'><img src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Messenger_svg3-512.png' alt='social media'/></a>
                    </div>
                    <div>
                        <button>Lets Connect</button>
                    </div>
                </span>
               
                
                </Navbar.Collapse>
            </Container>
    </Navbar>
    
    
   
  )
}

export default Navigbar