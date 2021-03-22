<template>
    <div>
        <button class="emitted" @click="custom">Emit</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
@Component({
    name:'Counter'
})
export default class Counter extends Vue{
    @Emit('custom')
    public custom():void{
        console.log('custom custom')
    }
}
</script>