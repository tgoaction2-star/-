
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatSection from './components/ChatSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-200">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="philosophy" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block p-2 mb-6"
            >
              <div className="w-12 h-12 mx-auto border border-black rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </motion.div>
            <h2 className="serif text-4xl md:text-5xl font-medium mb-8">성공은 의지의 산물이 아닙니다. <br/><span className="text-clay-accent">정교한 설계</span>의 결과입니다.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              자신의 나약함을 자책하지 마십시오. 당신은 단지 '생동력'이라는 연료를 태우는 법을 모를 뿐입니다. <br />
              우리는 당신의 내면에 잠든 실행 엔진을 강제로 폭발시키기 위해 존재합니다.
            </p>
          </div>
        </section>

        <Features />
        
        <ChatSection />

        <section className="py-24 bg-clay">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-100 flex flex-col items-center">
              <div className="w-full text-center md:text-left mb-8">
                <h3 className="serif text-3xl mb-4">내일도 똑같이 살 것인가, <br/>아니면 <span className="text-clay-accent underline decoration-2">개입</span>받을 것인가.</h3>
                <p className="text-gray-600">
                  변화는 결심하는 순간이 아니라, 전문가의 개입이 시작되는 순간 일어납니다. <br/>지금 바로 생동력 연구소의 핵심 전략을 받아보세요.
                </p>
              </div>
              
              <div className="w-full flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="이메일 주소" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="전화번호 (010-0000-0000)" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                <div className="flex items-start gap-3 px-2">
                  <input 
                    type="checkbox" 
                    id="privacy-consent" 
                    className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
                  />
                  <label htmlFor="privacy-consent" className="text-sm text-gray-500 leading-snug cursor-pointer select-none">
                    <a 
                      href="https://cafe.naver.com/taurus123/7145" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-orange-600 font-semibold underline hover:text-orange-700 transition-colors"
                    >
                      개인정보 활용 동의
                    </a>
                    (전자책 제공 및 향후 정보 제공을 위해 제출해주신 정보를 활용하는 데 동의하시나요?)
                  </label>
                </div>

                <button className="w-full bg-clay-accent text-white px-8 py-5 rounded-xl text-lg font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-[0.98] transform">
                  무료 비법서 신청하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
