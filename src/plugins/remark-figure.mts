import {visit} from "unist-util-visit";
const transformer=(node)=>{
	if(node.type==="leafDirective"&&node.name==="figure"){
		const data=node.data??(node.data={});
		data.hName="div";
		const className=["exam-figure"];
		if("float" in (node.attributes??{})){
			className.push("exam-figure-float");
		}
		if(node.attributes?.src.endsWith(".svg")){
			className.push("exam-figure-svg");
		}
		data.hProperties={
			className,
			src:node.attributes?.src,
		};
	}
};
export default function remarkFigure(){
	return (tree)=>{
		visit(tree,transformer);
	};
}
