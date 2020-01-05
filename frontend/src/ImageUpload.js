import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './ImageUpload.css';

const FileInput = () => {
  return (
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
  );
}

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className='previewText'>Please select an Image for Preview</div>);
    }

    return (
      <Container>
        <Row styles={{'alignContent': 'center'}}>
          <Col styles={{'display': 'inlineBlock'}}>
            <div className='imgPreview'>
              {$imagePreview}
            </div>
          </Col>
        </Row>
        <Row styles={{'alignContent': 'center'}}>
          <Col styles={{'display': 'inlineBlock'}} sm={10}>
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
