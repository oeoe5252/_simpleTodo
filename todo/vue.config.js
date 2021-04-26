// vue.config.js 
// the "@" in vue-cli is an alias that points to __dirname/src
module.exports = {
    outputDir: '../docs',
    publicPath: '/_simpleTodo/',
    css: {
        loaderOptions: {
            scss: {
                data: `
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_reset.scss";
                    @import "@/assets/scss/_common.scss";
                    @import "@/assets/scss/_mixins.scss";
                    @import "@/assets/scss/_mediaMixins.scss";
                    @import "@/assets/scss/_keyframes.scss";
                `
            }
        }
    },
}