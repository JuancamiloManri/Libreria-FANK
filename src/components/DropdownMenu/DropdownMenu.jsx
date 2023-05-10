import './DropdownMenu.css';
import React, {useState, useEffect, useRef} from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

const [open, setOpen] = useState(false);

let menuRef = useRef();

useEffect(() => {
    let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
        }      
    };

    document.addEventListener("mousedown", handler);

    return() =>{
    document.removeEventListener("mousedown", handler);
    }

});

const DropdownMenu = () => {
    return (
        <div className="App">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    <img src={user}></img>
                </div>
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <h3>The Kiet<br/><span>Website Designer</span></h3>
                    <ul>
                        <DropdownItem img = {user} text = {"Iniciar sesion"}/>
                        <DropdownItem img = {edit} text = {"Edit Profile"}/>
                        <DropdownItem img = {inbox} text = {"Inbox"}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu
