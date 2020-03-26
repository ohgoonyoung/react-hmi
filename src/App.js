import React from 'react';
import Konva from 'konva';
import {Stage, Layer, Rect, Text} from 'react-konva';
import logo from './logo.svg';
import './App.css';
import cn from 'classnames';
import Shape from './components/Shape';
import ThumbnailShape from './components/ThumbnailShape';
import { v4 as uuidv4 } from 'uuid';

var shapes = [
  {
    id:'rect',
    type : 'Rect',
  },
  {
    id:'circle',
    type : 'Circle',
  },
  {
    id:'rect',
    type : 'Rect',
  },
  {
    id:'circle',
    type : 'Circle',
  }
]

var _elementList = [
  {
    shapeProps : {
      id : 'Rect1',
      name : "Rect1_name",
      type: "Rect"
    },
    styleProps : {
      x : 100,
      y : 100,
      width : 100,
      height : 100,
      shadowBlur : 10,
      fill : 'red',
    },
    eventProps : {

    },
    tagProps : {

    }
  },
  {
    shapeProps : {
      id : 'Rect2',
      type : 'Rect',
      name : "Rect1_name",
    },
    styleProps : {
      x : 200,
      y : 200,
      width : 300,
      height : 300,
      shadowBlur : 10,
      fill : 'red',
    },
    eventProps : {

    },
    tagProps : {

    }
  }
]

var styles = {
  display:'flex',width : 50, height : 50 ,justifyContent:'center',alignItems:'center'
}

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      elementList : _elementList
    }

    this.onDrop = this.onDrop.bind(this);
  }
  
  onDragStart(event) {
    const elementId = event.target.elementId;
    const elementType = event.target.elementType;

    event.dataTransfer.setData("elementId", elementId);
    event.dataTransfer.setData("elementType", elementType);
  }

  onDrop(event){
    event.preventDefault();

    //const id = event.dataTransfer.getData("id");
    const id = uuidv4();
    const type = event.dataTransfer.getData("type");

    const shapeProps = {
      id, type
    }
    const styleProps = {
      x : event.pageX - 100,
      y : event.pageY,
      width : 100,
      height : 100,
      fill : 'red',
    }

    const eventProps = {
      onClick : (event) => { console.log("#### click  : " , id)}
    };
    const tagProps = {};

    const element = {
      shapeProps, styleProps, eventProps, tagProps
    }
    this.setState({elementList : this.state.elementList.concat(element)}, () => {
      console.log("#### this.state.elementList  ;" , this.state.elementList);
    })
  }
  render(){

    const {elementList} = this.state;
    return(
      <div style={{display:'flex', width : window.innerWidth, height : window.innerHeight}} >
        <div style={{display:'flex', width : 100, height : '100%', borderWidth:1, borderColor:'gray', backgroundColor:'#E0E0E0', flexDirection:"row-reverse"}}>
          {shapes.map(shape => {
            return <ThumbnailShape shape={shape}/>
          })}
        </div>
        <div style={{width : window.innerWidth - 90, height : '100%', backgroundColor:'black'}} onDrop={this.onDrop} onDragOver={(e) => { e.preventDefault()}}>
            <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={(e) => { console.log("#### e : " , e) }}>
              <Layer>
                <Text x={50} y={50} text="Try click" />
                {
                  elementList.map((item) => {
                    return <Shape item={item} />
                  })
                }
                {/* <Shape /> */}
              </Layer>
            </Stage>
        </div>
      </div>
    );
  }
}

export default App;
