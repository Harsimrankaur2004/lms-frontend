import { createContext, useEffect, useState } from "react";
import { dummyCourses, dummyDashboardData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const getLocalStorageData = (key, defaultValue) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  };

  const setLocalStorageData = (key, defaultValue) => {
    const data = localStorage.setItem(key, defaultValue);
  };

  const [allCourses, setAllCourses] = useState(() =>
    getLocalStorageData("allCourses", dummyCourses),
  );

  const [isEducator, setIsEducator] = useState(() =>
    getLocalStorageData("isEducator", false),
  );

  const [enrolledCourses, setEnrolledCourses] = useState(() =>
    getLocalStorageData("enrolledCourses", []),
  );

  const [dashboardData, setDashboardData] = useState(() =>
    getLocalStorageData("dashboardData", dummyDashboardData),
  );

  const [completedLectures, setCompletedLectures] = useState(() =>
    getLocalStorageData("completedLectures", {}),
  );

  // Function to calculate average ratings
  const averageRatingCalculation = (course) => {
    if (course.courseRatings.length === 0) return 0;
    let totalRatings = 0;
    course.courseRatings.forEach((rating) => {
      totalRatings += rating.rating;
    });
    return (totalRatings / course.courseRatings.length).toFixed(1);
  };

  // Function to calculate course chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map(
        (lecture) => (time += lecture.lectureDuration),
      ),
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate the No. of Lectures in the course
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  // saving courses inside localStorage
  useEffect(() => {
    if (allCourses.length > 0) {
      setLocalStorageData("allCourses", JSON.stringify(allCourses));
    }
  }, [allCourses]);

  const value = {
    currency,
    allCourses,
    setAllCourses,
    averageRatingCalculation,
    navigate,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    enrolledCourses,
    setEnrolledCourses,
    dashboardData,
    setDashboardData,
    completedLectures,
    setCompletedLectures,
    setLocalStorageData,
    getLocalStorageData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
