<template>
<!-- 整体布局 -->
    <div class="layout">
        <div class="layout-header">
            <div class="title">musicplayer</div>
            <div class="search">
            </div>
        </div>
        <div class="layout-subject">
            <div class="nav-list">
                <ul class="nav-menus">
                    <li><router-link class="menu-item" active-class="active" :to="{name:'discovery'}">发现音乐</router-link></li>
                    <li><router-link class="menu-item" active-class="active" :to="{name:'playlists'}">推荐歌单</router-link></li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <div class="layout-player"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    computed: {
    },
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
.active {
    background-color: rgb(230, 230, 230) !important;
}

.layout {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
}

.layout-header {
    width: 100%;
    height: 5%;
    display: flex;
    // justify-content: center;
    align-items: center;
    background-color: rgb(212, 206, 206);

    .title {
        text-align: center;
        line-height: 1;
        font-size: 22px;
        color: #fff;
        font-weight: bold;
        margin-left: 30px;
        -webkit-user-select: none;
        cursor: pointer;
    }
}

.layout-subject {
    width: 100%;
    height: 85%;
    display: flex;
    // background-color: rgb(233, 213, 213);

    .nav-list {
        min-width: 200px;
        max-width: 200px;
        height: 100%;
        background-color: rgb(240, 240, 240);

        .nav-menus {
            .menu-item {
                display: block;
                width: 100%;
                height: 50px;
                font-size: 20px;
                line-height: 50px;
                text-align: center;
                cursor: pointer;
                -webkit-user-select: none;
                background-color: rgb(240, 240, 240);
                color: #222;

                &:hover {
                    background-color: rgb(221, 221, 221);
                }
            }
        }
    }

    .content {
        width: 100%;
    }
}

.layout-player {
    width: 100%;
    height: 10%;
    display: flex;
    background-color: rgb(182, 176, 176);
    position: fixed;
}
</style>