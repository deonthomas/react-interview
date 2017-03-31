/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */		
export function countByKey (arr, brandKey) {
	//TODO: Revisit this, must be better way to do this :-(
	var stock = {};
	for (var i = 0; i < arr.length; i++) {
  		var brandName = arr[i].brand;
  		if (!stock[brandName]) {
    		stock[brandName] = [];
  		}
  		stock[brandName].push(arr[i].brand);
	}

	var tempArray = [];
	for (var brandName in stock) {
	  tempArray.push({brand: brandName, count: stock[brandName].length});
	}
	return tempArray;
}
