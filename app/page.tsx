import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from '@/app/components/Instructor/index';
import Testimonials from '@/app/components/OurLearners/index';
import Newsletter from './components/Newsletter/Newsletter';

// Home page
export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Courses />
      <Mentor />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
