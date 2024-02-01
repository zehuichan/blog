<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardTitle',
  setup(props, { attrs, slots }) {
    return () => <div class="text-2xl font-semibold tracking-tight" {...attrs}>{slots.default()}</div>
  }
})
</script>
