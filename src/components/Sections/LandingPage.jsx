import React from "react";

const LandingPage = () => {
  return (
    <section className=" w-full bg-[#ff4500] p-10 pt-36 pb-6 flex justify-center items-center">
      <article className="flex flex-col justify-center items-start gap-2 text-[0.8rem]">
        <p className="uppercase text-white tracking-[0.3rem] text-[0.6rem]">
          Start a Blog for free
        </p>
        <main className="w-[60%] flex flex-col justify-center items-start gap-6">
          <h2 className="text-7xl font-cambo">
            Publish, grow, and, all in one place.
          </h2>
          <p className="w-[90%]">
            If you have a story to tell, knowledge to share, or a perspective to
            offer - welcome home. Sign up for free so your writing can thrive in
            a network supported by millions of readers - not ads.
          </p>
        </main>
        <button className="py-1 px-8 bg-white rounded-full text-lg mt-8">
          Start writing
        </button>
      </article>
      <article className="w-2/4 hidden md:flex"></article>
    </section>
  );
};

export default LandingPage;
