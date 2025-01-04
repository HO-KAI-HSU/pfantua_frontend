import Vue from 'vue'

Vue.directive('masonry', {
    inserted: el => {
        var e = $(el);
        var after = e.attr('after');
        var setup = () => {
            setTimeout(() => {
                $(el).masonry({
                    itemSelector: ".content_box",
                    animate: true,
                    horizontalOrder: true,
                    originTop: true,
                });
            }, 500);
        };
        if (after) {
            e[after](setup);
        } else {
            setup();
        }
    }
});

Vue.directive('slick', {
    inserted: el => {
        setTimeout(() => {
            $(el).slick({
                arrows: false,
                autoplay: true,
                //- adaptiveHeight: true
            });
        }, 500);
    }
});

Vue.directive('logoslick', {
    inserted: el => {
        setTimeout(() => {
            $(el).slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ],
            });
        }, 500);
    }
});


Vue.directive('slick', {
    inserted: el => {
        setTimeout(() => {
            $(el).slick({
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                arrows: true,
                centerPadding: "40px",
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 530,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
    }, 500);
    }
});



Vue.directive('plaintext', {
    bind(el, binding, vnode) {
        el.innerHTML = el.innerText;
        //el.innerHTML = el.innerHTML.replace(/<[^>]+>/gm, '');
    }
});