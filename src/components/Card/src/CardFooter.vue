<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardFooter',
  setup(props, { attrs, slots }) {
    return () => <div class="flex items-center" {...attrs}>{slots.default()}</div>
  }
})
</script>
