import {useState,useEffect} from 'react'

import Wrapper from '../assets/wrappers/RegisterPage'
import {FormRow,Alert} from '../components'
import { useAppContext } from '../context/appContext'

import {useDispatch} from 'react-redux';

//import backgroundbg from '../assets/videos/handtouch.mp4'
import { Link, useNavigate } from 'react-router-dom'
import { autoLogin, loginUser } from '../actions/authActions';

const initialState ={
 
  name:'',
  username:'',
  email:'',
  profilePicture:undefined,
  password:'',
  isMember:true,
  location:'',
 
  
}

  




   

const Register = () => {
  const {setupUser,isLoading,showAlert,user} = useAppContext()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [values,setValues] = useState(initialState)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    if (user) {
      dispatch(autoLogin)
      setTimeout(() => {
        if(user.role === 1) navigate('/admin-pannel')
        else navigate("/user");
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () =>{
    setValues({...values, isMember:!values.isMember})
  }
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

    // const form = document.querySelector("form")
    // let registerInfo = new registerInfo(form);

    const {name,email,password,isMember,profilePicture,location,username} = values


    
    

    const currentUser = {name,email,password,location,profilePicture,username}
    const credentials = { email, password}
 
 

    if(isMember){

      setupUser({
        currentUser,
        endPoint:'login',
        alertText:'Login Successful: Redirection...'
      })
      dispatch(loginUser(credentials))
    }
    else{
      setupUser({
        currentUser,
        endPoint:'register',
        alertText:'User Created!: Redirection...'
      })
    }
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
      <h3 className='login-t'>{values.isMember ? ' Log in' :' Register'}</h3>
      <p className='login-p'>Enter your credentials to {values.isMember ? 'acesss' :' create'} your account</p>
      {!values.isMember && 
        (<FormRow 
        type='text' 
        name="name" 
        handleChange ={handleChange}

       
       
        />
        

        )}
        {!values.isMember && 
        (<FormRow 
        type='text' 
        name="username" 
        handleChange ={handleChange}

       
       
        />
        

        )}
         <FormRow type='email' name="email" value={values.email} handleChange ={handleChange} />

        {!values.isMember && 
        (<FormRow 
        type='file' 
        name="profilePicture" 
        handleChange ={FileChange}        
        />
        

        )}
         {!values.isMember && 
        (<FormRow 
        type='text' 
        name="location"
        value={values.location} 
         handleChange ={handleChange}
      
        
        />
        )}
         
        <FormRow type='password' name="password" value={values.password} handleChange ={handleChange}/>

        <button type='submit' className='btn btn-block btn-getstarted' onClick={onSubmit} >Submit</button>
     </form>
       <div className='sidebg'>
        <div className="bg-video">
          <image src='' alt="picture"/>
        </div>
          <div className="bglinear"></div>
       </div>

    
      </Wrapper>
  )
}

export default Register