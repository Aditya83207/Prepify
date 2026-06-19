import { useState } from "react";
import { dsaQuestions } from "../Components/QuestionCard";
import Footer from '../Components/Footer'

function Practice() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filteredQuestions = dsaQuestions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTopic =
      topic === "All" || question.topic === topic;

    const matchesDifficulty =
      difficulty === "All" ||
      question.difficulty === difficulty;

    return (
      matchesSearch &&
      matchesTopic &&
      matchesDifficulty
    );
  });

  return (
    <><section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">
            Practice DSA
          </h1>

          <p className="text-lg text-gray-600">
            Improve your coding skills with curated interview questions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-3 rounded-xl border border-gray-300"
          >
            <option value="All">All Topics</option>
            <option value="Arrays">Arrays</option>
            <option value="Strings">Strings</option>
            <option value="Linked List">Linked List</option>
            <option value="Stack">Stack</option>
            <option value="Queue">Queue</option>
            <option value="Trees">Trees</option>
            <option value="Graphs">Graphs</option>
            <option value="DP">DP</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-3 rounded-xl border border-gray-300"
          >
            <option value="All">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

        </div>

        {/* Count */}
        <p className="mb-6 text-gray-600 font-medium">
          Showing {filteredQuestions.length} Questions
        </p>

        {/* Question Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-3">
                {question.title}
              </h2>

              <p className="text-gray-600 mb-3">
                Topic: {question.topic}
              </p>

              <span
                className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                  question.difficulty === "Easy"
                    ? "bg-green-100 text-green-700"
                    : question.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {question.difficulty}
              </span>

              <div>
                <a
                  href={question.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Solve Now
                  </button>
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>

    <Footer/>
    </>
  );
}

export default Practice;