import React from "react";
// import ImageUploader from 'react-images-upload'; 
import ImageUpload from './ImageUpload'; 
import {Container, Row, Col, Button} from 'react-bootstrap';

// require('../css/fullstack.css');

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    //   this.onDrop = this.onDrop.bind(this);
    }

    // onDrop(pictures) {
    //   this.setState({
    //     image: URL.createObjectURL(pictures[pictures.length -1])
    //   });
    // }

    render () {
      return (
        <ImageUpload />
      );
    }
};

        //   <Row>
        //     <Col><img src={this.state.image} className='image'/></Col>
        //   </Row>
        //   <Row>
        //     <Col>
        //       <ImageUploader
        //         withIcon={false}
        //         buttonText='Select an image'
        //         onChange={this.onDrop}
        //         imgExtension={['.jpg', '.png']}
        //         maxFileSize={5242880}
        //       />
        //     </Col>
        //   </Row>
        //   <Row>
        //     <Col><Button>Submit</Button></Col>
        //   </Row>
        // </Container>