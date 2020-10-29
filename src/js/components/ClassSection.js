import React from "react";
import "../../css/ClassSection.css"
import RotationPreview from "./RotationPreview";


export default class ClassSection extends React.Component {
    handle_CopyTextAreaToClipboard(componentId) {
        let textArea = document.getElementById(componentId)
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    render() {
        if (this.props.classProfile) {
            return <div className={"classContent"}>
                <h2>{this.props.classProfile.label}</h2>
                <h2>ver. {this.props.classProfile.version}</h2>
                <RotationPreview classProfile={this.props.classProfile}/>
                <div className={"button"} onClick={() => this.handle_CopyTextAreaToClipboard("rotationString")}>
                    Rotation
                </div>
                <textarea
                    id={"rotationString"}
                    key={"rotationString"}
                    className={"hiddenTextArea"}
                    readOnly={true}
                    value={this.props.classProfile.string}/>
            </div>
        }
        return null
    }
}