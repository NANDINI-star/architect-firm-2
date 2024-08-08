"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/util";


export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-28 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-28 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-24 w-full translate-y-6 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-18 w-[14rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "4rem" }}
          whileInView={{ width: "8rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-18 w-32 -translate-y-[3rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] -translate-y-[3.5rem] bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-22 w-full -translate-y-[6.25rem] bg-slate-950"></div>
        <div className="z-50">
        {children}
        </div>
        
      </div>

      {/* <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div> */}
    </div>
  );
};
