import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./fetch";
function Photo() {
  const [min, setMax] = useState(1);
  const [slideShow, setSlideShow] = useState(1);
  let { albumId } = useParams();
  const albumData = fetchData(`albums/${albumId}`).data;
  const photos = fetchData(`albums/${albumId}/photos`).data;
  const cardsPresented = 5;
  const filterdPhotos = photos.filter(
    (e, i) => i >= min && i < min + cardsPresented
  );
  
  return (
    <>
      <div className="">
        <h3 className="h3">Photos</h3>
        <div class="card" style={{ width: "30%" }}>
          <div class="card-body ">
            <h4 class="card-title">{albumData.title}</h4>
            <p class="card-text"> {albumData.body}</p>
          </div>
        </div>
        <br />
        {filterdPhotos.map((e, i) => (
          <>
            <img
              key={i}
              className="img-thumbnail"
              src={e.thumbnailUrl}
              alt=""
            />
          </>
        ))}
        <br />
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            setMax(min - cardsPresented > 0 ? min - cardsPresented : min)
          }
        >
          previes
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            setMax(
              min + cardsPresented < photos.length ? min + cardsPresented : min
            )
          }
        >
          next
        </button>
      </div>
    </>
  );
}

export default Photo;
