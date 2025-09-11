import React from "react";

import { Calculator, BookOpen, BookText, GraduationCap, Clock } from "lucide-react";
import { Link } from "react-router";

const tools = [
  {
    id: 1,
    name: "Calculator",
    description: "Do quick math calculations easily.",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
    link: "/tools/calculator",
  },
  {
    id: 2,
    name: "Notes",
    description: "Write and save your personal notes.",
    icon: <BookOpen className="w-10 h-10 text-green-600" />,
    link: "/tools/notes",
  },
  {
    id: 3,
    name: "Dictionary",
    description: "Find word meanings quickly.",
    icon: <BookText className="w-10 h-10 text-orange-600" />,
    link: "/tools/dictionary",
  },
  {
    id: 4,
    name: "GPA Calculator",
    description: "Calculate your semester GPA easily.",
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    link: "/tools/gpa-calculator",
  },
  {
    id: 5,
    name: "Time Table",
    description: "Manage your class routine.",
    icon: <Clock className="w-10 h-10 text-pink-600" />,
    link: "/tools/timetable",
  },
];

const Tools = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">🛠️ Student Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="card bg-base-100 shadow-md p-5 hover:shadow-lg transition rounded-xl"
          >
            <div className="flex justify-center mb-3">{tool.icon}</div>
            <h3 className="text-lg font-semibold text-center">{tool.name}</h3>
            <p className="text-sm text-gray-600 text-center mb-3">{tool.description}</p>
            <div className="flex justify-center">
              <Link
                to={tool.link}
                className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
              >
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
