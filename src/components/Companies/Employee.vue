<template>
  <div>
    <div class="row employee">
      <div class="col-lg-10">
        <router-link to="/contacts/1" class="header">John Doe - Developer (89834002495)</router-link>
      </div>
      <div class="col-lg-2">
        <div style="margin-left: 70px;">
          <button class="delete-button text">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employee"
}
</script>

<style scoped>
.employee {
  margin-bottom: 10px;
  border: 1px solid #0099ff;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background: #f2f2f2;
}
</style>