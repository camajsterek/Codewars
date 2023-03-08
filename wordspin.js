//Write a function that takes in a string of one or more words, and returns the same string,
//but with all five or more letter words reversed (Just like the name of this Kata).
//Strings passed in will consist of only letters and spaces.
//Spaces will be included only when more than one word is present.

function spinWords(string) {
	//TODO Have fun :)
	const substrings = string.split(" ");
	for (let i = 0; i < substrings.length; i++) {
		if (substrings[i].length > 4) {
			substrings[i] = substrings[i].split("").reverse().join("");
		}

		string = substrings.join(" ");
	}
	return string;
}
