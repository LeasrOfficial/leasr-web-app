import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import bckgrnd from '../img/san-francisco-bridge-photo.jpg';
import mitch from '../img/mitch.jpg';
import zach from '../img/zach.JPG';
import andrew from '../img/andrew.jpeg';
import Figure from 'react-bootstrap/Figure';

class Meet extends React.Component {
    render() {
        return (
            <div className="stylish-color-dark">
                <Jumbotron fluid style={{ backgroundImage: `url(${bckgrnd})`, backgroundSize: 'cover', position: 'relative', height: '45vh' }}>
                    <h1 className="text-light mx-auto w-75 my-auto">Our team is a group of passionate students from Santa Clara University who have been friends for years. We come from diverse backgrounds with unique experience and expertise.</h1>
                </Jumbotron>
                <h2 className="mx-auto w-50">Meet our developers!</h2>
                <div className="d-inline-block">
                    <Figure className="text-left p-5">
                        <Figure.Image
                            width={200}
                            height={220}
                            alt="Mitch"
                            src={mitch}
                        />
                        <h5>Mitch Hansen</h5>
                        <Figure.Caption className="text-success">
                            Co-Founder &amp; SWE
                        </Figure.Caption>
                    </Figure>
                    <Figure className="text-left p-5">
                        <Figure.Image
                            width={200}
                            height={220}
                            alt="Mitch"
                            src={mitch}
                        />
                        <h5>Ben Dreyer</h5>
                        <Figure.Caption className="text-success">
                            Co-Founder &amp; SWE
                        </Figure.Caption>
                    </Figure>
                    <Figure className="text-left p-5">
                        <Figure.Image
                            width={200}
                            height={220}
                            alt="Mitch"
                            src={mitch}
                        />
                        <h5>Paul Mason</h5>
                        <Figure.Caption className="text-success">
                            Co-Founder &amp; SWE
                        </Figure.Caption>
                    </Figure>
                    <Figure className="text-left p-5">
                        <Figure.Image
                            width={200}
                            height={220}
                            alt="Mitch"
                            src={mitch}
                        />
                        <h5>Myles Hansen</h5>
                        <Figure.Caption className="text-success">
                            SWE &amp; Mobile Developer
                        </Figure.Caption>
                    </Figure>
                </div>

                <h2 className="mx-auto w-50">Meet our business geniuses!</h2>
                <div className="d-inline-block">
                    <Figure className="text-left p-5">
                        <Figure.Image
                            width={200}
                            height={220}
                            alt="Mitch"
                            src={zach}
                        />
                        <h5>Zach McCarthy</h5>
                        <Figure.Caption className="text-success">
                            Business Development
                        </Figure.Caption>
                    </Figure>
                    <Figure className="text-left p-5">
                        <Figure.Image
                            width={200}
                            height={220}
                            alt="Mitch"
                            src={andrew}
                        />
                        <h5>Andrew Puetz</h5>
                        <Figure.Caption className="text-success">
                            Finance &amp; Marketing
                        </Figure.Caption>
                    </Figure>
                </div>
            </div>
            
        );
    }
}

export default Meet;