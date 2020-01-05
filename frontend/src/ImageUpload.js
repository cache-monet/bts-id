import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './ImageUpload.css';
const btoa = require('btoa')
const axios = require('axios');

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/identify', this.state.file, {
      headers: {
        'Content-Type': this.state.file.type
      }
    }).then((res) => {
      this.setState({
        result: res.data,
        ready: true,
        imagePreviewUrl: null
      })
    })
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        ready: false
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl, ready, result} = this.state;
    let $imagePreview = null;
    if (ready && result) {
      $imagePreview = (<img src={'data:image/png;base64,'+result} />);
    } else if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className='previewText'>Please select an Image for Preview</div>);
    }

    return (
      <Container>
        <Row style={{'alignContent': 'center'}}>
          <Col style={{'display': 'inlineBlock'}}>
            <div className='imgPreview'>
              {$imagePreview}
            </div>
          </Col>
        </Row>
        <Row style={{'alignContent': 'center'}}>
          <Col style={{'display': 'inlineBlock'}} sm={10}>
            <form>
              <div className='custom-file'>
                <input
                  className='custom-file-input' id='customFile'
                  type='file' 
                  onChange={(e)=>this._handleImageChange(e)}
                />
                <label className='custom-file-label' for='customFile'>Choose file</label>
              </div>
            </form>
          </Col>
          <Col sm={2}>
            <Button variant="secondary"
              className='float-right'
              onClick={(e)=>this._handleSubmit(e)}>Identify</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
