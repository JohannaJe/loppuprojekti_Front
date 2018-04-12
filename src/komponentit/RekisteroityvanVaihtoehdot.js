import React from 'react';
import './Vaihtoehdot.css';
import CNNlogo600 from '../CNNlogo600.jpg'
import BBClogo600 from '../BBClogo600.jpg'
import HSlogo from '../HSlogo.png'
import ISlogo from '../ISlogo.png'
import {lahetaPaivitettavaData} from "./rekisteroityminen";
import {Feedilista} from "./Feedilista";
import {kirjautuneentaulukko, taulukkoon} from "./funktiot";


export class RekisteroityvanVaihtoehdot extends React.Component {
    state = {URL: ''};

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            data: ""
        }
    }

    paivitaData = (e) => {
        e.preventDefault();
        var kayttajaDude = this.props.kayttaja.username;

        let tmpdata = this.state;
        tmpdata.username = kayttajaDude;
        tmpdata.data = JSON.stringify(kirjautuneentaulukko);
        lahetaPaivitettavaData(tmpdata, function (lista, ookoo) {
            kirjautuneentaulukko.splice(0, kirjautuneentaulukko.length)
            this.props.appi().then(function () {
                if (!ookoo) {
                    this.props.history.push("/home");
                }
            }.bind(this));
        }.bind(this));

    }


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

    ISlogo = () => {
        taulukkoon("IS-tuoreimmat IS-kotimaa IS-ulkomaat IS-taloussanomat IS-viihde IS-musiikki IS-urheilu ");
        this.setState(this.state);
    }

    HSlogo = () => {
        taulukkoon("HS-tuoreimmat HS-kotimaa HS-ulkomaat HS-talous HS-politiikka HS-urheilu ");
        this.setState(this.state);
    }

    BBClogo = () => {
        taulukkoon("BBC-world BBC-business BBC-politics BBC-health ");
        this.setState(this.state);
    }

    CNNlogo = () => {
        taulukkoon("CNN-latest CNN-topstories CNN-world CNN-science&space CNN-entertainment CNN-sports ");
        this.setState(this.state);
    }


    ISnappi = () => {
        taulukkoon(this.refs.IS.value);
        this.setState(this.state);
    }

    HSnappi = () => {
        taulukkoon(this.refs.HS.value);
        this.setState(this.state);
    }
    BBCnappi = () => {
        taulukkoon(this.refs.BBC.value);
        this.setState(this.state);
    }
    CNNnappi = () => {
        taulukkoon(this.refs.CNN.value);
        this.setState(this.state);
    }
    URLnappi = () => {
        taulukkoon(this.refs.URL.value + " ");
        this.refs.URL.value = '';
        this.setState(this.state);
    }

    clearLista = (e) => {
        e.preventDefault();


    }


    render() {


        return (
            <div className="vaihtoehtoreuna">

                <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>


                <br/>
                <br/>
                <table className="logo-rivi">
                    <tr>
                        <td>
                            {/*CNN*/}
                            <div className="drop-menu">
                                <button onClick={this.CNNlogo}><img alt="" src={CNNlogo600} width="40vw" height="40vh"/>
                                </button>


                                <select className="mdb-select" ref="CNN">
                                    <option value="" disabled selected>Pick your favorites</option>
                                    <option value="CNN-latest ">Latest</option>
                                    <option value="CNN-topstories ">Top Stories</option>
                                    <option value="CNN-world ">World</option>
                                    <option value="CNN-science&space ">Science & Space</option>
                                    <option value="CNN-entertainment ">Entertainment</option>
                                    <option value="CNN-sports ">Sports</option>
                                </select>
                                <br/>


                                <button className="btn-save btn btn-primary btn-sm" onClick={this.CNNnappi}>
                                    Add to list
                                </button>


                            </div>
                        </td>

                        <td>
                            {/*BBC*/}
                            <div className="drop-menu">
                                <button onClick={this.BBClogo}><img alt="" src={BBClogo600} width="40vw" height="40vh"/>
                                </button>

                                <select className="mdb-select" ref="BBC">
                                    <option value="" disabled selected>Pick your favorites</option>
                                    <option value="BBC-world ">World</option>
                                    <option value="BBC-business ">Business</option>
                                    <option value="BBC-politics ">Politics</option>
                                    <option value="BBC-health ">Health</option>
                                </select>

                                <br/>
                                <button className="btn-save btn btn-primary btn-sm" onClick={this.BBCnappi}>Add to
                                    list
                                </button>
                            </div>
                        </td>

                        <td>
                            {/*HS*/}
                            <div className="drop-menu">
                                <button onClick={this.HSlogo}><img alt="" src={HSlogo} width="40vw" height="40vh"/></button>

                                <select className="mdb-select" ref="HS">
                                    <option value="" disabled selected>Pick your favorites</option>
                                    <option value="HS-tuoreimmat ">Latest</option>
                                    <option value="HS-kotimaa ">Homeland</option>
                                    <option value="HS-ulkomaat ">World</option>
                                    <option value="HS-talous ">Economy</option>
                                    <option value="HS-politiikka ">Politics</option>
                                    <option value="HS-urheilu ">Sports</option>

                                </select>
                                <br/>
                                <button className="btn-save btn btn-primary btn-sm" onClick={this.HSnappi}>Add to list
                                </button>
                            </div>
                        </td>

                        <td>
                            {/*IS*/}
                            <div className="drop-menu">
                                <button onClick={this.ISlogo}><img alt="" src={ISlogo} width="40vw" height="40vh"/></button>

                                <select className="mdb-select" ref="IS">
                                    <option value="" disabled selected>Pick your favorites</option>
                                    <option value="IS-tuoreimmat ">Latest</option>
                                    <option value="IS-kotimaa ">Homeland</option>
                                    <option value="IS-ulkomaat ">World</option>
                                    <option value="IS-taloussanomat ">Economy</option>
                                    <option value="IS-viihde ">Entertainment</option>
                                    <option value="IS-musiikki ">Music</option>
                                    <option value="IS-urheilu ">Sports</option>

                                </select>
                                <br/>
                                <button className="btn-save btn btn-primary btn-sm" onClick={this.ISnappi}>Add to list
                                </button>
                            </div>
                        </td>

                    </tr>
                </table>
                <br/>
                <br/>
                <b>URL</b>: <input ref="URL" type="text" onChange={this.props.URL}
                                   placeholder="Insert your URL here!"></input>
                <button className="btn btn-primary" onClick={this.URLnappi}>Add to list</button>
                <button className="myBtn" onClick={this.topFunction} title="Go to top"><i class="icon-chevron-up"/>
                </button>
                <br/>
                <br/>
                {/*value={this.state.urlOsoite}*/}
                <form>
                    <Feedilista isAuthenticated={this.props.isAuthenticated}/>
                    <br/>

                    <button className="btn btn-info" type="submit" value="Clear">Clear</button>


                </form>
                <br/>
                <button className="myBtn" onClick={this.topFunction} title="Go to top">
                    <i className="icon-chevron-up"/>
                </button>


                <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>


            </div>

        );
    }


}

