import React from 'react';

let itemCounter = 0;

const itemSelector = (key, value) => {
  if(value === null)
    return <div key={itemCounter++}>{key}: null</div>
  if(Array.isArray(value))
    return <JSONArray key={itemCounter++} name={key} array={value} />
  if(typeof(value) === 'object')
    return <JSONObject key={itemCounter++} name={key} json={value} />
  if(typeof(value) === 'string')
    return <div key={itemCounter++}>{key}: "{value}"</div>
  return <div key={itemCounter++}>{key}: {value.toString()}</div>
}

export const JSONObject = (props) => {
  const keyValues = Object.entries(props.json).map(json => {
    return itemSelector(json[0], json[1]);
  })
  return <div>
    {props.name}:<br/>
    <div style={{paddingLeft: "1rem"}}>{keyValues}</div>
  </div>
}

const JSONArray = (props) => {
  const keyValues = props.array.map((json, i) => {
    return itemSelector('[' + i + ']', json);
  })
  return <div>
    {props.name}: [ ]<br/>
    <div style={{paddingLeft: "1rem"}}>{keyValues}</div>
  </div>
}