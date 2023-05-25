import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contentfulClient } from "./libs/contentul";
import { setExams } from "./Store/ExamsSLice";
import { setStudents } from "./Store/StudentsSlice";

const ProvideExams = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "exam", order: "-sys.createdAt" })
      .then((data) => {
        dispatch(setExams(data));
      })
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "student", order: "-sys.createdAt" })
      .then((data) => {
        dispatch(setStudents(data));
      })
      .catch((error) => console.log(error.message));
  }, []);
  return <>{children}</>;
};

export default ProvideExams;
