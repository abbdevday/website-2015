(function($) {
    $(document).ready(function () {
        $(".primary-button-container li").click(function (e) {
            var href = $(this).data("href");

            if (href) {
                window.location.href = href;
            }
        });

        $(".btn-all-speakers").click(function (e) {
            window.location.href = "speakers.html";
        });
    });
})(jQuery);