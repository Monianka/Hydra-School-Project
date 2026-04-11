"use client";
import React from "react";
import styles from "./Courses.module.css";
import CoursesSection from "@/components/CoursesSection";

const CoursesClient: React.FC = () => {
  return (
    <div className={styles["courses-container"]}>
      <CoursesSection titleClassName={styles["section-title"]} />
    </div>
  );
};

export default CoursesClient;
