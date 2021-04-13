<template>
  <div class="employees">
    <employee></employee>
    <employee></employee>
    <employee></employee>
    <employee></employee>
    <employee></employee>
  </div>
</template>

<script>
import Employee from "@/components/Companies/Employee";
export default {
  name: "Employees",
  components: {Employee}
}
</script>

<style scoped>
.employees {
  max-height: 200px;
  overflow-y: scroll;
  background: #e6f5ff;
  border: 1px solid #000;
}
.row {
  margin-bottom: 10px;
}
</style>