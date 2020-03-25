import React from 'react';
import Konva from 'konva';
import {Stage, Layer, Rect, Text} from 'react-konva';
import logo from './logo.svg';
import './App.css';


const Shape = () => {
  return(
    <Rect
    x={100}
    y={100}
    width={100} height={100}
    draggable
    shadowBlur={10}
    fill={"red"}
    name="naming"
    />
  );
}

class App extends React.Component {

  onDragStart(event) {
    //let elementItemType = event.target.id;
    event.dataTransfer.setData("name", "Rect1");
    event.dataTransfer.setData("type", "Rect_type");
  }

  onDrop(event){
    event.preventDefault();

    const name = event.dataTransfer.getData("name");
    const type = event.dataTransfer.getData("type");

    console.log("#### name : " , name);
    console.log("#### type : " , type);
  }
  render(){
    return(
      <div style={{display:'flex', width : window.innerWidth, height : window.innerHeight}} >
        <div style={{display:'flex', width : 100, height : '100%', borderWidth:1, borderColor:'gray', backgroundColor:'#E0E0E0'}}>
          <div style={{display:'flex',width : 50, height : 50 ,justifyContent:'center',alignItems:'center', backgroundColor:'blue'}} draggable={true} onDragStart={this.onDragStart}>
            Rect
          </div>
          <div style={{display:'flex',width : 50, height : 50 ,justifyContent:'center',alignItems:'center', backgroundColor:'red'}} draggable={true} onDragStart={this.onDragStart}>
            circle
          </div>

        </div>
        <div style={{width : window.innerWidth - 90, height : '100%', backgroundColor:'black'}} onDrop={this.onDrop} onDragOver={(e) => { e.preventDefault()}}>
            <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={(e) => { console.log("#### e : " , e) }}>
              <Layer>
                <Text x={50} y={50} text="Try click" />
                <Shape />
              </Layer>
            </Stage>
        </div>
      </div>
    );
  }
}

export default App;
