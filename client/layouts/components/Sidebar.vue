<template>
  <vs-sidebar v-model="activePage" absolute :open.sync="showSidebar">
    <template #logo>
      <!-- ...img logo -->
    </template>
    <vs-sidebar-item id="home">
      <template #icon>
        <i class="bx bx-home"></i>
      </template>
      Home
    </vs-sidebar-item>
    <vs-sidebar-item id="market">
      <template #icon>
        <i class="bx bx-grid-alt"></i>
      </template>
      Market Overview
    </vs-sidebar-item>
    <vs-sidebar-item id="Music">
      <template #icon>
        <i class="bx bxs-music"></i>
      </template>
      Music
    </vs-sidebar-item>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon><i class="bx bx-group"></i></template>
          Social media
        </vs-sidebar-item>
      </template>
      <vs-sidebar-item id="Instagram">
        <template #icon> <i class="bx bxl-instagram"></i></template>
        Instagram
      </vs-sidebar-item>
      <vs-sidebar-item id="twitter">
        <template #icon><i class="bx bxl-twitter"></i></template>
        Twitter
      </vs-sidebar-item>
      <vs-sidebar-item id="Facebook">
        <template #icon><i class="bx bxl-facebook"></i></template>
        Facebook
      </vs-sidebar-item>
    </vs-sidebar-group>
    <template #footer>
      <vs-row justify="space-between">
        <vs-avatar> 萌主 </vs-avatar>
        <vs-avatar badge-color="danger" badge-position="top-right">
          <i class="bx bx-bell"></i>
          <template #badge> 28 </template>
        </vs-avatar>
      </vs-row>
    </template>
  </vs-sidebar>
</template>

<script>
export default {
  computed: {
    showSidebar: {
      set(val) {
        this.$store.commit('app/setShowSidebar', val)
      },
      get() {
        return this.$store.state.app.showSidebar
      },
    },
    activePage: {
      set(val) {
        this.$store.commit('app/setActivePage', val)
      },
      get() {
        return this.$store.state.app.activePage
      },
    },
  },
}
</script>

<style></style>
