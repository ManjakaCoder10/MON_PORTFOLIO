import React, { useEffect, useState } from 'react';


import RiseLoader from "react-spinners/RiseLoader";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import { TypeAnimation } from 'react-type-animation';
import { Zoom,Bounce  } from "react-awesome-reveal";
import { MotionAnimate } from 'react-motion-animate'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import image1 from "./image/Profil.jpg"
import image2 from "./image/about.jpg"
import './App.css';

import'./image.css';
import'./about.css';
import'./Skill.css';
import pdfFile from './cv/cv.pdf';



const App = () => {
  const [loading, setLoading] = useState(true);
   const[Xposiotion,setXposition]=useState({position1:6,position2:-100});
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

   useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <=600){
     setXposition({position1:6,position2:-60});
    
      }
      else{
        setXposition({position1:100,position2:-60});
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Message envoyé.", {
          position: 'top-center',
          autoClose: 1500,
          className: 'toast-custom',
          bodyClassName: 'toast-body-custom',
          onClose: () => {
            console.log("hello");
          }
        });
      } else {
        toast.error("Erreur lors de l'envoi du message.", {
          position: 'top-center',
          autoClose: 1500,
          className: 'toast-custom',
          bodyClassName: 'toast-body-custom',
        });
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message.", {
        position: 'top-center',
        autoClose: 1500,
        className: 'toast-custom',
        bodyClassName: 'toast-body-custom',
      });
    }
  };


  return (
    <div className={`App ${loading ? 'loading' : ''} `}>
      {loading ? (
    
    <div className="loader-container bg-light" style={{ paddingTop: '1cm', textAlign: 'center', backgroundColor: '#D5E7F8', padding: '40px', borderRadius: '10px', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.1)', maxWidth: '800px', margin: 'auto' }}>
    <RiseLoader className='RiseLoader' size={10} color="#1C27CA" />
    <p className="para" style={{ margin: '20px 0', fontSize: '1.2em', color: '#555' }}></p>
    <TypeAnimation className='TypeAnimation' 
    
        style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontFamily: 'Arial, sans-serif', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}
        sequence={[
            `BIENVENUE SUR MANJAKA_APP !\n DÉCOUVREZ MES PROJETS, MON PARCOURS ET \n N'HÉSITEZ PAS À ME CONTACTER POUR DISCUTER DE COLLABORATIONS.`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            10000,
            '',
        ]}
        repeat={Infinity}
    />
</div>

   
      ) : (
        
 <div id="profil">
   <ToastContainer/>
<nav className="navbar bg-body-tertiary fixed-top" >
  <div className="container-fluid" style={{alignItems:'center'}}> 
  <h2 className="logo" style={{fontSize:'30px'}}>
  MANJAKA_APP
  </h2>
    <nav>
  
  <ul className='nav-links'>
    <li><a href='#profil'>Accueil</a></li>
    <li><a href='#about'>A propos</a></li>
    <li><a href='#skill'>Compétences</a></li>
    <li><a href='#footer'>Contact</a></li>

    


  </ul>
 
</nav>

    <button className="navbar-toggler buttonOffcanvas"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end offcanavascss" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">

        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
  
      <div className="offcanvas-body">
        
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3  d-lg-flex" style={{alignItems:'center'}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#profile">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">A propos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#skill">Compétences</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#footer">Contact</a>
          </li>
        </ul>
   
     
      </div>
    </div>
  </div>
</nav>

<MotionAnimate
                        animation='fadeInUp'
                        reset={true}
                        distance={140}
                        delay={1}
                        speed={1}>
<div id='profile' style={{marginTop:'4.5cm'}}>
  <div className="section_pic-container box "style={{maxWidth:"50%"}}>
  <img src={image1} className="image1" alt="" style={{zIndex:'3',width:'9cm',height:'9cm',objectFit:'contain'}} />
  </div>
  <div className="profile_section2"style={{display:'block' ,alignItems:'center',justifyContent:'center',textAlign:'center'}}>
  <p className="section_text_p1">Salut,Je suis</p>
  <h1 className="title">Fanomezantsoa Manjaka</h1>
  <p className="section_text_p2">Developpeur Fullstack Js/Java</p>
<div className="btn-container">
<a href={pdfFile} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-light"  style={{marginLeft:'0.3cm'}}>Dowload CV</button></a>
<button type="button" className="btn btn-secondary"style={{marginLeft:'0.3cm'}} ><a href='#footer' style={{textDecoration:'none'}}>Contact Info</a></button>

</div>
<div id="social-container" style={{padding:'0.5cm'}}>
  <a href='https://www.linkedin.com/in/manjaka-tsilavina-fanomezantsoa-7ba5a0285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a>
<a href='https://github.com/ManjakaCoder10'><svg  style={{marginLeft:'0.3cm'}}xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></a>

       
</div>
  
  
  
  
  </div>
</div>  
</MotionAnimate>
<p id='about'></p>
<div id='About' style={{marginTop:'3cm' ,justifyContent:"center", textAlign:"center"}}>
 <div >
  <h1>A propos </h1>
  </div>
<div className="body-about" style={{display: 'flex',marginLeft:"1cm"}}>
  <div>
    
<MotionAnimate
                        animation='scrollOpacity'
                        ease={[0.2,0.2,0.2,1]}
                        scrollPosition={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,2]}
                        >
  <img  id='ImageAbout'src={image2} className="image2" style={{width:'8cm' , height:'10cm',objectFit:'contain'} } alt="" />
  </MotionAnimate>
  </div>
  <MotionAnimate
                        animation='scrollPosition'
                       
                        xPos={[Xposiotion.position1,Xposiotion.position2]}
                       
                        
                        >
  <div className="Card-content">

 
  <div className="card2" style={{display:'flex',padding:"1cm"}}>

<div className="card border-secondar" style={{Width:'auto' ,maxHeight:'4.5cm'}}>

  <div className="card-body text-secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
</svg>
    <h5 className="card-title">Expérience</h5>
    <p className="card-text">Stagiaire pendant 3 mois au sein de la diretion regionale d' impôt fianarantsoa</p>
  </div>
</div>
<div  className="card border-secondary card3" style={{Width:'auto',maxHeight:'4.5cm', marginLeft:'0.4cm'}}>
 
  <div className="card-body text-secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
    <h5 className="card-title">Education</h5>
    <p className="card-text">Actuellement étudiant à l Ecole nationale d informatique fianarantsoa</p>
  </div>
 
</div>


</div>

<div >
<p>Je suis un étudiant à l'ENI et un développeur fullstack JavaScript. Je crée des applications web et desktop avec Java et j'ai également des compétences de base en développement PHP. Passionné par les technologies et toujours prêt à apprendre, je suis motivé à contribuer à des projets innovants et à élargir mes compétences professionnelles.</p>

</div>

</div>
</MotionAnimate>

</div>















<div  id="skill" style={{marginTop:'2cm'}}>
<div className="skill-titre">
  <h1>Compétences</h1>
</div>

<div className="card-skill" style={{marginTop:'1cm'}}>


<div className="card border-secondar card-skill1 Un" style={{width:'auto',maxHeight:'10cm'}} >
<Bounce >
  <div className="card-body text-secondary ">
    <div>
    <h3>Frontend skill</h3>
    </div>
    <div className='card-body-skill'>
    <div className="card-skill-gauche">
      <div className="ensemble">
      <div className="contenant1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">HTML</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Avancé</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">CSS</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Avancé</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">Boostrap</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Avancé</p>
  </div>
</div>
    </div>



    <div className="card-skill-droite">
    <div className="ensemble">
      <div className="contenant1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">JavaScript</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Moyen</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">React</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Moyen</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">Jquery</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Avancé</p>
  </div>
</div>
    </div>
    

    </div>

  </div>
  </Bounce>
</div>


{/* deuxième */}




<div className="card border-secondar card-skill1 Deux" style={{width:'auto',maxHeight:'10cm' ,marginLeft:'2cm'}} >
<Bounce>
  <div className="card-body text-secondary ">
    <div>
    <h3>Backend skill</h3>
    </div>
    <div className='card-body-skill'>
    <div className="card-skill-gauche">
      <div className="ensemble">
      <div className="contenant1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">NodeJS</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Moyen</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">Express</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Avancé</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">PHP</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Avancé</p>
  </div>
</div>
    </div>



    <div className="card-skill-droite">
    <div className="ensemble">
      <div className="contenant1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">Mysql</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Intermediaire</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">Postgress</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Debutant</p>
  </div>
  </div>
  <div className="ensemble">
  <div className="contenant1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
    <h5 className="card-title">R</h5>
  </div>
  <div className="contenant2">
    <p className="card-text">Moyen</p>
  </div>
</div>
    </div>
    
 
    </div>
   
  </div>
  </Bounce>
</div>



</div>








</div>







<div id='contact' style={{justifyContent:'center',marginTop:'2.5cm'}}>
  <div>
  <h1> Contact</h1>
</div><Zoom>
<div  style={{marginTop:'0.5cm'}}>
  <p>Pour plus d information n hésitez pas à me contacter</p>
</div>
<form onSubmit={handleSubmit}>
  <div className="form-email-text" style={{ display: 'flex' }}>
    <input 
      type="text" 
      className="form-control control2" 
      id="NomForm" 
      placeholder="Nom" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      required 
    />
    <input 
      type="email" 
      className="form-control control2" 
      style={{ marginLeft: '0.3cm' }} 
      id="EmailForm" 
      placeholder="Email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      required 
    />
  </div>
  
  <div>
    <input 
      type="text" 
      className="form-control control1" 
      id="ObjectForm" 
      placeholder="Object" 
    />
    <input 
      type="text" 
      className="form-control control1" 
      id="DescriptionForm" 
      placeholder="Description" 
      value={message} 
      onChange={(e) => setMessage(e.target.value)} 
      required 
    />
    <button 
      type="submit" 
      id="envoyez" 
      className="form-control control1 btn btn-primary"
    >
      Envoyez
    </button>
  </div>
  <ToastContainer />
</form>


</Zoom>

</div>
</div>
<footer id='footer' className="footer" style={{marginTop:'1.5cm'}}>

  <div className="bg-light py-5 py-xl-8 py-xxl-9 border-top border-light">
    <div className="container overflow-hidden">
      <div className="row gy-5 gy-md-0 align-items-md-center">
        <div className="col-xs-12 col-md-7 order-1 order-md-0">
          <div className="copyright text-center text-md-start">
            &copy; 2024. All Rights Reserved.
          </div>
          <div className="credits text-secondary text-center text-md-start mt-2 fs-8">
            Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">Manjakadev</a> with <span class="text-primary">&#9829;</span>
          </div>
        </div>

        <div className="col-xs-12 col-md-5 order-0 order-md-1">
          <div className="social-media-wrapper">
            <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
              <li className="me-3">
                <a href="mailto:fanomezantsoamanjakatsilavina@gmail.com" className="link-dark link-opacity-75-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
                </a>
              </li>
              <li className="me-3">
                <a href="https://www.linkedin.com/in/manjaka-tsilavina-fanomezantsoa-7ba5a0285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="link-dark link-opacity-75-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
              </li>
              <li className="me-3">
                <a href="https://web.facebook.com/manjaka.fanomzantsoa" className="link-dark link-opacity-75-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </footer>
</div> 

      )}
    </div>
  );
};

export default App;
