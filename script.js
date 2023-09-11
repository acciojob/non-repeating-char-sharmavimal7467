function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length==0){
		return("null");
	}
	else{
		let charMap = {};
	for(let char of str){
		charMap[char] = (charMap[char]||0)+1;
	}
		for(let i = 0;i<str.length;i++){
			if(charMap[str[i]]===1){
				return str[i];
			}
		}
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
