<template>
    <div class="wrapper">
        <div class="container">
            <p class="text">all rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.text{
    font-size: 13px;
    line-height: 16px;
    color: #000000;
}
.wrapper{
    background: #FAFAFA;
    box-shadow: 0 1px 0 rgba(17, 17, 17, 0.1);
    padding: 30px;
    margin-top: auto;
}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>