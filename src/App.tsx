import * as React from 'react';
import './css/style.css';
import LayoutBlock from './components/LayoutBlock';
import { Layout } from './model';

export default function App() {
  //Default object to render while waiting for fetch to end
  const defaultValue:Layout = {rootElement:{
    type: "textTile",
    elementKey: ""
  }}
  const [data,setData] = React.useState(defaultValue)

  // Function fetching layout from the server
  React.useEffect(() => {
    const response = fetch("http://localhost:8080/definition")
    .then((response)=>response.json())
    .then(data => setData(data[0]))
  },[])
 
  //Returning LayoutBlock with fetched data if there is data presented
  return (
    <div className="main">
      {data && <h1>{data.title}</h1>}
      {data && 
        <LayoutBlock {...data}></LayoutBlock>
      }
    </div>
  );
}
