import { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";

const CourseCard = ({ course }) => {
  const { currency, averageRatingCalculation } = useContext(AppContext);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-200/80 lg:hover:shadow-2xl lg:hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt="course thumbnail"
          className="w-full aspect-video object-cover transition-transform duration-500 lg:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
        {course.discount > 0 && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/60 backdrop-blur-md text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
              {course.discount}% OFF
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="md:text-xl font-bold text-gray-900 leading-snug line-clamp-2 text-start min-h-12">
          {course.courseTitle}
        </h3>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={i < Math.floor(averageRatingCalculation(course)) ? assets.star : assets.star_blank} alt="" className="w-4 h-4" />
              ))}
            </div>

            <span className="text-sm font-semibold text-gray-700">{averageRatingCalculation(course)}</span>
          </div>

          <span className="text-sm text-gray-500">{course.courseRatings.length} {course.courseRatings.length === 0 ? "reviews" : course.courseRatings.length === 1 ? "review" : course.courseRatings.length > 1 && "reviews"} </span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-gray-100">
          <div className="flex gap-1 items-center">
            <div className="bg-green-500 backdrop-blur-md text-white px-4 py-2 rounded-2xl shadow-lg">
              <p className="text-lg font-bold leading-none">
                {currency}
                {(
                  course.coursePrice -
                  (course.discount * course.coursePrice) / 100
                ).toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-gray-400 line-through">
              {currency}
              {course.coursePrice}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
