<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// Data Riwayat Pengalaman & Pendidikan (Timeline)
const experienceTimeline = ref([
  {
    type: 'work',
    year: '2025 - Sekarang',
    title: 'Full-Stack Web Developer',
    place: 'Freelance / Remote',
    desc: 'Membantu digitalisasi UMKM dan sekolah lokal. Membangun sistem pendaftaran online (PPDB) menggunakan Laravel, Vue.js, dan Docker.'
  },
  {
    type: 'work',
    year: '2024',
    title: 'Junior Developer',
    place: 'Jakarta',
    desc: 'Bekerja dalam tim untuk mengembangkan dan melakukan maintenance aplikasi berbasis web serta optimasi database operasional perusahaan.'
  },
  {
    type: 'edu',
    year: '2021 - 2024',
    title: 'Teknik Komputer & Jaringan / Rekayasa Perangkat Lunak',
    place: 'Pendidikan Formal / Otodidak',
    desc: 'Mempelajari fondasi dasar jaringan, algoritma pemrograman, hingga fokus mendalami ekosistem modern PHP dan JavaScript.'
  }
])

// Data Persentase Skill (Dikategorikan agar Solutif)
const skillCategories = ref([
  {
    category: 'Backend & Core Logic',
    items: [
      { name: 'PHP / Laravel', percentage: 85, color: 'progress-primary' },
      { name: 'MySQL / Database Architecture', percentage: 80, color: 'progress-primary' },
      { name: 'Node.js / REST API', percentage: 70, color: 'progress-primary' }
    ]
  },
  {
    category: 'Frontend & UI/UX',
    items: [
      { name: 'Vue.js 3 (Composition API)', percentage: 80, color: 'progress-secondary' },
      { name: 'Tailwind CSS / DaisyUI', percentage: 90, color: 'progress-secondary' },
      { name: 'Responsive UI Design', percentage: 85, color: 'progress-secondary' }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker / Containerization', percentage: 75, color: 'progress-accent' },
      { name: 'Git & GitHub Collaboration', percentage: 85, color: 'progress-accent' },
      { name: 'Laragon / Local Environments', percentage: 90, color: 'progress-accent' }
    ]
  }
])
</script>

<template>
  <div class="flex flex-col gap-10 text-vintage-dark">
    
    <!-- ==================================================== -->
    <!-- SECTION 1: TIMELINE PENDIDIKAN & PEKERJAAN         -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-6">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold uppercase tracking-wider text-gray-500 text-[11px]">My Journey</h3>
        <p class="text-xl font-black text-vintage-teal">Riwayat & Pengalaman</p>
      </div>

      <!-- DaisyUI Timeline Komponen -->
      <ul class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact w-full">
        <li v-for="(item, index) in experienceTimeline" :key="index">
          <!-- Garis penghubung timeline -->
          <hr v-if="index > 0" class="bg-vintage-dark/20" />
          
          <!-- Indikator Ikon (Kerja vs Sekolah) -->
          <div class="timeline-middle">
            <div class="p-2 rounded-full text-white shadow-sm" :class="item.type === 'work' ? 'bg-vintage-teal' : 'bg-vintage-orange'">
              <Icon :icon="item.type === 'work' ? 'mdi:briefcase-variant' : 'mdi:school'" class="w-4 h-4" />
            </div>
          </div>
          
          <!-- Konten Box (Kiri/Kanan bergantian otomatis di Desktop) -->
          <div :class="index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'" class="mb-10 bg-vintage-bg p-4 rounded-xl border border-vintage-dark/5 shadow-sm max-w-md">
            <time class="font-mono text-xs font-bold px-2 py-0.5 bg-vintage-cream/40 rounded text-vintage-dark/80">
              {{ item.year }}
            </time>
            <div class="text-base font-black text-vintage-dark mt-2 leading-tight">{{ item.title }}</div>
            <div class="text-xs font-bold text-vintage-orange mb-2">{{ item.place }}</div>
            <p class="text-xs md:text-sm text-gray-600 leading-relaxed">{{ item.desc }}</p>
          </div>
          
          <hr v-if="index < experienceTimeline.length - 1" class="bg-vintage-dark/20" />
        </li>
      </ul>
    </section>

    <!-- ==================================================== -->
    <!-- SECTION 2: PERSENTASE KEMAMPUAN SKILL                -->
    <!-- ==================================================== -->
    <section class="flex flex-col gap-6">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold uppercase tracking-wider text-gray-500 text-[11px]">Proficiency Level</h3>
        <p class="text-xl font-black text-vintage-teal">Persentase Kemampuan</p>
      </div>

      <!-- Grid Kategori Skill: 1 Kolom di HP, 3 Kolom di Desktop -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(cat, catIndex) in skillCategories" 
          :key="catIndex"
          class="bg-vintage-bg p-5 rounded-xl border border-vintage-dark/5 shadow-sm flex flex-col gap-4"
        >
          <!-- Nama Kategori -->
          <h4 class="font-black text-sm uppercase tracking-wider text-vintage-dark border-b border-vintage-dark/10 pb-2">
            {{ cat.category }}
          </h4>

          <!-- List Progress Bar di dalam kategori -->
          <div class="flex flex-col gap-4">
            <div v-for="(skill, skillIndex) in cat.items" :key="skillIndex" class="flex flex-col gap-1">
              <!-- Label & Angka Persen -->
              <div class="flex justify-between items-center text-xs md:text-sm">
                <span class="font-bold text-gray-700">{{ skill.name }}</span>
                <span class="font-mono font-bold text-vintage-teal">{{ skill.percentage }}%</span>
              </div>
              <!-- DaisyUI Progress Bar Component -->
              <progress 
                class="progress w-full h-2.5 bg-gray-200" 
                :class="skill.color" 
                :value="skill.percentage" 
                max="100"
              ></progress>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>