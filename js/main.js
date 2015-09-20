$(function() {
    //var animation = new TweenMax({paused:true});
    
    var $chain = $('.chain:not(.horizontal_top)'),
        $chain_top = $('.chain.horizontal_top'),
        $gear_right_bottom = $('.gear_right_bottom'),
        $gear_right_top = $('.gear_right_top'),
        $gear_saw = $('.gear_saw'),
        $gear_left_bottom = $('.gear_left_bottom'),
        $gear_center_1 = $('.gear_center_1'),
        $gear_center_2 = $('.gear_center_2'),
        $gear_center_3 = $('.gear_center_3'),
        $stopper = $('.stopper'),
        $gear_big = $('.gear_big');

    var rotation = new TimelineMax({paused:false}),
        anim = {rotation:-360, ease: Linear.easeNone,repeat:-1},
        anim_r = {rotation:360, ease: Linear.easeNone,repeat:-1},
        speed = 0.7,
        lineSpeed = 2.5,
        spanSpeed = lineSpeed +0.1;
        
        
    rotation.add( TweenMax.to($chain, speed, {backgroundPosition:"0 -34px", ease: Linear.easeNone, repeat:-1}),"start" );
    rotation.add( TweenMax.to($chain_top, speed, {backgroundPosition:"0 34px", ease: Linear.easeNone, repeat:-1} ),"start" );
    
    rotation.add( TweenMax.to($gear_right_bottom, speed*4, anim), "start" );
    rotation.add( TweenMax.to([$gear_right_top,$gear_left_bottom], speed*5, anim), "start" );
    rotation.add( TweenMax.to([$gear_saw,$gear_big], speed*15, anim), "start" );
    rotation.add( TweenMax.to([$gear_center_3,$gear_center_2], speed*10, anim_r), "start" );
    rotation.add( TweenMax.to($gear_center_1, speed*12, anim), "start" );
    
    rotation.add( TweenMax.to($stopper, 0.938*speed, { rotation: 80,repeat:-1, yoyo:true}), "start" );
    
    // Top right text
    rotation.add( TweenMax.set($(".service_title.right_top .arc"), { rotation: 55 } ) );
    rotation.add( TweenMax.to($(".service_title.right_top"), speed*lineSpeed, {width: 283, onComplete: function(){
        TweenMax.set($(".service_title.right_top"), {width: 410})
    } }), "start");

    rotation.add( TweenMax.to($(".service_title.right_top .marker"), speed, {opacity: 1}), lineSpeed );
    rotation.add( TweenMax.to($(".service_title.right_top span"), speed, {opacity: 1}), spanSpeed );
    
    
    
    // Top left text
    rotation.add( TweenMax.set($(".service_title.left_top .arc"), { rotation: -55 } ) );
    rotation.add( TweenMax.to($(".service_title.left_top"), speed*lineSpeed, {width: 297, onComplete: function(){
        TweenMax.set($(".service_title.left_top"), {width: 410})
    } }), spanSpeed);

    rotation.add( TweenMax.to($(".service_title.left_top .marker"), speed, {opacity: 1}), lineSpeed + spanSpeed  );
    rotation.add( TweenMax.to($(".service_title.left_top span"), speed, {opacity: 1}), spanSpeed*2  );
    
    // Bottom right text
    rotation.add( TweenMax.set($(".service_title.right_bottom .arc"), { rotation: 110 } ) );
    rotation.add( TweenMax.to($(".service_title.right_bottom"), speed*lineSpeed, {width: 330, onComplete: function(){
        TweenMax.set($(".service_title.right_bottom"), {width: 427})
    } }), spanSpeed*2);
    
    rotation.add( TweenMax.to($(".service_title.right_bottom .marker"), speed, {opacity: 1}), lineSpeed + spanSpeed*2  );
    rotation.add( TweenMax.to($(".service_title.right_bottom span"), speed, {opacity: 1}), spanSpeed*3 );
    
     // Bottom left text
    rotation.add( TweenMax.set($(".service_title.left_bottom .arc"), { rotation: -120 } ) );
    rotation.add( TweenMax.to($(".service_title.left_bottom"), speed*lineSpeed, {width: 282, onComplete: function(){
        TweenMax.set($(".service_title.left_bottom"), {width: 410})
    } }), spanSpeed*3);

    rotation.add( TweenMax.to($(".service_title.left_bottom .marker"), speed, {opacity: 1}), lineSpeed + spanSpeed*3  );
    rotation.add( TweenMax.to($(".service_title.left_bottom span"), speed, {opacity: 1, onComplete: function() {
        rotation.stop();
        $stopper.animate({transform: "rotate(0deg)"}, 1000);
    }}), spanSpeed*4 );
    
  
    $(".replay").on('click',function(){
        rotation.restart();
    });

    
});
