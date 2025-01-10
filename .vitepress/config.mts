import { getThemeConfig, defineConfig } from '@sugarat/theme/node';

const theme = getThemeConfig({
  footer: {
    version: true,
    copyright: '朝倉みず',
  },
  themeColor: 'el-green',
  author: '朝倉みず',
  comment: {
    type: 'giscus',
    options: {
      repo: 'AsakuraMizu/blog',
      repoId: 'R_kgDONlBY7g',
      category: 'Comments',
      categoryId: 'DIC_kwDONlBY7s4ClrOA',
      inputPosition: 'top',
    },
    mobileMinify: true,
  },
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
      level: 'deep',
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
  markdown: {
    container: {
      infoLabel: '信息',
      noteLabel: '注意',
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      detailsLabel: '详细信息',
      importantLabel: '重要',
      cautionLabel: '小心',
    },
  },
});
