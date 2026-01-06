
import React from 'react';
import { Lightbulb, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Think: 뇌 구조의 재설계",
    description: "성공할 수밖에 없는 '사고의 알고리즘'을 이식합니다. 당신의 뇌가 실패의 두려움 대신 해결책에 반응하도록 튜닝합니다.",
    icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50"
  },
  {
    title: "Go: 심리적 임계점 돌파",
    description: "생각만 하던 단계를 넘어 실제로 '발을 떼게' 만듭니다. 무의식의 저항을 무력화하고 행동의 가속도를 붙입니다.",
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    title: "Action: 압도적 성과 도미노",
    description: "노력이 아닌 '시스템'으로 움직입니다. 단 한 번의 성공이 아닌, 지속 가능한 승리 습관을 당신의 삶에 완전히 박제합니다.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    color: "bg-yellow-50"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="serif text-4xl md:text-5xl mb-4 font-medium">Think, Go, Action.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">더 이상 어설픈 위로에 속지 마십시오. 결과로 증명하는 생동력연구소만의 필승 메커니즘입니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="serif text-2xl mb-4 font-medium">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
