'use client';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

// 12位中东嘉宾数据源，头像路径补齐middle-east子文件夹
const meSpeakerList = [
  {
    id: "amr",
    name: "Amr Baabood",
    title: "CEO | Arab Research Bureau (ARB)",
    speechContent: "Market Scale & Tech Demands of Oman’s Middle East Market\n·Geographic Strategic Advantages ·Diversified Economic Transformation (Oman Vision 2040)",
    bio: "Amr Baabood is the CEO of the Arab Research Bureau (ARB) and a leading figure behind COMEX, Oman’s largest tech exhibition. Holding economics and law expertise, Amr has long dedicated himself to driving digital transformation and innovation for Oman’s B2B and government sectors. Under his leadership, COMEX has grown into a core regional platform for dialogue on smart cities, artificial intelligence and digital infrastructure. Amr maintains close cooperation with public and private stakeholders to align all OITE initiatives with Oman Vision 2040 and the nation’s technological ambitions.",
    avatar: "/avatars/middle-east/amr.png"
  },
  {
    id: "ahmed",
    name: "Ahmed Farag",
    title: "Executive Director | Arab Research Bureau (ARB)",
    speechContent: "Official Launch of COMEX 2025 Oman ICT Exhibition\n·Industrial & Investment Trend Analysis ·Prospects for Deep Sino-Arab Connectivity & Tech Cooperation",
    bio: "Ahmed Farag serves as Executive Director of ARB and plays a central role in promoting flagship expos including COMEX and GHEDEX. With in-depth insights into regional markets, he leads sales and business development strategies for technology, education and innovation verticals. He has made key contributions to attracting global tech exhibitors and building core partnerships, lifting Oman’s digital profile. His dynamic leadership ensures every event delivers tangible value for participants and aligns with national digital transformation targets.",
    avatar: "/avatars/middle-east/ahmed.png"
  },
  {
    id: "hina",
    name: "Hina Javed",
    title: "Head of PR & Content Creation | Arab Research Bureau (ARB)",
    speechContent: "·Industry Trends & Challenges ·Corporate Strategic Layout for the Future ·Organizational & Cultural Restructuring",
    bio: "As ARB’s lead for content and communications, she takes charge of outreach for flagship events especially COMEX. She manages media relations, creates high-impact industry content and supports strategic external relations to raise visibility and success for our core exhibitions and projects.",
    avatar: "/avatars/middle-east/hina.png"
  },
  {
    id: "mohamed",
    name: "Mohamed Khaled",
    title: "Senior Strategic Consultant | Arab Research Bureau (ARB)",
    speechContent: "Digital Cooperation Pathways for the Future ·Balancing Sustainable Innovation & Social Responsibility",
    bio: "Mohamed Khaled is a senior strategic consultant at ARB, responsible for expansion and execution of flagship events like COMEX. With extensive B2B sales and event strategy experience, he helps attract regional & international exhibitors and unlock growth opportunities while elevating ARB’s value proposition in tech and education sectors. His proactive client-centric approach aligns perfectly with Oman Vision 2040 and the country’s innovation & digital transformation agenda.",
    avatar: "/avatars/middle-east/mohamed.png"
  },
  {
    id: "sultan",
    name: "Sultan Busaidi",
    title: "Marketing Director | Arab Research Bureau (ARB)",
    speechContent: "Global Experience in Tech Innovation & Industrial Upgrading ·How Multinationals Balance Localization & Globalization ·Potential for Sino-Arab Digital Economy Collaboration ·Investment & Cooperation Advice for Chinese Enterprises",
    bio: "Marketing & Communications Director of the Arab Research Bureau, in charge of COMEX strategic visualization. Specialized in brand development, digital promotion and media partnerships, he organizes tech expos to facilitate cross-regional and global platform exchanges.",
    avatar: "/avatars/middle-east/sultan.png"
  },
  {
    id: "wangyu",
    name: "Wang Yu",
    title: "Senior Regional Manager, East China | Alibaba Group",
    speechContent: "Strategic Upgrade for Chinese Companies Expanding from 'Going Out' to 'Going In' in the Middle East\n·'Going Out': Product & Trade-oriented Mindset ·Regional Transformation: New Growth Markets Outside China ·Tech Export & Knowledge Co-construction ·Industrial Embedding to Become a Link in Regional Value Chains",
    bio: "Digital marketing and transformation pioneer who has guided dozens of traditional enterprises through digital upgrades and built benchmark industry cases. Equipped with cutting-edge digital thinking and practical on-the-ground experience, he empowers enterprises to achieve leapfrog growth in the digital economy era.",
    avatar: "/avatars/middle-east/wangyu.png"
  },
  {
    id: "dujing",
    name: "Robin Du",
    title: "Chief Representative for China | IFZA Free Zone, UAE",
    speechContent: "Riding the Gulf Wave: Seize the Next Decade’s Opportunities in UAE’s Commercial Landscape\n·From Oil Dependency to Tech-driven Growth: UAE’s Economic Restructuring Path ·Race for Emerging Sectors: Who Takes the Lead in Digital & Green Energy High-growth Zones ·The Middle East Window for Chinese Enterprises: Capture Opportunities Amid Policy & Market Shifts",
    bio: "Long-term consultant for global cross-border corporations, providing professional consulting and technical solutions across automotive, consumer electronics, medical, aerospace and other vertical sectors. His services cover both foreign companies’ high-quality development in China and localized operation support for Chinese firms venturing into the Middle East.",
    avatar: "/avatars/middle-east/dujing.png"
  },
  {
    id: "liukai",
    name: "Liu Kai",
    title: "General Manager | Dubai Real Estate Group",
    speechContent: "Anchor in Dubai: Unlock Golden Tracks for Real Estate Investment & Corporate Global Expansion\n·New Heights of Global Asset Allocation: Stability & Appreciation Potential of Dubai Real Estate ·Tax-friendly & Free Capital Flow: Why Dubai Is the Top Choice for High-net-worth Individuals & Enterprises Expanding Overseas ·From Settlement to Regional Expansion: How Enterprises Build Middle East Footprints via Dubai",
    bio: "Pioneer & thought leader in overseas real estate investment with a decade of industry track record. Drawing cross-hemisphere strategic vision and forward-looking market insight, he created the 'Value Gap Capture' investment methodology to precisely pinpoint value in global real estate cycles. As a wealth allocation specialist for high-net-worth clients, his full-cycle dynamic investment model has generated over 100 million RMB in asset appreciation for customers, redefining the value boundaries of overseas real estate investment and mapping wealth growth routes for investors across economic cycles.",
    avatar: "/avatars/middle-east/liukai.png"
  },
  {
    id: "idris",
    name: "Idris Bhuiya Akil",
    title: "Marketing Lead | Beijing Gaoke Data Co., Ltd.",
    speechContent: "Panel 1 Moderator\n·Current Industry Landscape & Future Trends ·Internationalization Strategy & Global Vision ·Talent Development & Organizational Transformation",
    bio: "International strategy expert with a UK business administration background and rich experience in luxury automotive sales & marketing. He integrates intelligent sales technology to lead big data & AI-driven automotive brand programs. Focused on the Middle East and ASEAN markets where AI & automotive innovation are reshaping industries, he builds media partnerships and delivers cross-border compliance consulting while cooperating with groups like the Thailand Automobile Association. Idris links business, technology and policy to help automotive brands scale globally via data-driven strategies.",
    avatar: "/avatars/middle-east/idris.png"
  },
  {
    id: "liudi",
    name: "Liu Di",
    title: "General Manager | Shanghai Oujian Network Development Group Co., Ltd.",
    speechContent: "Panel 2 Guest\n·Insights & Investment Opportunities in Emerging Middle East Markets ·Challenges of Tech Localization for Overseas Exporters ·Integration of Digital & Green Industries",
    bio: "Customs clearance & logistics specialist with over 20 years of experience. He possesses deep logistics management expertise and full familiarity with international trade & customs procedures, offering efficient international freight, customs filing, warehousing and storage services. Well-versed in international trade rules, freight forwarding and warehouse management, he has designed cross-border logistics solutions for oversized shipments to Australia, Mongolia, Russia and more, delivering end-to-end supply chain capacity.",
    avatar: "/avatars/middle-east/liudi.png"
  },
  {
    id: "yangxuan",
    name: "Young Yang",
    title: "Senior Project Manager | Lingang Global Business Service Platform",
    speechContent: "Leverage Lingang as a Hub to Unlock New Global Cooperation Opportunities\n·How Lingang’s Institutional Innovation & Open Policies Boost International Collaboration ·Practical Paths & Cooperation Models for Building a Global Innovation Ecosystem in Lingang",
    bio: "In line with the five key strategic deployments proposed for Lingang New Area of Shanghai Pilot Free Trade Zone, the Lingang Global Business Service Platform was officially launched on June 21, 2024 by the Lingang Administrative Committee. It builds a network of global professional service providers and delivers cross-border finance, legal, tax planning, cross-border data and one-stop comprehensive overseas expansion solutions. SAGG (Special Area Going Global) strives to be China’s top overseas expansion brand and fully supports Chinese enterprises to go global at a high level.",
    avatar: "/avatars/middle-east/yangxuan.png"
  },
  {
    id: "jacob",
    name: "Jacob",
    title: "Founder | Jacob Column",
    speechContent: "Panel 2 Guest\n·Alignment Between Regional Tech Trends & National Strategies ·Challenges & Collaboration Proposals for Chinese Overseas Enterprises",
    bio: "Jacob Column is a knowledge community with 50,000 CxOs, serving as a preferred incubation platform for qualified executives, intrapreneurs and entrepreneurs. Founder Jacob boasts rich career experience: former Greater China CxO at Nike (retail & supply chain & digital); M&A & brand digitalization lead at LVMH affiliate Trendy Group; CxO of Lily Apparel for strategy & digitalization; product & architecture lead at a Microsoft joint venture; IT & Compliance manager at J&J and Eli Lilly. He is also a serial entrepreneur focusing on semiconductors, retail, life sciences and new energy tracks.",
    avatar: "/avatars/middle-east/jacob.png"
  }
];

// Full English Agenda List
const agendaList = [
  { time: "13:30 - 14:00", type: "Registration", content: "Guest Check-in" },
  { time: "14:00 - 14:10", type: "Opening", content: "Opening Remarks | Host: Li Ming, OpenMind" },
  { time: "14:10 - 14:30", type: "Keynote Speech", content: "Market Scale & Tech Demands of Oman’s Middle East Market, Analysis by OITE Group ARB | Amr Baabood" },
  { time: "14:30 - 14:50", type: "Keynote Speech", content: "Official Launch of COMEX 2025 Oman ICT Exhibition | Ahmed Farag" },
  { time: "14:50 - 15:05", type: "Keynote Speech", content: "Strategic Upgrade for Chinese Companies Expanding from 'Going Out' to 'Going In' in the Middle East | Wang Yu" },
  { time: "15:05 - 15:25", type: "Keynote Speech", content: "Leverage Lingang as a Hub to Unlock New Global Cooperation Opportunities | Young Yang" },
  { time: "15:25 - 15:35", type: "Signing Ceremony", content: "Strategic Partnership Signing Between OITE Group & OpenMind Events | Amr Baabood, Jenny Wu" },
  { time: "15:35 - 15:55", type: "Panel Session I", content: "Industrial Connectivity & Digital Economy: New Momentum for Sino-Arab Cooperation Under the Belt & Road\nModerator: Idris Bhuiya Akil\nPanelists: Amr Baabood, Wang Yu, Young Yang" },
  { time: "15:55 - 16:05", type: "Break", content: "Networking & Refreshments" },
  { time: "16:05 - 16:20", type: "Keynote Speech", content: "Riding the Gulf Wave: Seize the Next Decade’s Opportunities in UAE’s Commercial Landscape | Robin Du" },
  { time: "16:20 - 16:50", type: "Keynote Speech", content: "Anchor in Dubai: Unlock Golden Tracks for Real Estate Investment & Corporate Global Expansion | Liu Kai" },
  { time: "16:50 - 17:20", type: "Panel Session II", content: "Belt & Road 2.0 Era: How the Middle East Becomes a Critical Springboard for Chinese Globalization\nModerator: Robin Du\nPanelists: Liu Kai, Liu Di, Jacob" },
];

// =================中东论坛Highlights照片数组，自行修改图片路径=================
const meHighlightImages = [
  "/images/middle-east/h1.jpg",
  "/images/middle-east/h2.jpg",
  "/images/middle-east/h3.jpg",
  "/images/middle-east/h4.jpg",
  "/images/middle-east/h5.jpg",
];

export default function MiddleEastForumPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const scrollStep = 1;
  const intervalTime = 20;
  const loopImages = [...meHighlightImages, ...meHighlightImages];

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
      {/* 头部Banner */}
      <section className="bg-[#0f1740] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <p className="text-sm tracking-widest text-blue-300 mb-2">OpenMind Global Expansion & Innovation Series</p>
          <h1 className="text-4xl font-bold mb-4">Focus on Middle East Expansion | 2025 COMEX Oman ICT Exhibition China Launch Conference</h1>
          <div className="flex justify-center gap-6 text-gray-300 text-sm mt-5 flex-wrap">
            <span>📅 June 27, 2025</span>
            <span>📍 Conrad Shanghai (People’s Square)</span>
            <span>💰 Ticket Price: 228 CNY</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 活动背景 */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Event Background</h2>
          <p className="text-gray-700 leading-relaxed">
            Amid global economic diversification and digital transformation, the Middle East has rapidly emerged as a new hub for global tech innovation and investment, powered by abundant natural resources, prime geographic positioning, and strong national focus on emerging industries. Oman is pushing economic diversification via Oman Vision 2040, prioritizing renewable energy, smart cities and information communications technology (ICT). Meanwhile, Dubai’s D33 Agenda and Saudi Vision 2030 have created broad market space and cooperation opportunities for Chinese enterprises.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Against this backdrop, OpenMind Events hosts the "Focus on Middle East Expansion | 2025 COMEX Oman ICT Exhibition China Launch Conference". This event delivers an authoritative platform for Chinese enterprises to gain in-depth insight into Middle East markets, showcase innovation strength, and build global partnerships, empowering businesses to seize new overseas expansion opportunities across the Gulf region.
          </p>
        </section>

        {/* 会议亮点 */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Event Highlights</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Official COMEX 2025 China Launch: Oman’s flagship ICT expo provides an authoritative stage for Chinese enterprises to showcase technology and boost regional brand influence.</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> In-depth Analysis of Middle East Expansion Opportunities: Comprehensive analysis of national strategies and growth potential for digital economy, smart city sectors in Oman, Saudi Arabia, Dubai and other Gulf nations.</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Authoritative Policy Insight: Regional government representatives break down local market access rules and investment environments for Chinese business leaders.</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> High-Level Industry Panels & Exchange: Industry experts and enterprise executives share real-world expansion cases and explore cross-border collaboration opportunities.</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Targeted B2B Matchmaking: One-on-one connection services with potential Middle East partners to maximize cross-border cooperation efficiency.</li>
          </ul>
        </section>

        {/* 演讲嘉宾区块 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-3">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meSpeakerList.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">
                <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border border-blue-100 relative mx-auto md:mx-0">
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
                  <p className="text-blue-600 font-medium mt-1">{item.title}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800">Speech Topics</h4>
                    <p className="text-sm text-gray-700 whitespace-pre-line mt-2">{item.speechContent}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800">Speaker Biography</h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 完整会议日程 */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-3">Full Event Agenda</h2>
          <div className="space-y-4">
            {agendaList.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-b pb-4">
                <div className="w-[160px] shrink-0 font-mono text-blue-700 font-bold">{item.time}</div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">{item.type}</span>
                  <p className="mt-2 text-gray-800 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========新增Highlights无限横向滚动画廊（与首页样式完全一致）========== */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-blue-600 pl-3">Highlights</h2>
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
                  alt={`Event highlight ${(idx % meHighlightImages.length)+1}`}
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
        {/* ===================================================================== */}

        {/* 活动信息板块 */}
        <section className="bg-white p-8 rounded-xl shadow mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Event Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Organizer</h4>
              <p className="text-gray-700">OpenMind Events & AWS Asian Women Society</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Sponsor</h4>
              <p className="text-gray-700">Doo Property Dubai Real Estate</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Registration</h4>
              <p className="text-gray-700">Scan QR code to get registration link, 228 CNY per attendee</p>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact OpenMind Events Team</h2>
          <p className="text-gray-700">Contact Person: Jenny Wu</p>
          <p className="text-gray-700">Phone: +86 13817550309</p>
          <p className="text-gray-700">Email: jenny.wu@openmindevents.com</p>
        </section>
      </div>
    </div>
  );
}