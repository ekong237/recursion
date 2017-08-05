// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {
  if (typeof(input) === 'boolean' || typeof(input) === 'number' || input === null){
  		return ''+input;
  } else if (typeof(input)==='string'){
  		return '"' + input + '"';
  } else if (Array.isArray(input)){    
        var arrVals = input.reduce(function(str, el, i) {
            if(i === input.length-1){
            	return str + stringifyJSON(el);
            }
            return str + stringifyJSON(el) + ',';
        },'');            
        return '[' + arrVals + ']'; 
  } else if (typeof(input) === 'function'){
  		return '';
  } else if (typeof(input) === 'object'){
  		var objKeys = Object.keys(input);
  		var objVals = objKeys.reduce(function(str, keys, i) {
  			if (input[keys] === undefined){ return ''; }
            if(i === objKeys.length-1){
            	return str + stringifyJSON(keys) +':'+ stringifyJSON(input[keys]);
            }
            return str + stringifyJSON(keys) +':'+ stringifyJSON(input[keys])+',';
        },''); 
  		return '{' + objVals + '}';
  }
};




