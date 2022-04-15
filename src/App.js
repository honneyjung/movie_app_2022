import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
      console.log('constructor 실행완료');
  }

  state = { count: 0 }
  add=()=>{
    this.setState({count : this.state.count + 1})
  }
  minus=()=>{
    this.setState({count : this.state.count - 1})
  }
  componentDidMount(){
    console.log('componentDidMount 실행완료')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate 실행완료')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount 실행완료')
  }
  render(){
    console.log('render 실행완료');
    return (
      <div>
        <h1>번호는  {this.state.count}</h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
      </div>
    )
  }
}

export default App;
