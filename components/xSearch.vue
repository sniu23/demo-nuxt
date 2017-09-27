<template>
    <el-form :inline="true" :model="frmData" ref="frm">
        <el-form-item v-for="field in frmField" :key="field.name" 
            :prop="field.name">
            <el-input v-if="field.extend === 'input'"
                v-model="frmData[field.name]"
                :placeholder="field.label"
                class="w220">
            </el-input>
            <el-date-picker v-if="field.extend === 'date'"
                type="daterange"
                v-model="frmData[field.name]"
                :placeholder="field.label"
                class="w220">
            </el-date-picker>
            <el-select v-if="field.extend === 'select'"
                v-model="frmData[field.name]"                
                filterable
                :placeholder="field.label"
                class="w220">
                <el-option v-for="item in field.source" :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span class="left" >{{ item.label }}</span>
                    <span class="right">{{ item.value }}</span>
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button-group>
                <slot>
                    <p><b>添加按钮，例如：</b>#el-button type="primary" @click="onSubmit"#查询#/el-button#</p>
                </slot>
                <el-button @click="resetForm('frm')">重置</el-button>
            </el-button-group>
        </el-form-item>
    </el-form>
</template>

<script>
/**
 * 查询表单控件
 * 其中，el-form 使用行内样式，标签宽度默认100px；el-form-item 字段宽度默认220px。
 * 支持使用 form-item 控件：el-input、el-select、el-date-picker (type=daterange)
 */
export default {
    name: "xsearch",
    props: ['frmData','frmField'],
    methods: {
        resetForm(formName) {   
            this.$refs[formName].resetFields();
        }
    }

}
</script>

<style lang="scss" scoped>
.w220{
    width: 220px;
}
.left{
    float: left;
}
.right{
    float: right; 
    color: #8492a6; 
    font-size: 13px;
}
</style>



