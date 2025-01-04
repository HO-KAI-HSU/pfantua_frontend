import Vue from 'vue'
import moment from 'moment'

window.filters = {};

Vue.filter('commaFormat', function (value) {
    if (value) {
        return value.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
            return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
        });
    } else {
        return value;
    }
});

Vue.filter('limit', function (arr, length, include) {
    if (include) {
        length++;
    }

    if (arr && arr.length) {
        if (length == -1) {
            return arr;
        }
        if (length > arr.length) {
            return arr;
        }
        return arr.slice(0, length);
    }

    return null;
});

function padLeft(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

Vue.filter('orderid', function (value) {
    if (value && value.OrderSN) {
        return value.OrderSN;
    }
    if (value && value.CreateTime && value.OrderID) {
        return moment(value.CreateTime).format('YYYYMMDD') + padLeft(value.OrderID, 6);
    } else {
        return value;
    }
});

Vue.filter('padLeft', function (value, n) {
    return padLeft(value, n);
});

Vue.filter('dateFormat', function (value) {
    return moment(value).format("YYYY/MM/DD");
});

Vue.filter('dateTimeFormat', function (value) {
    return moment(value).format("YYYY/MM/DD HH:mm");
});

window.filters.imageCDN = function (value) {
    if (value) {
        if (value.indexOf('http') == 0) {
            return value;
        } else {
            return config.imageHost + value;
        }
    }
    return value;
}
Vue.filter('imageCDN', window.filters.imageCDN);

window.filters.contentCDN = function (value) {
    if (value) {
        if (value.indexOf('http') == 0) {
            return value;
        } else {
            return config.contentHost + value;
        }
    }
    return value;
}
Vue.filter('contentCDN', window.filters.contentCDN);

window.filters.toCHHMMSS = function (value) {
    return new Date(value * 1000).toISOString().substr(11, 8).replace(/^(\d{2}):(\d{2}):(\d{2})$/g, "$1時$2分$3秒").replaceAll(/00./g, '')
}
Vue.filter('chhmmss', window.filters.toCHHMMSS);

window.filters.toHHMMSS = function (value) {
    return new Date(value * 1000).toISOString().substr(11, 8)
}
Vue.filter('hhmmss', window.filters.toCHHMMSS);

window.filters.toMMSS = function (value) {
    return Math.floor(value / 60) + ":" + (value % 60);
}
Vue.filter('mmss', window.filters.toCHHMMSS);

window.filters.toYYYY = function (value) {
    return moment(value).format('YYYY');
}
Vue.filter('toYYYY', window.filters.toYYYY);

window.filters.toMMDD = function (value) {
    return moment(value).format('MM/DD');
}
Vue.filter('toMMDD', window.filters.toMMDD);