import React, { useContext } from "react";
import DeviceUi from "./DeviceUi";
import { InsightSectionContext } from "../../context/InsightSectionState";

const InsightSection = () => {
  const { data } = useContext(InsightSectionContext);
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <article className="w-full flex flex-col justify-center items-center gap-40 border border-black p-14 text-center">
        <main className="flex justify-center items-center flex-col gap-8">
          <h2 className="font-cambo text-4xl sm:text-7xl w-[90%]">
            Find and grow your audience.
          </h2>
          <p>
            With simple tools and features, you have the chance to connect with
            over 100 million curious readers.
          </p>
        </main>
      </article>
      <article className="flex justify-center items-stretch flex-col lg:flex-row w-full">
        <main className="flex justify-start items-center flex-col border border-black p-10 gap-10 overflow-hidden">
          <div className="flex justify-center items-start flex-col gap-12">
            <h3 className="text-3xl sm:text-4xl font-cambo ">{data.first.title}</h3>
            <p className="text-sm">{data.first.description}</p>
          </div>
          <div className="relative hidden justify-center items-start lg:flex">
            <span className="absolute -right-6">
              <DeviceUi Ui={data.first.img[0]} width={"w-48"} />
            </span>
            <span className="absolute top-10 -left-12">
              <DeviceUi Ui={data.first.img[1]} width={"w-48"} />
            </span>
          </div>
        </main>
        <main className="flex justify-between items-start flex-col border-b border-black w-full">
          <div className="flex justify-center items-center border-r border border-black flex-wrap sm:flex-nowrap w-full">
            {data.second.map((value, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start gap-12 border sm:border-0 sm:border-r-2 border-black p-6 h-full w-full"
              >
                <h3 className="text-3xl sm:text-4xl font-cambo">{value.title}</h3>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center flex-col lg:flex-row w-full">
            {data.third.map((value, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start gap-12 border border-black p-6 w-full h-full"
              >
                <h3 className="text-3xl sm:text-4xl font-cambo">{value.title}</h3>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </main>
      </article>
    </section>
  );
};

export default InsightSection;
