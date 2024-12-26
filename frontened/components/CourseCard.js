
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function CourseCard({ course, onClick }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={course["Image URL"]}
          alt={course["Course Name"]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course["Course Name"]}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {course["Description"]}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            Code: {course["Course Code"]}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            Credits: {course["Credits"]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


