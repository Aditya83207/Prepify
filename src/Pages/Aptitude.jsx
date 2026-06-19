import { useState } from "react";
import { aptitudeQuestions } from "../data/aptitudeQuestions";
import Footer from '../Components/Footer';

function Aptitude() {
  const [selectedCategory, setSelectedCategory] =
    useState("quantitative");

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [score, setScore] = useState(null);

  const currentQuestions =
    aptitudeQuestions[selectedCategory];

  const handleOptionChange = (
    questionId,
    selectedOption
  ) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption,
    });
  };

 const calculateScore = () => {
  let total = 0;

  currentQuestions.forEach((question) => {
    if (
      selectedAnswers[question.id] === question.answer
    ) {
      total++;
    }
  });

  setScore(total);
};

  return (
    <><section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-indigo-600">
            Aptitude Practice
          </h1>

          <p className="text-gray-600 mt-3">
            Select a category and test your skills.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <button
            onClick={() => {
              setSelectedCategory(
                "quantitative"
              );
              setScore(null);
            }}
            className={`px-5 py-3 rounded-lg ${
              selectedCategory ===
              "quantitative"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Quantitative Aptitude
          </button>

          <button
            onClick={() => {
              setSelectedCategory("reasoning");
              setScore(null);
            }}
            className={`px-5 py-3 rounded-lg ${
              selectedCategory ===
              "reasoning"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Logical Reasoning
          </button>

          <button
            onClick={() => {
              setSelectedCategory("verbal");
              setScore(null);
            }}
            className={`px-5 py-3 rounded-lg ${
              selectedCategory === "verbal"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Verbal Ability
          </button>

          <button
            onClick={() => {
              setSelectedCategory(
                "dataInterpretation"
              );
              setScore(null);
            }}
            className={`px-5 py-3 rounded-lg ${
              selectedCategory ===
              "dataInterpretation"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Data Interpretation
          </button>

        </div>

        {/* Question Count */}
        <div className="mb-8 text-center">
          <p className="text-lg font-medium">
            Total Questions:
            {" "}
            {currentQuestions.length}
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-6">

          {currentQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h2 className="text-lg font-semibold mb-4">
                Q{question.id}. {question.question}
              </h2>

              <div className="space-y-2">

                {question.options.map(
                  (option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={
                          selectedAnswers[
                            question.id
                          ] === option
                        }
                        onChange={() =>
                          handleOptionChange(
                            question.id,
                            option
                          )
                        }
                      />

                      <span>{option}</span>
                    </label>
                  )
                )}

              </div>
            </div>
          ))}

        </div>

        {/* Submit Button */}
        <div className="text-center mt-10">

          <button
  onClick={calculateScore}
  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
>
  Submit Test
</button>

        </div>

        {/* Score */}
        {score !== null && (
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-green-600">
              Score: {score} /{" "}
              {currentQuestions.length}
            </h2>
          </div>
        )}

      </div>
    </section>

        <Footer/></>

  );
}

export default Aptitude;