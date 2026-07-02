const translations = {
  zh: {
    pageTitle: "陈星宇 | 个人主页",
    publicationsPageTitle: "发表论文",
    publicationsPageSubtitle:
      "采用 Google Scholar 风格展示论文题目、作者、发表信息与外部链接。",
    publicationsToolbar: "论文列表可直接在 publications-data.js 中维护。",
    navResumeHome: "个人简历",
    navPublications: "发表论文",
    navPapersDaily: "ai-paper-daily",
    name: "陈星宇",
    role: "知识图谱/ 内容理解/ 生成式搜推/ Agentic 推荐",
    profileSummary:
      "技术聚焦多模态大模型、Post-Training、强化学习、生成式搜推和Agentic推荐。业务上负责面向搜推的电商直播和短视频内容理解，Query理解、和生成式推荐相关工作。",
    metaCompany: "现任：TikTok-电商-知识图谱",
    metaFocus: "方向： 知识图谱 / 内容理解 / 生成式搜推",
    metaLocation: "领域：短视频、直播与电商搜推交易场景",
    contactTitle: "联系与主页",
    emailLabel: "邮箱",
    openResume: "查看 PDF 简历",
    jumpExperience: "工作经历",
    newsTitle: "最新动态",
    newsBadge: "New!",
    news1Date: "2025.03",
    news1: "我从上海搬到了西雅图，开始在北美 TikTok 电商工作啦。",
    aboutTitle: "关于我",
    aboutP1:
      "目前在北美 TikTok 电商，负责多模态内容理解和大模型在电商搜推技术探索，先后负责过短视频 / 直播内容理解，Query 理解等能力建设、目前主要聚焦在通过生成式推荐和 Agentic RL 等技术提升现有搜推系统的天花板。更早在腾讯做过商品识别、人脸质量评估和开放场景检测识别。工作之外，喜欢健身和摄影，辅修了日语双学位。",
    experienceTitle: "工作经历",
    exp1Company: "字节跳动",
    exp1Date: "2022.11 - 至今",
    exp1Location: "📍 上海（2022–2024）→ 西雅图（2025 至今）",
    exp1Sub1Title: "抖音-内容理解POC",
    exp1Sub2Title: "TikTok-电商搜索POC",
    exp1DouyinBullet1:
      "负责抖音短视频内容理解方向，通过 VideoCLIP、自研 VersatileTowers 等多模态算法建模视频电商意图识别，为非挂车视频挖掘增量流量，并带来抖音电商大盘人均订单提升 6%。",
    exp1DouyinBullet2:
      "围绕优质内容与高潜作者识别建设供给评估能力，持续增强内容分发、供给优化与交易转化之间的协同效率。",
    exp1TiktokBullet1:
      "作为知识图谱面向搜索供给、增长与承接模块的横向 POC，建设 Query 理解能力，通过 BERT + Multi-Agent RAG 近线部署识别品牌、品类、属性等结构化信息，平均准召回 90% / 85%，推动 OPMS +5%，相关性从 93.2% 提升到 97%。",
    exp1TiktokBullet2:
      "从 0 到 1 搭建直播内容理解，包括直播商品识别、类目识别、画风理解与高光切片生成，通过引入 LLaVA、VideoChat 等多模态大模型将主播 pin 商品覆盖率从 67% 提升到 95%，算法准确率达到 85%，最终带来直播 GMV +2%，badcase 减少 15%。",
    exp1TiktokBullet3:
      "负责生成式推荐和 Agentic Rec 能力建设，涵盖 Embedding 对齐、Semantic ID 与生成式推荐模型训练等模块，通过 AutoResearch 和 Multi-Agent 提升迭代效率。相关算法在图搜、商城推荐等场景效果超过线上主召回链路。",
    exp2Company: "腾讯科技（上海）有限公司",
    exp2Date: "2018.04 - 2022.10",
    exp2Location: "📍 上海",
    exp2Role: "商品识别与视觉算法相关工作",
    exp2Summary:
      "主要从事人脸识别、人脸质量评估、商品检索、与开放场景检测识别等方向，相关技术在微信支付、腾讯云等场景应用，日均调用规模上亿次，带来千万级收入。",
    educationTitle: "教育经历",
    edu1School: "上海交通大学",
    edu1Degree: "硕士，电子信息与电气工程学院 / 自动化与感知学院",
    edu1Desc: "专业前 15%，获国家奖学金、校三好学生，并获评上海市优秀毕业生。",
    edu2School: "西安交通大学",
    edu2Degree: "本科，机械工程学院，测控技术与仪器",
    edu2Desc: "专业前 10%，获国家奖学金、国家励志奖学金，并获评优秀毕业生干部。",
    honorsTitle: "个人荣誉",
    honor1: "CVPR 2021 Image Matching Workshop 冠军",
    honor2: "CVPR 2022 Image Matching Workshop Top 1%",
    honor3: "CVPR 2022 AliProduct 多模态商品检索 Top 1%",
    honor4: "NeurIPS 2021 Image Similarity Challenge 季军",
    honor5Label: "开源贡献：",
    honor5Suffix: "，1.5k+ GitHub Stars",
    resumeTitle: "简历",
    downloadResume: "下载简历",
    publicationEmpty: "请在 publications-data.js 中补充论文条目。",
    toggle: "EN",
    lang: "zh-CN"
  },
  en: {
  pageTitle: "Xingyu Chen | Homepage",
  publicationsPageTitle: "Publications",
  publicationsPageSubtitle:
    "A Google Scholar style list of papers, authors, venue information, and external links.",
  publicationsToolbar: "The publication list can be edited directly in publications-data.js.",
  navResumeHome: "Resume",
  navPublications: "Publications",
  navPapersDaily: "ai-paper-daily",
  name: "Xingyu Chen",
  role: "Knowledge Graph / Content Understanding / Generative Search & Recommendation / Agentic Recommendation",
  profileSummary:
    "Technically focused on multimodal foundation models, post-training, reinforcement learning, generative search & recommendation, and agentic recommendation. On the business side, I lead e-commerce livestream and short-video content understanding, query understanding, and generative recommendation for search and recommendation scenarios.",
  metaCompany: "Current: TikTok · E-commerce · Knowledge Graph",
  metaFocus: "Focus: Knowledge Graph / Content Understanding / Generative Search & Recommendation",
  metaLocation: "Domain: Short Video, Livestream, and E-commerce Search & Recommendation",
  contactTitle: "Contact",
  emailLabel: "Email",
  openResume: "Open PDF Resume",
  jumpExperience: "Experience",
  newsTitle: "News",
  newsBadge: "New!",
  news1Date: "Mar 2025",
  news1: "I moved from Shanghai to Seattle and started working at TikTok E-commerce in North America.",
  aboutTitle: "About Me",
  aboutP1:
    "Currently at TikTok E-commerce in North America, working on multimodal content understanding and exploring how large language models can advance e-commerce search & recommendation. I've led capability building across short-video / livestream content understanding and query understanding, and now focus mainly on pushing the ceiling of existing search & recommendation systems through generative recommendation and Agentic RL. Earlier, at Tencent, I worked on product recognition, face-quality assessment, and open-world detection and recognition. Outside of work, I enjoy fitness and photography, and minored in Japanese as a double degree.",
  experienceTitle: "Experience",
  exp1Company: "ByteDance",
  exp1Date: "Nov 2022 - Present",
  exp1Location: "📍 Shanghai (2022–2024) → Seattle (2025–Present)",
  exp1Sub1Title: "Douyin – Content Understanding POC",
  exp1Sub2Title: "TikTok – E-commerce Search POC",
  exp1DouyinBullet1:
    "Led short-video content understanding for Douyin. Built multimodal models for commerce-intent recognition using VideoCLIP and in-house VersatileTowers, unlocking incremental traffic from non-cart videos and increasing orders per user in Douyin E-commerce by 6%.",
  exp1DouyinBullet2:
    "Built supply evaluation capabilities centered on high-quality content and high-potential creator identification, improving collaboration across content distribution, supply optimization, and transaction conversion.",
  exp1TiktokBullet1:
    "Served as the cross-functional knowledge-graph POC for search supply, growth, and fulfillment. Built query understanding capabilities with BERT and nearline Multi-Agent RAG to extract structured signals such as brand, category, and attribute information, achieving average precision/recall of 90%/85%, driving OPMS +5%, and improving relevance from 93.2% to 97%.",
  exp1TiktokBullet2:
    "Built livestream understanding from 0 to 1, covering product recognition, category recognition, style understanding, and highlight clip generation. By introducing multimodal foundation models such as LLaVA and VideoChat, improved pinned-product coverage from 67% to 95%, achieved 85% model accuracy, increased livestream GMV by 2%, and reduced bad cases by 15%.",
  exp1TiktokBullet3:
    "Led the development of generative recommendation and Agentic Rec capabilities, covering embedding alignment, Semantic ID, and generative recommendation model training. Improved iteration efficiency through AutoResearch and Multi-Agent approaches. The resulting algorithms outperformed the primary online recall pipeline in scenarios such as image search and marketplace recommendation.",
  exp2Company: "Tencent Technology (Shanghai) Co., Ltd.",
  exp2Date: "Apr 2018 - Oct 2022",
  exp2Location: "📍 Shanghai",
  exp2Role: "Product Recognition & Computer Vision Engineer",
  exp2Summary:
    "Worked on face recognition, face-quality assessment, product retrieval, and open-world detection and recognition. These technologies were deployed in scenarios such as WeChat Pay and Tencent Cloud, serving hundreds of millions of calls per day and generating tens of millions in revenue.",
  educationTitle: "Education",
  edu1School: "Shanghai Jiao Tong University",
  edu1Degree: "M.S., School of Electronic Information and Electrical Engineering / School of Automation and Perception",
  edu1Desc: "Top 15% in major; National Scholarship; Merit Student; Outstanding Graduate of Shanghai.",
  edu2School: "Xi'an Jiaotong University",
  edu2Degree: "B.S., School of Mechanical Engineering, Measurement and Control Technology and Instrumentation",
  edu2Desc: "Top 10% in major; National Scholarship; National Encouragement Scholarship; Outstanding Student Cadre.",
  honorsTitle: "Honors",
  honor1: "Champion, CVPR 2021 Image Matching Workshop",
  honor2: "Top 1%, CVPR 2022 Image Matching Workshop",
  honor3: "Top 1%, CVPR 2022 AliProduct Multimodal Product Retrieval",
  honor4: "Third Place, NeurIPS 2021 Image Similarity Challenge",
  honor5Label: "Open-source contribution: ",
  honor5Suffix: "1.5k+ GitHub stars",
  resumeTitle: "Resume",
  downloadResume: "Download Resume",
  publicationEmpty: "Please add publication entries in publications-data.js.",
  toggle: "中文",
  lang: "en"
}
};

const toggle = document.querySelector("#language-toggle");
const targets = document.querySelectorAll("[data-i18n]");
let currentLanguage = "zh";

function applyLanguage(language) {
  const dict = translations[language];
  document.documentElement.lang = dict.lang;
  document.title = dict.pageTitle;
  toggle.textContent = dict.toggle;

  targets.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  renderPublications(language);
}

function renderPublications(language) {
  const container = document.querySelector("#publications-list");
  if (!container) {
    return;
  }

  const items = window.PUBLICATIONS || [];
  const dict = translations[language];

  if (!items.length) {
    container.innerHTML = `<p class="publication-empty">${dict.publicationEmpty}</p>`;
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const title = language === "zh" ? item.titleZh : item.titleEn;
      const authors = language === "zh" ? item.authorsZh : item.authorsEn;
      const venue = language === "zh" ? item.venueZh : item.venueEn;
      const links = (item.links || [])
        .map(
          (link) =>
            `<a class="scholar-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
        )
        .join("");

      return `
        <article class="scholar-item">
          <h3 class="scholar-title">${title}</h3>
          <p class="scholar-authors">${authors}</p>
          <p class="scholar-venue">${venue}</p>
          <div class="scholar-links">${links}</div>
        </article>
      `;
    })
    .join("");
}

toggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "zh" ? "en" : "zh";
  applyLanguage(currentLanguage);
});

applyLanguage(currentLanguage);
