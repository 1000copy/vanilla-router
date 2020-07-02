import {JSON2HTML} from './json2html.js'
export function render(){
	var j = JSON2HTML
	var r = j.build({
		tag: "button",
		attr:{id:"inc"},
		child: ['inc'],		
	})	
    return r 	
    // var f = '<h1><u><i>I am rita page</i></u></h1>'
}
export function event(){
    return {
    	inc:{
    		click:function(){alert(42)},
    		blur: function(){console.log(42)},
    	}
    }
}