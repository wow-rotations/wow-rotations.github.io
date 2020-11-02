import "../../css/ClassSection.css"
import React from "react";
import RotationPreview from "./RotationPreview";
import ClassProfileButton from "./ClassProfileButton";
import moment from "moment";


export default class ClassSection extends React.Component {
    render() {
        if (this.props.classProfile) {
            return <div className={"classContent"}>
                <h2>{this.props.classProfile.label}</h2>
                <ClassProfileButton classProfile={this.props.classProfile}/>
                <RotationPreview classProfile={this.props.classProfile}/>
            </div>
        }
        return null
    }
}