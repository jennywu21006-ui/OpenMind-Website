'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// ========== 复用你原有的数据源（完全复制过来） ==========
const speakerList = [
  {
    id: "monicawang",
    category: "Host",
    name: "Monica Wang",
    titleLine1: "Overseas Expansion Advisor for Leading Enterprises",
    titleLine2: "Founder of AGI Villa",
    titleLine3: "",
    speechTopic: "",
    speechHighlights: [],
    bio: "Global expansion advisor for multiple top corporations, with hundreds of millions of cross-lingual video views and weekly live streams covering global expansion, AI and entrepreneurship. Founder of AGI Villa (3,000+ AI entrepreneurs) and BridgingChina (200K followers). A former journalist who has visited 60 countries over 15 years, she is an in-depth observer and connector of tech globalisation. Serial entrepreneur, former CEO/CMO of unicorns in AI coding, youth education, Web3, local life services and social e-commerce; her startups have raised over 1.5 billion RMB from Sequoia China, Linear Capital, Junlian Capital, Innovation Works and other institutions. Mother of three, marathon runner.",
    avatar: "/avatars/ai-forum/monicawang.png"
  },
  {
    id: "wangqiyuan",
    category: "Speaker",
    name: "Wang Qiyuan",
    titleLine1: "PwC",
    titleLine2: "Partner",
    titleLine3: "",
    speechTopic: "AI-Driven Corporate Transformation: Organisational Restructuring, Practical Innovation & Transformation Insights",
    speechHighlights: [
      "How AI Agents reshape corporate organisations and future work models",
      "PwC’s real-world enterprise AI transformation practices",
      "Case studies of AI implementation within corporations",
      "Challenges and takeaways from AI-powered organisational transformation"
    ],
    bio: "Partner, Tax & Business Consulting, PwC China, with more than 17 years of tax and business consulting experience focusing on Chinese enterprises’ global expansion and multinationals’ operations in China. He has led cross-border tax, M&A restructuring and corporate strategy consulting projects for well-known organisations including Fosun, Alibaba, Xiaomi and Sequoia Capital. He brings profound hands-on experience in corporate digital transformation, cross-border investment and organisational restructuring in the AI era.",
    avatar: "/avatars/ai-forum/wangqiyuan.png"
  },
  {
    id: "huyingzhou",
    category: "Speaker",
    name: "Hu Yingzhou",
    titleLine1: "Youji Zhihui",
    titleLine2: "Founder",
    titleLine3: "",
    speechTopic: "From Digital Employees to Physical Silicon Entities: Commercial Loops, Capital Logic & Global Breakthrough of Embodied Intelligence",
    speechHighlights: [
      "Industrial evolution of Physical Agents (embodied intelligence)",
      "Commercial deployment of embodied intelligence in manufacturing, logistics and high-risk scenarios",
      "How investment institutions evaluate embodied intelligence startups",
      "Standardisation strategies for global expansion and collaborative overseas market entry"
    ],
    bio: "Master’s degree from Shanghai University of Finance and Economics. He specialises in building industrial ecosystems for embodied intelligence, commercialisation and industrial investment & financing. He maintains deep connections with robot OEMs, core component suppliers and AI algorithm firms, having participated in over 50 commercial projects and capital matching initiatives. He created the “One-Page Due Diligence Model for Embodied Intelligence” and built the S&D Intelligent Matching Engine to empower the globalisation of Chinese embodied intelligence industrial chains.",
    avatar: "/avatars/ai-forum/huyingzhou.png"
  },
  {
    id: "zhaohuanhuan",
    category: "Speaker",
    name: "Zhao Huanhuan",
    titleLine1: "AI Robotics Industry Transformation Consultant Coach",
    titleLine2: "Senior AI Trainer, Alibaba DAMO Academy",
    titleLine3: "Industry Cooperation Expert, Shanghai Robotics Industry Technology Research Institute",
    speechTopic: "Embodied Intelligence & Blue-Collar Workforce: How AI Robots Reshape the Future of Labor",
    speechHighlights: [
      "Latest commercial deployment cases of humanoid robots in manufacturing, logistics and retail",
      "How AI robots move beyond virtual environments to take over repetitive, high-risk manual labor",
      "Impacts of embodied intelligence on industrial upgrading and labor market restructuring",
      "Strategies for enterprises to manage talent transition and organizational reform in the AI robotics era"
    ],
    bio: "Master of Artificial Intelligence, The University of Hong Kong. She has 16 years of cross-industry management experience across domestic and international markets, dedicated to designing AI robotics transformation pathways for traditional industry professionals. She consistently drives deep integration of AI, robotics technology and industrial applications, with extensive practical experience in AI talent development, industrial transformation and commercialization of embodied intelligence.",
    avatar: "/avatars/ai-forum/zhaohuanhuan.png"
  },
  {
    id: "mengyan",
    category: "Speaker",
    name: "Meng Yan",
    titleLine1: "iFLYTEK",
    titleLine2: "Business Development Manager",
    titleLine3: "Senior Technical Consultant for Government & Enterprise AI Implementation",
    speechTopic: "Enterprise-Grade Application Scenarios & Deployment Cases Powered by Large Language Models",
    speechHighlights: [
      "Core capability matrix and underlying architecture of large language models",
      "Enterprise intelligent applications and efficiency-boosting use cases"
    ],
    bio: "Specialised in commercial deployment of AI technology. Former technical lecturer for iFLYTEK Open Platform, proficient in Spark large model and voice AI enterprise integration solutions. He has delivered AI project rollouts for top enterprises including Meitu, Didi and Inspur, covering digital transformation scenarios across government and private industries. He possesses end-to-end practical expertise spanning technical integration, solution design and business delivery. Focused on large model industrial commercialisation, he delivers lightweight, high-value AI implementation solutions tailored for physical enterprises.",
    avatar: "/avatars/ai-forum/mengyan.png"
  },
  {
    id: "xingyi",
    category: "Speaker",
    name: "Xing Yi",
    titleLine1: "Chief AI Technology Officer, AnsiPai AI Technology Co., Ltd.",
    titleLine2: "Founder of Ripple",
    titleLine3: "",
    speechTopic: "From Forecasting the Future to Verifying Decisions: How Ripple Builds a Closed Loop for Corporate Decision Simulation & Evidence Tracking",
    speechHighlights: [
      "Enterprises require verifiable, reviewable decision systems rather than purely responsive intelligent agents",
      "Ripple simulates diverse scenarios via multi-agent systems to predict plans, risks and failure boundaries; it links simulation with real-world execution, analyzes deviations and forms a traceable decision-making closed loop",
      "Pushing intelligent agents toward verifiability, authorisation, rollback functionality and continuous iterative learning"
    ],
    bio: "His research covers multi-agent simulation, complex adaptive systems and product design for corporate decision intelligence. He leads the overall architecture of Ripple, simulating interactions between market participants, organisations and social actors within virtual environments. He advances large models, multi-agent systems and reinforcement learning toward enterprise decision systems with defined evidence boundaries, real-world feedback loops and governance frameworks.",
    avatar: "/avatars/ai-forum/xingyi.png"
  },
  {
    id: "yinzijian",
    category: "Panel Guest",
    name: "Yin Zijian",
    titleLine1: "Shuhua Intelligent Computing",
    titleLine2: "Partner | Algorithm Expert",
    titleLine3: "",
    speechTopic: "",
    speechHighlights: [],
    bio: "Partner and core algorithm expert at Shuhua Intelligent Computing. Former Algorithm Engineer at Baidu Intelligent Cloud and AI Product Manager at NetEase Fuxi Lab. National Champion of the 2026 Shenzhen Institute of Advanced Technology Winter Innovation Competition (1 out of 1,800 participants), incubated under Professor Li Zexiang’s innovation system. Algorithm consultant for Gansu Humanoid Robot Center. His expertise spans industrial intelligence and corporate digitalisation, combining algorithm R&D, AI product design and commercial delivery. He leads R&D for Shuhua Intelligent Computing’s large model data decision product line, focusing on low-cost, highly deployable AI data intelligence solutions for small and medium-sized enterprises and industrial digital transformation scenarios.",
    avatar: "/avatars/ai-forum/yinzijian.png"
  },
  {
    id: "chenzhichao",
    category: "Panel Guest",
    name: "Chen Zhichao",
    titleLine1: "Shanghai Zhiqiying Education Technology Co., Ltd.",
    titleLine2: "CEO",
    titleLine3: "",
    speechTopic: "",
    speechHighlights: [],
    bio: "He ranked 3rd nationwide in the 2025 ASEAN AI + Cross-border E-commerce Innovation Application Competition, and received the WaytoAGI Global Hackathon AI Explorer Award as well as the Outstanding AI Potential Award of Shanghai at the 2025 China International Import Expo. He is a certified AI Agent Practitioner, senior prompt engineer trained by Alibaba DAMO Academy, and Datawhale certified engineer. He also serves as a distinguished AI enterprise implementation trainer at the 5G Integrated Application & Talent Training Laboratory, expert member of Yitang.top Academy, and expert member of Hunt Brand Hangzhou Campus.",
    avatar: "/avatars/ai-forum/chenzhichao.png"
  }
]

const days = [
  {
    label: 'Agenda',
    theme: 'Full Event Schedule',
    sessions: [
      {
        time: '13:30–14:00',
        type: 'Registration',
        title: 'Guest Check-in & Pre-event Networking',
        speaker: "Attendee check-in and free communication."
      },
      {
        time: '14:00–14:05',
        type: 'Opening',
        title: 'Opening Remarks',
        speaker: "Host opens the event, introducing the forum theme, agenda and all attending guests."
      },
      {
        time: '14:05–14:25',
        type: 'Keynote',
        title: "Keynote Speech: AI-Driven Corporate Transformation: Organizational Restructuring, Practical Innovation & Transformation Experience",
        speaker: "Speaker: Wang Qiyuan | Partner, PwC"
      },
      {
        time: '14:25–14:45',
        type: 'Keynote',
        title: "Keynote Speech: From Digital Employees to Physical Silicon Entities: Commercial Loops, Capital Logic & Global Breakthrough of Embodied Intelligence",
        speaker: "Speaker: Hu Yingzhou | Founder, Youji Zhihui"
      },
      {
        time: '14:45–15:05',
        type: 'Keynote',
        title: "Keynote Speech: How Embodied Intelligence Reshapes the Workforce: Humanoid Robots Driving Future Labor Transformation",
        speaker: "Speaker: Zhao Huanhuan | AI Robotics Industry Transformation Consultant Coach"
      },
      {
        time: '15:05–15:35',
        type: 'Panel',
        title: "Panel Discussion I: How AI Agents Restructure Traditional Corporate Organizations",
        speaker: "Host: Zhao Huanhuan | Panelists: Wang Qiyuan, Hu Yingzhou, Chen Zhichao"
      },
      {
        time: '15:35–15:55',
        type: 'Break',
        title: "Coffee Break & Free Networking",
        speaker: "Light refreshments and free communication for all guests."
      },
      {
        time: '15:55–16:00',
        type: 'Opening',
        title: 'Audience Re-entry',
        speaker: "Host reminds attendees to take seats for the second session."
      },
      {
        time: '16:00–16:20',
        type: 'Keynote',
        title: "Keynote Speech: Enterprise-Grade Application Scenarios & Deployment Cases Powered by Large Language Models",
        speaker: "Speaker: Meng Yan | Business Development Manager, iFLYTEK, Senior Technical Consultant for Government & Enterprise AI Implementation"
      },
      {
        time: '16:20–16:40',
        type: 'Keynote',
        title: "Keynote Speech: From Forecasting the Future to Verifying Decisions: How Ripple Builds a Closed Loop for Corporate Decision Simulation & Evidence Tracking",
        speaker: "Speaker: Xing Yi | Chief AI Technology Officer, AnsiPai AI Technology Co., Ltd., Founder of Ripple"
      },
      {
        time: '16:40–17:05',
        type: 'Panel',
        title: "Panel Discussion II: AI Agents × New Organizational Structures × New Business Growth",
        speaker: "Host: Zhao Huanhuan | Panelists: Meng Yan, Xing Yi, Chen Zhichao"
      },
      {
        time: '17:05–17:15',
        type: 'Closing',
        title: "Event Summary & Group Photo",
        speaker: "Host summarizes core viewpoints of the forum, thanks all speakers and partners; group photo with all guests."
      },
      {
        time: '17:15 onwards',
        type: 'Break',
        title: "Free Networking Session",
        speaker: "Unrestricted business communication and negotiation among attendees."
      }
    ]
  }
];

const typeColors: Record<string, string> = {
  Keynote: 'bg-blue-50 text-blue-700 border-blue-200',
  Panel: 'bg-purple-50 text-purple-700 border-purple-200',
  Workshop: 'bg-green-50 text-green-700 border-green-200',
  Session: 'bg-gray-100 text-gray-700 border-gray-200',
  'Case Study': 'bg-amber-50 text-amber-700 border-amber-200',
  Roundtable: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Registration: 'bg-gray-50 text-gray-600 border-gray-200',
  Break: 'bg-gray-50 text-gray-600 border-gray-200',
  Opening: 'bg-gray-50 text-gray-600 border-gray-200',
  Close: 'bg-gray-50 text-gray-600 border-gray-200',
  Closing: 'bg-gray-50 text-gray-600 border-gray-200',
};

export default function AiForum2026() {
  const scrollToTarget = (id: string) => {
    const targetEl = document.getElementById(id);
    if (!targetEl) return;
    const elRect = targetEl.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + elRect.top - 80,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 返回首页按钮 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
          ← Back to Homepage
        </Link>
      </div>

      {/* About the Summit 板块 */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About the Summit
              </h2>
              <div className="space-y-5 text-gray-700 text-base leading-7">
                <p>
                  As generative AI, embodied robotics and autonomous workflow tools get widely adopted across industries, enterprises are facing unprecedented adjustments to organizational structure, job responsibilities and talent development systems. Many management teams are struggling to answer core practical questions: which roles will be automated, what new competencies employees need, and how HR strategy should evolve to match technological progress.
                </p>
                <p>
                  This closed-door half-day forum gathers senior practitioners from consulting firms, leading AI startups, manufacturing enterprises and research institutions. Instead of abstract theoretical sharing, all sessions focus on real-world implementation cases, measurable transformation outcomes and actionable operational frameworks that attendees can introduce inside their own companies directly.
                </p>
                <p>
                  Participants will obtain first-hand industry insights, build connections with peer decision-makers, and shape their own roadmap for workforce adaptation in the AI era. We intentionally limit total attendance to 50 seats to guarantee high-quality discussion, one-on-one networking and deep exchange between speakers and guests.
                </p>
              </div>
            </div>
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/about-summit.png"
                alt="About the Summit"
                fill
                unoptimized
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 演讲嘉宾头部 */}
      <section id="speakers" className="pt-24 pb-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
              OpenMind 2026
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Our Conference Speakers
            </h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToTarget('agenda')}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:border-[#2563eb] hover:text-[#2563eb] transition-colors bg-transparent"
              >
                View Full Agenda
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 嘉宾卡片列表 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {speakerList.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-40 h-40 shrink-0 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-100 relative">
                    <Image
                      src={speaker.avatar}
                      alt={speaker.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[#2563eb] text-sm font-medium">{speaker.category}</span>
                    <h3 className="text-3xl font-bold mt-1 text-gray-900">{speaker.name}</h3>
                    <div className="my-3 bg-[#0f1740] text-white px-4 py-3 rounded-md inline-block">
                      <p>{speaker.titleLine1}</p>
                      {speaker.titleLine2 && <p className="mt-1">{speaker.titleLine2}</p>}
                      {speaker.titleLine3 && <p className="mt-1">{speaker.titleLine3}</p>}
                    </div>

                    {speaker.speechTopic && (
                      <>
                        <h4 className="text-lg font-semibold text-[#2563eb] mt-2">Keynote Topic: {speaker.speechTopic}</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
                          {speaker.speechHighlights.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    <h4 className="text-lg font-semibold mt-4 text-gray-800">Guest Introduction</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 议程头部 */}
      <section id="agenda" className="pt-24 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            PROGRAMME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Agenda
          </h2>
          <p className="text-gray-700 max-w-2xl text-lg font-light">
            Full Day Schedule · Keynotes + Industry Roundtables + Interactive Discussion
          </p>
        </div>
      </section>

      {/* 议程列表 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {days.map((day) => (
            <div key={day.label} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{day.label}</h3>
                  <p className="text-[#2563eb] text-sm font-medium">{day.theme}</p>
                </div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="space-y-2">
                {day.sessions.map((session, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-lg border bg-white ${
                      ['Break', 'Opening', 'Closing', 'Registration'].includes(session.type)
                        ? 'opacity-60'
                        : 'hover:shadow-sm transition-shadow'
                    }`}
                  >
                    <div className="w-14 flex-shrink-0">
                      <span className="text-[#2563eb] font-mono text-sm font-bold">
                        {session.time}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded border ${
                            typeColors[session.type] || 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}
                        >
                          {session.type}
                        </span>
                      </div>
                      <p className="font-medium text-gray-900 text-sm leading-snug">
                        {session.title}
                      </p>
                      {session.speaker && (
                        <p className="text-gray-600 text-xs mt-1 whitespace-pre-line">
                          {session.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}