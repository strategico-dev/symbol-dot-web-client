<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-sm-5">
        <input
            class="form-control text"
            placeholder="Поиск по ФИО"
        >
      </div>
      <div class="col-lg-2 col-sm-7">
        <button class="btn btn-primary search-button header">Поиск</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSearch"
}
</script>

<style scoped>
@media (max-width: 768px) {
  .search-button {
    margin-top: 10px;
  }
}
</style>