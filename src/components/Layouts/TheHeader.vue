<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light background">
      <router-link style="color: #fff;" class="navbar-brand header" to="/">
        {{title}}
      </router-link>

      <button @click.prevent="toggleMenu" class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div v-show="showMainMenu" class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li
              v-for="item in mainMenu"
              class="nav-item text item"
              :class="{active: isActive(item)}"
          >
            <router-link class="nav-link" :to="item.href">{{item.name}}</router-link>
          </li>
        </ul>

      </div>

      <div v-show="showMainMenu" class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li
              v-for="item in finallyAuthMenu"
              class="nav-item text item"
              :class="{active: isActive(item)}"
          >
            <router-link class="nav-link" :to="item.href">{{item.name}}</router-link>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Device from "@/helpers/device";

export default {
  name: "TheHeader",
  data() {
    return {
      showMainMenu: true
    }
  },
  props: {
    title: String,
    mainMenu: Array,
    authMenu: Array
  },
  computed: {
    ...mapGetters(['isAuth']),
    finallyAuthMenu() {
      return this.authMenu.filter(item => {
        return item.auth === this.isAuth
      });
    }
  },
  methods: {
    isActive(menuItem) {
      return this.$route.path === menuItem.href;
    },
    toggleMenu() {
      this.showMainMenu = !this.showMainMenu;
    }
  },
  mounted() {
    this.showMainMenu = !Device.isMobile();
  }
}
</script>

<style scoped>
.item {
  font-weight: bold;
  background: #ccebff;
  margin-left: 3px;
  border-radius: 10px;
  text-align: left;
}
@media (max-width: 768px) {
  .item {
    margin-top: 10px;
  }
  .nav-link {
    margin-left: 10px;
  }
}
</style>