<template>
  <main class="max-w-5xl md:m-auto p-6 pb-14">
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Qualification></Qualification>
    <Projects></Projects>
    <Banner></Banner>
    <Contact></Contact>
  </main>
</template>

<script>
import Home from "./home.vue"
import About from "./about.vue"
import Skills from "./skills.vue";
import Qualification from "./qualification.vue";
import Projects from "./projects.vue";
import Banner from "./banner.vue";
import Contact from "./contact.vue";
export default {
  components : {
    Home,
    About,
    Skills,
    Qualification,
    Projects,
    Banner,
    Contact
}
}
</script>