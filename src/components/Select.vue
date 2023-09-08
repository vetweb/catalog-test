<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue"
import IconArrowDown from "@/components/icons/IconArrowDown.vue"

const isShowOptions = ref(false)
const currentOption = ref({ value: "", name: "" })
const optionElements = ref()

const toggleOptions= () => {
  isShowOptions.value = !isShowOptions.value
  focusOnFirstOptionElement()
}

const focusOnFirstOptionElement = () => {
  setTimeout(() => {
    let first
    if ((first = optionElements.value) === null || first === void 0 ? void 0 : first.length)
      optionElements.value[0].focus()
  }, 100)
}

</script>

<template>
  <div @click.stop class="select">
    <div class="select__all-options">
      <input type="checkbox">
    </div>
    <div class="select__item">
      <div
          @click="toggleOptions"
          :class="['select__current', { 'select__current-active': isShowOptions }]"
          tabindex="0"
      >
        <div :class="{ 'select__current-option': currentOption.name }">Все товары</div>
        <IconArrowDown class="select__current-arrow"/>
      </div>
      <div class="select__dropdown-block" v-show="isShowOptions">
        <div class="select__dropdown-item select__dropdown-item--all">Все товары</div>
        <div class="select__dropdown-group">
          <div class="select__dropdown-group-title">Светильники</div>
          <div class="select__dropdown-item active">Люстры (4)</div>
          <div class="select__dropdown-item">Люстры (4)</div>
        </div>
        <div class="select__dropdown-group">
          <div class="select__dropdown-group-title">Подборки</div>
          <div class="select__dropdown-item">Лофт стиль (4)</div>
          <div class="select__dropdown-item">Лофт стиль (4)</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  min-width: 200px;
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(59, 65, 75, 0.5);
  border-radius: 5px;
  background: #ffffff;
}

.select__all-options {
  display: flex;
  align-items: center;
  justify-content: center;
  flex:0 0 auto;
  height: 100%;
  width: 50px;
  margin-right: 10px;
  cursor: pointer;
  border-right: 1px solid rgba(59, 65, 75, 0.5);
}

.select__current-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  width: 20px;
  height: 16px;
  margin-top: -8px;
}

.select__item {
  width: 100%;
}

.select__current {
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.select__dropdown-block {
  padding: 20px;
  position: absolute;
  left: 0;
  top: 55px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 28px rgba(59, 65, 75, 0.35);
}

.select__dropdown-group {
  margin-bottom: 30px;
}

.select__dropdown-group-title {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  color: #0b4e67;
}

.select__dropdown-item {
  margin-bottom: 10px;
  cursor: pointer;
}

.select__dropdown-item:last-child {
  margin-bottom: 0;
}

.select__dropdown-item.active,
.select__dropdown-item:hover {
  color: #5473a8;
}

.select__dropdown-item--all {
  color: #5473a8;
}
</style>