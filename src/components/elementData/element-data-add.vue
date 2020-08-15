<template>
    <div>
        <Button @click="addRow" type="primary">add row</Button>&nbsp;
        <Button @click="deleteRow" type="error">delete row</Button>
        &nbsp;
        <Button @click="saveRows" type="primary">save</Button>
        <br> <br>
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                results: [],
                columns1: [
                    {
                        title: '元素据字段',
                        key: 'field',
                        render: (h, p) => {
                            return h('Input', {
                                props: {
                                    value: p.row.field
                                },
                                on: {
                                    "on-change": (e) => {
                                        this.data1[p.index].field = e.target.value
                                    }
                                }
                            })
                        }
                    },
                    {
                        title: '字段描述',
                        key: 'fieldDesc',
                        render: (h, p) => {
                            return h('Input', {
                                props: {
                                    value: p.row.fieldDesc
                                },
                                on: {
                                    "on-change": (e) => {
                                        this.data1[p.index].fieldDesc = e.target.value
                                    }
                                }
                            })
                        }
                    }
                ],
                data1: []
            }
        },
        methods: {
            addRow() {
                this.data1.push({})
            },
            deleteRow() {
                this.data1.pop()
            },
            saveRows() {
                this.$http.post("/admin/data/save", this.data1,{
                    headers: {
                        token: window.localStorage.getItem("token")
                    }
                }).then(r => {
                    console.log(r)
                })
            },
            initData() {
                this.$http.get("/admin/data/get", {
                    headers: {
                        token: window.localStorage.getItem("token")
                    }
                }).then(r => {
                    this.data1 = r.data
                    console.log(this.data1)
                })
            }
        },
        mounted() {
            this.initData();
        }
    }
</script>

<style scoped>

</style>
