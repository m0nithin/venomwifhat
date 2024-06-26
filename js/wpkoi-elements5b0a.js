! function(e, t) {
    "use strict";
    var i = function(e, t) {
            var i;
            return function(n) {
                i && clearTimeout(i), i = setTimeout(function() {
                    t.call(this, n), i = null
                }, e)
            }
        },
        n = function(e, t) {
            var i = Object.keys(e),
                n = i.indexOf(t),
                o = n += 1;
            return !(o >= i.length) && i[o]
        },
        o = function(e, t) {
            var i = Object.keys(e),
                n = i.indexOf(t),
                o = n -= 1;
            return !(0 > n) && i[o]
        },
        a = function() {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        },
        r = {
            init: function() {
                var i = {
                    "wpkoi-carousel.default": r.widgetCarousel,
                    "wpkoi-circle-progress.default": r.widgetProgress,
                    "wpkoi-posts.default": r.widgetPosts,
                    "wpkoi-animated-text.default": r.widgetAnimatedText,
                    "wpkoi-image-comparison.default": r.widgetImageComparison,
                    "wpkoi-scroll-navigation.default": r.widgetScrollNavigation,
                    "wpkoi-view-more.default": r.widgetViewMore,
                    "wpkoi-unfold.default": r.widgetUnfold,
                    "wpkoi-hotspots.default": r.widgetHotspots,
                    "mp-timetable.default": r.widgetTimeTable
                };
                e.each(i, function(e, i) {
                    t.hooks.addAction("frontend/element_ready/" + e, i)
                })
            },
            widgetProgress: function(t) {
                var i = t.find(".circle-progress");
                if (i.length) {
                    var n = i.find(".circle-progress__value"),
                        o = i.find(".circle-progress__meter"),
                        a = parseInt(n.data("value")) / 100,
                        r = t.find(".circle-progress-wrap").data("duration"),
                        s = i.data("responsive-sizes"),
                        c = s.desktop,
                        l = s.tablet,
                        d = s.mobile,
                        u = elementorFrontend.getCurrentDeviceMode(),
                        p = u,
                        f = !1;
                    "tablet" === u && g(l.size, l.viewBox, l.center, l.radius, l.valStroke, l.bgStroke, l.circumference), "mobile" === u && g(d.size, d.viewBox, d.center, d.radius, d.valStroke, d.bgStroke, d.circumference), elementorFrontend.waypoint(t, function() {
                        var e = t.find(".circle-counter__number"),
                            o = e.data(),
                            s = o.toValue.toString().match(/\.(.*)/);
                        s && (o.rounding = s[1].length), o.duration = r, e.numerator(o);
                        var c = parseInt(i.data("circumference")) * (1 - a);
                        n.css({
                            transitionDuration: r + "ms",
                            strokeDashoffset: c
                        }), f = !0
                    }, {
                        offset: "bottom-in-view"
                    }), e(window).on("resize.wpkoiCircleProgress orientationchange.wpkoiCircleProgress", function(e) {
                        "desktop" === (u = elementorFrontend.getCurrentDeviceMode()) && "desktop" !== p && (g(c.size, c.viewBox, c.center, c.radius, c.valStroke, c.bgStroke, c.circumference), p = "desktop"), "tablet" === u && "tablet" !== p && (g(l.size, l.viewBox, l.center, l.radius, l.valStroke, l.bgStroke, l.circumference), p = "tablet"), "mobile" === u && "mobile" !== p && (g(d.size, d.viewBox, d.center, d.radius, d.valStroke, d.bgStroke, d.circumference), p = "mobile")
                    })
                }

                function g(e, t, r, s, c, l, d) {
                    var u = d * (1 - a);
                    i.attr({
                        width: e,
                        height: e,
                        "data-radius": s,
                        "data-circumference": d
                    }), i[0].setAttribute("viewBox", t), o.attr({
                        cx: r,
                        cy: r,
                        r: s,
                        "stroke-width": l
                    }), f && n.css({
                        transitionDuration: ""
                    }), n.attr({
                        cx: r,
                        cy: r,
                        r: s,
                        "stroke-width": c
                    }), n.css({
                        strokeDasharray: d,
                        strokeDashoffset: f ? u : d
                    })
                }
            },
            widgetCarousel: function(e) {
                var t = e.find(".wpkoi-carousel");
                t.length && r.initCarousel(t, t.data("slider_options"))
            },
            widgetPosts: function(e) {
                var t = e.find(".wpkoi-carousel");
                t.length && r.initCarousel(t.find(".wpkoi-posts"), t.data("slider_options"))
            },
            widgetAnimatedText: function(e) {
                var t, i = e.find(".wpkoi-animated-text");
                i.length && (t = i.data("settings"), new wpkoiAnimatedText(i, t).init())
            },
            widgetScrollNavigation: function(e) {
                var t = e.find(".wpkoi-scroll-navigation"),
                    i = t.data("settings");
                new wpkoiScrollNavigation(e, t, i).init()
            },
            widgetImageComparison: function(t) {
                var i = t.find(".wpkoi-image-comparison__instance"),
                    n = (e(".wpkoi-image-comparison__container", i), i.data("settings"));
                t.data("id"), i.length && (window.juxtapose.scanPage(".wpkoi-juxtapose"), n.draggable = !1, n.infinite = !1, r.initCarousel(i, n))
            },
            widgetTimeTable: function(t) {
                var i = t.find(".mptt-shortcode-wrapper");
                if ("undefined" != typeof typenow && pagenow === typenow) switch (typenow) {
                    case "mp-event":
                        Registry._get("Event").init();
                        break;
                    case "mp-column":
                        Registry._get("Event").initDatePicker(), Registry._get("Event").columnRadioBox()
                }
                i.length && (Registry._get("Event").initTableData(), Registry._get("Event").filterShortcodeEvents(), Registry._get("Event").getFilterByHash(), i.show()), (e(".upcoming-events-widget").length || i.length) && Registry._get("Event").setColorSettings()
            },
            widgetViewMore: function(e) {
                var t = e.find(".wpkoi-view-more"),
                    i = t.data("settings");
                new wpkoiViewMore(t, i).init()
            },
            widgetUnfold: function(t) {
                var i = t.find(".wpkoi-unfold"),
                    n = e(".wpkoi-unfold__button", i),
                    o = e(".wpkoi-unfold__mask", i),
                    a = e(".wpkoi-unfold__content", i),
                    r = i.data("settings"),
                    s = +r.height.size || 100,
                    d = "easeOutBack",
                    u = "easeOutSine";
                i.hasClass("wpkoi-unfold-state") || o.css({
                    height: s
                }), n.on("click.wpkoiUnfold", function() {
                    var t = e(this),
                        n = e(".wpkoi-unfold__button-text", t),
                        r = t.data("unfold-text"),
                        p = t.data("fold-text"),
                        f = e(".wpkoi-unfold__button-icon", t),
                        g = t.data("unfold-icon"),
                        w = t.data("fold-icon"),
                        m = a.outerHeight();
                    i.hasClass("wpkoi-unfold-state") ? (i.removeClass("wpkoi-unfold-state"), f.html('<i class="' + g + '"></i>'), n.html(r), anime({
                        targets: o[0],
                        height: s,
                        duration: 500,
                        easing: u
                    })) : (i.addClass("wpkoi-unfold-state"), f.html('<i class="' + w + '"></i>'), n.html(p), anime({
                        targets: o[0],
                        height: m,
                        duration: 500,
                        easing: d
                    }))
                })
            },
            widgetHotspots: function(i) {
                var n = i.find(".wpkoi-hotspots"),
                    o = e(".wpkoi-hotspots__item", n),
                    a = n.data("settings"),
                    r = Boolean(t.isEditMode());
                n.imagesLoaded().progress(function() {
                    n.addClass("image-loaded")
                }), o.each(function(t) {
                    var i = e(this),
                        n = i.data("horizontal-position"),
                        o = i.data("vertical-position"),
                        s = i[0];
                    i.css({
                        left: n + "%",
                        top: o + "%"
                    }), s._tippy && s._tippy.destroy(), tippy([s], {
                        arrow: a.tooltipArrow,
                        arrowType: a.tooltipArrowType,
                        arrowTransform: a.tooltipArrowSize,
                        duration: [a.tooltipShowDuration.size, a.tooltipHideDuration.size],
                        distance: a.tooltipDistance.size,
                        placement: a.tooltipPlacement,
                        trigger: a.tooltipTrigger,
                        animation: a.tooltipAnimation,
                        flipBehavior: "clockwise",
                        appendTo: s,
                        hideOnClick: "manual" !== a.tooltipTrigger
                    }), "manual" === a.tooltipTrigger && s._tippy && s._tippy.show(), r && s._tippy && s._tippy.show()
                })
            },
            initCarousel: function(t, i) {
                var n, o, a, r;
                n = i.slidesToShow.tablet ? i.slidesToShow.tablet : 1 === i.slidesToShow.desktop ? 1 : 2, o = i.slidesToShow.mobile ? i.slidesToShow.mobile : 1, i.slidesToShow = i.slidesToShow.desktop, a = {
                    customPaging: function(t, i) {
                        return e("<span />").text(i + 1)
                    },
                    dotsClass: "wpkoi-slick-dots",
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: n
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: o,
                            slidesToScroll: 1
                        }
                    }]
                }, r = e.extend({}, a, i), t.slick(r)
            }
        };
    e(window).on("elementor/frontend/init", r.init);
    window.wpkoiViewMore = function(i, n) {
        var o = this,
            a = (e(window), e(".wpkoi-view-more__button", i)),
            r = (n = e.extend({}, {
                sections: {},
                effect: "move-up",
                showall: !1
            }, n)).sections,
            s = {},
            c = !0,
            l = Boolean(t.isEditMode());
        o.init = function() {
            if (o.setSectionsData(), l) return !1;
            a.on("click", function() {
                for (var e in s) {
                    var t = s[e].selector;
                    if (n.showall) s[e].visible = !0, t.addClass("view-more-visible"), t.addClass("wpkoi-tricks-" + n.effect + "-effect");
                    else if (!s[e].visible) {
                        s[e].visible = !0, t.addClass("view-more-visible"), t.addClass("wpkoi-tricks-" + n.effect + "-effect");
                        break
                    }
                }
                for (var e in s) c = !0, s[e].visible && (c = !1);
                c || a.css({
                    display: "none"
                })
            })
        }, o.setSectionsData = function() {
            for (var t in r) {
                var i = e("#" + r[t]);
                l ? i.addClass("wpkoi-view-more-section-edit-mode") : i.addClass("wpkoi-view-more-section"), s[t] = {
                    section_id: r[t],
                    selector: i,
                    visible: !1
                }
            }
        }
    }, window.wpkoiAnimatedText = function(t, i) {
        var n, o = this,
            a = e(".wpkoi-animated-text__animated-text", t),
            r = e(".wpkoi-animated-text__animated-text-item", a),
            s = null,
            c = (i = i || {}, 0);
        n = {
            effect: "fx1",
            delay: 3e3
        }, e.extend(n, i), o.avaliableEffects = {
            fx1: { in: {
                    duration: 1e3,
                    delay: function(e, t) {
                        return 75 + 100 * t
                    },
                    easing: "easeOutElastic",
                    elasticity: 650,
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    translateY: ["100%", "0%"]
                },
                out: {
                    duration: 300,
                    delay: function(e, t) {
                        return 40 * t
                    },
                    easing: "easeInOutExpo",
                    opacity: 0,
                    translateY: "-100%"
                }
            },
            fx2: { in: {
                    duration: 800,
                    delay: function(e, t) {
                        return 50 * t
                    },
                    easing: "easeOutElastic",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    translateY: function(e, t) {
                        return t % 2 == 0 ? ["-80%", "0%"] : ["80%", "0%"]
                    }
                },
                out: {
                    duration: 300,
                    delay: function(e, t) {
                        return 20 * t
                    },
                    easing: "easeOutExpo",
                    opacity: 0,
                    translateY: function(e, t) {
                        return t % 2 == 0 ? "80%" : "-80%"
                    }
                }
            },
            fx3: { in: {
                    duration: 700,
                    delay: function(e, t) {
                        return 80 * (e.parentNode.children.length - t - 1)
                    },
                    easing: "easeOutElastic",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    translateY: function(e, t) {
                        return t % 2 == 0 ? ["-80%", "0%"] : ["80%", "0%"]
                    },
                    rotateZ: [90, 0]
                },
                out: {
                    duration: 300,
                    delay: function(e, t) {
                        return 50 * (e.parentNode.children.length - t - 1)
                    },
                    easing: "easeOutExpo",
                    opacity: 0,
                    translateY: function(e, t) {
                        return t % 2 == 0 ? "80%" : "-80%"
                    },
                    rotateZ: function(e, t) {
                        return t % 2 == 0 ? -25 : 25
                    }
                }
            },
            fx4: { in: {
                    duration: 700,
                    delay: function(e, t) {
                        return 550 + 50 * t
                    },
                    easing: "easeOutQuint",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    translateY: ["-150%", "0%"],
                    rotateY: [180, 0]
                },
                out: {
                    duration: 200,
                    delay: function(e, t) {
                        return 30 * t
                    },
                    easing: "easeInQuint",
                    opacity: {
                        value: 0,
                        easing: "linear"
                    },
                    translateY: "100%",
                    rotateY: -180
                }
            },
            fx5: { in: {
                    duration: 250,
                    delay: function(e, t) {
                        return 200 + 25 * t
                    },
                    easing: "easeOutCubic",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    translateY: ["-50%", "0%"]
                },
                out: {
                    duration: 250,
                    delay: function(e, t) {
                        return 25 * t
                    },
                    easing: "easeOutCubic",
                    opacity: 0,
                    translateY: "50%"
                }
            },
            fx6: { in: {
                    duration: 400,
                    delay: function(e, t) {
                        return 50 * t
                    },
                    easing: "easeOutSine",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    rotateY: [-90, 0]
                },
                out: {
                    duration: 200,
                    delay: function(e, t) {
                        return 50 * t
                    },
                    easing: "easeOutSine",
                    opacity: 0,
                    rotateY: 45
                }
            },
            fx7: { in: {
                    duration: 1e3,
                    delay: function(e, t) {
                        return 100 + 30 * t
                    },
                    easing: "easeOutElastic",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    rotateZ: function(e, t) {
                        return [anime.random(20, 40), 0]
                    }
                },
                out: {
                    duration: 300,
                    opacity: {
                        value: [1, 0],
                        easing: "easeOutExpo"
                    }
                }
            },
            fx8: { in: {
                    duration: 400,
                    delay: function(e, t) {
                        return 200 + 20 * t
                    },
                    easing: "easeOutExpo",
                    opacity: 1,
                    rotateY: [-90, 0],
                    translateY: ["50%", "0%"]
                },
                out: {
                    duration: 250,
                    delay: function(e, t) {
                        return 20 * t
                    },
                    easing: "easeOutExpo",
                    opacity: 0,
                    rotateY: 90
                }
            },
            fx9: { in: {
                    duration: 400,
                    delay: function(e, t) {
                        return 200 + 30 * t
                    },
                    easing: "easeOutExpo",
                    opacity: 1,
                    rotateX: [90, 0]
                },
                out: {
                    duration: 250,
                    delay: function(e, t) {
                        return 30 * t
                    },
                    easing: "easeOutExpo",
                    opacity: 0,
                    rotateX: -90
                }
            },
            fx10: { in: {
                    duration: 400,
                    delay: function(e, t) {
                        return 100 + 50 * t
                    },
                    easing: "easeOutExpo",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    rotateX: [110, 0]
                },
                out: {
                    duration: 250,
                    delay: function(e, t) {
                        return 50 * t
                    },
                    easing: "easeOutExpo",
                    opacity: 0,
                    rotateX: -110
                }
            },
            fx11: { in: {
                    duration: function(e, t) {
                        return anime.random(800, 1e3)
                    },
                    delay: function(e, t) {
                        return anime.random(100, 300)
                    },
                    easing: "easeOutExpo",
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutExpo"
                    },
                    translateY: ["-150%", "0%"],
                    rotateZ: function(e, t) {
                        return [anime.random(-50, 50), 0]
                    }
                },
                out: {
                    duration: function(e, t) {
                        return anime.random(200, 300)
                    },
                    delay: function(e, t) {
                        return anime.random(0, 80)
                    },
                    easing: "easeInQuart",
                    opacity: 0,
                    translateY: "50%",
                    rotateZ: function(e, t) {
                        return anime.random(-50, 50)
                    }
                }
            },
            fx12: { in: {
                    duration: 1,
                    delay: function(e, t) {
                        return 200 * t + anime.random(0, 200)
                    },
                    width: [0, function(t, i) {
                        return e(t).width()
                    }]
                },
                out: {
                    duration: 1,
                    delay: function(e, t) {
                        return 100 * (e.parentNode.children.length - t - 1)
                    },
                    easing: "linear",
                    width: {
                        value: 0
                    }
                }
            }
        }, o.textChange = function() {
            s && clearTimeout(s), s = setTimeout(function() {
                var e, t;
                e = r.eq(c), c < r.length - 1 ? c++ : c = 0, t = r.eq(c), o.hideText(e, i.effect, null, function(n) {
                    e.toggleClass("visible"), o.showText(t, i.effect, function() {
                        t.toggleClass("active"), e.toggleClass("active"), t.toggleClass("visible"), o.textChange()
                    }, null)
                })
            }, i.delay)
        }, o.showText = function(t, i, n, a) {
            var r = [];
            e("span", t).each(function() {
                e(this).css({
                    width: "auto",
                    opacity: 1,
                    WebkitTransform: "",
                    transform: ""
                }), r.push(this)
            }), o.animateText(r, "in", i, n, a)
        }, o.hideText = function(t, i, n, a) {
            var r = [];
            e("span", t).each(function() {
                r.push(this)
            }), o.animateText(r, "out", i, n, a)
        }, o.animateText = function(e, t, i, n, a) {
            var r = (o.avaliableEffects[i] || {})[t];
            r.targets = e, r.begin = n, r.complete = a, anime(r)
        }, o.init = function() {
            var e = r.eq(c);
            o.showText(e, i.effect, null, function() {
                o.textChange()
            })
        }
    }, window.wpkoiScrollNavigation = function(t, r, s) {
        var c = this,
            l = e(window),
            d = e(document),
            u = (e("body"), r),
            p = e("html, body"),
            f = e(".wpkoi-scroll-navigation__item", u),
            g = (s = e.extend({}, {
                speed: 500,
                blockSpeed: 500,
                offset: 0,
                sectionSwitch: !1,
                sectionSwitchOnMobile: !0
            }, s), {}),
            w = null,
            m = !1,
            v = window.location.hash.slice(1),
            h = 0,
            k = navigator.platform;
        jQuery.extend(jQuery.easing, {
            easeInOutCirc: function(e, t, i, n, o) {
                return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
            }
        }), c.init = function() {
            c.setSectionsData(), v && g.hasOwnProperty(v) && f.addClass("invert"), f.on("click.wpkoiScrollNavigation", function(t) {
                var i = e(this).data("anchor");
                c.onAnchorChange(i)
            }), l.on("resize.wpkoiScrollNavigation orientationchange.wpkoiScrollNavigation", i(50, c.onResize)), l.on("load", function() {
                c.setSectionsData()
            }), d.keydown(function(e) {
                c.isEnabled() && (38 == e.keyCode && c.directionSwitch(e, "up"), 40 == e.keyCode && c.directionSwitch(e, "down"))
            }), c.waypointHandler(), c.hijakingHandler(), "undefined" != typeof ResizeSensor && new ResizeSensor(e(".wpkoi-scroll-navigation-section"), i(50, function() {
                c.setSectionsData(), c.waypointHandler()
            }))
        }, c.setSectionsData = function() {
            f.each(function() {
                var t = e(this),
                    i = t.data("anchor"),
                    n = "yes" === t.data("invert"),
                    o = e("#" + i);
                o[0] && (o.addClass("wpkoi-scroll-navigation-section").addClass("elementor-top-section"), o[0].dataset.sectionName = i, g[i] = {
                    selector: o,
                    offset: Math.round(o.offset().top),
                    height: o.outerHeight(),
                    invert: n
                })
            })
        }, c.waypointHandler = function() {
            for (var t in g) {
                var i = g[t].selector;
                elementorFrontend.waypoint(i, function(t) {
                    var i = e(this).attr("id");
                    "down" !== t || m || (window.history.pushState(null, null, "#" + i), w = i, f.removeClass("active"), e("[data-anchor=" + i + "]", u).addClass("active"), f.removeClass("invert"), g[i].invert && f.addClass("invert"))
                }, {
                    offset: "70%",
                    triggerOnce: !1
                }), elementorFrontend.waypoint(i, function(t) {
                    var i = e(this).attr("id");
                    "up" !== t || m || (window.history.pushState(null, null, "#" + i), w = i, f.removeClass("active"), e("[data-anchor=" + i + "]", u).addClass("active"), f.removeClass("invert"), g[i].invert && f.addClass("invert"))
                }, {
                    offset: "0%",
                    triggerOnce: !1
                })
            }
        }, c.onAnchorChange = function(t) {
            var i, n = e("[data-anchor=" + t + "]", u);
            if (!g.hasOwnProperty(t)) return !1;
            i = g[t].offset - s.offset, m || (m = !0, window.history.pushState(null, null, "#" + t), w = t, f.removeClass("active"), n.addClass("active"), f.removeClass("invert"), g[t].invert && f.addClass("invert"), p.animate({
                scrollTop: i
            }, s.speed, "easeInOutCirc", function() {
                m = !1
            }))
        }, c.directionSwitch = function(t, i) {
            i = i || "up";
            var n = e("[data-anchor=" + w + "]", u).next(),
                o = e("[data-anchor=" + w + "]", u).prev();
            if (m) return !1;
            "up" === i && o[0] && o.trigger("click.wpkoiScrollNavigation"), "down" === i && n[0] && n.trigger("click.wpkoiScrollNavigation")
        }, c.hijakingHandler = function() {
            var t = a(),
                i = 0;
            s.sectionSwitch && (t || document.addEventListener("wheel", c.onWheel, {
                passive: !1
            }), t && s.sectionSwitchOnMobile && (document.addEventListener("touchstart", function(t) {
                if (c.isEnabled()) {
                    var n = e(t.target).closest(".elementor-top-section").attr("id") || !1;
                    i = t.changedTouches[0].clientY, n && m && t.preventDefault()
                }
            }, {
                passive: !1
            }), document.addEventListener("touchend", function(t) {
                if (c.isEnabled()) {
                    var a = e(t.target),
                        r = a.closest(".wpkoi-scroll-navigation") || !1,
                        s = (a.closest(".elementor-top-section") || !1).attr("id") || !1,
                        d = l.scrollTop(),
                        u = t.changedTouches[0].clientY,
                        p = u > i ? "up" : "down",
                        f = !1,
                        w = !1,
                        m = !1,
                        v = !1,
                        h = window.screen.availHeight / 8;
                    return !(Math.abs(u - i) < 20) && (!r[0] && void(s && g.hasOwnProperty(s) && (m = o(g, s), v = n(g, s), f = g[s].offset, "up" === p && (f - h < d && (m = s), m && (w = m)), "down" === p && (f + h > d && (v = s), v && (w = v)), w && c.onAnchorChange(w))))
                }
            }, {
                passive: !1
            })))
        }, c.onScroll = function(e) {
            e.preventDefault()
        }, c.onWheel = function(t) {
            if (c.isEnabled()) {
                m && t.preventDefault();
                var i = e(t.target).closest(".elementor-top-section[id]").attr("id") || !1,
                    a = 0 > t.deltaY ? "up" : "down",
                    r = !1,
                    d = !1,
                    u = !1,
                    p = !1,
                    f = l.scrollTop();
                if (i && g.hasOwnProperty(i) && (u = o(g, i), p = n(g, i), r = g[i].offset, "up" === a && (r < f + s.offset - 10 && (u = i), u && (d = u)), "down" === a && (r > f + s.offset + 10 && (p = i), p && (d = p)), d)) {
                    if (t.preventDefault(), t.timeStamp - h > 15 && "MacIntel" == k) return h = t.timeStamp, !1;
                    c.onAnchorChange(d)
                }
                return !1
            }
        }, c.onResize = function(e) {
            c.setSectionsData()
        }, c.scrollStop = function() {
            p.stop(!0)
        }, c.isEnabled = function() {
            return t.is(":visible")
        }, c.mobiledevicescheck = function() {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        }
    }
}(jQuery, window.elementorFrontend);