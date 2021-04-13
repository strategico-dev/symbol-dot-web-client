<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <router-link to="/contacts">Вернуться ко всем контактам</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <h3 class="header">Контакт</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="name" class="text">Имя</label>
          <input
            value="Имя"
            id="name"
            class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="surname" class="text">Фамилия</label>
          <input
              value="Имя"
              id="surname"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="middle_name" class="text">Отчество</label>
          <input
              value="Имя"
              id="middle_name"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="email" class="text">Почта</label>
          <input
              value="Имя"
              id="email"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="phone" class="text">Телефон</label>
          <input
              value="Имя"
              id="phone"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="description" class="text">Описание</label>
          <textarea
              value="Описание"
              id="description"
              class="form-control"
          >

          </textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <loader></loader>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="alert alert-success">
          Данные изменены
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <button class="btn btn-primary">Изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Misc/Loader";

export default {
  name: "ContactDetail",
  components: {Loader}
}
</script>

<style scoped>
.container {
  margin-top: 10px;
  background: #fff;
  padding-bottom: 10px;
  -webkit-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
}
</style>