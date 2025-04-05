import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nebula Framework",
  description: "Nebula 项目文档",
  head: [
    ['link', { rel: 'icon', href: '/nebula.svg' }],
    ['script', {
      defer: '',
      src: 'https://cloud.umami.is/script.js',
      'data-website-id': '80d5b41d-eee5-456f-b807-5511d3cd2e3b'
    }]
  ],
  themeConfig: {
    logo: '/nebula.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeegixOpensourceGroup/nebula-framework', ariaLabel: 'GitHub' },
      { icon: {
        svg: '<svg t="1712329549577" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1449" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1450"></path></svg>'
      }, link: 'https://gitee.com/neegix-opensource-group/nebula-framework', ariaLabel: 'Gitee' },
      { icon: {
        svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1732077399251" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5113" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="256"><path d="M0 512v512h1024V0H0v512zM720 166.4c76.8 35.2 108.8 131.2 51.2 166.4-12.8 9.6-54.4-3.2-86.4-28.8-137.6-102.4-304-9.6-348.8 198.4-16 86.4-6.4 118.4 60.8 185.6 92.8 92.8 198.4 102.4 300.8 28.8 80-54.4 134.4-35.2 134.4 48 0 86.4-163.2 144-342.4 121.6-224-25.6-310.4-134.4-291.2-368 12.8-153.6 32-192 131.2-284.8 124.8-112 243.2-134.4 390.4-67.2z" p-id="5114" fill="#d81e06"></path></svg>'
      }, link: 'https://gitcode.com/NeegixOpensourceGroup/nebula-framework', ariaLabel: 'GitCode' }
    ], 

    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()===2024?'Present':new Date().getFullYear()} Neegix Opensource Group`
    },
  }
})
