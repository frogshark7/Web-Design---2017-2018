$(".h-menu-2 > ul.dropdown-menu").hover(function () {
        $(".h-menu-2 > .dropdown-toggle").css("border-left", "5px solid #434343");
    },
    function () {
        $(".h-menu-2 > .dropdown-toggle").css("border-left", "5px solid transparent");
    });
$(".h-menu-3 > ul.dropdown-menu").hover(function () {
        $(".h-menu-3 > .dropdown-toggle").css("border-left", "5px solid #434343");
    },
    function () {
        $(".h-menu-3 > .dropdown-toggle").css("border-left", "5px solid transparent");
    });
$(".h-menu-4 > ul.dropdown-menu").hover(function () {
        $(".h-menu-4 > .dropdown-toggle").css("border-left", "5px solid #434343");
    },
    function () {
        $(".h-menu-4 > .dropdown-toggle").css("border-left", "5px solid transparent");
    });
$(".h-menu-5 > ul.dropdown-menu").hover(function () {
        $(".h-menu-5 > .dropdown-toggle").css("border-left", "5px solid #434343");
    },
    function () {
        $(".h-menu-5 > .dropdown-toggle").css("border-left", "5px solid transparent");
    });
$(".h-menu-6 > ul.dropdown-menu").hover(function () {
        $(".h-menu-6 > .dropdown-toggle").css("border-left", "5px solid #434343");
    },
    function () {
        $(".h-menu-6 > .dropdown-toggle").css("border-left", "5px solid transparent");
    });


function openNav() {
    document.getElementById("myNav").style.height = "50px";
    $('#gsc-i-id1').attr('placeholder', 'Search...');

}

function closeNav() {
    document.getElementById("myNav").style.height = "0px";
}

$(document).ready(function () {
    is_expired = 0;
    $(function () {
        var timer = setInterval(hidead, 100);
        if (is_expired > 0) {
            clearInterval(timer);
        }
    });

    function hidead() {
        $(".gsc-adBlock").hide();
    };

});
