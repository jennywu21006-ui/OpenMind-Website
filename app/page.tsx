'use client';
import Image from 'next/image';

// ========== 1. 嘉宾数据源（完整7人） ==========
const speakerList = [
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
    avatar: "/avatar/zhaohuanhuan.png"
  },
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
    avatar: "/avatar/monicawang.png"
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
    avatar: "/avatar/wangqiyuan.png"
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
    bio: "Master’s degree from Shanghai University of Finance and Economics. He specialises in building industrial ecosystems for embodied intelligence, commercialisation and industrial investment & financing. He maintains deep connections with robot OEMs, core component suppliers and AI algorithm firms, having participated in over 50 commercial projects and capital matching initiatives. He created the “One-Page Due Diligence Model for Embodied Intelligence” and built the S&D Intelligent Matching Engine to empower the globalisation of Chinese embodied intelligence industrial chains through standardisation.",
    avatar: "/avatar/huyingzhou.png"
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
    avatar: "/avatar/mengyan.png"
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
    avatar: "/avatar/xingyi.png"
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
    avatar: "/avatar/yinzijian.png"
  }
]

// ========== 2. 完整议程数据源（全部内容已转为英文） ==========
const days = [
  {
    label: 'Agenda',
    theme: 'AI-Driven Workforce Transformation & Restructuring · 13:30–17:30',
    sessions: [
      {
        time: '13:30',
        type: 'Opening',
        title: 'Opening Remarks & Context Introduction',
        speaker: 'Topic: Standing at the Crossroads of Workforce Transformation · 13:30 - 13:40 (10 minutes)'
      },
      {
        time: '13:40',
        type: 'Keynote',
        title: 'Keynote Session 1: Technology Frontier & Job Restructuring',
        speaker: 'Background: The widespread adoption of AI Agents in enterprise workflows, alongside automation for white-collar work including legal, financial, copywriting and basic programming tasks. Focus: Analyze the inflection point where AI evolves from human assistance to fully independent end-to-end task execution. · 13:40 - 14:10 (30 minutes)'
      },
      {
        time: '14:10',
        type: 'Keynote',
        title: 'Keynote Session 2: Embodied Intelligence & Blue-Collar Workforce',
        speaker: 'Background: Latest commercial rollout of humanoid robots across manufacturing, logistics and retail industries. Focus: How AI breaks out of virtual environments to replace repetitive, high-risk manual labor at scale. · 14:10 - 14:40 (30 minutes)'
      },
      {
        time: '14:40',
        type: 'Panel',
        title: 'Industry Roundtable: Cost Efficiency Improvement & Talent Pain Points in Enterprise Transformation',
        speaker: 'Discussion Topics: How enterprises balance short-term staffing adjustment costs and long-term productivity gains after AI adoption; new required workforce competencies such as prompt engineering and AI compliance auditing. Expected guests: HR leaders from leading tech firms, CIOs from traditional manufacturing/finance sectors, AI startup CEOs and management consultants. · 14:40 - 15:30 (50 minutes)'
      },
      {
        time: '15:30',
        type: 'Break',
        title: 'Networking Break & Casual Discussion',
        speaker: 'Event Highlight: Dedicated AI tool demo zone for attendees to test cutting-edge workflow solutions during break time. · 15:30 - 15:55 (25 minutes)'
      },
      {
        time: '15:55',
        type: 'Roundtable',
        title: 'Cross-Industry Discussion: Replacement or Coexistence? Redefining Human Work Value',
        speaker: 'Discussion Topics: As technical work like coding and spreadsheet management gets automated by AI, whether human competitive advantage will shift to soft skills including creativity, emotional intelligence and ethical decision-making; approaches to mitigate structural unemployment caused by technological progress. Expected guests: economists, AI ethics researchers, sci-fi authors and technology media practitioners. · 15:55 - 16:45 (50 minutes)'
      },
      {
        time: '16:45',
        type: 'Workshop',
        title: 'Interactive Workshop: 2030 Workforce Outlook Survey',
        speaker: 'Format: Live audience polls and anonymous comments about job roles resilient to AI automation, followed by real-time expert commentary. · 16:45 - 17:15 (30 minutes)'
      },
      {
        time: '17:15',
        type: 'Closing',
        title: 'Closing Speech & Key Takeaway Summary',
        speaker: 'Topic: Embrace Industrial Shifts & Upgrade Personal Skill Sets — Actionable Guidance for Future Professionals · 17:15 - 17:30 (15 minutes)'
      }
    ]
  }
];

const typeColors: Record<string, string> = {
  '主旨演讲': 'bg-blue-50 text-blue-700 border-blue-200',
  '产业圆桌': 'bg-purple-50 text-purple-700 border-purple-200',
  '跨界思辨': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  '互动工坊': 'bg-green-50 text-green-700 border-green-200',
  '开幕': 'bg-gray-50 text-gray-700 border-gray-200',
  '茶歇': 'bg-gray-50 text-gray-600 border-gray-200',
  '闭幕': 'bg-gray-50 text-gray-700 border-gray-200',
  Keynote: 'bg-blue-50 text-blue-700 border-blue-200',
  Panel: 'bg-purple-50 text-purple-700 border-purple-200',
  Workshop: 'bg-green-50 text-green-700 border-green-200',
  Session: 'bg-gray-100 text-gray-700 border-gray-200',
  'Case Study': 'bg-amber-50 text-amber-700 border-amber-200',
  Roundtable: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Registration: 'bg-gray-50 text-gray-600 border-gray-200',
  Break: 'bg-gray-50 text-gray-600 border-gray-200',
  Opening: 'bg-gray-50 text-gray-700 border-gray-200',
  Close: 'bg-gray-50 text-gray-600 border-gray-200',
};

export default function HomePage() {
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
      {/* 首页头部区域（已移除底部黑色隔断div） */}
      <section id="home" className="relative overflow-hidden">
        {/* 上半深色标题背景区 */}
        <div className="bg-[#0f172a] relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
            <div className="max-w-3xl bg-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
              <span className="inline-block bg-blue-600/20 text-[#60a5fa] text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full">
                FORUM PLANNING UNDERWAY FOR 2026
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
                OpenMind AI Workforce <span className="text-[#60a5fa]">Transformation</span> Forum 2026
              </h1>
              <p className="text-gray-300 text-xl font-light leading-relaxed mb-4">
                How AI Agents Are Reshaping Organizations, Talent and Leadership
              </p>
              <p className="text-gray-400 mb-6">
                A focused half-day forum for business and HR leaders navigating the AI-driven transformation of work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-gray-200 text-sm mb-7">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  Friday, July 31, 2026
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Shanghai, China
                </div>
              </div>
              <p className="text-gray-400 mt-3 text-sm mb-8">
                50 Founders, CEOs, CXOs, HR leaders, AI leaders, digital transformation leaders, innovation and business leaders
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollToTarget('speakers')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  View Guest Speakers
                </button>
                <button
                  onClick={() => scrollToTarget('agenda')}
                  className="px-6 py-3 border border-white text-white hover:bg-white hover:text-slate-900 rounded-md transition-colors"
                >
                  Check Full Agenda
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 中间纯白正文区域 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* 区块2：演讲嘉宾头部 #speakers */}
      <section id="speakers" className="pt-24 pb-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
              OpenMind 2026
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Our Conference Speakers
            </h2>
            <p className="text-gray-700 text-xl font-light leading-relaxed mb-8">
              Global HR & AI Transformation Leaders Shaping the Future of Work
            </p>
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

      {/* 嘉宾卡片列表区域：已删除红圈介绍文字，Image保留unoptimized适配本地头像 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {speakerList.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-44 h-44 shrink-0 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-100 relative">
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

                    <h4 className="text-lg font-semibold mt-4 text-gray-800">Speaker Bio</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 区块3：议程头部 #agenda，标题、说明全部英文 */}
      <section id="agenda" className="pt-24 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            PROGRAMME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI-Driven Workforce Transformation & Restructuring
          </h2>
          <p className="text-gray-700 max-w-2xl text-lg font-light">
            13:30–17:30 · Keynotes + Industry Roundtables + Cross-Domain Discussions + Interactive Workshop
          </p>
        </div>
      </section>

      {/* 完整议程列表区域，提示文案改为英文 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-10 text-sm text-yellow-800">
            <strong>Agenda Note:</strong> This programme covers three core sections: trend analysis & solution design, practical pain points & real-world cases, future workforce evolution & human-AI collaboration.
          </div>

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
                      ['Break', 'Opening', 'Closing'].includes(session.type)
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
                        <p className="text-gray-600 text-xs mt-1">
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