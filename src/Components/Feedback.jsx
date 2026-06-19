function Feedback() {
  const feedbacks = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer Aspirant",
      review:
        "Prepify helped me stay consistent with DSA practice and interview preparation. The interface is simple and easy to use.",
    },
    {
      name: "Priya Patel",
      role: "Computer Engineering Student",
      review:
        "The aptitude section made my placement preparation much more organized. I loved the structured learning approach.",
    },
    {
      name: "Aman Verma",
      role: "Software Engineer Intern",
      review:
        "Mock interviews helped me gain confidence before my internship interviews. Highly recommended for students.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            What Users Say
          </h2>

          <p className="text-lg text-gray-600 mt-4">
            Hear from learners who use Prepify to improve
            their interview preparation.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Quote */}
              <div className="text-4xl text-indigo-500 mb-4">
                "
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {feedback.review}
              </p>

              {/* User */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feedback.name}
                </h3>

                <p className="text-gray-500">
                  {feedback.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Feedback;