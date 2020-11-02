import "../../css/ClassProfileButton.css"
import React from "react";
import moment from "moment";

export default class ClassProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLastModified: true
        }
    }

    handle_CopyTextAreaToClipboard(componentId) {
        let textArea = document.getElementById(componentId)
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    render_version = () => {
        if (this.state.showLastModified) {
            let lastModifiedMoment = moment(Date.parse(this.props.classProfile.lastModified))
            return <div>
                <div className={"contextLabel"}>Last Modified</div>
                {lastModifiedMoment.format("DDMMYYYY")}
            </div>
        }
        return <div>
            <div className={"contextLabel"}>Game Version</div>
            {this.props.classProfile.version}
        </div>
    }

    show_lastModified = (shouldShow) => {
        this.setState({
            showLastModified: shouldShow
        })
    }

    renderButton = () => {
        let lastModifiedMoment = moment(Date.parse(this.props.classProfile.lastModified))
        lastModifiedMoment.format("DDMMYYYY")
        return <div className={"profileButton"}>
            <div className={"version"}
                 onMouseEnter={() => this.show_lastModified(false)}
                 onMouseLeave={() => this.show_lastModified(true)}
            >
                {this.render_version()}
            </div>
            <div className={"clipboardIcon"}
                 onClick={() => this.handle_CopyTextAreaToClipboard("rotationString")}>
                <i className="fas fa-clipboard"/>
            </div>
        </div>
    }

    render() {
        return <div>
            {this.renderButton()}
            <textarea
                id={"rotationString"}
                key={"rotationString"}
                className={"hiddenTextArea"}
                readOnly={true}
                value={this.props.classProfile.string}/>
        </div>
    }

}