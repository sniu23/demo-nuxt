<template>
    <section>
        <x-search :frmField="frmField" :frmData="frmData" frmLblWidth="0px">
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="multiShow">批量</el-button>
        </x-search>

        <x-table :tblData="tblData" :tblColumn="tblColumn" :tblChkbox="tblChkbox" :tblMultiSel.sync="tblMultiSel"
            :pgCurrent="pgCurrent" :pgSize="pgSize" :dtTotal="dtTotal" @pageChanged="currPageShow" v-loading.body="loading">
            <el-table-column fixed="right" label="操作" width="70">
                <template scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tblData)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </x-table>
    </section>
</template>

<script>
import axios from 'axios'

import xSearch from '~/components/xSearch.vue'
import xTable from '~/components/xTablePG.vue'

export default {
    layout: "admin",
    components: {
        xSearch,
        xTable
    },
    data() {
        return {
            frmData: {
                user: '',        
                user1: '',             
                region: '',
                date1: ''       
            },
            frmField:[
                {
                    name: 'user',
                    label: '姓名',
                    extend: 'input'
                },
                {
                    name: 'user1',
                    label: '我的名',
                    extend: 'input'
                },
                {
                    name: 'region',
                    label: '范围',
                    extend: 'select',
                    source: [
                        {label:'a', value:'1'},
                        {label:'b', value:'2'},
                        {label:'c', value:'3'}
                    ]
                },
                {
                    name: 'date1',
                    label: '日期',
                    extend: 'date'
                }
            ],
            tblData: [
                {
                    date: '2017-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2017-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2017-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }
            ],
            tblColumn: [
                {
                    name: 'date',
                    label: '日期',
                    width: '180',
                    overflow: false
                },
                {
                    name: 'name',
                    label: '姓名',
                    width: '180',
                    overflow: false
                },
                {
                    name: 'address',
                    label: '地址',
                    width: '',
                    overflow: true
                }
            ],
            tblMultiSel: [],
            tblChkbox: true,
            pgCurrent: 1,
            pgSize:20,
            dtTotal: 400,
            loading: false
        }
    },
    // async asyncData () {
    //     let { data } = await axios.get(`/api/select`)
    //     return { tblData: data }
    // },
    methods: {
        onSubmit() {
            let nnn = JSON.stringify(this.frmData);
            console.log(nnn)
            this.$notify({
                title: '成功',
                message: nnn,
                type: 'success'
            });
        },
        async currPageShow(val) {
            this.loading = true;
            this.tblMultiSel = [];
            this.pgCurrent = val;
            let { data } = await axios.get(`/api/select`);
            this.tblData = data;
            this.loading = false;
            this.$notify({
                title: '成功',
                message: val,
                type: 'success'
            });
        },
        multiShow() {
            let nnn = JSON.stringify(this.tblMultiSel);
            console.log(nnn)
            this.$notify({
                title: '成功',
                message: nnn,
                type: 'success'
            });
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    }
}
</script>