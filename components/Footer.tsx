
import React from 'react';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">SG</div>
              <span className="serif font-bold text-xl tracking-tight">생동력연구소</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              정체된 삶을 깨우는 강력한 솔루션. <br />
              Think Go Action 철학으로 당신의 내일을 재설계합니다.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">프로그램</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">1:1 생동력 컨설팅</a></li>
              <li><a href="#" className="hover:text-black transition-colors">비즈니스 엑셀러레이팅</a></li>
              <li><a href="#" className="hover:text-black transition-colors">멘탈 코칭 프로그램</a></li>
              <li><a href="#" className="hover:text-black transition-colors">연구소 멤버십</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">연구소 정보</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">철학 및 비전</a></li>
              <li><a href="#" className="hover:text-black transition-colors">연구진 소개</a></li>
              <li><a href="#" className="hover:text-black transition-colors">성공 사례</a></li>
              <li><a href="#" className="hover:text-black transition-colors">미디어룸</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">고객 지원</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-black transition-colors">상담 신청하기</a></li>
              <li><a href="#" className="hover:text-black transition-colors">이용 약관</a></li>
              <li><a href="#" className="hover:text-black transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-gray-400 text-xs">
          <p>© 2024 Life Power Institute (생동력연구소). All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Powered by 생동력 엔진 (Vitality Engine)</span>
            <span>Made with passion for growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
