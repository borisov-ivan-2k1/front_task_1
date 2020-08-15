import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

function App() {

  const [ placeMarks, setPlaceMarks ] = useState([])

  const [ toolbar, setToolbar ] = useState(false)

  const mapData = {
    center: [55.751574, 37.573856],
    zoom: 10
  }

  const onAddItem = (e) => {
    const name = prompt('Название метки');
    setPlaceMarks([...placeMarks, {coords: e.get('coords'), name}])
  }

  
  return (
    <div className="App">
      <div>
        <YMaps>
          <Map defaultState={mapData} width='100vw' height='100vh' onClick={(e) => onAddItem(e)}>
            {placeMarks.map(placeMark => (
              <Placemark geometry={placeMark.coords} properties={{iconContent: placeMark.name}}/>
            ))}
            
          </Map>
        </YMaps>
      </div>

      <div className={`toolBar ${toolbar ? 'open' : 'close'}`} onClick={() => setToolbar(!toolbar)}>

      </div>
    </div>
  );
}

export default App;
