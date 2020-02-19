import React, {Component} from 'react'
import Geocode from "react-geocode"
import {CountryDropdown, RegionDropdown, CountryRegionData} from "react-country-region-selector"
import Slider from 'react-input-slider';

class Listing extends Component {
    constructor(){
        super()
        this.state={
            addressOne:"",
            addressTwo: "",
            country: "",
            region:"",
            zipCode: "",
            minPrice:"",
            maxPrice:"",
            roommatePref:"",
            aptOrRoom: "",
            lat: "",
            lng: "",
            months: "",
            startDate: "",
            description:"",
            roomOrHouse: "",
            pets: "",
            refrigerator: false,
            oven: false,
            sharedWasherDryer: false,
            stove: false,
            washerDryerInUnit:false,
            noWasherDryer: false,
            roommateInfo: "",
            x: 10,
            subleaseReason: "",
            rooomDescr: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    selectCountry (val) {
        this.setState({ country: val });
    }
     
    selectRegion (val) {
        this.setState({ region: val });
    }

    

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({
            [name]:checked
        })
        :this.setState({
            [name]:value
        })
    }

    handleCheckboxChange = event => this.setState({ checked: event.target.checked })

    handleClick(id){
        // set response language. Defaults to english.
        Geocode.setLanguage("en");
        
        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("es");
        
        // Enable or disable logs. Its optional.
        Geocode.enableDebug();
        Geocode.fromAddress(this.state.address).then(
            response => {
              const { latitude, longitude } = response.results[0].geometry.location;
              this.setState({
                  lat: latitude,
                  lng: longitude
              })
              console.log(latitude, longitude);
            },
            error => {
              console.error(error);
            }
          );
    }

    render(){
        return(
            <div>
                <form>
<<<<<<< HEAD:js/Components/Listing.js
                    <h3>Please check all appliance features that your place contains:</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="refrigerator"
                            checked = {this.state.refrigerator}
                            onChange = {this.handleChange}
                        />
                        refrigerator
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="oven"
                            checked = {this.state.oven}
                            onChange = {this.handleChange}
                        />
                        oven
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="sharedWasherDryer"
                            checked = {this.state.sharedWasherDryer}
                            onChange = {this.handleChange}
                        />
                        Shared washer/dryer on-site
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="stove"
                            checked = {this.state.stove}
                            onChange = {this.handleChange}
                        />
                        stove
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="washerDryerInUnit"
                            checked = {this.state.washerDryerInUnit}
                            onChange = {this.handleChange}
                        />
                        Washer/Dryer in unit
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="noWasherDryer"
                            checked = {this.state.noWasherDryer}
                            onChange = {this.handleChange}
                        />
                        No washer/dryer
                    </label>
                    <br />
                    <select value = {this.state.roomOrHouse} onChange= {this.handleChange}
                        name = "roomOrHouse">
                            <option value="nothing">Room or Whole House</option>
                            <option value="singleRoom">Single Room</option>
                            <option value = "wholeHouse">Whole House</option>
                    </select>
                    <br />
=======
>>>>>>> dd02d52bf392846609cb6242567f0acbb0c43f20:src/Components/Listing.js
                <select value = {this.state.aptOrRoom} onChange= {this.handleChange}
                   name = "aptOrRoom">
                       <option value="nothing">Type of Housing</option>
                       <option value="apartment">Apartment</option>
                       <option value = "home">Home</option>
                   </select>
                   <br />
                    <input type="text" name="addressOne" value={this.state.addressOne}
                    placeholder="Address One" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="addressTwo" value={this.state.addressTwo}
                    placeholder="Address Two" onChange={this.handleChange}/>
                    <br />
                    <CountryDropdown
                        value={this.state.country}
                        onChange={(val) => this.selectCountry(val)} />
                    <br />
                    <RegionDropdown
                        country={this.state.country}
                        value={this.state.region}
                        onChange={(val) => this.selectRegion(val)} />
                    <br />
                    <input type="text" name="zipCode" value={this.state.zipCode}
                    placeholder="Zip Code" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="minPrice" value={this.state.minPrice}
                    placeholder="minimum price (per month)" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="maxPrice" value={this.state.maxPrice}
                    placeholder="maximum price (per month)" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="startDate" value={this.state.startDate}
                    placeholder="Start of sublease" onChange={this.handleChange}/>
                    <br />
                    <select value = {this.state.months} onChange= {this.handleChange}
                   name = "months">
                       <option value="nothing">Length of lease</option>
                       <option value="one">1</option>
                       <option value = "two">2</option>
                       <option value = "three">3</option>
                       <option value="four">4</option>
                       <option value="five">5</option>
                       <option value="six">6</option>
                       <option value="seven">7</option>
                       <option value="eight">8</option>
                       <option value="nine">9</option>
                       <option value="ten">10</option>
                       <option value="eleven">11</option>
                       <option value="twelve">12</option>
                   </select>
                   <br />
                   <select value = {this.state.roommatePref} onChange= {this.handleChange}
                   name = "roommatePref">
                       <option value="nothing">Roommate Preference</option>
                       <option value="Male">Male</option>
                       <option value = "Female">Female</option>
                       <option value = "No_Preference">No Preference</option>
                   </select>
                    <br />
                    <textarea name = "roommateInfo" value={this.state.roommateInfo} 
                placeholder="Place any oddities about either your roommate or house that a subleasor should know of."
                onChange={this.handleChange}>

                </textarea>
                <br />
                    <select value = {this.state.pets} onChange= {this.handleChange}
                   name = "pets">
                       <option value="nothing">Pets Allowed?</option>
                       <option value="yes">Yes</option>
                       <option value = "no">No</option>
                   </select>
                   <br />
                   <textarea name = "subleaseReason" value={this.state.subleaseReason} 
                    placeholder="Reason for subleasing?"
                    onChange={this.handleChange}/>
                    <br />
                    <textarea name = "roomDescr" value={this.state.roomDescr} 
                    placeholder="Give a description of your place. "
                    onChange={this.handleChange}/>
                   <br />
                   <Slider axis="x" xstep={1} xmin={0} xmax={100} x={this.state.x}
                   onChange={({ x }) => this.setState({ x: parseFloat(x.toFixed(2)) })}/> 
                   <br />
                    <button onSubmit={this.handleClick}>Submit</button>
                </form>
                <h1>{this.state.lat} {this.state.lng}</h1>
            </div>
        )
    }
}

export default Listing 