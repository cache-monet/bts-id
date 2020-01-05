import React from "react";
import ImageUpload from './ImageUpload'; 
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function App() {
    return (
      <div id='app' style={{'paddingTop': '200px'}}>
        <ImageUpload />
      </div>
    );
}