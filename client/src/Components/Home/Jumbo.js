import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from 'react-router-dom';
import bgimage from '../img/bckgrnd.jpg';
import searchimg from '../img/search-solid.svg';

export class Jumbo extends React.Component {
    render() {
        return (
            <Jumbotron className="my-auto" fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', position: 'relative', height: '90.5vh' }}>
                    <div className="my-auto">
                        <h1 className="text-light mx-auto w-50 p-5">Finding a sublease is one click away.</h1>
                        <InputGroup inline className="mx-auto w-50">
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
                        </InputGroup>
                    </div>
            </Jumbotron>
        );
    }
}

export default Jumbo;