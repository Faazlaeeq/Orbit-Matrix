"use client";

import CustomBtn from "./Reusables/CustomBtn";
import GradientTxt from "./Reusables/GradientTxt";
import profImg from "../../../public/me with border circle.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const MotionImage = motion(Image);

  return (
    <section className="my-[80px] items-center gap-16 xl:flex">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-[25px] font-bold leading-[110%] md:text-[8px] lg:text-[52px]">
          <GradientTxt tagName="span" txt="Stop Juggling Vendors." />
          <br></br>Get Everything You Need for Digital Growth in One Place.
        </h1>

        <p className="mb-16 text-[30px] text-[#666] lg:text-[22px]">
          We are the Integrated Solutions Hub that designs, develops, and automates your brand's performance—from stunning websites and apps to intelligent Power BI dashboards and complete GoHighLevel funnels.
        </p>

        <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
          <CustomBtn txt="Start Project Now" className="w-[200px]" href="/contact" />
        </div>
      </motion.div>

      <div className="relative flex justify-center lg:w-[100%]">
        <MotionImage
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profImg}
          alt="profile image"
          className="mx-auto w-full lg:w-[500px]"
          priority
        />


      </div>
    </section>
  );
}
