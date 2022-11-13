let he=[]
let en=[]
let capital=[]
for (let i = 1488; i < 1515; i++){
   he.push(String.fromCharCode(i));
}
for (let i = 65; i < 91; i++){
    capital.push(String.fromCharCode(i));
 }
 for (let i = 97; i < 123; i++){
    en.push(String.fromCharCode(i));
 }
 const alfebet=[he,capital,en]
 export {alfebet}