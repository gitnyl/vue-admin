<template>
  <div class="main-content">
    <div class="search-filter">
      <input type="text" placeholder="등록일 기준" class="input-field" />
      <select class="input-field">
        <option v-for="option in searchOptions" :key="option">{{ option }}</option>
      </select>
      <input type="text" placeholder="검색어를 입력해주세요" class="input-field" />
      <button class="search-button">🔍</button>
    </div>

    <table class="data-table">
      <thead>
      <tr>
        <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.views }}</td>
      </tr>
      </tbody>
    </table>

    <div class="pagination">
      <span>Page: {{ page }}</span>
      <button @click="page--" :disabled="page <= 1">Previous</button>
      <button @click="page++">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContentSection",
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
      items: [
        { id: 1, title: 'test', author: 'ruoghks', date: '2024-07-04', views: 5 },
        { id: 2, title: '팝업 공지 제목입니다.', author: '휴머스온', date: '2023-10-10', views: 38 },
        { id: 3, title: '공지사항 test', author: '휴머스온', date: '2023-09-26', views: 24 },
        { id: 4, title: '오늘의 공지', author: '휴머스온', date: '2023-10-04', views: 17 },
      ],
      page: 1
    }
  }
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
</style>
