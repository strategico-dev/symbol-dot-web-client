<template>
  <div>
    <div class="company-preview">
      <div>
        <h3 class="header">
          <router-link to="/companies/1">Наименование</router-link>
        </h3>
      </div>
      <div>
        <span class="text">ОГРН: 12345678</span>
      </div>
      <div>
        <span class="text">ИНН: 12345678</span>
      </div>
      <div>
        <span class="text">КПП: 12345678</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyPreview"
}
</script>

<style scoped>
.company-preview {
  background: #fff;
  padding: 10px;
  -webkit-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
}
</style>