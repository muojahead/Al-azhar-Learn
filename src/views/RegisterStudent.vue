<template>
  <div class="register-student py-4">
    <div class="container" v-if="service && service != {}">
      <div class="sec-title mb-4 d-flex align-items-center">
        <img
          :src="service.image"
          :alt="service.title"
          class="mx-1"
          width="125"
        />
        <h2>{{ service.title }}</h2>
      </div>
      <div class="sectors-search">
        <input
          type="text"
          placeholder="ادخل اسم الكليه او الفرع للبحث في القائمة..."
          @input="filterSectors"
          v-model="searchWord"
        />
      </div>
      <div class="branch" v-if="branch && searchWord">
        <p class="text-center">
          {{ branch.title }}
        </p>
        <div
          class="d-flex justify-content-around align-items-center branch-link"
        >
          <p class="m-0">فتح موقع الكليه</p>
          <a class="btn btn-outline-primary" :href="branch.link" target="_blank"
            >التسجيل</a
          >
        </div>
      </div>
      <div class="accordion" id="sectors_accordion">
        <div
          v-for="(sector, sectorInd) in filteredSectors"
          :key="sectorInd"
          class="accordion-item"
        >
          <h2 class="accordion-header" :id="'sector-' + sectorInd">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse-sector-' + sectorInd"
              aria-expanded="false"
              :aria-controls="'collapse-sector-' + sectorInd"
            >
              {{ sector.title }}
            </button>
          </h2>
          <div
            :id="'collapse-sector-' + sectorInd"
            class="accordion-collapse collapse hide"
            :aria-labelledby="'sector-' + sectorInd"
            data-bs-parent="#sectors_accordion"
          >
            <div class="accordion-body">
              <div
                class="accordion accordion-flush"
                id="nestedSectorsAccordion"
              >
                <div
                  class="accordion-item"
                  v-for="(type, typeInd) in sector.types"
                  :key="typeInd + 20"
                >
                  <h2 class="accordion-header" i:d="'flush-heading-'+typeInd">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#flush-collapse-' + typeInd"
                      aria-expanded="true"
                      :aria-controls="'flush-collapse-' + typeInd"
                    >
                      {{ type.name }}
                    </button>
                  </h2>
                  <div
                    :id="'flush-collapse-' + typeInd"
                    class="accordion-collapse collapse"
                    :aria-labelledby="'flush-heading-' + typeInd"
                    data-bs-parent="#nestedSectorsAccordion"
                  >
                    <div class="accordion-body">
                      <div
                        class="branch"
                        v-for="(branch, branchInd) in type.branches"
                        :key="branchInd + 100"
                      >
                        <p class="text-center">
                          {{ branch.title }}
                        </p>
                        <div
                          class="
                            d-flex
                            justify-content-around
                            align-items-center
                            branch-link
                          "
                        >
                          <p class="m-0">فتح موقع الكليه</p>
                          <a
                            class="btn btn-outline-primary"
                            :href="branch.link"
                            target="_blank"
                            >التسجيل</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pageTitle: "",
      service: {},
      filteredSectors: [],
      searchWord: "",
      branch: null,
    };
  },
  watch: {
    $route(nr) {
      if (nr) {
        this.pageTitle = nr.params.title;
        this.service = this.services.find(
          (serve) => serve.id == this.$route.params.serve_id
        );
        this.filteredSectors = this.sectors;
      }
    },
  },
  mounted() {
    this.pageTitle = this.$route.params.title;
    this.service = this.services.find(
      (serve) => serve.id == this.$route.params.serve_id
    );
    this.filteredSectors = this.sectors;
  },
  methods: {
    filterSectors() {
      let filtered = [];
      filtered = this.sectors.filter((sector) => {
        for (let index = 0; index < sector.types.length; index++) {
          const element = sector.types[index];
          for (let iter = 0; iter < element.branches.length; iter++) {
            const branch = element.branches[iter];
            if (
              branch.title.startsWith(this.searchWord) ||
              branch.title.includes(this.searchWord)
            ) {
              this.branch = branch;
              return sector;
            }
          }
        }
      });
      this.filteredSectors = filtered;
    },
  },
  computed: {
    ...mapGetters(["services", "sectors"]),
  },
};
</script>

<style>
</style>