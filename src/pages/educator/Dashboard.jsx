import { useContext, useEffect, useState } from "react";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { currency, dashboardData, isEducator, setIsEducator, setLocalStorageData } =
    useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsEducator(true);
    alert("Application submitted successfully!");
  };

  // saving is educator
  useEffect(() => {
    setLocalStorageData("isEducator", JSON.stringify(isEducator));
  }, [isEducator]);

  return isEducator && dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-3 shadow-card border border-green-500 p-4 w-58 rounded-md">
            <img src={assets.patients_icon} alt="appointement_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Enrollments</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-green-500 p-4 w-58 rounded-md">
            <img src={assets.appointments_icon} alt="appointement_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-green-500 p-4 w-58 rounded-md">
            <img src={assets.earning_icon} alt="earning_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {currency}
                {dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="tavle-fixed md:table-auto w-full overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                    #
                  </th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Course Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-500/20">
                    <td className="px-4 py-3 text-center hidden sm:table-cell">
                      {index + 1}
                    </td>
                    <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                      <img
                        src={item.student.imageUrl}
                        alt="Profile"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="truncate">{item.student.name}</span>
                    </td>
                    <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : !isEducator ? (
    <div className="min-h-screen md:p-8 md:pb-0 p-4 pt-8 pb-0 flex flex-col items-center">
      <div className="w-full max-w-lg rounded-xl mb-10 p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Become an Educator
          </h2>
          <p class="text-sm text-gray-500 mt-1">
            Submit your details to join our teaching team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none"
            />
          </div>

          {/* Subject / Expertise */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700"
            >
              Subject / Area of Expertise
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="e.g., Mathematics, English, Coding"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none"
            />
          </div>

          {/* Experience Level */}
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-semibold text-gray-700"
            >
              Teaching Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none"
            >
              <option value="">Select experience...</option>
              <option value="none">No formal experience</option>
              <option value="1-3">1 - 3 years</option>
              <option value="4-7">4 - 7 years</option>
              <option value="8+">8+ years</option>
            </select>
          </div>

          {/* Short Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-semibold text-gray-700"
            >
              Short Bio / Achievements
            </label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              placeholder="Tell us a little bit about your teaching background..."
              value={formData.bio}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
