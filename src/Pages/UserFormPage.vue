<template>
    <div class="container">
        <div class="userInfo">
            <h2 class="title">Персональные данные</h2>
            <div class="inputContainer">
                <input
                    type="text"
                    class="inputField"
                    v-model="user.name"
                >
                <label class="input-label">Имя</label>
            </div>
            <div class="inputContainer">
                <input
                    type="text"
                    class="inputField"
                    v-model.number="user.age"
                >
                <label class="input-label">Возраст</label>
            </div>
        </div>
        <div class="childrenInfo">
            <div class="top">
                <h2 class="title">Дети (макс. 5)</h2>
                <button @click="addChild" class="addChildren" v-show="children.length < 5">
                    <img src="/plus.svg" alt="Add">
                    Добавить ребёнка
                </button>
            </div>
            <div v-for="(child, index) in children" :key="index" class="childrenInputs">
                <div class="inputContainer">
                    <input
                        type="text"
                        v-model="child.name"
                        class="inputField"
                    >
                    <label class="input-label">Имя</label>
                </div>
                <div class="inputContainer" style="width: 100%">
                    <input
                        v-model.number="child.age"
                        type="text"
                        class="inputField"
                    >
                    <label class="input-label">Возраст</label>
                </div>
                <button @click="removeChild(index)" class="removeChild">Удалить</button>
            </div>
            <button @click="saveUser" class="saveUser" :disabled="children.length === 0">Сохранить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserForm",
    data() {
        return {
            user: {
                name: '',
                age: null
            },
            children: []
        }
    },
    methods: {
        addChild() {
            if (this.children.length < 5) {
                this.children.push({name: '', age: null});
            }
        },
        removeChild(index) {
            this.children.splice(index, 1);
        },
        saveUser() {
            const userData = {
                user: this.user,
                children: this.children
            };
            this.$store.commit('saveUserData', userData)
            this.user = {}
            this.children = []
            this.$router.push('/preview')
        },
    }
}
</script>

<style scoped>
.container {
    width: 616px;
    margin: 30px auto;
}

.userInfo, .childrenInfo {
    margin-bottom: 33px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.inputField{
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    line-height: 24px;
    padding: 26px 16px 6px 16px;
    width: 100%;
}
.input-label{
    position: absolute;
    top: 10px;
    left: 16px;
    pointer-events: none;
    transition: top 0.2s ease;
}
.inputContainer{
    position: relative;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.addChildren {
    line-height: 24px;
    color: #01A7FD;
    padding: 10px 20px;
    border: 2px solid #01A7FD;
    border-radius: 100px;
    background-color: transparent;
}

.title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
.childrenInputs{
    display: flex;
    gap: 0 20px;
    align-items: center;
}
.removeChild{
    height: 100%;
    line-height: 24px;
    color: #01A7FD;
    background-color: transparent;
}
.saveUser{
    align-self: flex-start;
    padding: 10px 20px;
    background: #01A7FD;
    border-radius: 100px;

    line-height: 24px;
    color: #FFFFFF;
    &:disabled{
        background-color: gray;
    }
}
</style>