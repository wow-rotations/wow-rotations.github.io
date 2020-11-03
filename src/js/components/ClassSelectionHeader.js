import "../../css/ClassSelectionHeader.css"

import React from "react";

export default class ClassSelectionHeader extends React.Component {
    render() {
        let ret = []
        for (let playerClass of this.props.classes) {
            let enabled = playerClass.enabled ? "enabled" : "disabled"
            let isSelected = this.props.selected === playerClass ? "selected" : ""
            ret.push(<div className={"playerClassContainer " + enabled + " " + isSelected}
                          onClick={() => this.props.callback(playerClass)}
                          key={playerClass.key}
                          style={isSelected ? {"borderColor":this.props.selected.color} : {}}
                >
                    <div className={"playerClass"}
                         style={{"background": "url(\"/src/static/images/wow/class/" + playerClass.key + ".png\") no-repeat center center / cover"}}/>
                </div>
            )
        }
        return <div className={"classHeader"}>
            {ret}
        </div>
    }
}