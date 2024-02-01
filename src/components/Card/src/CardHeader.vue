<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardHeader',
  setup(props, { attrs, slots }) {
    return () => <div class="flex flex-col space-y-1.5" {...attrs}>{slots.default()}</div>
  }
})
</script>
