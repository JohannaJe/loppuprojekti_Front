import React from 'react';
import './Vaihtoehdot.css';
import CNNlogo600 from '../CNNlogo600.jpg'
import BBClogo600 from '../BBClogo600.jpg'
import HSlogo from '../HSlogo.png'
import ISlogo from '../ISlogo.png'
import Listaus from './Listaus'

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



                    {/*<select id="example-getting-started" multiple="multiple">*/}
                        {/*<option value="cheese">Cheese</option>*/}
                        {/*<option value="tomatoes">Tomatoes</option>*/}
                        {/*<option value="mozarella">Mozzarella</option>*/}
                        {/*<option value="mushrooms">Mushrooms</option>*/}
                        {/*<option value="pepperoni">Pepperoni</option>*/}
                        {/*<option value="onions">Onions</option>*/}
                    {/*</select>*/}
                    <b>URL</b>: <input type="text" onChange={this.props.URL}></input>
                    <button className="btn btn-info" onClick={this.props.haefunktio}>Search</button>
                    <button className="myBtn" onClick={this.topFunction} title="Go to top"><i class="icon-chevron-up"/>
                    </button>

                    <table className="logo-rivi">
                        <tr>
                            <td>
                                {/*CNN*/}
                                <div className="drop-menu">
                                    <button><img src={CNNlogo600} width="40vw" height="40vh"/></button>


                                    <select className="mdb-select">
                                        <option value="" disabled selected>Pick your favorites</option>
                                        <option value="CNN-latest">Latest</option>
                                        <option value="CNN-top stories">Top Stories</option>
                                        <option value="CNN-world">World</option>
                                        <option value="CNN-science & space">Science & Space</option>
                                        <option value="CNN-entertainment">Entertainment</option>
                                        <option value="CNN-sports">Sports</option>
                                    </select>
                                    <br/>
                                    <button class="btn-save btn btn-primary btn-sm">Add to list</button>
                                </div>
                            </td>

                            <td>
                                {/*BBC*/}
                                <div className="drop-menu">
                                    <button><img src={BBClogo600} width="40vw" height="40vh"/></button>

                                    <select className="mdb-select">
                                        <option value="" disabled selected>Pick your favorites</option>
                                        <option value="BBC-world">World</option>
                                        <option value="BBC-business">Business</option>
                                        <option value="BBC-politics">Politics</option>
                                        <option value="BBC-health">Health</option>
                                    </select>

                                    <br/>
                                    <button class="btn-save btn btn-primary btn-sm">Add to list</button>
                                </div>
                            </td>

                            <td>
                                {/*HS*/}
                                <div className="drop-menu">
                                    <button><img src={HSlogo} width="40vw" height="40vh"/></button>
                                     <select className="mdb-select">
                                        <option value="" disabled selected>Pick your favorites</option>
                                        <option value="HS-tuoreimmat">Latest</option>
                                        <option value="HS-kotimaa">Homeland</option>
                                        <option value="HS-ulkomaat">World</option>
                                        <option value="HS-talous">Economy</option>
                                        <option value="HS-politiikka">Politics</option>
                                        <option value="HS-urheilu">Sports</option>

                                    </select>

                                    <br/>
                                    <button class="btn-save btn btn-primary btn-sm">Add to list</button>
                                </div>
                            </td>

                            <td>
                                {/*IS*/}
                                <div className="drop-menu">
                                    <button><img src={ISlogo} width="40vw" height="40vh"/></button>
                                    <select className="mdb-select">
                                        <option value="" disabled selected>Pick your favorites</option>
                                        <option value="IS-tuoreimmat">Latest</option>
                                        <option value="IS-kotimaa">Homeland</option>
                                        <option value="IS-ulkomaat">World</option>
                                        <option value="IS-taloussanomat">Economy</option>
                                        <option value="IS-viihde">Entertainment</option>
                                        <option value="IS-musiikki">Music</option>
                                        <option value="IS-urheilu">Sports</option>

                                    </select>
                                    <br/>
                                    <button class="btn-save btn btn-primary btn-sm">Add to list</button>
                                </div>
                            </td>

                        </tr>
                    </table>
                    <form>
                        <textarea className="feediLista"></textarea>
                        <br/>
                        <input type="submit" value="Cancel"/>
                        <input type="submit" value="Clear"/>
                        <input type="submit" value="Confirm"/>
                    </form>
                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
                </div>


            )
                ;


        } else {
            return (

            <div className="vaihtoehtoreuna">
                <b>URL</b>: <input type="text" onChange={this.props.URL}></input>
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

