(function($) {
    $.fn.fancybox = function(options) {

        var settings = $extend(defaults, options);

        var $link = this;
        var $body = $('body');
        var $modal;
        var $overlay;

        function showModal(e) {
            var href = $link.attr('href');
            $modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
            $overlay = $('<div class="fancybox-overlay">');
        e.preventDefault();

        $body.append($overlay);
        $body.append($modal);
        $overlay.one('click', hideModal);
    }
        function hideModal() {
            $modal.hide();
            $overlay.hide();
        }

        $link.on('click', showModal);
        return this;
    }
})(jQuery);
