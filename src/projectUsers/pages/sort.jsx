export default function sorting(arr, value, sortDown, random) {
  const newArray = [...arr];
  newArray.sort((a, b) => {
    if (random){
      return Math.random() - 1 / 2;
    } 
    if (a[value] > b[value]) {
      return sortDown ? 1 : -1;
    }
    if (a[value] < b[value]) {
      return sortDown ? -1 : 1;
    }
    return 0;
  });
  return newArray;
}
