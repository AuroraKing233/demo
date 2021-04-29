import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper2, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Lazy,
} from 'swiper'
Vue.use(VueAwesomeSwiper)
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay, Lazy])
