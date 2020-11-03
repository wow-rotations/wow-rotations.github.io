import "../../css/ClassProfileButton.css";

import React from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";

export default class ClassProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLastModified: true,
            copySuccess: false
        }
    }


    handle_CopyTextAreaToClipboard = (componentId) => {
        let textArea = document.getElementById(componentId)
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        this.setState({
            copySuccess: true,
        }, () => {
            ReactTooltip.hide();
            ReactTooltip.show(document.getElementById("clipboardIcon"));
            this.setState({
                copySuccess: false
            })
        })
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
            <div
                id={"clipboardIcon"}
                className={"clipboardIconContainer"}
                onClick={() => this.handle_CopyTextAreaToClipboard("rotationString")}
                onMouseEnter={() => this.setState({tooltipVisible: true})}
                onMouseLeave={() => this.setState({tooltipVisible: false})}
                data-tip={this.state.copySuccess ? "Success!" : "Click to Copy"}
            >
                <div className={"clipboardIcon"}>
                    <i className="fas fa-clipboard"/>
                </div>
            </div>
        </div>
    }

    render() {
        return <div>
            <ReactTooltip
                effect={"solid"}
                place={"right"}
                type={this.state.copySuccess ? "success" : "dark"}
                clickable={true}
            />
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