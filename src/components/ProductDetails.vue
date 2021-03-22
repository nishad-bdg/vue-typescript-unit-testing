<template>
  <div>
      <div class="columns">
          <div class="column">
              <div class="title">{{ product.name }}</div>
              <p class="description">{{ product.description }}</p>
          </div>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Product } from '@/types'

@Component({
    name:'ProductDetails'
})
export default class ProductDetails extends Vue{
    @Prop() product!:Product

}
</script>