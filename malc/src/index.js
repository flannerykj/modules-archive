import _ from 'lodash';
import cfg from 'cfgrammar-tool'; 

function component () {
  	var cfgtool = require('cfgrammar-tool');
	var types = cfgtool.types;
	var parser = cfgtool.parser;
	var generatorFactory = cfgtool.generator;

	var Grammar = types.Grammar;
	var Rule = types.Rule;
	var T = types.T;
	var NT = types.NT;
	var exprGrammar = Grammar([
	  Rule('E', [NT('E'), T('+'), NT('T')]),
	  Rule('E', [NT('T')]),
	  Rule('T', [NT('T'), T('*'), NT('F')]),
	  Rule('T', [NT('F')]),
	  Rule('F', [T('('), NT('E'), T(')')]),
	  Rule('F', [T('n')])
	]);
	var exprGrammar2 = Grammar([
	  Rule('A', [NT('B'), T('88'), NT('T')]),
	  Rule('B', [T('n')]),
	  Rule('A', [NT('T')]),
	  Rule('T', [NT('T'), T('*'), NT('F')]),
	  Rule('T', [NT('F')]),
	  Rule('F', [T('('), NT('A'), T(')')]),
	  Rule('F', [T('n')])
	]);

	var exprGrammar3 = Grammar([
	  Rule('A', [NT('B'), NT('C')]),
	  Rule('B', [T('a'), T('b'), T('a')]),
	  Rule('C', [NT('D'), T('e')]),
	  Rule('D', [T('c'), T('d')]),
	]);

	var exprGrammar4 = Grammar([
	  Rule('A', [NT('B'), NT('C')]),
	  Rule('C', [NT('D'), T('')]),
	  Rule('B', [T('x')]),
	  Rule('D', [NT('xy')])
	]);

	parser.parse(exprGrammar, 'n*(n+n)').length > 0; // true
	parser.parse(exprGrammar, 'n(n+n)').length > 0; // false

	var generator = generatorFactory(exprGrammar3);
	var result = generator(21); // something like 'n*((n+(n)*n+n+n*n))*n'
	var result2 = generator(29);
	var result_array = []; 

	for (var i = 0; i < 100; i++) {
		result = generator(i); 
		result_array.push(result); 
	}

  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = result_array.join('</br>');

  return element;
}

document.body.appendChild(component());