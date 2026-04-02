const translations = {
  zh: {
    pageTitle: "陈星宇 | 个人主页",
    publicationsPageTitle: "发表论文",
    publicationsPageSubtitle:
      "采用 Google Scholar 风格展示论文题目、作者、发表信息与外部链接。",
    publicationsToolbar: "论文列表可直接在 publications-data.js 中维护。",
    navResumeHome: "个人简历",
    navPublications: "发表论文",
    name: "陈星宇",
    role: "抖音内容理解 / TikTok 电商搜索与生成式搜推",
    profileSummary:
      "聚焦多模态大模型、Post-Training、强化学习和生成式搜推，当前聚焦LLM/VLM大模型、Post-Training、强化学习和生成式搜推。负责电商直播和短视频内容理解，以及电商搜索Query理解、和生成式召回相关工作。在字节重点负责抖音内容理解，以及 TikTok 电商搜索、直播理解和生成式召回相关工作。",
    metaCompany: "现任：ByteDance",
    metaFocus: "方向：电商搜索 / 内容理解 / 生成式推荐",
    metaLocation: "领域：短视频、直播与电商搜索交易场景",
    contactTitle: "联系与主页",
    emailLabel: "邮箱",
    openResume: "查看 PDF 简历",
    jumpExperience: "工作经历",
    aboutTitle: "关于我",
    aboutP1:
      "长期从事搜索推荐、内容理解和多模态学习，在短视频、电商与支付场景积累了从研究建模、系统建设到大规模落地的完整经验。",
    aboutP2:
      "在字节的工作主要分成两条主线：一条是抖音侧的短视频内容理解，重点解决视频电商意图识别和优质供给挖掘；另一条是 TikTok 侧的电商搜索与直播理解，围绕 Query 理解、直播内容理解、商品 SEO 和生成式召回持续推进业务落地。",
    aboutP3:
      "在加入字节之前，曾在腾讯从事商品识别、人脸质量评估和开放场景检测识别相关工作，形成了较完整的视觉算法与业务落地方法论。",
    experienceTitle: "工作经历",
    exp1Company: "字节跳动",
    exp1Date: "2022.11 - 至今",
    exp1Role: "内容理解 / 电商搜索 / 生成式搜推负责人",
    exp1Sub1Title: "抖音",
    exp1Sub2Title: "TikTok",
    exp1DouyinBullet1:
      "负责抖音短视频内容理解方向，通过 VideoCLIP、自研 VersatileTowers 等多模态算法建模视频电商意图识别，为非挂车视频挖掘增量流量，并带来抖音电商大盘人均订单提升 6%。",
    exp1DouyinBullet2:
      "围绕优质内容与高潜作者识别建设供给评估能力，持续增强内容分发、供给优化与交易转化之间的协同效率。",
    exp1TiktokBullet1:
      "作为搜索供给、增长与承接模块的横向 POC，建设 Query 理解能力，通过 BERT + Multi-Agent RAG 近线部署识别品牌、品类、属性等结构化信息，平均准召回 90% / 85%，推动 OPMS +5%，相关性从 93.2% 提升到 97%。",
    exp1TiktokBullet2:
      "从 0 到 1 搭建直播内容理解，包括直播商品识别、类目识别、画风理解与高光切片生成，通过引入 LLaVA、VideoChat 等多模态大模型将主播 pin 商品覆盖率从 67% 提升到 95%，算法准确率达到 85%，最终带来直播 GMV +2%，badcase 减少 15%。",
    exp1TiktokBullet3:
      "负责生成式搜推能力建设，涵盖 Embedding、Semantic ID 与生成式推荐。基于多模态embedding齐、Semantic ID 构建及生成式召回模型优化，完成三阶段训练范式落地，在图搜、兴趣推荐等场景效果超过线上主召回链路。",
    exp2Company: "腾讯科技（上海）有限公司",
    exp2Date: "2018.04 - 2022.10",
    exp2Role: "商品识别与视觉算法相关工作",
    exp2Summary:
      "主要从事人脸识别、人脸质量评估、商品检索、与开放场景检测识别等方向，为小鹅拼拼完成商品底库、图文检索与视觉质量评估能力建设，为后续在电商搜索与多模态系统方向的工作奠定了基础。",
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
  name: "Xingyu Chen",
  role: "Douyin Content Understanding / TikTok E-commerce Search & Generative Recommendation",
  profileSummary:
    "Specialized in multimodal foundation models, post-training, reinforcement learning, and generative search and recommendation. Currently leading key initiatives in Douyin content understanding, as well as TikTok e-commerce search, livestream understanding, and generative retrieval at ByteDance.",
  metaCompany: "Current: ByteDance",
  metaFocus: "Focus: E-commerce Search / Content Understanding / Generative Recommendation",
  metaLocation: "Domain: Short Video, Livestream, and E-commerce",
  contactTitle: "Contact",
  emailLabel: "Email",
  openResume: "Open PDF Resume",
  jumpExperience: "Experience",
  aboutTitle: "About Me",
  aboutP1:
    "Experienced in search and recommendation, content understanding, and multimodal learning, with end-to-end expertise spanning research, modeling, system development, and large-scale production deployment across short-video, e-commerce, and payment scenarios.",
  aboutP2:
    "At ByteDance, my work focuses on two major areas. On Douyin, I work on short-video content understanding, with an emphasis on commerce-intent recognition and high-quality supply mining. On TikTok, I focus on e-commerce search and livestream understanding, including query understanding, livestream content understanding, product SEO, and generative retrieval.",
  aboutP3:
    "Prior to ByteDance, I worked at Tencent on product recognition, face-quality assessment, and open-world detection and recognition, which helped me build a strong foundation in computer vision algorithms and large-scale productization.",
  experienceTitle: "Experience",
  exp1Company: "ByteDance",
  exp1Date: "Nov 2022 - Present",
  exp1Role: "Lead, Content Understanding / E-commerce Search / Generative Recommendation",
  exp1Sub1Title: "Douyin",
  exp1Sub2Title: "TikTok",
  exp1DouyinBullet1:
    "Led short-video content understanding for Douyin. Built multimodal models for commerce-intent recognition using VideoCLIP and in-house VersatileTowers, unlocking incremental traffic from non-cart videos and increasing orders per user in Douyin E-commerce by 6%.",
  exp1DouyinBullet2:
    "Built supply evaluation capabilities centered on high-quality content and high-potential creator identification, improving collaboration across content distribution, supply optimization, and transaction conversion.",
  exp1TiktokBullet1:
    "Served as the cross-functional POC for search supply, growth, and fulfillment. Built query understanding capabilities with BERT and nearline Multi-Agent RAG to extract structured signals such as brand, category, and attribute information, achieving average precision/recall of 90%/85%, driving OPMS +5%, and improving relevance from 93.2% to 97%.",
  exp1TiktokBullet2:
    "Built livestream understanding from 0 to 1, covering product recognition, category recognition, style understanding, and highlight clip generation. By introducing multimodal foundation models such as LLaVA and VideoChat, improved pinned-product coverage from 67% to 95%, achieved 85% model accuracy, increased livestream GMV by 2%, and reduced bad cases by 15%.",
  exp1TiktokBullet3:
    "Led the development of generative search and recommendation capabilities across Embedding, Semantic ID, and generative recommendation. Improved multimodal alignment embeddings through user posterior signals, Semantic ID construction, and generative retrieval model optimization, and successfully productionized a three-stage training framework that outperformed the primary online recall pipeline in image search and interest recommendation scenarios.",
  exp2Company: "Tencent Technology (Shanghai) Co., Ltd.",
  exp2Date: "Apr 2018 - Oct 2022",
  exp2Role: "Product Recognition & Computer Vision Engineer",
  exp2Summary:
    "Worked on face recognition, face-quality assessment, product retrieval, and open-world detection and recognition. Built core capabilities in product base construction, image-text retrieval, and visual quality assessment for Xiaoe Pinpin, laying the foundation for later work in e-commerce search and multimodal systems.",
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
