import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../types'

export default defineComponent({
  name: 'NumberField',
  props: FiledPropsDefine,
  setup() {
    return () => {
      return <div>NumeberField</div>
    }
  },
})
