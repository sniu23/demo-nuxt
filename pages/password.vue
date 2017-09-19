<template>
	<el-dialog title="修改密码" :visible.sync="passwordVisibal"  size="tiny">
		<el-form :model="formPwd" label-width="120px">
			<el-form-item label="老密码">
				<el-input v-model="formPwd.oldPwd" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="新密码">
				<el-input v-model="formPwd.newPwd" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="重复新密码">
				<el-input v-model="formPwd.cfmPwd" auto-complete="off"></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="passwordVisibal = false">取 消</el-button>
			<el-button type="primary" @click="passwordVisibal = false">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	name: 'Password',
	layout: "admin",
    data() {
        return {
            formPwd: {
                oldPwd: '',
                newPwd: '',
                cfmPwd: ''
            },
            passwordVisibal: true
        };
    }
}
</script>

<style lang="scss" scoped>

</style>


