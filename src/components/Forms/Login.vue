<template>
  <div>
    <form class="form preview-container">
      <div>
        <h3 class="header text-center">Вход</h3>
      </div>
      <div class="form-group">
        <input
            v-model="formData.email"
            type="email"
            class="form-control"
            placeholder="Почта"
        >
      </div>
      <div class="form-group">
        <input
            v-model="formData.password"
            type="email"
            class="form-control"
            placeholder="Пароль"
        >
      </div>
      <div class="form-group text-center">
        <router-link to="/password-reset">Забыли пароль?</router-link>
      </div>
      <div class="text-center">
        <loader></loader>
      </div>
      <div class="form-group text-center">
        <button type="submit" class="btn btn-primary">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import Loader from "@/components/Misc/Loader";
export default {
  name: "Login",
  components: {Loader},
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>