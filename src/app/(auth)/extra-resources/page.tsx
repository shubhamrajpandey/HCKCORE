"use client";

import React, { useEffect, useState } from "react";
import ExtraBox from "@/app/components/ExtraBox/ExtraBox";
import ExtraDropdown from "@/app/components/ProgramDropDown/ProgramDropDown";
import { FaLink, FaFile } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//type define
type ExtraData = {
  title: string;
  description: string;
  buttons: { label: string; icon: React.ReactNode }[];
};

//card per page = 3
const ITEMS_PER_PAGE = 3;

const ExtraPage = () => {
  const [resources, setResources] = useState<ExtraData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(resources.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchResources = async () => {
      //dummy data ready when the API from backend is ready
      const data: ExtraData[] = [
        {
          title: "React.js",
          description:
            "Build dynamic user interfaces using reusable components, state management, and modern frontend architecture with React.",
          buttons: [
            { label: "Link", icon: <FaLink /> },
            { label: "File", icon: <FaFile /> },
          ],
        },
        {
          title: "Next.js",
          description:
            "Build full-stack web applications with server-side rendering, routing, and API integration using Next.js.",
          buttons: [
            { label: "Link", icon: <FaLink /> },
            { label: "File", icon: <FaFile /> },
          ],
        },
        {
          title: "Django",
          description:
            "Create secure and robust web applications quickly using Django’s built-in tools, ORM, and admin interface.",
          buttons: [
            { label: "Link", icon: <FaLink /> },
            { label: "File", icon: <FaFile /> },
          ],
        },
        {
          title: "Node.js",
          description:
            "Develop scalable backend systems with non-blocking I/O and an event-driven model using Node.js.",
          buttons: [
            { label: "Link", icon: <FaLink /> },
            { label: "File", icon: <FaFile /> },
          ],
        },
        {
          title: "MongoDB",
          description:
            "Use MongoDB for flexible document-based NoSQL storage with high availability and scalability.",
          buttons: [
            { label: "Link", icon: <FaLink /> },
            { label: "File", icon: <FaFile /> },
          ],
        },
      ];
      setResources(data);
    };

    fetchResources();
  }, []);

  //slice gareko
  const paginatedItems = resources.slice(
    //page controll bhaye yes bata
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const visiblePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  //page 3 chha bhane 2 ma janu chha bhane it will - it.
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="ml-[250px] mt-[38px] flex flex-col bg-[#F4F4F4] p-6 min-h-screen">
      <ExtraDropdown />
      <h1 className="text-[20px] tracking-[1px] font-[500] py-8">
        Extra Resources
      </h1>

      {paginatedItems.map((item, idx) => (
        <div key={idx} className="mb-6">
          <ExtraBox
            title={item.title}
            description={item.description}
            buttons={item.buttons}
          />
        </div>
      ))}

      {/* Page slider */}

      <div className="max-w-7xl mt-6">
        <div className="flex justify-end space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="text-xl disabled:opacity-30 cursor-pointer"
          >
            <IoIosArrowBack className="text-[#434343]" />
          </button>

          {visiblePageNumbers().map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-2 py-1 text-[16px] font-medium rounded cursor-pointer ${
                currentPage === num ? "text-green-600" : "text-black"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-xl disabled:opacity-30 cursor-pointer"
          >
            <IoIosArrowForward className="text-[#434343]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraPage;
