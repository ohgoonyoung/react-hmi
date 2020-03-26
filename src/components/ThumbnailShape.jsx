import React from 'react';

const ThumbnailShape = ({shape}) => {

  const onDragStart = (event) => {
    event.dataTransfer.setData("id", shape.id);
    event.dataTransfer.setData("type", shape.type);
  }
  return (
    <div style={{display:'flex',width : 50, height : 50 ,justifyContent:'center',alignItems:'center', backgroundColor:'white'}} draggable={true} onDragStart={onDragStart}>
        {shape.type}
   </div>
  );
}

export default ThumbnailShape;
