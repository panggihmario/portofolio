<template>
  <section id="projects" class="mt-12 md:mt-40">
    <div class="text-2xl text-center dark:text-white">Projects</div>
    <div class="text-sm text-center dark:text-white mb-10">
      Most recent work
    </div>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      loop
      pagination
      keyboard
      cssMode
    >
      <swiper-slide v-for="(img, idx) in images" :key="idx">
        <div class="protofolio__content py-0 px-6 grid gap-2 md:grid-cols-2">
          <img
            :src="img.source"
            alt=""
            class="object-contain w-64 h-48 rounded-lg justify-self-center lg:w-80 lg:h-56"
          />
          <div class="md:self-center">
            <div class="text-lg font-medium mb-2 dark:text-whitesmoke">
              {{ img.title }}
            </div>
            <div class="mb-4 text-sm dark:text-white">
              {{ img.description }}
            </div>
            <div class="mb-4 text-sm dark:text-white">
              {{ img.tech }}
            </div>
            <!-- <a href="#" class="portofolio__button button" >
              Demo <i class="uil uil-arrow-right button__icon"></i>
            </a> -->
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-next text-3xl">
        <i class="uil uil-angle-right text-primary text-5xl"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="uil uil-angle-left text-5xl text-primary"></i>
      </div>
      <div class="swiper-pagination"></div>
    </swiper>

    <div class="mt-6"></div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      swiper,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      images: [
        {
          source: "/news.jpg",
          title: "Kipaskipas News",
          description:
            "News Website adaptable to all devices, with ui components and animated interactions.",
          link: "https://news.kipaskipas.com/",
          tech: "Next Js, Typescript, Tailwind Css",
        },
        {
          source: "/listpost.jpg",
          title: "Kipaskipas Admin",
          description:
            "Website adaptable to all devices, with ui components and animated interactions.",
          link: "https://news.kipaskipas.com/",
          tech: "Vue Js, Vuetify",
        },
        {
          source: "/home.jpg",
          title: "Kipaskipas",
          description:
            "Social Media Website adaptable to all devices, with ui components and animated interactions.",
          link: "https://news.kipaskipas.com/",
          tech: "Quasar, Nuxt Js, Typescript, Tailwind Css",
        },
        {
          source: "/mom.jpg",
          title: "Monggopesen Admin",
          description:
            "Website adaptable to all devices, with ui components and animated interactions.",
          link: "https://news.kipaskipas.com/",
          tech: "React Js, Typescript, Ant design",
        },
        {
          source: "/monggopesen.jpg",
          title: "Monggopesen",
          description:
            "E-commerce Website with adaptable to all devices, with ui components and animated interactions.",
          link: "https://news.kipaskipas.com/",
          tech: "React Js, Typescript, Tailwind Css",
        },
        {
          source: "/lampu.jpg",
          title: "E-commerce Lampu",
          description:
            "A digital marketplace platform designed to help businesses discover and adopt technology solutions such as AI services, APIs, cloud products, and digital tools.",
          link: "https://news.kipaskipas.com/",
          tech: "Next Js, Typescript, Tailwind Css, Mantine Ui",
        },
        {
          source: "/rcti.jpg",
          title: "Game Platform RCTI+",
          description:
            "A web-based game platform integrated into the RCTI+ mobile application via WebView, supporting interactive features and dynamic content updates.",
          link: "https://news.kipaskipas.com/",
          tech: "Next Js, Typescript, Tailwind Css",
        },
      ],
    };
  },
};
</script>

<style>
.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}

.swiper-button-next {
  right: -0.5rem;
}

.swiper-button-prev {
  left: -0.5rem;
}
</style>
