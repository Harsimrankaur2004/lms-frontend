import { useContext, useEffect, useState } from "react";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";

const MyCourses = () => {
  const {
    currency,
    allCourses,
    isEducator,
    setAllCourses,
    enrolledCourses,
    setEnrolledCourses,
    dashboardData,
    setDashboardData,
    navigate,
    setLocalStorageData
  } = useContext(AppContext);

  const [courses, setCourses] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const fetchEducatorCourses = async () => {
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchEducatorCourses();
  }, [allCourses]);

  const handleDelete = (id) => {
    setAllCourses((prev) => prev.filter((c) => c._id !== id));
    setEnrolledCourses((prev) => prev.filter((c) => c._id !== id));
    setDashboardData((prev) => ({
      ...prev,
      totalCourses: prev.totalCourses - 1,
    }));
    setSelectedCourseId(null);
  };

  // saving enrolled courses
  useEffect(() => {
    setLocalStorageData("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  // saving dashboard data
  useEffect(() => {
    setLocalStorageData("dashboardData", JSON.stringify(dashboardData));
  }, [dashboardData]);

  // saving courses inside localStorage
  useEffect(() => {
    setLocalStorageData("allCoures", JSON.stringify(allCourses));
  }, [allCourses]);

  return isEducator && courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>

        <div className="flex flex-col items-center max-w-4xl w-full overflow-visible rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-visible">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">All Courses</th>
                <th className="px-4 py-3 font-semibold">Students</th>
                <th className="px-4 py-3 font-semibold">Published On</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-500">
              {courses.map(
                (course) =>
                  course.myCourse && (
                    <tr
                      key={course._id}
                      className="border-b border-gray-500/20 relative"
                    >
                      {/* Course Info */}
                      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center truncate space-x-3">
                        <img
                          src={course.courseThumbnail}
                          alt="Thumbnail"
                          className="w-16"
                        />
                        <span className="truncate hidden md:block">
                          {course.courseTitle}
                        </span>
                      </td>

                      {/* Students */}
                      <td className="px-4 py-3">
                        {course.enrolledStudents.length}
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3">
                        {new Date(course.createdAt).toLocaleDateString()}
                      </td>

                      {/* ACTIONS */}
                      <td className="px-4 py-3 relative">
                        <button
                          onClick={() =>
                            setSelectedCourseId((prev) =>
                              prev === course._id ? null : course._id,
                            )
                          }
                          className="text-xl font-bold"
                        >
                          ⋮
                        </button>

                        {/* DROPDOWN */}
                        {selectedCourseId === course._id && (
                          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
                            <button
                              onClick={() =>
                                navigate(`/educator/add-course/${course._id}`)
                              }
                              className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => handleDelete(course._id)}
                              className="block w-full px-3 py-2 text-left hover:bg-gray-100 text-red-500"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
