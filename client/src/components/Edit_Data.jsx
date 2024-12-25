import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
 
  });

  const { id } = useParams()
const Navigate=useNavigate()


const handleChangeSubmit = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

};

axios.defaults.withCredentials = true;


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://crud-app-blond-three.vercel.app/getOne/${id}`);
      if (res.data) {
        setFormData(res.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [id]);



const EditData=async()=>{
  try {
      
      const res=await axios.put(`https://crud-app-blond-three.vercel.app/update/${id}`,formData)
      
      // setFormData((prev)=>({
      //   ...prev,
      //   ...res.data, 
      // }))

      setFormData(res.data)
     

      Navigate("/")
    } catch (error) {
      console.log(error)
      
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
          Edit User Data
        </Typography>
        <Typography sx={{ color: "#666", mb: 3 }}>
      Come on Edit a  User 😉
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
       
        
          {/* Sign-Up Button */}
          <Button
          onClick={EditData}
      
            fullWidth
            variant="contained"
            sx={{
             
              background: pink[500],
              color: "#fff",
              "&:hover": { background: pink[700] },
            }}
          >
            Edit User
          </Button>

      
        </Box>
      </Box>
     
    </Box>
  );
};

export default EditForm;
