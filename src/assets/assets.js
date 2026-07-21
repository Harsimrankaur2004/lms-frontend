import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import search_icon from "./search_icon.svg";
import cross_icon from "./cross_icon.svg";
import upload_area from "./upload_area.svg";
import sketch from "./sktech.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.svg";
import adobe_logo from "./adobe_logo.svg";
import paypal_logo from "./paypal_logo.svg";
import course_1_thumbnail from "./course_1.png";
import course_2_thumbnail from "./course_2.png";
import course_3_thumbnail from "./course_3.png";
import course_4_thumbnail from "./course_4.png";
import star from "./rating_star.svg";
import star_blank from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import arrow_icon from "./arrow_icon.svg";
import down_arrow_icon from "./down_arrow_icon.svg";
import time_left_clock_icon from "./time_left_clock_icon.svg";
import time_clock_icon from "./time_clock_icon.svg";
import user_icon from "./user_icon.svg";
import home_icon from "./home_icon.svg";
import add_icon from "./add_icon.svg";
import my_course_icon from "./my_course_icon.svg";
import person_tick_icon from "./person_tick_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import file_upload_icon from "./file_upload_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import dropdown_icon from "./dropdown_icon.svg";
import patients_icon from "./patients_icon.svg";
import play_icon from "./play_icon.svg";
import green_tick_icon from "./green_tick_icon.svg";
import course_4 from "./course_4.png";
import profile_img from "./profile_img.png";
import profile_img2 from "./profile_img2.png";
import profile_img3 from "./profile_img3.png";
import lesson_icon from "./lesson_icon.svg";

export const assets = {
  logo,
  search_icon,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
  dropdown_icon,
  cross_icon,
  upload_area,
  logo_dark,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  course_4,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  patients_icon,
  profile_img,
  profile_img2,
  profile_img3,
  play_icon,
  green_tick_icon,
  lesson_icon,
};

export const dummyTestimonial = [
  {
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: assets.profile_img_1,
    rating: 5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Richard Nelson",
    role: "SWE 2 @ Samsung",
    image: assets.profile_img_2,
    rating: 4,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "James Washington",
    role: "SWE 2 @ Google",
    image: assets.profile_img_3,
    rating: 4.5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

export const dummyDashboardData = {
  totalEarnings: 533.91,
  totalCourses: 3,
  enrolledStudentsData: [
    {
      student: {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        name: "Noah Anderson",
        imageUrl: "https://i.pravatar.cc/150?img=12",
      },
      courseTitle: "Data Science with Python",
      purchaseDate: "2026-06-11T07:41:56.000Z",
    },
    {
      student: {
        userId: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Liam Johnson",
        imageUrl: "https://i.pravatar.cc/150?img=5",
      },
      courseTitle: "Data Science with Python",
      purchaseDate: "2026-06-11T07:41:56.000Z",
    },
    {
      student: {
        userId: "user_N2l3M4n5O6p7Q8r9S0tU1",
        name: "Sophia Martinez",
        imageUrl: "https://i.pravatar.cc/150?img=9",
      },
      courseTitle: "Data Science with Python",
      purchaseDate: "2026-06-11T07:41:56.000Z",
    },
    {
      student: {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        name: "Noah Anderson",
        imageUrl: "https://i.pravatar.cc/150?img=12",
      },
      courseTitle: "Data Science and Machine Learning",
      purchaseDate: "2026-04-17T13:37:29.000Z",
    },
    {
      student: {
        userId: "user_B9XyZ8AbCd7EfGhIjK654321",
        name: "Olivia Brown",
        imageUrl: "https://i.pravatar.cc/150?img=18",
      },
      courseTitle: "Introduction to Cybersecurity",
      purchaseDate: "2026-01-14T10:23:15.000Z",
    },
    {
      student: {
        userId: "user_C1a2B3c4D5e6F7g8H9iJ0",
        name: "James Taylor",
        imageUrl: "https://i.pravatar.cc/150?img=22",
      },
      courseTitle: "Introduction to Cybersecurity",
      purchaseDate: "2026-01-14T10:23:15.000Z",
    },
    {
      student: {
        userId: "user_D2b3C4d5E6f7G8h9I0jK1",
        name: "Ava Thompson",
        imageUrl: "https://i.pravatar.cc/150?img=28",
      },
      courseTitle: "Introduction to Cybersecurity",
      purchaseDate: "2026-01-14T10:23:15.000Z",
    },
    {
      student: {
        userId: "user_E3c4D5e6F7g8H9i0J1kL2",
        name: "Benjamin Clark",
        imageUrl: "https://i.pravatar.cc/150?img=33",
      },
      courseTitle: "Introduction to Cybersecurity",
      purchaseDate: "2026-01-14T10:23:15.000Z",
    },
    {
      student: {
        userId: "user_F4d5E6f7G8h9I0j1K2lM3",
        name: "Mia Harris",
        imageUrl: "https://i.pravatar.cc/150?img=41",
      },
      courseTitle: "Introduction to Cybersecurity",
      purchaseDate: "2026-01-14T10:23:15.000Z",
    },
  ],
};


export const dummyCourses = [
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",
    courseTitle: "Introduction to JavaScript",
    courseDescription:
      "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with JavaScript",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is JavaScript?",
            lectureDuration: 8,
            lectureUrl: "https://youtu.be/tbEOZngO0jI",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Your Environment",
            lectureDuration: 11,
            lectureUrl: "https://youtu.be/cvoLc3deAdQ",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Variables and Data Types",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Understanding Variables",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/yY0bKZNYmJs",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Data Types in JavaScript",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/-9knnv97wSc",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "Sarah Johnson",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_N2l3M4n5O6p7Q8r9S0tU1",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 3,
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    courseThumbnail: "https://i.ytimg.com/vi/a-wVHL0lpb0/hq720.jpg",
  },
  {
    _id: "675ac1512100b91a6d9b8b24",
    courseTitle: "Advanced Python Programming",
    courseDescription:
      "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
    coursePrice: 79.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Advanced Data Structures",
        chapterContent: [
          {
            lectureId: " lecture1",
            lectureTitle: "Lists and Tuples",
            lectureDuration: 41,
            lectureUrl: "https://youtu.be/qVyvmzFxF_o",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Dictionaries and Sets",
            lectureDuration: 54,
            lectureUrl: "https://youtu.be/078tYSD7K8E",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Object-Oriented Programming",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Classes and Objects",
            lectureDuration: 56,
            lectureUrl: "https://youtu.be/HeW-D6KpDwY",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Inheritance and Polymorphism",
            lectureDuration: 54,
            lectureUrl: "https://youtu.be/KGOEK0-XBIg",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "Michael Chen",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      "user_3HkLmNpQrStUvWxYzA123456",
      "user_4BcDeFgHiJkLmNoPqR789012",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
      },
      {
        userId: "user_3HkLmNpQrStUvWxYzA123456",
        rating: 4,
      },
      {
        userId: "user_4BcDeFgHiJkLmNoPqR789012",
        rating: 3,
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    courseThumbnail: "https://i.ytimg.com/vi/XV-lIaO00H8/hq720.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ae",
    courseTitle: "Cybersecurity Basics",
    courseDescription:
      "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
    coursePrice: 69.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Cybersecurity",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Cybersecurity?",
            lectureDuration: 5,
            lectureUrl: "https://youtu.be/yywMI4pQbbc",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Types of Cyber Threats",
            lectureDuration: 11,
            lectureUrl: "https://youtu.be/wKFOXuWoqmM",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Basic Security Practices",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Password Management",
            lectureDuration: 12,
            lectureUrl: "https://youtu.be/xuzAqw3Rbhs",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Network Security Essentials",
            lectureDuration: 53,
            lectureUrl: "https://youtu.be/iUyYeprSRrE",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "Emily Rodriguez",
    enrolledStudents: [
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      "user_3HkLmNpQrStUvWxYzA123456",
      "user_4BcDeFgHiJkLmNoPqR789012",
      "user_5XyZaBcDeFgHiJkLmN345678",
      "user_6MnOpQrStUvWxYzAbC901234",
      "user_7QrStUvWxYzAbCdEfG567890",
      "user_8HiJkLmNoPqRsTuVwX234567",
    ],
    courseRatings: [
      {
        userId: "user_3HkLmNpQrStUvWxYzA123456",
        rating: 4,
      },
      {
        userId: "user_4BcDeFgHiJkLmNoPqR789012",
        rating: 3,
      },
      {
        userId: "user_5XyZaBcDeFgHiJkLmN345678",
        rating: 5,
      },
      {
        userId: "user_6MnOpQrStUvWxYzAbC901234",
        rating: 2,
      },
      {
        userId: "user_7QrStUvWxYzAbCdEfG567890",
        rating: 4,
      },
    ],
    createdAt: "2024-12-27T11:30:00.000Z",
    courseThumbnail: "https://i.ytimg.com/vi/yywMI4pQbbc/hq720.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a7",
    courseTitle: "Web Development Bootcamp",
    courseDescription:
      "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
    coursePrice: 99.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "HTML & CSS Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to HTML",
            lectureDuration: 159,
            lectureUrl: "https://youtu.be/k2DSi1zGEc8",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Styling with CSS",
            lectureDuration: 468,
            lectureUrl: "https://youtu.be/OpWjt_wbV4E",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "JavaScript Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "JavaScript Basics",
            lectureDuration: 484,
            lectureUrl: "https://youtu.be/a-wVHL0lpb0",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "DOM Manipulation",
            lectureDuration: 41,
            lectureUrl: "https://youtu.be/2IPEp_4obGw",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "David Wilson",
    enrolledStudents: [
      "user_O3m4N5o6P7q8R9s0T1uV2",
      "user_P4n5O6p7Q8r9S0t1U2vW3",
      "user_Q5o6P7q8R9s0T1u2V3wX4",
    ],
    courseRatings: [
      {
        userId: "user_O3m4N5o6P7q8R9s0T1uV2",
        rating: 4,
      },
      {
        userId: "user_P4n5O6p7Q8r9S0t1U2vW3",
        rating: 5,
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    courseThumbnail: "https://i.ytimg.com/vi/1pcikNlDB-4/hqdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ac",
    courseTitle: "Cloud Computing Essentials",
    courseDescription:
      "<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
    coursePrice: 69.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Cloud Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Cloud Computing?",
            lectureDuration: 5,
            lectureUrl: "https://youtu.be/8C_kHJ5YEiA",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Cloud Service Models",
            lectureDuration: 10,
            lectureUrl: "https://youtu.be/lsvpvCU6Oxs",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Exploring Cloud Platforms",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "AWS Basics",
            lectureDuration: 32,
            lectureUrl: "https://youtu.be/3WZzmiAkYBQ",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Introduction to Google Cloud",
            lectureDuration: 250,
            lectureUrl: "https://youtu.be/lvZk_sc8u5I",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "Sophia Martinez",
    enrolledStudents: [
      "user_G5e6F7g8H9i0J1k2L3mN4",
      "user_H6f7G8h9I0j1K2l3M4nO5",
      "user_I7g8H9i0J1k2L3m4N5oP6",
      "user_J8h9I0j1K2l3M4n5O6pQ7",
      "user_K9i0J1k2L3m4N5o6P7qR8",
      "user_L0j1K2l3M4n5O6p7Q8rS9",
      "user_M1k2L3m4N5o6P7q8R9sT0",
      "user_N2l3M4n5O6p7Q8r9S0tU1",
    ],
    courseRatings: [
      {
        userId: "user_H6f7G8h9I0j1K2l3M4nO5",
        rating: 4,
      },
      {
        userId: "user_I7g8H9i0J1k2L3m4N5oP6",
        rating: 5,
      },
      {
        userId: "user_J8h9I0j1K2l3M4n5O6pQ7",
        rating: 1,
      },
      {
        userId: "user_K9i0J1k2L3m4N5o6P7qR8",
        rating: 4,
      },
      {
        userId: "user_L0j1K2l3M4n5O6p7Q8rS9",
        rating: 3,
      },
      {
        userId: "user_M1k2L3m4N5o6P7q8R9sT0",
        rating: 5,
      },
      {
        userId: "user_N2l3M4n5O6p7Q8r9S0tU1",
        rating: 2,
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    courseThumbnail: "https://i.ytimg.com/vi/dn9cSRImmVA/hqdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ad",
    courseTitle: "Data Science with Python",
    courseDescription:
      "<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
    coursePrice: 89.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Python for Data Science",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Python Basics",
            lectureDuration: 653,
            lectureUrl: "https://youtu.be/UrsmFxEIp5k",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Working with NumPy",
            lectureDuration: 244,
            lectureUrl: "https://youtu.be/x7ULDYs4X84",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Data Visualization",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Introduction to Matplotlib",
            lectureDuration: 50,
            lectureUrl: "https://youtu.be/xXibS9832FM",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Advanced Visualizations with Seaborn",
            lectureDuration: 48,
            lectureUrl: "https://youtu.be/39cge_JhVjI",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "You",
    enrolledStudents: [
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_N2l3M4n5O6p7Q8r9S0tU1",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
      },
    ],
    myCourse: true,
    createdAt: "2024-12-27T10:00:00.000Z",
    courseThumbnail: "https://i.ytimg.com/vi/XIR20HH8mNY/hq720.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1aa",
    courseTitle: "Data Science and Machine Learning",
    courseDescription:
      "<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
    coursePrice: 89.99,
    isPublished: true,
    discount: 30,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Data Science",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Data Science?",
            lectureDuration: 24,
            lectureUrl: "https://youtu.be/4Os_A0JYLgk",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Data Collection and Cleaning",
            lectureDuration: 209,
            lectureUrl: "https://youtu.be/ITy8R4278sk",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Machine Learning Basics",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Supervised vs Unsupervised Learning",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/xtOg44r6dsE",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Building Your First Model",
            lectureDuration: 30,
            lectureUrl: "https://youtu.be/29ZQ3TDGgRQ",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "You",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [],
    myCourse: true,
    createdAt: "2024-12-17T08:16:53.622Z",
    courseThumbnail: "https://i.ytimg.com/vi/INKwazzVTAk/hq720.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ab",
    courseTitle: "Introduction to Cybersecurity",
    courseDescription:
      "<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
    coursePrice: 59.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Cybersecurity Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Cybersecurity",
            lectureDuration: 704,
            lectureUrl: "https://youtu.be/v3iUx2SNspY",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Understanding Cyber Threats",
            lectureDuration: 17,
            lectureUrl: "https://youtu.be/tjpW45fOxp8",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Network Security Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Securing Networks",
            lectureDuration: 27,
            lectureUrl: "https://youtu.be/sesacY7Xz3c",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Firewalls and VPNs",
            lectureDuration: 13,
            lectureUrl: "https://youtu.be/o_vyfo3Hw0Y",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educatorName: "You",
    enrolledStudents: [
      "user_B9XyZ8AbCd7EfGhIjK654321",
      "user_C1a2B3c4D5e6F7g8H9iJ0",
      "user_D2b3C4d5E6f7G8h9I0jK1",
      "user_E3c4D5e6F7g8H9i0J1kL2",
      "user_F4d5E6f7G8h9I0j1K2lM3",
    ],
    courseRatings: [
      {
        userId: "user_D2b3C4d5E6f7G8h9I0jK1",
        rating: 4,
      },
      {
        userId: "user_E3c4D5e6F7g8H9i0J1kL2",
        rating: 3,
      },
      {
        userId: "user_F4d5E6f7G8h9I0j1K2lM3",
        rating: 5,
      },
    ],
    myCourse: true,
    createdAt: "2024-12-17T08:16:53.622Z",
    courseThumbnail: "https://i.ytimg.com/vi/v3iUx2SNspY/hq720.jpg",
  },
];
