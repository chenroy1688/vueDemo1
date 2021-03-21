/**   
 * api接口统一管理
 */
//引入封装get,post方法
import {get,post} from './http'

//首页请求 gameData
export const getGameApi = () => get('./static/gameData.json'); //体育赛事数据
export const getNewsApi = () => get('./static/newsDatas.json'); //体育新闻数据
//全選頁面 請求 tableData.json
export const getTableData = () => get('./static/tableData.json'); //全選用數據
//赛事直播 
export const gamePlayApi = () => get('https://jsonplaceholder.typicode.com/users'); 
//最新信习usersPage
export const userList = () => get('https://jsonplaceholder.typicode.com/users');
//form4_All 懒加载数据接口 get请求
export const LazyLoadApi = () => get('https://jsonplaceholder.typicode.com/posts');
//jsonplaceholder分页数据
export const usersPage = params => get('https://jsonplaceholder.typicode.com/posts/1/comments',{ params : params });

//疫情数据接口
export const chinaMap = () => get('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427');