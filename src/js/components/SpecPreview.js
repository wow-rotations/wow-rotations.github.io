import "../../css/SpecPreview.css";

import React from "react";


export default class RotationPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipVisible: false
        }
    }

    handle_clickLogo = () => {
        window.location.href = this.props.spec.guide
    }

    render() {
        return <div className={"SpecPreviewContainer"} style={{"width": this.props.width}}>
            <div className={"SpecHeader"}>
                <h3>
                    {this.props.spec.spec}
                    <div className={"logoContainer"}
                         onClick={this.handle_clickLogo}
                         onMouseEnter={() => this.setState({tooltipVisible: true})}
                         onMouseLeave={() => this.setState({tooltipVisible: false})}>
                        {/*<TooltipComponent label={"IcyVeins Guide"} visible={this.state.tooltipVisible}/>*/}
                        <a href={this.props.spec.guide} title={"Icy Veins Guide"}>
                            <img className={"logo"}
                                 src={"/src/static/images/icyVeinsLogo.png"}
                                 alt={"Image Not Found"}
                            />
                        </a>
                    </div>
                </h3>

            </div>
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