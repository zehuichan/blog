<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
  setup(props, { slots }) {
    return () => <section class="flex min-h-0 flex-col gap-y-3">{slots.default()}</section>
  }
})
</script>
