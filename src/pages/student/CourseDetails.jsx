// React and external libraries
import { use, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import uniqid from "uniqid";
import { useAuth, useClerk, useUser } from "@clerk/react";
// Components
import Loading from "../../components/student/Loading";
import Footer from "../../components/student/Footer";
// Assets and Contexts
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import Dashboard from "../educator/Dashboard";

const CourseDetails = () => {
  const { id } = useParams();
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [makePayment, setMakePayment] = useState("");

  const {
    allCourses,
    setAllCourses,
    averageRatingCalculation,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    currency,
    enrolledCourses,
    setEnrolledCourses,
    dashboardData,
    setDashboardData,
    navigate,
    setLocalStorageData,
  } = useContext(AppContext);

  const fetchCourseData = () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePayment = (courseData) => {
    if (!makePayment) return;
    const coursePrice = Number(
      (
        courseData.coursePrice -
        (courseData.discount * courseData.coursePrice) / 100
      ).toFixed(2),
    );
    if (coursePrice === makePayment) {
      const id = uniqid();
      setShowPopup(false);
      alert("Payment is done.");
      setEnrolledCourses((prev) => [...prev, courseData]);
      setAllCourses((prev) =>
        prev.map((course) =>
          course._id === courseData._id
            ? {
                ...course,
                enrolledStudents: [...course.enrolledStudents, id],
              }
            : course,
        ),
      );
      courseData.myCourse &&
        setDashboardData((prev) => ({
          ...prev,
          totalEarnings: Math.floor(prev.totalEarnings + Number(makePayment)),
          enrolledStudentsData: [
            ...prev.enrolledStudentsData,
            {
              student: {
                _id: id,
                name: user.fullName,
                imageUrl: user.imageUrl,
              },
              courseTitle: courseData.courseTitle,
              purchaseDate: new Date().toISOString(),
            },
          ],
        }));
      navigate("/player/" + courseData._id);
    } else {
      alert("Please add right amount.");
    }
  };

  // saving courses inside localStorage
  useEffect(() => {
    if (allCourses.length > 0) {
      setLocalStorageData("allCourses", JSON.stringify(allCourses));
    }
  }, [allCourses]);

  // saving dashboard data
  useEffect(() => {
    setLocalStorageData("dashboardData", JSON.stringify(dashboardData));
  }, [dashboardData]);

  // saving enrolled courses
  useEffect(() => {
    setLocalStorageData("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    if (enrolledCourses)
      setIsAlreadyEnrolled(enrolledCourses.some((c) => c._id === id));
  }, [enrolledCourses]);

  return courseData ? (
    <>
      <div className="flex max-md:items-center md:flex-row flex-col-reverse gap-10 relative items-start justify-between lg:px-36 px-6 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height bg-linear-to-b from-green-100/70"></div>

        {/* left */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* review and ratings */}
          <div className="flex items-center gap-2 pt-3 pb-1 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">
                {averageRatingCalculation(courseData)}
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.floor(averageRatingCalculation(courseData))
                        ? assets.star
                        : assets.star_blank
                    }
                    alt=""
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>

            <p className="text-green-600">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length === 1 ? "review" : "reviews"}
              ){" "}
            </p>
            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length === 1
                ? "student"
                : "students"}{" "}
            </p>
          </div>
          <p className="text-sm">
            Course by{" "}
            <span className="text-green-600 underline">Instructor</span>
          </p>
          <div className="pt-8 text-gray-900">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div
                    onClick={() => toggleSection(index)}
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transform transition-transform ${openSection[index] ? "rotate-180" : ""}`}
                        src={assets.down_arrow_icon}
                        alt="arrow-icon"
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-default">
                      {chapter.chapterContent.length} lectures -{" "}
                      {calculateChapterTime(chapter)}{" "}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openSection[index] ? "max-h-96" : "max-h-0"}`}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img
                            src={assets.play_icon}
                            alt="play_icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: lecture.lectureUrl
                                        .split("/")
                                        .pop(),
                                    })
                                  }
                                  className="text-green-500 cursor-pointer"
                                >
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] },
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-20 text-sm md:text-default">
            <h3 className="text-xl font-semibold text-gray-800">
              Course Description
            </h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
            ></p>
          </div>
        </div>
        {/* right */}
        <div className="max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-75 sm:min-w-105 md:min-w-90">
          {playerData ? (
            <YouTube
              videoId={playerData.videoId}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData.courseThumbnail} alt="thumbnail" />
          )}

          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                className="w-3.5"
                src={assets.time_left_clock_icon}
                alt="time left clock icon"
              />

              <p className="text-red-500">
                <span className="font-medium">5 days</span> left at this price
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-4xl text-2xl font-semibold">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="text-lg text-gray-500">
                {courseData.discount}% off
              </p>
            </div>
            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>{averageRatingCalculation(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time clock icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="lesson icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>
            <button
              onClick={() => {
                if (!isSignedIn) {
                  openSignIn();
                  return;
                } else if (isAlreadyEnrolled) navigate("/my-enrollments");
                setShowPopup(true);
              }}
              className="md:mt-6 mt-4 w-full py-3 rounded bg-green-600 text-white font-medium cursor-pointer"
            >
              {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
            </button>
            <div className="pt-6">
              <p className="md:text-xl text-lg font-medium text-gray-800">
                what's in the course ?
              </p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance. </li>
                <li>Downloadable resources and source code.</li>
                <li>Quizes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center z-10">
            <div className="bg-white p-4 text-gray-700 rounded relative w-full max-w-80">
              <button
                onClick={() => {
                  setShowPopup(false);
                }}
                className="absolute right-2 top-2.5 cursor-pointer"
              >
                <img src={assets.cross_icon} alt="cross_icon" />
              </button>
              <h2>Payment</h2>
              <div>
                <input
                  type="number"
                  value={makePayment}
                  onChange={(e) => setMakePayment(Number(e.target.value))}
                  className="mt-1 border rounded py-2 px-2 mr-1"
                />
                <button
                  onClick={() => handlePayment(courseData)}
                  className=" bg-green-600 text-white px-5 py-2.5 rounded"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
