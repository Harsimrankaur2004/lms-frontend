import { useContext, useEffect, useState } from "react";
import { useAuth } from "@clerk/react";
import uniqid from "uniqid";
import { AppContext } from "../../context/AppContext";

const Rating = ({initialRating, courseId}) => {
  

const { userId } = useAuth();
  const {setLocalStorageData, getLocalStorageData, allCourses, setAllCourses} = useContext(AppContext);
  const [rating, setRating] = useState(() =>
  getLocalStorageData(`rating-${courseId}`, initialRating || 0)
);

  const handleRating = (value) => {
  setRating(value);
  setLocalStorageData(`rating-${courseId}`, value);
  
  const updatedCourses = allCourses.map((course) => {
  if (course._id !== courseId) return course;

  const ratings = course.courseRatings || [];

  const alreadyRated = ratings.some(
    (item) => item.userId === userId
  );

  return {
    ...course,
    courseRatings: alreadyRated
      ? ratings.map((item) =>
          item.userId === userId
            ? { ...item, rating: value }
            : item
        )
      : [
          ...ratings,
          {
            userId,
            rating: value,
          },
        ],
  };
});
console.log(updatedCourses);

setAllCourses(updatedCourses);
setLocalStorageData("allCourses", updatedCourses);
};


  return (
    <div>
      {Array.from({length: 5}, (_, index) => {
        const starValue = index + 1;
        return (
          <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors ${starValue <= rating ? "text-yellow-500" : "text-gray-400"}`} onClick={() => handleRating(starValue)}>
            &#9733;
          </span>
        )
      })}
    </div>
  )
}

export default Rating
