export const setHtmlRem = (width = 1920, px = 16) => {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / (width / px) + 'px'
    window.onresize = (function () {
        let t: NodeJS.Timeout
        return () => {
            if (t) { clearTimeout(t) }
            t = setTimeout(() => {
                if (document.documentElement.clientWidth > 1024 && document.documentElement.clientWidth <= 2304) {
                    document.documentElement.style.fontSize = document.documentElement.clientWidth / (width / px) + 'px'
                } else if (document.documentElement.clientWidth <= 1024) {
                    // 小于1024情况保证正常显示
                    document.documentElement.style.fontSize = '9px'
                } else if (document.documentElement.clientWidth > 2304) {
                    // 大于自适应最大支持px后处理
                    document.documentElement.style.fontSize = '19.2px'
                }
            }, 100)
        }
    }())
}