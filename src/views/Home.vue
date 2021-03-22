<template>
  <div class="home">
    <p class="foo" v-if="emitted">Emitted!</p>
    <Counter @custom="onCustom" />
    <br>
    <ProductDetails :product="product"  />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "@/components/Counter.vue";
import ProductDetails  from '@/components/ProductDetails.vue'
import { Product } from "@/types";

@Component({
  components: {
    Counter,
    ProductDetails
  },
})
export default class Home extends Vue {
  public emitted = false;
  public product: Product = {
    id: 1,
    name: "Test Product",
    description: "This is a test product",
  };
  public onCustom(): void {
    this.emitted = !this.emitted
  }
}
</script>
