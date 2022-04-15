import React from 'react';

class App extends React.Component {
  state={
    isLoading:true,
    movies:[]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading: false,
      })
    },5000)
  }
  render(){
    const { isLoading } = this.state
    
    return(
      <div>
        {isLoading ? '로딩중...' : '로딩완료'}
      </div>
    )
  }
}
export default App;
