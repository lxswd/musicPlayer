<template>
<!-- 发现音乐界面 -->
    <div class="discovery">
        <div class="header">
            <ul class="nav">
                <li><a class="nav-item">个性推荐</a></li>
                <li><a class="nav-item">歌单</a></li>
                <li><a class="nav-item">主播电台</a></li>
                <li><a class="nav-item">排行榜</a></li>
                <li><a class="nav-item">歌手</a></li>
                <li><a class="nav-item">最新音乐</a></li>
            </ul>
        </div>
        <div class="banner">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="(item, index) in banners" :key="index">
                    <img :src="item.imageUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="playlists-rec">
            <div class="title"><a>歌单推荐</a></div>
            <div class="content">
                <div class="section" v-for="(item, index) in recPlaylists" :key="index">
                    <div class="info" @click="goPlaylistDetail(index)">
                        <img :src="item.picUrl" alt="">
                        <div class="info-content">

                        </div>
                    </div>
                    <div class="description">
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            banners: [],
            recPlaylists: []
        }
    },
    mounted () {
        this.getBanners();
        this.getPlaylists();
    },
    methods: {
        /* 获取banner数据 */
        getBanners () {
            var _this = this;
            axios.get('http://localhost:3000/banner',{
                params: {
                    type: 0
                }
            })
            .then(function (res) {
                _this.banners = res.data.banners;
                // console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        /* 获取推荐歌单 */
        getPlaylists () {
            var _this = this;
            axios.get('http://localhost:3000/personalized', {
                params: {
                    limit: 5
                }
            })
            .then(function(res) {
                // console.log(res);
                _this.recPlaylists = res.data.result;
                console.log(_this.recPlaylists);
            })
            .catch(function (error) {
                console.log(error);
            })
        },

        /* 跳转歌单详情界面 */
        goPlaylistDetail (index) {
            this.$router.push({name:'playlist-detail', params:{id:this.recPlaylists[index].id}})
            console.log(this.$router)
            console.log(this.$route)
            console.log(this.recPlaylists[index].id)
        }
    }
}
</script>
<style lang="scss" scoped>
.discovery {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
}

.header {
    width: 100%;
    height: 50px;
    position: fixed;
    background-color: #fff;
    z-index: 99;

    .nav {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        .nav-item {
            width: 100%;
            height: 100%;
            padding: 5px 10px;
            font-size: 16px;
            text-align: center;
            line-height: 1.5;
            color: #222;
            -webkit-user-select: none;
            cursor: pointer;
        }
    }
}

.banner {
    padding: 60px 80px 0;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
    }
}

.playlists-rec {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 60px;

    .title {
        height: 30px;
        width: 100%;

        a {
            font-size: 20px;
            line-height: 30px;
            padding: 0 30px;
            cursor: pointer;
        }
    }

    .content {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .section {
            width: 200px;
            height: 230px;
            display: flex;
            align-items: center;
            flex-direction: column;
            
            .info {
                width: 200px;
                height: 200px;
                border-radius: 5px;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }
            
            .description {
                margin-top: 5px;

                a {
                    font-size: 14px;
                    color: rgb(80, 80, 80);
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: wrap;

                    &:hover {
                        color: rgb(43, 43, 43);
                    }
                }
            }
        }
    }
}

/* 滚动条样式修改 */
::-webkit-scrollbar {
    width:9px;
    height:9px;
}

/*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/

::-webkit-scrollbar-track {
    width: 3px;
    background-color: rgb(240, 240, 240);
}

/*滚动条的设置*/
::-webkit-scrollbar-thumb {
    min-height: 20px;
    background-color: rgb(201, 201, 201);
}

</style>