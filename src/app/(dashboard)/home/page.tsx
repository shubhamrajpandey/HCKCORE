import WhoSection from "@/app/components/who-section/WhoSection";
import Image from "next/image";

import Card from "@/app/components/cards/Card";


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
          <Card/>
        </div>

        <WhoSection/>

    

        <div className="flex justify-around py-4">
          <div className="px-11">
            <p className="text-[20px]/10 text-gray-500">Undergraduate</p>
            <button className="w-[250px] h-[80px] border-2 border-transparent rounded-[6px] bg-[#A4C93A] text-[20px] font-semibold cursor-pointer hover:bg-white hover:text-[#A4C93A] transition duration-300">Information Technology</button><br/>
            <button className="w-[250px] h-[80px] border-none rounded-[6px] ml-70 mt-4 bg-[#44BFB1] text-[20px] font-semibold  hover:bg-white hover:text-[#44BFB1] transition duration-300">Cyber Security</button><br/>
            <button className="w-[250px] h-[80px] border-none rounded-[6px] mt-4 bg-[#C7C7C7] text-[20px] font-semibold  hover:bg-white hover:text-[#C7C7C7] transition duration-300">International Business<br/>Management</button>
            <p className="text-[20px]/10 ml-70 text-gray-500">Postgraduate</p>
            <button className="w-[250px] h-[80px] border-none rounded-[6px] ml-70 bg-[#FFC93F] text-[20px] font-semibold  hover:bg-white hover:text-[#FFC93F] transition duration-300">Business Administration</button>
          </div>
          <div  className="py-35 mr-20" >
            <h1 className="text-[45px]/15 font-semibold tracking-normal">Programs we<br/>Support</h1>
            <p className="text-[21px] py-4">Available for both undergraduate<br/>and postgraduate levels.</p>
          </div>
        </div>

        <div className="text-[50px] font-semibold tracking-[0.5px] text-center py-17 font-Poppins mt-7">
          <h1> A resource-sharing platform for</h1>
          <h1> Herald College Kathmandu</h1>
        </div>
      </section>
      
    </>
  );
}
