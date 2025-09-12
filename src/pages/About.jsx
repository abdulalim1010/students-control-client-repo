import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">About Students Toolkit</h1>
      
      <p className="text-lg mb-6">
        🎓 <span className="font-semibold">Students Toolkit</span> is an all-in-one platform 
        designed to help students manage their academic life with ease. 
        From <span className="font-medium">exam schedules</span> to 
        <span className="font-medium"> attendance tracking</span>, 
        <span className="font-medium"> fees management</span>, and 
        <span className="font-medium"> study tools</span>, everything is organized 
        in one dashboard.
      </p>

      {/* Features Section */}
      <h2 className="text-2xl font-semibold mb-4">✨ Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>📅 Track upcoming exams with schedules and descriptions.</li>
        <li>✅ Monitor attendance and stay updated on class participation.</li>
        <li>💰 Manage admission, tuition, seminar, and lab fees in one place.</li>
        <li>🔔 Receive notifications about important academic events.</li>
        <li>🛠️ Access helpful study tools to improve learning.</li>
      </ul>

      {/* Vision / Mission */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl text-black font-semibold mb-3">🌟 Our Vision</h2>
        <p className="text-black  ">
          Our mission is to make student life simpler and more productive by bringing 
          all essential academic resources together. We believe in empowering students 
          with tools that save time, reduce stress, and improve learning outcomes.
        </p>
      </div>

      {/* Team / Footer */}
      <div className="mt-10 text-center">
        <p>
          Made with ❤️ by the <span className="font-semibold">Students Toolkit Team</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
