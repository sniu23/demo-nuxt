<template>
    <header>
        <el-menu mode="horizontal" router>
            <el-menu-item class="header-navicon" index="1">
                <el-button type="text" @click="toggle">
                    <i class="md-icon">menu</i>
                </el-button>
            </el-menu-item>
            <el-submenu v-if="!!$store.state.authUser" class="header-menu" index="999">
                <template slot="title">{{ $store.state.authUser.username }}</template>
                <el-menu-item index="/profile">用户信息</el-menu-item>
                <el-menu-item index="/password">修改密码</el-menu-item>
                <el-menu-item index="/login">登出</el-menu-item>
            </el-submenu>
        </el-menu>
    </header>
</template>

<script>
export default {
    name: 'Headbar',
    methods: {
        toggle: function() {
            this.$emit("hideside")
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/vars.scss';

header {
    background-color: #fff;
    border-bottom: 1px solid $line-color;
    box-shadow: inset 0 0 0 0 $line-color,0 2px 1px 0 rgba(47,61,73,.05);
    height: $header-height;
    width: 100%;
    
    .el-menu {
        border-radius: 0;
        .header-navicon {
            display: flex;
            align-items: center;
            align-content: center;
            i {
                color: $primary-color!important;
                font-size: 2rem!important;
            }
        }
        .header-menu {
            float: right!important;
        }
        .header-title {
            font-size: 24px;
            color: $primary-color;
            margin-left: 0;
            line-height: 60px;
        }
    }
}
</style>
