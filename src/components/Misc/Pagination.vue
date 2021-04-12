<template>
  <div class="unselectable">
      <nav aria-label="...">
      <ul class="pagination">
        <li
            v-if="startPage !== paginationPage"
            style="margin-right: 10px;"
            class="page-item"
        >
          <a @click="changePage(startPage)" class="page-link" href="#">{{startPage}}</a>
        </li>
        <li
            class="page-item"
            :class="{disabled: startPage === paginationPage}"
        >
          <a @click="prevPage" class="page-link" tabindex="-1">Назад</a>
        </li>
        <li
            v-for="page in pages"
            class="page-item"
            :class="{active: page === paginationPage}"
        >
          <a
              @click="changePage(page)"
              class="page-link"
          >
            {{page}}
          </a>
        </li>
        <li
            class="page-item"
            :class="{disabled: lastPage === paginationPage}"
        >
          <a @click="nextPage" class="page-link">Вперед</a>
        </li>
        <li
            @click="changePage(lastPage)"
            v-if="lastPage !== paginationPage"
            style="margin-left: 10px;"
            class="page-item">
          <a class="page-link">{{lastPage}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      paginationPage: this.currentPage
    }
  },
  props: {
    currentPage: Number,
    startPage: {
      type: Number,
      default: 1
    },
    lastPage: Number,
    pageDelta: Number
  },
  computed: {
    pages() {
      const result = [this.paginationPage];

      for(let i = 1; i <= this.pageDelta; i++) {
        if(this.paginationPage - i >= this.startPage) {
          result.push(this.paginationPage - i);
        }
        if(this.paginationPage + i <= this.lastPage) {
          result.push(this.paginationPage + i);
        }
      }

      return result.sort((a, b) => a - b);
    }
  },
  methods: {
    prevPage() {
      if(this.paginationPage > this.startPage) {
        this.changePage(this.paginationPage - 1);
      }
    },
    nextPage() {
      if(this.paginationPage < this.lastPage) {
        this.changePage(this.paginationPage + 1);
      }
    },
    changePage(page) {
      this.paginationPage = page;
      this.$router.push({query: {page}});

      this.$emit('changePage', page);
    }
  }
}
</script>

<style scoped>

</style>