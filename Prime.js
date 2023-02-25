import React, { useState } from 'react'
import axios from 'axios'
import './Styles/Prime.css';
import logo from '../Images/bmilogo.png'
import dummy from '../Images/dummy.png'
import Card from './Card';
import Navbar from './Navbar';
import ReactToPrint from 'react-to-print';

const Prime = () => {

    const [name, setName] = useState("")
    const [desig, setdesig] = useState("")
    const [year, setyear] = useState("")
    const [blood, setblood] = useState("")
    const [email, setemail] = useState("")
    const [num, setNum] = useState("")
    const [img, setImg] = useState();
    const [id, setid] = useState("")

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

    const syncName = () => {
        let name = document.getElementById("inName").value
        setName(name)
    }

    const syncDesig = () => {
        setdesig(document.getElementById("inField").value)
    }

    const syncId = () => {
        setid(document.getElementById("inId").value)
    }

    const syncYear = () => {
        setyear(document.getElementById("inYear").value)
    }

    const syncblood = () => {
        setblood(document.getElementById("inBlood").value)
    }

    const syncemail = () => {
        setemail(document.getElementById("inEmail").value)
    }

    const syncNum = () => {
        setNum(document.getElementById("inNum").value)
    }


    // async function postData(e) {
    //    e.preventDefault()
    //
    //      try {
    //        await axios.post("http://localhost:4000/post_data", {
    //      name, desig, year, blood, email, num, id
    //})
    //} catch (error) {
    //  console.log(error);
    // }
    // }





    return (
        <>
            {/* <Navbar /> */}
            <div className='back'  >
                <div className="form">
                    <form onSubmit={postData} method='POST' >

                        <h3>Please fill the form :</h3>

                        <label> Full name of the employee </label>
                        <input type="text" name="fullName" id="inName" onChange={(e) => syncName()} />

                        <label> Enter designtaion </label>
                        <input type="text" name="designation" id="inField" onChange={() => syncDesig()} />

                        <label> Enter Employee ID </label>
                        <input type="text" name="employeeId" id="inId" onChange={() => syncId()} />

                        <label> Enter contact number </label>
                        <input type="text" name="contactNo" id="inNum" onChange={() => syncNum()} />

                        <label> Enter blood group </label>
                        <input type="text" name="bloodGroup" id="inBlood" onChange={() => syncblood()} />

                        <label> Enter joining month and year </label>
                        <input type="text" name="joiningDate" placeholder='01/22' onChange={() => syncYear()} id="inYear" />

                        <label> Enter Email </label>
                        <input type="text" name="email" id="inEmail" onChange={() => syncemail()} />

                        <span id='uploadDescription'>Choose photo from your device</span>
                        <label for="file" className='upload' id='image' onChange={(e) => this.loadImage(e)}>Upload an Image</label>
                        <br />

                        <input type="file" name="" id="file" onChange={onImageChange} />

                        <button type='submit' id='preview'> Save </button>
                    </form>
                </div>

                < Card name={name} desig={desig} year={year} blood={blood} email={email} num={num} img={img} id={id} />
            </div>
        </>
    )
}

export default Prime