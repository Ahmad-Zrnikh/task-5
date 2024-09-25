import { useState } from "react";
import "./NavBar.css"
import { useRef } from "react";


export default function NavBar() {
    const [open, setopen] = useState(false);
const OpenMenu = useRef();
const nav = useRef();
    const toggleMenu = () => {
        setopen(!open);
         OpenMenu.current.classList.toggle("open");
         nav.current.classList.toggle("open");
    }
    
  return (
    <div className="navBar" ref={nav}>
        <div className="logo">
            <img className="firstimage" src="images/Group 41.png" alt="" />
            <img className="secondimage" src="images/Group 42.png" alt="" />
        </div>
      
            <ul className="links">
                <a href="#"><li>Home</li></a>
                <a href="#about"> <li>About</li></a>
                <a href="#service"><li>Service</li></a>
                <a href="#property"><li>New Property</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
       <button className="loginBtn">Login</button>


       {!open &&<button className="burger" onClick={toggleMenu}><img src="images/Group.png" alt="" /></button>}
       {open &&<button className="burger" onClick={toggleMenu}><img src="images/Group (1).png" alt="" /></button>}
       <div className= "menu " ref={OpenMenu}> <ul className="links-menu">
                <a  href="#"><li className="active">Home</li></a>
                <a href="#about"> <li>About</li></a>
                <a href="#service"><li>Service</li></a>
                <a href="#property"><li>New Property</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
            <button className="loginBtn-menu">Login</button>
            </div>
    </div>
  )
}
