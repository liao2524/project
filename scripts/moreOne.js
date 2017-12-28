$(function () {
    var num = 10;
    funScrol('','','',function () {

        var s = 0,b=10;

        for(var i = 0; i < b;i++){

            $('#more').before(' <div class="box-list">第<i>0</i>条信息</div>');

        }

        var l = $('.box-list i');

        for(var j = 0; j < l.length;j++){

            s++;

            $(l[j]).text(s);

        }

        offNo=true;
    });
});
