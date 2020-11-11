<template>
    <div class="home">
        <div class="header">
            <div class="title">
                <p>musicPlayer播放器</p>
            </div>
        </div>
        <div class="main">
            <div class="content">
                <div class="menuList">
                    <button class="btn">正在播放</button>
                    <button class="btn">音乐推荐</button>
                    <button class="btn">我听过的</button>
                    <button class="btn">我的歌单</button>
                    <button class="btn">搜索</button>
                </div>
                <div class="musicList">
                    <ul class="label">
                        <li class="index">序号</li>
                        <li class="title">音乐标题</li>
                        <li class="name">歌手</li>
                        <li class="album">专辑</li>
                        <li class="time">时长</li>
                    </ul>
                    <ul class="list" v-for="(item, index) in list" :key="index">
                        <li class="index">{{index+1}}</li>
                        <li class="title">{{item.song.name}}</li>
                        <li class="name">{{item.song.artists[0].name}}</li>
                        <li class="album">{{item.song.album.name}}</li>
                        <li class="time">{{item.song.duration}}</li>
                    </ul>
                </div>
            </div>
            <div class="info"></div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            list: []
        }
    },
    mounted (){
        this.musicList();
    },
    methods: {
        musicList () {
            var _this = this
            this.axios.get('http://localhost:3000/personalized/newsong').then((res) => {
                console.log(res.data)
                _this.list = res.data.result
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.home {
    height: 100vh;
    background-color: rgb(158, 158, 158);
}

.header {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}

.main {
    height: 70vh;
    display: flex;

    .content {
        width: 70vw;
        display: flex;
        flex-direction: column;
        margin-left: 5px;

        .menuList {//按钮
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .btn {
                padding: 12px 24px;
                line-height: 1.5;
                text-align: cetner;
                border-radius: 5px;
                background: transparent;
                border: 1px solid #222;
                color: #eee;
                margin-right: 5px;
                outline: none;
                -webkit-user-select: none;
                cursor: pointer;

                &:active {
                    opacity: 0.5;
                }
            }
        }

        .musicList {
            width: 100%;
            // border: 1px solid #222;
            margin-top: 10px;

            .label {//歌单标题
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-top: 1px solid #222;
                border-right: 1px solid #222;

                li {
                    border-left: 1px solid #222;
                    border-bottom: 1px solid #222;
                    text-align: left;
                    line-height: 30px;
                }

                .index {
                    width: 100px;
                }

                .title {
                    width: 500px;
                }

                .name {
                    width: 200px;
                }

                .album {
                    width: 200px;
                }

                .time {
                    width: 100px;
                }
            }

            .list {//歌单列表
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-left: 1px solid #222;
                border-right: 1px solid #222;

                 &:nth-child(even) {
                        background-color: rgba(255,255,255,0.5);
                    }

                    &:nth-child(odd) {
                        background-color: rgba(255,255,255,0.1);
                    }

                li {
                    // border-left: 1px solid #222;
                    // border-bottom: 1px solid #222;
                    text-align: left;
                    line-height: 30px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-left: 5px;
                    box-sizing: border-box;
                }

                .index {
                    width: 100px;
                }

                .title {
                    width: 500px;
                }

                .name {
                    width: 200px;
                }

                .album {
                    width: 200px;
                }

                .time {
                    width: 100px;
                }
            }
        }
    }
}
</style>