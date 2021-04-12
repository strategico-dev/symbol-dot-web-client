<template>
  <div>
    <form @submit.prevent="submit" class="form preview-container">
      <div>
        <h3 class="header text-center">Регистрация</h3>
      </div>
      <div class="form-group">
        <input
            v-model="formData.name"
            type="text"
            class="form-control"
            placeholder="Введите ваше имя"
        >
      </div>
      <div class="form-group">
        <input
            v-model="formData.email"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Введите вашу почту"
        >
      </div>

      <div class="form-group">
        <input
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            placeholder="Придумайте пароль"
        >
        <small
            @mousedown="setShowPassword"
            @mouseup="setHidePassword"
            @mouseleave="setHidePassword"
            class="text show-password unselectable"
        >
          Показать пароль
        </small>
        <password
            v-model="formData.password"
            :strength-meter-only="true"
            :secureLength="8"
        />
      </div>
      <div class="form-group">
        <input
            v-model="formData.password_confirmation"
            type="password"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Повторите пароль"
        >
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Я принимаю пользовательское соглашение</label>
      </div>
      <div class="text-center">
        <loader></loader>
      </div>
      <div class="form-group text-center">
        <button type="submit" class="btn btn-primary">Регистрация</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Password from 'vue-password-strength-meter';
import Loader from "@/components/Misc/Loader";

export default {
  name: "Registration",
  data() {
    return {
      showPassword: false,
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: mapGetters(['userCreating', 'userAttemptCreate', 'firstError']),
  components: {Loader, Password},
  methods: {
    setShowPassword() {
      this.showPassword = true;
    },
    setHidePassword() {
      this.showPassword = false;
    },
    async submit() {

    }
  }
}
</script>

<style scoped>
.show-password {
  color: blue;
  cursor: pointer;
}
</style>