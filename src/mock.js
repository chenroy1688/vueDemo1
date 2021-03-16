import Mock from 'mockjs' //引入mock.js
const Random = Mock.Random  //Mock.Random 是一个工具类，用于生成各种随机数据
const dataList = [] // 用于接受生成数据的数组

for(let i = 0; i < 30; i++){
    const template = {
        'boolean' : Random.boolean, // 可以生成基本数据类型
        'Natural': Random.natural(1, 10), // 生成1到100之间自然数
        'Character': Random.character(), // 生成随机字符串,可加参数定义规则
        'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
        'Range': Random.range(0, 10, 2), // 生成一个随机数组
        'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
        'Paragraph': Random.paragraph(2, 5), // 生成2至5个句子的文本
        'Name': Random.name(), // 生成姓名
        'Url': Random.url(), // 生成web地址
        'Address': Random.province() // 生成地址
    }
    dataList.push(template);
}
// console.log(dataList)

//list分頁接口()
Mock.mock('/api/list','post',( params ) => {
    var info = JSON.parse(params.body)
    var [index, size, total] = [info.pageIndex, info.pageSize, dataList.length]
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = dataList.slice(index * size, (index + 1) * size)

    return {
        'code'    : '0',
        'message' : 'success',
        'data'    : {
            'pageIndex'  : index,
            'pageSize'   : size,
            'rows'       : newDataList,
            'total'      : total,
            'totalPages' : totalPages
        }
    }
})

//mock模拟用户数据
Mock.mock('/api/users',(req,res) => {
    return Mock.mock({
        "users|1-10":[{
            'name'  : '@cname',
            'id|+1' : 1,
            'age|10-60' : 0, //10-60以内随机数据,0为确定类型
            'birthday' : '@date("yyyy-MM-dd")', //年月日
            'city'     : '@city(true)'  //所在城市
        }]
    })
})

//mock模拟分頁数据
Mock.mock('/api/paginationData',(req,res) => {
    return Mock.mock({
        'list|50':[
            {
                // 'id'   : '@guid',
                'id|+1' : 1,
                'name' : '@cname(3)',
                'birthday'  : '@date("yyyy-MM-dd")',
                'system' : '@cword(6)',
                'title'  : '@cword(5)',
                'vender': '@city()' + '@cword(2)',
                'type': /[A-Z]{2,5}-\d{5,7}/,
                'city': '@city(true)'
            }
        ]
    })
})

