import React, {Component} from 'react';
import './App.css';
import color from './color';
import color_darker from './color_darker';

class task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_color : 'all',
      darker: false,
  }
  this.changeFilter = this.changeFilter.bind(this)
  this.switchDarker = this.switchDarker.bind(this);
}

createColumn = (count) => {
    let column = []

    for (var j=0; j<5; j++){
        // var data_color = color.data;
        if (this.state.darker == false) {
            var data_color = color.data;
        } else {
            var data_color = color_darker.data;
        }
       

        column.push(<div className="square" id={j+count} style={{backgroundColor: data_color[count+j].color_code}} key={j+count}>
            <div className="content">
            </div>
        </div>)
    }
    return column
  }

  createRow = () => {
    var row = []
    var count = 0;
    if (this.state.darker == false) {
        var data_color = color.data;
    } else {
        var data_color = color_darker.data;
    }
    for (var j=0; j<8; j++){
        row.push(<div id={data_color[count].type} className="square-container" key={j} 
                    style={{display : ((this.state.filter_color == 'all') ? null : (this.state.filter_color == data_color[count].type) ? null : 'none')}}>
                    {this.createColumn(count)}
                </div>)
        count = count + 5;
    }
    return row
  }

  changeFilter(event){
    this.setState({filter_color: event.target.value});
  }

  switchDarker(){
    this.setState({
      darker: !this.state.darker
    });
  }

  render() {
    return (
        <div className="App">
            <div className="container" style={{marginBottom: '10px', marginTop: '10px'}}>
                <label style={{marginRight: '15px'}}>Category : </label>
                <select onChange={this.changeFilter}>
                    <option value="all">All</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purble</option>
                    <option value="grey">Grey</option>
                    <option value="brown">Brown</option>
                </select>
            </div>
            <div className="container" style={{marginBottom: '10px', marginTop: '10px'}}>
                <label style={{marginRight: '15px'}}>Saturation : </label>
                <input
                    type="checkbox"
                    defaultChecked={this.state.darker}
                    // ref="complete"
                    onChange={this.switchDarker}
                />
            </div>
            <div>
                {this.createRow()}
            </div>
            
        </div>
    );
  }
}

export default task;
