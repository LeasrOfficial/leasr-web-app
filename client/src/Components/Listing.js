import React, {Component} from "react";
import {
  ReactiveBase,
  DataSearch,
  NumberBox,
  RangeSlider,
  SingleRange
} from "@appbaseio/reactivesearch";
import  { ReactiveGoogleMap } from "@appbaseio/reactivemaps";
import "./Styles/Search.css";

class App extends Component {
    onPopoverClick = function(data) {
        return (
            <div className="popover">
                <div className="image-container">
                    <img src={data.image} alt={data.name} height="185" width="263" />
                </div>
                <div className="extra-info-container">
                    <div className="type-container info">
                        {data.room_type}-{data.beds} bed
                    </div>
                    <div className="name-container info">{data.name}</div>
                    <div className="price-container info">
                        ${data.price} per night-Free cancellation
                    </div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="main-container">
                <ReactiveBase
                    app="leasr-alpha"
                    credentials="Wtg8PwyGR:4ec1b158-b62d-4624-8f82-47543b160efe"
                    type="listing"
                    theme={{
                        colors: {
                            primaryColor: "#64d334"
                        }
                    }}
                    mapKey="AIzaSyAKfJ8YTpNS5trRgKEy8Jj1XxiYCPBBYBM"
                >
                    <div className="filters-search-container">
                        <div className="filter-container">
                            <div className="dropdown">
                                <button className="button">Price</button>
                                <div className="dropdown-content">
                                    <RangeSlider
                                        componentId="PriceSensor"
                                        dataField="price"
                                        title="Price Range"
                                        range={{
                                            start: 500,
                                            end: 2000
                                        }}
                                        rangeLabels={{
                                            start: "$500",
                                            end: "$2000"
                                        }}
                                        defaultValue={{
                                            start: 500,
                                            end: 2000
                                        }}
                                        stepValue={10}
                                        interval={20}
                                        react={{
                                            and: ["DateRangeSensor", "GuestSensor"]
                                        }}
                                        className="rangeFilter"
                                    />
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="button">Tenants</button>
                                <div className="dropdown-content-guest">
                                    <NumberBox
                                        componentId="GuestSensor"
                                        dataField="accommodates"
                                        title="Tenants"
                                        defaultValue={4}
                                        labelPosition="right"
                                        data={{
                                            start: 1,
                                            end: 20
                                        }}
                                        className="numberFilter"
                                    />
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="button ">Term</button>
                                <div className="dropdown-content">
                                <SingleRange
                                    componentId="TermSensor"
                                    dataField="term"
                                    title="Term"
                                    size={100}
                                    data={[
                                        {start:1, end:2, label: 'Fall'},
                                        {start:2, end:3, label: 'Winter'},
                                        {start:3, end:4, label: 'Spring'},
                                        {start:4, end:5, label: 'Summer'},
                                        {start:1, end:5, label: 'All Terms'}
                                    ]}
                                    defaultValue='Fall'
                                    selectAllLabel="All Terms"
                                    showCheckbox={true}
                                    showCount={true}
                                    showSearch={false}
                                    react={{
                                        and: ['CategoryFilter', 'SearchFilter'],
                                    }}
                                    showFilter={true}
                                    filterLabel="Term"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="search-container">
                            <DataSearch
                                componentId="search"
                                dataField="name"
                                autosuggest={false}
                                placeholder="Search Leasr..."
                                iconPosition="right"
                                className="search"
                            />
                        </div>
                    </div>

                    <div className="result-map-container">
                        <ReactiveGoogleMap
                            componentId="map"
                            dataField="location"
                            react={{
                                and: 'places',
                            }}
                            renderData={result => ({
                                label: result.mag,
                            })}
                            style={{height: '90.5vh'}}
                        />
                    </div>
                </ReactiveBase>
            </div>
        );
    }
}

export default App;
