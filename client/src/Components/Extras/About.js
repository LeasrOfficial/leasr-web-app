import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div className="stylish-color-dark w-75 mx-auto p-5 text-left" style={{ position: 'relative', backgroundSize: 'cover', height: '60vh' }}>
                <h1 className="pb-4">Leasr</h1>
                <p>Leasr is a subleasing website dedicated to the subletting markets around college campuses. We are looking to start with the Santa Clara University area and then expand to other colleges after our initial release. When students go abroad, take an internship for the Summer outside of their college campus, or just take a quarter off they often struggle to find a suitable subletter for their house. Many of times College students find a subletter in one of two ways word of mouth or the Facebook Marketplace. Sure, you may be able to find a subletter in a day or two, but they may not be what you're searching for. Often potential subletters are of the opposite sex, out of college, or just not a good match for your housemates staying while you leave.</p>
                <p>Here's where Leasr comes in. By limiting users to .edu email domain holders, we are able to allow college students find other college students and better match potential subletters.</p>
                <p>If this sounds like something that intersts you, please feel free to sign up!</p>

                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <Link className="btn btn-success btn-rounded" to="/signup">Become a Leasr!</Link>
                    </li>
                </ul>
            </div>
            
        );
    }
}

export default About;