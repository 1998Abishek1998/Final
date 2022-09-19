import {useState,useEffect} from 'react'

import {FormRow,Alert} from '../../components'
import { useAppContext } from '../../context/appContext'
//import backgroundbg from '../assets/videos/handtouch.mp4'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TextField } from '@mui/material'

const initialState ={
 
  name:'',
  username:'',
  email:'',
  profilePicture:undefined,
  password:'',
  isMember:true,
  location:'',
 
  
}

const CreateEmployee = () => {
    const {setupEmployee, user} = useAppContext()
    const {Id} = useParams()
    const [values,setValues] = useState(initialState)
  
    const handleChange = (e) =>{
      setValues({...values,[e.target.name]:e.target.value})
      // formData.append([e.target.name],e.target.value)
      
    }
    
     const FileChange = async (e) =>{
       var image = await e.target.files[0]
       setValues({...values,[e.target.name]:image})
    }
    const onSubmit = (e) =>{
      e.preventDefault()
      const companyId = user.companyId
      const {name,email,password,profilePicture,location,username} = values
      const currentUser = {name,email,password,location,profilePicture,username, companyId}
      setupEmployee({
          currentUser,
          id: Id,
          alertText:'User Created!: Redirection...'
        })
   
  
    }
    
  
  
    
    
    
  
    return (
      <div>
        <form action=""  encType="multipart/form-data; boundary=<calculated when request is sent>" >
        <h2>Enter your credentials to  create your employee's account.</h2>
        <br/>
        <br/>
          <FormRow 
          type='text' 
          name="name" 
          handleChange ={handleChange}
          noClass={true}
          />
          <FormRow 
          type='text' 
          name="username" 
          handleChange ={handleChange}
          noClass={true}
          />
           <FormRow type='email' name="email" value={values.email} handleChange ={handleChange} noClass={true}/>
  
          <FormRow 
          type='file' 
          name="profilePicture" 
          handleChange ={FileChange}
          noClass={true}
          classFile={true}
          />
          <FormRow 
          type='text' 
          name="location"
          value={values.location} 
           handleChange ={handleChange}
           noClass={true}          
          />           
          <FormRow type='password' name="password" value={values.password} handleChange ={handleChange} noClass={true}/>
  
          <button type='submit' className='btn btn-block btn-getstarted' onClick={onSubmit} >Submit</button>  
       </form>
        </div>
    )
  }

export default CreateEmployee
  




   
