const zh = {
  name: '黄波',
  title: '资深前端工程师（跨端架构方向）',
  company: '滴滴出行',
  location: '北京',
  summary:
    '10 年互联网研发经验，横跨 Android 原生开发与前端 / 跨端工程化领域。近 6 年聚焦滴滴货运司机端，主导跨端架构升级（Hummer → DRN）、稳定性治理体系搭建与工程化效能提升，具备大规模移动应用架构设计、技术选型与团队技术影响力。',
  email: 'your@email.com',

  skillsTitle: '技术栈',
  experienceTitle: '工作经历',
  projectsTitle: '项目',
  educationTitle: '教育背景',

  skills: [
    { category: '跨端框架', items: 'React Native, DRN (Didi RN), Hummer, JSBridge' },
    { category: '客户端', items: 'Android (Java/Kotlin), iOS (OC/Swift), HarmonyOS' },
    { category: '前端', items: 'React, TypeScript, JavaScript, HTML5, CSS3' },
    { category: '稳定性', items: 'Crash/卡顿/白屏/JS异常治理, Sentry, APM' },
    { category: '工程化', items: 'CI/CD, Code Review, AI CR, 自动化插桩, Monorepo' },
    { category: 'AI 提效', items: 'DeepSeek, OpenAI, Claude, CR Toolkit' },
  ],

  experience: [
    {
      company: '滴滴出行',
      title: '资深前端工程师（跨端架构方向）',
      period: '2020.10 - 至今',
      location: '北京',
      desc: '滴滴货运 · 司机端跨端架构 & 稳定性治理负责人',
      bullets: [
        '主导司机端从自研跨端框架 Hummer 迁移至 DRN（Didi React Native），覆盖 Android / iOS / HarmonyOS 三端，统一 UI 渲染层与业务逻辑层；设计白名单→分城市→分阶段灰度放量策略，推动自测 + Bug Hunter + 集成回归机制，大幅降低多端维护成本，提升核心业务迭代效率。',
        '搭建事前-事中-事后闭环的稳定性治理体系：事前（发版 Checklist / CR 机制 / 稳定分）、事中（Crash / 卡顿 / 白屏 / JS 异常 / 灰度监控）、事后（事故复盘 / TODO 跟进 / 线上归因）。成果：Crash 率 2% → 4‰，卡顿率 3% → 9‰，JS 异常从千万级治理至可监控可召回；Checklist 拦截司机端问题 20+、货主端问题 200+，主动上报问题 29 个。',
        '自研司机端白屏监控 SDK，支持页面级白屏识别与灰度维度聚合，覆盖 Native / H5 / DRN 混合场景；成功召回域名异常、H5 图片加载慢、页面配置错误等多类线上问题，推动白屏从"不可见"转变为可监控、可定位、可复盘。',
        '基于 DeepSeek / OpenAI / Claude 多模型构建 AI Code Review 工具 cr-toolkit，支持智能分段、并行分析、分支对比与自动生成 CR 建议。落地后有效审查代码 8140 行，百行代码平均合入时间从 51.6 分钟降至 1.8 分钟（提升 28.7 倍），Commit 规范率从 44.25% 提升至 96.88%。',
        '优化大厅滑动切换与爆单场景选单体验，选单效率提升 9.36s；推进拼单策略优化，日均打包规模 1.5 万单，单均做单时间节省 2.24 分钟，IPH 提升 2.6 元，拼成质量提升 23%。',
        '参与司机端应用上架合规整改与信息安全治理，修复接口水平越权、跨境域名、敏感字段、权限过度等安全隐患 30+ 项，获滴滴大安全委员会"守护者"提名。',
      ],
    },
    {
      company: '360',
      title: '前端工程师',
      period: '2019.10 - 2020.10',
      location: '北京',
      desc: null,
      bullets: [
        '负责 360 安全浏览器核心前端功能开发，主导 PC 端能力向 Web 端技术迁移，提升功能迭代效率。',
        '推动页面加载性能优化，首屏渲染时间缩短 40%，与产品 / 设计团队协作推进多端体验统一。',
      ],
    },
    {
      company: '易车',
      title: '前端工程师',
      period: '2017.02 - 2019.10',
      location: '北京',
      desc: null,
      bullets: [
        '主导易车主站及 H5 移动页面的技术升级，完成 jQuery 旧项目向 Vue / React 技术栈的渐进式迁移。',
        '搭建前端构建与自动化部署流水线，参与设计系统建设，统一多端视觉与交互规范。',
      ],
    },
    {
      company: '北京小鸟易达科技发展有限公司',
      title: 'Android 开发工程师',
      period: '2014.08 - 2017.02',
      location: '北京',
      desc: null,
      bullets: [
        '负责核心产品 Android 客户端从零到一的架构设计与开发，独立交付多个核心功能模块，累计覆盖百万级用户。',
      ],
    },
  ],

  projects: [
    {
      name: 'cr-toolkit',
      url: 'https://github.com/huangbo-me/cr-toolkit',
      desc: 'AI Code Review 工具，集成多模型能力，支持自动 CR 生成、分支对比、项目级分析。',
      stack: 'TypeScript, Node.js, DeepSeek / OpenAI / Claude API',
    },
    {
      name: '白屏监控 SDK',
      url: 'https://github.com/huangbo-me/screen-monitor',
      desc: '页面级白屏识别与监控 SDK，支持 Native / H5 / DRN 混合场景，灰度维度聚合告警。',
      stack: 'TypeScript, React Native, APM',
    },
  ],
  projectsEmpty: '暂无项目展示',

  school: '北京化工大学',
  degree: '本科 · 计算机科学与技术',
  gradYear: '2014',

  // Navigation
  navResume: '简历',
  navBlog: '博客',
  blogBack: '返回博客列表',

  // Blog
  blog: {
    title: '技术博客',
    subtitle: '跨端架构、稳定性治理与工程化提效实践',
    list: [
      {
        slug: 'stability-governance',
        title: '千万级 DAU 应用的稳定性治理体系建设（从 0 到 1 到规模化）',
        description:
          '如何从零搭建一套覆盖事前预防、事中监控、事后复盘的全链路稳定性治理体系？本文基于滴滴货运司机端的真实实践，抽象为可复用的方法论。',
        date: '2026.04',
        readTime: '阅读约 15 分钟',
        tags: ['稳定性治理', '跨端架构', '质量工程'],
      },
    ],
  },

  footer: '保留所有权利',
  switchLang: 'English',
}

const en = {
  name: 'Bo Huang',
  title: 'Senior Frontend Engineer (Cross-Platform Architecture)',
  company: 'Didi Chuxing',
  location: 'Beijing, China',
  summary:
    '10+ years of internet product experience spanning Android native development and cross-platform engineering. 6+ years at Didi Freight leading the driver app cross-platform architecture migration (Hummer → DRN), building a comprehensive stability governance system, and driving engineering efficiency through AI-powered tooling. Experienced in large-scale mobile architecture design and technical leadership.',
  email: 'your@email.com',

  skillsTitle: 'Skills',
  experienceTitle: 'Experience',
  projectsTitle: 'Projects',
  educationTitle: 'Education',

  skills: [
    { category: 'Cross-Platform', items: 'React Native, DRN (Didi RN), Hummer, JSBridge' },
    { category: 'Mobile', items: 'Android (Java/Kotlin), iOS (OC/Swift), HarmonyOS' },
    { category: 'Frontend', items: 'React, TypeScript, JavaScript, HTML5, CSS3' },
    { category: 'Stability', items: 'Crash/ANR/White Screen/JS Exception, Sentry, APM' },
    { category: 'Engineering', items: 'CI/CD, Code Review, AI CR, Automation, Monorepo' },
    { category: 'AI Tools', items: 'DeepSeek, OpenAI, Claude, CR Toolkit' },
  ],

  experience: [
    {
      company: 'Didi Chuxing',
      title: 'Senior Frontend Engineer (Cross-Platform Architecture)',
      period: 'Oct 2020 – Present',
      location: 'Beijing',
      desc: 'Didi Freight · Driver App Cross-Platform & Stability Lead',
      bullets: [
        'Led migration from in-house framework Hummer to DRN (Didi React Native) across Android/iOS/HarmonyOS, unifying UI rendering and business logic layers; designed phased grayscale rollout strategy (whitelist → city → staged), established self-testing, Bug Hunter, and integration regression mechanisms, significantly reducing multi-platform maintenance costs.',
        'Built a闭环 stability governance system: pre-release (checklist/CR/score), real-time (Crash/ANR/white-screen/JS exception/gray monitoring), and post-mortem (retro/TTO tracking/root cause analysis). Achievements: Crash rate 2% → 0.4%, ANR rate 3% → 0.9%, JS exceptions from tens of millions to monitorable/recallable; checklist intercepted 20+ driver-side and 200+ shipper-side issues, 29 proactive escalations.',
        'Developed a white-screen monitoring SDK with page-level detection and grayscale aggregation, covering Native/H5/DRN hybrid scenarios; surfaced domain anomalies, slow H5 image loading, and page config errors, transforming white-screen from invisible to monitorable and diagnosable.',
        'Built cr-toolkit AI Code Review tool powered by DeepSeek/OpenAI/Claude, supporting intelligent diff segmentation, parallel analysis, branch comparison, and auto-generated CR suggestions. Results: 8,140 lines effectively reviewed, avg merge time per 100 lines reduced from 51.6 min to 1.8 min (28.7x improvement), commit standardization rate from 44.25% to 96.88%.',
        'Optimized hall list swipe interaction and surge-scenario order selection, reducing selection time by 9.36s; improved pooling strategy with 15K daily orders, saving 2.24 min per order, increasing IPH by ¥2.6, and improving pooling quality by 23%.',
        'Led app compliance remediation and information security hardening, fixing 30+ vulnerabilities including horizontal privilege escalation, cross-border domains, sensitive fields, and over-permission issues; nominated for Didi Security Committee "Guardian" award.',
      ],
    },
    {
      company: '360',
      title: 'Frontend Engineer',
      period: 'Oct 2019 – Oct 2020',
      location: 'Beijing',
      desc: null,
      bullets: [
        'Developed core frontend features for 360 Secure Browser; led PC-to-Web technology migration accelerating feature iteration.',
        'Optimized page loading performance, reducing above-the-fold render time by 40%; collaborated with product and design teams on multi-platform UX consistency.',
      ],
    },
    {
      company: 'Bitauto',
      title: 'Frontend Engineer',
      period: 'Feb 2017 – Oct 2019',
      location: 'Beijing',
      desc: null,
      bullets: [
        'Led technical upgrade of Bitauto main site and H5 mobile pages; incrementally migrated legacy jQuery codebase to Vue/React stack.',
        'Set up frontend build and automated deployment pipeline; contributed to design system standardization across platforms.',
      ],
    },
    {
      company: 'Beijing Xiaoniao Yida Technology',
      title: 'Android Developer',
      period: 'Aug 2014 – Feb 2017',
      location: 'Beijing',
      desc: null,
      bullets: [
        'Designed and built the core Android application from scratch, independently delivering multiple feature modules reaching millions of users.',
      ],
    },
  ],

  projects: [
    {
      name: 'cr-toolkit',
      url: 'https://github.com/huangbo-me/cr-toolkit',
      desc: 'AI Code Review tool integrating multi-model support. Auto CR generation, branch comparison, project-level analysis.',
      stack: 'TypeScript, Node.js, DeepSeek / OpenAI / Claude API',
    },
    {
      name: 'White-Screen Monitor SDK',
      url: 'https://github.com/huangbo-me/screen-monitor',
      desc: 'Page-level white-screen detection & monitoring SDK supporting Native/H5/DRN hybrid scenarios with grayscale alerting.',
      stack: 'TypeScript, React Native, APM',
    },
  ],
  projectsEmpty: 'No projects to show',

  school: 'Beijing University of Chemical Technology',
  degree: 'B.E. in Computer Science and Technology',
  gradYear: '2014',

  footer: 'All rights reserved',
  switchLang: '中文',

  // Navigation
  navResume: 'Resume',
  navBlog: 'Blog',
  blogBack: 'Back to blog',

  // Blog
  blog: {
    title: 'Tech Blog',
    subtitle: 'Cross-Platform Architecture, Stability Governance & Engineering Efficiency',
    list: [
      {
        slug: 'stability-governance',
        title: 'Building a Stability Governance System for 10M+ DAU Apps',
        description:
          'How to build a full-stack stability governance system covering prevention, monitoring, and post-mortem. Based on real practices from Didi Freight driver app.',
        date: 'Apr 2026',
        readTime: '15 min read',
        tags: ['Stability', 'Cross-Platform', 'Quality Engineering'],
      },
    ],
  },
}

export { zh, en }
