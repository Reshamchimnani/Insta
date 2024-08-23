import React,{useState} from 'react';
import "./SignUp.css";
import {Link,useNavigate} from 'react-router-dom';


function SignUp(){
  const Navigate= useNavigate[""];
  const[email,setEmail] = useState(" ");
  const[fullname,setFullname] = useState(" ");
  const[username,setUsername] = useState(" ");
  const[password,setPassword] = useState(" ");

  async function submitHandler(e){
    e.preventDefault();
    console.log(email);
    console.log(fullname);
    console.log(username);
    console.log(password);
    

    try{

      const response = await fetch("https://insta-backend-hr3a.onrender.com/signup",{
        method:"POST",
        header:{"Content-Type": "application/json"},
        body:JSON.stringify({

          name:fullname,
          email:email,
          userName:username,
          password:password

        }),
      });

      const data = await response.json();
      console.log(data);

      <Navigate to="/sign "/>

    }catch(error){
      console.log("Error:",error);
    }
  }
  return (
<div className="Bahr">
    <div className='main'>
        <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"></img>
        <p>sign Up to See photos and videos from your friends</p>
        <button className='btn btn-primary'> Log in with facebook</button>

        <div className='OR'>
        <div>OR</div>

        </div>
        <div>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder='email'>
        </input>

        <input type="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} name="name" id="name" placeholder='fullname'>
        </input>
        
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="name" placeholder='password'>
        </input>
        
        <input type="username" value={username} onChange={(e)=>setUsername(e.target.value)} name="usename" id="name" placeholder='username'>
        </input>
        
        </div>
        

        <p className='bottom-para'>
            people who use our service may have uploaded your contact information to Instagram.{" "}

            
                <a >Learn More</a>
          
        </p>

        <p>By signing up,you agree to our Terms ,Privacy policy and
          cookies Policy
        </p>

        <button className='btn btn-primary'onClick={submitHandler}>Sign Up</button></div>

<div className='main'>
<p>Have an account? <Link to={"/SignIn"}>Log in</Link>

</p>
</div>
    </div>
  );
}

export default SignUp;