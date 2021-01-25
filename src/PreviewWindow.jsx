import React from 'react';

class PreviewBox extends React.Component {
    render() {
        return (
            <div className="preview-window badge-dark">
                <h1 className="display-4">{this.props.previewBoxTitle}</h1>
                <button id="closePreviewBTN" className="btn-danger" onClick={() => { window.location.href = "/" }}>X</button>
                <img src="https://picsum.photos/800" className="rounded img-fluid" alt="" />
            </div>
        );
    }
}

export default PreviewBox;
