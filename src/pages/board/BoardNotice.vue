<template>
  <div class="main-content">
    <div class="search-filter">
      <input type="text" placeholder="등록일 기준" class="input-field" />
      <select class="input-field">
        <option v-for="option in searchOptions" :key="option">{{ option }}</option>
      </select>
      <input type="text" placeholder="검색어를 입력해주세요" class="input-field" />
      <button class="search-button" @click="searchNotices">🔍</button>
    </div>

    <div class="total-count">전체 글 <b>{{ totalCount }}</b></div>
    <table class="data-table">
      <thead>
      <tr>
        <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in paginatedItems" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.views }}</td>
      </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="previousPage" :disabled="page <= 1"> < </button>
      <span class="pl-3 pr-3">{{ page }}</span>
      <button @click="nextPage" :disabled="page >= totalPages"> > </button>
    </div>
  </div>
</template>

<script>
import notice from "@/assets/notice.json";

export default {
  name: "BoardNotice",
  data() {
    return {
      searchOptions: ['제목', '작성자'],
      headers: [
        { text: 'ID', value: 'id' },
        { text: '제목', value: 'title' },
        { text: '작성자(ID)', value: 'author' },
        { text: '작성일', value: 'date' },
        { text: '조회수', value: 'views' },
      ],
      items: [],
      page: 1,
      itemsPerPage: 5,
      totalPages: 0,
      totalCount: 0
    };
  },
  created() {
    this.getNoticeList();
  },
  watch: {
    items: 'calculateTotalPages',
  },
  computed: {
    paginatedItems() {
      const start = (this.page - 1) * this.itemsPerPage;
      return this.items.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
    calculateTotalPages() {
      this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    },
    getNoticeList() {
      this.items = notice; // JSON 데이터로 초기화
      this.totalCount = this.items.length; // 총 개수 설정
      this.calculateTotalPages(); // 페이지 수 계산
    },
    searchNotices() {
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
</style>
