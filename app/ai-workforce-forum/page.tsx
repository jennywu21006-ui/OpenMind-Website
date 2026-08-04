'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

// 页面滚动图集（峰会现场实拍）
const aiForumHighlightImages = [
  "/images/ai-forum/h1.jpg",
  "/images/ai-forum/h2.jpg",
  "/images/ai-forum/h3.jpg",
  "/images/ai-forum/h4.jpg",
  "/images/ai-forum/h5.jpg",
  "/images/ai-forum/h6.jpg",
  "/images/ai-forum/h7.jpg",
];

// PPT内全部演讲嘉宾（头像文件名一一对应）
const aiSpeakerList = [
  {
    id: "monica",
    name: "Monica Wang",
    title: "Overseas Expansion Consultant for Top Enterprises | Founder of AGI Villa",
    speechContent: "Overseas Business Layout Logic Under AI Agent Trend\n·Four core nodes of global business expansion\n·How AI tools reduce cross-border operation costs",
    bio: "Monica Wang has long provided strategic consulting services for many well-known Chinese enterprises going global. She focuses on combining artificial intelligence with cross-border commercial operations, helping enterprises build standardized overseas operation systems based on intelligent agents.",
    avatar: "/avatars/ai-forum/monica.png"
  },
  {
    id: "wangqiyuan",
    name: "Qiyuan Wang",
    title: "Partner, PwC",
    speechContent: "Global Organizational Restructuring Driven by Intelligent Agents\n·Enterprise profit model iteration in AI era\n·Compliance & risk control for multinational organizations",
    bio: "Qiyuan Wang is a senior partner at PwC, specializing in corporate strategy, cross-border financial management and organizational transformation. He has delivered dozens of transformation consulting projects for manufacturing and internet groups.",
    avatar: "/avatars/ai-forum/wangqiyuan.png"
  },
  {
    id: "huyingzhou",
    name: "Yingzhou Hu",
    title: "Founder, Youji Zhihui",
    speechContent: "Practical Landing Path of Digital Employees & AI Agents\n·Real cases of intelligent system implementation in domestic enterprises\n·Cost reduction data of human-machine collaborative teams",
    bio: "Yingzhou Hu founded Youji Zhihui, focusing on the commercial landing of enterprise-level AI agents. He has rich on-site implementation experience in manufacturing, retail and cross-border industries.",
    avatar: "/avatars/ai-forum/huyingzhou.png"
  },
  {
    id: "zhaohuanhuan",
    name: "Huanhuan Zhao",
    title: "AI Transformation Coach | Senior AI Trainer, Alibaba DAMO Academy",
    speechContent: "AI Agent Reshapes Human Resource System\n·Job reconstruction under intelligent collaboration\n·New competency evaluation standards for employees",
    bio: "Huanhuan Zhao serves as industry cooperation expert of Shanghai Robotics Industry Research Institute. She has long been engaged in AI talent training and enterprise digital transformation coaching work.",
    avatar: "/avatars/ai-forum/zhaohuanhuan.png"
  },
  {
    id: "mengyan",
    name: "Yan Meng",
    title: "Senior Government AI Landing Consultant, iFLYTEK",
    speechContent: "Full-scenario Enterprise AI System Construction Framework\n·Multi-agent automatic scheduling technical logic\n·Closed-loop business automation solutions",
    bio: "Yan Meng is in charge of business expansion for government & enterprise intelligent products at iFLYTEK, with a large number of industrial intelligent platform delivery cases.",
    avatar: "/avatars/ai-forum/mengyan.png"
  },
  {
    id: "xingyi",
    name: "Yi Xing",
    title: "Chief AI Officer, Ansipai Technology | Founder of Ripple",
    speechContent: "Vertical Industry AI Agent Customized Development\n·How to build exclusive intelligent system for enterprise business links",
    bio: "Yi has deep technical accumulation in large model application and enterprise private AI deployment, providing customized intelligent agent solutions for industrial and cross-border enterprises.",
    avatar: "/avatars/ai-forum/xingyi.png"
  },
  {
    id: "chenzhichao",
    name: "Zhichao Chen",
    title: "CEO, Shanghai Zhiqi Education Technology",
    speechContent: "Talent Training System Matching AI Organization\n·Enterprise internal intelligent talent training path",
    bio: "Zhichao Chen focuses on corporate digital talent education, designing systematic training courses for enterprises adapting to AI organizational transformation.",
    avatar: "/avatars/ai-forum/chenzhichao.png"
  },
  {
    id: "yinzijian",
    name: "Zijian Yin",
    title: "Co-founder & Algorithm Expert, Shuhua Zhisuan",
    speechContent: "Underlying Algorithm Logic of Enterprise Digital Employees\n·Lightweight Agent deployment solutions for small & medium enterprises",
    bio: "Zijian Yin leads the algorithm team to develop low-cost, easy-to-use enterprise intelligent tools, lowering the threshold of AI transformation for SMEs.",
    avatar: "/avatars/ai-forum/yinzijian.png"
  }
];

// 峰会完整日程
const agendaList = [
  { time: "13:00 - 13:40", type: "Registration", content: "Guest Sign-in & On-site Communication" },
  { time: "13:40 - 14:00", type: "Opening Speech", content: "Opening Remarks | Host: Monica Wang, AGI Villa Founder" },
  { time: "14:00 - 14:25", type: "Keynote", content: "Overseas Business Layout Logic Under AI Agent Trend | Monica Wang" },
  { time: "14:25 - 14:50", type: "Keynote", content: "Global Organizational Restructuring Driven by Intelligent Agents | Qiyuan Wang, PwC Partner" },
  { time: "14:50 - 15:15", type: "Keynote", content: "Practical Landing Path of Digital Employees & AI Agents | Yingzhou Hu" },
  { time: "15:15 - 15:35", type: "Short Break", content: "Buffet & Networking Exchange" },
  { time: "15:35 - 16:00", type: "Keynote", content: "AI Agent Reshapes Human Resource System | Huanhuan Zhao" },
  { time: "16:00 - 16:25", type: "Keynote", content: "Full-scenario Enterprise AI System Construction Framework | Yan Meng, iFLYTEK" },
  { time: "16:25 - 17:10", type: "Roundtable Discussion", content: "New Enterprise Organizational Paradigm in AI Agent Era\nModerator: Huanhuan Zhao\nPanelists: All Invited Industry Experts" },
  { time: "17:10 - 17:40", type: "Free Exchange", content: "One-on-one Enterprise Cooperation Matching & In-depth Communication" },
];

export default function AiWorkforceForumPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const scrollStep = 1;
  const intervalTime = 20;
  const loopImages = [...aiForumHighlightImages, ...aiForumHighlightImages];

  const autoScroll = useCallback(() => {
    const scrollBox = scrollRef.current;
    if (!scrollBox) return;
    if (isHover) return;
    if (scrollBox.scrollLeft >= scrollBox.scrollWidth / 2) {
      scrollBox.scrollLeft -= scrollBox.scrollWidth / 2;
    } else {
      scrollBox.scrollLeft += scrollStep;
    }
  }, [isHover]);

  useEffect(() => {
    const scrollBox = scrollRef.current;
    if (!scrollBox) return;
    scrollBox.scrollLeft = 0;
    const timer = setInterval(autoScroll, intervalTime);
    return () => clearInterval(timer);
  }, [autoScroll]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部峰会Banner */}
      <section className="bg-[#0c1a38] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <p className="text-sm tracking-widest text-sky-300 mb-2">OpenMind Global Expansion & Innovation Series</p>
          <h1 className="text-4xl font-bold mb-4">OpenMind AI Agent Organization Summit 2026</h1>
          <p className="text-xl text-sky-100 mb-6">New Paradigms of Enterprise Organizations in the Age of AI Agents</p>
          <div className="flex justify-center gap-6 text-gray-300 text-sm flex-wrap">
            <span>📅 July 31, 2026</span>
            <span>📍 Shanghai, China</span>
            <span>🎫 Invitation-only Enterprise Summit</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 活动背景 */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#3399ff] pl-3 text-gray-900">Event Background</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>On July 31, 2026, OpenMind Events under JR Group successfully held the summit themed "New Paradigms of Enterprise Organizations in the Age of AI Agents" in Shanghai. This summit focused on the innovation of enterprise organizational forms under the AI wave, and carried out in-depth discussions around core topics such as human-machine collaboration, digital employees and AI agent implementation, building a platform for idea collision and industrial cooperation for entrepreneurs and technical leaders.</p>
            <p>The core topics of the summit directly hit industry pain points: AI is no longer just an auxiliary tool for enterprises, but a core component of corporate capabilities. The focus of market competition is shifting from "owning AI tools" to building an efficient human-machine collaborative organization. Around enterprise organizational restructuring, management model innovation and value creation iteration, the summit provided brand-new ideas for enterprises in transformation period.</p>
            <p>With the continuous commercialization of large language models, AI Agents, digital employees and embodied intelligence, the traditional enterprise organizational structure, manpower system and decision-making process are undergoing subversive changes. More and more enterprises are trying to introduce digital employees into business operations, and the human-machine collaboration model has gradually become normalized.</p>
            <p>This summit gathered industrial experts, consulting practitioners and technical service providers, and shared implementable transformation plans combined with a large number of front-line practical cases. OpenMind will continue to hold summits focusing on cutting-edge technology, industrial transformation and global expansion to help enterprises seize AI era development dividends.</p>
          </div>
        </section>

        {/* Summit Core Highlights */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#3399ff] pl-3 text-gray-900">Summit Core Highlights</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#3399ff] font-bold text-lg mt-0.5">•</span>
              <span>Frontier industry discussion targeting real operation pain points of domestic and cross-border enterprises.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3399ff] font-bold text-lg mt-0.5">•</span>
              <span>All speakers share verified landing cases covering manufacturing, cross-border e-commerce, finance and technology industries.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3399ff] font-bold text-lg mt-0.5">•</span>
              <span>Closed-door roundtable forum for enterprise decision-makers and top industry experts.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3399ff] font-bold text-lg mt-0.5">•</span>
              <span>One-on-one business matching session to connect AI suppliers and enterprise demand sides.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3399ff] font-bold text-lg mt-0.5">•</span>
              <span>Offline communication space to promote long-term industrial cooperation after summit.</span>
            </li>
          </ul>
        </section>

        {/* Invited Speakers */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-[#3399ff] pl-3 text-gray-900">Invited Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSpeakerList.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">
                <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border border-sky-100 relative mx-auto md:mx-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                  <p className="text-[#3399ff] font-medium mt-1">{item.title}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800">Speech Topics</h4>
                    <p className="text-sm text-gray-700 whitespace-pre-line mt-2">{item.speechContent}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800">Profile</h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Event Agenda */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-[#3399ff] pl-3 text-gray-900">Full Event Agenda</h2>
          <div className="space-y-4">
            {agendaList.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-b pb-4">
                <div className="w-[160px] shrink-0 font-mono text-[#3399ff] font-bold">{item.time}</div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-sky-50 text-[#3399ff] text-xs rounded border border-sky-200">{item.type}</span>
                  <p className="mt-2 text-gray-800 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights 自动滚动画廊 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 border-l-4 border-[#3399ff] pl-3 text-gray-900">Highlights</h2>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden pb-4"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {loopImages.map((imgUrl, idx) => (
              <div key={idx} className="min-w-[320px] h-[200px] rounded-lg overflow-hidden shadow-sm relative flex-shrink-0">
                <Image
                  src={imgUrl}
                  alt={`Summit scene ${(idx % aiForumHighlightImages.length)+1}`}
                  fill
                  sizes="320px"
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = "0.3";
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Roundtable Theme Introduction */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#3399ff] pl-3 text-gray-900">Roundtable Discussion Theme</h2>
          <p className="text-gray-700 leading-relaxed">
            The roundtable discussion centered on "New Enterprise Productivity Architecture Under Human-AI Collaboration". Guests discussed challenges of organizational transformation, human-machine work division, modular business loops, digital employee system construction, and sustainable business models adapted to AI era with real enterprise operation cases.
          </p>
        </section>

        {/* 联合举办方 & 赞助企业（已按照PPT补齐全部品牌） */}
        <section className="bg-white p-8 rounded-xl shadow mb-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#3399ff] pl-3 text-gray-900">Co-organizers</h2>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              <div className="relative w-44 h-28">
                <Image
                  src="/images/brand-agivilla.png"
                  alt="AGI Villa"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-44 h-28">
                <Image
                  src="/images/brand-xinruilab.png"
                  alt="Xinrui Lab"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#3399ff] pl-3 text-gray-900">Sponsors</h2>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              <div className="relative w-36 h-24">
                <Image
                  src="/images/brand-hsbc.png"
                  alt="HSBC"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-36 h-24">
                <Image
                  src="/images/brand-shuhua.png"
                  alt="Shuhua Zhisuan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Business Inquiries & Cooperation</h2>
          <p className="text-gray-700">Contact: Jenny Wu</p>
          <p className="text-gray-700">Phone: +86 138 1755 0309</p>
          <p className="text-gray-700">Email: jenny.wu@openmindevents.com</p>
        </section>
      </div>
    </div>
  );
}