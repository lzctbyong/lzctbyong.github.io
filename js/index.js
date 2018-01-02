var listFe = $( '.list_Fe' )
var listTools = $( '.list_tls' )
var listSty = $( '.list_sty' )
var name_fe = [
    {
        name: 'Vue.Js' ,
        mark: '构建用户界面的渐进式框架' ,
        link: [ 'https://vuejs.org/index.html' , 'https://vuejs.org/v2/api/' , 'https://cn.vuejs.org/' , 'https://cn.vuejs.org/v2/api/' ]
    } ,
    {
        name: 'BootStrap' ,
        mark: '简洁、直观、强悍的前端开发框架' ,
        link: [ 'https://getbootstrap.com/' , 'https://getbootstrap.com/docs/4.0/getting-started/introduction/' , 'http://www.bootcss.com/' , 'https://v3.bootcss.com/' ]
    } ,
    {
        name: 'AngularJS' ,
        mark: 'MVC架构的JavaScript开发工具' ,
        link: [ 'https://www.angular.io/' , null , null , null ]
    } ,
    {
        name: 'React' ,
        mark: '用于构建用户界面的JavaScript库' ,
        link: [ 'https://reactjs.org' , 'https://reactjs.org/docs/hello-world.html' , 'https://react.bootcss.com/' , 'https://react.bootcss.com/react/docs/hello-world.html' ]
    } ,
    {
        name: 'JQuery' ,
        mark: '一个高效、精简并且功能丰富的 JavaScript 工具库' ,
        link: [ 'https://jquery.com/' , 'https://api.jquery.com/' , 'https://www.jquery123.com/' , 'https://www.jquery123.com/' ]
    } ,
    {
        name: 'Ionic' ,
        mark: '一个强大的 HTML5 应用程序开发框架' ,
        link: [ 'https://ionicframework.com/' , 'https://ionicframework.com/docs/' , 'http://www.ionic-china.com/' , null ]
    } ,
    {
        name: 'Webpack' ,
        mark: '静态模块打包器' ,
        link: [ 'https://webpack.js.org/' , 'https://webpack.js.org/concepts/' , 'https://doc.webpack-china.org/' , 'https://doc.webpack-china.org/concepts/' ]
    },
    {
        name: 'Sass' ,
        mark: '最成熟、最稳定、最强大的专业级CSS扩展语言' ,
        link: [ 'http://sass-lang.com/' , 'http://sass-lang.com/documentation/file.SASS_REFERENCE.html' , 'https://www.sass.hk/' , 'https://www.sass.hk/docs/' ]
    }
]
var name_tools = [
    { name: 'WebStorm' , mark: '前端开发神器' , link: 'https://www.jetbrains.com/webstorm/' } ,
    { name: 'BootCDN' , mark: '稳定、快速、免费的前端开源项目 CDN 加速服务' , link: 'http://www.bootcdn.cn/' } ,
]
var name_study = [
    { name: 'Runoob' , mark: '菜鸟教程' , link: 'http://www.runoob.com/' } ,
]
$( function () {
    name_fe.sort( function ( v1 , v2 ) {
        return v1.name > v2.name
    } )
    name_tools.sort( function ( v1 , v2 ) {
        return v1.name > v2.name
    } )
    name_fe.map( ( obj , index ) => {
        let node_item = $( '#ex_1' ).clone()
        node_item.removeAttr( 'id' )
        node_item.find( '.itemTitle' ).text( obj.name )
        node_item.find( '.mark' ).text( obj.mark )
        node_item.find( '.bottom a' ).each( ( j , element ) => {
            let l = obj.link[ j ]
            if ( l != null ) {
                $( element ).attr( 'href' , l )
            } else {
                $( element ).remove()
            }
        } )
        listFe.append( node_item )
    } )
    name_tools.map( ( obj ) => {
        let node_item = $( '#ex_2' ).clone()
        node_item.removeAttr( 'id' )
        node_item.find( 'a' ).attr( 'href' , obj.link )
        node_item.find( '.itemTitle' ).text( obj.name )
        node_item.find( '.mark' ).text( obj.mark )
        listTools.append( node_item )
    } )
    name_study.map( ( obj ) => {
        let node_item = $( '#ex_3' ).clone()
        node_item.removeAttr( 'id' )
        node_item.find( 'a' ).attr( 'href' , obj.link )
        node_item.find( '.itemTitle' ).text( obj.name )
        node_item.find( '.mark' ).text( obj.mark )
        listSty.append( node_item )
    } )
} )