import React from "react";


class HornedBeasts extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.url} alt='beast_image' title='horned_beast'></img>
                <p>{this.props.description}</p>


            </div>
        )
    }
}

export default HornedBeasts;