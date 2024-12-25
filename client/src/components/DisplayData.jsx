import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DisplayData = () => {



  const [getUser, setGetUser] = useState([]);
  const naviagte=useNavigate()


axios.defaults.withCredentials = true;


  const GetData = async () => {
    try {
      const fetchData = await axios.get("https://crud-c2m7.vercel.app/get");
      setGetUser(fetchData.data);
      console.log("Fetch Data:", fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    GetData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response =await axios.delete(`https://crud-c2m7.vercel.app/delete/${id}`);
      setGetUser((prev) => {
       return prev.filter((item) => item._id !== id);
      });
      console.log("data delete successfully")
    } catch (error) {
      console.log(error);
    }
  };



  const handleEdit=async(id)=>{

    naviagte(`/edit/${id}`)


  }


  return (
    <Box sx={{ padding: 3 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getUser ? (
              getUser.map((row, id) => (
                <TableRow key={id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                    {" "}
                     
                    <IconButton color="primary">
                      <EditIcon onClick={() => handleEdit(row._id, row)}  />
                    </IconButton>
                    <IconButton color="secondary">
                      <DeleteIcon onClick={() => handleDelete(row._id, row)} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <p>Data not available</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DisplayData;
