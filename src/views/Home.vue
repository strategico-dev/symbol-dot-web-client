<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <about-preview></about-preview>
      </div>
      <div class="col-lg-6 registration-container">
        <registration></registration>
      </div>
    </div>
  </div>
</template>

<script>
import AboutPreview from "@/components/Misc/AboutPreview";
import Registration from "@/components/Forms/Registration";

export default {
  name: 'Home',
  components: {AboutPreview, Registration}
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
@media (max-width: 768px) {
  .container {
    margin-top: 10px;
  }
  .registration-container {
    margin: 30px 0 30px 0;
  }
}
</style>