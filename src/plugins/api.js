/* eslint-disable no-undef */
import $ from 'jquery';
import qs from 'qs';
import user from '../plugins/user'
import userip from '../plugins/user-ip-info'
import router from '../router'

let _token = user.user ? user.user.Token : null;
let _ip = userip.ipInfo ? userip.ipInfo.ip : null;

var blockUI = true;
export default {
    expireHandler: [],

    addOnExpireHandler(callback) {
        for (var k in this.expireHandler) {
            if (this.expireHandler[k] == callback) {
                return;
            }
        }
        this.expireHandler.push(callback);
    },

    removeOnExpireHandler(callback) {
        this.expireHandler.remove(callback);
    },

    raiseOnExpire() {
        this.expireHandler.forEach(handler => {
            handler(this);
        });
    },

    setBlockUI(val) {
        blockUI = val;
    },

    setToken(token) {
        _token = token;
    },
    setIp() {
        userip.getIpInfo()
        .then(ip => {
            _ip = ip.ip;
        });
    },
    getUrl(url) {
        // if (_token) {
        //     if (url.indexOf('?') > 0) {
        //         url += '&t=' + encodeURIComponent(_token);
        //     } else {
        //         url += '?t=' + encodeURIComponent(_token);
        //     }
        //     url += '&_=' + new Date().getTime();
        //     if (_ip) {
        //         url += '&ip=' + _ip; 
        //     } else {
        //         this.setIp();
        //         url += '&ip=' + _ip; 
        //     }
        // } else {
        //     if (_ip) {
        //         url += '?ip=' + _ip; 
        //     } else {
        //         this.setIp();
        //         url += '?ip=' + _ip; 
        //     }
        // }
        return config.host + url;
    },
    handle(p) {
        return new Promise((resolve, reject) => {
            if (window.blockUI && blockUI) {
                window.blockUI();
            }
            p.then(res => {
                if (res.Success) {
                    if (res.Token) {
                        var token = res.Token;
                        user.setToken(token);
                        this.setToken(token);
                    }
                    resolve(res.Result);
                } else {
                    if (res.Status == 3) {
                        console.log("err");
                        this.notFound();
                        return;
                    }
                    reject(res)
                }
            })
                .catch((err) => {
                    console.log(err);
                    if (err.status == 410) {
                        this.raiseOnExpire();
                        return;
                    }
                    reject(err)
                }).always(function () {
                    window.unblockUI();
                });
        });
    },
    fetchData(url) {
        return new Promise((resolve, reject) => {
            url.then(res => {
                resolve(res);
            })
            .catch((err) => {
                reject(err)
            })
        });
    },
    get(url, data) {
        if (!data) {
            return this.handle($.get(this.getUrl(url)));
        } else {
            return this.handle($.get(this.getUrl(url) + qs.stringify(url)));
        }
    },
    getThridParty(url) {
        return this.handle($.get(url));
    },
    post(url, data) {
        return this.handle($.ajax({
            type: "POST",
            url: this.getUrl(url),
            data: JSON.stringify(data),
            contentType: "application/json"
        }));
    },
    multipartPost(url, data) {
        url = this.getUrl(url);
        var fdata = new FormData();
        for (var key in data) {
            fdata.append(key, data[key]);
        }
        return $.ajax({
            type: "POST",
            url: url,
            contentType: false,
            processData: false,
            data: fdata
        });
    },
    put(url, data) {
        return this.handle($.ajax({
            type: "PUT",
            url: this.getUrl(url),
            data: JSON.stringify(data),
            contentType: "application/json"
        }));
    },
    del(url) {
        return this.handle($.ajax({
            type: "DELETE",
            url: this.getUrl(url),
        }));
    },
    hasToken() {
        return token != null && token != undefined && token != "";
    },

    getHomeInfo() {
        return this.get('/pfantua/public/frontend/api/homeInfo');
    },
    getNewsList(page, limit) {
        return this.get('/pfantua/public/frontend/api/newsList/1?page=' + page + '&limit=' + limit);
    },
    getNews(id) {
        return this.get('/pfantua/public/frontend/api/news/' + id);
    }, 
    getActivityList(page, limit) {
        return this.get('/pfantua/public/frontend/api/newsList/3?page=' + page + '&limit=' + limit);
    },
    getCollageInfo() {
        return this.get('/pfantua/public/frontend/api/collageInfo');
    },
    getCollageColleagueInfo(id) {
        return this.get('/pfantua/public/frontend/api/collageColleague/' + id);
    },
    getAllDepartmentColleagues() {
        return this.get('/pfantua/public/frontend/api/allDepartmentColleagues');
    },

    notFound() {
        return router.push('/404');
    },
}