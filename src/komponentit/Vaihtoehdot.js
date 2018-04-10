import React from 'react';
import './Vaihtoehdot.css';
import CNNlogo600 from '../CNNlogo600.jpg'
import BBClogo600 from '../BBClogo600.jpg'
import HSlogo from '../HSlogo.png'
import ISlogo from '../ISlogo.png'


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




    render() {
        var kirjautunut = this.props.isAuthenticated
        console.log(kirjautunut, 'SAAATANA')


        if (kirjautunut) {
            return (
                <div className="vaihtoehtoreuna">




                <table className="logo-rivi">
                    <tr >
                        <td >
                            {/*CNN*/}
                            <div className="drop-menu">
                                <button><img src={CNNlogo600} width="40vw" height="40vh"/></button>
                                <select multiple>
                                    <option value="" disabled selected>Press CTRL to select multiple</option>
                                    <option value="1">Latest</option>
                                    <option value="2">Top Stories</option>
                                    <option value="3">World</option>
                                    <option value="4">Science & Space</option>
                                    <option value="5">Entertainment</option>
                                    <option value="6">Sports</option>
                                </select>
                                <br/>
                                <button class="btn-save btn btn-primary btn-sm">Save</button>
                            </div>
                        </td>

                        <td >
                            {/*BBC*/}
                            <div className="drop-menu">
                                <button><img src={BBClogo600} width="40vw" height="40vh"/></button>

                                    <select className="mdb-select" multiple>
                                        <option value="" disabled selected>Press CTRL to select multiple</option>
                                        <option value="1">World</option>
                                        <option value="2">Business</option>
                                        <option value="3">Politics</option>
                                        <option value="4">Health</option>
                                    </select>

                                <br/>
                                <button class="btn-save btn btn-primary btn-sm">Save</button>
                            </div>
                        </td>

                        <td>
                            {/*HS*/}
                            <div className="drop-menu">
                                <button><img src={HSlogo} width="40vw" height="40vh"/></button>
                                <select className="mdb-select" multiple>
                                    <option value="" disabled selected>Press CTRL to select multiple</option>
                                    <option value="1">Latest</option>
                                    <option value="2">Homeland</option>
                                    <option value="3">World</option>
                                    <option value="4">Economy</option>
                                    <option value="5">Politics</option>
                                    <option value="6">Sports</option>

                                </select>
                                <br/>
                                <button class="btn-save btn btn-primary btn-sm">Save</button>
                            </div>
                        </td>

                        <td>
                            {/*IS*/}
                            <div className="drop-menu">
                                <button><img src={ISlogo} width="40vw" height="40vh"/></button>
                                <select className="mdb-select" multiple>
                                    <option value="" disabled selected>Press CTRL to select multiple</option>
                                    <option value="1">Latest</option>
                                    <option value="2">Homeland</option>
                                    <option value="3">World</option>
                                    <option value="4">Economy</option>
                                    <option value="5">Entertainment</option>
                                    <option value="6">Music</option>
                                    <option value="7">Sports</option>

                                </select>
                                <br/>
                                <button class="btn-save btn btn-primary btn-sm">Save</button>
                            </div>
                        </td>

                    </tr>
                </table>

                <div>
                    HS <input type="checkbox" checked={this.state} onChange={this.props.HS}></input>
                    IS <input type="checkbox" checked={this.state} onChange={this.props.IS}/>
                    BBC <input type="checkbox" checked={this.state} onChange={this.props.BBC}/>
                    <br/>
                    <button className="btn btn-info" onClick={this.props.haefunktio}> Search</button>
                    <button className="myBtn" onClick={this.topFunction} title="Go to top"><i class="icon-chevron-up"/>
                    </button>

                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
                </div>
            </div>


        )
            ;





        } else {
            return (
                <div className="vaihtoehtoreuna">


                    <b>HS</b>: <input type="checkbox" checked={this.state} onChange={this.props.HS}/>
                    <b>IS</b>: <input type="checkbox" checked={this.state} onChange={this.props.IS}/>
                    <b>BBC</b>: <input type="checkbox" checked={this.state} onChange={this.props.BBC}/>
                    <br/>
                    <br/>
                    <button className="btn btn-info" onClick={this.props.haefunktio}>Search</button>
                    <button className="myBtn" onClick={this.topFunction} title="Go to top"><i class="icon-chevron-up"/>
                    </button>


                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
                </div>


            );
        }
    }
}

