import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const AddCourseDialog = ({ open, onClose, onSuccess }) => {
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    code: "",
    credit: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post(
        "https://course-helper-two.vercel.app/courses",
        courseDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Course added successfully");
      if (onSuccess) onSuccess(response.data);
      onClose();
    } catch (error) {
      alert("Failed to add course.\nLogin if you haven't already.");
      if (error.response) {
        console.error("Error adding course:", error.response.data);
      } else if (error.request) {
        console.error("Error adding course: No response received", error.request);
      } else {
        console.error("Error adding course:", error.message);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ textAlign: "center" }}>Add New Course</DialogTitle>
      <DialogContent>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            label="Course Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={courseDetails.name}
          />
          <TextField
            name="code"
            label="Course Code"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={courseDetails.code}
          />
          <TextField
            name="credit"
            label="Credits"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            onChange={handleChange}
            value={courseDetails.credit}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            onChange={handleChange}
            value={courseDetails.description}
          />
          <TextField
            name="image"
            label="Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={courseDetails.image}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ alignSelf: "center", width: "150px", marginTop: "16px" }}
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;
