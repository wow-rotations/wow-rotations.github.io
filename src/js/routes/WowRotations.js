import "../../css/WowRotations.css"

import React from "react";
import ClassSection from "../components/ClassSection";
import ClassSelectionHeader from "../components/ClassSelectionHeader";
import HowToPanel from "../components/HowToPanel";


export default class WowRotations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [
                {key: "deathKnight", name: "Death Knight", color:"#C41F3B", enabled: true},
                {key: "demonHunter", name: "Demon Hunter", color:"#A330C9", enabled: true},
                {key: "druid", name: "Druid", color:"#FF7D0A", enabled: true},
                {key: "hunter", name: "Hunter", color:"#A9D271", enabled: true},
                {key: "mage", name: "Mage", color:"#40C7EB", enabled: true},
                {key: "monk", name: "Monk", color:"#00FF96", enabled: true},
                {key: "paladin", name: "Paladin", color:"#F58CBA", enabled: true},
                {key: "priest", name: "Priest", color:"#FFFFFF", enabled: true},
                {key: "rogue", name: "Rogue", color:"#FFF569", enabled: true},
                {key: "shaman", name: "Shaman", color:"#0070DE", enabled: true},
                {key: "warlock", name: "Warlock", color:"#8787ED", enabled: true},
                {key: "warrior", name: "Warrior", color:"#C79C6E", enabled: true},
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
            $.ajax({
                type: 'GET',
                url: '/src/static/TmwProfiles/' + this.state.selectedClass.key + '/rotation.json',
                success: function (data, textStatus, request) {
                    self.setState({
                        selectedClassProfile: data,
                    })
                }
            })
        })
    }

    handle_returnHome = () => {
        this.setState({
            selectedClass:undefined
        })
    }

    render() {
        let contentStyle = {}
        if(this.state.selectedClass){
            contentStyle = {"color": this.state.selectedClass.color + "aa"}
        }
        return <div>
            <ClassSelectionHeader
                classes={this.state.classes}
                selected={this.state.selectedClass}
                callback={this.handle_ClickedClass.bind(this)}
            />
            <div className={"contentPanel"} style={contentStyle}>
                {this.state.selectedClass
                    ? <ClassSection
                        classProfile={this.state.selectedClassProfile}
                        homeCallback={this.handle_returnHome}
                    />
                    : <HowToPanel/>}
            </div>
        </div>
    }
}