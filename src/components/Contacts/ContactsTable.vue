<template>
  <div>
    <div>
      <table-themes></table-themes>
    </div>
    <table class="table"
      :class="currentTheme"
    >
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ФИО</th>
        <th scope="col">Телефон</th>
        <th scope="col">Почта</th>
      </tr>
      </thead>
      <tbody>
        <contact-table-item></contact-table-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import TableThemes from "@/components/Contacts/TableThemes";
import ContactTableItem from "@/components/Contacts/ContactTableItem";

export default {
name: "ContactsTable",
  components: {ContactTableItem, TableThemes},
  computed: mapGetters(['currentTheme'])
}
</script>

<style scoped>
.table {
  margin-top: 10px;
}
</style>