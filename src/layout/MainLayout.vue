<script setup>
// import { usePage } from '@inertiajs/vue3';
// const profile = usePage().props.profile;
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content font-sans selection:bg-primary selection:text-white" data-theme="elegant_dark">
    <nav class="navbar bg-base-100/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 px-6 md:px-16">
      <div class="flex-1">
        <span class="text-lg font-bold tracking-widest uppercase text-white">
          <!-- {{ profile.full_name }} -->
            Zammer
          <span class="text-primary">.</span>
        </span>
      </div>
      <div class="flex-none">
        <a href="mailto:abdulazzam66@gmail.com" class="btn btn-primary btn-sm rounded-full px-6">Let's communicate</a>
        <!-- <a :href="'mailto:' + profile.email_contact" class="btn btn-primary btn-sm rounded-full px-6">Let's communicate</a> -->
      </div>
    </nav>

    <slot />

    <footer class="footer footer-center p-10 bg-base-200 text-slate-400 border-t border-white/5">
      <aside>
        <p class="font-bold uppercase tracking-widest text-xs">Based in Indonesia</p> 
        <p>Copyright © 2024 - 
            <!-- {{ profile.full_name }} -->
              Azzam
        </p>
      </aside>
    </footer>
  </div>
</template>