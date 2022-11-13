import React from "react";

function Body(props) {
  const { topText, bottomText, randomImage } = props.state;
  const { input, submit } = props;
  let first, last;
  // first = React.createRef();
  function btn() {
    console.log(first.value, last.value);
  }
  return (
    <>
      <div>
        <form className="meme-form" onSubmit={submit}>
          <input
            type="text"
            name="topText"
            placeholder="topText"
            value={topText}
            onChange={input}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottomText"
            value={bottomText}
            onChange={input}
          />

          <button type="submit">Gen</button>
        </form>
        <div className="meme">
          <img src={randomImage} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
        <button onClick={btn}>h</button>
        <input ref={(e) => (first = e)} type="text" />
        <input ref={(e) => (last = e)} type="text" />
      </div>
    </>
  );
}

export default Body;
