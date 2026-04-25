const zh = {
  name: '黄波',
  title: '资深前端工程师（稳定性/跨端架构方向）',
  company: '滴滴出行',
  location: '北京',
  summary: '10 年互联网研发经验，横跨 Android 原生与跨端工程化领域。\n近 6 年聚焦滴滴货运司机端，主导跨端架构升级、稳定性治理与 AI 提效工具研发。',
  email: 'huangbo.me@gmail.com',

  skillsTitle: '技术栈',
  experienceTitle: '工作经历',
  projectsTitle: '项目',
  educationTitle: '教育背景',

  skills: [
    { category: '跨端框架', items: 'React Native, DRN (Didi RN), Hummer, JSBridge' },
    { category: '客户端', items: 'Android (Java/Kotlin), iOS (OC/Swift), HarmonyOS' },
    { category: '前端', items: 'React, TypeScript, JavaScript, HTML5, CSS3' },
    { category: '稳定性', items: 'Crash/卡顿/白屏/JS异常治理, APM' },
    { category: '工程化', items: 'CI/CD, Code Review, AI CR, 自动化插桩' },
    { category: 'AI 提效', items: 'DeepSeek, OpenAI, Claude, CR Toolkit' },
  ],

  experience: [
    {
      company: '滴滴出行',
      title: '资深前端工程师（稳定性/跨端架构方向）',
      period: '2020.10 - 至今',
      location: '北京',
      desc: '滴滴货运 · 司机端跨端架构 & 稳定性治理负责人',
      bullets: [
        {
          title: '跨端架构迁移：Hummer → DRN',
          items: [
            '覆盖 Android / iOS / HarmonyOS 三端，统一 UI 渲染层与业务逻辑层',
            '分阶段灰度策略：白名单 → 分城市 → 全量放量',
            '推动自测 + Bug Hunter + 集成回归机制，大幅降低多端维护成本',
          ],
        },
        {
          title: '稳定性治理：事前-事中-事后闭环体系',
          items: [
            '事前：发版 Checklist / CR 机制 / 稳定分',
            '事中：Crash / 卡顿 / 白屏 / JS 异常 / 灰度监控',
            '事后：事故复盘 / TODO 跟进 / 线上归因',
            'Crash 率 2% → 4‰，卡顿率 3% → 9‰；Checklist 拦截问题 200+，主动上报 29 个',
          ],
        },
        {
          title: '白屏监控 SDK 自研',
          items: [
            '支持 Native / H5 / DRN 混合场景的页面级白屏识别与灰度聚合',
            '成功召回域名异常、H5 图片加载慢、页面配置错误等多类线上问题',
            '推动白屏从"不可见"变为可监控、可定位、可复盘',
          ],
        },
        {
          title: 'AI Code Review 工具 cr-toolkit',
          items: [
            '集成 DeepSeek / OpenAI / Claude 多模型，支持智能分段与并行分析',
            '有效审查代码 8140 行，百行合入时间 51.6 min → 1.8 min（↑28.7x）',
            'Commit 规范率 44.25% → 96.88%',
          ],
        },
        {
          title: '业务体验优化',
          items: [
            '大厅滑动切换与爆单选单优化，选单效率提升 9.36s',
            '拼单策略优化：日均 1.5 万单，单均节省 2.24 min，IPH ↑2.6 元，拼成质量 ↑23%',
          ],
        },
        {
          title: '合规整改与信息安全治理',
          items: [
            '修复接口越权、跨境域名、敏感字段、权限过度等安全隐患 30+ 项',
            '获滴滴大安全委员会"守护者"提名',
          ],
        },
      ],
    },
    {
      company: '360',
      title: '高级研发工程师',
      period: '2019.10 - 2020.10',
      location: '北京',
      desc: null,
      bullets: [
        {
          title: '360 安全浏览器前端开发',
          items: [
            '主导 PC 端能力向 Web 端迁移，提升功能迭代效率',
            '首屏渲染时间缩短 40%，推进多端体验统一',
          ],
        },
      ],
    },
    {
      company: '易车',
      title: '高级研发工程师',
      period: '2017.02 - 2019.10',
      location: '北京',
      desc: null,
      bullets: [
        {
          title: '移动端技术升级：Native → Flutter',
          items: [
            '主导易车 / 车销通移动端页面渐进式迁移至 Flutter',
            '搭建前端构建与自动化部署流水线，统一多端视觉与交互规范',
          ],
        },
      ],
    },
    {
      company: '北京小鸟易达科技发展有限公司',
      title: 'Android 开发工程师',
      period: '2014.08 - 2017.02',
      location: '北京',
      desc: null,
      bullets: [
        {
          title: 'Android 客户端从零到一',
          items: [
            '负责核心产品架构设计与开发，独立交付多个核心功能模块',
          ],
        },
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

  school: '应急管理大学（原华北科技学院）',
  degree: '本科 · 计算机科学与技术',
  gradYear: '2014',

  navResume: '简历',
  ministryTag: '部属高校',
  footer: '保留所有权利',
  switchLang: 'English',
}

const en = {
  name: 'Bo Huang',
  title: 'Senior Frontend Engineer (Stability & Cross-Platform Architecture)',
  company: 'Didi Chuxing',
  location: 'Beijing, China',
  summary: '10+ years spanning Android native and cross-platform engineering.\n6+ years at Didi Freight leading architecture migration, stability governance, and AI-powered developer tooling.',
  email: 'huangbo.me@email.com',

  skillsTitle: 'Skills',
  experienceTitle: 'Experience',
  projectsTitle: 'Projects',
  educationTitle: 'Education',

  skills: [
    { category: 'Cross-Platform', items: 'React Native, DRN (Didi RN), Hummer, JSBridge' },
    { category: 'Mobile', items: 'Android (Java/Kotlin), iOS (OC/Swift), HarmonyOS' },
    { category: 'Frontend', items: 'React, TypeScript, JavaScript, HTML5, CSS3' },
    { category: 'Stability', items: 'Crash/ANR/White Screen/JS Exception, APM' },
    { category: 'Engineering', items: 'CI/CD, Code Review, AI CR, Automation' },
    { category: 'AI Tools', items: 'DeepSeek, OpenAI, Claude, CR Toolkit' },
  ],

  experience: [
    {
      company: 'Didi Chuxing',
      title: 'Senior Frontend Engineer (Stability & Cross-Platform Architecture)',
      period: 'Oct 2020 – Present',
      location: 'Beijing',
      desc: 'Didi Freight · Driver App Cross-Platform & Stability Lead',
      bullets: [
        {
          title: 'Cross-Platform Migration: Hummer → DRN',
          items: [
            'Unified UI rendering and business logic across Android / iOS / HarmonyOS',
            'Phased grayscale rollout: whitelist → city-level → full release',
            'Established self-testing, Bug Hunter & regression mechanisms; reduced multi-platform maintenance cost',
          ],
        },
        {
          title: 'Stability Governance: End-to-End Loop',
          items: [
            'Pre-release: release checklist, CR process, stability score',
            'Real-time: Crash / ANR / white-screen / JS exception / gray monitoring',
            'Post-mortem: retrospective, TODO tracking, root-cause analysis',
            'Crash rate 2% → 0.4%, ANR 3% → 0.9%; checklist intercepted 200+ issues, 29 proactive escalations',
          ],
        },
        {
          title: 'White-Screen Monitoring SDK',
          items: [
            'Page-level white-screen detection with grayscale aggregation across Native / H5 / DRN',
            'Surfaced domain anomalies, slow image loading, and page config errors',
            'Transformed white-screen from invisible to monitorable, diagnosable, and reviewable',
          ],
        },
        {
          title: 'AI Code Review Tool: cr-toolkit',
          items: [
            'Multi-model integration (DeepSeek / OpenAI / Claude) with parallel diff analysis',
            '8,140 lines reviewed; merge time per 100 lines: 51.6 min → 1.8 min (28.7x faster)',
            'Commit standardization rate: 44.25% → 96.88%',
          ],
        },
        {
          title: 'Business Experience Optimization',
          items: [
            'Hall list swipe & surge order selection: reduced selection time by 9.36s',
            'Pooling strategy: 15K daily orders, –2.24 min per order, IPH +¥2.6, quality +23%',
          ],
        },
        {
          title: 'Compliance & Security Hardening',
          items: [
            'Fixed 30+ vulnerabilities: privilege escalation, cross-border domains, sensitive fields, over-permission',
            'Nominated for Didi Security Committee "Guardian" award',
          ],
        },
      ],
    },
    {
      company: '360',
      title: 'Senior R&D Engineer',
      period: 'Oct 2019 – Oct 2020',
      location: 'Beijing',
      desc: null,
      bullets: [
        {
          title: '360 Secure Browser Frontend',
          items: [
            'Led PC-to-Web technology migration, accelerating feature iteration',
            'Reduced above-the-fold render time by 40%; drove multi-platform UX consistency',
          ],
        },
      ],
    },
    {
      company: 'Bitauto',
      title: 'Senior R&D Engineer',
      period: 'Feb 2017 – Oct 2019',
      location: 'Beijing',
      desc: null,
      bullets: [
        {
          title: 'Mobile Tech Upgrade: Native → Flutter',
          items: [
            'Led incremental migration of Bitauto / CheXiaoTong mobile pages to Flutter',
            'Built frontend CI/CD pipeline; standardized visual and interaction specs across platforms',
          ],
        },
      ],
    },
    {
      company: 'Beijing Xiaoniao Yida Technology',
      title: 'Android Developer',
      period: 'Aug 2014 – Feb 2017',
      location: 'Beijing',
      desc: null,
      bullets: [
        {
          title: 'Android App from Scratch',
          items: [
            'Architected and built the core Android application, delivering multiple key modules independently',
          ],
        },
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

  school: 'University of Emergency Management (formerly North China Institute of Science and Technology)',
  degree: 'B.E. in Computer Science and Technology',
  gradYear: '2014',

  footer: 'All rights reserved',
  switchLang: '中文',
  navResume: 'Resume',
  ministryTag: 'Ministry-affiliated',
}

export { zh, en }
