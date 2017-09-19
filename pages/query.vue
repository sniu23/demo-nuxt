<template>
    <section>

        <el-form :inline="true" :model="formDemo">
            <el-form-item label="审批人">
                <el-input v-model="formDemo.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formDemo.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动日期">
                <el-date-picker v-model="formDemo.date1" type="daterange" placeholder="选择日期范围"></el-date-picker>
            </el-form-item>
            <br/>
            <el-form-item>
                <el-button-group>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                    <el-button type="primary" @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                    <el-button type="primary" @click="toggleSelection()">取消选择</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>

        <el-table ref="tbl" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column fixed type="selection" width="48">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="boxPage">
            <el-pagination @current-change="handleCurrentChange" 
                :current-page="currentPage" :page-size="20" :total="400"
                layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
       
    </section>
</template>

<script>
import axios from 'axios'

export default {
    layout: "admin",
    data() {
        return {
            formDemo: {
                user: '',
                region: '',
                date1: ''
            },
            tableData: [],
            currentPage: 4
        }
    },
    async asyncData () {
        let { data } = await axios.get(`/api/select`)
        return { tableData: data }
    },
    methods: {
        onSubmit() {
            console.log(this.formDemo.user);
            this.$notify({
                title: '成功',
                message: '查询成功！',
                type: 'success'
            });
        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.tbl.toggleRowSelection(row);
            });
            } else {
                this.$refs.tbl.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            this.$notify({
                title: '成功',
                message: '选中的有：'+val.length + '个',
                type: 'success'
            });
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleCurrentChange(val) {
            this.$notify({
                title: '成功',
                message: `当前页: ${val}`,
                type: 'success'
            });
        }
    }
}
</script>
