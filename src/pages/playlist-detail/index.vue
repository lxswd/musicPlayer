<template>
<!-- 歌单详情界面 -->
    <div class="palylist-detail" v-if="loading">
        <div class="header">
            <div class="card">
                <img :src="playlist.coverImgUrl" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <p>{{playlist.name}}</p>
                </div>
                <div class="author">
                    <div class="name">{{playlist.creator.nickname}}</div>
                    <div class="time">{{playlist.creator.birthday}}</div>
                </div>
                <div class="menus">
                    <button class="btn">播放全部</button>
                    <button class="btn">已收藏</button>
                    <button class="btn">分享</button>
                    <button class="btn">下载全部</button>
                </div>
                <div class="tag">{{playlist.tags[0]}}</div>
                <div class="play">
                    <div class="track-count">
                        <span>歌曲</span>
                        <span>{{playlist.trackCount}}</span>
                    </div>
                    <div class="play-count">
                        <span>播放</span>
                        <span>{{playlist.playCount}}</span>
                    </div>
                </div>
                <div class="description">
                    <p>{{playlist.description}}</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="section">
                <div class="song-list">歌曲列表</div>
                <div class="comment">评论</div>
                <div class="collector">收藏者</div>
                <input type="search" placeholder="搜索歌单音乐">
            </div>
            <div class="list-detail">
                <ul>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {getPlaylistDetail, getSongListDetail} from '@/utils/api'
export default {
    data () {
        return {
            loading: false,
            playlist: [],
            songListDetail: []
        }
    },
    created () {

    },
    mounted () {
        this.gainPlaylistDetail();
        // this.gianSongListDetail();
    },
    methods: {
        /* 获取歌单详情 */
         gainPlaylistDetail () {
            var _this = this;
            getPlaylistDetail ({
                id: _this.$route.params.id
            })
            .then(res => {
                console.log('getPlaylistDetail',res)
                if (res.status == 200) {
                    _this.playlist =  res.playlist;
                    _this.loading = true;
                    _this.gianSongListDetail();
                } else {
                    console.log('请求失败')
                }
            })
            .catch(err => {
                console.log(err)
            })
        },

        /* 获取歌曲详情 */
        gianSongListDetail () {
            var _this = this
            const trackIds = _this.playlist.trackIds.map(function(item) {
                return item.id
            }) 
            getSongListDetail ({
                id: trackIds
            })
            .then(res => {
                console.log(res)
                _this.songListDetail = res.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

}
</script>
<style lang="scss" scoped>
.playlist-detail {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
}

.header {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 60px;

    .card {
        width: 200px;
        height: 200px;
        background-color: rgb(226, 225, 225);

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }

    .content {
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 10px;

        .title {
            font-size: 28px;
            font-weight: bold;
        }

        .author {
            display: flex;
            justify-content: center;
            align-items: center;
            
            .name {
                margin-right: 10px;
            }
        }

        .menus {
            .btn {
                padding: 7px 15px;
                font-size: 16px;
                background-color: #fff;
                border-radius: 20px;
                outline: transparent;
                border: 1px solid rgb(220, 220, 220);
                -webkit-user-select: none;
                cursor: pointer;
                margin-right: 10px;

                &:first-child {
                    background-color: rgb(212, 206, 206);
                    color: #fff;
                }
            }
        }

        .play {
            display: flex;

            .track-count {
                margin-right: 10px;
            }
        }
    }
}
</style>
