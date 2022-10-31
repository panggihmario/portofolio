<template>
  <header 
    id="header"
    class="
    fixed bottom-0 left-0 bg-whitesmoke w-full z-100
    md:top-0 md:bottom-initial
    dark:bg-dark_primary
    ">
    <nav class="max-w-5xl flex justify-between items-center h-12 p-6 md:m-auto">
      <div class="text-xl font-medium hover:text-primary dark:text-white ">Mario</div>
      <div
        class="nav__menu tablet:shadow-nav tablet:pt-8 tablet:pr-6 tablet:pb-24 tablet:pl-6 tablet:bg-whitesmoke dark:bg-dark_primary tablet:w-full tablet:fixed tablet:-bottom-full tablet:left-0 tablet:duration-300 tablet:rounded-t-xl
        md:ml-auto
        "
        id="nav-menu"
      >
        <ul class="grid gap-2 grid-cols-3 md:flex md:gap-x-8 md:ml-auto">
          <li class="hover:color-primary">
            <a href="#home" class="flex flex-col items-center dark:text-white active-link">
              <i class="uil uil-estate md:hidden "></i>
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="flex flex-col items-center dark:text-white"><i class="md:hidden uil uil-user"></i>
              About
            </a>
          </li>
          <li>
            <a href="#skills" class="flex flex-col items-center dark:text-white">

              <i class="uil uil-file-info-alt md:hidden"></i>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" class="flex flex-col items-center dark:text-white">
              <i class="uil uil-clipboard-notes md:hidden"></i>
              Projects
            </a>
          </li>
          <!-- <li>
            <a href="#challanges" class="flex flex-col items-center dark:text-white">
              <i class="uil uil-bolt md:hidden"></i>
              Challanges
            </a>
          </li> -->
          <li>
            <a href="#contact" class="flex flex-col items-center dark:text-white">
              <i class="uil uil-message md:hidden"></i>
              Contact
            </a>
          </li>
        </ul>
        <i 
          class="dark:text-white uil md:hidden uil-multiply absolute right-5 bottom-5 text-2xl cursor-pointer"
          id="nav-close"
          @click="closeMenu"
        ></i>
      </div>
      <div class="flex items-center md:ml-4">
        <i 
          v-if="isDark"
          @click="changeTheme('light')"
          class="uil text-white uil-sun text-xl font-medium cursor-pointer mr-4"></i>
        <i
          v-else
          @click="changeTheme('dark')" 
          class="uil uil-moon text-xl font-medium cursor-pointer mr-4"
        ></i>
        <div 
          class="text-xl dark:text-white font-medium hover:text-primary cursor-pointer"
          @click="openMenu"
        >
          <i class="uil uil-apps md:hidden"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const isDark = ref(false)
    const openMenu = function () {
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.add('tablet:bottom-0')
      navMenu.classList.remove('tablet:-bottom-full')
    }

    const closeMenu = function () {
      const navMenu  = document.getElementById('nav-menu')
      navMenu.classList.add('tablet:-bottom-full')
      navMenu.classList.remove('tablet:bottom-0')
    }

    const changeTheme = function (type) {
      if(type === 'dark') {
        document.documentElement.classList.add(type)
        isDark.value = true
        localStorage.setItem('theme', 'dark')
      }else {
        document.documentElement.classList.remove('dark')
        isDark.value = false
        localStorage.setItem('theme', 'light')
      }
    }

    const initTheme = function () {
      const theme = localStorage.getItem('theme')
      if(theme === 'dark') {
        document.documentElement.classList.add('dark')
        isDark.value = true
      }else {
        document.documentElement.classList.remove('dark')
        isDark.value = false
      }
    }

    onMounted(initTheme)

    return {
      openMenu,
      closeMenu,
      changeTheme,
      isDark
    }
  }
}
</script>

