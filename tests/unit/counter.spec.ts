import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Counter from '@/components/Counter.vue'

test('emit demo', async() =>{
    const wrapper = mount(Home)
    const getCounterData = wrapper.findComponent(Counter)
    getCounterData.vm.$emit('custom')
    await getCounterData.vm.$nextTick()
    const text = wrapper.find('p.foo')
    console.log(text.text())
})