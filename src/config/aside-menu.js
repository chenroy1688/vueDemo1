module.exports = [
    {
    name: '备忘录功能',
    id: 'Table-system',
    icon:'icon-home',
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '工作计划表 / todoList',
                href:'/AboutUs',
                icon:'icon-home',
                componentName: 'AboutUsne'
            }, 
            {
                name: '备忘录 / todoList',
                href:'/todoList',
                icon:'icon-home',
                componentName: 'TodoList'
            }
        ]
    }, 
    {
    name: '表单功能',
    id: 'TodoList-system',
    icon:'icon-user', 
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '表单实现全选',
                href:'/FormOne_All',
                icon:'icon-user',
                componentName: 'form1_All'
            }, 
            {
                name: '表单实现分页功能',
                href:'/FormTwo_All',
                icon:'icon-user',
                componentName: 'form2_All'
            }, 
            {
                name: '增删改查功能',
                href:'/FormThree_All',
                icon:'icon-user',
                componentName: 'form3_All'
            }, 
            {
                name: '懒加载(点击加载)',
                href:'/FormFour_All',
                icon:'icon-user',
                componentName: 'form4_All'
            },
            {
                name: '懒加载(滚动加载)',
                href:'/FormFive_All',
                icon:'icon-user',
                componentName: 'form5_All'
            },
        ]
    },
    {
    name: '基础功能区',
    id: 'basic-system',
    icon:'icon-home',
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '基础选项A',
                href:'/forecast',
                icon:'icon-video',
                componentName: 'TodoList'
            }, 
            {
                name: '基础选项B',
                href:'/personname',
                icon:'icon-video',
                componentName: 'aside_two'
            }
        ]
    },
    {
    name: '会员地图功能',
    id: 'basic-system',
    icon:'icon-mobile',
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '中國疫情地圖',
                href:'/chinaMap',
                icon:'icon-video',
                componentName: 'chinaMap'
            }, 
            {
                name: '会员地图功能',
                href:'/personname',
                icon:'icon-video',
                componentName: 'aside_two'
            }
        ]
    },
    {
    name: '各功能',
    id: 'basic-system',
    icon:'icon-mobile',
    flag:false,
    arrow:'▶',
    subItems: [
            {
                name: '各功能组件',
                href:'/AllComponents',
                icon:'icon-video',
                componentName: 'AllComponents'
            }
        ]
    },

]