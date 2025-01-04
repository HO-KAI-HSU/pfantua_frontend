import decimal from 'decimal.js'
import api from './api'

export default {
    newCoupons: [],
    usedCoupons: [],
    couponMap: {},
    categoryMap: {},

    load() {
        return new Promise(async (resolve, reject) => {
            if (this.usedCoupons.length != 0 || this.newCoupons.length != 0) {
                resolve();
                return;
            }

            await this.reload();
            resolve();
        });
    },
    reload() {
        return new Promise(async (resolve, reject) => {
            var data = await api.getMyCoupon();
            this.newCoupons = [];
            this.usedCoupons = [];
            if (!data.Categories) {
                resolve();
                return;
            }
            var cids = [];
            data.Categories.forEach(c => cids.push(c.CategoryID));
            var cmap = {};

            var cats = await api.getAllActiveCategories();
            cats.forEach(c => {
                cmap[c.CategoryID] = c;
            });

            var map = {};
            data.Categories.forEach(c => {
                c.IsCategory = true;
                if (!map[c.CouponID]) {
                    map[c.CouponID] = c;
                    c.Categories = [cmap[c.CategoryID]];
                    c.CategoryNames = [cmap[c.CategoryID].CategoryName];
                    c.CategoryMap = {};
                    c.CategoryMap[c.CategoryID] = true;
                    c.Products = [];
                    c.ProductMap = {};
                } else {
                    map[c.CouponID].Categories.push(cmap[c.CategoryID]);
                    map[c.CouponID].CategoryMap[c.CategoryID] = true;
                    if (map[c.CouponID].CategoryNames.length < 5) {
                        map[c.CouponID].CategoryNames.push(cmap[c.CategoryID].CategoryName);
                    }
                }
            });
            data.Products.forEach(c => {
                c.IsCategory = false;
                if (!map[c.CouponID]) {
                    map[c.CouponID] = c;
                    c.Products = [c];
                    c.ProductMap = {};
                    c.ProductMap[c.ProductID] = true;
                } else {
                    map[c.CouponID].Products.push(c);
                    map[c.CouponID].ProductMap[c.ProductID] = true;
                }
            });
            data.Coupons.forEach(c => {
                $.extend(c, map[c.CouponID]);
                if (!c.Used && moment().isBefore(moment(c.EndTime))) {
                    this.newCoupons.push(c);
                } else {
                    this.usedCoupons.push(c);
                }
                if (c.IsCategory) {
                    c.CategoryName = c.CategoryNames.join("/");
                }
            });
            this.couponMap = map;
            this.categoryMap = cmap;
            resolve(this);
        });
    },
    getAvailable(productID, price, categoryIDs) {
        var ret = [];
        this.newCoupons.forEach(c => {
            if (c.ProductMap[productID]) {
                if (price >= c.MinPrice) {
                    ret.push(c);
                }
            } else if (c.Categories && c.Categories.length > 0 && categoryIDs) {
                categoryIDs.forEach(categoryID => {
                    do {
                        if (c.CategoryMap[categoryID]) {
                            if (price >= c.MinPrice) {
                                ret.push(c);
                            }
                            break;
                        }
                        categoryID = this.categoryMap[categoryID] !== undefined ? this.categoryMap[categoryID].ParentCategoryID : 0;
                    } while (categoryID);
                });
            }
        });
        return ret;
    },
    calcPrice(product, coupon) {
        if (coupon) {
            if (coupon.DiscountType == 0) {
                return Math.min( coupon.DiscountValue, coupon.MaxDiscount);
            } else {
                return Math.min(new decimal(product.Price).times(coupon.DiscountValue).dividedBy(100).toFixed(0), coupon.MaxDiscount);
            }
        } else {
            return 0;
        }
    }

}