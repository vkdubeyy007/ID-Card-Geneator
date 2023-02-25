import React from 'react'
import './Styles/Navbar.css';
import logo from '../Images/bmilogo.png'


const Navbar = () => {




  
  return (
    <>
        <div>
        <nav class="navbar_real">
      {/* <!-- LOGO --> */}
      <div class="logo">
      <a href="/"><img src={logo} alt="BMI Logo"/></a>   
        </div>

        <div class="title">
            <h2>ID-CARD-GENERATOR</h2>
        </div>
    </nav>
      
    </div>

      
    </>
  )
}

export default Navbar
