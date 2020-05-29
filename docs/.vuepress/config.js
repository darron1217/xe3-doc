// 사이드바 내용 자동생성 플러그인 (md파일 자동인식)
const menuConfig = require("vuepress-bar")(`${__dirname}/..`, {
    maxLevel: 4,
    addReadMeToFirstGroup: false
});

module.exports = {
    title: "XE3 가이드 문서",
    description: "XE3 가이드 문서",
    base: "/xe3-doc/",
    plugins: ['fulltext-search'],
    themeConfig: {
        ...menuConfig
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode"));
        }
    }
}