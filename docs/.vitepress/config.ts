import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from "@vitepress-demo-preview/plugin"

// 配置导航
const nav: DefaultTheme.NavItem[] = [
    { text: '指南', link: '/guild/' },
    { text: '组件', link: '/components/basic-component1' },
    {
        text: 'Dropdown Menu',
        items: [
            { text: 'Item A', link: '/item-1' }
        ]
    }
]

// 配置侧边栏
const sidebar: DefaultTheme.Sidebar = {
    '/guild': [
        {
            text: '指南',
            items: [
                { text: '组件库介绍', link: '/guild/' },
                { text: '快速开始', link: '/guild/quickstart' }
            ]
        }
    ],
    '/components': [
        {
            text: '通用基础组件',
            items: [
                { text: '基础组件', link: '/components/basic-component1' }
            ]
        }
    ]
}

export default defineConfig({
    title: '内部组件库',
    description: '内部展示组件库',
    lang: 'cn-ZH',
    lastUpdated: true,
    base: '/vitepress/',
    themeConfig: {
        logo: '/logo.png',
        siteTitle: '组件库标题',
        outline: 3,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        nav,
        sidebar
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
        },
        lineNumbers: true,
        config(md) {
            md.use(componentPreview)
            md.use(containerPreview)
        }
    }
})