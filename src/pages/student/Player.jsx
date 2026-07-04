// React and External libraries
import humanizeDuration from "humanize-duration";
import { useContext, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/react";
// Components
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";
import Loading from "../../components/student/Loading";
// Assets and Context
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
const Player = () => {
  const { user } = useUser();
  const playerRef = useRef(null);
  const {
    enrolledCourses,
    calculateChapterTime,
    completedLectures,
    setCompletedLectures,
  } = useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [isMarked, setIsMarked] = useState(false);

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    });
  };

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    getCourseData();
  }, [enrolledCourses]);

  const markLectureCompleted = (courseId, lectureId) => {
    setCompletedLectures((prev) => {
      const completed = prev[courseId] || [];

      if (completed.includes(lectureId)) return prev;

      return {
        ...prev,
        [courseId]: [...completed, lectureId],
      };
    });
  };

const handleReady = (event) => {
  playerRef.current = event.target;
};

useEffect(() => {
  setIsMarked(false);
}, [playerData]);

useEffect(() => {
  if (!playerRef.current) return;

  const interval = setInterval(() => {
    const player = playerRef.current;

    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();

    if (!duration) return;

    const watchedPercentage = (currentTime / duration) * 100;

    if (watchedPercentage >= 90 && !isMarked) {
      markLectureCompleted(courseId, playerData.lectureId);
      setIsMarked(true);
    }
  }, 1000);

  return () => clearInterval(interval);
}, [playerData, isMarked]);

  return user ? (
    <>
      <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* Left */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div className="pt-5">
            {courseData &&
              courseData.courseContent.map((chapter, index) => (
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
                        alt="down-arrow-icon"
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
                            src={
                              completedLectures[courseId]?.includes(
                                lecture?.lectureId,
                              )
                                ? assets.green_tick_icon
                                : assets.play_icon
                            }
                            alt="icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.lectureUrl && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      ...lecture,
                                      chapter: index + 1,
                                      lecture: i + 1,
                                    })
                                  }
                                  className="text-green-500 cursor-pointer"
                                >
                                  Watch
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
          {courseData && (
            <div className="flex items-center gap-2 py-3 mt-10">
              <h1 className="text-xl font-bold">Rate this course:</h1>
              <Rating initialRating={0} />
            </div>
          )}
        </div>

        {/* Right */}
        <div className="md:mt-10">
          {playerData ? (
            <div>
              <YouTube
                videoId={playerData.lectureUrl.split("/").pop()}
                onReady={handleReady}
                iframeClassName="w-full aspect-video"
              />
              <div className="flex justify-between items-center mt-1">
                <p>
                  {playerData.chapter}.{playerData.lecture}{" "}
                  {playerData.lectureTitle}
                </p>
                <button
                  onClick={() =>
                    markLectureCompleted(courseData._id, playerData.lectureId)
                  }
                  className="text-green-600"
                >
                  {completedLectures[courseId]?.includes(playerData?.lectureId)
                    ? "Completed"
                    : "Mark Complete"}
                </button>
              </div>
            </div>
          ) : (
            courseData && (
              <img src={courseData.courseThumbnail} alt="Thumbnail" />
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Player;
