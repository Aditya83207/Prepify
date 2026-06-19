import { useState } from "react";
import Footer from '../Components/Footer';

function MockInterview() {
  const interviewQuestions = {
    frontend: [
      "What is React?",
      "What is Virtual DOM?",
      "What is JSX?",
      "Difference between State and Props?",
      "What are React Hooks?",
    ],

    backend: [
      "What is Node.js?",
      "What is Express.js?",
      "What is REST API?",
      "Difference between SQL and NoSQL?",
      "What is Authentication?",
    ],

    fullstack: [
      "Explain MERN Stack.",
      "What is MongoDB?",
      "What is JWT?",
      "How does client-server architecture work?",
      "What is API integration?",
    ],
  };

  const [role, setRole] = useState("frontend");
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = interviewQuestions[role];

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restartInterview = () => {
    setCurrentIndex(0);
  };

  return (
    <><section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-indigo-600">
            Mock Interview
          </h1>

          <p className="text-gray-600 mt-3">
            Practice interview questions and improve confidence.
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <button
            onClick={() => {
              setRole("frontend");
              setCurrentIndex(0);
            }}
            className={`px-5 py-3 rounded-lg ${
              role === "frontend"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Frontend Developer
          </button>

          <button
            onClick={() => {
              setRole("backend");
              setCurrentIndex(0);
            }}
            className={`px-5 py-3 rounded-lg ${
              role === "backend"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Backend Developer
          </button>

          <button
            onClick={() => {
              setRole("fullstack");
              setCurrentIndex(0);
            }}
            className={`px-5 py-3 rounded-lg ${
              role === "fullstack"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Full Stack Developer
          </button>

        </div>

        {/* Question Card */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <p className="text-sm text-gray-500 mb-4">
            Question {currentIndex + 1} of {questions.length}
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            {questions[currentIndex]}
          </h2>

          {/* Navigation Buttons */}
          <div className="flex justify-between">

            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="bg-gray-300 px-6 py-3 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={currentIndex === questions.length - 1}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
            >
              Next
            </button>

          </div>

        </div>

        {/* Restart Button */}
        <div className="text-center mt-8">
          <button
            onClick={restartInterview}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            Restart Interview
          </button>
        </div>

      </div>
    </section>
    <Footer/></>
  );
}

export default MockInterview;