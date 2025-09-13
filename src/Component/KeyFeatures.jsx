import { FaCreditCard, FaUniversity, FaShieldAlt, FaChartLine, FaLightbulb, FaHeartbeat } from "react-icons/fa";

export default function KeyFeatures() {
  const features = [
    {
      id: 1,
      icon: <FaCreditCard className="text-blue-600 text-4xl" />,
      title: "Instant Payments",
      desc: "Transfer money in seconds."
    },
    {
      id: 2,
      icon: <FaUniversity className="text-green-600 text-4xl" />,
      title: "Easy Bank Linking",
      desc: "Connect accounts seamlessly."
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-purple-600 text-4xl" />,
      title: "Top Security",
      desc: "Bank-level encryption."
    },
    {
      id: 4,
      icon: <FaChartLine className="text-pink-600 text-4xl" />,
      title: "Smart Insights",
      desc: "Track expenses & savings."
    },
    {
      id: 5,
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: "Credit Cards",
      desc: "Rewards & cashback."
    },
    {
      id: 6,
      icon: <FaHeartbeat className="text-red-600 text-4xl" />,
      title: "Insurance Plans",
      desc: "Affordable coverage."
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
