<template>
    <section>
        <el-table :data="tblData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column v-if="tblChkbox" fixed type="selection" width="48">
            </el-table-column>
            <el-table-column v-for="column in tblColumn" :key="column.name"  
                :prop="column.name"
                :label="column.label"
                :width="column.width"
                :show-overflow-tooltip="column.overflow">
                <slot :name="column.name"></slot>
            </el-table-column>
            <slot></slot>
        </el-table>

        <div class="boxPage">
            <el-pagination v-if="dtTotal - pgSize > 0" @current-change="handleCurrentChange" 
                :current-page="pgCurrent" :page-size="pgSize" :total="dtTotal"
                layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </section>
</template>

<script>
export default {
    name: "xtable",
    props: ['tblData','tblColumn','tblChkbox','tblMultiSel','pgCurrent','pgSize','dtTotal'],
    methods: {
        handleSelectionChange: function(val) {
            this.$emit('update:tblMultiSel', val)
            console.log(JSON.stringify(val))
        },
        handleCurrentChange: function(val) {
            this.$emit('pageChanged', val)
        }
    }
}
</script>

<style lang="scss" scoped>
.boxPage {
    margin-top: 10px;
    float: right;
}
</style>
