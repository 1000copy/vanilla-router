import {JSON2HTML} from './json2html.js'
export function render(){
	var j = JSON2HTML
	var r = j.build({
		tag: "h1",
		attr: {
			id: "some-id",
			class: "some-class"
		},
		child: [
			'<i>I am reco Page.</i>'
		],
	})	
    return r 	
}
    