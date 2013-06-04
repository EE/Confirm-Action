# JQuery Confirm Action Plugin

jQuery plugin that extend standard confirm dialog. Provide callback and can be also configured for each element through data attributes.

### Basic usage

Place in html code following div element

    <a class="confirm-action" data-url="/api/some-action.json"></div>

Initialize plugin with

    $('.confirm-action').confirmAction({
        'type': 'POST',
        'message': 'Are you REALLY REALLY sure you want to do that?'
    });


### Default options

    {
        url: null,
        message: 'Are you sure?',
        type: 'GET'
    }

url option is mandatory and is usually set as data-url attribute. Without it plugin won't innitialize for this element

### Callback

    $('.confirm-action').confirmAction(function(response){

        // hide parent tr in table
        $(this).parents('tr:first').fadeOut();

    });

### Callback with options

    $('.confirm-action').confirmAction({
        type: 'POST'
    },function(response){

        // hide parent tr in table
        $(this).parents('tr:first').fadeOut();
    });

### License
Released under the [MIT license](https://github.com/EE/Confirm-Action/blob/master/LICENSE).