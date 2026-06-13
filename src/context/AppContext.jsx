import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);

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

    useEffect(() => {
        fetchAllCourses();
    }, [])

    const value = {
        currency,
        allCourses,
        averageRatingCalculation,
        navigate,
        isEducator,
        setIsEducator
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};