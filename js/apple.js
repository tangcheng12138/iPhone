$(document).ready(function () {
    $('.inter').click(function () {
        $('#particles-js').css('display','none')
    })
    $('#bag').mouseenter(function () {
        $('#sideBar').css({'animation' : 'liAnimations 1s',
            'right':'0'})
    })
    $('#bag').mouseleave(function () {
        $('#sideBar').css({'animation' : 'liAnimations1 1s',
            'right':'-300px'})
    })
})