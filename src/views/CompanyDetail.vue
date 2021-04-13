<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <router-link to="/companies">Вернуться ко всем компаниям</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <h3 class="header">Компания</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="name" class="text">Наименование компании</label>
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
          <label for="ogrn" class="text">ОГРН</label>
          <input
              value="Имя"
              id="ogrn"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="inn" class="text">ИНН</label>
          <input
              value="Имя"
              id="inn"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="kpp" class="text">КПП</label>
          <input
              value="Имя"
              id="kpp"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="address" class="text">Юридический адрес</label>
          <input
              value="Имя"
              id="address"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label for="authorized_capital" class="text">Уставной капитал</label>
          <input
              value="Имя"
              id="authorized_capital"
              class="form-control text"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <h3 class="header">Работники</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 employees">
        <employees></employees>
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
import ContactsTable from "@/components/Contacts/ContactsTable";
import Employees from "@/components/Companies/Employees";

export default {
  name: "CompanyDetail",
  components: {Employees, ContactsTable, Loader}
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
.employees {
  margin: 10px;
  padding: 10px;
}
</style>