"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  {
    title: "Module Leaders",
    points: [
      "Upload official learning materials for each module",
      "Review and approve student-submitted content",
      "Organize resources by tags, topics, or weekly structure",
    ],
    img: "/imgs/module-leader.png",
  },
  {
    title: "Students",
    points: [
      "Submit helpful links like tutorials, articles, or GitHub projects",
      "Discover approved course-aligned content curated by instructors",
      "Access extra learning resources beyond the classroom",
    ],
    img: "/imgs/student.png",
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
  <div className="max-w-7xl mx-auto  px-6 py-16 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10">
   
    <div className="flex-1 text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Who is HCK Core for?
      </h2>
      <p className="text-gray-700 text-base md:text-lg">
        Designed for both students and module leaders, HCK Core simplifies academic sharing and collaboration.
      </p>
    </div>

    
    <div className="flex-1 w-full max-w-md">
      <div
        className="relative rounded-xl overflow-hidden shadow-md p-10 h-[420px] flex flex-col justify-between transition-all duration-500 ease-in-out bg-white"
        style={{
          backgroundImage: `url('/imgs/card-bg-pattern.png')`, 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white bg-opacity-90 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4">{activeRole.title}</h3>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2">
            {activeRole.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <Image
            src={activeRole.img}
            alt={activeRole.title}
            width={400}
            height={200}
            className="w-full h-[180px] object-contain transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
