<template>
  <div class="bg-whitesmoke dark:bg-dark_primary">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <!-- bottom-0 -->
    <a href="#" 
      class="scrollup fixed  right-4 bg-primary opacity-80 px-1.5 rounded-md z-10"  
      id="scroll-up"
    >
      <i class="uil uil-arrow-up scrollup__icon text-2xl text-white"></i>
    </a>
  </div>

</template>

<script>
import Header from "../components/header.vue"
import Main from "../components/main.vue"
import Footer from "../components/footer.vue"
import { onMounted, ref } from "vue"
export default {
  components : {
    Header,
    Main,
    Footer
  },
  setup() {


    const scrollHeader = function () {
      const nav = document.getElementById('header')
      const scrollY = window.pageYOffset
      if(scrollY >= 80) {
        nav.classList.add('scroll-header')
      }else{
        nav.classList.remove('scroll-header')
      }
    }

    const scrollActivate  = function () {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if(scrollY > sectionTop  && scrollY <= sectionTop + sectionHeight ) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

      })
    }

    const scrollTop = function () {
      const nav = document.getElementById('scroll-up')
      const scrollY = window.pageYOffset
      if(scrollY >= 560) {
        nav.classList.add('show-scroll')
      }else{
        nav.classList.remove('show-scroll')
      }
    }

    const activateScroll = function () {
      window.addEventListener('scroll', scrollActivate)
      window.addEventListener('scroll', scrollHeader)
      window.addEventListener('scroll', scrollTop)
    }

    onMounted(activateScroll)
  }
}
</script>

<style>
.scrollup {
  transition: .4s;
  bottom: -20rem;
}
.show-scroll {
  bottom: 5rem;
}
</style>