<script setup>
import MainLayout from '@/layout/MainLayout.vue'
import Head from '@/component/Head.vue'
import Carousel from '@/component/Carousel.vue'

// Data Dummy untuk Clients (Bisa diganti dengan logo asli nanti)
const clients = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
]

const myGallery = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Code Architecture',
  },
  { image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c', title: 'Database Design' },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    title: 'Web Development',
  },
]

const techStacks = [
  {
    name: 'Laravel',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 32 32"><path fill="#ff5252" d="M31.963 9.12c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a2 2 0 0 0-.162-.205a1 1 0 0 0-.088-.072a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a.7.7 0 0 0-.187.191a1 1 0 0 0-.064.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085a1 1 0 0 0-.037.265v5.382l-4 2V5.385a1 1 0 0 0-.037-.265c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a1 1 0 0 0-.063-.086a.7.7 0 0 0-.187-.191a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a1 1 0 0 0-.088.072a1 1 0 0 0-.1.119a1 1 0 0 0-.063.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085A1 1 0 0 0 0 5.385v19a1 1 0 0 0 .553.894l6 3l6 3c.014.007.03.005.046.011a.9.9 0 0 0 .802 0c.015-.006.032-.004.046-.01l12-6a1 1 0 0 0 .553-.895v-5.382l5.447-2.724a1 1 0 0 0 .553-.894v-6a1 1 0 0 0-.037-.265M9.236 21.385l4.211-2.106h.001L19 16.503l3.764 1.882L13 23.267ZM24 13.003v3.764l-4-2v-3.764Zm1-5.5l3.764 1.882L25 11.267l-3.764-1.882ZM8 19.767V9.003l4-2v10.764ZM7 3.503l3.764 1.882L7 7.267L3.236 5.385Zm-5 3.5l4 2v16.764l-4-2Zm6 16l4 2v3.764l-4-2Zm16 .764l-10 5v-3.764l10-5Zm6-9l-4 2v-3.764l4-2Z"/></svg>`,
  },
  {
    name: 'Vue',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 221"><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>`,
  },
  {
    name: 'MySQL',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 32 32"><path fill="#5d87a1" fill-rule="evenodd" d="M8.785 6.865a3 3 0 0 0-.785.1V7h.038a6.5 6.5 0 0 0 .612.785c.154.306.288.611.441.917l.038-.039a1.07 1.07 0 0 0 .4-.957a4 4 0 0 1-.23-.4c-.115-.191-.364-.287-.517-.44"/><path fill="#00758f" fill-rule="evenodd" d="M27.78 23.553a8.85 8.85 0 0 0-3.712.536c-.287.115-.745.115-.785.478c.154.153.172.4.307.613a4.5 4.5 0 0 0 .995 1.167c.4.306.8.611 1.225.879c.745.461 1.588.728 2.314 1.187c.422.268.842.612 1.264.9c.21.153.343.4.611.5v-.058a4 4 0 0 0-.291-.613c-.191-.19-.383-.363-.575-.554a9.1 9.1 0 0 0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.7 7.7 0 0 0 1.321-.308c.65-.172 1.243-.133 1.912-.3c.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25 25 0 0 0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946c-.226-.114-.6-.17-.737-.36a7.6 7.6 0 0 1-.776-1.457a47 47 0 0 1-1.551-3.293a20 20 0 0 0-.965-2.157A19.1 19.1 0 0 0 11.609 5a9 9 0 0 0-2.421-.776c-.474-.02-.946-.057-1.419-.075a8 8 0 0 1-.869-.664C5.818 2.8 3.038 1.328 2.242 3.277C1.732 4.508 3 5.718 3.435 6.343A9 9 0 0 1 4.4 7.762c.133.322.171.663.3 1a23 23 0 0 0 .987 2.538a9 9 0 0 0 .7 1.172c.153.209.417.3.474.645a5.4 5.4 0 0 0-.436 1.419a8.34 8.34 0 0 0 .549 6.358c.3.473 1.022 1.514 1.987 1.116c.851-.34.662-1.419.908-2.364c.056-.229.019-.379.132-.53v.184s.483 1.061.723 1.6a10.8 10.8 0 0 0 2.4 2.59A3.5 3.5 0 0 1 14 24.657V25h.427a1.05 1.05 0 0 0-.427-.788a9.4 9.4 0 0 1-.959-1.16a25 25 0 0 1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857c-.11-.231-.11-.58-.295-.7a7.3 7.3 0 0 0-.884 1.313a11.4 11.4 0 0 0-.517 2.921c-.073.02-.037 0-.073.038c-.589-.155-.792-.792-1.014-1.332a8.76 8.76 0 0 1-.166-5.164c.128-.405.683-1.681.461-2.068c-.111-.369-.48-.58-.682-.871a8 8 0 0 1-.663-1.237C5.912 9.5 5.69 8.3 5.212 7.216a10.4 10.4 0 0 0-.921-1.489A9.6 9.6 0 0 1 3.276 4.22c-.092-.213-.221-.561-.074-.793a.3.3 0 0 1 .259-.252c.238-.212.921.058 1.16.174a9.2 9.2 0 0 1 1.824.967c.258.194.866.685.866.685h.18c.612.133 1.3.037 1.876.21a12.3 12.3 0 0 1 2.755 1.32a17 17 0 0 1 5.969 6.545c.23.439.327.842.537 1.3c.4.94.9 1.9 1.3 2.814a12.6 12.6 0 0 0 1.36 2.564c.286.4 1.435.612 1.952.822a14 14 0 0 1 1.32.535c.651.4 1.3.861 1.913 1.3c.305.23 1.262.708 1.32 1.091"/></svg>`,
  },
  {
    name: 'PHP',
    icon: `<svg xmlns="http://www.w3.org/2000/svg"class="w-4 h-4" viewBox="0 0 32 32"><path fill="#0288d1" d="M28 10a4 4 0 0 0-4-4h-6v6a6 6 0 0 1-6 6h-2v2h2v6h4v-6h8v6h4V16h2v-4a2 2 0 0 0-2-2"/><path fill="#0288d1" d="M12 4H8v2a6 6 0 0 0-6 6v6a2 2 0 0 0 2 2v2H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6a2 2 0 0 0 2-2v-8h4a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4M6 14H4v-2h2Z"/></svg>`,
  },
  {
    name: 'Javascript',
    icon: `<svg xmlns="http://www.w3.org/2000/svg"class="w-4 h-4" viewBox="0 0 32 32"><path fill="#f5de19" d="M2 2h28v28H2z"/><path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"/></svg>`,
  },
  {
    name: 'API',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 1024 1024"><path fill="currentColor" d="m917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3c2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4M578.9 546.7a8.03 8.03 0 0 0-11.3 0L501 613.3L410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 68.9-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3c51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3z"/></svg>`,
  },
]

const projects = [
  {
    id: 1,
    title: 'Sistem Pendaftaran Siswa Baru (PPDB Online)',
    slug: 'sistem-pendaftaran-siswa-baru',
    description:
      'Aplikasi untuk otomasi penerimaan siswa baru dan pelaporan administrasi secara real-time.',
    content:
      'Membantu instansi pendidikan mengelola ribuan pendaftar dengan sistem seleksi otomatis dan dashboard pelaporan bagi panitia.',
    image_path: [
      {
        image: 'psb_pendaftar.png',
        title: 'Pendataan pendaftar',
      },
      {
        image: 'psb_laporan.png',
        title: 'Laporan',
      },
      {
        image: 'psb_dashboard.png',
        title: 'Login pendaftar',
      },
    ],
    demo_url: null,
    is_featured: 1,
    created_at: '2026-01-12T14:29:42.000000Z',
    updated_at: '2026-01-12T14:29:42.000000Z',
    tech_stacks: [
      {
        id: 1,
        name: 'Laravel',
        icon: 'tabler-brand-laravel',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 1,
          tech_stack_id: 1,
        },
      },
      {
        id: 2,
        name: 'Vue.js',
        icon: 'tabler-brand-vue',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 1,
          tech_stack_id: 2,
        },
      },
        {
        id: 3,
        name: 'Bootstrap',
        icon: 'tabler-brand-vue',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 2,
          tech_stack_id: 2,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Aplikasi Absensi Siswa',
    slug: 'aplikasi-absensi-siswa',
    description: 'Sistem pendataan kehadiran siswa dengan fitur rekapitulasi laporan cepat.',
    content:
      'Mempermudah guru dalam memantau kehadiran dan memberikan laporan bulanan otomatis kepada orang tua dan sekolah.',
   image_path: [
      {
        image: 'absensi_1.png',
        title: 'Rekap kehadiran',
      },
      {
        image: 'absensi_2.png',
        title: 'Agenda absensi',
      },
      {
        image: 'absensi_3.png',
        title: 'Pengisian kehadiran',
      },
    ],
    demo_url: null,
    is_featured: 1,
    created_at: '2026-01-12T14:29:42.000000Z',
    updated_at: '2026-01-12T14:29:42.000000Z',
    tech_stacks: [
     {
        id: 1,
        name: 'Laravel',
        icon: 'tabler-brand-laravel',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 1,
          tech_stack_id: 1,
        },
      },
      {
        id: 2,
        name: 'Vue.js',
        icon: 'tabler-brand-vue',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 1,
          tech_stack_id: 2,
        },
      },
      {
        id: 3,
        name: 'Tailwind',
        icon: 'tabler-brand-vue',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 2,
          tech_stack_id: 2,
        },
      },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Manajemen Paket Pesantren',
  //   slug: 'manajemen-paket-pesantren',
  //   description:
  //     'Solusi tracking paket santri untuk mencegah miskomunikasi antara resepsionis dan asrama.',
  //   content:
  //     'Sistem pencatatan logistik internal yang memastikan setiap paket yang datang terdata dan sampai ke tangan pemiliknya dengan verifikasi sistem.',
  //   image_path: [
  //     {
  //       image: 'absensi_1.png',
  //       title: 'Rekap kehadiran',
  //     },
  //     {
  //       image: 'absensi_2.png',
  //       title: 'Agenda absensi',
  //     },
  //     {
  //       image: 'absensi_3.png',
  //       title: 'Pengisian kehadiran',
  //     },
  //   ],
  //   demo_url: null,
  //   is_featured: 1,
  //   created_at: '2026-01-12T14:29:42.000000Z',
  //   updated_at: '2026-01-12T14:29:42.000000Z',
  //   tech_stacks: [
  //     {
  //       id: 1,
  //       name: 'Laravel',
  //       icon: 'tabler-brand-laravel',
  //       created_at: '2026-01-12T14:29:42.000000Z',
  //       updated_at: '2026-01-12T14:29:42.000000Z',
  //       pivot: {
  //         project_id: 3,
  //         tech_stack_id: 1,
  //       },
  //     },
  //     {
  //       id: 2,
  //       name: 'Vue.js',
  //       icon: 'tabler-brand-vue',
  //       created_at: '2026-01-12T14:29:42.000000Z',
  //       updated_at: '2026-01-12T14:29:42.000000Z',
  //       pivot: {
  //         project_id: 3,
  //         tech_stack_id: 2,
  //       },
  //     },
  //     {
  //       id: 3,
  //       name: 'Inertia.js',
  //       icon: 'tabler-brand-inertia',
  //       created_at: '2026-01-12T14:29:42.000000Z',
  //       updated_at: '2026-01-12T14:29:42.000000Z',
  //       pivot: {
  //         project_id: 3,
  //         tech_stack_id: 3,
  //       },
  //     },
  //   ],
  // },
  {
    id: 3,
    title: 'Sistem Data Induk Santri',
    slug: 'sistem-data-induk-santri',
    description:
      'Pusat data valid (Single Source of Truth) untuk informasi santri di lingkungan institusi.',
    content:
      'Integrasi seluruh data santri ke dalam satu database pusat untuk mempermudah sinkronisasi data antar departemen.',
    image_path: [
      {
        image: 'data_induk_santri.png',
        title: 'Data Santri',
      },
      {
        image: 'data_induk_detail.png',
        title: 'Detail santri',
      },
      {
        image: 'data_induk_rekap.png',
        title: 'Rekap unit santri',
      },
    ],
    demo_url: null,
    is_featured: 1,
    created_at: '2026-01-12T14:29:42.000000Z',
    updated_at: '2026-01-12T14:29:42.000000Z',
    tech_stacks: [
      {
        id: 1,
        name: 'Laravel',
        icon: 'tabler-brand-laravel',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 4,
          tech_stack_id: 1,
        },
      },
      {
        id: 2,
        name: 'Vue.js',
        icon: 'tabler-brand-vue',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 4,
          tech_stack_id: 2,
        },
      },
       {
        id: 3,
        name: 'Bootstrap',
        icon: 'tabler-brand-vue',
        created_at: '2026-01-12T14:29:42.000000Z',
        updated_at: '2026-01-12T14:29:42.000000Z',
        pivot: {
          project_id: 2,
          tech_stack_id: 2,
        },
      },
    ],
  },
]
</script>

<template>
  <Head title="Prozamer | Fullstack Developer" />
  <MainLayout>
    <section class="relative flex min-h-[90vh] items-center overflow-hidden bg-surface-darker px-6">
      <div class="bg-grainy pointer-events-none absolute inset-0"></div>
      <div class="relative z-10 container mx-auto">
        <div class="max-w-4xl">
          <div
            class="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <span class="flex h-2 w-2 animate-pulse rounded-full bg-accent"></span>
            <span class="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase"
              >Ready for Project</span
            >
          </div>
          <div class="container mx-auto max-w-5xl">
            <h2 class="mb-4 font-mono tracking-tighter text-primary">
              — Hello, I am
              <!-- {{ $page.props.profile.full_name }} -->
              Abdullah Azzam Adnan
            </h2>
          </div>
          <h1 class="mb-8 text-7xl leading-none font-black tracking-tighter text-white md:text-8xl">
            WebDev<br />
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >Enthusiast</span
            >
          </h1>
          <p class="mb-10 max-w-xl text-xl leading-relaxed font-light text-slate-400 italic">
            "Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang web di bidang
            teknologi."
          </p>
          <div class="flex flex-wrap gap-4">
            <span
              v-for="tech in techStacks"
              :key="tech.name"
              class="group inline-flex cursor-default items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-slate-300 uppercase transition-all hover:border-primary/50 hover:bg-white/10"
            >
              <span
                v-html="tech.icon"
                class="text-slate-400 transition-colors group-hover:text-primary"
              ></span>

              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-white/5 bg-base-100 px-6 py-24">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 class="mb-4 font-mono text-lg tracking-widest text-primary uppercase">
              // Tentang saya
            </h2>
            <h3 class="mb-6 text-4xl font-bold text-white md:text-5xl">
              Membangun Solusi Dari Baris Kode.
            </h3>
            <p class="mb-8 text-lg leading-relaxed text-slate-400">
              <!-- {{ $page.props.profile.bio }}  -->
              Saya adalah seorang IT Programmer dengan pengalaman 2 tahun
              dalam pengembangan solusi perangkat lunak berbasis web. Fokus utama saya adalah
              merancang dan mengimplementasikan sistem yang efisien, terukur, dan stabil menggunakan
              *full-stack development*
            </p>
            <!-- <a
              href="/cv-placeholder.pdf"
              class="btn rounded-xl px-8 shadow-lg shadow-primary/20 btn-md btn-primary hover:scale-105"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a> -->
          </div>
          <div class="group relative justify-self-center lg:justify-self-end">
            <div
              class="absolute inset-0 rounded-full bg-primary/20 blur-[80px] transition-all group-hover:bg-primary/30"
            ></div>
            <div
              class="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/10 bg-surface-darker shadow-2xl md:h-96 md:w-96"
            >
              <img
                src="@/assets/img/profile.jpg"
                alt="Profile"
                class="h-full w-full object-cover  transition-all duration-700 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20" v-if="false">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div
            class="rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all hover:border-primary/50"
          >
            <div class="mb-2 text-5xl font-black text-primary italic">4+</div>
            <div class="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Years Experience
            </div>
          </div>
          <div
            class="rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all hover:border-primary/50"
          >
            <div class="mb-2 text-5xl font-black text-secondary italic">25+</div>
            <div class="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Happy Clients
            </div>
          </div>
          <div
            class="rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all hover:border-primary/50"
          >
            <div class="mb-2 text-5xl font-black text-accent italic">40+</div>
            <div class="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Projects Finished
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 transition-all duration-1000 hover:grayscale-0" v-if="false">
      <div class="container mx-auto px-6">
        <p class="mb-12 text-center text-xs tracking-[0.5em] uppercase">
          Worked with leading brands
        </p>
        <div class="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <img
            v-for="client in clients"
            :key="client.name"
            :src="client.logo"
            :alt="client.name"
            class="h-8 w-auto opacity-40 transition-opacity hover:opacity-100 md:h-10"
          />
        </div>
      </div>
    </section>

    <section id="projects" class="bg-base-100 px-6 py-32">
      <div class="container mx-auto">
        <h2 class="mb-20 text-center text-4xl font-black text-white italic">
          <!-- SELECTED CASE STUDIES. -->
          PROJEK TERPILIH
        </h2>
        <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface-darker shadow-neon transition-all hover:border-primary/30 hover:shadow-neon-hover floating-card hover:animate-pulse"
          >
            <div class="relative h-64 overflow-hidden bg-slate-900">
              <Carousel :items="project.image_path" :defaultPathImage="'/img/projects/'" />
              <!-- <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000"
                                class="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-surface-darker to-transparent"
                            ></div> -->
            </div>
            <div class="p-10">
              <h3 class="mb-4 text-2xl font-bold text-white">
                {{ project.title }}
              </h3>
              <p class="mb-8 text-slate-400 italic">"{{ project.description }}"</p>
              <div class="mb-8 flex flex-wrap gap-2">
                <span
                  v-for="s in project.tech_stacks"
                  :key="s.id"
                  class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase"
                >
                  {{ s.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-white/5 bg-surface-darker py-32">
      <div class="container mx-auto px-6 text-center">
        <h2 class="mb-12 text-3xl font-bold tracking-tighter text-white italic">
          <!-- Let's Connect on Digital Spaces -->
          Koneksi Digital
        </h2>
        <div class="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/abdullah-azzam-adnan-0a1b0a334"
            target="_blank"
            class="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-3 transition-all hover:bg-primary"
          >
            <span class="text-xl font-bold text-white">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/Alzan72"
            target="_blank"
            class="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-3 transition-all hover:bg-slate-700"
          >
            <span class="text-xl font-bold text-white">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="mailto:abdulazzam66@gmail.com"
            target="_blank"
            class="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-3 transition-all hover:bg-sky-700"
          >
            <span class="text-xl font-bold text-white">Gmail</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#4285f4"
                  d="M41.636 203.028h31.818v-77.273L28 91.665v97.727c0 7.545 6.114 13.636 13.636 13.636"
                />
                <path
                  fill="#34a853"
                  d="M182.545 203.028h31.819c7.545 0 13.636-6.113 13.636-13.636V91.665l-45.455 34.09"
                />
                <path
                  fill="#fbbc04"
                  d="M182.545 66.664v59.091L228 91.665V73.481c0-16.863-19.25-26.477-32.727-16.363"
                />
                <path
                  fill="#ea4335"
                  d="M73.455 125.755v-59.09L128 107.574l54.545-40.91v59.091L128 166.665"
                />
                <path
                  fill="#c5221f"
                  d="M28 73.483v18.181l45.454 34.091v-59.09l-12.727-9.546C47.227 47.005 28 56.619 28 73.483"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/azzm_adn/"
            target="_blank"
            class="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-3 transition-all hover:bg-red-600"
          >
            <span class="text-xl font-bold text-white">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="66"
                  d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="66;0"
                  />
                </path>
                <path
                  stroke-dasharray="28"
                  stroke-dashoffset="28"
                  d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.6s"
                    to="0"
                  />
                </path>
              </g>
              <circle cx="17" cy="7" r="1.5" fill="currentColor" opacity="0">
                <animate fill="freeze" attributeName="opacity" begin="1.3s" dur="0.2s" to="1" />
              </circle>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
