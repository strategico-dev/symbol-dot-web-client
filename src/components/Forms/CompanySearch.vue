<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <input v-model="searchFilters.query" class="form-control" placeholder="Поиск">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-check form-check-inline">
          <input v-model="searchFilters.name" class="form-check-input" type="checkbox" id="inlineCheckbox1">
          <label class="form-check-label text" for="inlineCheckbox1">Искать по наименованию</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="searchFilters.inn" class="form-check-input" type="checkbox" id="inlineCheckbox2">
          <label class="form-check-label text" for="inlineCheckbox2">Искать по ИНН</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="searchFilters.ogrn" class="form-check-input" type="checkbox" id="inlineCheckbox3">
          <label class="form-check-label text" for="inlineCheckbox3">Искать по ОГРН</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <button @click="search" class="btn search-button header">Найдется все!</button>
      </div>
    </div>
  </div>
</template>

<script>
import TypeConverter from "@/helpers/type-converter";

export default {
  name: "CompanySearch",
  data() {
    return {
      searchFilters: {
        query: '',
        name: true,
        inn: true,
        ogrn: true
      }
    }
  },
  methods: {
    search() {
      this.$router.push({query: {...this.$route.query, ...this.searchFilters}});
      this.$emit('search', this.searchFilters);
    }
  },
  mounted() {
    let queries = {};
    Object.assign(queries, this.$route.query);
    queries = TypeConverter.convertBooleans(queries);

    this.searchFilters = {...this.searchFilters, ...queries};
  }
}
</script>

<style scoped>
.container {
  background: #f2f2f2;
  padding: 10px;
  -webkit-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  border-radius: 10px;
}
.search-button {
  background: #0099ff;
  color: #fff;
  -webkit-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  border-radius: 10px;
}
</style>