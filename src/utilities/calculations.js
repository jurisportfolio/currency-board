// const helpF = (element, id) => {
// 	if (element.uid !== id) {
// 		return element;
// 	}
// };

// export const removeElementFromList = (list, uidToRemove) => {
// 	return list.filter(element => helpF(element, uidToRemove));
// };

export const removeElementFromList = (list, uidToRemove) => {
	return list.filter(element => (element.uid !== uidToRemove ? element : null));
};
