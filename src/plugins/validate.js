
import $ from "jquery";
import Vue from 'vue'

const ErrorClass = 'has-error';
Vue.prototype.validate = function (id) {
    var els = $('[required]', $(id));
    var first = null;
    var getParent = e => {
        var p = $(e).parent();
        while (!p.hasClass('formRow')) {
            p = $(p).parent();
        }
        return p;
    };
    for (var i in els) {
        var tag = els[i].tagName;
        if (tag) {
            tag = tag.toLowerCase();

            var e = $(els[i]);
            var p = getParent(e);
            if (!e.val()) {
                p.addClass(ErrorClass);
                if (first == null) {
                    first = e;
                }
            } else {
                p.removeClass(ErrorClass);
            }
        }
    }

    els = $('[validate-regex]', $(id));
    for (var i in els) {
        var tag = els[i].tagName;
        if (tag) {
            tag = tag.toLowerCase();

            var e = $(els[i]);
            var p = getParent(e);
            var regex = new RegExp(e.attr('validate-regex'));
            if (regex.test(e.val())) {
                p.removeClass(ErrorClass);
            } else {
                p.addClass(ErrorClass);
                if (first == null) {
                    first = e;
                }
            }
        }
    }
    if (first != null) {
        first.focus();
    } else {
        return true;
    }
}