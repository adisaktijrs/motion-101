import { motion as m } from 'framer-motion';
import { container, item } from '../animation';

import Header from '../components/Header';

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-8"
    >
      <Header />
      <main>
        <div className="p-1 my-72 overflow-hidden">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            Happy Pickle
          </m.h1 >
        </div>
        <div className="flex justify-between">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-latoBold text-left lg:text-4xl md:text-2xl text-xl"
          >
            <div className="overflow-hidden">
              <m.h2 variants={item}>Design</m.h2>
            </div>
            <div className="overflow-hidden">
              <m.h2 variants={item}>Company</m.h2>
            </div>
            <div className="overflow-hidden">
              <m.h2 variants={item}>2022</m.h2>
            </div>
          </m.div>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-right lg:text-2xl md:text-base text-sm"
          >
            <div className="overflow-hidden py-1">
              <m.h3 variants={item}>The pickle gonna make you smile.</m.h3>
            </div>
            <div className="overflow-hidden py-1">
              <m.h3 variants={item}>Scottish designs to make you happy.</m.h3>
            </div>
            <div className="overflow-hidden py-1">
              <m.h3 variants={item}>Click contant for cool transition.</m.h3>
            </div>
          </m.div>
        </div>
      </main>
    </m.div>
  );
}
