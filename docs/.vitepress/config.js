// vitepress/config.js
module.exports = {
    title: "silentcyanmountain's Blog",// 网站标题
    description: 'it\'s silentcyanmountain\'s  blog,it mainly shares the feeling and summary of life, work and reading', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    // lang: 'en-US', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
    sidebar: {
      // 侧边栏
      "/frontend": [
        {
          text: "前端相关",
          children: [
            { text: "前端首页", link: "/frontend/index.md" },
            { text: "typescript", link: "/frontend/typescript" },
            { text: "设计模式", link: "/frontend/patterdesign" },
            { text: "最佳实践", link: "/frontend/best-practices" },
            { text: "原生学习与总结", link: "/frontend/summary" },
          ],
        },
      ],
      "/life": [
        {
          text: "生活相关",
          children: [
            { text: "生活首页", link: "/life/index.md" },
            { text: "装修", link: "/life/decoration" },
            { text: "地摊市场调研", link: "/life/stall" },
          ],
        },
      ],
      "/amusement": [
        {
          text: "娱乐相关",
          children: [
            { text: "娱乐首页", link: "/amusement/index.md" },
            { text: "羽毛球", link: "/amusement/badminton.md" },
          ],
        },
      ],
      "/reading": [
        {
          text: "阅读相关",
          children: [
            { text: "阅读首页", link: "/reading/index.md" },
            { text: "沟通相关", link: "/reading/communication.md" },
          ],
        },
      ],
    },
    nav: [
      // 顶部右侧导航栏
      { text: "阅读", link: "/reading/index", activeMatch: "^/$|^/reading/" },
      // 顶部右侧导航栏
      { text: "生活", link: "/life/index", activeMatch: "^/$|^/life/" },
      // 顶部右侧导航栏
      { text: "娱乐", link: "/amusement/index", activeMatch: "^/$|^/amusement/" },
      // 顶部右侧导航栏
      { text: "前端相关", link: "/frontend/index", activeMatch: "^/$|^/frontend/" },
      
    ],
  },
}