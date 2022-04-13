import React from 'react';

// function Fruit(props){
//   console.log(props);
//   return(
//     <h1>{props.fav}마시썽</h1>
//   );
// }

function Fruit({fav}){
  return(<h1> {fav} 마시썽</h1>)
}

function App() {
  return( 
    <div>
      <h1>안녕하세요</h1>
      <Fruit fav='바나나' />
      <Fruit fav='람부탄' />
      <Fruit fav='딸기' />
      <Fruit fav='체리' />
    </div>
  );
}

export default App;
