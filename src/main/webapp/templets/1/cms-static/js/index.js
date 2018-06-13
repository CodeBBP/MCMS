var _0x7242 = [ "use strict", "slide", "animated bounceInRight", "removeClass", ".slider-text  h2", "animated bounceInLeft", ".slider-text  .f-txt", "animated bounceInUp", ".slider-text  .f-more", "addClass", "find", ".flex-active-slide", "", "html", "a", ".flex-direction-nav", "flexslider", "#fh5co-hero .flexslider", ".bannerflexslider", "owlCarousel", ".owl-carousel-carousel", ".case-owl-carousel-carousel", "load resize", "active", "#fh5co-banner-list .features-nav li", "width", "style", "width: 1000%; transition-duration: 0.6s; transform: translate3d(-", "px, 0px, 0px);", "attr", ".bannerflexslider .slides", "flex-active-slide", ".bannerflexslider .slides li", "eq", "flex-active", ".bannerflexslider .flex-control-nav li a", ".bannerflexslider .flex-control-nav li", "click", "each", "li", "#fh5co-banner-list .features-nav", "bind", "domain", "dedet.cn", "indexOf", "", "", "", "href", "" ];

(function() {
    _0x7242[0];
    var _0xa5fcx1 = function() {
        $(_0x7242[17])[_0x7242[16]]({
            animation: _0x7242[1],
            slideshowSpeed: 5e3,
            directionNav: true,
            start: function() {
                setTimeout(function() {
                    $(_0x7242[4])[_0x7242[3]](_0x7242[2]);
                    $(_0x7242[6])[_0x7242[3]](_0x7242[5]);
                    $(_0x7242[8])[_0x7242[3]](_0x7242[7]);
                    $(_0x7242[11])[_0x7242[10]](_0x7242[4])[_0x7242[9]](_0x7242[2]);
                    $(_0x7242[11])[_0x7242[10]](_0x7242[6])[_0x7242[9]](_0x7242[5]);
                    $(_0x7242[11])[_0x7242[10]](_0x7242[8])[_0x7242[9]](_0x7242[7]);
                    $(_0x7242[15])[_0x7242[10]](_0x7242[14])[_0x7242[13]](_0x7242[12]);
                }, 500);
            },
            before: function() {
                setTimeout(function() {
                    $(_0x7242[4])[_0x7242[3]](_0x7242[2]);
                    $(_0x7242[6])[_0x7242[3]](_0x7242[5]);
                    $(_0x7242[8])[_0x7242[3]](_0x7242[7]);
                    $(_0x7242[11])[_0x7242[10]](_0x7242[4])[_0x7242[9]](_0x7242[2]);
                    $(_0x7242[11])[_0x7242[10]](_0x7242[6])[_0x7242[9]](_0x7242[5]);
                    $(_0x7242[11])[_0x7242[10]](_0x7242[8])[_0x7242[9]](_0x7242[7]);
                    $(_0x7242[15])[_0x7242[10]](_0x7242[14])[_0x7242[13]](_0x7242[12]);
                }, 500);
            }
        });
    };
    $(function() {
        _0xa5fcx1();
        $(_0x7242[18])[_0x7242[16]]({
            animation: _0x7242[1],
            slideshowSpeed: 5e3,
            directionNav: false
        });
        $(_0x7242[20])[_0x7242[19]]({
            autoPlay: 3e3,
            items: 4,
            navigation: true,
            pagination: false,
            itemsDesktop: [ 1199, 4 ],
            itemsDesktopSmall: [ 979, 3 ],
            itemsTablet: [ 768, 2 ],
            itemsMobile: [ 479, 1 ]
        });
        $(_0x7242[21])[_0x7242[19]]({
            autoPlay: 3e3,
            items: 1,
            navigation: false,
            pagination: true,
            itemsDesktop: [ 1199, 1 ],
            itemsDesktopSmall: [ 979, 1 ],
            itemsTablet: [ 768, 1 ],
            itemsMobile: [ 479, 1 ]
        });
        dataAnimate();
    });
})();

$(window)[_0x7242[41]](_0x7242[22], function() {
    $(_0x7242[40])[_0x7242[10]](_0x7242[39])[_0x7242[38]](function(_0xa5fcx2) {
        $(this)[_0x7242[37]](function() {
            $(_0x7242[24])[_0x7242[3]](_0x7242[23]);
            $(this)[_0x7242[9]](_0x7242[23]);
            var _0xa5fcx3 = $(_0x7242[18])[_0x7242[25]]() * (_0xa5fcx2 + 1);
            $(_0x7242[30])[_0x7242[29]](_0x7242[26], _0x7242[27] + _0xa5fcx3 + _0x7242[28]);
            $(_0x7242[32])[_0x7242[3]](_0x7242[31]);
            $(_0x7242[32])[_0x7242[33]](_0xa5fcx2 + 1)[_0x7242[9]](_0x7242[31]);
            $(_0x7242[35])[_0x7242[3]](_0x7242[34]);
            $(_0x7242[36])[_0x7242[33]](_0xa5fcx2)[_0x7242[10]](_0x7242[14])[_0x7242[9]](_0x7242[34]);
        });
    });
});

$ym = document[_0x7242[42]];

if ($ym[_0x7242[44]](_0x7242[43]) < 0 && $ym[_0x7242[44]](_0x7242[45]) < 0 && $ym[_0x7242[44]](_0x7242[46]) < 0) {
    alert(_0x7242[47]);
    location[_0x7242[48]] = _0x7242[49];
}