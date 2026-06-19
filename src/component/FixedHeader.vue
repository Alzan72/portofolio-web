<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  activeMenu: String
})

defineEmits(['change-menu'])
</script>

<template>
  <div class="card w-full max-w-4xl bg-vintage-dark text-neutral-content shadow-xl border border-vintage-dark/20 sticky top-4 z-50">
    <div class="card-body p-3 md:p-6">
      
      <div class="grid grid-cols-10 gap-2 md:hidden w-full items-stretch">
        
        <div class="col-span-3 flex flex-col justify-between border-r border-gray-700/50 pr-2">
          <div class="h-[60px] flex items-center justify-center">
            <div class="avatar online">
              <div class="w-12 h-12 rounded-full ring ring-vintage-teal ring-offset-base-100 ring-offset-2">
                <img src="/img/profile/avatar.png" alt="Avatar" />
              </div>
            </div>
          </div>
          
          <div class="h-[20px] flex items-center justify-center">
            <a href="https://wa.me/yournumber" target="_blank" class="flex items-center gap-1 mx-1 text-[11px] text-emerald-400 font-semibold active:scale-95 transition-transform">
              <Icon icon="mdi:whatsapp" class="w-4 h-4" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" class="flex items-center gap-1 mx-1 text-[11px] text-emerald-400 font-semibold active:scale-95 transition-transform">
              <Icon icon="mdi:github" class="w-4 h-4" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" class="flex items-center gap-1 mx-1 text-[11px] text-emerald-400 font-semibold active:scale-95 transition-transform">
              <Icon icon="mdi:instagram" class="w-4 h-4" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" class="flex items-center gap-1 mx-1 text-[11px] text-emerald-400 font-semibold active:scale-95 transition-transform">
              <Icon icon="line-md:tiktok" class="w-4 h-4" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" class="flex items-center gap-1 mx-1 text-[11px] text-emerald-400 font-semibold active:scale-95 transition-transform">
              <Icon icon="mdi:email" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div class="col-span-7 flex flex-col justify-between pl-1">
          <div class="h-[60px] flex flex-col justify-center">
            <h1 class="text-lg font-black tracking-wider text-vintage-cream leading-tight">ALZAN</h1>
            <p class="text-[10px] text-gray-400 font-medium tracking-wide h-[10px]">Programmer Kreatif & Solutif</p>
          </div>
          
          <div class="h-[30px] flex items-center justify-start overflow-x-auto scrollbar-none">
            <div class="flex gap-1 bg-vintage-bg/10 p-0.5 rounded-md w-full">
              <button 
                v-for="menu in ['home', 'skills', 'portfolio']" 
                :key="menu"
                @click="$emit('change-menu', menu)"
                class="flex-1 py-1 text-[11px] capitalize rounded-sm font-medium transition-all text-center"
                :class="activeMenu === menu ? 'bg-vintage-teal text-white shadow-sm' : 'text-gray-400'"
              >
                {{ menu }}
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="hidden md:flex flex-row items-center justify-between w-full">
        <div class="flex items-center gap-4">
          <div class="avatar online">
            <div class="w-12 h-12 rounded-full ring ring-vintage-teal ring-offset-base-100 ring-offset-2">
              <img src="/img/profile/avatar.png" alt="Avatar" />
            </div>
          </div>
          <div>
            <h1 class="text-xl font-bold tracking-wide text-vintage-cream">ALZAN</h1>
            <p class="text-xs text-gray-400">Programmer Kreatif & Solutif</p>
          </div>
        </div>

        <div class="tabs tabs-boxed bg-transparent p-0 flex gap-1">
          <button 
            v-for="menu in ['home', 'skills', 'portfolio']" 
            :key="menu"
            @click="$emit('change-menu', menu)"
            class="tab text-sm capitalize transition-all duration-300 rounded-lg px-4"
            :class="activeMenu === menu ? 'bg-vintage-teal text-white font-semibold' : 'text-gray-400 hover:text-white'"
          >
            {{ menu }}
          </button>
        </div>

      <!-- Sisi Kanan: Quick Contact (Layout Atas-Bawah) -->
<div class="flex flex-col items-end gap-2">
  
  <!-- Baris Atas: Ikon Sosmed Inline -->
  <div class="flex items-center gap-2">
    <a 
      href="https://wa.me/yournumber" 
      target="_blank" 
      class="btn btn-circle btn-sm bg-emerald-600 hover:bg-emerald-700 text-white border-none min-h-8 w-8"
      title="Hubungi via WhatsApp"
    >
      <Icon icon="mdi:whatsapp" class="w-4 h-4" />
    </a>
    
    <a 
      href="https://github.com/yourusername" 
      target="_blank" 
      class="btn btn-circle btn-sm bg-gray-700 hover:bg-gray-800 text-white border-none min-h-8 w-8"
      title="Lihat GitHub"
    >
      <Icon icon="mdi:github" class="w-4 h-4" />
    </a>
    <a 
      href="https://instagram.com/yourusername" 
      target="_blank" 
      class="btn btn-circle btn-sm bg-gray-700 hover:bg-gray-800 text-white border-none min-h-8 w-8"
      title="Lihat Instagram"
    >
      <Icon icon="mdi:instagram" class="w-4 h-4" />
    </a>
    <a 
      href="https://tiktok.com/yourusername" 
      target="_blank" 
      class="btn btn-circle btn-sm bg-gray-700 hover:bg-gray-800 text-white border-none min-h-8 w-8"
      title="Lihat Tiktok"
    >
      <Icon icon="line-md:tiktok" class="w-4 h-4" />
    </a>
    <a 
      href="mailto:[EMAIL_ADDRESS]" 
      target="_blank" 
      class="btn btn-circle btn-sm bg-gray-700 hover:bg-gray-800 text-white border-none min-h-8 w-8"
      title="Email"
    >
      <Icon icon="mdi:email" class="w-4 h-4" />
    </a>
  </div>

  <!-- Baris Bawah: Tombol Utama -->
  <button 
    @click="$emit('change-menu', 'portfolio')" 
    class="btn btn-sm btn-secondary font-semibold text-white px-4 rounded-lg w-full text-center"
  >
    Ngobrol Yuk!
  </button>

</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Menghilangkan scrollbar bawaan di menu mobile agar tetap rapi */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>