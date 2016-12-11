import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "button material-icons": {
        "marginTop": 7
    },
    "p1 img": {
        "height": "50% !important"
    },
    "md-card": {
        "overflow": "scroll"
    }
});