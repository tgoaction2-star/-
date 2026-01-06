
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-100/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-100/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-orange-50 border border-orange-100 rounded-full text-orange-600 text-sm font-semibold tracking-wide">
            실행력 정체 구간을 돌파하는 강력한 개입
          </div>
          <h1 className="serif text-5xl md:text-7xl font-medium leading-[1.1] mb-6">
            당신이 변하지 <br />
            않는 건 <span className="text-clay-accent italic underline decoration-orange-300">의지</span> <br />
            때문이 아닙니다.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            무기력의 늪에서 허우적대는 시간은 끝났습니다. <br /> 
            상위 0.1%의 실행 메커니즘 <strong>생동력 엔진</strong>이 <br />
            당신의 삶을 자연스럽게 자동화 시켜드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 active:scale-95">
              인생 개입 신청하기
            </button>
            <button className="bg-white border border-gray-200 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all shadow-sm active:scale-95">
              성공 사례 엿보기
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[450px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 bg-white"
        >
          <div className="absolute inset-0 w-full h-[calc(100%+40px)] -top-5">
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-7NdTAo1QnS0rc7Uy8i1sv9wl/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="pointer-events-auto"
            ></iframe>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-16 bg-white z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-4 bg-white z-20" />
          <div className="absolute inset-0 border-[12px] border-white pointer-events-none rounded-[2.5rem] z-10" />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll to wake up</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
