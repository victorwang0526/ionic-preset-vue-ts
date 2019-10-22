module.exports = [
    {
        type: 'list',
        name: 'template',
        message: 'Please pick a preset',
        choices: [
            {
                name: '默认模板',
                value: 'default'
            },
            {
                name: '默认模板(TypeScript)',
                value: 'default-ts'
            }
        ],
        default: 'None'
    }
]
