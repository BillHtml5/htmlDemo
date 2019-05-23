(function () {
    var $zd = $(".zd");
    var timer = null;
    var _index = 0;
    var $iniL = $zd.eq(0).offset().left;
    var $iniT = $zd.eq(0).offset().top;
    init();
    function init() {
        $(".target").css({
            "left": $iniL,
            "top": $iniT
        });
    }
    $(".button1").click(function () {
        var newS = new Date();
        var stop = Math.random() * 2000 + 3000;
        timer = setInterval(function () {
            console.log(_index)
            if (new Date() - newS > stop) {
                clearInterval(timer);
                console.log($iniT, $iniL)
                end();
                $('#Tz_show span').click(function () {
                    $(this).parent().fadeOut()
                });
                return;
            }
            if (_index > $zd.length - 1) {
                _index = 0
            }
            $zd.each(function () {
                if ($(this).data("index") == _index) {
                    $iniL = $(this).offset().left;
                    $iniT = $(this).offset().top;
                }
            });
            $(".target").css({
                "left": $iniL,
                "top": $iniT
            });
            _index++;
        }, 200)
    })
    $(".button2").click(function () {
        _index = 0;
        $iniL = $zd.eq(0).offset().left;
        $iniT = $zd.eq(0).offset().top;
        init()
    })

    function end() {
        $zd.each(function () {
            if (Math.abs($(this).offset().left - $iniL) < 2 && Math.abs($(this).offset().top - $iniT) < 2) {
                var src = $(this).attr('style');
                $('.pic').attr('style', src).parent('#Tz_show').fadeIn(300);
            }
        })
    }
})()
