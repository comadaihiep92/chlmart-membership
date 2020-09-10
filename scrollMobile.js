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
    });
});