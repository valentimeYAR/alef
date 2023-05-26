<template>
  <div class="wrapper">
      <div class="container">
          <div class="logo">
              <a href="/">
                  <img src="/logo.svg" alt="Logo">
              </a>
          </div>
          <div class="menu">
              <a href="/" class="menuItem">Форма</a>
              <router-link to="/preview" class="menuItem">Превью</router-link>
          </div>
          <div class="hideBlock">
              <a href="/" class="menuItem">Форма</a>
              <a href="/" class="menuItem">Превью</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped lang="scss">
.wrapper{
  border-bottom: 2px solid rgba(50, 48, 48, 0.2);
  padding: 22px;
}
.container {
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu{
  display: flex;
  align-items: center;
  gap: 0 24px;
}
.menuItem{
    font-size: 16px;
    line-height: 24px;
    color: rgba(17, 17, 17, 0.48);
    &:hover{
        color: dodgerblue;
    }
}
.hideBlock{
  visibility: hidden;
}
</style>