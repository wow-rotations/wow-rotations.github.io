import "../../css/HowToPanel.css"

import React from "react";
import ImageComponent from "./ImageComponent";

export default class HowToPanel extends React.Component {

    renderTextSection = (text) => {
        return <div className={"HowToTextSection"}>text</div>
    }

    render() {
        return <div className={"HowToPanel"}>
            <div className={"HowToInnerPanel"}>
                <h1>How To Use These Profiles</h1>
                <hr/>
                <div>
                    <h2>Install TellMeWhen</h2>
                    <div>
                        <a href={"https://www.wowinterface.com/downloads/info10855-TellMeWhen.html"}>WoW Interface</a>
                    </div>
                    <div>
                        <a href={"https://www.curseforge.com/wow/addons/tellmewhen"}>CurseForge</a>
                    </div>
                    <div>
                        <a href={"https://github.com/ascott18/TellMeWhen"}>GitHub</a>
                    </div>
                </div>
                <hr/>
                <h2>Import into TMW</h2>
                <TextSection>
                    Select a class above, click the clipboard button to copy the profile to your clipboard and follow
                    these steps if you are new to TellMeWhen (TMW)
                </TextSection>
                <TextSection>
                    This is what your UI will look like when you have just installed TMW or if you use the /tmw command
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/1-defaultProfile.jpg"}/>
                <TextSection>
                    Right click one of the empty icons in the middle of your screen to bring up the main TMW interface
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/2-emptyTmw.jpg"}/>
                <TextSection>
                    Import the profile by first pasting the profile string into the bottom text field (outlined in red)
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/3-importedTmw.jpg"}/>
                <TextSection>
                    Now click Import/Export/Restore and navigate through From String > Profile and click either
                    Overwrite Profile or Create New Profile. Creating a New Profile is best if you are importing this
                    profile from scratch and Overwriting is best if you are just updating it
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/4-newOrOverwriteProfile.jpg"}/>
                <TextSection>
                    After you click Overwrite or New you will be shown some windows that require you to confirm
                    importing them, this is because these profiles contain custom LUA to help determine AoE or special
                    cases that TMW does not provide by default
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/5-importLuaScreen.jpg"}/>
                <TextSection>
                    After confirming the import you will be presented with a screen similar to this. With all the
                    rotation items visible. It will be hidden once you close TMW using /tmw again
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/6-complete.jpg"}/>
                <TextSection>
                    Once you close TMW you might find that nothing is shown, this is most likely because you are not
                    targeting a hostile unit. these profiles will hide themselves wile you cant attack the selected unit
                    to reduce screen clutter. Simply select a neutral or hostile unit to see the rotation.
                </TextSection>
                <ImageComponent src={"/src/static/images/tutorial/7-targetIsHostile.jpg"}/>
            </div>
        </div>
    }
}

class TextSection extends React.Component {
    render() {
        return <div className={"HowToTextSection"}>
            {this.props.children}
        </div>
    }
}