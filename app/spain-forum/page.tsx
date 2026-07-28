'use client';
import Image from 'next/image';

// 西班牙论坛嘉宾数据源
const spainSpeakerList = [
  {
    id: "paggy",
    name: "Paggy Zhang",
    title: "Senior Investment Officer | Spanish Institute of Foreign Trade Shanghai Office",
    speechContent: "Spain Pearl: Gateway to European Markets\n·Strategic Portal to Europe ·Innovation-driven Business Ecosystem",
    bio: "Senior Investment Officer based in Shanghai for the Spanish Institute of Foreign Trade. Specialized in bilateral investment and cooperation between China and Spain. With deep insight into European and Chinese markets, she assists Chinese enterprises in international layout and landing high-quality projects. Skilled in cross-border investment strategies, industrial resource matching and government relations, she builds efficient cooperation bridges, with rich experience in cross-border project negotiation and cross-cultural business communication.",
    avatar: "/avatars/spain/paggy.png"
  },
  {
    id: "xu",
    name: "Xu Meina",
    title: "Founder | M.Y.ADVOCATS Law Firm Barcelona",
    speechContent: "Sailing Across Iberia: Breakthrough Strategies for Chinese Brands Entering Spain\n·Understand Spanish Business Environment ·Market Entry Tactics ·Administrative & Compliance Solutions ·Brand & Consumer Trust Building",
    bio: "Founder of M.Y.ADVOCATS Barcelona law firm. Focused on legal and landing support for Chinese enterprises expanding to Spain and Europe. With years of cross-border practice experience, she has assisted dozens of factories, M&A and compliance projects covering manufacturing, tech and cross-border e-commerce. Integrates legal frameworks with commercial plans to deliver localized solutions for Chinese brands.",
    avatar: "/avatars/spain/xu.png"
  },
  {
    id: "yuan",
    name: "Yuan Haiyan",
    title: "Senior Amazon Operation Specialist",
    speechContent: "Build Global Brands on Amazon from Scratch\n·Launch Store from Zero ·Winning Product Strategy ·Multi-market Global Expansion",
    bio: "5-year veteran Amazon operator for overseas brands. Successfully incubated 2 cross-border brands with steady revenue growth. Holds an MBA from University of California, with solid consumer insight and operation experience in European & US markets. Focuses on data-driven brand global layout.",
    avatar: "/avatars/spain/yuan.png"
  },
  {
    id: "joaquin",
    name: "Joaquin Capozzoli",
    title: "CEO | Shanghai Boundless Media Co.,Ltd",
    speechContent: "Monetize TikTok Spain Shop\n·Understand Spain TikTok Ecosystem ·Viral Short Video Content Strategy",
    bio: "Expert in AI and digital finance based in China. Focuses on European market expansion for Chinese brands, leading the 'Gold Rush Spain' strategy to grow TikTok Shop as new revenue engine for domestic enterprises, delivering low-cost overseas traffic growth for clients.",
    avatar: "/avatars/spain/joaquin.png"
  },
  {
    id: "pablo",
    name: "Pablo Rabadán",
    title: "Executive Director | Shanghai Xiji Tech Incubator",
    speechContent: "Industry Innovation & Growth Opportunities for Spanish Enterprises in China\n·Innovation-oriented Strategy ·High-growth Vertical Sectors",
    bio: "Spanish native, Executive Director of Xiji Tech Incubator attached to Tongji University. Deeply engaged in tech incubation, connects Spanish startups with Chinese industrial chains, provides landing & financing solutions for tech projects.",
    avatar: "/avatars/spain/pablo.png"
  },
  {
    id: "christoph",
    name: "Christoph Busetti",
    title: "Business Director | Shanghai Altios Exhibition Co., Ltd",
    speechContent: "Roundtable Discussion\n·Industry Insights ·Open Dialogue ·Challenges & Opportunities",
    bio: "25-year cross-cultural expert based in China. Graduated from Ca' Foscari University of Venice, proficient in multi-languages. Serves as consultant for cultural institutions & cross-border corporations, organizes large international exhibitions to link European and Asian industrial resources.",
    avatar: "/avatars/spain/christoph.png"
  },
  {
    id: "bruce",
    name: "Bruce Lau (Liu Jianwei)",
    title: "Founder | Naveal Technology",
    speechContent: "Borderless Biometrics: Build Sino-Spanish Cross-border Trust via Global ID\n·Global Digital Identity via Biometrics ·Sino-Spanish Cooperation Potential",
    bio: "Hong Kong tech innovator, founder of Naveal Technology. Developed leading palm biometric technology, adopted by Hong Kong MTR, HSBC, Tencent and other top firms. Delivers secure, borderless identity verification solutions for global clients.",
    avatar: "/avatars/spain/bruce.png"
  },
  {
    id: "leon",
    name: "Leon Han",
    title: "Honorary Chairman | Kazakhstan Chamber of Commerce China",
    speechContent: "Moderator & Roundtable Co-host",
    bio: "Senior cross-border cooperation facilitator, connects Chinese enterprises with Central Asian & European industrial organizations, supports multi-national business matchmaking and summit organization.",
    avatar: "/avatars/spain/leon.png"
  },
  {
    id: "michelle",
    name: "Michelle Truong",
    title: "Founder | Asian Women Society",
    speechContent: "Event Host & Roundtable Moderator",
    bio: "Founder of AWS Asian Women Society, host of this summit, specializes in organizing cross-border business summits linking Chinese, Spanish & GCC industry leaders.",
    avatar: "/avatars/spain/michelle.png"
  }
];

// 完整会议日程
const agendaList = [
  { time: "13:30 - 14:00", type: "Registration", content: "Guest Check-in" },
  { time: "14:00 - 14:05", type: "Opening", content: "Opening Speech | Host: Michelle Truong, Founder of Asian Women Society" },
  { time: "14:05 - 14:20", type: "Keynote Speech", content: "Spanish Macro Market Analysis Report | Speaker: Economic Counselor, Consulate General of Spain in Shanghai" },
  { time: "14:20 - 14:40", type: "Keynote Speech", content: "Industry Innovation & Development Opportunities for Spanish Companies Operating in China | Pablo Rabadán, Executive Director, Shanghai Xiji Tech Incubator" },
  { time: "14:40 - 15:00", type: "Keynote Speech", content: "Spain Pearl: Gateway to European Markets | Paggy Zhang, Senior Investment Officer, Spanish Institute of Foreign Trade Shanghai Office" },
  { time: "15:00 - 15:20", type: "Keynote Speech", content: "Practical Guide to Build Global Brands on Amazon | Yuan Haiyan, Senior Amazon Operator" },
  { time: "15:20 - 15:35", type: "Break", content: "Networking & Refreshments" },
  { time: "15:35 - 15:55", type: "Keynote Speech", content: "Monetize TikTok Spain Shop | Joaquin Capozzoli, CEO, Shanghai Boundless Media Co.,Ltd" },
  { time: "15:55 - 16:20", type: "Keynote Speech", content: "Breakthrough Strategies for Chinese Brands Entering Spain | Xu Meina, Founder, M.Y.ADVOCATS Law Firm Barcelona" },
  { time: "16:20 - 16:35", type: "Keynote Speech", content: "Borderless Biometrics: Build Sino-Spanish Cross-border Trust via Global ID | Bruce Lau, Founder, Naveal Technology" },
  { time: "16:35 - 17:00", type: "Panel Discussion", content: "Gen Z Consumption & Domestic Brands Expansion in Spain\nModerator: Leon Han\nPanelists: Bruce Lau, Xu Meina, Yuan Haiyan, Christoph Busetti" },
];

export default function SpainForumPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 头部Banner */}
      <section className="bg-[#0f1740] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <p className="text-sm tracking-widest text-blue-300 mb-2">Open Global Expansion & Innovation Series</p>
          <h1 className="text-4xl font-bold mb-4">Cross-border Innovation & Cooperation: China-Spain Business Summit 2025</h1>
          <div className="flex justify-center gap-6 text-gray-300 text-sm mt-5 flex-wrap">
            <span>📅 May 30, 2025</span>
            <span>📍 Xujiahui Center, Shanghai</span>
            <span>💰 Ticket Price: 228 CNY</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Event Background */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Event Background</h2>
          <p className="text-gray-700 leading-relaxed">
            As one of the top 10 economies in Europe, Spain is accelerating digital and green transformation through the €140 billion "Spain Digital 2025" plan, creating massive cooperation opportunities for Chinese enterprises in new energy, intelligent manufacturing and cross-border e-commerce sectors.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This summit gathers Sino-Spanish government representatives, industry leaders and successful overseas enterprises to discuss practical paths to explore Spanish and European markets via technical collaboration and industrial integration.
          </p>
        </section>

        {/* Event Highlights */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Event Highlights</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Policy Insights: In-depth interpretation of cooperation opportunities under Spain’s €140 billion transformation plan.</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Full-chain Operation Guide: Legal, cultural & e-commerce entry strategies for Spanish market.</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Real Case Sharing: Leading enterprises share localized operation & tech cooperation experience.</li>
          </ul>
        </section>

        {/* Featured Speakers */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-3">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spainSpeakerList.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">
                <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border-2 border-blue-100 relative mx-auto md:mx-0">
                  <Image src={item.avatar} alt={item.name} fill unoptimized className="object-cover" />
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

        {/* Full Event Agenda */}
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

        {/* Event Information */}
        <section className="bg-white p-8 rounded-xl shadow mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Event Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Organizers</h4>
              <p className="text-gray-700">OpenMind Events & Asian Women Society</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Sponsor</h4>
              <p className="text-gray-700">ALTIOS</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ticket Price</h4>
              <p className="text-gray-700">228 CNY per attendee</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Organizer</h2>
          <p className="text-gray-700">Jenny Wu: +86 13817550309</p>
          <p className="text-gray-700">Michelle Truong: +86 13120974021</p>
        </section>
      </div>
    </div>
  );
}