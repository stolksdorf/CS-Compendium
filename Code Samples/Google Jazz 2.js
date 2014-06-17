

-----------------(10----------------20)---------------

---(1-5)-----(9-------12)-(15-18)-------(25-30)-------


(10, 12), (15, 18) -> 5


(10, 20)
(1,5), (9,12),(15-18),(25,30)


overlap = function(int, listOfInts){
	var sub = function(intA, intB){
		if(intA[1] < intB[0] || intB[1] < intA[0]) return 0;
		var start = max(intA[0], intB[0]);
var end = min(intA[1], intB[1]);
		return end - start;
	}
	var result = 0;
	for(var i in listOfInts){
		var currInt = listOfInts[i];
		result += sub(int, currInt);
	}
	return result;
}

///////////////////


function getWordAtIndex(index) --- returns word that is located there. ‘’ if index is larger than size of the dictionary.

Need:
function getIndexOfWord(word) --- returns index at which word is located and -1 if word is not in the dictionary.


getIndexOfWord = function(word)




‘dog’

index 1 ‘a’
idnex 2 ‘
…

index 64
index 128

var compareString(s1, s2) -> true if s1 < s2

“a”, “”,

getIndexOfWord = function(word){
	var result = -1;
	var index = 1;
var lastIndex;

	var bSearch = function(word, i1, i2){
		var midPoint = Math.floor((i2-i1)/2) + i1;
		if(midPoint === i1) return -1;
if(getWordAtIndex(midpoint) === word){
 return midPoint;
}
		if(compareString(word, getWordAtIndex(midpoint)){
			return bSearch(word, i1, midPoint);
		} else{
			return bSearch(word, midPoint, i2);
		}
	}

	var checkWord;
	while(1){
		checkWord = getWordAtIndex(index);
if(checkWord === word){
result = index;
break;
}
if(compareString(word, checkWord) || checkWord === ‘’){
	result = bSearch(lastIndex, index);
break;
} else{
	lastIndex = index;
	index = index *2;
}
}

	return result;
}

zebra

1 -> a
2 -> xlyo
3 _. ZZZ
4 -> “”

16 -> xylphone
32 -> “”





