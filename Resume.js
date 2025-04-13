import "./styles.css";

import "./styles.css";
import React from "react";
export default function Resume() {
  return (
    <div className=" resume-container min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-2xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Penmetsa Nithya
        </h1>
        <p className="text-lg text-gray-600 mb-4">Full Stack Developer</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact</h2>
          <p>Email: 23wh1a1210@bvrithyderabad.edu.in</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: San Francisco, CA</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Summary</h2>
          <p>
            Experienced Full Stack Developer with a passion for building
            scalable web applications and working across the full stack from
            frontend to backend.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript, React, Node.js</li>
            <li>C programming, Python, Tailwind CSS</li>
            <li>MongoDB, PostgreSQL</li>
            <li>RESTful APIs, Git, Agile</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Education
          </h2>
          <div>
            <h3 className="text-xl font-bold text-gray-800">B.Tech</h3>
            <p className="text-gray-600">BVRIT Hyderabad – 2023 to Present</p>
            <ul className="list-disc list-inside">
              <li>CGPA - 8.8</li>
              <li>Developed web applications using React and Node.js</li>
              <li>
                Improved application performance and reduced load times by 30%
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Intermediate
          </h2>
          <p>Percentage - 96.7%</p>
        </section>
      </div>
    </div>
  );
}
