import {JSON2HTML} from './json2html.js'
export function render(){
	var j = JSON2HTML
	var r = j.build({
		tag: "h1",
		child: [
			{
				tag:"u",
				child:[
					{
						tag:'i',
						child:['I am rita page']
					}
				]
			}			
		],
	})	
    return r 	
    // var f = '<h1><u><i>I am rita page</i></u></h1>'
}
    