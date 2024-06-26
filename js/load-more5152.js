! function(e) {
    "use strict";

    function t(e) {
        var t = new Date(e),
            i = new Array;
        i[0] = "January", i[1] = "February", i[2] = "March", i[3] = "April", i[4] = "May", i[5] = "June", i[6] = "July", i[7] = "August", i[8] = "September", i[9] = "October", i[10] = "November", i[11] = "December";
        var s = t.getDate();
        return i[t.getMonth()] + " " + s + ", " + t.getFullYear()
    }
    window.loadMore = function(i, s) {
        var o = {
                siteUrl: i.siteUrl,
                totalPosts: i.totalPosts,
                loadMoreBtn: i.loadMoreBtn,
                postContainer: i.postContainer,
                postStyle: i.postStyle
            },
            r = {
                postType: s.postType,
                perPage: s.perPage,
                postOrder: s.postOrder,
                showImage: s.showImage,
                showTitle: s.showTitle,
                showExcerpt: s.showExcerpt,
                showMeta: s.showMeta,
                metaPosition: s.metaPosition,
                excerptLength: s.excerptLength,
                btnText: s.btnText,
                categories: s.categories
            },
            a = r.perPage;
        o.loadMoreBtn.on("click", function(i) {
            if (i.preventDefault(), e(this).addClass("button--loading"), e(this).find("span").html("Loading..."), "" == s.categories) var n = o.siteUrl + "wp-json/wp/v2/" + s.postType + "?per_page=" + r.perPage + "&offset=" + a + "&order=" + r.postOrder + "&_embed";
            else n = o.siteUrl + "wp-json/wp/v2/" + s.postType + "?categories=" + r.categories + "&per_page=" + r.perPage + "&offset=" + a + "&order=" + r.postOrder + "&_embed";
            e.ajax({
                url: n,
                type: "GET",
                success: function(i) {
                    ! function(e) {
                        if ("timeline" === o.postStyle) {
                            for (var i = "", s = 0; s < e.length; s++) {
                                if (e[s]._links["wp:featuredmedia"]) var a = 'style="background-image: url(' + e[s]._embedded["wp:featuredmedia"][0].source_url + ');"';
                                else var a = "";
                                var n = new Date(e[s].date);
                                i += '<article class="wpkoi-elements-timeline-post wpkoi-elements-timeline-column">', i += '<div class="wpkoi-elements-timeline-bullet"></div>', i += '<div class="wpkoi-elements-timeline-post-inner">', i += '<a class="wpkoi-elements-timeline-post-link" href="' + e[s].link + '" title="' + e[s].title.rendered + '">', i += '<time datetime="' + t(n) + '">' + t(n) + "</time>", i += '<div class="wpkoi-elements-timeline-post-image" ' + a + " ></div>", 1 == r.showExcerpt && (i += '<div class="wpkoi-elements-timeline-post-excerpt">', i += "" + e[s].excerpt.rendered.split(/\s+/).slice(0, r.excerptLength).join(" "), i += "</div>"), 1 == r.showTitle && (i += '<div class="wpkoi-elements-timeline-post-title">', i += "<h2>" + e[s].title.rendered + "</h2>", i += "</div>"), i += "</a>", i += "</div>", i += "</div>", i += "</article>"
                            }
                            o.postContainer.append(i)
                        } else if ("grid" === o.postStyle) {
                            for (var i = "", s = 0; s < e.length; s++) {
                                if (e[s]._links["wp:featuredmedia"]) var a = '<img src="' + e[s]._embedded["wp:featuredmedia"][0].source_url + '" />';
                                else var a = "";
                                var n = new Date(e[s].date);
                                i += '<article class="wpkoi-elements-grid-post wpkoi-elements-post-grid-column">', i += '<div class="wpkoi-elements-grid-post-holder">', i += '<div class="wpkoi-elements-grid-post-holder-inner">', e[s]._links["wp:featuredmedia"] && (i += '<div class="wpkoi-elements-entry-media">', i += '<div class="wpkoi-elements-entry-overlay">', i += '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>', i += '<a href="' + e[s].link + '"></a>', i += "</div>", 1 == r.showImage && (i += '<div class="wpkoi-elements-entry-thumbnail">' + a, i += "</div>"), i += "</div>"), i += '<div class="wpkoi-elements-entry-wrapper">', i += '<header class="wpkoi-elements-entry-header">', 1 == r.showTitle && (i += '<h2 class="wpkoi-elements-entry-title"><a class="wpkoi-elements-grid-post-link" href="' + e[s].link + '" title="' + e[s].title.rendered + '">' + e[s].title.rendered + "</a></h2>"), 1 == r.showMeta && "meta-entry-header" == r.metaPosition && (i += '<div class="wpkoi-elements-entry-meta">', i += '<span class="wpkoi-elements-posted-by"><a href="' + e[s]._embedded.author[0].link + '">' + e[s]._embedded.author[0].name + "</a></span>", i += '<span class="wpkoi-elements-posted-on"><time datetime="' + t(n) + '">' + t(n) + "</time></span>", i += "</div>"), i += "</header>", i += '<div class="wpkoi-elements-entry-content">', 1 == r.showExcerpt && (i += '<div class="wpkoi-elements-grid-post-excerpt">', i += "<p>" + e[s].excerpt.rendered.split(/\s+/).slice(0, r.excerptLength).join(" ") + "...</p>", i += "</div>"), i += "</div>", i += "</div>", 1 == r.showMeta && "meta-entry-footer" == r.metaPosition && (i += '<div class="wpkoi-elements-entry-footer">', i += '<div class="wpkoi-elements-author-avatar">', i += '<a href="' + e[s]._embedded.author[0].link + '">', i += '<img src="' + e[s]._embedded.author[0].avatar_urls[96] + '" class="avatar avatar-96 photo" />', i += "</a>", i += "</div>", i += '<div class="wpkoi-elements-entry-meta">', i += '<div class="wpkoi-elements-posted-by">', i += '<a href="' + e[s]._embedded.author[0].link + '">' + e[s]._embedded.author[0].name + "</a>", i += "</div>", i += '<div class="wpkoi-elements-posted-on">', i += '<time datetime="' + t(n) + '">' + t(n), i += "</time>", i += "</div>", i += "</div>", i += "</div>"), i += "</div>", i += "</article>"
                            }
                            o.postContainer.append(i)
                        }
                    }(i), "grid" === o.postStyle && (e(".wpkoi-elements-post-grid").masonry("destroy"), setTimeout(function() {
                        e(".wpkoi-elements-post-grid").masonry({
                            itemSelector: ".wpkoi-elements-grid-post",
                            percentPosition: !0,
                            columnWidth: ".wpkoi-elements-post-grid-column"
                        })
                    }, 100)), o.loadMoreBtn.removeClass("button--loading"), o.loadMoreBtn.find("span").html(r.btnText), (a += r.perPage) >= o.totalPosts && o.loadMoreBtn.remove()
                },
                error: function(e) {
                    console.log("Something went wrong!")
                }
            })
        })
    }
}(jQuery);