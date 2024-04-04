import React, { useContext, useState } from "react";
import { MoreContext } from "../../context/MoreState";
import { HiArrowLongDown } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const More = () => {
  const [showAnswer, setShowAnswer] = useState("");
  const { data } = useContext(MoreContext);
  return (
    <section className="bg-black text-white w-full flex justify-center items-start flex-col">
      <h2 className="text-3xl sm:text-4xl font-cambo px-10 py-6">
        More about writing on Medium:
      </h2>
      <article className="">
        {data.map((value, index) => (
          <main
            key={index}
            onClick={() =>
              showAnswer == "" || showAnswer!==value.question
                ? setShowAnswer(value.question)
                : setShowAnswer("")
            }
            className="w-screen flex flex-col justify-center items-start gap-8 border-b px-10 py-6 cursor-pointer"
          >
            <div className="w-full flex justify-between items-center">
              <p className="w-[90%]">{value.question}</p>
              <HiArrowLongDown className={`hidden sm:block text-3xl ${showAnswer==value.question && "rotate-180"}`}/>
              <IoMdArrowDropdown className={`sm:hidden text-3xl ${showAnswer==value.question && "rotate-180"}`}/>
            </div>

            {showAnswer === value.question && (
              <div className="text-sm w-full">
                <p className="w-[90%]">{value.answer}</p>
              </div>
            )}
          </main>
        ))}
        <main className="flex w-full justify-center items-center gap-4 px-10 py-6 text-sm flex-wrap">
          <p>Looking for help getting started?</p>
          <Link to="/" className="py-1 px-6 bg-white rounded-full text-black">
            Check out our guide
          </Link>
        </main>
      </article>
    </section>
  );
};

export default More;
