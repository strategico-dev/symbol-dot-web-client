<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <contact-search></contact-search>
      </div>
    </div>
    <div class="row" style="margin-top: 10px;">
      <div class="col-lg-12">
        <div>
          <contacts-table></contacts-table>
        </div>
        <div class="text-center">
          <loader></loader>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 10px;">
      <pagination
        @changePage="fetch"
        :page-delta="3"
        :current-page="1"
        :last-page="10"
      >
      </pagination>
    </div>
  </div>
</template>

<script>
import ContactSearch from "@/components/Forms/ContactSearch";
import ContactsTable from "@/components/Contacts/ContactsTable";
import Pagination from "@/components/Misc/Pagination";
import Loader from "@/components/Misc/Loader";

export default {
  name: "Contacts",
  components: {Loader, Pagination, ContactsTable, ContactSearch},
  methods: {
    fetch(page = 1) {
      console.log(page);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10px;
}
</style>