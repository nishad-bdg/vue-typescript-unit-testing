import { mount } from '@vue/test-utils'
import ProductDetails from '@/components/ProductDetails.vue'
import { Product } from '@/types'

test('displays product details', () => {
    const product: Product = {
        id: 1,
        name: "Test Product",
        description: "This is a test product",
    }
    const wrapper = mount(ProductDetails, {
        propsData: {
            product
        }
    })
    expect(wrapper.text()).toContain(product.name)
})