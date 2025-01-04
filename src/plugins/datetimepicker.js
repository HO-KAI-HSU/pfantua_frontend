import Vue from 'vue'

function deepSet(obj, value, path) {
    var i;
    path = path.split('.');
    for (i = 0; i < path.length - 1; i++)
        obj = obj[path[i]];

    obj[path[i]] = value;
}

function deepGet(obj, path) {
    var i;
    if (!path) {
        return null;
    }
    path = path.split('.');
    for (i = 0; i < path.length - 1; i++)
        obj = obj[path[i]];

    return obj[path[i]];
}

Vue.directive('datetimepicker', {
    bind: function (el, binding, vnode) {
        var val = deepGet(vnode.context, binding.expression);
        var min = moment({
            y: 1800,
            M: 0,
            d: 1
        });
        var attr = $(el).attr('min');
        if (attr) {
            if (attr == 'today') {
                min = moment().subtract(1, 'days');
            } else {
                min = moment(attr);
            }
        }
        console.log(val);
        $(el).datetimepicker({
            format: 'Y/M/D',
            defaultDate: val,
            minDate: min
        });
        $(el).on('dp.change', function (e) {
            if (binding.expression) {
                var d = moment(e.date);
                if(d.isValid()){
                    deepSet(vnode.context, d.format('YYYY/MM/DD'), binding.expression);
                }else{
                    deepSet(vnode.context, null, binding.expression);
                }
            }
        })
    },
    update: function (el, binding, vnode) {
        var datetimepicker = $(el).data("DateTimePicker");
        if (datetimepicker && binding.value) {
            datetimepicker.date(binding.value);
        }
    }
});