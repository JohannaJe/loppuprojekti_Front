import React from 'react';
import './Vaihtoehdot.css';


export class Vaihtoehdot extends React.Component {
    render(){
        return(
            <div className = "vaihtoehtoreuna">

                HS: <input type="checkbox" checked={this.state} onChange={this.props.HS} />
                IS: <input type="checkbox" checked={this.state} onChange={this.props.IS} />
                BBC: <input type="checkbox" checked={this.state} onChange={this.props.BBC} />
                <br/>

                <button type="button" onClick={this.props.haefunktio}>Hae</button>
            </div>
    );
    }

}

