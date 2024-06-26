import React, { useContext } from "react";
import DeviceUi from "./DeviceUi";
import Ui_1 from "../../assets/images/ui-1.png";
import Ui_2 from "../../assets/images/ui-2.png";
import { Link } from "react-router-dom";
import { CreateBlogContext } from "../../context/CreateBlogState";

const CreateBlog = () => {
  const { gettingStart } = useContext(CreateBlogContext);
  return (
    <section className="w-full flex flex-col bg-[#f6c9b0] overflow-scroll">
      <article className="w-full flex justify-between items-center border-b border-black py-8 px-10 overflow-hidden">
        <main className=" w-full flex flex-col justify-between gap-10 lg:gap-60 ">
          <h2 className="font-cambo text-4xl sm:text-7xl w-3/4">
            Create your space.
          </h2>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="text-sm w-2/3">
              Tell your story your way - with different ways to write, style,
              and brand your work.
            </p>
            <Link
              to="/"
              className="py-1.5 px-5 text-center rounded-full bg-black text-white"
            >
              Start writing
            </Link>
          </div>
        </main>
        <main className="hidden relative lg:flex justify-center items-center">
          <div className="absolute right-40 -top-52">
            <DeviceUi Ui={Ui_1} />
          </div>
          <div className="absolute right-6 -top-12">
            <DeviceUi Ui={Ui_2} />
          </div>
        </main>
      </article>
      <article className="flex justify-center items-center flex-wrap md:flex-nowrap md:h-60 lg:h-auto w-full">
        {gettingStart.map((value, index) => (
          <main
            key={index}
            className="border border-black p-10 flex flex-col gap-8 sm:text-sm w-full h-full"
          >
            <h3 className="text-3xl sm:text-4xl font-cambo">{value.title}</h3>
            <div className="">{value.content}</div>
          </main>
        ))}
      </article>
    </section>
  );
};

export default CreateBlog;
