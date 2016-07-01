$('a').click(function (e) {
    var inner1 = $('.pulse-inner1');
    if (inner1) {
        inner1.remove();
    }
    var $this = $(this);
    var pointX = e.pageX;
    var pointY = e.pageY;
    var pointT = $this.offset().top;
    var pointL = $this.offset().left;
    var width = $this.width();
    var height = $this.height();
    $this.append('<div class="pulse-inner1"></div>');
    var r = (pointX - pointL) > (width / 2) ? (pointX - pointL) : width - (pointX - pointL);
    $('.pulse-inner1').css({
        "height": r * 2,
        width: r * 2,
        "position": 'absolute',
//            "top":(height/2-width/2)+'px'  位于正中心
        "left": -(r - (pointX - pointL)) + 'px',
        "top": -(r - pointY + pointT) + 'px'
    });
    console.log(pointX + 'and' + pointY);
    console.log(pointT + 'and' + pointL);


})