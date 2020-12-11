/**
 * api接口统一管理
*/

import {get} from './http'
/* 获取歌单页面详情 */
export const getPlaylistDetail = params => get('/playlist/detail', params)
export const getSongListDetail = params => get('/song/url', params)

export const login = params => get('/login/cellphone', params)