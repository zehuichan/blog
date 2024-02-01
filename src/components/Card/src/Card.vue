<script lang="jsx">
import { computed, defineComponent, unref } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    size: String,
    bg: Boolean
  },
  setup(props, { slots }) {
    const cn = computed(() => {
      const { size, bg } = props
      const result = {}
      if (size) {
        result['card--' + size] = true
      }
      if (bg) {
        result['is-has-bg'] = true
      }
      return result
    })
    return () => <div class={['card rounded-lg bg-card text-card-foreground', unref(cn)]}>{slots.default()}</div>
  }
})
</script>

<style lang="scss">
.card {
  &.is-has-bg {
    border-radius: 4px;
    background-color: #f6f6f7;
    padding: 1em;
  }

  &.repository {
    border: 1px solid #e5e7eb;
  }
}
</style>
