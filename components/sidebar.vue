<template>
    <div id="sidebar">
        <el-menu theme="light" router>
            <div class="logo-container">
                <img class="logo" src="/logo.png" />
            </div>

            <nav-item :routes="uris" />

       </el-menu>
   </div>
</template>

<script>
import NavItem from '~/components/navItem.vue'

export default {
    name: 'Sidebar',
    props: ['uris'],
    components: {
        NavItem
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/vars.scss';

#sidebar {
    background-color: #8492A6;
    width: $sidebar-width;
    border-right: 1px solid $line-color;
    box-shadow: inset 0 0 0 0 $line-color,0 2px 1px 0 rgba(47,61,73,.05);
    height: 100%;
    visibility: visible!important;
    position: absolute;
    
    .el-menu {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .logo-container {
        text-align: center;
        width: 100%;
        .logo {
            width: 215px;
            height: 215px;
        }
    }
}
</style>
