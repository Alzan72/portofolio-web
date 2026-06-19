<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// State untuk fitur Show More deskripsi
const isExpanded = ref(false)

// Data Dummy Skills (Cocok untuk target Sekolah, UMKM, & Corporate)
const skills = ref([
  { icon: 'mdi:laravel', title: 'Backend Dev (Laravel)', desc: 'Membangun sistem informasi sekolah & backend aplikasi web yang aman dan scalable.' },
  { icon: 'mdi:vuejs', title: 'Frontend Dev (Vue 3)', desc: 'Membuat antarmuka website (UI/UX) yang dinamis, interaktif, cepat, dan responsif.' },
  { icon: 'mdi:tailwind', title: 'Tailwind & DaisyUI', desc: 'Slicing desain modern dengan utilitas CSS tinggi dan manajemen tema yang konsisten.' },
  { icon: 'mdi:docker', title: 'DevOps & Docker', desc: 'Containerisasi aplikasi untuk mempermudah deployment di server lokal maupun cloud.' },
  { icon: 'mdi:database', title: 'Database Relasional', desc: 'Optimasi query MySQL/PostgreSQL untuk kalkulasi data laporan yang kompleks.' },
  { icon: 'mdi:cellphone-link', title: 'Responsive Design', desc: 'Menjamin performa dan tampilan web tetap prima saat diakses via HP atau tablet.' }
])

// Data Dummy 8 Fake Brand (Hanya Logo & Nama)
const brands = ref([
  { icon: 'mdi:store-front-outline', name: 'Warung Kopi Kita' },
  { icon: 'mdi:school-outline', name: 'SD Nusantara' },
  { icon: 'mdi:office-building-marker-outline', name: 'PT Karya Solusi' },
  { icon: 'mdi:silverware-fork-knife', name: 'Catering Ibu Budi' },
  { icon: 'mdi:rocket-launch-outline', name: 'Startup Karya Baru' },
  { icon: 'mdi:basket-outline', name: 'Laundry Express' },
  { icon: 'mdi:book-open-page-variant-outline', name: 'Yayasan Ar-Rohmah' },
  { icon: 'mdi:truck-delivery-outline', name: 'Logistik Maju Jaya' }
])
</script>

<template>
  <div class="flex flex-col gap-10 text-vintage-dark">
    
    <!-- ==================================================== -->
    <!-- SECTION 1: HERO & SAPAAN (SHOW MORE/LESS)          -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-3">
      <h2 class="text-3xl font-black tracking-wide text-vintage-teal">
        Hallo, Programmer here 👋
      </h2>
      
      <div class="text-sm md:text-base leading-relaxed text-gray-700 space-y-2">
        <p>Saya adalah seorang full-stack developer yang berfokus pada penyediaan solusi digital praktis untuk UMKM, perusahaan, hingga institusi pendidikan.</p>
        <p>Dengan pendekatan yang santai namun terstruktur, saya menerjemahkan kebutuhan bisnis Anda ke dalam baris kode yang efisien, cepat, dan mudah dikelola.</p>
        <p>Saya percaya bahwa teknologi hebat tidak harus terasa rumit bagi pengguna akhir.</p>
        
        <!-- Baris tambahan yang disembunyikan / ditampilkan secara dinamis -->
        <div v-if="isExpanded" class="space-y-2 pt-2 border-t border-vintage-dark/5">
          <p>Mulai dari pembuatan landing page kreatif untuk produk lokal, sistem informasi pendaftaran sekolah terintegrasi, hingga dashboard internal korporat untuk monitoring performa tim.</p>
          <p>Setiap proyek dikerjakan dengan standar tech stack modern berbasis Vue.js dan arsitektur backend yang kokoh, memastikan aplikasi Anda siap berkembang kapan saja.</p>
        </div>
      </div>

      <!-- Tombol Show More / Show Less -->
      <button 
        @click="isExpanded = !isExpanded" 
        class="btn btn-link btn-xs self-start p-0 no-underline text-vintage-orange hover:text-vintage-orange/80 font-bold flex items-center gap-1"
      >
        <span>{{ isExpanded ? 'Show Less' : 'Show More' }}</span>
        <Icon :icon="isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="w-4 h-4" />
      </button>
    </section>

    <!-- ==================================================== -->
    <!-- SECTION 2: BENTO GRID SKILLS                       -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-4">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold uppercase tracking-wider text-gray-500 text-[11px]">My Core Capabilities</h3>
        <p class="text-xl font-black text-vintage-teal">Keahlian & Solusi Digital</p>
      </div>

      <!-- Responsive Grid: 1 Kolom di HP, 2 di Tablet, 3 di Desktop -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="card bg-vintage-bg shadow-sm border border-vintage-dark/5 hover:shadow-md hover:border-vintage-teal/20 transition-all duration-300 rounded-xl"
        >
          <div class="card-body p-4 flex flex-col gap-2">
            <!-- Icon & Title Row -->
            <div class="flex items-center gap-3">
              <div class="p-2 bg-vintage-cream/30 text-vintage-teal rounded-lg">
                <Icon :icon="skill.icon" class="w-6 h-6" />
              </div>
              <h4 class="font-bold text-sm md:text-base text-vintage-dark leading-tight">{{ skill.title }}</h4>
            </div>
            <!-- Description -->
            <p class="text-xs md:text-sm text-gray-600 leading-normal">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================================================== -->
    <!-- SECTION 3: INLINE FAKE BRANDS (OVERFLOW SCROLL)     -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-4">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold uppercase tracking-wider text-gray-500 text-[11px]">Trusted Partnership</h3>
        <p class="text-xl font-black text-vintage-teal">Kolaborasi & Klien</p>
      </div>

      <!-- Container Slider Logo: Memuat tepat 4 logo di layar desktop (grid-cols-4), scrollable ke samping -->
      <div class="w-full overflow-x-auto pb-4 scrollbar-thin snap-x snap-mandatory flex md:grid md:grid-cols-4 gap-4">
        <div 
          v-for="(brand, index) in brands" 
          :key="index"
          class="snap-center shrink-0 w-[calc((100%-3rem)/2)] md:w-auto card bg-vintage-bg/60 border border-dashed border-vintage-dark/20 rounded-xl py-4 px-3 flex flex-col items-center justify-center gap-2 hover:bg-vintage-bg transition-colors"
        >
          <!-- Fake Logo Icon -->
          <Icon :icon="brand.icon" class="w-8 h-8 text-gray-400/80" />
          <!-- Fake Brand Name -->
          <span class="text-[11px] font-bold text-gray-500 tracking-wider text-center uppercase leading-none">
            {{ brand.name }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Pengaturan custom kustomisasi scrollbar halus agar nuansa vintage tetap terjaga */
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: rgba(45, 42, 38, 0.05);
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(74, 107, 108, 0.3);
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgba(74, 107, 108, 0.5);
}
</style>