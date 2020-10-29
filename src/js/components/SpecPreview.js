import React from "react";
import "../../css/SpecPreview.css"


export default class RotationPreview extends React.Component {
    render() {
        return <div className={"SpecPreviewContainer"} style={{"width":this.props.width}}>
            <h3>{this.props.label}</h3>
            <video
                muted={true}
                src={this.props.src}
                autoPlay={true}
                loop={true}>
                Your browser does not support embedded video
                through HTML5.
            </video>
        </div>
    }
}