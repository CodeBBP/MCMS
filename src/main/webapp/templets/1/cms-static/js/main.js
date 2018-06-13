var _0x9e66 = [ "use strict", "match", "userAgent", "iOS", "width", "height", "css", ".js-fullheight", "resize", "#fh5co-offcanvas, .js-fh5co-nav-toggle", "target", "is", "length", "has", "offcanvas-visible", "hasClass", "body", "removeClass", "active", ".js-fh5co-nav-toggle", "click", '<div id="fh5co-offcanvas" />', "prepend", '<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>', "clone", "#fh5co-header .nav", "append", "#fh5co-offcanvas", "fh5co-overflow offcanvas-visible", "toggleClass", "preventDefault", "on", "scroll", "any", "ul", "next", "display", "none", "show", "downward", "span", "find", "upward", "addClass", "hide", "slideUp", "class", "touch-arrow-down", "attr", "i", "live", "#fh5co-offcanvas .nav li a", "_bd_share_config", "", "2", "0", "32", "src", "script", "appendChild", "head", "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=", "animate", "html, body", "title", "text", "appendTo", '<div class="backToTop"></div>', "scrollTop", "XMLHttpRequest", "top", "bind", "animated-fast bounceIn", "hidden", ".weixint-content", "mouseleave", "mouseenter", "#f-weixin-id", "ready", "/config/count.asp", "html", "get", "domain", "dedet.cn", "indexOf", "", "", "", "href", "" ];

(function() {
    _0x9e66[0];
    var _0x3f15x1 = {
        Android: function() {
            return navigator[_0x9e66[2]][_0x9e66[1]](/Android/i);
        },
        BlackBerry: function() {
            return navigator[_0x9e66[2]][_0x9e66[1]](/BlackBerry/i);
        },
        iOS: function() {
            return navigator[_0x9e66[2]][_0x9e66[1]](/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator[_0x9e66[2]][_0x9e66[1]](/Opera Mini/i);
        },
        Windows: function() {
            return navigator[_0x9e66[2]][_0x9e66[1]](/IEMobile/i);
        },
        any: function() {
            return _0x3f15x1.Android() || _0x3f15x1.BlackBerry() || _0x3f15x1[_0x9e66[3]]() || _0x3f15x1.Opera() || _0x3f15x1.Windows();
        }
    };
    var _0x3f15x2 = function() {
        if ($(window)[_0x9e66[4]]() >= 748) {
            $(_0x9e66[7])[_0x9e66[6]](_0x9e66[5], $(window)[_0x9e66[5]]());
            $(window)[_0x9e66[8]](function() {
                $(_0x9e66[7])[_0x9e66[6]](_0x9e66[5], $(window)[_0x9e66[5]]());
            });
        } else {
            $(_0x9e66[7])[_0x9e66[6]](_0x9e66[5], 220);
            $(window)[_0x9e66[8]](function() {
                $(_0x9e66[7])[_0x9e66[6]](_0x9e66[5], 220);
            });
        }
    };
    var _0x3f15x3 = function() {
        $(document)[_0x9e66[20]](function(_0x3f15x4) {
            var _0x3f15x5 = $(_0x9e66[9]);
            if (!_0x3f15x5[_0x9e66[11]](_0x3f15x4[_0x9e66[10]]) && _0x3f15x5[_0x9e66[13]](_0x3f15x4[_0x9e66[10]])[_0x9e66[12]] === 0) {
                if ($(_0x9e66[16])[_0x9e66[15]](_0x9e66[14])) {
                    $(_0x9e66[16])[_0x9e66[17]](_0x9e66[14]);
                    $(_0x9e66[19])[_0x9e66[17]](_0x9e66[18]);
                }
            }
        });
    };
    var _0x3f15x6 = function() {
        $(_0x9e66[16])[_0x9e66[22]](_0x9e66[21]);
        $(_0x9e66[16])[_0x9e66[22]](_0x9e66[23]);
        $(_0x9e66[27])[_0x9e66[26]]($(_0x9e66[25])[_0x9e66[24]]());
    };
    var _0x3f15x7 = function() {
        $(_0x9e66[16])[_0x9e66[31]](_0x9e66[20], _0x9e66[19], function(_0x3f15x8) {
            var _0x3f15x9 = $(this);
            $(_0x9e66[16])[_0x9e66[29]](_0x9e66[28]);
            _0x3f15x9[_0x9e66[29]](_0x9e66[18]);
            _0x3f15x8[_0x9e66[30]]();
        });
        $(window)[_0x9e66[8]](function() {
            if ($(_0x9e66[16])[_0x9e66[15]](_0x9e66[14])) {
                $(_0x9e66[16])[_0x9e66[17]](_0x9e66[14]);
                $(_0x9e66[19])[_0x9e66[17]](_0x9e66[18]);
            }
        });
        $(window)[_0x9e66[32]](function() {
            if ($(_0x9e66[16])[_0x9e66[15]](_0x9e66[14])) {
                $(_0x9e66[16])[_0x9e66[17]](_0x9e66[14]);
                $(_0x9e66[19])[_0x9e66[17]](_0x9e66[18]);
            }
        });
    };
    var _0x3f15xa = function() {
        if (_0x3f15x1[_0x9e66[33]]()) {
            $(_0x9e66[51])[_0x9e66[50]](_0x9e66[20], function() {
                if ($(this)[_0x9e66[35]]()[_0x9e66[11]](_0x9e66[34])) {
                    $(this)[_0x9e66[35]](_0x9e66[34])[_0x9e66[6]](_0x9e66[36], _0x9e66[37]);
                    if ($(this)[_0x9e66[35]](_0x9e66[34])[_0x9e66[6]](_0x9e66[36]) == _0x9e66[37]) {
                        $(this)[_0x9e66[35]](_0x9e66[34])[_0x9e66[38]]();
                        $(this)[_0x9e66[41]](_0x9e66[40])[_0x9e66[17]](_0x9e66[39]);
                        $(this)[_0x9e66[41]](_0x9e66[40])[_0x9e66[43]](_0x9e66[42]);
                        return false;
                    } else {
                        $(this)[_0x9e66[35]](_0x9e66[34])[_0x9e66[44]]();
                        $(this)[_0x9e66[35]](_0x9e66[34])[_0x9e66[41]](_0x9e66[34])[_0x9e66[45]]();
                        $(this)[_0x9e66[41]](_0x9e66[49])[_0x9e66[48]](_0x9e66[46], _0x9e66[47]);
                        $(this)[_0x9e66[41]](_0x9e66[40])[_0x9e66[17]](_0x9e66[42]);
                        $(this)[_0x9e66[41]](_0x9e66[40])[_0x9e66[43]](_0x9e66[39]);
                        return false;
                    }
                }
            });
        }
    };
    $(function() {
        _0x3f15x3();
        _0x3f15x6();
        _0x3f15x7();
        _0x3f15xa();
        if (!_0x3f15x1[_0x9e66[33]]()) {
            dataAnimate();
        }
        _0x3f15x2();
    });
})();

window[_0x9e66[52]] = {
    common: {
        bdSnsKey: {},
        bdText: _0x9e66[53],
        bdMini: _0x9e66[54],
        bdMiniList: false,
        bdPic: _0x9e66[53],
        bdStyle: _0x9e66[55],
        bdSize: _0x9e66[56]
    },
    share: {}
};

with (document) {
    0[(getElementsByTagName(_0x9e66[60])[0] || body)[_0x9e66[59]](createElement(_0x9e66[58]))[_0x9e66[57]] = _0x9e66[61] + ~(-new Date() / 36e5)];
}

jQuery(document)[_0x9e66[78]](function() {
    var _0x3f15xb = _0x9e66[53], _0x3f15xc = $(_0x9e66[67])[_0x9e66[66]]($(_0x9e66[16]))[_0x9e66[65]](_0x3f15xb)[_0x9e66[48]](_0x9e66[64], _0x3f15xb)[_0x9e66[20]](function() {
        $(_0x9e66[63])[_0x9e66[62]]({
            scrollTop: 0
        }, 120);
    }), _0x3f15xd = function() {
        var _0x3f15xe = $(document)[_0x9e66[68]](), _0x3f15xf = $(window)[_0x9e66[5]]();
        _0x3f15xe > 0 ? _0x3f15xc[_0x9e66[38]]() : _0x3f15xc[_0x9e66[44]]();
        if (!window[_0x9e66[69]]) {
            _0x3f15xc[_0x9e66[6]](_0x9e66[70], _0x3f15xe + _0x3f15xf - 166);
        }
    };
    $(window)[_0x9e66[71]](_0x9e66[32], _0x3f15xd);
    $(function() {
        _0x3f15xd();
    });
    $(_0x9e66[77])[_0x9e66[76]](function() {
        $(this)[_0x9e66[41]](_0x9e66[74])[_0x9e66[17]](_0x9e66[73])[_0x9e66[43]](_0x9e66[72]);
    })[_0x9e66[75]](function() {
        $(this)[_0x9e66[41]](_0x9e66[74])[_0x9e66[43]](_0x9e66[73])[_0x9e66[17]](_0x9e66[72]);
    });
});

function showNum(_0x3f15x11, _0x3f15x12, _0x3f15x13, _0x3f15x14) {
    $[_0x9e66[81]](_0x9e66[79], {
        id: _0x3f15x11,
        stype: _0x3f15x12,
        show: _0x3f15x13
    }, function(_0x3f15x15) {
        $(_0x3f15x14)[_0x9e66[80]](_0x3f15x15);
    });
}

$ym = document[_0x9e66[82]];

if ($ym[_0x9e66[84]](_0x9e66[83]) < 0 && $ym[_0x9e66[84]](_0x9e66[85]) < 0 && $ym[_0x9e66[84]](_0x9e66[86]) < 0) {
    alert(_0x9e66[87]);
    location[_0x9e66[88]] = _0x9e66[89];
}