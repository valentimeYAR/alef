<template>
    <div class="container">
        <h2 v-if="userData === null" class="empty">Список пуст :(</h2>
        <div class="user" v-if="userData !== null">
            <h2 class="title">Персональные данные</h2>
            <p class="userInfo">{{ userData.user.name }}, {{ userData.user.age }} лет</p>
        </div>
        <h2 class="title" v-if="userData !== null">Дети</h2>
        <div class="children" v-for="(child, index) in userData.children" :key="index" v-if="userData !== null">
            <div class="childrenInfo">
                <p>{{ child.name }}, {{ child.age }} лет</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PreviewPage",
    computed: {
        userData() {
            return this.$store.state.userData;
        },
    },
}
</script>

<style scoped lang="scss">
.container {
    width: 200px;
    margin: 30px auto;
}

.title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
}

.userInfo {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
}
.user{
    margin-bottom: 60px;
}
.childrenInfo{
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    p{
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        padding: 10px 20px;
        background: #F1F1F1;
        border-radius: 5px;
    }
}
.empty{
    font-size: 32px;
    font-weight: 700;
    width: 400px;
}
</style>