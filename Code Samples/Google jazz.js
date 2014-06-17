"(())()" -> true
"(()))(" -> false

function balancedParen(input){
if(typeof input !== ‘string’) return false;
	var count = 0;
	for(var i = input){
		var char = input[i];
		if(char ===’(‘){
			count++;
		}
		if(char === ‘)’){
			count--;
		}

		if(count < 0){
			return false;
		}
	}
	return count === 0;
}

“” -> true
“(asdasd)” -> true
“)(“ -> false
undefined -> false
56 -> false
{} -> false
true -> false

"()" "[]" "{}"

"(())()"

")))"

function fancyBalancedParen(input){
if(typeof input !== ‘string’) return false;

var dict = [{
	inc   : ‘(‘,
	dec   : ‘)’,
	count : 0
},
{
	inc   : ‘{‘,
	dec   : ‘}’,
	count : 0
},
{
	inc   : ‘[‘,
	dec   : ‘]’,
	count : 0
},
];

	for(var i = input){
		var char = input[i];
		for(var j in dict){
			var check = dict[j];
			if(char === check.inc){
				check.count++;
			}
if(char === check.dec){
				check.count--;
			}
			if(check.count < 0){
				return false;
			}
		}
	}
	var result = true;
	for(var k in dict){
		if(dict[k].count !== 0){
			result = false;
		}
	}

	return result;
}

‘(({})[])’ -> true
‘([]){{(})}’ -> false (true)
‘}{)([]’ -> false
‘}{‘ -> false


‘([)]’ -> false
'[()]' -> true

'()'
'('

function fancyBalancedParen(input){
if(typeof input !== ‘string’) return false;
	var nest = [];

var dict = [{
	inc   : ‘(‘,
	dec   : ‘)’,
},
{
	inc   : ‘{‘,
	dec   : ‘}’,
},
{
	inc   : ‘[‘,
	dec   : ‘]’,
},
];


	for(var i in input){
		var char = input[i];
		for(var j in dict){
			var check = dict[j];
			if(char === check.inc){
				nest.push(check.inc);
			}
else if(char === check.dec){
	if(nest.length === 0){
return false;
}
	if(nest[nest.length-1] !== check.inc){
		return false;
	}
				nest.pop();
			}
		}
	}
	return nest.length === 0;
}


