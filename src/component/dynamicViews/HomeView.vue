<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLangStore } from '@/stores/lang'

// State untuk fitur Show More deskripsi
const isExpanded = ref(false)

const langStore = useLangStore()
const isEnglish = computed(() => langStore.current === 'en')

// Data Dummy Skills (Cocok untuk target Sekolah, UMKM, & Corporate)
const skills = ref([
  { icon: 'tdesign:web', title: 'Web Design', desc: 'Mendesain website atau landing page yang modern, interaktif, cepat, dan responsif untuk UMKM, Sekolah, dan Corporate.' },
  { icon: 'tdesign:app', title: 'Web Apps Development', desc: 'Membangun aplikasi berbasis web yang modern, interaktif, cepat, dan responsif seperti aplikasi absensi siswa, aplikasi penilaian siswa, aplikasi inventory UMKM dan aplikasi keuangan Corporate.' },
  { icon: 'lucide:network', title: 'Networking', desc: 'Instalasi dan konfigurasi infrastruktur jaringan sekolah menggunakan perangkat MikroTik, termasuk pengelolaan akses internet berdasarkan tingkat pengguna serta penerapan kebijakan pemblokiran situs sesuai kebutuhan.' },
])

const techStack = ref([
  { icon: 'cib:js', title: 'Javascript', desc: 'Membuat antarmuka website (UI/UX) yang dinamis, interaktif, cepat, dan responsif.' },
  { icon: 'cib:php', title: 'PHP', desc: 'Membuat backend aplikasi web yang aman dan scalable.' },
  { icon: 'mdi:tailwind', title: 'Tailwind', desc: 'Slicing desain modern dengan utilitas CSS tinggi dan manajemen tema yang konsisten.' },
  { icon: 'mdi:database', title: 'Database Relasional', desc: 'Optimasi query MySQL/PostgreSQL untuk kalkulasi data laporan yang kompleks.' },
  { icon: 'mynaui:api', title: 'API Development', desc: 'Membangun API untuk sistem informasi sekolah & backend aplikasi web yang aman dan scalable.' },
  { icon: 'mdi:laravel', title: 'Backend Dev (Laravel)', desc: 'Membangun backend aplikasi web yang aman, efisien, modern dan scalable.' },
  { icon: 'mdi:vuejs', title: 'Frontend Dev (Vue 3)', desc: 'Kerangka kerja frontend yang modern, interaktif, cepat, dan responsif.' },

])

// Data Dummy 8 Fake Brand (Hanya Logo & Nama)
const brands = ref([
  // { path: 'mdi:store-front-outline', typeImage: 'icon', name: 'Warung Kopi Kita' },
  { path: '/img/brands/artri-logo-bg.png', typeImage: 'img', name: 'Ar-Rohmah Putri Malang' },
  { path: '/img/brands/sipta.png', typeImage: 'img', name: 'SIPTA' }
])
</script>

<template>
  <div class="flex flex-col gap-10 text-vintage-dark">

    <!-- ==================================================== -->
    <!-- SECTION 1: HERO & SAPAAN (SHOW MORE/LESS)          -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-3">
      <h2 class="text-3xl font-black tracking-wide text-vintage-teal">
        {{ isEnglish ? 'I\'m Azzam, Full-Stack Web Developer 👋' : 'I\'m Azzam, Full-Stack Web Developer 👋' }}
      </h2>
      <p class="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500">
        {{ isEnglish ? 'Building practical web apps for education, boarding schools, and small businesses.' : 'Membangun aplikasi web praktis untuk sekolah, pesantren, dan pelaku usaha kecil.' }}
      </p>

      <div class="text-sm md:text-base leading-relaxed text-gray-700 space-y-2">
        <p>
          {{
            isEnglish
              ? 'I help schools, boarding schools, and small businesses turn manual processes into reliable, easy-to-use web systems.'
              : 'Saya membantu sekolah, pesantren, dan pelaku usaha kecil mengubah proses manual menjadi sistem informasi berbasis web yang rapi, mudah digunakan, dan bisa diandalkan sehari-hari.'
          }}
        </p>
        <p>
          {{
            isEnglish
              ? 'My focus is building applications such as student registration systems, QR-based attendance, mosque finance apps, and dashboards that support faster decision making.'
              : 'Fokus saya adalah membangun aplikasi seperti sistem pendaftaran santri, absensi berbasis QR Code, keuangan masjid, hingga dashboard rekap data yang memudahkan pimpinan mengambil keputusan.'
          }}
        </p>
        <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm text-gray-700">
          <li>
            {{
              isEnglish
                ? 'Reduce time spent on manual report and attendance recap.'
                : 'Mengurangi waktu rekap laporan administrasi dan kehadiran.'
            }}
          </li>
          <li>
            {{
              isEnglish
                ? 'Minimize input errors with structured workflows.'
                : 'Meminimalkan kesalahan input data dengan alur kerja yang terstruktur.'
            }}
          </li>
          <li>
            {{
              isEnglish
                ? 'Speed up access to key information for leaders and operational teams.'
                : 'Mempercepat akses informasi penting bagi pimpinan dan tim operasional.'
            }}
          </li>
        </ul>
        <p v-if="!isExpanded" class="pt-1">
          {{
            isEnglish
              ? 'Curious about my experience and how I work?'
              : 'Ingin tahu lebih dalam tentang pengalaman dan cara saya bekerja?'
          }}
        </p>
        <!-- Baris tambahan yang disembunyikan / ditampilkan secara dinamis -->
        <div v-if="isExpanded" class="space-y-2 pt-2 border-t border-vintage-dark/5">
          <p>
            {{
              isEnglish
                ? 'Beyond building systems from scratch, I am experienced in optimizing and refactoring legacy applications to improve performance, efficiency, and user experience.'
                : 'Selain mengembangkan sistem dari nol, saya juga berpengalaman melakukan optimalisasi dan refaktorisasi aplikasi legacy untuk meningkatkan performa, efisiensi, dan pengalaman pengguna.'
            }}
          </p>
          <p>
            {{
              isEnglish
                ? 'On the networking side, I have experience installing and configuring school network infrastructure using MikroTik, including internet access segmentation and content filtering policies.'
                : 'Dalam bidang jaringan, saya memiliki pengalaman melakukan instalasi dan konfigurasi infrastruktur jaringan sekolah menggunakan perangkat MikroTik, termasuk pengelolaan akses internet berdasarkan tingkat pengguna serta penerapan kebijakan pemblokiran situs sesuai kebutuhan.'
            }}
          </p>
          <p>
            {{
              isEnglish
                ? 'I am always open to new challenges and ready to support your digitalization process with the right, effective, and sustainable technology.'
                : 'Saya selalu terbuka terhadap tantangan baru dan siap membantu proses digitalisasi melalui implementasi teknologi yang tepat, efektif, dan berkelanjutan.'
            }}
          </p>
        </div>
      </div>

      <!-- Tombol Show More / Show Less -->
      <button @click="isExpanded = !isExpanded"
        class="btn btn-link btn-xs self-start p-0 no-underline text-vintage-orange hover:text-vintage-orange/80 font-bold flex items-center gap-1">
        <span>{{ isExpanded ? (isEnglish ? 'Show Less' : 'Tutup detail') : (isEnglish ? 'Show More' : 'Lihat selengkapnya') }}</span>
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
        <div v-for="(skill, index) in skills" :key="index"
          class="card bg-vintage-bg shadow-sm border border-vintage-dark/5 hover:shadow-md hover:border-vintage-teal/20 transition-all duration-300 rounded-xl">
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
    <!-- SECTION 2: BENTO GRID TECH                       -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-4">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold uppercase tracking-wider text-gray-500 text-[11px]">My Tech Stack</h3>
        <p class="text-xl font-black text-vintage-teal">Teknologi yang saya gunakan</p>
      </div>

      <!-- Responsive Grid: 1 Kolom di HP, 2 di Tablet, 3 di Desktop -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(skill, index) in techStack" :key="index"
          class="card bg-vintage-bg shadow-sm border border-vintage-dark/5 hover:shadow-md hover:border-vintage-teal/20 transition-all duration-300 rounded-xl">
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
        <div v-for="(brand, index) in brands" :key="index"
          class="snap-center shrink-0 w-[calc((100%-3rem)/2)] md:w-auto card bg-vintage-bg/60 border border-dashed border-vintage-dark/20 rounded-xl py-4 px-3 flex flex-col items-center justify-center gap-2 hover:bg-vintage-bg transition-colors">
          <!-- Fake Logo Icon -->
          <Icon :icon="brand.icon" v-if="brand.typeImage === 'icon'" class="w-8 h-8 text-gray-400/80" />
          <img :src="brand.path" v-else class="h-20 object-contain text-gray-900" />
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