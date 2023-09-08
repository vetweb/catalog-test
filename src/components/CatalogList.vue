<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue"
import IconBattery from '@/components/icons/IconBattery.vue'
</script>

<template>
  <div class="catalog__list">
    <div class="catalog-item">
      <div class="catalog-item__content">
        <div class="catalog-item__change">
          <label class="checkbox">
            <input type="checkbox" class="checkbox__input">
            <span class="checkbox__fake"></span>
            <span class="checkbox__text">Выбрать</span>
          </label>
        </div>
        <div class="catalog-item__img-box">
          <img class="catalog-item__img" src="/src/assets/images/cat1.png" alt="">
        </div>
        <h3 class="catalog-item__title">Люстра</h3>
        <div class="catalog-item__availability">
          <i class="catalog-item__availability-icon">
            <IconBattery/>
          </i>
          <span class="catalog-item__availability-text">В наличии</span>
        </div>
        <ul class="catalog-item__chars">
          <li class="catalog-item__char">Код: BD-89999</li>
          <li class="catalog-item__char">Бренд: Garda</li>
        </ul>
        <div class="catalog-item__price">
          <span class="catalog-item__price-count">30 200</span>
          <span class="catalog-item__price-type">руб</span>
        </div>
      </div>
    </div>
    <div class="catalog-item">
      <div class="catalog-item__content">
        <div class="catalog-item__change">
          <label class="checkbox">
            <input type="checkbox" class="checkbox__input">
            <span class="checkbox__fake"></span>
            <span class="checkbox__text">Выбрать</span>
          </label>
        </div>
        <div class="catalog-item__img-box">
          <img class="catalog-item__img" src="/src/assets/images/cat1.png" alt="">
        </div>
        <h3 class="catalog-item__title">Люстра</h3>
        <div class="catalog-item__availability">
          <i class="catalog-item__availability-icon">
            <IconBattery/>
          </i>
          <span class="catalog-item__availability-text">В наличии</span>
        </div>
        <ul class="catalog-item__chars">
          <li class="catalog-item__char">Код: BD-89999</li>
          <li class="catalog-item__char">Бренд: Garda</li>
        </ul>
        <div class="catalog-item__price">
          <span class="catalog-item__price-count">30 200</span>
          <span class="catalog-item__price-type">руб</span>
        </div>
      </div>
    </div>
    <div class="catalog-item">
      <div class="catalog-item__content">
        <div class="catalog-item__change">
          <label class="checkbox">
            <input type="checkbox" class="checkbox__input">
            <span class="checkbox__fake"></span>
            <span class="checkbox__text">Выбрать</span>
          </label>
        </div>
        <div class="catalog-item__img-box">
          <img class="catalog-item__img" src="/src/assets/images/cat1.png" alt="">
        </div>
        <h3 class="catalog-item__title">Люстра</h3>
        <div class="catalog-item__availability">
          <i class="catalog-item__availability-icon">
            <IconBattery/>
          </i>
          <span class="catalog-item__availability-text">В наличии</span>
        </div>
        <ul class="catalog-item__chars">
          <li class="catalog-item__char">Код: BD-89999</li>
          <li class="catalog-item__char">Бренд: Garda</li>
        </ul>
        <div class="catalog-item__price">
          <span class="catalog-item__price-count">30 200</span>
          <span class="catalog-item__price-type">руб</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.catalog__list {
  display: grid;
  align-items: stretch;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  border-left: 1px solid rgba(59, 65, 75, 0.5);
}

.catalog-item {
  position: relative;
  transition: .3s;
  color: #3B414B;
  z-index: 0;
}

.catalog-item:hover {
  transform: scale(1.03,1.03) translateY(5px);
  box-shadow: 0 0 28px rgba(59, 65, 75, 0.35);
  z-index: 1;
}

.catalog-item:hover .catalog-item__content {
  border-color: transparent;
}

.catalog-item__img {
  width: 100%;
}

.catalog-item__content {
  height: 100%;
  background: #ffffff;
  padding: 20px;
  border-right: 1px solid rgba(59, 65, 75, 0.5);
  border-top: 1px solid rgba(59, 65, 75, 0.5);
  border-bottom: 1px solid rgba(59, 65, 75, 0.5);
  transition: .3s;
}

.catalog-item__title {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 130%;
  color: #3B414B;
}

.catalog-item__chars {
  margin: 0;
  padding: 0;
  list-style: none;
}

.catalog-item__char {
  opacity: .5;
}

.catalog-item__availability {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  color: #205e1e;
}

.catalog-item__availability-text {
  margin-left: 10px;
}

.catalog-item__availability-icon {
  flex: 0 0 auto;
  width: 15px;
  height: 1.2em;

  svg {
    width: 100%;
    height: 100%;
    fill: none;
  }
}

.catalog-item__price {
  margin-top: 20px;
}

.catalog-item__price-count {
  font-size: 35px;
  font-weight: bold;
}

.catalog-item__price-type {
  margin-left: 5px;
  font-size: 20px;
}
</style>