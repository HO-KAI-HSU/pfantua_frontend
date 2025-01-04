import api from './api'

export default {
    products: {},

    async reload() {
        this.products = await api.getCouponProducts();
    },

    hasCoupon(productID) {
        return this.products[productID] != undefined;
    },

    addTag(products, tag) {
        if (!tag) {
            tag = "折價券";
        }
        products.forEach(p => {
            if (this.products[p.ProductID]) {
                if (!p.Tags) {
                    p.Tags = [];
                }
                p.Tags.push(tag);
            }
        });
    }
}