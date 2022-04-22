import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: [
      {
        id: 1,
        title: "تسجيل طالب وافد (مستجد)",
        desc: "تسجيل طالب وافد (مستجد) من خلال المنصه الذكيه",
        link: "RegisterStudent",
        image: require("../assets/images/student-1.png"),
      },
      {
        id: 2,
        title: "تسجيل طالب وافد (حالى)",
        desc: "تسجيل طالب وافد (حالى) من خلال المنصه الذكيه",
        link: "RegisterStudent",
        image: require("../assets/images/student-1.png"),

      },
      {
        id: 3,
        title: "تسجيل طالب مصرى (مستجد)",
        desc: "تسجيل طالب مصرى (حالى) من خلال المنصه الذكيه",
        link: "RegisterStudent",
        image: require("../assets/images/student-2.png"),
      },
      {
        id: 4,
        title: "تسجيل طالب مصرى (حالى)",
        desc: "تسجيل طالب مصرى (حالى) من خلال المنصه الذكيه",
        link: "RegisterStudent",
        image: require("../assets/images/student-2.png"),
      },

      {
        id: 5,
        title: "استعلام الكود الجامعى الموحد – طالب مستجد الفرقة الاولى",
        desc: "بكل سهوله يمكنك الان الاستعلام عن الكود الجامعى الموحد",
        link: "NewStudent",
        image: require("../assets/images/tech.png"),
      },
    ],
    sectors: [
      {
        title: "قطاع اسلامى اللغة العربية",
        types: [
          {
            name: "بنين",
            branches: [
              {
                title: "اللغة العربية اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=46&t=3"
              },
              {
                title: "اللغة العربية الزقازيق",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=47&t=3"
              },
              {
                title: "اللغة العربية القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=48&t=3"
              },
              {
                title: "اللغة العربية المنصورة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=49&t=3"
              },
              {
                title: "اللغة العربية بايتاى البارود بحيرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=50&t=3"
              },
              {
                title: "اللغة العربية بشبين الكوم",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=51&t=3"
              },
              {
                title: "اللغة العربية جرجا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=52&t=3"
              },


            ]
          }
        ]
      },
      {
        title: "قطاع اسلامى اصول الدين",
        types: [
          {
            name: "بنين",
            branches: [
              {
                title: "اصول الدين القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=1&t=3"
              },
              {
                title: "اصول الدين والدعوة اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=2&t=3"
              },
              {
                title: "اصول الدين والدعوة الزقازيق",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=3&t=3"
              },
              {
                title: "اصول الدين والدعوة المنصورة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=4&t=3"
              },
              {
                title: "اصول الدين والدعوة شبين الكوم",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=5&t=3"
              },
              {
                title: "اصول الدين والدعوة طنطا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=6&t=3"
              },
            ]
          }
        ]
      },
      {
        title: "قطاع اسلامى دراسات اسلامية وعربية",
        types: [
          {
            name: "بنين",
            branches: [
              {
                title: "الدراسات الاسلامية بنين اسوان",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=14&t=3"
              },
              {
                title: "الدراسات الاسلامية والعربية بنين القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=21&t=3"
              },
              {
                title: "الدراسات الاسلامية والعربية بنين دسوق كفر الشيخ",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=22&t=3"
              },
              {
                title: "الدراسات الاسلامية والعربية بنين دمياط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=23&t=3"
              },
              {
                title: "الدراسات الاسلامية والعربية بنين ديدامون الشرقية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=24&t=3"
              },
              {
                title: "الدراسات الاسلامية والعربية بنين قنا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=25&t=3"
              },
              {
                title: "الدعوة الاسلامية القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=28&t=3"
              },
              {
                title: "العلوم الاسلامية الازهرية بنين",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=107&t=3"
              },
              {
                title: "العلوم الازهرية جنوب سيناء بنين شعبة اللغة العربية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=110&t=3"
              },
            ]
          },
          {
            name: "بنات",
            branches: [
              {
                title: "البنات الاسلامية اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=8&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية بنات الاسكندرية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=15&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية بنات الزقازيق",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=16&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية بنات المنصورة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=17&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=18&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية بنات بنى سويف",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=19&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية بنات سوهاج",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=20&t=4"
              },
              {
                title: "كلية البنات الازهرية بأسوان",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=62&t=4"
              },
              {
                title: "كلية البنات الازهرية بالعاشر من رمضان",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=63&t=4"
              },
              {
                title: "كلية البنات الازهرية بالمنيا الجديدة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=64&t=4"
              },
              {
                title: "كلية البنات الازهرية بطيبة الجديدة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=65&t=4"
              },
              {
                title: "كلية الدراسات الاسلامية والعربية ببورسعيد",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=73&t=4"
              },
              {
                title: "كلية الدراسات الاسلامية والعربية بكفر الشيخ",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=74&t=4"
              },
              {
                title: "كلية الدراسات الاسلامية والعربية بمدينة الخانكة بالقليوبية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=75&t=4"
              },
              {
                title: "كلية الدراسات الاسلامية والعربية بمدينة السادات بالمنوفية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=76&t=4"
              },
              {
                title: "كلية الدراسات الاسلامية والعربية بمدينة القرين بالشرقية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=77&t=4"
              },
              {
                title: "معهد معاوني القضاء بكلية الدراسات الاسلامية والعربية بنات باالمنصورة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=95&t=4"
              },
              {
                title: "معهد معاوني القضاء بكلية الدراسات الاسلامية والعربية بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=96&t=4"
              },
              {
                title: "الدراسات الاسلامية والعربية للبنات بدمنهور",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=106&t=4"
              },
              {
                title: "العلوم الاسلامية الازهرية بنات",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=108&t=4"
              },
              {
                title: "العلوم الازهرية جنوب سيناء بنات",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=109&t=4"
              },
            ]
          }
        ]
      },
      {
        title: "قطاع تطبيقى",
        types: [
          {
            name: "بنين",
            branches: [
              {
                title: "الزراعة بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=29&t=3"
              },
              {
                title: "الزراعة بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=30&t=3"
              },
              {
                title: "الصيدلة بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=36&t=3"
              },
              {
                title: "الصيدلة للبنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=37&t=3"
              },
              {
                title: "الطب بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=39&t=3"
              },
              {
                title: "الطب بنين دمياط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=40&t=3"
              },
              {
                title: "الطب للبنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=41&t=3"
              },
              {
                title: "العلوم بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=43&t=3"
              },
              {
                title: "العلوم للبنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=44&t=3"
              },
              {
                title: "طب الاسنان بنين باسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=59&t=3"
              },
              {
                title: "طب الاسنان بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=60&t=3"
              },
              {
                title: "كلية الزراعة بنين بالقاهرة فصول السادات بالمنوفية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=78&t=3"
              },
              {
                title: "كلية الهندسة الزراعية بنين القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=81&t=3"
              },
              {
                title: "كلية الهندسة الزراعية بنين بالقاهرة فصول اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=82&t=3"
              },
              {
                title: "معهد اعداد فني التحاليل البيولوجية بكلية العلوم بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=86&t=3"
              },
              {
                title: "معهد اعداد فني التحاليل البيولوجية بكلية العلوم بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=88&t=3"
              },
              {
                title: "معهد اعداد فني المختبرات بكلية العلوم بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=90&t=3"
              },
              {
                title: "معهد اعداد فني المختبرات بكلية العلوم بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=91&t=3"
              },
              {
                title: "معهد اعداد فني قواعد البيانات بكلية العلوم بنين اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=93&t=3"
              },
              {
                title: "معهد اعداد فني قواعد البيانات بكلية العلوم بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=94&t=3"
              },
            ]
          },
          {
            name: "بنات",
            branches: [
              {
                title: "الصيدلة بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=35&t=4"
              },
              {
                title: "الطب بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=38&t=4"
              },
              {
                title: "العلوم بنات القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=42&t=4"
              },
              {
                title: "المعهد الفني للتمربض بمستشفي كلية طب الأزهر بأسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=53&t=4"
              },
              {
                title: "المعهد الفني للتمريض بمستشفي جامعة الازهر التخصصي الجديدة بمدينة نصر",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=54&t=4"
              },
              {
                title: "طب الاسنان بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=58&t=4"
              },
              {
                title: "كلية التمريض للبنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=72&t=4"
              },
              {
                title: "كلية الصيدلة بنات اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=79&t=4"
              },
              {
                title: "كلية طب بنات اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=84&t=4"
              },
              {
                title: "كلية طب بنات دمياط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=85&t=4"
              },
              {
                title: "معهد اعداد فني التحاليل البيولوجية بكلية العلوم بنات القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=87&t=4"
              },
              {
                title: "معهد اعداد فني المختبرات بكلية العلوم بنات القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=89&t=4"
              },
              {
                title: "معهد اعداد فني قواعد البيانات بكلية العلوم بنات القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=92&t=4"
              },
            ]
          }
        ]
      },
      {
        title: "قطاع انسانى",
        types: [
          {
            name: "بنين",
            branches: [
              {
                title: "التجارة بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=11&t=3"
              },
              {
                title: "التربية بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=12&t=3"
              },
              {
                title: "التربية بنين تفهنا الاشراف دقهلية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=13&t=3"
              },
              {
                title: "اللغات والترجمة القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=45&t=3"
              },
              {
                title: "الهندسة بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=55&t=3"
              },
              {
                title: "الهندسة بنين قنا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=56&t=3"
              },
              {
                title: "كلية الإعلام للبنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=61&t=3"
              },
              {
                title: "كلية التربية الرياضية للبنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=68&t=3"
              },
              {
                title: "كلية التربية بنين بأسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=71&t=3"
              },
              {
                title: "معهد نظم المعلومات الادارية بكلية التجارة بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=105&t=3"
              },
            ]
          },
          {
            name: "بنات",
            branches: [
              {
                title: "الاقتصاد المنزلى طنطا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=7&t=4"
              },
              {
                title: "التجارة بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=9&t=4"
              },
              {
                title: "التجارة بنات تفهنا الاشراف دقهلية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=10&t=4"
              },
              {
                title: "الدراسات الانسانية بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=26&t=4"
              },
              {
                title: "الدراسات الانسانية بنات تفهنا الاشراف دقهلية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=27&t=4"
              },
              {
                title: "كلية التجارة بنات بأسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=66&t=4"
              },
              {
                title: "كلية التربية الرياضية بنات بالخانكة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=67&t=4"
              },
              {
                title: "كلية التربية بنات بأسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=69&t=4"
              },
              {
                title: "كلية التربية بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=70&t=4"
              },
              {
                title: "كلية الهندسة بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=83&t=4"
              },
              {
                title: "معهد نظم المعلومات الادارية بكلية التجارة بنات باسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=102&t=4"
              },
              {
                title: "معهد نظم المعلومات الادارية بكلية التجارة بنات بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=103&t=4"
              },
              {
                title: "معهد نظم المعلومات الادارية بكلية التجارة بنات بتفهنا الاشراف",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=104&t=4"
              },
            ]
          }
        ]
      },
      {
        title: "قطاع الشريعة والقانون",
        types: [
          {
            name: "بنين",
            branches: [
              {
                title: "الشريعة والقانون اسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=31&t=3"
              },
              {
                title: "الشريعة والقانون بتفهنا الاشراف دقهلية",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=32&t=3"
              },


              {
                title: "الشريعة والقانون دمنهور",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=33&t=3"
              },

              {
                title: "الشريعة والقانون طنطا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=34&t=3"
              },
              {
                title: "شريعة وقانون القاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=57&t=3"
              },
              {
                title: "كلية القران الكريم وعلومها بطنطا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=80&t=3"
              },
              {
                title: "معهد معاوني القضاء بكلية الشريعة والقانون بنين باسيوط",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=97&t=3"
              },
              {
                title: "معهد معاوني القضاء بكلية الشريعة والقانون بنين بالقاهرة",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=98&t=3"
              },
              {
                title: "معهد معاوني القضاء بكلية الشريعة والقانون بنين بتفهنا الاشراف",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=99&t=3"
              },
              {
                title: "معهد معاوني القضاء بكلية الشريعة والقانون بنين بدمنهور",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=100&t=3"
              },
              {
                title: "معهد معاوني القضاء بكلية الشريعة والقانون بنين بطنطا",
                link: "https://azulearn-sys.alazhar.edu.eg/paymentaaib/newandreg.php?col_id=101&t=3"
              },
            ]
          }
        ]
      }
    ]
  },
  getters: {
    services: (state) => state.services,
    sectors: (state) => state.sectors
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
