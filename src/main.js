/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import HornedBeasts from './horned_beasts.js'


class Main extends React.Component {
    render() {
        return(
            <div>
                <HornedBeasts title= "Goat" url="https://i.natgeofe.com/n/e9023026-7589-45ac-9e71-e510730329f3/Goat-portrait_3x4.jpg" description='this goat has a nice set of horns.' />
                <HornedBeasts title= 'Bull' url='https://upload.travelawaits.com/ta/uploads/2021/04/df4e2437ce3677bac4544deed8fbedf4e24.jpg' description='this hairy bull has nice horns.' />
            </div>
        )
    }
}

export default Main;