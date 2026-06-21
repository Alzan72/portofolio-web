<script setup>
import { ref, shallowRef, watch } from 'vue'
import FixedHeader from '@/component/FixedHeader.vue'
import ContentWrapper from '@/component/ContentWrapper.vue'

// Import views konten dinamis
import HomeView from '@/component/dynamicViews/HomeView.vue'
import SkillsView from '@/component/dynamicViews/SkillsView.vue'
import PortfolioView from '@/component/dynamicViews/PortfolioView.vue'
import ContactView from '@/component/dynamicViews/ContactView.vue'

// State untuk menu yang sedang aktif
const activeMenu = ref('home')
const currentComponent = shallowRef(HomeView)

// Mapping string menu ke komponen Vue
const menuMapping = {
  home: HomeView,
  skills: SkillsView,
  portfolio: PortfolioView,
  contact: ContactView
}

// Watcher untuk mengubah komponen secara dinamis saat menu diklik
watch(activeMenu, (newMenu) => {
  currentComponent.value = menuMapping[newMenu] || HomeView
})
</script>

<template>
  <!-- Background utama dengan nuansa vintage hangat -->
  <div class="min-h-screen bg-vintage-bg text-vintage-dark font-sans p-4 md:p-8 flex flex-col items-center gap-6">
    
    <!-- 1. FIXED HEADER CARD (Bagian Atas) -->
    <FixedHeader 
      :active-menu="activeMenu" 
      @change-menu="(menu) => activeMenu = menu" 
    />

    <!-- 2. DYNAMIC CONTENT WRAPPER (Bagian Bawah) -->
    <ContentWrapper>
      <!-- Transisi halus saat konten berganti -->
      <Transition name="fade" mode="out-in">
        <component :is="currentComponent" />
      </Transition>
    </ContentWrapper>

  </div>
</template>

<style scoped>
/* Animasi transisi antar menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>