<template>
  <div id="app">
    <the-header
     title="Symbol Dot CRM"
     :mainMenu="[
         {name: 'Контакты', href: '/contacts'},
         {name: 'Компании', href: '/companies'},
         {name: 'Воронки продаж', href: '/sales-funnels'},
         {name: 'О проекте', href: '/about'}
     ]"
     :authMenu="[
         {name: 'Вход', href: '/login', auth: false},
         {name: 'Регистрация', href: '/registration', auth: false},
         {name: 'Личный кабинет', href: '/profile', auth: true}
     ]"
    >
    </the-header>

    <router-view/>
  </div>
</template>

<script>
import TheHeader from "@/components/Layouts/TheHeader";

export default {
  name: "App",
  components: {TheHeader}
}
</script>

<style>
body {
  background: #e6f5ff;
}
.text {
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
}
.header {
  font-family: 'Russo One', sans-serif;
}
.background {
  background: #0099ff;
}
.preview-container {
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.form {
  background: #ccebff;
  padding: 10px;
}
.container {
  margin-top: 100px;
}
@media (max-width: 768px) {
  .container {
    margin-top: 10px;
  }
}
.checkbox-label {
  margin-left: 10px;
}
.page-link {
  cursor: pointer;
}
.delete-button {
  background: #ff0000;
  border: 0;
  padding: 8px;
  color: #ffffff;
}
</style>
