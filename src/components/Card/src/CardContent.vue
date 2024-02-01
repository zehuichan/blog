<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardContent',
  setup(props, { attrs, slots }) {
    return () => <div class="text-pretty text-muted-foreground">{slots.default()}</div>
  }
})
</script>
