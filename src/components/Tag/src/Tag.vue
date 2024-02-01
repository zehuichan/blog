<script lang="jsx">
import { computed, defineComponent, unref } from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    size: String,
    light: Boolean,
  },
  setup(props, { slots }) {
    const cn = computed(() => {
      const { size, light } = props
      const result = {}
      if (size) {
        result['tag--' + size] = true
      }
      if (light) {
        result['is-light-bg'] = true
      }
      return result
    })
    return () => <div class={['tag font-mono', unref(cn)]}>{slots.default()}</div>
  }
})
</script>

<style lang="scss">
.tag {
  border-radius: 4px;
  padding: 3px 6px;
  background-color: rgba(142, 150, 170, .14);
  color: #3451b2;
  transition: color .25s, background-color .5s;
  font-size: 12px;
  text-wrap: nowrap;

  &.is-light-bg {
    color: hsl(var(--secondary-foreground));
    background-color: hsl(var(--secondary));
  }
}
</style>
