import { useState } from "react";
import { alfebet } from "./keys";

function KeyBoard(props) {
  const [lang, SetLang] = useState(0);
  const [input, setInput] = useState({ inputLetter: [], key: 0 });
  const [style, setStyle] = useState({
    color: "red",
    fontSize: 30,
    fontWeight: "normal"
  });

  function updateInput(element) {
    setInput({
      inputLetter: [
        ...input.inputLetter,
        <span style={style} key={input.key}>
          {element}
        </span>
      ],
      key: input.key + 1
    });
  }
  function updateLang() {
    SetLang(lang < alfebet.length - 1 ? lang + 1 : 0);
  }
 
 function backSpace () {
   const copy=input.inputLetter.filter(item => !item.length-1)
   console.log(copy);
   
  // setInput({
  //   inputLetter: input.inputLetter.filter(item => !item.length-1),
  //   key: input.key
  // });
    //  updateList(list.filter(item => item.name !== name));
   };
  return (
    <>
      <h4>{input.inputLetter}</h4>
      {alfebet[lang].map((e, i) => (
        <button key={i} onClick={() => updateInput(e, i)}>
          {e}
        </button>
      ))}
      <br />
      <button onClick={() => updateInput("\xa0")}>space</button> <br />
      <button onClick={updateLang}>lang</button>
      <button onClick={backSpace}>delete</button><br/>
      <button onClick={()=>setStyle({...style, color: "green"})}>color</button>
      <button onClick={()=>setStyle({...style, fontSize: style.fontSize + 10})}>fontSize</button>
      <button onClick={()=>setStyle({...style,fontWeight: "bold"})}>Bold</button>
    </>
  );
}

export default KeyBoard;
