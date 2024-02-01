<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardDescription',
  setup(props, { attrs, slots }) {
    return () => <div class="text-sm text-muted-foreground">{slots.default()}</div>
  }
})
</script>
