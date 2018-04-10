import React from 'react';
import './Vaihtoehdot.css';


export class Vaihtoehdot extends React.Component {



    scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    render(){
        return(
            <div className = "vaihtoehtoreuna">




                <b>HS</b>: <input type="checkbox" checked={this.state} onChange={this.props.HS} />
                <b>IS</b>: <input type="checkbox" checked={this.state} onChange={this.props.IS} />
                <b>BBC</b>: <input type="checkbox" checked={this.state} onChange={this.props.BBC} />
                <br/>
                <br/>
                <button className="btn btn-info" onClick={this.props.haefunktio}>Search</button>
                <button className="myBtn" onClick={this.topFunction} title="Go to top"><i class="icon-chevron-up"/></button>

                <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
            </div>


    );
    }

}

