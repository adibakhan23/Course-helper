
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddCourseDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ textAlign: "center" }}>Add New Course</DialogTitle>
      <DialogContent>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField label="Course Name" variant="outlined" fullWidth />
          <TextField label="Course Code" variant="outlined" fullWidth />
          <TextField label="Credits" variant="outlined" fullWidth />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <TextField label="Image URL" variant="outlined" fullWidth />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ alignSelf: "center", width: "150px" }}
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;
