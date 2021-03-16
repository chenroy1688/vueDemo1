module.exports = [
    {
    name: '篮球赛事直播',
    id: 'basketball',
    iclass:'el-icon-view',
    sub: [
            {
                name: '备忘清单 / TodoList',
                componentName: 'TodoList'
            }, 
            {
                name: '第二页面 / aside_two',
                componentName: 'aside_two'
            }
        ]
    }, 
    {
    name: '足球赛事直播',
    id: 'football',
    iclass:'el-icon-picture-outline',
    sub: [
            {
                name: '第三页面 / aside_three',
                componentName: 'aside_three'
            }, 
            {
                name: '第四页面 / aside_four',
                componentName: 'aside_four'
            }
        ]
    }
]