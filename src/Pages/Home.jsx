import heroImage from "../assets/hero.png";
import logo from '../assets/logo.png'

import { useNavigate } from "react-router-dom";
import Features from '../Components/Features'
import Feedback from '../Components/Feedback'
import Footer from '../Components/Footer'

function Home() {
  
  return (

    <>
          {/*  THIS IS HERO SECTION OF HOME */}
     
    <section className="min-h-[85vh] flex items-center  from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">
            Prepify
          </h1>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            A Smart Way to Learn
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Practice DSA, solve aptitude questions, and prepare for
            interviews with structured learning paths and mock
            interviews.
          </p>

        <div className="flex gap-4 mb-10">

            <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
            onClick={() => navigate("/practice")}>

              Start Learning

            </button>



            <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition"
             onClick={() => navigate("/mock-interview")}>

              Mock Interview

            </button>

          </div>


          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">DSA Practice</h3>
              <p className="text-sm text-gray-500">
                500+ Questions
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">Aptitude</h3>
              <p className="text-sm text-gray-500">
                1000+ Problems
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">Interviews</h3>
              <p className="text-sm text-gray-500">
                Mock Sessions
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">Progress</h3>
              <p className="text-sm text-gray-500">
                Track Daily
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="Prepify Hero"
            className="w-full max-w-2xl "
          />
        </div>

      </div>
    </section>



    {/* //    THIS IS FEATURE SECTION OF PAGE */}


    <Features/>

    <Feedback/>

    <Footer/>



</>

   
  );
}

export default Home;