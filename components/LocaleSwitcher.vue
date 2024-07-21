<template>
  <div class="relative inline-block text-left">
    <div>
      <button @click="toggleDropdown" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
        {{ currentLocaleName }}
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <transition name="dropdown">
      <div v-if="showDropdown" class="z-10  origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div class="py-1" role="none">
          <button v-for="locale in locales" :key="locale.code" @click="changeLocale(locale.code)" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            {{ locale.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    }
  },
  computed: {
    locales() {
      return this.$i18n.locales;
    },
    currentLocaleName() {
      const currentLocale = this.$i18n.locales.find(locale => locale.code === this.$i18n.locale);
      return currentLocale ? currentLocale.name : '';
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    changeLocale(locale) {
      this.$i18n.setLocale(locale);
      this.showDropdown = false;
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.5s;
}
.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
}
</style>
