import Link from 'next/link';
import Image from 'next/image';

// 全部嘉宾数据源，已整理7位嘉宾：赵嬛嬛、Monica Wang、王麒源、胡應洲、孟岩、邢翼、殷梓健
const speakerList = [
  {
    type: "演讲嘉宾",
    name: "赵嬛嬛",
    titleLine1: "AI机器人行业转型咨询教练",
    titleLine2: "阿里巴巴达摩院AI高级训练师",
    titleLine3: "上海机器人产业技术研究院产业合作专家",
    speechTopic: "具身智能与蓝领劳动力：AI 机器人如何重塑未来工作",
    speechPoints: [
      "人形机器人在制造、物流、零售等行业的最新商业化落地案例",
      "AI 机器人如何走出虚拟世界，开始承担高重复性、高风险体力劳动",
      "具身智能技术对产业升级及劳动结构的影响",
      "企业如何应对 AI 机器人时代的人才转型与组织变革"
    ],
    bio: "香港大学人工智能硕士，长期致力于为传统行业人才设计 AI 机器人产业转型路径，拥有16年境内外跨行业管理实践经验；持续推动人工智能、机器人技术与产业应用深度融合，在 AI 人才培养、产业转型及具身智能商业化落地方面具有丰富的实践经验。",
    avatar: "/avatar/zhaohuanhuan.png"
  },
  {
    type: "主持人",
    name: "Monica Wang",
    titleLine1: "多家头部企业出海顾问",
    titleLine2: "AGI Villa 发起人",
    titleLine3: "",
    speechTopic: "",
    speechPoints: [],
    bio: "多家头部企业出海顾问，中英文账号全网上亿播放，每周「出海×AI×创业」直播；AGI Villa 发起人（3,000+ AI 创业者）；BridgingChina发起人（20W followers）；记者出身，15年间走访60国，科技出海的深度观察者和连接者；连续创业者，曾任AI编程、青少年教育、Web3、本地生活、社交电商独角兽CEO/CMO，创业项目累计融资超15亿元（红杉/线性/君联/创新工场等）；三宝妈，马拉松跑者。",
    avatar: "/avatar/monicawang.png"
  },
  {
    type: "演讲嘉宾",
    name: "王麒源",
    titleLine1: "普华永道",
    titleLine2: "合伙人",
    titleLine3: "",
    speechTopic: "AI驱动企业变革：组织重塑、实践创新与转型经验",
    speechPoints: [
      "AI Agent 如何重塑企业组织与未来工作方式",
      "普华永道企业 AI 转型实践",
      "企业 AI 落地案例分享",
      "AI 组织转型过程中面临的挑战与经验总结"
    ],
    bio: "普华永道中国税务及商务咨询部合伙人，拥有17年以上税务及商务咨询经验，长期服务于中国企业全球化发展及跨国企业在华经营。曾参与复星、阿里巴巴、小米、红杉等知名企业及机构的跨境税务、并购重组及企业战略咨询项目，在企业数字化转型、跨境投资及 AI 时代组织变革方面具有丰富实践经验。",
    avatar: "/avatar/wangqiyuan.png"
  },
  {
    type: "演讲嘉宾",
    name: "胡應洲",
    titleLine1: "友吉智汇",
    titleLine2: "创始人",
    titleLine3: "",
    speechTopic: "从“数字员工”到“物理硅基”：具身智能的商业闭环、资本逻辑与全球化突围",
    speechPoints: [
      "Physical Agent（具身智能）的产业演进",
      "具身智能在制造、物流、高危场景的商业化落地",
      "投资机构如何判断具身智能企业价值",
      "企业如何通过标准化实现全球化与抱团出海"
    ],
    bio: "上海财经大学硕士，长期专注于具身智能产业生态建设、商业化落地及产业投融资。深度连接机器人整机企业、核心零部件企业及AI算法企业，累计参与50余个真实商业项目与资本对接实践，提出“具身智能一页纸尽调模型”，并打造赋能企业国际化发展的S&D智能匹配引擎，推动中国具身智能产业链标准化出海。",
    avatar: "/avatar/huyingzhou.png"
  },
  {
    type: "演讲嘉宾",
    name: "孟岩",
    titleLine1: "科大讯飞",
    titleLine2: "商务拓展经理",
    titleLine3: "政企AI落地资深技术顾问",
    speechTopic: "大模型驱动的企业级应用场景与落地案例",
    speechPoints: [
      "大模型底座与核心能力矩阵",
      "企业级智能应用与提效场景"
    ],
    bio: "深耕 AI 技术商业化落地，曾任讯飞开放平台技术讲师，精通星火大模型、语音 AI 企业集成方案，服务美图、滴滴、浪潮等头部企业完成 AI 项目落地。覆盖多行业政企数字化场景，掌握从技术对接、方案设计到商务落地全流程实战经验。聚焦大模型产业商业化，专注输出适配实体企业的轻量化、高价值 AI 落地解决方案。",
    avatar: "/avatar/mengyan.png"
  },
  {
    type: "演讲嘉宾",
    name: "邢翼",
    titleLine1: "安思派人工智能技术有限公司首席AI技术官",
    titleLine2: "Ripple 创始人",
    titleLine3: "",
    speechTopic: "从“预测未来”到“验证决策”： Ripple 如何构建企业决策预演与证据闭环",
    speechPoints: [
      "企业需要的不是更会回答的智能体，而是可验证、可复盘的决策系统",
      "Ripple通过多智能体模拟不同情境，预演方案、风险与失败边界，连接模拟与现实执行，分析偏差，形成可追溯的决策闭环。",
      "推动智能体走向可验证、可授权、可回退和持续学习"
    ],
    bio: "专注多智能体模拟、复杂适应系统及企业决策智能研究与产品设计；主导 Ripple 整体设计，在虚拟环境中预演市场、组织与社会主体的互动；推动大模型、多智能体与强化学习走向具备证据边界、现实反馈和治理机制的企业决策系统。",
    avatar: "/avatar/xingyi.png"
  },
  {
    type: "圆桌嘉宾",
    name: "殷梓健",
    titleLine1: "数花智算",
    titleLine2: "合伙人 | 算法专家",
    titleLine3: "",
    speechTopic: "",
    speechPoints: [],
    bio: "数花智算合伙人、核心算法专家，原百度智能云算法工程师、网易伏羲实验室AI产品经理。2026 深圳科创学院冬令营全国冠军(1/1800)，李泽湘教授科创体系孵化。甘肃省人形机器人中心算法顾问，兼顾工业智能、企业数字化赛道，具备算法研发、AI 产品设计、商业化落地。主导数花智算大模型数据决策产品线研发，聚焦中小企业经营、产业数字化场景，输出低成本、高落地性的 AI 数据智能解决方案。",
    avatar: "/avatar/yinzijian.png"
  }
]

export default function SummitPage() {
  return (
    <>
      {/* Hero头部区域 */}
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

      {/* 嘉宾列表主区域 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              About Our Speakers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Industry Experts with Real-World AI Experience
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Every speaker on this stage has led tangible AI workforce transformation within large organizations.
              No theoretical lectures — only actionable case studies, leadership insights, and frameworks you can apply
              to your own talent, HR and organizational strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {speakerList.map((speaker, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 头像区域 修复next/image兼容，加relative定位 */}
                  <div className="w-44 h-44 shrink-0 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-100 relative">
                    <Image
                      src={speaker.avatar}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[#2563eb] text-sm font-medium">{speaker.type}</span>
                    <h3 className="text-3xl font-bold mt-1 text-gray-900">{speaker.name}</h3>
                    <div className="my-3 bg-[#0f1740] text-white px-4 py-3 rounded-md inline-block">
                      <p>{speaker.titleLine1}</p>
                      {speaker.titleLine2 && <p className="mt-1">{speaker.titleLine2}</p>}
                      {speaker.titleLine3 && <p className="mt-1">{speaker.titleLine3}</p>}
                    </div>

                    {speaker.speechTopic && <>
                      <h4 className="text-lg font-semibold text-[#2563eb] mt-2">演讲主题：{speaker.speechTopic}</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
                        {speaker.speechPoints.map((point,pIdx)=><li key={pIdx}>{point}</li>)}
                      </ul>
                    </>}

                    <h4 className="text-lg font-semibold mt-4 text-gray-800">嘉宾简介</h4>
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