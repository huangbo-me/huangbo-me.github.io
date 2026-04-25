const zh = {
  // Header
  name: '黄波',
  title: '资深前端研发工程师',
  company: '滴滴出行',
  location: '北京',
  summary: '拥有10年以上互联网研发经验，涵盖 Android 原生开发与前端工程化。近6年深耕前端领域，擅长大规模复杂系统的架构设计、性能优化与团队协作。具备跨平台技术融合能力，致力于推动工程效率与产品质量的持续提升。',
  email: 'your@email.com',

  // Nav
  skillsTitle: '技术栈',
  experienceTitle: '工作经历',
  projectsTitle: '项目经验',
  educationTitle: '教育背景',

  // Skills
  skills: [
    { category: '语言', items: 'TypeScript, JavaScript (ES2022+), HTML5, CSS3' },
    { category: '框架', items: 'React 18, Next.js, Vue 3' },
    { category: '状态管理', items: 'Zustand, React Query, Redux Toolkit, Pinia' },
    { category: '构建工具', items: 'Vite, Webpack 5, Turborepo, esbuild' },
    { category: '测试', items: 'Jest, React Testing Library, Playwright, Vitest' },
    { category: '性能优化', items: 'Web Vitals, Lighthouse, Chrome DevTools, Sentry' },
    { category: '跨平台', items: 'React Native, Flutter, Electron' },
    { category: '工程化', items: 'Docker, GitHub Actions, Vercel, AWS' },
  ],

  // Experience
  experience: [
    {
      company: '滴滴出行',
      title: '资深前端研发工程师',
      period: '2020.10 - 至今',
      location: '北京',
      desc: '全球领先的一站式移动出行平台',
      bullets: [
        '主导核心业务前端架构设计与重构，支撑千万级日活用户的高并发访问',
        '搭建企业级组件库，覆盖 10+ 业务线，提升研发效率 30%+',
        '推进微前端架构落地，实现多团队独立开发与部署，发布周期缩短 50%',
        '建立前端性能监控体系，核心页面 LCP 从 3.5s 优化至 1.2s，Lighthouse 评分提升至 90+',
        '推动 TypeScript 全面化，代码缺陷率降低 40%',
        '指导初中级工程师成长，建立 Code Review 文化与技术分享机制',
      ],
    },
    {
      company: '360',
      title: '前端研发工程师',
      period: '2019.10 - 2020.10',
      location: '北京',
      desc: '中国领先的互联网安全公司',
      bullets: [
        '负责360安全浏览器相关前端功能的开发与维护',
        '参与 PC 端向 Web 端的技术迁移项目，提升功能迭代效率',
        '优化页面加载性能，首屏渲染时间缩短 40%',
        '与产品、设计团队紧密协作，推动多端统一用户体验',
      ],
    },
    {
      company: '易车',
      title: '前端研发工程师',
      period: '2017.02 - 2019.10',
      location: '北京',
      desc: '中国领先的汽车互联网企业',
      bullets: [
        '负责易车主站及移动端 H5 页面的开发与性能调优',
        '主导 jQuery 旧项目向 Vue/React 技术栈的渐进式迁移',
        '搭建前端构建与部署流水线，实现自动化发布流程',
        '参与设计系统建设，统一多端视觉与交互规范',
      ],
    },
    {
      company: '北京小鸟易达科技发展有限公司',
      title: 'Android 软件开发工程师',
      period: '2014.08 - 2017.02',
      location: '北京',
      desc: null,
      bullets: [
        '负责公司核心产品 Android 客户端的设计、开发与维护',
        '独立完成多个功能模块从零到一的开发，累计触达百万级用户',
        '参与架构选型与性能优化，提升应用稳定性与响应速度',
        '积累了扎实的移动端开发经验，为后续前端转型打下坚实基础',
      ],
    },
  ],

  // Projects
  projects: [
    {
      name: '项目名称一',
      url: 'https://github.com/huangbo-me/project-a',
      desc: '描述项目做什么、解决什么问题、技术亮点或数据指标。',
      stack: 'React, TypeScript, Node.js',
    },
    {
      name: '项目名称二',
      url: 'https://github.com/huangbo-me/project-b',
      desc: '描述项目做什么、解决了什么问题，取得了什么成果。',
      stack: 'Vue 3, Vite, Tailwind CSS',
    },
  ],
  projectsEmpty: '暂无项目展示',

  // Education
  school: '北京化工大学',
  degree: '本科 · 计算机科学与技术',
  gradYear: '2014',

  // Footer
  footer: '保留所有权利',

  // Lang toggle
  switchLang: 'English',
}

const en = {
  name: 'Bo Huang',
  title: 'Senior Frontend Engineer',
  company: 'Didi Chuxing',
  location: 'Beijing, China',
  summary: '10+ years of internet product development experience spanning Android native development and frontend engineering. Specialized in architecture design, performance optimization, and team collaboration for large-scale complex systems.',
  email: 'your@email.com',

  skillsTitle: 'Skills',
  experienceTitle: 'Experience',
  projectsTitle: 'Projects',
  educationTitle: 'Education',

  skills: [
    { category: 'Languages', items: 'TypeScript, JavaScript (ES2022+), HTML5, CSS3' },
    { category: 'Frameworks', items: 'React 18, Next.js, Vue 3' },
    { category: 'State Management', items: 'Zustand, React Query, Redux Toolkit, Pinia' },
    { category: 'Build Tools', items: 'Vite, Webpack 5, Turborepo, esbuild' },
    { category: 'Testing', items: 'Jest, React Testing Library, Playwright, Vitest' },
    { category: 'Performance', items: 'Web Vitals, Lighthouse, Chrome DevTools, Sentry' },
    { category: 'Cross-Platform', items: 'React Native, Flutter, Electron' },
    { category: 'Infrastructure', items: 'Docker, GitHub Actions, Vercel, AWS' },
  ],

  experience: [
    {
      company: 'Didi Chuxing',
      title: 'Senior Frontend Engineer',
      period: 'Oct 2020 – Present',
      location: 'Beijing',
      desc: 'World-leading one-stop mobility platform',
      bullets: [
        'Architected and refactored core business frontend, supporting 10M+ DAU with high concurrency.',
        'Built enterprise component library used by 10+ product lines, improving R&D efficiency by 30%+.',
        'Implemented micro-frontend architecture enabling independent development and deployment, cutting release cycles by 50%.',
        'Established frontend performance monitoring system, improving LCP from 3.5s to 1.2s and Lighthouse score to 90+.',
        'Drove full TypeScript migration, reducing defect rate by 40%.',
        'Mentored junior and mid-level engineers through code reviews and tech sharing sessions.',
      ],
    },
    {
      company: '360',
      title: 'Frontend Engineer',
      period: 'Oct 2019 – Oct 2020',
      location: 'Beijing',
      desc: 'Leading internet security company in China',
      bullets: [
        'Developed and maintained frontend features for 360 Secure Browser.',
        'Participated in migration from desktop to web platform, accelerating feature iteration.',
        'Optimized page load performance, reducing above-the-fold render time by 40%.',
        'Collaborated with product and design teams to deliver consistent multi-platform UX.',
      ],
    },
    {
      company: 'Bitauto',
      title: 'Frontend Engineer',
      period: 'Feb 2017 – Oct 2019',
      location: 'Beijing',
      desc: 'Leading auto internet company in China',
      bullets: [
        'Developed and optimized Bitauto main site and mobile H5 pages.',
        'Led incremental migration of legacy jQuery codebase to Vue/React stack.',
        'Set up frontend build and deployment pipeline for automated releases.',
        'Contributed to design system standardization across multiple platforms.',
      ],
    },
    {
      company: 'Beijing Xiaoniao Yida Technology',
      title: 'Android Developer',
      period: 'Aug 2014 – Feb 2017',
      location: 'Beijing',
      desc: null,
      bullets: [
        'Designed, developed, and maintained the core Android application from the ground up.',
        'Independently delivered multiple feature modules, reaching millions of users.',
        'Contributed to architecture selection and performance optimization for better stability.',
        'Built solid mobile development foundation that enabled seamless transition to frontend engineering.',
      ],
    },
  ],

  projects: [
    {
      name: 'Project Name A',
      url: 'https://github.com/huangbo-me/project-a',
      desc: 'What it does, problem it solves, tech highlights or metrics.',
      stack: 'React, TypeScript, Node.js',
    },
    {
      name: 'Project Name B',
      url: 'https://github.com/huangbo-me/project-b',
      desc: 'What it does, problem it solves, results achieved.',
      stack: 'Vue 3, Vite, Tailwind CSS',
    },
  ],
  projectsEmpty: 'No projects to show',

  school: 'Beijing University of Chemical Technology',
  degree: "B.E. in Computer Science and Technology",
  gradYear: '2014',

  footer: 'All rights reserved',

  switchLang: '中文',
}

export { zh, en }
