import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
    const sidebarStyle = {
      display: 'flex',
      gap: '3.4rem',
      rotate: '90deg',
      transform: 'rotate(180deg)',
      position: 'fixed',
      top: '18rem',
      left: '-8.8rem', 
    }
  
    const iconStyle = {
      rotate: '90deg',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      height: '100%',
     
    }
  
    return (
      <div style={sidebarStyle} className="justify-center flex gap-8  text-stone-400">
        <a href="mailto:Okubo.mae@gmail.com" target="_blank" ><AiFillMail className="hover:bg-yellow text-3xl inline-block mx-2 " style={iconStyle} /></a>
        <a href="https://github.com/Maeokubo" target="_blank" ><AiFillGithub className=" hover:bg-yellow text-3xl inline-block mx-2" style={iconStyle} /></a>
        <a href="https://www.linkedin.com/in/hazuki-okubo-8a8148262/" target="_blank" ><AiFillLinkedin className=" hover:bg-yellow text-3xl inline-block mx-2" style={iconStyle} /></a>
        <a href="https://www.instagram.com/okubo___/?igsh=MXRvdDJ2OGttMGZoYQ%3D%3D&utm_source=qr" target="_blank" ><AiFillInstagram className=" hover:bg-yellow text-3xl inline-block mx-2" style={iconStyle} /></a>
      </div>
      
    )
}

export default Contact
