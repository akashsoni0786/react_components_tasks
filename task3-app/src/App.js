import React from 'react';


class MobileOS extends React.Component {
  render(){
    return (
      <>
          <h2>
            This is MobileOS Component
          </h2>
          <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Window Phone</li>
          </ul>
          </>
    );
  }
}

class MobileManufacturers extends React.Component {
  render(){
    return (
         
          <>
          <h2>
          This is MobileManufacturers Component
          </h2>
          <ul>
            <li>Samsumg</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
          </ul>
          </>
    );
  }
}



export {MobileOS,MobileManufacturers}























