<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.padding {
  padding: 0 20px;
}

@media screen and (min-width: 1200px) {
  .padding {
    padding: 0 80px;
  }
}
</style>
