import { getThemeConfig, defineConfig } from '@sugarat/theme/node';

const theme = getThemeConfig({
  footer: {
    version: true,
    copyright: '朝倉みず',
  },
  themeColor: 'el-red',
  author: '朝倉みず',
});

export default defineConfig({
  extends: theme,
  lang: 'zh-cn',
  title: "Mizu's Dev Blog",
  description: 'Dev stuffs.',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  cleanUrls: true,
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    logo: '/avatar.webp',
    nav: [{ text: '首页', link: '/' }],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/AsakuraMizu',
      },
    ],
  },
});
