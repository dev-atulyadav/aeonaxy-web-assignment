import React from "react";
import { Link } from "react-router-dom";
import Img_1 from "../../assets/images/img-1.jpg"

const LandingPage = () => {
  return (
    <section className=" w-full bg-[#f24d2d]  flex justify-center items-center overflow-scroll">
      <article className="flex flex-col justify-center items-start gap-2 text-sm sm:text-[0.8rem] border-r border-black h-full p-10 pt-36 pb-6">
        <p className="uppercase text-white tracking-[0.3rem] text-[0.6rem]">
          Start a Blog for free
        </p>
        <main className="w-[60%] flex flex-col justify-center items-start gap-6">
          <h2 className="text-4xl sm:text-7xl font-cambo">
            Publish, grow, and, all in one place.
          </h2>
          <p className="w-[90%]">
            If you have a story to tell, knowledge to share, or a perspective to
            offer - welcome home. Sign up for free so your writing can thrive in
            a network supported by millions of readers - not ads.
          </p>
        </main>
        <Link to="/" className="py-1 px-8 bg-white rounded-full text-lg mt-8">
          Start writing
        </Link>
      </article>
      <article className="w-[60rem] hidden md:flex justify-center">
        <img src={Img_1} className="h-[30rem]" alt="" />
      </article>
    </section>
  );
};

export default LandingPage;
