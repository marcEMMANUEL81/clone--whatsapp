<template>
  <nav class="bottom--nav">
    <div class="bottom--nav--el">
      <font-awesome-icon class="app--icon" icon="fa-solid fa-user-secret" />
      <router-link class="link" to="/">Home</router-link>
    </div>
    <div class="bottom--nav--el">
      <font-awesome-icon class="app--icon" icon="fa-solid fa-user-secret" />
      <router-link class="link" to="">call</router-link>
    </div>
    <div class="bottom--nav--el">
      <font-awesome-icon class="app--icon" icon="fa-solid fa-user-secret" />
      <router-link class="link" to="">camera</router-link>
    </div>
    <div class="bottom--nav--el">
      <font-awesome-icon class="app--icon" icon="fa-solid fa-user-secret" />
      <router-link class="link" to="/chat">chats</router-link>
    </div>
    <div class="bottom--nav--el">
      <font-awesome-icon class="app--icon" icon="fa-solid fa-user-secret" />
      <router-link class="link" to="">Settings</router-link>
    </div>
    <div class="bottom--nav--el">
      <font-awesome-icon class="app--icon" icon="fa-solid fa-user-secret" />
      <router-link class="link" to="/about">About</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>  

</script>

<style lang="scss">

@import url('https://fonts.cdnfonts.com/css/poppins');

*
{
  padding: 0;
  margin: 0;
  box-sizing: borderbox;
}

.app--icon
{
  color: #d5d5d5;
}

a
{
  text-decoration: none;
  font-size: 13px;
}

.link
{
  color: rgb(171, 171, 171) !important;
  font-weight: 500;
  margin-top: 7px;
}

.link:hover
{
  color: rgb(37, 117, 196) !important;
}
.bottom--nav--el:active
{
  color: rgb(37, 117, 196) !important;
}

router-link{
  text-decoration: none;
}

.bottom--nav--el
{
  display: flex;
  flex-direction: column;
}

.bottom--nav--el:active
{
  color: rgb(37, 117, 196);
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.bottom--nav
{
  position: fixed;
  padding: 20px 10px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgb(244, 244, 244);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
