import React, { useState } from "react";
import DeviceUi from "./DeviceUi";

const CreateBlog = () => {
  const [gettingStart] = useState([
    {
      title: "Start a blog",
      content: (
        <p>
          Create a blog for free to have a personalized home for your writing.
          Brand <a href="">your space</a> and share your writing with readers on
          any device.
        </p>
      ),
    },
    {
      title: "Start a publication.",
      content: (
        <p>
          Collaborate with others or public under a brand name. Use our story
          submission system and expressive customization option.
        </p>
      ),
    },
  ]);
  return (
    <section className="flex flex-col bg-[#f6c9b0] px-10 py-8">
      <article className="flex justify-center items-center border-b border-black p-4">
        <main className="w-2/4 flex flex-col justify-betwee gap-60 ">
          <h2 className="font-cambo text-5xl sm:text-7xl">
            Create your space.
          </h2>
          <div>
            <p>
              Tell your story your way - with different ways to write, style,
              and brand your work.
            </p>
            <button>Start writing</button>
          </div>
        </main>
        <main className="w-2/4">
            <DeviceUi/>
        </main>
      </article>
      <article>
        {gettingStart.map((value, index) => (
          <main key={index}>
            <h3>{value.title}</h3>
            {value.content}
          </main>
        ))}
      </article>
    </section>
  );
};

export default CreateBlog;
