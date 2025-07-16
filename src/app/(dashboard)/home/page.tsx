import WhoSection from "@/app/components/who-section/WhoSection";
import Image from "next/image";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentDuotone } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";


export default function HomeSection() {
  return (
    <>
      <section className="relative bg-white text-black font-poppins overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/abstract wave.png"
            alt="Background Wave"
            width={1920}
            height={1117}
            className="w-full h-[700px] object-cover object-bottom"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Revolutionizing Academic Sharing.
          </h1>
          <h2 className="text-4xl md:text-5xl/22 font-bold mt-2">
            Curated Resources, Clearer Learning.
          </h2>
          <p className="text-xl/10 tracking-[1] ">
            A collaborative platform where students and module leaders upload,
          </p>
          <p className="text-xl/8 tracking-[1] ">
            explore, and manage academic content with ease.
          </p>
        </div>

        <div className="relative z-10 bg-transparent py-16 px-4">
          <div className="bg-[#1B1B1B] text-white text-center py-20 px-6 max-w-7xl h-[500px] mx-auto mb-12 ">
            <h1 className="text-2xl md:text-[45px]/15 font-semibold ">
              Designed for smarter collaboration <br />
              between students & educators <br />
              at Herald College
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 -mt-50">
            <div className="w-[320px] h-[350px] bg-white border rounded-xl p-6 shadow-[6px_6px_0px_#000000] hover:shadow-xl transition">
              <div className="mb-3">
               
                <LiaChalkboardTeacherSolid  className="w-8 h-8"/>
              </div>
              <h4 className="text-[30px] font-semibold mb-2">Teacher Moderation</h4>
              <p className="text-sm text-gray-700">
                Module leaders review and approve submissions to ensure they align
                with course objectives, maintain academic accuracy, and provide a
                trusted learning experience for all students.
              </p>
            </div>

            <div className="w-[320px] h-[350px] bg-white border rounded-xl p-6 shadow-[6px_6px_0px_#000000] hover:shadow-xl transition">
              <div className="mb-3">
                <PiStudentDuotone className="w-8 h-8"/>
              </div>
              <h4 className="text-[30px] font-semibold mb-2">
                Student Contributions
              </h4>
              <p className="text-sm text-gray-700">
                Students submit tutorials, articles, or GitHub projects supporting
                their coursework, helping peers learn from trusted resources.
              </p>
            </div>

            <div className="w-[320px] h-[350px] bg-white border rounded-xl p-6 shadow-[6px_6px_0px_#000000] hover:shadow-xl transition">
              <div className="mb-3">
                <IoSearchSharp className="w-8 h-8"/>
              </div>
              <h4 className="text-[30px] font-semibold mb-2">Tag-Based Discovery</h4>
              <p className="text-sm text-gray-700">
                Resources use smart tags by course week, topic, and contributor,
                making it easy to quickly filter and find what you need.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhoSection/>
    </>
  );
}
