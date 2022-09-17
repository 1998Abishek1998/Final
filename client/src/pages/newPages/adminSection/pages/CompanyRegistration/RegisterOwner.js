import React, { useEffect, useState } from 'react'

import Wrapper from '../../../../../assets/wrappers/RegisterPage'
import {FormRow,Alert} from '../../../../../components'

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../../../../context/appContext';

const RegisterOwner = () => {
  const { Id } = useParams()
  const {setupUser,isLoading,showAlert, user} = useAppContext()
    const [email,setEmail] = useState()
    const [image, setImage] = useState()
    const [location, setLocation] = useState()
    const [password, setPassword] = useState()
    const [name, setname] = useState()
    const role = 2
    const [username, setusername] = useState()

    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        setTimeout(() => {
          if(user.role === 1) navigate('/admin-pannel')
          else navigate("/user");
        }, 3000);
      }
    }, [user, navigate]);

    const FileChange = async (e) =>{
        var image = await e.target.files[0]
       
        setImage(image)
      
     }
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log({
          name,
          username,
          password,
          email,
          location,
          image,
          Id,
        })
    
        const currentUser = {name,email,password,location,image,username, Id,role }
      
        setupUser({
            currentUser,
            endPoint:'register',
            alertText:'User Created!: Redirection...'
          })
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
   <h3 className='login-t'>Register Company Owner</h3>
   <p className='login-p'>Enter your credentials to create a company's owner account.</p>
    {
      isLoading ? <>loading...</>: <>
        <FormRow 
     type='text' 
     name="name" 
     value={name}
     handleChange ={(e)=>{
      setname(e.target.value)
     }}    
     />
     <FormRow 
     type='text' 
     name="username" 
     value={username}
     handleChange ={(e)=>{
      setusername(e.target.value)
     }}
     />
     

      <FormRow type='email' name="email" value={email} handleChange ={(e)=> setEmail(e.target.value)} />

     <FormRow 
     type='file' 
     name="profilePicture" 
     handleChange ={FileChange}        
     />
     
     <FormRow 
     type='text' 
     name="location"
     value={location} 
      handleChange ={(e)=>{
        setLocation(e.target.value)
      }}
   
     
     />
      
     <FormRow type='password' name="password" value={password} handleChange ={(e)=> setPassword(e.target.value)}/>

     <button type='submit' className='btn btn-block btn-getstarted' onClick={onSubmit} >Submit</button> 
      </>
    }
    </form> 
   </Wrapper>
    )
}

export default RegisterOwner