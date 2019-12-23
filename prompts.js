module.exports = [
    {
        type: 'input',
        name: 'appId',
        message: 'input a appId',
        default: 'ionic.vue.preset.ts.app'
    },
    {
        type: 'input',
        name: 'appName',
        message: 'input a appName',
        default: 'ionic-vue-preset-ts-app'
    },
    {
        type: 'list',
        name: 'template',
        message: 'Please pick a preset',
        choices: [
            {
                name: 'ionic-vue',
                value: 'ionic-vue'
            },
            {
                name: 'ionic-vue-tabs',
                value: 'ionic-vue-tabs'
            }
        ],
        default: 'ionic-vue-tabs'
    }
]
