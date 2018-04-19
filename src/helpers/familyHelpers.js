function pluralizeYear(age) {
	return age === 1 ? " year old" : " years old";
}

function stringifySkills(interests) {
	let skillsString = "my interests are ";

	if(interests.length === 0) return "I have no interests."
	else if (interests.length === 1) return skillsString + this.interests[0] + "."
	else {
		for(let p = 0; p < interests.length - 1; p++) {
			skillsString += interests[p] + ", ";
		}
		skillsString = skillsString.slice(0, skillsString.length - 2);

		return skillsString + " and " + interests[p] + "."
	}
}

module.exports = {
	pluralizeYear,
	stringifySkills
}
