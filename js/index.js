var listFe = $( '.list_Fe' )
var listTools = $( '.list_Tools' )
var name_fe = [
    { name: 'VueJs' , mark: '构建用户界面的渐进式框架' , link: 'https://cn.vuejs.org/' } ,
    { name: 'BootStrap 中文网' , mark: '简洁、直观、强悍的前端开发框架' , link: 'http://www.bootcss.com/' } ,
]
var name_tools = [
    { name: 'BootCDN' , mark: '稳定、快速、免费的前端开源项目 CDN 加速服务' , link: 'http://www.bootcdn.cn/' } ,
]
$( function () {
    name_fe.sort( function ( v1 , v2 ) {
        if ( v1.name > v2.name ) {
            return 1
        } else {
            return 0
        }
    } )
    name_tools.sort( function ( v1 , v2 ) {
        if ( v1.name > v2.name ) {
            return 1
        } else {
            return 0
        }
    } )
    name_fe.map( ( obj ) => {
        let node = `<li><a href="${obj.link}" target="_blank">${obj.name}<p class="mark">${obj.mark}</p></a></li>`
        listFe.append( node )
    } )
    name_tools.map( ( obj ) => {
        let node = `<li><a href="${obj.link}" target="_blank">${obj.name}<p class="mark">${obj.mark}</p></a></li>`
        listTools.append( node )
    } )
} )