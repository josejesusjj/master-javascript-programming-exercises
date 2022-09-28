function getElementsAfter(array, n) {
  // your code here
  let newarray = []
  for (i = n+1; i<= array.length-1; i++) {
      newarray.push(array[i])
  }
  return newarray
}