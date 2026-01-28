import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Agent Wiki CN",
  description: "全球优质 AI Agent 内容汉化与实战指南",

  // 网页标签栏图标（你可以找一个机器人图标放进 docs/public）
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],


  themeConfig: {
    // 1. 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/guide/' },
      { text: '热门 Agent 框架', link: '/frameworks/' },
      { text: '关于项目', link: '/about' },
    ],

    // 2. 侧边栏配置（这里决定了 Wiki 的书籍感）
    sidebar: [
      {
        text: '基础理论',
        items: [
          { text: '什么是 AI Agent？', link: '/guide/what-is-agent' },
          { text: '核心架构解析', link: '/guide/architecture' },
        ]
      },
      {
        text: '汉化专区',
        items: [
          { text: 'OpenAI Deep Research 深度解析', link: '/translations/openai-deep-research' },
          { text: 'AutoGPT 官方文档汉化', link: '/translations/autogpt' },
        ]
      }
    ],

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/agent-wiki' }
    ],

    // 4. 搜索功能（初期使用本地搜索即可，非常快）
    search: {
      provider: 'local'
    },

    // 5. 页脚
    footer: {
      message: '基于 VitePress 驱动，致力消除 AI 领域信息差',
      copyright: `Copyright © ${new Date().getFullYear()} YourName`
    }
  }
})