<template>
  <div class="main-content">

    <!-- 검색 -->
    <div class="search-filter">
      <!-- 등록일 기준 -->
      <label for="searchDate" class="search-label">등록일 기준</label>
      <input type="date" v-model="searchDate" id="searchDate" class="input-field" />

      <!-- 검색 조건 -->
      <label for="searchOption" class="search-label">검색 조건</label>
      <select v-model="searchOption" id="searchOption" class="input-field search-select-box">
        <option v-for="option in searchOptions" :key="option.type" :value="option.type">{{ option.value }}</option>
      </select>

      <!-- 검색어 -->
      <input v-model="searchKeyword" id="searchKeyword" type="text" placeholder="검색어를 입력해주세요" class="input-field" />

      <!-- 검색 버튼 -->
      <div class="search-button mr-5" @click="searchNotices">
        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
      </div>

      <!-- 초기화 버튼 -->
      <div class="search-button" @click="initNotices">
        <i class="fa-solid fa-arrow-rotate-right fa-lg"></i>
      </div>
    </div>
    <!-- //검색 -->

    <!-- 테이블 -->
    <div class="total-count">전체 글 <b>{{ totalCount }}</b></div>
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredItems.length === 0">
          <td colspan="5" style="text-align: center;">검색결과가 없습니다</td>
        </tr>
        <tr v-for="item in paginatedItems" :key="item.id" v-else>
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.views }}</td>
        </tr>
      </tbody>
    </table>
    <!-- //테이블 -->

    <!-- 페이징 -->
    <div class="pagination" v-if="totalCount">
      <button @click="goToFirstPage" :disabled="page <= 1"><i class="fa-solid fa-angles-left"></i></button>
      <button @click="previousPage" :disabled="page <= 1"><i class="fa-solid fa-chevron-left"></i></button>
      <button
          v-for="pageNum in totalPagesArray"
          :key="pageNum"
          @click="goToPage(pageNum)"
          :disabled="page === pageNum"
          :class="{ active: page === pageNum }"
      >
        {{ pageNum }}
      </button>
      <button @click="nextPage" :disabled="page >= totalPages"><i class="fa-solid fa-chevron-right"></i></button>
      <button @click="goToLastPage" :disabled="page >= totalPages"><i class="fa-solid fa-angles-right"></i></button>
    </div>
    <!-- //페이징 -->

  </div>
</template>

<script>
import notice from "@/assets/data/notice.json";

export default {
  name: "BoardNotice",
  data() {
    return {
      searchDate: '',
      searchOption: 1,
      searchKeyword: '',
      searchOptions: [
        { type: 1, value: '제목' },
        { type: 2, value: '작성자' }
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: '제목', value: 'title' },
        { text: '작성자(ID)', value: 'author' },
        { text: '작성일', value: 'date' },
        { text: '조회수', value: 'views' },
      ],
      items: [],
      filteredItems: [],
      page: 1,
      itemsPerPage: 5,
      totalPages: 0,
      totalCount: 0,
    };
  },
  created() {
    this.getNoticeList();
  },
  watch: {
  },
  computed: {
    paginatedItems() {
      const start = (this.page - 1) * this.itemsPerPage;
      return this.filteredItems.slice(start, start + this.itemsPerPage);
    },
    totalPagesArray() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  },
  methods: {
    previousPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
    goToFirstPage() {
      this.page = 1;
    },
    goToLastPage() {
      this.page = this.totalPages;
    },
    goToPage(pageNum) {
      this.page = pageNum;
    },
    calculateTotalPages() {
      this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    getNoticeList() {
      this.items = notice;
      this.filteredItems = this.items;
      this.totalCount = this.items.length;
      this.calculateTotalPages();
    },
    initNotices () {
      this.searchDate = '';
      this.searchOption = 1;
      this.searchKeyword = '';
      this.page = 1;
      this.getNoticeList();
    },
    searchNotices() {
      let filteredItems = this.items;

      // 날짜 필터링
      if (this.searchDate) {
        filteredItems = filteredItems.filter(item => item.date === this.searchDate);
      }

      // 키워드 필터링
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        filteredItems = filteredItems.filter(item => {
          if (this.searchOption === 1) {
            // 제목으로 필터링
            return item.title.toLowerCase().includes(keyword);
          } else if (this.searchOption === 2) {
            // 작성자로 필터링
            return item.author.toLowerCase().includes(keyword);
          }
          return false;
        });
      }

      this.filteredItems = filteredItems;
      this.totalCount = filteredItems.length;
      this.page = 1;
      this.calculateTotalPages();
    }
  },
}
</script>

<style scoped>
.main-content {
  padding: 20px;
  background-color: #ffffff;
}
.search-filter {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.input-field {
  margin-right: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 30px;
  font-size: 12px;
  box-sizing: border-box;
}
.search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
}
.data-table th, .data-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
.pagination {
  margin-top: 20px;
}
.total-count {
  text-align: left;
}
.pagination button,
.pagination span {
  margin: 0 5px;
}
label {
  padding-right: 10px;
}
.search-select-box {
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
}
</style>
