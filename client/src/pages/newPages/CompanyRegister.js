import React, { useEffect } from 'react'
import { useState } from 'react'

import Wrapper from '../../assets/wrappers/RegisterPage'
import {FormRow,Alert} from '../../components'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'


const CompanyRegister = () => {
    const {addCompany, showAlert} = useAppContext()
    const {Id} = useParams()
    const [email, setEmail] = useState(null)
    const [companyName, setcompanyName] = useState(null)
    const [companyNumber, setcompanyNumber] = useState(null)
    const [location, setlocation] = useState(null)
    const [contact, setcontact] = useState(null)


    const onSubmit = (e) =>{
        e.preventDefault()
        
        addCompany ({
            email: email,
            companyName: companyName,
            companyNumber: companyNumber,
            location: location,
            contact: contact
        })
    }

    useEffect(()=>{
        
    },[])
    
    const handleChange = (e) =>{
        console.log(e.target.value)
        // formData.append([e.target.name],e.target.value)
        setEmail(e.target.value)
    }
  return (
    <Wrapper className ='full-name'>
       <form action="" className='form' encType="multipart/form-data; boundary=<calculated when request is sent>" >
        {showAlert && <Alert/>}

      

       <div className="title">
        <Link to='/'>
          Winkle
        </Link>
       </div>
      <h3 className='login-t'>Company Registration</h3>
      <p className='login-p'>Enter your company domain or E-mail to apply for our services</p>
         <FormRow type='Email' name="Email" value={email} handleChange ={(e) =>handleChange(e)} />        
         <FormRow type='CompanyName' name="CompanyName" value={companyName} handleChange ={(e) => setcompanyName(e.target.value)} />        
         <FormRow type='CompanyNumber' name="CompanyNumber" value={companyNumber} handleChange ={(e) => setcompanyNumber(e.target.value)} />        
         <FormRow type='Location' name="Location" value={location} handleChange ={(e) => setlocation(e.target.value)} />        
         <FormRow type='Contact' name="Contact" value={contact} handleChange ={(e) => setcontact(e.target.value)} />        

        <button type='submit' className='btn btn-block btn-getstarted' onClick={(e) =>onSubmit(e)} >Submit</button>
        <Link to='/' className='btn btn-block btn-getstarted'>
            Back
        </Link>
     </form>
       <div className='sidebg'>
         <video className="bg-video" autoPlay muted>
            {/* <source type="video/mp4" src={backgroundbg} />
           */}
           </video>
          <div className="bglinear"></div>
       </div>

    
      </Wrapper>
  )
}

export default CompanyRegister