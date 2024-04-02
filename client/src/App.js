import 'leaflet/dist/leaflet.css';
import './App.css';
//import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components';

import React, { useContext } from 'react';
import Map from './Screens/Map';


function App() {

  return (
   <Map/>
  );
}

export default App;
