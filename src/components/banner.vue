<template>
  <section class="project__section text-center md:mt-40">
    <div class="project__bg bg-primary pt-4 rounded">
      <div class="project__container grid gap-2 md:grid-cols-2 sm:grid-cols-2">
        <div class="project__data self-center md:p-2">
          <div class="project__title text-xl mb-2 text-white">You have a new project</div>
          <div class="project__description text-white text-sm mb-4">Contact me now and get a 30% discount on your new project.</div>
          <a href="#contact" class="button button--white">
            Contact Me 
            <i class="uil uil-message project__icon"></i>
          </a>
        </div>
        <img 
          class="w-56 justify-self-center"
          src="src/assets/interface-research.png"  alt="">
      </div>
    </div>
  </section>
</template>