import React from 'react';
import { useState,useEffect } from 'react'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import DataFetching from './components/DataFetching'
import MovieEmbed from './components/Movie';
import Counter1 from './components/Counter1';
import ReduxLikeCounter from './components/ReduxLikeCounter';

function App() {

  return (
    <div>
        {/* <ClassCounter/>
        <HookCounter/> 
        <HookCounter2/> 
        <HookCounter3/>
        <HookCounter4/>

        <h3>hook counter</h3>
        <HookCounterOne/>

        <HookMouse/> */}

        {/* <MouseContainer/> */}
        {/* <DataFetching /> */}
          {/* <MovieEmbed/> */}
          {/* <DataFetching/> */}
          <Counter1/>
          <ReduxLikeCounter/>
    </div>
  )
}

export default App
