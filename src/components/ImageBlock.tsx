import * as React from 'react';
import { ImageTile } from '../model';

export default function ImageBlock({title,source}: ImageTile) {

  return (
    <div className="imageBlock">
      <img className="image" src={source}></img>
    </div>
  );
}

