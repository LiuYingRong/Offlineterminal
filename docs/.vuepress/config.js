module.exports = {
    title: '外业离线端',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favorite.icon', type: 'image/jpg' }]
    ],
    description: '外业离线端开发文档',
    port: 6066,
    base: '/Offlineterminal/',
    markdown: {
        toc: { includeLevel: [1, 2, 3] },
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    const dayjs = require('dayjs')
                    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
                }
            }
        ],
        [
            '@vssue/vuepress-plugin-vssue', {
                platform: 'github-v4',
                locale: 'zh',
                // 其他的 Vssue 配置
                owner: 'LiuYingRong', //github账户名
                repo: 'Offlineterminal', //github项目的名称
                clientId: 'f998dc6362cf14b8c23a',
                clientSecret: '60941b7d722df940e5b2b9803fc9fbb88704d5d5',
                autoCreateIssue: true // 自动创建评论，默认是false
            },
        ]
    ],
    // 主题配置
    themeConfig: {
        // 显示更新时间
        lastUpdated: '上次更新',
        // 网站logo
        logo: '/logo.png',
        // 顶部导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'Electron文档', link: 'https://www.electronjs.org/docs' },
            { text: 'Vue文档', link: 'https://cn.vuejs.org/v2/guide/' },
            { text: 'View UI文档', link: 'https://www.iviewui.com/docs/guide/start' },
        ],
        activeHeaderLinks: false,
        sidebar: [{
            title: "指南",
            collapsable: false,
            children: [
                ['/guide/', '项目介绍'],
                ['/guide/Technical', '技术路线'],
                ['/guide/Standard', '开发规范'],
                ['/guide/Progress', '开发进度'],
                ['/guide/Issue', '问题反馈'],
                ['/guide/UpdateLog', '更新日志'],
            ]
        }, {
            title: "进阶",
            collapsable: false,
            children: [
                ['/guide/Api', 'Api接口文档'],
                ['/guide/KnowledgeBase', '知识库'],
            ]
        }, ]
    }
}