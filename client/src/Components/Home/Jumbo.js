import React from 'react';
import About from '../Extras/About';
import Meet from '../Extras/Meet';
import Email from '../Extras/Email';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import bgimage from '../img/bckgrnd.jpg';
import searchimg from '../img/search-solid.svg';

export class Jumbo extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="my-auto" fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', position: 'relative', height: '90.5vh' }}>
                        <div className="my-auto">
                            <h1 className="text-light mx-auto w-50 p-5">Finding a sublease is one click away.</h1>
                            <h3 className="text-light mx-auto w-50 p-5">Sign up for our mailing list and recieve Alpha and Beta news!</h3>
                            <InputGroup inline className="mx-auto w-50">
                                <FormControl className="pt-4 pb-4" type="text" placeholder="Enter your email"/>
                                <InputGroup.Append>
                                    <Button className="btn btn-success">
                                            <img
                                                alt="Search"
                                                src={searchimg}
                                                width="20"
                                                height="20"
                                                className="pt-1"
                                            />
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                </Jumbotron>

                <About />
                <Meet />
                
            </div>

        );
    }
}

export default Jumbo;