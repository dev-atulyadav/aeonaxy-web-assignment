import React from "react";
import Cube from "../../assets/images/cube-3d.png";

const Cubes = () => {
  return (
    <article className="w-[30rem] h-full p-8 relative xl:flex justify-center items-center hidden">
      <img src={Cube} className="h-32 absolute top-0 -left-20" alt="" />
      <img src={Cube} className="h-32 absolute bottom-0 -left-20" alt="" />
      <img src={Cube} className="h-40 absolute left-28" alt="" />
      <img src={Cube} className="h-32 absolute top-0 right-0" alt="" />
      <img src={Cube} className="h-32 absolute bottom-0 right-0" alt="" />
    </article>
  );
};

export default Cubes;
