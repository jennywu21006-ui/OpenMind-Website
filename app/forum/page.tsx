'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Home() {
  // Past event posters
  const pastEventList = [
    {
      imgSrc: "/images/middle-east-cover.jpg",
      altText: "2025 COMEX Oman Overseas Launch Event",
      descText: "Click to view full details of the 2025 COMEX Oman Overseas Launch Event",
      linkUrl: "/middle-east-forum"
    },
    {
      imgSrc: "/images/spain-event-cover.jpg",
      altText: "2025 Spain Cross-border Overseas Session",
      descText: "Click to view full details of the 2025 Spain Cross-border Overseas Session",
      linkUrl: "/spain-forum"
    },
    {
      imgSrc: "/images/ai-forum-cover.jpg",
      altText: "2026 AI Enterprise Transformation Summit",
      descText: "Click to view full details of the 2026 AI Enterprise Transformation Summit",
      linkUrl: "/ai-forum-2026"
    },
    {
      imgSrc: "/images/ai-workforce-cover.jpg",
      altText: "2026 OpenMind AI Workforce Transformation Forum",
      descText: "Click to view full details of the 2026 OpenMind AI Workforce Transformation Forum",
      linkUrl: "/ai-workforce-forum"
    }
  ];

  // Auto scroll gallery images
  const highlightImgList = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
    "/images/event5.jpg"
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const scrollStep = 1;
  const intervalTime = 20;

  const loopImages = [...highlightImgList, ...highlightImgList];

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

  const ImgWrapper = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${className}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.opacity = "0.3";
        }}
      />
    );
  };

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/conference-banner.jpg"
            alt="Conference background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl">
          <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-bold text-[#3399ff] leading-tight">
            Innovation for Sustainable Development
          </h1>
          <div className="w-full h-[1px] bg-white my-8"></div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            <span className="border border-white text-white px-6 py-2 text-xl rounded-md">High Level</span>
            <span className="border border-white text-white px-6 py-2 text-xl rounded-md">Professional</span>
            <span className="border border-white text-white px-6 py-2 text-xl rounded-md">Forward-Looking</span>
          </div>
          <div className="text-white text-lg">
            <p className="mb-2">Explore Our Events</p>
            <svg width="36" height="24" viewBox="0 0 36 24" className="mx-auto">
              <path d="M0 0L18 12L36 0" fill="none" stroke="#fff" strokeWidth="3"/>
              <path d="M0 12L18 24L36 12" fill="none" stroke="#fff" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Past Overseas Event Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Overseas Event Preview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {pastEventList.map((item) => (
            <div key={item.linkUrl} className="flex flex-col items-center">
              <Link href={item.linkUrl} className="w-full block cursor-pointer">
                <div className="w-full rounded-lg overflow-hidden shadow-md relative aspect-video bg-white">
                  <Image
                    src={item.imgSrc}
                    alt={item.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = "0.3";
                    }}
                  />
                </div>
              </Link>
              <p className="text-center text-gray-700 mt-4 text-sm">
                {item.descText}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Forum Highlights Video Area */}
      <section className="w-full bg-slate-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-3">Forum Highlights</h2>
          <p className="text-gray-300 mb-10 text-lg">Innovation · Connection · Win-Win | OpenMind Events by JR Group</p>
          <div className="w-full rounded-xl overflow-hidden">
            <video
              controls
              className="w-full"
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/forum-highlight.mp4" type="video/mp4" />
              <p className="text-white">Your browser does not support video playback</p>
            </video>
          </div>
          <p className="text-gray-400 mt-4 text-sm">Past conference real scene recording | OpenMind AI Workforce Transformation Forum</p>
        </div>
      </section>

      {/* Auto-scrolling Event Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Previous Events Highlights</h2>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden pb-4"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {loopImages.map((imgUrl, idx) => (
            <div key={idx} className="min-w-[320px] h-[200px] rounded-lg overflow-hidden shadow-sm relative flex-shrink-0">
              <ImgWrapper
                src={imgUrl}
                alt={`Event scene ${(idx % highlightImgList.length)+1}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* About OpenMind Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gray-900">About </span>
            <span className="text-[#3399ff]">OpenMind</span>
          </h2>

          <div className="text-center mb-10">
            <p className="text-xl text-gray-500 mb-6">OpenMind Events</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <ImgWrapper src="/images/about-conf1.jpg" alt="Conference scene"/>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <ImgWrapper src="/images/about-conf2.jpg" alt="Conference scene"/>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <ImgWrapper src="/images/about-conf3.jpg" alt="Conference scene"/>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 mb-6 text-left">
                — <strong>OpenMind</strong> is an innovative conference organizer dedicated to facilitating global exchange and cooperation across industries. We focus on in-depth communication and exhibition in global market expansion, future technology and women’s leadership development.
              </p>
              <p className="text-gray-500 text-sm mb-10 text-left">
                Through high-quality summit services, we provide an outstanding platform for global tech elites, entrepreneurs and industry leaders to share knowledge, build connections and explore partnership opportunities, jointly driving technological innovation and progress.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="relative h-[220px] rounded-lg overflow-hidden mb-4">
                    <ImgWrapper src="/images/series-global.jpg" alt="Go Global Series"/>
                  </div>
                  <p className="text-[#3399ff] font-medium">Series</p>
                  <p className="text-[#3399ff] font-bold">Go Global</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[220px] rounded-lg overflow-hidden mb-4">
                    <ImgWrapper src="/images/series-code.jpg" alt="Future Code Series"/>
                  </div>
                  <p className="text-[#3399ff] font-medium">Series</p>
                  <p className="text-[#3399ff] font-bold">Future Code</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[220px] rounded-lg overflow-hidden mb-4">
                    <ImgWrapper src="/images/series-her.jpg" alt="Women Leadership Series"/>
                  </div>
                  <p className="text-[#3399ff] font-medium">Series</p>
                  <p className="text-[#3399ff] font-bold">Talk to Her</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development History */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-[#3399ff] text-center mb-10">Company Development Journey</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-800 text-lg">
            <p>• Founded in 2018, OpenMind initially provided investment & post-investment management services for SMEs and has successfully transformed into an international summit organizer. We focus on supporting Chinese enterprises to expand overseas, technological innovation, startup growth and women’s leadership discussions, building unique differentiated competitive advantages.</p>
            <p>• Drawing on the founder’s experience in tech startup incubation, international summit planning & execution, as well as deep insights into EU markets, we have integrated extensive global vision and strategic resources. Our team translates these valuable resources into innovative strategies to boost emerging industries, creating differentiated strengths in the international conference sector.</p>
          </div>
        </div>

        {/* Core Advantages */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-[#3399ff] text-center mb-12">Our Advantages</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 relative h-[280px] w-full rounded-lg overflow-hidden">
                <ImgWrapper src="/images/advantage1.jpg" alt="Business negotiation"/>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#3399ff] text-white flex items-center justify-center font-bold">1</span>
                  <h3 className="text-2xl font-bold">Extensive Industry Influence</h3>
                </div>
                <p className="text-gray-700">We have served over 2,000 enterprises covering multiple sectors. We maintain broad industry connections and robust network resources, enabling rich project delivery experience and sharp industry insights.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2 relative h-[280px] w-full rounded-lg overflow-hidden">
                <ImgWrapper src="/images/advantage2.jpg" alt="Summit operation team"/>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#3399ff] text-white flex items-center justify-center font-bold">2</span>
                  <h3 className="text-2xl font-bold">Professional Summit Planning & Execution</h3>
                </div>
                <p className="text-gray-700">We possess professional capabilities to design and deliver influential international summits with accurate awareness of global industry trends. Our team holds a global vision, integrating international best practices with local demands to deliver premium conference services.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#3399ff] text-center mb-12">Our Services</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">1. Comprehensive Conference Solution Portfolio</h3>
              <p className="text-gray-700">Our summits cover cutting-edge technology exchanges, supply chain matchmaking, investment & financing roadshows, startup showcases, women leadership forums and international cooperation negotiations. We create an all-round communication platform to facilitate knowledge sharing, tech innovation and commercial collaboration.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">2. Market Intelligence & Investment Opportunities</h3>
              <p className="text-gray-700">We provide in-depth market analysis and investment consulting to help clients track industry trends and identify viable investment opportunities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">3. Global Brand Expansion Support</h3>
              <p className="text-gray-700">Our overseas expansion services help enterprises explore international markets and lift global competitiveness. We offer market research, brand positioning, marketing strategy and localization support to help businesses enter and capture overseas markets.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">4. Capital Matchmaking</h3>
              <p className="text-gray-700">We facilitate effective communication between enterprises and investors, including roadshow organization, investor relations, financing consulting and transaction matching services.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">5. Industry Best Practice Sharing</h3>
              <p className="text-gray-700">We organize industry experts and leaders to share proven experience via case studies and interactive discussions, helping enterprises acquire frontier know-how and improve operational efficiency.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">6. Overseas Sales Channel Development</h3>
              <p className="text-gray-700">We assist enterprises to build and optimize international sales networks, including cross-border e-commerce solutions, overseas exhibition support, business delegation planning and partnership development with local distributors & retailers.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-3">7. Overseas Team Recruitment & Setup</h3>
              <p className="text-gray-700">We deliver professional services to help enterprises recruit, train and establish local teams worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-600 text-white px-2 py-1 font-bold">OME</span>
              <span className="bg-black text-white px-2 py-1 font-bold">JR</span>
              <div>
                <p className="text-xl font-semibold text-gray-900">OpenMind Events</p>
                <p className="text-sm text-gray-500">BY JR GROUP</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>📩 jenny.wu@openmindevents.com</p>
              <p>📞 +86 13812345678</p>
              <p>📍 Shanghai, China</p>
              <p>
                Jenny Wu's LinkedIn:
                <a href="https://linkedin.com/in/jenny-wu-b00299360/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
                  linkedin.com/in/jenny-wu-b00299360/
                </a>
              </p>
              <p>
                Official LinkedIn:
                <a href="https://linkedin.com/company/openmindevents/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
                  linkedin.com/company/openmindevents/
                </a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">THE FORUM</h3>
            <p className="text-gray-600 mb-4">Scan QR to Register</p>
            <div className="w-[180px] h-[180px] mx-auto bg-gray-50 rounded relative p-3">
              <Image
                src="/images/qr-registration.png"
                alt="Registration QR Code"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">Scan to register for summits</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">RESOURCES</h3>
            <p className="text-gray-600 mb-4">Contact Jenny Wu</p>
            <div className="w-[180px] h-[180px] mx-auto bg-gray-50 rounded relative p-3">
              <Image
                src="/images/qr-jenny-wu.png"
                alt="Business contact QR Code"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">Add WeChat for business inquiries</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2026 OpenMind Events by JR Group. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}