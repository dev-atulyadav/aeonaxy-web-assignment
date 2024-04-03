import React, { useContext } from "react";
import { NetworkInfoContext } from "../../context/NetworkInfoState";

const NetworkSection = () => {
  const { data } = useContext(NetworkInfoContext);
  return (
    <section className="w-full p-10 py-8 bg-black text-white flex justify-between items-start flex-wrap lg:flex-nowrap gap-4">
      <article>
        <h2 className="font-cambo text-4xl sm:text-7xl">
          Join a network of curious minds.
        </h2>
      </article>
      <article className="w-full lg:w-2/4">
        {data.map((value, index) => (
          <main
            key={index}
            className="flex justify-start items-center p-1.5 gap-4 border-t border-b"
          >
            <img src={value.img} className="h-10 rounded-full" alt="404" />
            <div className="flex flex-col justify-center items-start">
              <h3>{value.name}</h3>
              <span className="flex justify-start items-center flex-wrap gap-1 text-[0.6rem] uppercase">
                {value.roles.map((role, index) => (
                  <p key={index}>
                    {role}
                    {value.roles.length - 1 == index ? "" : ","}
                  </p>
                ))}
              </span>
            </div>
          </main>
        ))}
      </article>
    </section>
  );
};

export default NetworkSection;
