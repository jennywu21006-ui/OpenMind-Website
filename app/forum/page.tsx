'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // 往期活动海报 路径全部匹配本地文件
  const pastEventList = [
    {
      imgSrc: "/images/middle-east-cover.jpg",
      altText: "2025中东阿曼COMEX出海发布会",
      descText: "点击查看「2025中东阿曼COMEX出海发布会」完整详情",
      linkUrl: "/middle-east-forum"
    },
    {
      imgSrc: "/images/spain-event-cover.jpg",
      altText: "2025西班牙跨境出海专场",
      descText: "点击查看「2025西班牙跨境出海专场」完整详情",
      linkUrl: "/spain-forum"
    },
    {
      imgSrc: "/images/ai-forum-cover.jpg",
      altText: "2026 AI企业转型峰会",
      descText: "点击查看「2026 AI企业转型峰会」完整详情",
      linkUrl: "/ai-forum-2026"
    }
  ];

  // 横向滚动5张实拍图（文件均存在）
  const highlightImgList = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
    "/images/event5.jpg"
  ];

  // 轮播滚动控制
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const scrollStep = 1;
  const intervalTime = 20;

  useEffect(() => {
    const scrollBox = scrollRef.current;
    if (!scrollBox) return;
    // 初始化滚动位置，修复卡死
    scrollBox.scrollLeft = 0;

    const autoScroll = () => {
      if (isHover) return;
      // 无缝循环边界判断
      if (scrollBox.scrollLeft >= scrollBox.scrollWidth - scrollBox.clientWidth - 10) {
        scrollBox.scrollLeft = 0;
      } else {
        scrollBox.scrollLeft += scrollStep;
      }
    };

    const timer = setInterval(autoScroll, intervalTime);
    return () => clearInterval(timer);
  }, [isHover]);

  return (
    <>
      {/* 顶部首屏横幅 */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/conference-banner.jpg"
            alt="会议商务背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl">
          <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-bold text-[#3399ff] leading-tight">
            We create value and strive for excellence
            <br />
            through events
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

      {/* 往期海外活动预览区域 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Overseas Event Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pastEventList.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Link href={item.linkUrl} className="w-full block cursor-pointer">
                <div className="w-full rounded-lg overflow-hidden shadow-md relative h-[280px] bg-white">
                  <Image
                    src={item.imgSrc}
                    alt={item.altText}
                    fill
                    sizes="(max-width:768px)100vw, 33vw"
                    className="object-cover hover:scale-[1.02] transition-transform duration-300"
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

      {/* 论坛高光视频区 */}
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
              <p className="text-white">你的浏览器不支持视频播放</p>
            </video>
          </div>
          <p className="text-gray-400 mt-4 text-sm">Past conference real scene recording | OpenMind AI Workforce Transformation Forum</p>
        </div>
      </section>

      {/* 横向滚动实拍图区域 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Previous Events Highlights</h2>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:bg-gray-100"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {highlightImgList.map((imgUrl, idx) => (
            <div key={idx} className="min-w-[320px] h-[200px] rounded-lg overflow-hidden shadow-sm relative flex-shrink-0">
              <Image
                src={imgUrl}
                alt={`现场实拍${idx+1}`}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 页脚（已删除隐私/条款链接，二维码原样保留） */}
      <footer className="bg-white border-t border-gray-200 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 左侧品牌信息 */}
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

          {/* 中间报名二维码 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">THE FORUM</h3>
            <p className="text-gray-600 mb-4">Scan QR to Register</p>
            <div className="w-[180px] h-[180px] mx-auto bg-gray-50 rounded relative p-3">
              <Image
                src="/images/qr-registration.png"
                alt="报名二维码"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">扫码报名参与峰会</p>
          </div>

          {/* 右侧微信咨询二维码 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">RESOURCES</h3>
            <p className="text-gray-600 mb-4">Contact Jenny Wu</p>
            <div className="w-[180px] h-[180px] mx-auto bg-gray-50 rounded relative p-3">
              <Image
                src="/images/qr-jenny-wu.png"
                alt="商务咨询微信二维码"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">商务咨询请添加微信</p>
          </div>
        </div>

        {/* 底部版权区：无隐私/条款链接 */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2026 OpenMind Events by JR Group. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}