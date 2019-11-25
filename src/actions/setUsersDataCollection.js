export default (data = []) => (dispatch) => {
	dispatch({
		type: `SET_USERS_COLLECTION_DATA`,
		payload: data
	});
};