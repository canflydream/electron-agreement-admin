<template>
    <div>
        <Row>
            <Col span="5">
                <Input v-model="title" placeholder="模板标题"></Input>
            </Col>
            <Col span="5">
                <Button style="margin-left: 10px" @click="getData" type="primary">保存模板</Button>&nbsp;
                <Button style="margin-left: 10px" @click="showTl" type="primary">预览模板</Button>
                <Button style="margin-left: 10px" @click="showTlForData" type="primary">填充数据预览</Button>
            </Col>
        </Row>
        <br>
        <textarea cols="80" id="editor" name="editor" rows="10">This is the content!</textarea>
        <Modal
                v-model="modal"
                title="选择元素据"
                @on-ok="ok"
                @on-cancel="cancel">
            <CheckboxGroup v-model="boxValue">
                <Checkbox :label="v.field" v-for="v in boxs">
                    <span>{{v.fieldDesc}}</span>
                </Checkbox>
            </CheckboxGroup>
        </Modal>

        <Modal
                v-model="preview"
                title="填写数据"
                @on-ok="dataShow">
            <Input v-model="jsonData[v.field]" v-for="v in boxs">
                <span slot="prepend">{{v.fieldDesc}}</span>
            </Input>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "tl-add",
        data() {
            return {
                preview: false,
                boxs: [],
                boxValue: [],
                modal: false,
                title: 'aaaa',
                jsonData: {}
            }
        },
        methods: {
            cancel() {
                this.modal = false;
            },
            ok() {
                let h = ''
                this.boxValue.forEach((r, i) => {
                    h += ('{{' + r + '}}')
                })
                CKEDITOR.instances.editor.insertHtml(h)
                this.modal = false;
            },
            showData(r) {
                this.modal = true;
            },
            showTl() {
                let data = CKEDITOR.instances.editor.getData()
                this.$http.post('/admin/tl/preview', {title: this.title, content: data}, {
                    headers: {
                        token: window.localStorage.getItem("token")
                    }
                }).then(r => {
                    window.open('http://localhost:8888/agreement/'+r.data+'.html')
                })
            },
            showTlForData() {
                this.preview = true;

            },
            dataShow() {
                let data = CKEDITOR.instances.editor.getData()
                this.$http.post('/admin/tl/preview/data', {title: this.title, content: data, jsonData: this.jsonData}, {
                    headers: {
                        token: window.localStorage.getItem("token")
                    }
                }).then(r => {
                    window.open('http://localhost:8888/agreement/'+r.data+'.html')
                })
            },
            getData() {
                let data = CKEDITOR.instances.editor.getData()

                this.$http.post('/admin/tl/save', {title: this.title, content: data}, {
                    headers: {
                        token: window.localStorage.getItem("token")
                    }
                }).then(r => {
                    console.log(r)
                })
            },
            initElementDatas() {
                this.$http.get('/admin/data/get', {
                    headers: {
                        token: window.localStorage.getItem("token")
                    }
                }).then(r => {
                    this.boxs = r.data
                })
            }
        },
        mounted() {
            CKEDITOR.replace("editor", {
                toolbar: 'MyBasic',
                height: 600,
                width: '100%'
            });

            CKEDITOR.instances.editor.setData('')
            this.initElementDatas();
            window['showData'] = (r) => {
                this.showData(r);
            }
        }
    }
</script>

<style scoped>

</style>