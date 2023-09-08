<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue"
import IconDelete from "@/components/icons/IconDelete.vue"
</script>

<template>
  <div class="catalog__filter">
    <Select/>
    <div class="catalog__filter-delete-box">
      <div class="catalog__filter-delete-label">
        Выбрано товаров: 2
      </div>
      <button class="delete-btn">
        <IconDelete/>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.catalog__filter-delete-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.catalog__filter-delete-label {
  margin-right: 10px;
  color: #3B414B;
  opacity: .5;
}

.delete-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  color: #0b4e67;
  border: 1px solid rgba(59, 65, 75, 0.5);
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;

  svg {
    transition: .3s;
    width: 20px;
  }
}

.delete-btn:hover svg {
  transform: scale(1.1,1.1);
}
</style>