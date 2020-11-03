import React from "react";
import "../../css/RotationPreview.css"
import SpecPreview from "./SpecPreview";


export default class RotationPreview extends React.Component {
    render() {
        let ret = []
        for (let preview of this.props.classProfile.previews) {
            ret.push(<SpecPreview
                key={preview.spec}
                spec={preview}
                width={"calc(100vw/" + this.props.classProfile.previews.length + ")"}
                src={'/src/static/TmwProfiles/' + this.props.classProfile.key + '/' + preview.previewFile}
            />)
        }
        return <div className={"RotationPreview"}>
            {ret}
        </div>
    }
}