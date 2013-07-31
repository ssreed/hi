$(function(){

    function Hi() {
        var app = this;
        app.icon = $('.icon');
        app.window = $(window);
        app.navigation = $('.main-navigation');
        app.offset = app.navigation.offset().top;
    }

    Hi.prototype.init = function() {
        console.log('App initialized!');
        app.menu();
    }

    Hi.prototype.menu = function() {

        app.icon.on('mouseover', function(){
            
        });

        app.window.on('scroll', function(){
            if(app.window.scrollTop() > app.offset) {
                app.navigation.addClass('stuck');
            } else {
                app.navigation.removeClass('stuck');
            }
        });
    }


    // Hi.prototype.hideDiv = function() {
    //     console.log(app.window.width());
    //     if(app.window.width() < 800) {
    //         app.icon.hide();
    //     } else {
    //         app.icon.show();
    //     }
    // }

    var app = new Hi();
        app.init();
});