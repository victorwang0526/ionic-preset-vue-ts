module.exports = [
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
        default: 'None'
    }
]
