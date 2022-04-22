<template>
  <footer class="app-footer">
    <div class="container py-5">
      <div class="main-footer">
        <div class="data">
          <div class="d-flex align-items-center mb-4">
            <img
              src="../../assets/images/alazhar0logo.png"
              alt="Al-Azhar Logo"
            />
            <div class="title mx-2">
              <h5>منصة الحرم الجامعى الذكى | Smart Campus Platform</h5>
              <p>الأزهر-التعليمي | Al-Azhar-Learn</p>
            </div>
          </div>
          <p>
            ريادة وإشراف: <br />
            سعادة الأستاذ الدكتور / محمد الشربيني نائب رئيس جامعة الأزهر – شئون
            الطلاب والتعليم
          </p>
        </div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fazulearn.alazhar.edu.eg%2F&tabs=timeline%2Cevents&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          height="300"
          width="350"
          class="mx-auto d-block my-2"
          style="border: none; overflow: hidden border-radius: 5px"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
    <div class="sub-footer py-4">
      <div
        class="
          container
          d-md-flex
          text-center text-md-start
          align-items-center
          justify-content-between
        "
      >
        <div class="copyrights">
          <p class="m-0">
            جميع الحقوق محفوظه {{ new Date().getFullYear() }}لـ منصة الحرم
            الجامعي الذكي الجديد
          </p>
          <p class="d-none">
            Created with <span class="text-danger"> ❤</span> By
            <a href="https://webdesginer.me" target="_blank"
              >Muhammed Mujahid</a
            >
          </p>
        </div>
        <div class="socials">
          <a
            class="mx-2"
            href="https://www.facebook.com/azulearn.alazhar.edu.eg/"
            target="_blnak"
          >
            <fa :icon="['fab', 'facebook-f']" />
          </a>
          <a class="mx-2" href="https://twitter.com" target="_blnak">
            <fa :icon="['fab', 'twitter']" />
          </a>
          <a
            class="mx-2"
            href="https://www.youtube.com/channel/UCVtiwlx7pzUXUmngkk2BH2g"
            target="_blnak"
          >
            <fa :icon="['fab', 'youtube']" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>