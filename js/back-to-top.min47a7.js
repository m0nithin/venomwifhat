! function() {
    "use strict";
    if ("querySelector" in document && "addEventListener" in window) {
        var t = document.querySelector(".lalita-back-to-top");
        t && (window.addEventListener("scroll", function() {
            var e = window.pageYOffset,
                i = t.getAttribute("data-start-scroll");
            e > i && (t.style.opacity = "1", t.style.visibility = "visible"), e < i && (t.style.opacity = "0", t.style.visibility = "hidden")
        }), t.addEventListener("click", function(e) {
            e.preventDefault(),
                function(t, e) {
                    var i, n = window.pageYOffset,
                        o = document.body.offsetTop,
                        r = (o - n) / (e / 16);
                    i = function() {
                        window.pageYOffset <= (o || 0) && clearInterval(a)
                    };
                    var a = setInterval(function() {
                        window.scrollBy(0, r), i()
                    }, 16)
                }(document.body, t.getAttribute("data-scroll-speed") || 400)
        }, !1))
    }
}();