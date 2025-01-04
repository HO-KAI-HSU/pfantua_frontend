import storage from './storage'
import Vue from 'vue'
import $ from 'jquery'

const CartKey = 'Car1Cart';
const CartGiftKey = 'Car1Gifts';
const CartPointKey = 'Car1Point';
const CartAdditionalKey = 'Car1Additional';

const OVER_LIMIT_COUNT = '已超過可購買的最大數量';
const ADD_CART_SUCCESS = "已加入購物車了";

var oc = storage.get(CartKey);
if (!oc) {
    oc = [];
}
export default {

    updateHandler: [],

    cart: oc,
    gifts: storage.get(CartGiftKey) || [],
    usedPoint: storage.get(CartPointKey) || 0,
    additional: storage.get(CartAdditionalKey) || [],

    addOnUpdateHandler(callback) {
        for (var k in this.updateHandler) {
            if (this.updateHandler[k] == callback) {
                return;
            }
        }
        this.updateHandler.push(callback);

        callback(this);
    },

    removeOnUpdateHandler(callback) {
        this.updateHandler.remove(callback);
    },

    raiseOnUpdate() {
        this.updateHandler.forEach(handler => {
            handler(this);
        });
    },

    add(productID, count) {
        return new Promise(async (resolve, reject) => {
            var found = false;
            for (var k in this.cart) {
                var p = this.cart[k];
                if (p.ProductID == productID) {
                    p.Count += count;
                    found = true;
                    if (p.Count > p.LimitCount) {
                        alert(OVER_LIMIT_COUNT);
                        p.Count = p.LimitCount;
                    } else {
                        alert(ADD_CART_SUCCESS);
                    }
                    break;
                }
            }
            if (!found) {
                var p = await window.$api.getCartProduct([productID]);
                var pd = p.Product;
                pd.Combination = p.Combination;
                pd.Stock = p.Stock.Stock;
                pd.Tags = p.Tag;
                pd.Count = count;
                pd.Gift = [];
                p.Gift.forEach(g => {
                    g.Count = Math.min(g.Stock, g.OriginalCount * count);
                    if (g.Count > 0)
                        pd.Gift.push(g);
                });
                pd.SalePrice = pd.Price;
                if (pd.Count > pd.LimitCount) {
                    alert(OVER_LIMIT_COUNT);
                    pd.Count = pd.LimitCount;
                } else {
                    alert(ADD_CART_SUCCESS);
                }
                this.cart.push(pd);
            }
            this.save();
            resolve();
            this.raiseOnUpdate();
        });
    },
    addProduct(product) {
        this.cart.push(product);
        this.save();
        this.raiseOnUpdate();
    },
    addAdditional(productID, count) {
        return new Promise(async (resolve, reject) => {
            var found = false;
            for (var k in this.additional) {
                var p = this.additional[k];
                if (p.ProductID == productID) {
                    p.Count += count;
                    found = true;
                    break;
                }
            }
            if (!found) {
                var p = await window.$api.getAdditionalProduct(productID);
                var pd = p.Product;
                pd.Stock = p.Stock.Stock;
                pd.Count = count;
                pd.SalePrice = pd.Price;
                this.additional.push(pd);
            }
            storage.set(CartAdditionalKey, this.additional);
            resolve();
            this.raiseOnUpdate();
        });
    },
    updateAdditionalProduct(productID, count) {
        var p = this.getAdditionalProduct(productID);
        if (p) {
            p.Count = count;
        }
        storage.set(CartAdditionalKey, this.additional);

        this.raiseOnUpdate();
    },
    updateProduct(product) {
        var p = this.get(product.ProductID);
        $.extend(p, product);
        this.save();
        this.raiseOnUpdate();
    },
    upadteCount(productID, count) {
        var p = this.get(productID);
        if (p) {
            p.Count = count;
            p.Gift.forEach(g => {
                g.Count = Math.min(g.Stock, g.OriginalCount * count);
            });
        }
        this.save();
        this.raiseOnUpdate();
    },
    remove(productID, couponID) {
        if (couponID) {
            var ps = this.getProducts(productID);
            ps.forEach(c => {
                if (c.CouponID == couponID) {
                    this.cart.remove(c);
                }
            });
            this.save();
            this.raiseOnUpdate();
        } else {
            var p = this.get(productID);
            if (p) {
                this.cart.remove(p);
                this.save();
                this.raiseOnUpdate();
            }
        }
    },
    removeAdditional(productID) {
        var p = this.getAdditionalProduct(productID);
        if (p) {
            this.additional.remove(p);
            storage.set(CartAdditionalKey, this.additional);
            this.raiseOnUpdate();
        }
    },
    get(productID) {
        for (var k in this.cart) {
            var p = this.cart[k];
            if (p.ProductID == productID && !p.CouponID) {
                return p;
            }
        }
        return null;
    },
    getAdditionalProduct(productID) {
        for (var k in this.additional) {
            var p = this.additional[k];
            if (p.ProductID == productID && !p.CouponID) {
                return p;
            }
        }
        return null;
    },
    getProducts(productID) {
        var ps = [];
        this.cart.forEach(c => {
            if (c.ProductID == productID) {
                ps.push(c);
            }
        });
        return ps;
    },
    async updateStocks() {
        var carts = [];
        console.log(this.cart);
        for (const cp of this.cart) {
            var p = await window.$api.getCartProduct([cp.ProductID]);
            var pd = p.Product;
            pd.Combination = p.Combination;
            pd.Stock = p.Stock.Stock;
            pd.Tags = p.Tag;
            pd.Count = Math.min(cp.Count, pd.Stock);
            pd.CouponID = cp.CouponID;
            pd.Discount = cp.Discount;
            pd.Gift = [];
            p.Gift.forEach(g => {
                g.Count = Math.min(g.Stock, g.OriginalCount * cp.Count);
                if (g.Count > 0)
                    pd.Gift.push(g);
            });
            pd.SalePrice = pd.Price;
            carts.push(pd);
        }
        this.updateGifts();
        this.cart = carts;
        this.save();
    },
    getCart() {
        return JSON.parse(JSON.stringify(this.cart))
    },
    getGift() {
        return JSON.parse(JSON.stringify(this.gifts))
    },
    getAdditional() {
        return JSON.parse(JSON.stringify(this.additional))
    },
    clear() {
        this.cart = [];
        storage.remove(CartKey);
        storage.remove(CartGiftKey);
        storage.remove(CartPointKey);
        storage.remove(CartAdditionalKey);
        this.raiseOnUpdate();
    },
    clearAdditional() {
        this.additional = [];
        storage.remove(CartAdditionalKey);
        this.raiseOnUpdate();
    },
    update(func) {
        func(this.cart);
        this.save();
        this.raiseOnUpdate();
    },
    async updateGifts() {
        var ps = [];
        var order = {
            Products: []
        };
        this.cart.forEach(c => {
            ps.push({
                ProductID: c.ProductID,
                Count: c.Count
            });
            order.Products.push({
                ProductID: c.ProductID,
                Count: c.Count,
                CouponID: c.CouponID
            });
        });
        var [result, presult] = await Promise.all([window.$api.getEventCountGift({ Products: ps }), window.$api.getEventPriceGift(order)]);
        var gifts = [];
        var products = {};
        var pmap = {};
        this.cart.forEach(p => {
            pmap[p.ProductID] = p;
            p.EventGifts = [];
        });
        result.Products.forEach(p => products[p.ProductID] = p);
        result.Content.forEach(c => {
            c.Gifts.forEach(p => {
                var pd = products[p.ProductID];
                pd.Count = p.Count;
                gifts.push(pd);
                pmap[c.ParentProductID].EventGifts.push(pd);
            });
        });
        this.save();

        gifts = [];
        presult.Products.forEach(p => products[p.ProductID] = p);
        presult.Content.forEach(c => {
            c.Gifts.forEach(p => {
                var pd = products[p.ProductID];
                pd.Count = p.Count;
                gifts.push(pd);
            });
        });
        this.gifts = gifts;
        storage.set(CartGiftKey, this.gifts);

        this.raiseOnUpdate();
    },
    save() {
        storage.set(CartKey, this.cart);
    },
    getPoint() {
        return this.usedPoint;
    },
    usePoint(point) {
        this.usedPoint = point;
        storage.set(CartPointKey, this.usedPoint);
    },
    isAllNoShipFee(){
       return this.cart.filter(x=>!x.NoShipFee).length == 0;
    }
}