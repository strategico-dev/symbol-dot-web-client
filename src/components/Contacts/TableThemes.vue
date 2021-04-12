<template>
  <div>
    <div>
      |
      <span
          v-for="theme in themes"
          @click="changeTheme(theme)"
          class="theme text"
      >
        <span :class="{'theme-active': theme.active}">{{theme.name}}</span> |
      </span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TableThemes",
  computed: mapGetters(['themes']),
  methods: {
    changeTheme(theme) {
      this.$store.commit('setCurrentTheme', theme.className);
    }
  }
}
</script>

<style scoped>
.theme {
  color: blue;
  cursor: pointer;
}
.theme-active {
  background: #ff7700;
  color: #fff;
}
</style>