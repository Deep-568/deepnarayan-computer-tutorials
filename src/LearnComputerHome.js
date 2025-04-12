import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    title: "Top 5 Excel Shortcuts You Must Know",
    url: "https://www.youtube.com/watch?v=your_video_1",
  },
  {
    title: "MS Word Me Resume Kaise Banaye",
    url: "https://www.youtube.com/watch?v=your_video_2",
  },
  {
    title: "Excel Formulas for Beginners – Part 1",
    url: "https://www.youtube.com/watch?v=your_video_3",
  },
];

export default function LearnComputerHome() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-8 font-sans">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-green-600">Learn Computer with Deepnarayan</h1>
        <p className="mt-2 text-lg text-gray-700">
          Your go-to place for learning MS Excel, Word, and basic computer skills in Hindi.
        </p>
        <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow">
            📺 Subscribe on YouTube
          </button>
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="rounded-2xl shadow-md p-4 bg-white">
              <h3 className="text-lg font-medium text-gray-800">{video.title}</h3>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Watch Video
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Topics Covered</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>MS Excel Shortcuts & Formulas</li>
          <li>MS Word Practical Skills</li>
          <li>Computer Tips & Tricks in Hindi</li>
          <li>Interview & Job-Oriented Computer Skills</li>
        </ul>
      </section>

      <section className="text-center py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Stay Updated</h2>
        <p className="text-gray-600">Subscribe to the channel and never miss a video!</p>
        <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
          <button className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow">
            Go to Channel
          </button>
        </a>
      </section>
    </main>
  );
}