import React, { useState } from "react";
function GanForm(props) {
 const{updateInpute,ganformSubmit}=props
  return (
    <>
    <h1>child information</h1>
      <form onSubmit={ganformSubmit}>
        parentName: <br />{" "}
        <input onChange={updateInpute} name="parentName" type="text" />
        <br />
        <br />
        childName :<br />
        <input onChange={updateInpute} name="childName" type="text" />
        <br />
        <br />
        lastName :<br />
        <input onChange={updateInpute} name="lastName" type="text" />
        <br />
        <br />
        childDob :<br />
        <input onChange={updateInpute} name="childDob" type="date" />
        <br />
        <br />
        phonenumber:
        <br />
        <input onChange={updateInpute} name="phonenumber" type="number" />
        <br />
        <br />
        emergency name:
        <br />{" "}
        <input onChange={updateInpute} name="emergencyName" type="text" />
        <br />
        <br />
        emergency number:
        <br />{" "}
        <input onChange={updateInpute} name="emergencyNumber" type="number" />
        <br />
        <br />
        relation:
        <br />
        <input onChange={updateInpute} name="emergencyRelation" type="text" />
        <br />
        <br />
        number in family:
        <br />
        <input onChange={updateInpute} name="numberInFamily" type="number" />
        <br />
        <br />
        post comment :<br />
        <textarea onChange={updateInpute} name="comment" id="" cols="10" rows="2"></textarea>
        <br />
        <button type='submit'>next</button>
      </form>
    </>
  );
}

export default GanForm;
