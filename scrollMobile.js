let lastScrollTop = 0;
const idMenuMobile = document.getElementById('menu-mobile');
$(window).scroll(function (event) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
        // downscroll code
        $(idMenuMobile).css({
            "bottom": "0"
        })
        console.log("up", )
    } else {
        // upscroll code
        $(idMenuMobile).css({
            "bottom": "-65px"
        })
        console.log('down')
    }
    lastScrollTop = st;

    // function clickToSearch() {
    //     console.log('search')
    // }
    $('#searchMobile').click(function (e) {
        e.preventDefault(); /*your_code_here;*/
        console.log('search')
        $("#search_input").focus();

        return false;
    })



});
$(document).ready(function () {
    console.log($("#product_detail_page"))
    let menu = $("#product_detail_page");
    if (menu.is(menu)) {
        console.log("menu:", menu, "ismenu: ", menu.is(menu))
        $('#menu-mobile').css({
            "display": "none"
        });
        console.log('have')
    } else {
        console.log('dont have ')
    }

});