<template>
	<el-dialog title="提示" :visible.sync="profileVisibal" size="tiny">
		<span>这是一段信息</span>
		<span slot="footer" class="dialog-footer">
			<el-button @click="logoutVisibal = false">取 消</el-button>
			<el-button type="primary" @click="logoutVisibal = false">确 定</el-button>
		</span>
    </el-dialog>
</template>

<script>
export default {
	name: 'Profile',
	layout: "admin",
    data() {
        return {
            profileVisibal: true
        };
    }
}
</script>

<style lang="scss" scoped>

</style>


