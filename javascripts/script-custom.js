(function($) {
    $(document).ready(function () {
        $(".primary-button-container li").click(function (e) {
            console.log(e);
        });

        $(".btn-all-speakers").click(function (e) {
            window.location.href = "speakers.html";
        });
    });
})(jQuery);