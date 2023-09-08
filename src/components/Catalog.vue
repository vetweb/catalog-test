<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import { ref, computed, watch, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue"
import Select from "@/components/Select.vue"
import CatalogList from "@/components/CatalogList.vue"
import Filter from "@/components/Filter.vue";
import CatalogSort from "@/components/CatalogSort.vue";

</script>

<template>
  <div class="catalog">
    <CatalogSort/>
    <Select/>
    <Filter/>
    <CatalogList/>
  </div>
</template>
<style lang="scss" scoped>
.catalog {
  padding: 40px;
  background: #fff;
}
.checkbox__text {
  margin-left: 5px;
}

.catalog {
  width: 100%;
}

</style>