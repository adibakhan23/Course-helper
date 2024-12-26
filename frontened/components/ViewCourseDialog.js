import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ViewCourseDialog({ open, course, onClose }) {
  if (!course) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Course Details</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Course Name"
          type="text"
          fullWidth
          value={course["Course Name"]}
          slotProps={{ input: { readOnly: true } }}
        />
        <TextField
          margin="dense"
          label="Course Code"
          type="text"
          fullWidth
          value={course["Course Code"]}
          slotProps={{ input: { readOnly: true } }}
        />
        <TextField
          margin="dense"
          label="Credits"
          type="number"
          fullWidth
          value={course["Credits"]}
          slotProps={{ input: { readOnly: true } }}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={course["Description"]}
          slotProps={{ input: { readOnly: true } }}
        />
        <TextField
          margin="dense"
          label="Image URL"
          type="text"
          fullWidth
          value={course["Image URL"]}
          slotProps={{ input: { readOnly: true } }}
        />
      </DialogContent>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" , gap: "40px"}}>
        <Button variant="contained" color="primary" onClick={onClose}>
          UPDATE
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          DELETE
        </Button>
      </div>
    </Dialog>
  );
}

