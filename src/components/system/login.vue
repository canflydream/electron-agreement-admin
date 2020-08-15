<template>
    <div>
        <Input :value="users.loginId"></Input><br><br>
        <Input :value="users.privateKey"></Input><br><br>
        <Button type="primary" @click="loginCheck">login</Button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                users: {
                    loginId: 'XvAzNR',
                    privateKey: '8fb98c41-6a9c-444f-b79d-3d9760c349b9'
                }
            }
        },
        methods: {
            loginCheck() {
                this.$http.post('/admin/login/check', this.users).then(r => {
                    window.localStorage.setItem("token", r.data)
                    if (r.data) {
                        this.$router.push('/element-data-add')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>