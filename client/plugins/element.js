import Vue from 'vue'
import { Form, FormItem } from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [Form, FormItem]
const Element = {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}
Vue.use(Element, { locale })
