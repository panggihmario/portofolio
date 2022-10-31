<template>
  <section id="contact" class="mt-12 md:mt-40 contact" >
    <div class="text-2xl text-center dark:text-white" >Contact Me</div>
    <div class="text-sm  text-center dark:text-white mb-10" > Get in touch </div>

    <div class="contact__container grid gap-4 gap-y-12 md:grid-cols-2">
      <div>
        <div class="contact__information flex mb-2 gap-4">
          <i class="uil uil-phone contact__icon text-3xl text-primary"></i>
          <div>
            <div class="contact__title text-lg font-medium dark:text-white">Call Me</div>
            <span class="contact__subtitle text-sm text-light" >999-888-777</span>
          </div>
        </div>
        <div class="contact__information flex mb-2 gap-4">
          <i class="uil uil-envelope text-3xl text-primary"></i>
          <div>
            <div class="contact__title text-lg font-medium dark:text-white">Email</div>
            <span class="contact__subtitle text-sm text-light" > panggihmario@gmail.com </span>
          </div>
        </div>
        <div class="contact__information flex mb-2 gap-4">
          <i class="uil uil-map-marker text-3xl text-primary"></i>
          <div>
            <div class="contact__title text-lg font-medium dark:text-white"> Location </div>
            <span class="contact__subtitle text-sm text-light" > Jakarta - Indonesia </span>
          </div>
        </div>
      </div>
      <form action="" class="contact__form grid gap-2">
        <div class="contact__inputs grid gap-2">
          <div class="contact__content bg-light_primary rounded-lg p-input">
            <label for="" class="contact__label text-xs">Name</label>
            <input type="text" class="contact__input p-text w-full bg-light_primary text-sm border-none outline-none">
          </div>
          <div class="contact__content bg-light_primary rounded-lg p-input">
            <label for="" class="contact__label text-xs">Email</label>
            <input type="email" class="contact__input p-text w-full bg-light_primary text-sm border-none outline-none">
          </div>
        </div>
        <div class="contact__content bg-light_primary rounded-lg p-input">
          <label for="" class="contact__label text-xs">Project</label>
          <input type="text" class="contact__input p-text w-full bg-light_primary text-sm border-none outline-none">
        </div>
        <div class="contact__content bg-light_primary rounded-lg p-input">
          <label for="" class="contact__label text-xs">Message</label>
          <textarea name="" id="" cols="0" rows="7" class="contact__input p-text w-full bg-light_primary text-sm border-none outline-none"></textarea>
        </div>
        <div>
          <a href="#" class="button">
            Send Message
            <i class="uil uil-message"></i>
          </a>
        </div>
      </form>
    </div>
  </section>
</template>