import Hero from "../../components/student/Hero"
import Companies from "../../components/student/Companies"
import CourseSection from "../../components/student/CourseSection"
import TestimonialSections from "../../components/student/TestimonialSections"
import CallToAction from "../../components/student/CallToAction"
import Footer from "../../components/student/Footer"

const Home = () => {
  return (
    <div className='flex flex-col space-y-7 items-center text-center'>
      <Hero />
      <CourseSection />
      <Companies />
      <TestimonialSections />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
