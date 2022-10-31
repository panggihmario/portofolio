<template>
  <section  class="mt-12 md:mt-40" >
    <div class="text-2xl text-center dark:text-white" >Qualification</div>
    <div class="text-sm  text-center dark:text-white mb-10" >My Personal journey</div>
    <div  >
      <div class=" flex justify-evenly mb-4" >
        <div
          @click="onTabs('education')"
          class="dark:text-white qualification__button button--flex text-lg font-medium hover:text-primary cursor-pointer "  >
          <i class="uil uil-graduation-cap text-2lg mr-2"></i>
          Education
        </div>
        <div 
        @click="onTabs('work')"
          class="dark:text-white qualification__button button--flex text-lg font-medium hover:text-primary cursor-pointer" >
          <i class="uil uil-briefcase-alt text-2lg mr-2"></i>
          Work
        </div>
      </div>

      <div class=" md:grid md:grid-cols-q-section md:justify-center">
        <div class="qualification  qualification__content" data-content id="education">
          <div class=" grid grid-cols-qualification gap-x-6">
            <div>
              <div class=" text-base font-medium dark:text-white">
                Bachelor of Science
              </div>
              <div class=" text-sm mb-2 inline-block dark:text-white">
                Gadjah Mada University 
              </div>
              <div class="dark:text-white  text-sm ">
                <i class="uil uil-calender "></i>
                2014
              </div>
            </div>
            
            <div >
              <span class=" inline-block w-3 h-3 rounded-half bg-primary"></span>
              <span class="qualification__line block w-px h-full bg-primary"></span>
            </div>
          </div>
          
          <div class=" grid grid-cols-qualification gap-x-6">
            <div></div>
            <div >
              <span class=" inline-block w-3 h-3 rounded-half bg-primary"></span>
              <span class="qualification__line"></span>
            </div>
            <div>
              <div class=" text-base font-medium dark:text-white">
                Fullstack Developer
              </div>
              <div class=" text-sm mb-2 inline-block dark:text-white">
                Hacktive8 Indonesia 
              </div>
              <div class=" text-sm dark:text-white">
                <i class="uil uil-calender"></i>
                2018
              </div>
            </div>
            
            <!-- <div >
              <span class=" inline-block w-3 h-3 rounded-half bg-primary"></span>
              <span class="qualification__line"></span>
            </div> -->
          </div>

        </div>


        <div class="qualification qualification__content hidden" data-content id="work">
          <div class=" grid grid-cols-qualification gap-x-6">
            <div>
              <div class=" text-base font-medium dark:text-white">
                Fullstack developer
              </div>
              <div class=" text-sm mb-2 inline-block dark:text-white">
                Pt. Vanz Inovatif Teknologi
              </div>
              <div class=" text-sm dark:text-white">
                <i class="uil uil-calender"></i>
                2018
              </div>
            </div>
            
            <div >
              <span class=" inline-block w-3 h-3 rounded-half bg-primary"></span>
              <span class="qualification__line block w-px h-full bg-primary"></span>
            </div>
          </div>
          
          <div class=" grid grid-cols-qualification gap-x-6">
            <div></div>
            <div >
              <span class=" inline-block w-3 h-3 rounded-half bg-primary"></span>
              <span class="qualification__line block w-px h-full bg-primary"></span>
            </div>
            <div>
              <div class=" text-base font-medium dark:text-white">
               Frontend Developer
              </div>
              <div class=" text-sm mb-2 inline-block dark:text-white">
                Monggopesen
              </div>
              <div class=" text-sm dark:text-white">
                <i class="uil uil-calender"></i>
                2019 - 2020
              </div>
            </div>
            
           
          </div>

          <div class=" grid grid-cols-qualification gap-x-6">
            <div>
              <div class=" text-base font-medium dark:text-white">
                Frontend Developer
              </div>
              <div class=" text-sm mb-2 inline-block dark:text-white">
                Kipaskipas
              </div>
              <div class=" text-sm dark:text-white">
                <i class="uil uil-calender"></i>
                2020 - present
              </div>
            </div>
            
            <div >
              <span class=" inline-block w-3 h-3 rounded-half bg-primary"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  setup() {
    const onTabs = function (id) {
      const tabsContent = document.querySelectorAll('[data-content]')
      tabsContent.forEach(tab => {
        if(tab.id === id) {
          tab.classList.remove('hidden')
        }else {
          tab.classList.add('hidden')
        }
      })
    }

    return {
      onTabs
    }
  }
}
</script>

<style>
.qualification__line {
  transform: translate(6px, -7px);
}

.qualification [data-content] {
  display: none;
}
/* .qualification__active[data-content] {
  display: block;
} */
</style>