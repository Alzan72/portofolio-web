<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

// State untuk Filtering
const selectedCategory = ref('all')
const selectedTech = ref('all')

// State untuk Modal / Detail Project
const isModalOpen = ref(false)
const selectedProject = ref(null)
const activeMediaTab = ref('foto') // 'foto' atau 'video'
const currentSlide = ref(0)

// Data Dummy Project Portofolio
const projects = ref([
    {
        id: 1,
        title: 'Sistem Informasi PPDB Ar-Rohmah Group',
        category: 'pendidikan',
        tech: ['laravel', 'vue', 'sql'],
        desc: 'Sistem pendaftaran santri baru terintegrasi dengan pembagian role-based redirect untuk Tim PSB, Ustadz, dan Wali Santri. Mampu menghitung kalkulasi nilai semester otomatis dan pelaporan terpusat.',
        images: [
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800',
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800'
        ],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4' // Contoh fake video link
    },
    {
        id: 2,
        title: 'E-Commerce Marketplace Warung Kopi Kita',
        category: 'umkm',
        tech: ['vue', 'sql', 'tailwind'],
        desc: 'Aplikasi toko online kasual yang dioptimasi untuk performa cepat di HP. Memiliki fitur manajemen stok terpusat, integrasi payment gateway, dan kalkulasi ongkir otomatis untuk membantu UMKM lokal naik kelas.',
        images: [
            'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
        ],
        video: null // Tidak ada video
    },
    {
        id: 3,
        title: 'Company Profile & Dashboard PT Karya Solusi',
        category: 'perusahaan',
        tech: ['laravel', 'sql'],
        desc: 'Website company profile dengan sistem dashboard admin internal untuk mengelola KPI pegawai, log aktivitas harian, serta otomasi pembuatan laporan bulanan yang aman dan efisien.',
        images: [
            'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800'
        ],
        video: 'https://www.w3schools.com/html/movie.mp4'
    },
    {
        id: 4,
        title: 'Sistem Absensi Siswa Berbasis Docker (Presensi-Siswa)',
        category: 'pendidikan',
        tech: ['laravel', 'docker', 'sql'],
        desc: 'Aplikasi absensi real-time sekolah yang dicontainerisasi penuh menggunakan Docker Compose. Mendukung otomasi rekap kehadiran bulanan guru dan integrasi hardware native.',
        images: [
            'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=800'
        ],
        video: null
    },
    {
        id: 5,
        title: 'LaundryExpress Web App (Laundryapp.test)',
        category: 'umkm',
        tech: ['laravel', 'vue', 'sql'],
        desc: 'Aplikasi kasir dan pelacakan status cucian berbasis web untuk UMKM laundry. Dilengkapi dengan integrasi Google Socialite OAuth untuk login instan pelanggan dan dashboard keuangan berkala.',
        images: [
            'https://images.unsplash.com/photo-1545173168-9f18c82b997e?q=80&w=800'
        ],
        video: null
    }
])

// Komputasi filter data proyek secara dinamis
const filteredProjects = computed(() => {
    return projects.value.filter(project => {
        const matchCategory = selectedCategory.value === 'all' || project.category === selectedCategory.value
        const matchTech = selectedTech.value === 'all' || project.tech.includes(selectedTech.value)
        return matchCategory && matchTech
    })
})

// Fungsi membuka modal detail
const openDetail = (project) => {
    selectedProject.value = project
    currentSlide.value = 0
    activeMediaTab.value = 'foto'
    isModalOpen.value = true
}
</script>

<template>
    <div class="flex flex-col gap-6 text-vintage-dark relative">

        <!-- HEADER SECTION -->
        <div class="flex flex-col">
            <h3 class="text-lg font-bold uppercase tracking-wider text-gray-500 text-[11px]">Creative Showcase</h3>
            <p class="text-xl font-black text-vintage-teal">Portofolio & Studi Kasus</p>
        </div>

        <!-- ==================================================== -->
        <!-- CONTROLLER FILTER BAR (Responsive Layout)             -->
        <!-- ==================================================== -->
        <div
            class="flex flex-col sm:flex-row gap-3 bg-vintage-bg p-3 rounded-xl border border-vintage-dark/5 shadow-sm">
            <!-- Filter Kategori -->
            <div class="flex-1 flex flex-col gap-1">
                <label class="text-[11px] font-black uppercase text-gray-500 tracking-wider">Kategori Bisnis</label>
                <select v-model="selectedCategory"
                    class="select select-sm select-bordered bg-vintage-bg-darker border-vintage-dark/10 focus:outline-vintage-teal text-xs font-semibold rounded-lg w-full">
                    <option value="all">Semua Kategori</option>
                    <option value="pendidikan">Pendidikan / Sekolah</option>
                    <option value="umkm">UMKM / Usaha Lokal</option>
                    <option value="perusahaan">Perusahaan / Corporate</option>
                </select>
            </div>

            <!-- Filter Teknologi -->
            <div class="flex-1 flex flex-col gap-1">
                <label class="text-[11px] font-black uppercase text-gray-500 tracking-wider">Teknologi Kode</label>
                <select v-model="selectedTech"
                    class="select select-sm select-bordered bg-vintage-bg-darker border-vintage-dark/10 focus:outline-vintage-teal text-xs font-semibold rounded-lg w-full">
                    <option value="all">Semua Teknologi</option>
                    <option value="laravel">Laravel PHP</option>
                    <option value="vue">Vue.js 3</option>
                    <option value="sql">MySQL / SQL</option>
                    <option value="docker">Docker DevOps</option>
                </select>
            </div>
        </div>

        <!-- ==================================================== -->
        <!-- GRID PORTOFOLIO: 3 Kolom di Laptop dengan Gambar Preview -->
        <!-- ==================================================== -->
        <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="project in filteredProjects" :key="project.id" @click="openDetail(project)"
                class="card bg-vintage-bg shadow-sm border border-vintage-dark/5 hover:border-vintage-teal/20 hover:shadow-md transition-all duration-300 rounded-xl cursor-pointer overflow-hidden flex flex-col h-[360px]">
                <!-- Bagian Atas: Gambar Preview Proyek -->
                <figure class="w-full h-36 bg-vintage-dark/10 relative overflow-hidden shrink-0">
                    <img :src="project.images[0]" :alt="project.title"
                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <!-- Badge Kategori Ditempel di Atas Gambar (Pojok Kiri) -->
                    <span
                        class="badge badge-sm font-bold uppercase p-1 tracking-wider text-[9px] absolute left-3 top-3 shadow-sm"
                        :class="project.category === 'pendidikan' ? 'bg-blue-100 text-blue-700 border-none' : project.category === 'umkm' ? 'bg-orange-100 text-orange-700 border-none' : 'bg-purple-100 text-purple-700 border-none'">
                        {{ project.category }}
                    </span>
                </figure>

                <!-- Bagian Bawah: Konten Teks & Badge Tech -->
                <div class="card-body p-4 flex flex-col justify-between flex-1 min-h-0">

                    <!-- Baris Judul & Ikon Indikator -->
                    <div class="flex flex-col gap-1">
                        <div class="flex items-start justify-between gap-2 w-full">
                            <h4 class="font-black text-sm md:text-base text-vintage-dark leading-snug line-clamp-2">
                                {{ project.title }}
                            </h4>
                            <Icon icon="mdi:arrow-top-right" class="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                        </div>
                        <!-- Potongan deskripsi pendek agar card tidak kosong -->
                        <p class="text-xs text-gray-500 line-clamp-2 leading-normal mt-1">
                            {{ project.desc }}
                        </p>
                    </div>

                    <!-- Tumpukan Badge Teknologi di Paling Bawah -->
                    <div class="flex flex-wrap gap-1 mt-auto pt-2">
                        <span v-for="t in project.tech" :key="t"
                            class="px-2 py-0.5 bg-vintage-cream/40 rounded text-[10px] font-mono font-bold uppercase text-vintage-dark/80">
                            {{ t }}
                        </span>
                    </div>

                </div>
            </div>
        </div>

        <!-- State Jika Data Kosong -->
        <div v-else class="text-center py-12 bg-vintage-bg/50 rounded-xl border border-dashed border-vintage-dark/10">
            <Icon icon="mdi:folder-search-outline" class="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p class="text-sm font-bold text-gray-500">Tidak ada project yang cocok dengan filter pilihan Anda.</p>
        </div>

        <!-- ==================================================== -->
        <!-- COMPONENT MODAL DETAIL (Hampir Memenuhi Layar)        -->
        <!-- ==================================================== -->
        <dialog class="modal bg-vintage-dark/40 backdrop-blur-xs" :class="{ 'modal-open': isModalOpen }">
            <div v-if="selectedProject"
                class="modal-box bg-vintage-bg-darker text-vintage-dark max-w-5xl w-11/12 h-[85vh] p-4 md:p-6 rounded-2xl flex flex-col gap-4 shadow-2xl relative">

                <!-- Tombol Close Modal -->
                <button @click="isModalOpen = false"
                    class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-vintage-dark hover:bg-vintage-dark/10 z-50">✕</button>

                <!-- Baris Atas Modal: Judul Proyek -->
                <div class="pr-8">
                    <h3 class="font-black text-base md:text-xl text-vintage-teal leading-tight">{{ selectedProject.title
                        }}</h3>
                    <p class="text-xs text-gray-500 capitalize font-bold mt-1">Kategori: {{ selectedProject.category }}
                    </p>
                </div>

                <!-- AREA UTAMA MODAL: Layout Grid 2 Kolom di Laptop, Flex Vertikal di HP -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 min-h-0 overflow-y-auto md:overflow-hidden">

                    <!-- KOLOM KIRI (MD: 7/12): Area Slider/Media -->
                    <div class="md:col-span-7 flex flex-col gap-2 h-full min-h-[250px] md:min-h-0">
                        <!-- Navigasi Tab Foto/Video -->
                        <div class="tabs tabs-boxed bg-vintage-bg/40 p-0.5 self-start flex gap-1 rounded-md">
                            <button @click="activeMediaTab = 'foto'" class="px-3 py-1 text-xs font-bold rounded-sm"
                                :class="activeMediaTab === 'foto' ? 'bg-vintage-teal text-white' : 'text-gray-500'">Foto</button>
                            <button v-if="selectedProject.video" @click="activeMediaTab = 'video'"
                                class="px-3 py-1 text-xs font-bold rounded-sm"
                                :class="activeMediaTab === 'video' ? 'bg-vintage-teal text-white' : 'text-gray-500'">Video</button>
                        </div>

                        <!-- Konten Tab Media -->
                        <div
                            class="flex-1 bg-vintage-dark rounded-xl relative overflow-hidden flex items-center justify-center min-h-0">
                            <!-- TAB FOTO: Carousel System -->
                            <div v-if="activeMediaTab === 'foto'" class="w-full h-full relative">
                                <img :src="selectedProject.images[currentSlide]" class="w-full h-full object-cover"
                                    alt="Project Screenshot" />

                                <!-- Navigasi Panah Slider (Hanya jika gambar > 1) -->
                                <div v-if="selectedProject.images.length > 1"
                                    class="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between">
                                    <button
                                        @click="currentSlide = currentSlide === 0 ? selectedProject.images.length - 1 : currentSlide - 1"
                                        class="btn btn-circle btn-xs bg-white/80 text-vintage-dark border-none">❮</button>
                                    <button
                                        @click="currentSlide = currentSlide === selectedProject.images.length - 1 ? 0 : currentSlide + 1"
                                        class="btn btn-circle btn-xs bg-white/80 text-vintage-dark border-none">❯</button>
                                </div>
                                <!-- Indikator Slide -->
                                <div
                                    class="absolute bottom-2 inset-x-0 text-center text-[10px] text-white font-mono bg-black/40 py-0.5 max-w-[50px] mx-auto rounded">
                                    {{ currentSlide + 1 }}/{{ selectedProject.images.length }}
                                </div>
                            </div>

                            <!-- TAB VIDEO: HTML5 Video Player -->
                            <div v-else-if="activeMediaTab === 'video' && selectedProject.video" class="w-full h-full">
                                <video controls class="w-full h-full object-contain">
                                    <source :src="selectedProject.video" type="video/mp4" />
                                    Browser Anda tidak mendukung pemutaran video.
                                </video>
                            </div>
                        </div>
                    </div>

                    <!-- KOLOM KANAN (MD: 5/12): Area Deskripsi & Tech Specs -->
                    <div class="md:col-span-5 flex flex-col gap-4 h-full overflow-y-auto pr-1">
                        <div class="flex flex-col gap-1.5">
                            <h4 class="text-xs font-black uppercase text-gray-500 tracking-wider">Tentang Solusi Project
                            </h4>
                            <p
                                class="text-xs md:text-sm leading-relaxed text-gray-700 bg-vintage-bg p-3 rounded-xl border border-vintage-dark/5 shadow-inner">
                                {{ selectedProject.desc }}
                            </p>
                        </div>

                        <div class="flex flex-col gap-1.5 mt-auto">
                            <h4 class="text-xs font-black uppercase text-gray-500 tracking-wider">Teknologi
                                Diimplementasikan</h4>
                            <div class="flex flex-wrap gap-1">
                                <span v-for="t in selectedProject.tech" :key="t"
                                    class="px-2.5 py-1 bg-vintage-teal text-white rounded text-[11px] font-mono font-bold uppercase tracking-wider">
                                    {{ t }}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </dialog>

    </div>
</template>

<style scoped>
/* Menghilangkan kedipan atau scrollbar bawaan dialog bawaan */
.modal-box::-webkit-scrollbar {
    width: 4px;
}

.modal-box::-webkit-scrollbar-thumb {
    background: rgba(74, 107, 108, 0.2);
    border-radius: 4px;
}
</style>