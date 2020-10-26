import "../../css/WowRotations.css"

import React from "react";


export default class WowRotations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [
                {key: "deathKnight", name: "Death Knight", enabled: true},
                {key: "demonHunter", name: "Demon Hunter", enabled: false},
                {key: "druid", name: "Druid", enabled: false},
                {key: "hunter", name: "Hunter", enabled: false},
                {key: "mage", name: "Mage", enabled: false},
                {key: "monk", name: "Monk", enabled: false},
                {key: "paladin", name: "Paladin", enabled: false},
                {key: "priest", name: "Priest", enabled: false},
                {key: "rogue", name: "Rogue", enabled: true},
                {key: "shaman", name: "Shaman", enabled: false},
                {key: "warlock", name: "Warlock", enabled: false},
                {key: "warrior", name: "Warrior", enabled: false},
            ],
            selectedClass: undefined,
            selectedClassProfile: undefined,
            globalGroups: undefined,
            globalLUA: undefined
        }
    }

    componentDidMount() {
        let self = this;
        $.getJSON('/src/static/TmwProfiles/global/groups.json', function (data) {
            self.setState({
                globalGroups: data,
            })
        });
        $.getJSON('/src/static/TmwProfiles/global/lua.json', function (data) {
            self.setState({
                globalLUA: data,
            })
        });
    }

    handle_ClickedClass(clickedClass) {
        let self = this;
        console.log("handle_ClickedClass", clickedClass)
        this.setState({
            selectedClass: clickedClass,
            selectedClassProfile: undefined,
        }, () => {
            $.getJSON('/src/static/TmwProfiles/' + this.state.selectedClass.key + '/rotation.json', function (data) {
                self.setState({
                    selectedClassProfile: data,
                })
            });
        })
    }

    handle_CopyTextAreaToClipboard(componentId) {
        let textArea = document.getElementById(componentId)
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        console.log("handle_CopyClassProfileToClipboard", textArea);

    }

    renderClassHeader() {
        let ret = []
        for (let playerClass of this.state.classes) {
            let enabled = playerClass.enabled ? "enabled" : "disabled"
            let isSelected = this.state.selectedClass === playerClass ? "selected" : ""
            ret.push(<div className={"playerClassContainer " + enabled + " " + isSelected}
                          onClick={() => this.handle_ClickedClass(playerClass)}
                          key={playerClass.key}>
                    <div className={"playerClass"}
                         style={{"background": "url(\"/src/static/images/wow/class/" + playerClass.key + ".png\") no-repeat center center / cover"}}/>
                </div>
            )
        }
        return <div className={"classHeader"}>{ret}</div>
    }

    renderTextAreas() {
        return [
            <textarea
                id={"globalGroups"}
                key={"globalGroups"}
                className={"hiddenTextArea"}
                readOnly={true}
                value={this.state.globalGroups.string}/>,
            <textarea
                id={"globalLua"}
                key={"globalLua"}
                className={"hiddenTextArea"}
                readOnly={true}
                value={this.state.globalLUA.string}/>,
            <textarea
                id={"rotationString"}
                key={"rotationString"}
                className={"hiddenTextArea"}
                readOnly={true}
                value={this.state.selectedClassProfile.string}/>
        ]
    }

    renderClassContent() {
        if (this.state.selectedClass && this.state.selectedClassProfile) {
            return <div className={"classContent"}>
                <h2>{this.state.selectedClass.name}</h2>
                <div className={"globalButtonContainer"}>
                    <div className={"button"} onClick={() => this.handle_CopyTextAreaToClipboard("globalGroups")}>
                        Global Groups
                    </div>
                    <div className={"button"} onClick={() => this.handle_CopyTextAreaToClipboard("globalLua")}>
                        Lua Functions
                    </div>
                </div>
                <div className={"button"} onClick={() => this.handle_CopyTextAreaToClipboard("rotationString")}>
                    Rotation
                </div>
                {this.renderTextAreas()}
            </div>
        }
    }

    render() {
        return <div>
            {this.renderClassHeader()}
            {this.renderClassContent()}
        </div>
    }
}