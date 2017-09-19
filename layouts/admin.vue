<template>
<section id="app" :class="{clsNoSide:sideBeHidden}">
    <section class="regWest">
        <sidebar :uris="nav"/>
    </section>
    <section class="regNorth">
        <headbar @hideside="navtoggle"/>
    </section>
    <section class="regEast">
        <nuxt/>
    </section>
</section>
</template>

<script>
import Headbar from '~/components/headbar.vue'
import Sidebar from '~/components/sidebar.vue'

import axios from 'axios'

export default {
    name: 'App',
    components: {
        Headbar,
        Sidebar
    },
    data: function() {
        return {
            sideBeHidden : false,
            nav: []
        }
    },
    methods: {
        navtoggle: function() {
            this.sideBeHidden = !(this.sideBeHidden);
        }
    },
    mounted: async function() {
        let {data} = await axios.get('/api/nav')
        this.$data.nav = data
    }
}
</script>

<style lang="scss">
@import '~assets/vars.scss';

#app {
    height: 100%;
    overflow: hidden;
    
    .regWest{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: $sidebar-width;
    }
    .regNorth{
        position: absolute;
        top: 0;
        left: $sidebar-width;
        right: 0;
        height: $header-height;
    }
    .regEast{
        position: absolute;
        top: $header-height;
        left: $sidebar-width;
        right: 0;
        bottom: 0;
        overflow: auto;
        background-color: $main-color;
        padding: 16px 16px;
    }

    &.clsNoSide{
        .regWest{
            display: none;
        }
        .regNorth{
            left: 0;
        }
        .regEast{
            left: 0;
        }
    }
}

</style>
