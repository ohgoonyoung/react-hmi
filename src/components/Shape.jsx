import React from 'react';
import {Stage, Layer, Rect, Text, Circle} from 'react-konva';

var editorMode = true;

const Shape = (props) => {
  const {shapeProps, styleProps, eventProps, tagProps} = props.item;
  if(shapeProps.type === "Rect"){

    return(
      <Rect
      {...shapeProps}
      {...styleProps}
      {...eventProps}
      {...tagProps}
      draggable={editorMode ? true : false}
      />
    );

  }else if(shapeProps.type === "Circle"){

    return(
      <Circle
      {...shapeProps}
      {...styleProps}
      {...eventProps}
      {...tagProps}
      draggable={editorMode ? true : false}
      />
    );
  }

  return null;
}

export default Shape;
