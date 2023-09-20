import React from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";


class App extends React.Component{
  render(){
    return(
      <>
      <PageOne
      title = 'Hello'
      description = 'ncikwuejniu iok nwefi n ijn fiunfiw nef  wnf oiuhfei nwine '
      a = {8} b = {9}/>
      <PageTwo/>
      </>
    )
  }
}

export default App; 