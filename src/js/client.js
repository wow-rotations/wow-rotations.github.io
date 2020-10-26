import React from "react";
import ReactDOM from "react-dom";

import AppRoot from "./components/AppRoot"

import '../css/style.css'
import '../css/bootstrap.min.css'
import '../thirdparty/bootstrap/bootstrap.min.js'
import '../thirdparty/fontawesome/all.min.js'
import WowRotations from "./routes/WowRotations";

ReactDOM.render(
    <WowRotations/>,
    document.getElementById('react_webapp')
);
