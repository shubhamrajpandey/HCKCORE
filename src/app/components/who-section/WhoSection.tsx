"use client";

import { useEffect, useState } from "react";

const roles = [
  {
    title: "Module Leaders",
    points: [
      "Upload official learning materials for each module",
      "Review and approve student-submitted content",
      "Organize resources by tags, topics, or weekly structure",
    ],
    img: "/imgs/ModuleLeader.png",
  },
  {
    title: "Students",
    points: [
      "Submit helpful links like tutorials, articles, or GitHub projects",
      "Discover approved course-aligned content curated by instructors",
      "Access extra learning resources beyond the classroom",
    ],
    img: "/imgs/Student.png",
  },
];

export default function WhoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeRole = roles[activeIndex];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-16 rounded-xl flex flex-col md:flex-row items-center justify-between gap-30">
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-[50px] font-bold mb-4">
            Who is HCK Core for?
          </h2>
          <p className="text-gray-700 text-base md:text-[22px]/9">
            Designed for both students and module leaders,
            <br /> HCK Core simplifies academic sharing and <br />
            collaboration.
          </p>
        </div>

        <div className="flex-1 w-full ">
  
          <div className="bg-gray-100 p-10  w-[550px] rounded-xl shadow-md">
           
            <div
              className="relative rounded-xl overflow-hidden p-10 h-[420px] flex flex-col justify-between transition-all duration-500 ease-in-out bg-white"
              style={{
                backgroundImage: `url(${activeRole.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-[40px] font-bold mb-4">{activeRole.title}</h3>
              <ul className="list-disc pl-5 mb-16 text-[18px] text-black font-medium tracking-[0.2px] space-y-2">
                {activeRole.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
