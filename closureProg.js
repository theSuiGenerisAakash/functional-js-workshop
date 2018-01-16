function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every( a => goodUsers.some( b => a.id === b.id));
	};
}

module.exports = checkUsersValid;
