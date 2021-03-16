// 引入封装好的jsonp
import jsonp from './jsonp'

// 假设这里为跨域请求疫情数据当前城市的接口
export function getCurrCity(){
  //接口地址
  let url = 'https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427'
  //所需参数
  let datas = {
    'qt': 'dec',
    'ie': 'utf-8',
    'oue': 1,
    'fromproduct': 'jsapi',
    'res': 'api',
    'ak': 'QWilijLzYd6pCmTrHilAeWjbG41zMiXc'
  }
  return jsonp(url, datas, {})
}