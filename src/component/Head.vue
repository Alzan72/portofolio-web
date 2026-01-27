<script>
export default {
  name: 'Head',
  props: {
    title: {
      type: String,
      default: ''
    },
    meta: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.updateHead()
  },
  watch: {
    title() {
      this.updateHead()
    },
    meta: {
      handler() {
        this.updateHead()
      },
      deep: true
    }
  },
  methods: {
    updateHead() {
      // Update title
      if (this.title) {
        document.title = this.title
      }
      
      // Update meta tags
      this.meta.forEach(metaObj => {
        let meta = document.querySelector(`meta[name="${metaObj.name}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('name', metaObj.name)
          document.head.appendChild(meta)
        }
        meta.setAttribute('content', metaObj.content)
      })
    }
  }
}
</script>

<template>
  <!-- Invisible component -->
  <div style="display: none;"></div>
</template>
