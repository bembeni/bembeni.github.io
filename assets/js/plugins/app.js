// Place any jQuery/helper plugins in here.
function cleanUpEmptyTags() {
    $("p:empty").remove();
};
window.addEventListener("load", cleanUpEmptyTags, false);

/* iOS re-orientation fix */  
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
            document.body.addEventListener('gesturestart', function() {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
}

$(function() {

    /**
     * Google Analytics event click tracking
     */

    $("#header-download-epub").on("click", function() {
        ga("send", "event", "Download actions", "click", "EPUB");
    });

    $("#header-download-mobi").on("click", function() {
        ga("send", "event", "Download actions", "click", "MOBI");
    });

    $("#header-download-pdf").on("click", function() {
        ga("send", "event", "Download actions", "click", "PDF");
    });

});