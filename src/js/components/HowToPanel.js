import "../../css/HowToPanel.css"

import React from "react";
import {Link} from "react-router-dom";

export default class HowToPanel extends React.Component {
    render() {
        return <div className={"HowToPanel"}>
            <div className={"HowToInnerPanel"}>
                <h1>How-To</h1>
                <div>
                    <div>Install TellMeWhen</div>
                    <div>
                        <a href={"https://www.wowinterface.com/downloads/info10855-TellMeWhen.html"}>WoWInterface</a>
                    </div>
                    <div>
                        <a href={"https://www.curseforge.com/wow/addons/tellmewhen"}>CurseForge</a>
                    </div>
                    <div>
                        <a href={"https://github.com/ascott18/TellMeWhen"}>GitHub</a>
                    </div>
                </div>
                <br/>
                <div>
                    Select a class above, click the clipboard button to copy the profile to your clipboard and follow
                    these steps if you are new to TellMeWhen (TMW)
                </div>
                <br/>
                <div>
                    This is what your UI will look like when you have just installed TMW or if you use the command /tmw
                    and you have no profile loaded yet
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/1-defaultProfile.jpg"}
                     alt={"Image Not Found"}/>
                <br/>
                <div>
                    Right click one of the empty icons in the middle of your screen to bring up the main TMW interface
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/2-emptyTmw.jpg"}
                     alt={"Image Not Found"}/>
                <br/>
                <div>
                    Import the profile by first pasting the profile string into the bottom text field (outlined in red_)
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/3-importedTmw.jpg"}
                     alt={"Image Not Found"}/>
                <br/>
                <div>
                    Now click Import/Export/Restore and navigate through From String > Profile and click either
                    Overwrite Profile or Create New Profile. Creating a New Profile is best if you are importing this
                    profile from scratch and Overwriting is best if you are just updating it
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/4-newOrOverwriteProfile.jpg"}
                     alt={"Image Not Found"}/>
                <br/>
                <div>
                    After you click Overwrite or New you will be shown some windows that require you to confirm
                    importing them, this is because these profiles contain custom LUA to help determine AoE or special
                    cases that TMW does not provide by default
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/5-importLuaScreen.jpg"}
                     alt={"Image Not Found"}/>
                <br/>
                <div>
                    After confirming the import you will be presented with a screen similar to this. With all the
                    rotation items visible. It will be hidden once you close TMW using /tmw again
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/6-complete.jpg"}
                     alt={"Image Not Found"}/>
                <br/>
                <div>
                    Once you close TMW you might find that nothing is shown, this is most likely because you are not
                    targeting a hostile unit. these profiles will hide themselves wile you cant attack the selected unit
                    to reduce screen clutter. Simply select a neutral or hostile unit to see the rotation.
                </div>
                <img className={"HowToImage"} src={"/src/static/images/tutorial/7-targetIsHostile.jpg"}
                     alt={"Image Not Found"}/>
            </div>
        </div>
    }
}