import React from 'react';
import PreviewBox from './PreviewWindow.jsx';
import './App.css';

class App extends React.Component {
  renderGallery() {
    let galleryOBJ = [];

    for (let i = 0; i < 12; i++) {
      galleryOBJ.push(
        <div key={i} className="col mb-5" onClick={() => { window.location.href = "/test" }}>
          <img src="https://picsum.photos/300" alt="" />
        </div>
      );
    }

    return galleryOBJ;
  }

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, ' + this.props.bgOpacity + ')' }}>
        <h1 className="display-2">Preview Box App</h1>

        <div className="container">
          <div className="row">
            {this.renderGallery()}
          </div>
        </div>
      </div>
    );
  }
}

function RenderApp() {
  let windowLocation = window.location.pathname.substring(1, window.location.pathname.length);
  if (windowLocation !== "") {
    // preview box is visable

    return (
      <React.Fragment>
        <App bgOpacity="0.9" style={{ overflowY: 'hidden' }} />
        <PreviewBox previewBoxTitle={windowLocation} />
      </React.Fragment>
    );
  } else {
    // normal scrolling mode

    return (
      <React.Fragment>
        <App bgOpacity="0" />
      </React.Fragment>
    );
  }
}

export default RenderApp;
