<template>
    <section class="parent">
        <el-form :model="formSign" label-position="top" class="boxSign">
            <div class="sys"><h1>XXXX系统</h1></div>
            <el-form-item label="用户名">
                <el-input v-model="formSign.nam" placeholder="demo"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formSign.pwd" placeholder="demo"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
                <el-button type="primary" size="large" @click="login" style="width: 100%">登录</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<script>
export default {
    data: function() {
        return {
            formSign: {
                nam: '',
                pwd: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$notify.error({
                title: '错误',
                message: '帐号或密码错误，请重新登录！'
            });
        },
        async login () {
            try {
                await this.$store.dispatch('login', {
                    username: this.formSign.nam,
                    password: this.formSign.pwd
                })
                this.formSign.nam = ''
                this.formSign.pwd = ''
                this.$router.push({path:'/'});
            } catch(e) {
                this.$notify.error({
                    title: '错误',
                    message: e.message
                });
            }
        }
    },
    mounted: async function() {
        try {
            await this.$store.dispatch('logout')
        } catch (e) {
            this.$notify.error({
                title: '错误',
                message: e.message
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .parent{
        display:flex; 
        align-items:center;
        justify-content:center;
        height: 100vh;
        .boxSign {
            background-color: #F9FAFC;
            width: 320px;
            border: 1px solid #D3DCE6;
            padding: 8px 32px;
            box-shadow: 0 0 8px #E5E9F2;
            margin: 0 0 100px 0;
        }
    }
    .sys{
        text-align: center;
        color: #1D8CE0;
    }  
</style>


