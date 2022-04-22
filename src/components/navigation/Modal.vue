<template>
  <span>
    <button
      type="button"
      class="btn btn-primary btn-lg d-none"
      data-bs-toggle="modal"
      data-bs-target="#wellcomModal"
      id="modelLanuch"
    ></button>
    <div
      class="modal fade"
      id="wellcomModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              مرحبا بك في منصة الحرم الجامعي الذكي الجديد
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>هل تعرف كيفية التسجيل في المنصه؟</p>
            <p>
              اذا كنت لا تعرف اضغط علي زر مشاهدة الفديو التعليمي بالاسفل لمعرفة
              كيفية التسجيل
            </p>
          </div>
          <div class="modal-footer justify-content-between">
            <div class="d-flex">
              <button
                type="button "
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                نعم
              </button>
              <span class="d-block mx-1"></span>
              <button
                type="button"
                class="btn btn-primary"
                @click="openSecondModal"
              >
                لا ، اريد مشاهدة الفديو التعليمي
              </button>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="dontShowAgin"
                v-model="dontShowAgin"
              />
              <label class="form-check-label" for="dontShowAgin"
                >عدم الاظهار مره اخري؟</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary btn-lg d-none"
      id="vidModalLuncher"
      data-bs-toggle="modal"
      data-bs-target="#vidModal"
    ></button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="vidModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">كيفية التسجيل في المنصه</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/DFtng9CCIZo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="modal-footer">
            هل تريد معرفة المزيد عن المنصة؟
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              لا، شكرا
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="$router.push({ name: 'About' })"
            >
              نعم
            </button>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      dontShowAgin: false,
    };
  },
  watch: {
    dontShowAgin(ndontShowAgin) {
      localStorage.setItem("dont_show", ndontShowAgin);
      console.log(localStorage.getItem("dont_show"), ndontShowAgin);
    },
  },
  methods: {
    openSecondModal() {
      document.querySelector("#vidModalLuncher").click();
    },
  },
  mounted() {
    document.querySelector("#modelLanuch").click();
  },
};
</script>

<style>
</style>