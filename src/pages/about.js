import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animatedtext from "./components/Animatedtext";
import Image from "next/image";
import profilepic from "../../public/images/profile/developer-pic-2.png";
import Skills from "./components/Skills";
import Experiance from "./components/Experiance";
import { motion } from "framer-motion";

function about() {
  return (
    <>
      <Navbar />
      <div className=" mt-16 relative  xl:px-32 px-16 text-dark w-full min-h-screen ">
        <main className=" relative z-10 flex w-full  items-center justify-center flex-col">
          <Animatedtext text={"A Passionate Developer!"} />
          <div className=" relative flex flex-row  mt-32  gap-32">
            <div className=" basis-1/2 ">
              <h2 className=" mb-5 text-lg font-bold text-dark/75">
                BIOGRAPGY
              </h2>
              <p className="   text-md font-medium ">
                Lorem ipsum <b>dolor sit amet</b> dolor sit amet consectetur
                adipisicing elit. Nemo fuga non consequatur ab neque. Deserunt
                aliquam eius sint rerum quo, consequuntur dolor aperiam aut
                voluptas veniam ratione quisquam veritatis illo hic
                necessitatibus sed dolores soluta animi reprehenderit amet omnis
                et optio sapiente iste. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Autem, eos?
              </p>
              <br />
              <p className="text-md font-medium">
                Perferendis iste tempore odit doloribus voluptatem eos. Et
                consectetur dicta excepturi officia ut nobis, quaerat ad
                recusandae sed deserunt. Velit veniam ad, labore nemo accusamus
                mollitia cum vero libero consequatur dignissimos ex quibusdam
                totam explicabo veritatis provident reprehenderit earum? Odio
                eos nem.
              </p>
              <br />
              <p className="text-md font-medium">
                veniam tenetur asperiores possimus sed iusto laborum corporis
                sunt architecto fugit delectus sapiente qui repudiandae.
              </p>
            </div>
            <div className="max-w-[50vh]">
              <div className=" basis-1/2 bg-light relative  flex items-center   rounded-2xl border-2 border-dark border-solid p-8 w-full  h-max ">
                <div className=" absolute -z-10 rounded-2xl  top-3 -right-3  w-[102%]   bg-dark h-[102%]" />

                <Image
                  className="  rounded-2xl   w-full  h-auto "
                  alt="profile"
                  src={profilepic}
                />
              </div>
            </div>
          </div>
          <Skills />

          <Experiance />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default about;
