import React from 'react';
import { withRouter } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {
    ReactiveBase,
    DataSearch
  } from "@appbaseio/reactivesearch";
// import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';
// import {Link} from 'react-router-dom';
import searchimg from '../img/search-solid.svg';
import bgimage from '../img/bckgrnd.jpg';

export class Jumbo extends React.Component {
    render() {
        return (
            <Jumbotron className="my-auto" fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', position: 'relative', height: '90.5vh' }}>
                    <div className="my-auto">
                        <ReactiveBase
                            app="subleasr-test-app"
                            credentials="ZmKpHSlRT:defa23b4-dc37-49dd-82fd-204038f44192"
                            type="listing"
                            theme={{
                                colors: {
                                    primaryColor: "#64d334"
                                }
                            }}
                            // mapKey="AIzaSyAWKr64Pz0dpS1oVttJ2vUl6Ep_YcWTdSk"
                        >
                        <h1 className="text-light mx-auto w-50 p-5 mb-5">Finding a sublease is one click away.</h1>
                        <div className="w-50 mx-auto pt-5">
                            <DataSearch
                                componentId="search"
                                dataField="name"
                                autosuggest={true}
                                placeholder="Enter an address, neighborhood, city, or ZIP code"
                                iconPosition="right"
                                className="search mx-auto"
                                onValueSelected={(val) => this.props.history.push("/search?search=" + val)}
                                icon={
                                    <img
                                        alt="Search"
                                        src={searchimg}
                                        width="20"
                                        height="20"
                                        className="mb-4"
                                    />
                                }
                                
                            />
                        </div>
                        {/* <InputGroup inline className="mx-auto w-50">
                            <FormControl className="pt-4 pb-4" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code"/>
                            <InputGroup.Append>
                                <Link className="btn btn-success" to="/search">
                                        <img
                                            alt="Search"
                                            src={searchimg}
                                            width="20"
                                            height="20"
                                            className="pt-1"
                                        />
                                </Link>
                            </InputGroup.Append>
                        </InputGroup> */}
                        </ReactiveBase>
                    </div>
            </Jumbotron>
        );
    }
}

export default withRouter(Jumbo);