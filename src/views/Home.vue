<template>
  <div class="home">
    <p class="foo" v-if="emitted">Emitted!</p>
    <Counter @custom="onCustom" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "@/components/Counter.vue";

@Component({
  components: {
    Counter,
  },
})
export default class Home extends Vue {
  public emitted = false;
  public onCustom(): void {
    this.emitted = true;
  }
}
</script>
