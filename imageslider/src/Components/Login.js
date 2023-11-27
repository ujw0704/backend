import React, {useState}from 'react'

 function Login() {
    let [formData, setFormData] = useState({
        name :"" ,email : "" ,password : ""


    })
    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        }

  return (

    <div className="container">
    <form onSubmit={handleSubmit}>
    <h1>login</h1>
    <label htmlFor='username'>Name: </label><br/><input type='text' id='username' name='name' value
    ={formData.name} placeholder='Enter your Name' required onChange= {handleChange}></input><br/><br/>
    <label htmfor ="email">Email :</label><br/><input type="text" id="email" name="email" value={formData.email}placeholder="Enter  email" required onchange={handleChange}></input><br></br>
    <label htmfor = "password">Password</label><br></br><input type="text" id ="password"name="password" value={formData.password}placeholder="enter your passsword"required onchange={handleChange}></input><br></br>
    </form>
    </div>
  )
}
export default Login