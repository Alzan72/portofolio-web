<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: Array, // Array berisi objek { image: '', title: '' }
  defaultPathImage: String,
})

const carouselRef = ref(null)

const scrollNext = () => {
  if (carouselRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.value;
    
    // Cek apakah sudah di ujung kanan
    // Kita beri toleransi 1px untuk pembulatan sub-pixel browser
    if (scrollLeft + clientWidth >= scrollWidth - 1) {
      carouselRef.value.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carouselRef.value.scrollBy({ left: clientWidth, behavior: 'smooth' });
    }
  }
}

const scrollPrev = () => {
  if (carouselRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.value;
    
    // Cek apakah sudah di ujung kiri
    if (scrollLeft <= 0) {
      carouselRef.value.scrollTo({ left: scrollWidth, behavior: 'smooth' });
    } else {
      carouselRef.value.scrollBy({ left: -clientWidth, behavior: 'smooth' });
    }
  }
}

</script>

<template>
  <div class="relative group w-full">
    <div
      ref="carouselRef"
      class="carousel carousel-center w-full p-4 space-x-6 bg-surface-darker rounded-[2.5rem] border border-white/5 overflow-x-hidden"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-item w-full relative flex flex-col gap-4"
      >
        <div class="relative h-64 w-full overflow-hidden rounded-[2rem] border border-white/10">
          <img
            :src="defaultPathImage ? defaultPathImage + item.image : item.image"
            :alt="item.title"
            class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700"
          />
          <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h4 class="text-white font-bold italic">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-y-0 left-2 flex items-center">
      <button
        @click="scrollPrev"
        class="btn btn-circle btn-primary shadow-xl shadow-primary/20 border-none group-hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>

    <div class="absolute inset-y-0 right-2 flex items-center">
      <button
        @click="scrollNext"
        class="btn btn-circle btn-primary shadow-xl shadow-primary/20 border-none group-hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Menghilangkan scrollbar tapi tetap bisa di-scroll secara programatik */
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
