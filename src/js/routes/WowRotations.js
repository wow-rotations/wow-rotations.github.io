import "../../css/WowRotations.css"

import React from "react";
import ClassSection from "../components/ClassSection";
import ClassSelectionHeader from "../components/ClassSelectionHeader";


export default class WowRotations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [
                {key: "deathKnight", name: "Death Knight", enabled: true},
                {key: "demonHunter", name: "Demon Hunter", enabled: true},
                {key: "druid", name: "Druid", enabled: true},
                {key: "hunter", name: "Hunter", enabled: true},
                {key: "mage", name: "Mage", enabled: true},
                {key: "monk", name: "Monk", enabled: true},
                {key: "paladin", name: "Paladin", enabled: true},
                {key: "priest", name: "Priest", enabled: true},
                {key: "rogue", name: "Rogue", enabled: true},
                {key: "shaman", name: "Shaman", enabled: true},
                {key: "warlock", name: "Warlock", enabled: true},
                {key: "warrior", name: "Warrior", enabled: true},
            ],
            selectedClass: undefined,
            selectedClassProfile: undefined,
            globalGroups: undefined,
            globalLUA: undefined
        }
    }

    handle_ClickedClass(clickedClass) {
        let self = this;
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

    render() {
        return <div>
            <ClassSelectionHeader
                classes={this.state.classes}
                selected={this.state.selectedClass}
                callback={this.handle_ClickedClass.bind(this)}
            />
            <ClassSection
                classProfile={this.state.selectedClassProfile}
            />
        </div>
    }
}