let lastScrollTop = 0;
const idMenuMobile = document.getElementById("menu-mobile");
$(window).scroll(function (event) {
  let st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // downscroll code
    $(idMenuMobile).css({
      bottom: "0",
    });
    console.log("up");
  } else {
    // upscroll code
    $(idMenuMobile).css({
      bottom: "-65px",
    });
    console.log("down");
  }
  lastScrollTop = st;

  // function clickToSearch() {
  //     console.log('search')
  // }
  $("#searchMobile").click(function (e) {
    e.preventDefault(); /*your_code_here;*/
    console.log("search");
    $("#search_input").focus();

    return false;
  });
});
$(document).ready(function () {
  console.log($("#product_detail_page"));
  let menu = $("#product_detail_page");
  if (menu.is(menu)) {
    console.log("menu:", menu, "ismenu: ", menu.is(menu));
    $("#menu-mobile").css({
      display: "none",
    });
    console.log("have");
  } else {
    console.log("dont have ");
  }
});

// var loc = window.location.pathname;

// $("#menu-mobile ul li")
//   .find("a")
//   .each(function () {
//     $(this).toggleClass("active", $(this).attr("href") == loc);
//   });

// $(function () {
//   $("ul li").on("click", function () {
//     $(this).parent().find("li.active").removeClass("active");
//     $(this).addClass("active");
//   });
// });

$(function () {
  var url = window.location.pathname,
    urlRegExp = new RegExp(url.replace(/\/$/, "") + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
  // now grab every link from the navigation
  $("#menu-mobile a").each(function () {
    // and test its normalized href against the url pathname regexp
    if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
      $(this).addClass("active");
    }
  });
});
