"use client";

import { motion } from "framer-motion";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentDuotone } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";

export default function Home() {
  const cardItems =  [
          {
            icon: <LiaChalkboardTeacherSolid className="w-8 h-8 " />,
            title: "Teacher Moderation",
            desc: `Module leaders review and approve submissions to ensure they align
                   with course objectives, maintain academic accuracy, and provide a
                   trusted learning experience for all students.`,
          },
          {
            icon: <PiStudentDuotone className="w-8 h-8" />,
            title: "Student Contributions",
            desc: `Students submit tutorials, articles, or GitHub projects supporting
                   their coursework, helping peers learn from trusted resources.`,
          },
          {
            icon: <IoSearchSharp className="w-7 h-7" />,
            title: "Tag-Based Discovery",
            desc: `Resources use smart tags by course week, topic, and contributor,
                   making it easy to quickly filter and find what you need.`,
          },
        ]

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 -mt-50">
       {cardItems.map((card, index) => (
          <motion.div
            key={index}
            className="w-[320px] h-[350px] bg-white border rounded-xl p-6 shadow-[6px_6px_0px_#000000]   hover:shadow-[6px_6px_0px_#000000] transition"
            whileHover={{
              scale: 1.04,
              rotate: 0.5,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <div className="mb-3 border-none bg-[#E3E3E3] rounded-4xl h-10 w-10 p-1 ">{card.icon}</div>
            <motion.h4
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="text-[30px] font-semibold mb-2 origin-left"
            >
              {card.title}
            </motion.h4>
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="text-[15px]/6 text-gray-700 origin-left"
            >
              {card.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
