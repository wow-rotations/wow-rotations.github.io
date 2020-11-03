import React from "react";

export default class ImageComponent extends React.Component {
    state = {isOpen: false};

    handleShowDialog = () => {
        this.setState({isOpen: !this.state.isOpen});
        console.log('clicked');
    };

    render() {
        return <div className={"ImageContainer"}>
            <img
                className="image-small"
                src={this.props.src}
                onClick={this.handleShowDialog}
                alt="Image Not Found"
            />
            {this.state.isOpen && (
                <dialog
                    className="image-dialog"
                    open
                    onClick={this.handleShowDialog}
                >
                    <img
                        className="image-expanded"
                        src={this.props.src}
                        onClick={this.handleShowDialog}
                        alt="Image Not Found"
                    />
                    <div className={"closeButton"}
                         onClick={this.handleShowDialog}>
                        <i className="fas fa-times"/>
                    </div>
                </dialog>
            )}
        </div>

    }
}