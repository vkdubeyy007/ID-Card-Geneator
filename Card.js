import React, { useCallback } from 'react'
import './Styles/Card.css'
import logo from '../Images/bmilogo.png'
import dummy from '../Images/dummy.png'
import BMI from '../Images/BMI.svg'
import BMI_Wapp from '../Images/BMI_WtsApp.png'
import qrcode from '../Images/qrcode.png'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';

const Card = ({ name, desig, year, blood, email, num, img, id }) => {

    const handleCaptureClick = useCallback(async () => {
        const canvas = await html2canvas(document.getElementById("cardContent"));
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'BMI__Card.png', 'image/png');
    }, []);


    return (

        <>

            {/* FRONT SIDE OF THE ID */}

            <div className="container" id='cardContent'>
                <div class="font">
                    <div className='compLogo'>
                        <img src={logo} srcset="" />
                    </div>
                    <div class="top">
                        <img src={img} id='imgDisplayed' alt="employee profile" />
                    </div>
                    <div class="content">
                        <div className="nameDesig">
                            <p id='name'>{name}</p>
                            <p id='field'> {desig}</p>
                            <p id='id'> {id} </p>
                        </div>
                        <ul className='details'>
                            <li className='capitalize'> Contact : <span id='num'> {num} </span> </li>
                            <li className='capitalize'>Mail me @<span id='email'> {email} </span></li>
                            <li className='capitalize' > Blood group : <span id='blood'>{blood}</span> </li>
                            <li className='capitalize'>Date of Joining :<span id='year' > {year} </span></li>

                        </ul>
                    </div>
                </div>

                {/* BACK SIDE OF THE ID */}

                <div className="back_ID" id='backSide'>
                    <div className="header_back">
                        <p>CoverKarlo Pvt. Ltd.</p>
                    </div>
                    <hr className='hr' />
                    <div className='compInfo'>
                        <p> Contact : +91 8282820672 </p>
                        <p>Email : sales@bookmyinsurance.com</p>
                    </div>
                    <div className='qr_container' >
                        <p>Visit our Website</p>
                        <img src={qrcode} alt="" srcset="" />
                    </div>
                    <hr className='hr' id='bottomHr' />
                    <div className='add' >
                        <p> Bunglow No: 124-25, 2nd Flr.
                            Behind Gorai Bridge Bus Stop. Gorai,
                            Borivali West, Mumbai, Maharashtra 400092</p>
                    </div>
                </div>


                <a href="#" onClick={handleCaptureClick}><button id='down' > Download </button></a>
            </div>

        </>
    )
}

export default Card

{/* <div className="card" id="result">
        <header id='head'>
            <div className='compLogo'>
                <img src={logo} alt="" srcset="" />
            </div>
        </header>

        <div className="content">
            <img src="" id='imgDisplayed' />
            <ul>
                <li id='name' ></li>
                <li id='designtaion' ></li>
                <li id='year' ></li>
                <li> Blood group : <span id='blood'></span> </li>
                <li> Mob : <span id='num'></span> </li>
            </ul>
        </div>
    </div> */}
