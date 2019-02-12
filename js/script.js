$( document ).ready(function() {

    $( "a.button-order, .btn-sevices, .btn-buy-shop, .btn-merits, .btn-buy" ).click(function( event ) {
 
        
        $(".order-container").fadeIn(200);
        return false;
    });

    $( "a.order-closed" ).click(function( event ) {
 
        
        $(".order-container").fadeOut(200);
        return false;
    });
    
   
});

