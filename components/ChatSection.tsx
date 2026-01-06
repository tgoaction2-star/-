
import React, { useState } from 'react';
import { getVitalityConsultation } from '../services/gemini';
import { Send, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '../types';

const ChatSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getVitalityConsultation(userMsg);
    setChatHistory(prev => [...prev, { role: 'model', text: response || '에너지가 잠시 끊겼어요. 다시 한 번 말씀해 주시겠어요?' }]);
    setIsLoading(false);
  };

  return (
    <section id="consulting" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles size={14} /> 1:1 인생 개입 상담
          </div>
          <h2 className="serif text-4xl mb-4">당신의 정체 원인을 진단하세요</h2>
          <p className="text-gray-500">어설픈 위로가 아닌, 당신을 실제로 움직이게 할 에너지를 주입합니다.</p>
        </div>

        <div className="bg-clay rounded-3xl p-6 md:p-8 min-h-[500px] flex flex-col shadow-inner border border-gray-100">
          <div className="flex-1 space-y-6 overflow-y-auto max-h-[500px] mb-6 pr-2 scrollbar-hide">
            {chatHistory.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-6 opacity-80">
                <p className="text-center text-lg leading-relaxed">
                  혼자 고민하며 시간을 낭비하지 마세요.<br/>
                  제가 당신의 든든한 페이스메이커가 되어 드릴게요.<br/>
                  무엇이 당신을 힘들게 하나요?
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button onClick={() => setInput('자꾸만 미루게 돼요. 의지가 너무 약한 걸까요?')} className="text-sm border border-orange-200 bg-white text-orange-700 px-4 py-2 rounded-full hover:bg-orange-50 transition-all shadow-sm">"자꾸 미루게 돼요"</button>
                  <button onClick={() => setInput('아무것도 하기 싫은 무기력한 상태예요. 도와주세요.')} className="text-sm border border-orange-200 bg-white text-orange-700 px-4 py-2 rounded-full hover:bg-orange-50 transition-all shadow-sm">"무기력에서 탈출하고 싶어요"</button>
                  <button onClick={() => setInput('확실하게 결과를 내는 법을 알고 싶어요.')} className="text-sm border border-orange-200 bg-white text-orange-700 px-4 py-2 rounded-full hover:bg-orange-50 transition-all shadow-sm">"결과를 내는 실행력"</button>
                </div>
              </div>
            )}
            
            <AnimatePresence>
              {chatHistory.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] p-5 rounded-2xl ${msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-orange-50'}`}>
                    <p className="text-[15px] md:text-base leading-relaxed whitespace-pre-wrap font-medium">
                      {msg.text}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-orange-50">
                    <div className="flex items-center gap-3 text-orange-500">
                      <Loader2 className="animate-spin" size={18} />
                      <span className="text-sm font-semibold tracking-tight">당신의 에너지를 분석하며 진심을 담는 중...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="마음 속 이야기를 편하게 들려주세요..."
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-clay-accent text-white p-2.5 rounded-xl hover:bg-orange-600 disabled:bg-gray-300 transition-colors shadow-md active:scale-90"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-200/20 blur-[100px] rounded-full -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full translate-x-1/2" />
    </section>
  );
};

export default ChatSection;
