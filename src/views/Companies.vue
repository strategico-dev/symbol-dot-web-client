<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <company-search @search="search"></company-search>
      </div>
    </div>
    <div class="col-lg-12" style="margin-top: 10px;">
      <company-preview style="margin-bottom: 10px"></company-preview>
      <company-preview style="margin-bottom: 10px"></company-preview>
      <company-preview style="margin-bottom: 10px"></company-preview>
    </div>
    <div class="col-lg-12 text-center" style="margin-top: 10px;">
      <loader></loader>
    </div>
    <div class="row" style="margin-top: 10px;">
      <div class="col-lg-12">
        <pagination
          :current-page="1"
          :last-page="10"
          :page-delta="3"
        >
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Misc/Loader";
import Pagination from "@/components/Misc/Pagination";
import CompanySearch from "@/components/Forms/CompanySearch";
import CompanyPreview from "@/components/Companies/CompanyPreview";

export default {
  name: "Companies",
  components: {Loader, CompanyPreview, Pagination, CompanySearch},
  methods: {
    search(filters) {
      console.log(filters);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10px;
}
</style>