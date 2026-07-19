import Link from 'next/link';
import Image from 'next/image';

// All speaker data, 7 speakers: Zhao Huanhuan, Monica Wang, Wang Qiyuan, Hu Yingzhou, Meng Yan, Xing Yi, Yin Zijian
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

export default function SummitPage() {
  return (
    <>
      {/* Hero Header Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
              OpenMind 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Our Conference Speakers
            </h1>
            <p className="text-gray-700 text-xl font-light leading-relaxed mb-8">
              Global HR & AI Transformation Leaders Shaping the Future of Work
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                View Full Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Speaker List Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            {/* 已删除圈出的 ABOUT OUR SPEAKERS、大标题 Industry Experts with Real-World AI Experience */}
            <p className="text-gray-700 leading-relaxed">
              Every speaker on this stage has led tangible AI workforce transformation within large organizations.
              No theoretical lectures — only actionable case studies, leadership insights, and frameworks you can apply
              to your own talent, HR and organizational strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {speakerList.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar Container - Fixed Next.js Image layout */}
                  <div className="w-44 h-44 shrink-0 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-100 relative">
                    <Image
                      src={speaker.avatar}
                      alt={speaker.name}
                      fill
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
    </>
  );
}