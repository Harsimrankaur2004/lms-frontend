import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const [enrolledCourses, setEnrolledCourses] = useState([])

    // Fetch all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    // Function to calculate average ratings
    const averageRatingCalculation = (course) => {
        if (course.courseRatings.length === 0) return 0;
        let totalRatings = 0;
        course.courseRatings.forEach(rating => {
            totalRatings += rating.rating;
        });
        return totalRatings / course.courseRatings.length;
    }

    // Function to calculate course chapter time
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]});
    }

    // Function to calculate course duration 
    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map(
            (lecture) => time += lecture.lectureDuration
            ))
        return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]});
    }

    // Function to calculate the No. of Lectures in the course
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }

    // Fetch User Enrolled Courses
    const fetchUserEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses)
    }
    
    useEffect(() => {
        fetchAllCourses();
        fetchUserEnrolledCourses();
    }, [])
    

    const value = {
        currency,
        allCourses,
        averageRatingCalculation,
        navigate,
        isEducator,
        setIsEducator,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNoOfLectures,
        enrolledCourses,
        fetchUserEnrolledCourses
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};