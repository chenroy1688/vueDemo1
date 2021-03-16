module.exports = [
    {
    name: '篮球直播 / basketball',
    id: 'basketball',
    iclass:'basketball',
    sub: [
            {
                id:1,
                name: 'NBA直播',
                href:'/formOne',
                componentName: 'NBA'
            }, 
            {
                id:2,
                name: 'CBA直播',
                href:'/formOne',
                componentName: 'CBA'
            },
            {
                id:3,
                name: 'NCAA直播',
                href:'/formOne',
                componentName: 'CBA'
            },
            {
                id:4,
                name: 'SBL直播',
                href:'/formOne',
                componentName: 'SBL'
            }
        ]
    }, 
    {
    name: '足球直播 / football',
    id: 'football',
    iclass:'football',
    sub: [
            {
                id:1,
                name: '中超直播',
                href:'/formTwo',
                componentName: 'chinese'
            }, 
            {
                id:2,
                name: '英超直播',
                href:'/formTwo',
                componentName: 'englend'
            },
            {
                id:3,
                name: '西甲直播',
                href:'/formTwo',
                componentName: 'west'
            },
            {
                id:4,
                name: '德甲直播',
                href:'/formTwo',
                componentName: 'german'
            },
            {
                id:5,
                name: '意甲直播',
                href:'/formTwo',
                componentName: 'edali'
            }
        ]
    },
    {
    name: '网球直播 / tennis',
    id: 'tennis',
    iclass:'tennis',
    sub: [
            {
                id:1,
                name: '大满贯',
                href:'/formOne',
                componentName: 'Big'
            }, 
            {
                id:2,
                name: 'ATP巡回赛',
                href:'/formOne',
                componentName: 'atp'
            },
            {
                id:3,
                name: '网球大师赛',
                href:'/formOne',
                componentName: 'bigTeach'
            }
        ]
    },
    {
    name: '棒球直播 / baseball',
    id: 'baseball',
    iclass:'baseball',
    sub: [
            {
                id:1,
                name: 'MLB大联盟',
                href:'/portFolio',
                componentName: 'mlb'
            }, 
            {
                id:2,
                name: '日本职棒',
                href:'/portFolio',
                componentName: 'jpn'
            },
            {
                id:3,
                name: '台湾职棒',
                href:'/portFolio',
                componentName: 'taiwan'
            },
            {
                id:4,
                name: '韩国职棒',
                href:'/',
                componentName: 'korea'
            }
        ]
    },
    {
    name: '羽球直播 / bedminton',
    id: 'bedminton',
    iclass:'bedminton',
    sub: [
            {
                id:1,
                name: '羽球公开赛',
                href:'/',
                componentName: 'public cup'
            }, 
            {
                id:2,
                name: '苏迪曼杯',
                href:'/personname',
                componentName: 'sudema cup'
            },
            {
                id:3,
                name: '国际羽球锦标赛',
                href:'/personname',
                componentName: 'internation cup'
            },
            {
                id:4,
                name: '汤玛士杯',
                href:'/personname',
                componentName: 'tommars'
            }
        ]
    }
]