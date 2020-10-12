$(document).ready(function () {
    $("#design-icon").click(function () {
        $(".show-design-pt-1").toggle();
        $("#design-icon").toggle();
    })
})
$(document).ready(function () {
    $("#development-icon").click(function () {
        $(".show-design-pt-2").toggle();
        $("#development-icon").toggle();
    })
})
$(document).ready(function () {
    $("#product-icon").click(function () {
        $(".show-design-pt-3").toggle();
        $("#product-icon").toggle();
    })
})
$(document).ready(function () {
    $(".show-design-pt-1").click(function () {
        $("#design-icon").toggle();
        $(".show-design-pt-1").toggle();
    })
})
$(document).ready(function () {
    $(".show-design-pt-2").click(function () {
        $("#development-icon").toggle();
        $(".show-design-pt-2").toggle();
    })
})
$(document).ready(function () {
    $(".show-design-pt-3").click(function () {
        $("#product-icon").toggle();
        $(".show-design-pt-3").toggle();
    }) 
})
