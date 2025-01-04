import Vue from 'vue'
import store from '../plugins/store'
import $ from "jquery";

export default Vue.directive('auth', {
    bind: function (el, binding, vnode) {
        if (!store.user.isAuth){
            store.user.isAuth = function (key) {
                var user = store.user;
                key = key.replace(/'/g, '');
                if (key.indexOf(',') > 0) {
                    if (user.role) {
                        var ks = key.split(',');
                        console.log(ks);
                        for (var k in ks) {
                            if (user.role.indexOf(ks[k]) >= 0) {
                                return true;
                            }
                        }
                    }
                    return false;
                } else {
                    return user.role && user.role.indexOf(key) >= 0;
                }
            };
        }
        if (!store.user.isAuth(binding.expression)) {
            setTimeout(function () {
                $(el).remove();
            });
        }
    }
});