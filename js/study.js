$( function () {

    $( '#search' ).click( function () {
        var q = $( '#query' ).val()
        getData( q )
    } )

    function getData( q ) {
        $.ajax( {
            type       : 'GET' ,
            contentType: 'application/json;charset=utf-8' ,
            url        : 'study.json' ,
            dataType   : 'json' ,
            success    : function ( res ) {
                res.data.map( ( obj , index ) => {
                    var URL = obj.link + q
                    let node_item = $( '#ex_1' ).clone()
                    node_item.removeAttr( 'id' )
                    node_item.find( '.card-title' ).text( obj.name )
                    if ( obj.name == '麦子学院' ) {
                        URL += '-1'
                    }
                    node_item.find( '.card-link' ).attr( 'href' , URL )
                    $( '#list' ).append( node_item )
                } )
            }

        } )
    }
} )