import * as React from 'react';
import './css/style.css';
import ImageBlock from './components/ImageBlock';

export default function App() {
  // load definition here

  return (
    <div className="main">
      {/* TODO remove title usage from template */}
      <h1>{'Place you components here 👇'}</h1>
      <div className='container'>
        <ImageBlock type="imageTile" elementKey="123" title= "123" source="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ImageBlock>
      </div>
    </div>
  );
}
