function Features() {
  const features = [
    {
      title: "DSA Practice",
      description:
        "Master Data Structures and Algorithms with topic-wise questions and difficulty filters.",
      icon: "💻",
    },
    {
      title: "Aptitude Tests",
      description:
        "Improve quantitative, logical reasoning, verbal ability, and problem-solving skills.",
      icon: "🧠",
    },
    {
      title: "Mock Interviews",
      description:
        "Practice real interview questions and boost confidence for placements.",
      icon: "🎤",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Prepify?
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Everything you need to prepare for placements in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
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
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;