import React from 'react';
import { Pizza } from './features/Pizza';
import { Home } from './components/Home';
import { FramerFlex } from './components/FramerFlex';
import { Scroll } from './components/Scroll';

function App() {

  let foo = Array(1).fill(0).map((item:number, idx:number) => {
    return <Home num={idx * .06}/>
  })

  

  return (
    <>
      <Pizza/>
      {foo}
      <FramerFlex/>
      <Scroll/>

    </>
  );
}

export default App;

//link to tuts https://www.youtube.com/watch?v=lfR2X-jsy8A
