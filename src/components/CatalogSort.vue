<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue"

</script>

<template>
  <div class="catalog-sort">
    <div class="catalog-sort__label">Сортировать:</div>
    <ul class="catalog-sort__list">
      <li class="catalog-sort__item active">По дате добавления</li>
      <li class="catalog-sort__item ">От дешевых к дорогим</li>
      <li class="catalog-sort__item">От дорогих к дешевым</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>

.catalog-sort {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.catalog-sort__label {
  font-size: 16px;
}

.catalog-sort__list {
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  gap: 30px;
}

.catalog-sort__item {
  padding: 0;
  opacity: .5;
  border-bottom: 1px dotted;
  cursor: pointer;
}

.catalog-sort__item:hover {
  opacity: 1;
  color: #5473a8;
}

.catalog-sort__item.active {
  opacity: 1;
  color: #5473a8;
}

</style>