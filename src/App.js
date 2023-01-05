import "./App.css";

/*
    This is our application's top-level component.
    
    @author Andy Yang
*/
/*
  This is the entry-point for our application. Many different home pages
  
  @author Andy Yang
*/

import React from "react";
import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKeyToken = '694cd48855660db47cf975bf13e78e2d2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKeyToken,
      onCommand:({command})=>{
        switch(command){
          case 'testCommand':
            alert('testcommand activated')  
          break;
        }
      }
    })
  }, []);

  return <div className="app">HELLLOOO</div>;
};

export default App;
