import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Header = () => {

  const [text] = useTypewriter({
    words: ["This project is based on react js.","Created by Rohit Singh."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className='header'>
        <Link to="/" className='title'>Welcome Quizzy</Link>
        <small><span>{text}</span>
        <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor="#ff014f"
        /></small>
        <hr className='divider'/>
    </div>
  )
}

export default Header