"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col bg-slate-700 h-96 w-96 mx-20 rounded-lg justify-center items-center">
      <h1 className="text-5xl md:hidden">Hello Produto</h1>
      <div className="flex flex-col">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://s2-gshow.glbimg.com/AEQ0ZWkhh-HOnSFeYcm2b2DzOTg=/0x0:6643x4480/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2024/P/8/j7rb9FQR2yKUQJ4tlbUg/sepia-style-effect-with-moon-phase-night-sky.jpg"
            alt="Product Image"
            width={200}
            height={0}
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <p className="p-2 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quae atque, provident quibusdam expedita facilis sunt laboriosam
            fuga accusantium ipsam tempora dolor tempore molestias eum nihil
            labore doloribus illum voluptatem?
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row  gap-3 bg-green-300 md:bg-yellow-300 p-5">
          <button className="py-2 w-full hover:bg-sky-600 duration-300 bg-green-500">
            Entrar
          </button>
          <button className="py-2 w-full bg-green-500">Cadastro</button>
        </div>
      </div>
    </div>
  );
}
