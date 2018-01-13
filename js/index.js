var listKuang = $( '#list_kuang' )
var listTool = $( '#list_tool' )
var listStudy = $( '#list_study' )
var pageNavKuang = $( '#pageNav_kuang' )
var pageNavTool = $( '#pageNav_tool' )
var pageNavStudy = $( '#pageNav_study' )

$( function () {
    console.log( 'index[9]------------' , window.location.pathname.split( '/' ) )
    $.ajax( {
        type       : 'GET' ,
        contentType: 'application/json;charset=utf-8' ,
        url        : window.location.pathname.split( '/' )[ 1 ] == 'index.html' ? 'kuang.json' : 'android.json' ,
        dataType   : 'json' ,
        success    : function ( res ) {
            var kuang = res.data.kuang

            kuang.sort( function ( v1 , v2 ) {
                return v1.name > v2.name
            } )
            kuang.map( ( obj , index ) => {
                let node_item = $( '#ex_1' ).clone()
                node_item.removeAttr( 'id' )
                node_item.find( '.title' ).text( obj.name )
                node_item.find( '.marks' ).text( obj.mark )
                node_item.find( '.pngIcon' ).attr( 'src' , obj.img )
                node_item.find( '.btn-group a' ).each( ( j , element ) => {
                    let l = obj.link[ j ]
                    if ( l != null ) {
                        $( element ).attr( 'href' , l )
                    } else {
                        $( element ).remove()
                    }
                } )
                listKuang.append( node_item )
            } )

            for ( var i = 64 ; i < 91 ; i++ ) {
                let node_item = $( '#ex_3' ).clone()
                node_item.text( String.fromCharCode( i ) )
                $( node_item ).bind( 'click' , i , function ( event ) {
                    var arr = kuang.filter( function ( v ) {
                        if ( event.data == 64 ) {
                            return true
                        } else {
                            return String.fromCharCode( event.data ) == v.name.charAt( 0 )
                        }
                    } )
                    freshKuang( arr )
                } )
                pageNavKuang.append( node_item )
            }
            pageNavKuang.find( ':eq(1)' ).text( '*' )


            var tool = res.data.tool
            tool.sort( function ( v1 , v2 ) {
                return v1.name > v2.name
            } )
            tool.map( ( obj ) => {
                let node_item = $( '#ex_2' ).clone()
                node_item.removeAttr( 'id' )
                node_item.find( '.title' ).text( obj.name )
                node_item.find( '.marks' ).text( obj.mark )
                node_item.find( '.pngIcon' ).attr( 'src' , obj.img )
                node_item.attr( 'href' , obj.link )
                listTool.append( node_item )
            } )

            for ( var i = 64 ; i < 91 ; i++ ) {
                let node_item = $( '#ex_4' ).clone()
                node_item.text( String.fromCharCode( i ) )
                $( node_item ).bind( 'click' , i , function ( event ) {
                    var arr = tool.filter( function ( v ) {
                        if ( event.data == 64 ) {
                            return true
                        } else {
                            return String.fromCharCode( event.data ) == v.name.charAt( 0 )
                        }
                    } )
                    freshTool( arr )
                } )
                pageNavTool.append( node_item )
            }
            pageNavTool.find( ':eq(1)' ).text( '*' )

            var study = res.data.study
            study.sort( function ( v1 , v2 ) {
                return v1.name > v2.name
            } )
            study.map( ( obj ) => {
                let node_item = $( '#ex_6' ).clone()
                node_item.removeAttr( 'id' )
                node_item.find( '.title' ).text( obj.name )
                node_item.find( '.marks' ).text( obj.mark )
                node_item.attr( 'href' , obj.link )
                listStudy.append( node_item )
            } )
            for ( var i = 64 ; i < 91 ; i++ ) {
                let node_item = $( '#ex_5' ).clone()
                node_item.text( String.fromCharCode( i ) )
                $( node_item ).bind( 'click' , i , function ( event ) {
                    var arr = study.filter( function ( v ) {
                        if ( event.data == 64 ) {
                            return true
                        } else {
                            return String.fromCharCode( event.data ) == v.name.charAt( 0 )
                        }
                    } )
                    freshStudy( arr )
                } )
                pageNavStudy.append( node_item )
            }
            pageNavStudy.find( ':eq(1)' ).text( '*' )
        }
    } )

    function freshKuang( v ) {
        listKuang.find( '#ex_1' ).siblings().remove()
        v.map( ( obj , index ) => {
            let node_item = $( '#ex_1' ).clone()
            node_item.removeAttr( 'id' )
            node_item.find( '.title' ).text( obj.name )
            node_item.find( '.marks' ).text( obj.mark )
            node_item.find( '.pngIcon' ).attr( 'src' , obj.img )
            node_item.find( '.btn-group a' ).each( ( j , element ) => {
                let l = obj.link[ j ]
                if ( l != null ) {
                    $( element ).attr( 'href' , l )
                } else {
                    $( element ).remove()
                }
            } )
            listKuang.append( node_item )
        } )
    }

    function freshTool( v ) {
        listTool.find( '#ex_2' ).siblings().remove()
        v.map( ( obj , index ) => {
            let node_item = $( '#ex_2' ).clone()
            node_item.removeAttr( 'id' )
            node_item.find( '.title' ).text( obj.name )
            node_item.find( '.marks' ).text( obj.mark )
            node_item.find( '.pngIcon' ).attr( 'src' , obj.img )
            node_item.attr( 'href' , obj.link )
            listTool.append( node_item )
        } )
    }

    function freshStudy( v ) {
        listStudy.find( '#ex_6' ).siblings().remove()
        v.map( ( obj , index ) => {
            let node_item = $( '#ex_6' ).clone()
            node_item.removeAttr( 'id' )
            node_item.find( '.title' ).text( obj.name )
            node_item.find( '.marks' ).text( obj.mark )
            node_item.find( '.pngIcon' ).attr( 'src' , obj.img )
            node_item.attr( 'href' , obj.link )
            listStudy.append( node_item )
        } )
    }
} )