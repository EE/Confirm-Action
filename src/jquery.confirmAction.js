(function ($) {
    'use strict';

    $.fn.confirmAction = function (options, callback) {

        if (typeof(options) === 'function') {
            callback = options;
            options = {};
        }

        var globalSettings = $.extend({}, $.fn.confirmAction.defaults, options);

        return this.each(function () {

            var elementSettings = $.extend({}, globalSettings, $(this).data());

            if (elementSettings.url == null) {

                return this;
            }

            var self = $(this);

            self.on('click', function (event) {
                event.preventDefault();

                if (confirm(elementSettings.message)) {
                    $.ajax({
                        url: elementSettings.url,
                        type: elementSettings.type

                    }).done(function (response) {

                            // check if callback is a function
                            if (typeof callback === 'function') {
                                callback.call(self, response, self);
                            }
                        });
                }
            });

            return this;
        });
    };

    $.fn.confirmAction.defaults = {
        url: null,
        message: 'Are you sure?',
        type: 'GET'
    };
})(jQuery);