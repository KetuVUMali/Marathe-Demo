!(function (e) {
  "use strict";
  e(window),
    e(document),
    e("body"),
    (e.fn.exists = function () {
      return this.length > 0;
    });
  var t = e(".js-sticky").length;
  e(document).ready(function () {
    var i, s, a, n;
    e(".dropdown-menu a.dropdown-toggle").on("click", function (t) {
      return (
        e(this).next().hasClass("show") ||
          e(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show"),
        e(this).next(".dropdown-menu").toggleClass("show"),
        e(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function (t) {
            e(".dropdown-submenu .show").removeClass("show");
          }),
        !1
      );
    }),
      e(".popup-gallery").magnificPopup({
        delegate: "a.popup-img",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function (e) {
            return e.el.attr("title") + "<small>by Marsel Van Oosten</small>";
          },
        },
      }),
      e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists() &&
        e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        }),
      (s = (i = document.querySelector(".scroll-top path")).getTotalLength()),
      (i.style.transition = i.style.WebkitTransition = "none"),
      (i.style.strokeDasharray = s + " " + s),
      (i.style.strokeDashoffset = s),
      i.getBoundingClientRect(),
      (i.style.transition = i.style.WebkitTransition =
        "stroke-dashoffset 10ms linear"),
      (a = function () {
        var t = e(window).scrollTop(),
          a = e(document).height() - e(window).height();
        i.style.strokeDashoffset = s - (t * s) / a;
      })(),
      e(window).scroll(a),
      e(window).on("scroll", function () {
        e(this).scrollTop() > 50
          ? e(".scroll-top").addClass("active-progress")
          : e(".scroll-top").removeClass("active-progress");
      }),
      e(".scroll-top").on("click", function (t) {
        return (
          t.preventDefault(), e("html, body").animate({ scrollTop: 0 }, 550), !1
        );
      }),
      e(window).on("scroll", function () {
        e(window).scrollTop() >= 100
          ? e("#header-wrap").addClass("fixed-header")
          : e("#header-wrap").removeClass("fixed-header");
      }),
      e("[data-bg-color]").each(function (t, i) {
        e(i).css("background-color", e(i).data("bg-color"));
      }),
      e("[data-text-color]").each(function (t, i) {
        e(i).css("color", e(i).data("text-color"));
      }),
      e("[data-bg-img]").each(function () {
        e(this).css("background-image", "url(" + e(this).data("bg-img") + ")");
      }),
      (n = e(".progress")).length &&
        n.each(function () {
          var t = e(this);
          t.appear(function () {
            var e = t.data("value");
            t.find(".progress-bar").animate({ width: e + "%" }, 1e3);
          });
        }),
      e(".ht-nav-toggle").on("click", function (t) {
        t.preventDefault(),
          e(this),
          e("body").hasClass("menu-show")
            ? (e("body").removeClass("menu-show"),
              e("#ht-main-nav > .ht-nav-toggle").removeClass("show"))
            : (e("body").addClass("menu-show"),
              setTimeout(function () {
                e("#ht-main-nav > .ht-nav-toggle").addClass("show");
              }, 900));
      }),
      e(".service-item").mouseenter(function () {
        e(".service-item.service-active").removeClass("service-active"),
          e(this).removeClass(".service-item").addClass("service-active");
      }),
      e(".btn-product-up").on("click", function (t) {
        t.preventDefault();
        var i = Number(e(this).next().val());
        i > 1 &&
          e(this)
            .next()
            .val(i - 1);
      }),
      e(".btn-product-down").on("click", function (t) {
        t.preventDefault();
        var i = Number(e(this).prev().val());
        e(this)
          .prev()
          .val(i + 1);
      }),
      (function e() {
        if ("" != t) {
          document.querySelector(".js-sticky");
          var i = new Sticksy(".js-sticky", { topSpacing: 100 });
          i.onStateChanged = function (e) {
            "fixed" === e
              ? i.nodeRef.classList.add("sticky-item")
              : i.nodeRef.classList.remove("sticky-item");
          };
        }
      })(),
      e("#particles-js").each(function () {
        particlesJS({
          particles: {
            number: { value: 100, density: { enable: !0, value_area: 4e3 } },
            color: { value: "random" },
            shape: {
              type: "polygon",
              polygon: { nb_sides: 6 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 1,
              random: !0,
              anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 },
            },
            size: {
              value: 3,
              random: !0,
              anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 },
            },
            move: {
              enable: !0,
              speed: 1,
              direction: "none",
              random: !0,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 600, rotateY: 600 },
            },
          },
          retina_detect: !0,
        });
      });
  }),
    e(window).on("load", function () {
      var e, t, i, s;
      (e = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      })),
        (t = {
          numberGreaterThan50: function () {
            var e;
            return parseInt($(this).find(".number").text(), 10) > 50;
          },
          ium: function () {
            return $(this).find(".name").text().match(/ium$/);
          },
        }),
        $(".portfolio-filter").on("click", "button", function () {
          var i = $(this).attr("data-filter");
          (i = t[i] || i), e.isotope({ filter: i });
        }),
        $(".portfolio-filter").each(function (e, t) {
          var i = $(t);
          i.on("click", "button", function () {
            i.find(".is-checked").removeClass("is-checked"),
              $(this).addClass("is-checked");
          });
        }),
        (i = $(".masonry")),
        (s = $(".portfolio-filter")),
        i.exists() &&
          (i.isotope({ resizable: !0, itemSelector: ".masonry-brick" }),
          s.on("click", "button", function () {
            var e = $(this).attr("data-filter");
            i.isotope({ filter: e });
          }));
    });
})(jQuery),
  (function (e) {
    "use strict";
    e(window),
      e(document),
      e("body"),
      (e.fn.exists = function () {
        return this.length > 0;
      }),
      e(document).ready(function () {
        new Swiper(".service-swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          speed: 5e3,
          loop: !0,
          delay: 7e3,
          autoplay: !0,
          pagination: { el: "#service-pagination", clickable: !0 },
          navigation: {
            nextEl: "#service-swiper-button-next",
            prevEl: "#service-swiper-button-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 2, spaceBetween: 0 },
            1024: { slidesPerView: 2, spaceBetween: 0 },
            1600: { slidesPerView: 2, spaceBetween: 0 },
          },
        }),
          new Swiper(".client-swiper", {
            slidesPerView: 6,
            spaceBetween: 30,
            speed: 2500,
            loop: !0,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            pagination: { el: "#client-pagination", clickable: !0 },
            navigation: {
              nextEl: "#client-swiper-button-next",
              prevEl: "#client-swiper-button-prev",
            },
            breakpoints: {
              0: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            },
          });
      });
  })(jQuery);
