! function(e) {
    "use strict";
    var t = function(e, t) {
            console.log("running");
            var a = "#" + e.find(".wpkoi-elements-advance-tabs").attr("id").toString();
            t(a + " .wpkoi-elements-tabs-nav ul li").each(function(e) {
                t(this).hasClass("active-default") ? (t(a + " .wpkoi-elements-tabs-nav > ul li").removeClass("active").addClass("inactive"), t(this).removeClass("inactive")) : 0 == e && t(this).removeClass("inactive").addClass("active")
            }), t(a + " .wpkoi-elements-tabs-content div").each(function(e) {
                t(this).hasClass("active-default") ? t(a + " .wpkoi-elements-tabs-content > div").removeClass("active") : 0 == e && t(this).removeClass("inactive").addClass("active")
            }), t(a + " .wpkoi-elements-tabs-nav ul li").click(function() {
                var e = t(this).index(),
                    a = t(this).closest(".wpkoi-elements-advance-tabs"),
                    s = t(a).children(".wpkoi-elements-tabs-nav").children("ul").children("li"),
                    i = t(a).children(".wpkoi-elements-tabs-content").children("div");
                t(this).parent("li").addClass("active"), t(s).removeClass("active active-default").addClass("inactive"), t(this).addClass("active").removeClass("inactive"), t(i).removeClass("active").addClass("inactive"), t(i).eq(e).addClass("active").removeClass("inactive"), t(i).each(function(e) {
                    t(this).removeClass("active-default")
                })
            })
        },
        a = function(e, t) {
            var a = e.find(".wpkoi-elements-post-timeline"),
                s = (a.attr("id"), a.data("url")),
                i = a.data("total_posts"),
                n = a.data("timeline_id"),
                o = a.data("post_type"),
                l = a.data("posts_per_page"),
                d = a.data("post_order"),
                r = a.data("show_images"),
                c = a.data("show_title"),
                v = a.data("show_excerpt"),
                p = a.data("excerpt_length"),
                m = a.data("btn_text"),
                h = a.data("categories"),
                u = {
                    siteUrl: s,
                    totalPosts: i,
                    loadMoreBtn: t("#wpkoi-elements-load-more-btn-" + n),
                    postContainer: t(".wpkoi-elements-post-appender-" + n),
                    postStyle: "timeline"
                },
                w = {
                    postType: o,
                    perPage: parseInt(l, 10),
                    postOrder: d,
                    showImage: r,
                    showTitle: c,
                    showExcerpt: v,
                    excerptLength: parseInt(p, 10),
                    btnText: m,
                    categories: h
                };
            loadMore(u, w)
        };
    e(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/wpkoi-elements-adv-tabs.default", t), elementorFrontend.hooks.addAction("frontend/element_ready/wpkoi-elements-post-timeline.default", a)
    })
}(jQuery);