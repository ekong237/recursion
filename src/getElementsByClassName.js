// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var arr = [];
  //var bodyElement = (document.body); 
  checkNodes(document.body);
  return arr;

  function checkNodes (node){
  	if (node.classList.contains(className)){ 
  		arr.push(node);
  	}
  	if (Array.from(node.children).length > 0){
  		Array.from(node.children).forEach(function(current){
  			return checkNodes(current);
  		})
  	}
  }
  


};

// use document.body, element.childNodes, element.classList


// input classname
// output array of el w/ class div.user p.user 

// The Element.classList is a read-only property which returns a live DOMTokenList collection of the class attributes of the element.
// Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
// if classlist has classname, add to array
// if it has childnodes, check each node classlist, repeat

// childNodes property returns a colletion of a node's child nodes, as a NodeList object
// Get a collection of the <body> element's child nodes: var c = document.body.childNodes;
// To return a collection of a node's element nodes (excluding text and comment nodes), use the children property.
// The children property returns a collection of an element's child elements, as an HTMLCollection object. looks like arr, but not arr