import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  });
  const [alertMsg,setAlertMsg]=useState(false)

// const {id}=req.params

const handleChangeSubmit = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

};

axios.defaults.withCredentials = true;

const HandleAddUser = async() => {

  for(const properties in formData){
    const trimValues=formData[properties].trim();
    if(trimValues===""){
      alert("Required all fields")
      return
    }
    if(formData.password ===formData.confirmPassword){
   

try {

  const response=await axios.post("https://crud-app-blond-three.vercel.app/create",formData)
  console.log("Data is Send Successfully",response)
 
  setFormData("")
  navigate("/")
} catch (error) {
  console.log(error)
}

    }
    else{
      setAlertMsg(true)
    }

  }
}



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundImageUrl:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlXGfmabqH33tl7xxDDg5HKnjOOfjr0P2Fg&s")
      }}
    >
     
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          // backgroundColor: "#fde4ef",
          backgroundImage: `url("https://cdn-icons-png.freepik.com/512/8184/8184173.png")`,
          backgroundSize: "cover", // Optional for full coverage
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="div"
          sx={{
          display: "flex",
    flexDirection: "row",
    height: "100vh",
 
          }}
        />
      </Box>
     
      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Add User Data
        </Typography>
        <Typography sx={{ color: "#666", mb: 3 }}>
      Come on Add a New User 😉
        </Typography>

        {/* Form */}
        <Box sx={{ width: "100%", maxWidth: "400px" }}>
          <TextField
          onChange={handleChangeSubmit}
            fullWidth
            label="name"
            name="name"
            value={formData.name}
            margin="normal"
        
          />
          <TextField
          required
          onChange={handleChangeSubmit}
            fullWidth
            label="email"
            name="email"
            value={formData.email}
            margin="normal"
          
          />
          <TextField
          onChange={handleChangeSubmit}
             fullWidth
            label="phone"
            name="phone"
            value={formData.phone}
            margin="normal"
         
          />
          <TextField
          onChange={handleChangeSubmit}
          required
            fullWidth
            type="password"
            label="password"
            name="password"
            value={formData.password}
            variant="outlined"
            margin="normal"
         
          />
          <TextField
          onChange={handleChangeSubmit}
          required
            fullWidth
            type="password"
            label="confirm Password"
            name="confirmPassword"
            variant="outlined"
            margin="normal"
         
          />

{
        alertMsg && (
          <Box sx={{mb:5}}>
          <Alert variant="outlined" severity="error">
            Password is not correct
          </Alert>
        </Box>
        )
      }

          {/* Sign-Up Button */}
          <Button
          onClick={
            HandleAddUser
          }
            fullWidth
            variant="contained"
            sx={{
             
              background: pink[500],
              color: "#fff",
              "&:hover": { background: pink[700] },
            }}
          >
            Add User
          </Button>

      
        </Box>
      </Box>
     
    </Box>
  );
};

export default SignupForm;
