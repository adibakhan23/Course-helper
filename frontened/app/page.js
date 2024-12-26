"use client";
import React, { useState, useEffect } from "react";
import Appbar from "@/components/Appbar";
import CourseCard from "@/components/CourseCard";
import Button from "@mui/material/Button";
import AddCourseDialog from "@/components/AddCourseDialog";
import ViewCourseDialog from "@/components/ViewCourseDialog";

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setViewDialogOpen(true);
  };

  const handleViewDialogClose = () => {
    setSelectedCourse(null);
    setViewDialogOpen(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Appbar />
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            onClick={() => handleCardClick(course)}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
          style={{ width: "200px", fontSize: "16px" }}
        >
          Add New Course
        </Button>
      </div>

      <AddCourseDialog open={dialogOpen} onClose={handleCloseDialog} />

      {selectedCourse && (
        <ViewCourseDialog
          open={viewDialogOpen}
          course={selectedCourse}
          onClose={handleViewDialogClose}
        />
      )}
    </div>
  );
}
