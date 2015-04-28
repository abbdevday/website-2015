(function($) {
    $(document).ready(function () {
        $(".primary-button-container li").click(function (e) {
            var href = $(this).data("href");

            if (href) {
                window.location.href = href;
            }
        });
    });
})(jQuery);