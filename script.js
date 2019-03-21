$(function(){
    $('#sportovci p').hide();
    $('#sportovci img').hide();
    $('#sportovci h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#444'});
        } else {
            $(this).css({'background-color':'#888'});
        }
        $(this).nextUntil('h4').toggle(200);
    });

    setInterval(zmena1, 10000);
    setInterval(zmena2, 3000);
    var index1=1;
    var index2=1;
    function zmena1(){
        var nadpis = $('#zajimavosti h4');
        var p = $('#zajimavosti p');
        nadpis.text(sportovci[index1].jmeno)
        p.text(sportovci[index1].zajimavost);
        if(index1<sportovci.length - 1){
            index1++;
        }else{
            index1=0;
        }
    };
    function zmena2(){
        var photo = $('#OH img');
        var fig = $('#OH figcaption');
        photo.attr("src", "img/"+OH[index2].photo);
        fig.text(OH[index2].jmeno);
        if(index2<OH.length - 1){
            index2++;
        }else{
            index2=0;
        }
    };

})