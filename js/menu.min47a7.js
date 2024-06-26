! function() {
    "use strict";
    if ("querySelector" in document && "addEventListener" in window) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
            var t = this;
            if (!document.documentElement.contains(this)) return null;
            do {
                if (t.matches(e)) return t;
                t = t.parentElement
            } while (null !== t);
            return null
        });
        for (var d = document.querySelectorAll(".menu-toggle"), e = document.querySelectorAll("nav .dropdown-menu-toggle"), t = document.querySelectorAll("nav ul a"), c = document.body, u = document.documentElement, o = function(e, t) {
                if (t || (t = this), t.getAttribute("data-nav")) var o = document.getElementById(t.getAttribute("data-nav"));
                else o = document.getElementById(t.closest("nav").getAttribute("id"));
                var n = o.getElementsByTagName("ul")[0];
                if (o.classList.contains("toggled")) {
                    if (o.classList.remove("toggled"), u.classList.remove("mobile-menu-open"), n.setAttribute("aria-hidden", "true"), t.setAttribute("aria-expanded", "false"), c.classList.contains("dropdown-hover"))
                        for (var r = n.querySelectorAll("li.menu-item-has-children"), s = 0; s < r.length; s++) r[s].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"), r[s].querySelector(".dropdown-menu-toggle").setAttribute("role", "presentation"), r[s].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded")
                } else if (o.classList.add("toggled"), u.classList.add("mobile-menu-open"), n.setAttribute("aria-hidden", "false"), t.setAttribute("aria-expanded", "true"), c.classList.contains("dropdown-hover"))
                    for (r = n.querySelectorAll("li.menu-item-has-children"), s = 0; s < r.length; s++) r[s].querySelector(".dropdown-menu-toggle").setAttribute("tabindex", "0"), r[s].querySelector(".dropdown-menu-toggle").setAttribute("role", "button"), r[s].querySelector(".dropdown-menu-toggle").setAttribute("aria-expanded", "false")
            }, n = 0; n < d.length; n++) d[n].addEventListener("click", o, !1);
        var r = function(e, t) {
            if (t || (t = this), (t.closest("nav").classList.contains("toggled") || u.classList.contains("slide-opened")) && !c.classList.contains("dropdown-click")) {
                e.preventDefault();
                var o = t.closest("li"),
                    n = o.querySelector(".dropdown-menu-toggle");
                if ("false" == n.getAttribute("aria-expanded") ? n.setAttribute("aria-expanded", "true") : n.setAttribute("aria-expanded", "false"), o.querySelector(".sub-menu")) var r = o.querySelector(".sub-menu");
                else r = o.querySelector(".children");
                o.classList.toggle("sfHover"), r.classList.toggle("toggled-on")
            }
            e.stopPropagation()
        };
        for (n = 0; n < e.length; n++) e[n].addEventListener("click", r, !1), e[n].addEventListener("keypress", function(e) {
            13 === (e.which || e.keyCode) && r(e, this)
        }, !1);
        var s = function() {
            for (var e = 0; e < d.length; e++)
                if (null === d[e].offsetParent) {
                    var t = d[e].closest("nav");
                    if (t && t.classList.contains("toggled")) {
                        var o = t.getElementsByTagName("ul")[0],
                            n = o.getElementsByTagName("li"),
                            r = o.getElementsByTagName("ul");
                        document.activeElement.blur(), t.classList.remove("toggled"), u.classList.remove("mobile-menu-open"), d[e].setAttribute("aria-expanded", "false");
                        for (var s = 0; s < n.length; s++) n[s].classList.remove("sfHover");
                        for (var l = 0; l < r.length; l++) r[l].classList.remove("toggled-on");
                        if (o && o.removeAttribute("aria-hidden"), c.classList.contains("dropdown-hover"))
                            for (var i = t.querySelectorAll("li.menu-item-has-children"), a = 0; a < i.length; a++) i[a].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"), i[a].querySelector(".dropdown-menu-toggle").setAttribute("role", "presentation"), i[a].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded")
                    }
                }
        };
        if (window.addEventListener("resize", s, !1), window.addEventListener("orientationchange", s, !1), c.classList.contains("dropdown-hover"))
            for (n = 0; n < t.length; n++) t[n].addEventListener("click", function(e) {
                this.hostname !== window.location.hostname && document.activeElement.blur();
                var t = this.closest("nav");
                if (t.classList.contains("toggled") || u.classList.contains("slide-opened")) {
                    var o = this.getAttribute("href");
                    if ("#" == o || "" == o) {
                        e.preventDefault();
                        var n = this.closest("li");
                        n.classList.toggle("sfHover");
                        var r = n.querySelector(".sub-menu");
                        r && r.classList.toggle("toggled-on")
                    }
                    "#" === o || "" === o || navigator.userAgent.match(/iemobile/i) || setTimeout(function() {
                        t.classList.remove("toggled"), u.classList.remove("mobile-menu-open")
                    }, 200)
                }
            }, !1)
    }
}();