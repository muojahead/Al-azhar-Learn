<template>
  <div class="app-header">
    <div class="sub-header">
      <div class="container">
        <div class="socials">
          <a
            href="https://www.facebook.com/azulearn.alazhar.edu.eg"
            target="_blnak"
          >
            <fa :icon="['fab', 'facebook-f']" />
          </a>
          <a href="https://twitter.com" target="_blnak">
            <fa :icon="['fab', 'twitter']" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCVtiwlx7pzUXUmngkk2BH2g"
            target="_blnak"
          >
            <fa :icon="['fab', 'youtube']" />
          </a>
        </div>
        <div class="date">
          {{
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate()
          }}
        </div>
        <!-- <div class="search">
          <form @submit.prevent>
            <div class="search-input">
              <input type="text" placeholder="ابحث عن اي شئ..." />
              <button class="btn-primary btn">
                <fa :icon="['fa', 'search']" />
              </button>
            </div>
          </form>
        </div> -->
        <!-- <div class="log-in">
          <button class="btn btn-outline-primary">
            <fa :icon="['fa', 'sign-in']" />
            تسجيل الدخول
          </button>
          <button class="mx-2 btn btn-primary">
            <fa :icon="['fa', 'user-plus']" />
            الانضمام
          </button>
        </div> -->
      </div>
    </div>
    <div class="main-cover">
      <img src="../../assets/images/logo.png" alt="App Cover" />
    </div>
    <div class="links">
      <div class="container h-100 p-0">
        <div class="menu" @click="menu = !menu">
          <fa size="sm" class="mx-1 mb-2" :icon="['fa', 'list']" />
          القائمة
        </div>
        <ul :class="menu ? 'active' : ''">
          <router-link
            class="link"
            active-class="active"
            :to="{ name: link.link }"
            exact
            v-for="(link, linkInd) in links"
            :key="linkInd"
          >
            {{ link.name }}
          </router-link>
          <li
            class="link"
            v-for="(slink, slinkInd) in subLinks"
            :key="slinkInd + 5"
          >
            {{ slink.title }}
            <fa :icon="['fa', 'chevron-down']" size="sm" class="mx-2" />
            <ul>
              <router-link
                :to="{
                  name: ln.link,
                  params: {
                    title: ln.name,
                    serve_id: ln.pageData.service_id,
                  },
                }"
                exact
                active-class="active"
                class="d-block text-nowrap"
                v-for="ln in slink.links"
                :key="ln.name"
                >{{ ln.name }}</router-link
              >
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // document.body.style.paddingTop =
    //   document.querySelector(".app-header").clientHeight + "px";
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY >= 30) {
    //     document.querySelector(".app-header").classList.add("active");
    //   } else {
    //     document.querySelector(".app-header").classList.remove("active");
    //   }
    // });
  },
  data() {
    return {
      today: new Date(),
      links: [
        {
          name: "الرئيسية",
          link: "Home",
        },
        {
          name: "عن المنصة",
          link: "About",
        },
      ],
      menu: false,
      subLinks: [
        {
          title: "الطلاب المصريين",
          links: [
            {
              name: "تسجيل طالب مصري(مستجد)",
              link: "RegisterStudent",
              pageData: {
                service_id: 3,
              },
            },
            {
              name: "تسجيل طالب مصري(حالي)",
              link: "RegisterStudent",
              pageData: {
                service_id: 4,
              },
            },
          ],
        },

        {
          title: "الطلاب الوافدين",
          links: [
            {
              name: "تسجيل طالب وافد(مستجد)",
              link: "RegisterStudent",
              pageData: {
                service_id: 1,
              },
            },
            {
              name: "تسجيل طالب وافد(حالي)",
              link: "RegisterStudent",
              pageData: {
                service_id: 2,
              },
            },
          ],
        },
      ],
    };
  },
  watch: {
    $route(nr) {
      if (nr) {
        this.menu = false;
      }
    },
  },
};
</script>

<style>
</style>