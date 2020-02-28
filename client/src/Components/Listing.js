import React, { Component, useState } from "react";
import {
  ReactiveBase,
  DataSearch,
  NumberBox,
  RangeInput,
  SingleRange
} from "@appbaseio/reactivesearch";
import { Carousel } from "react-bootstrap"
import  { ReactiveGoogleMap } from "@appbaseio/reactivemaps";
import searchimg from './img/search-solid.svg';
import "./Styles/Search.css";

class App extends Component {
    onPopoverClick = function(data) {
        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
            setDirection(e.direction);
        };
        return (
            <div className="p-2">
                <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src={data.image} alt={data.name} height="185" width="263" />
                    </Carousel.Item>
                </Carousel>
                <div className="extra-info-container text-left">
                    <div className="type-container info">
                        {data.room_type}-{data.beds} bed(s)
                    </div>
                    <div className="name-container info">{data.name}</div>
                    <div className="price-container info">
                        ${data.price} per month
                    </div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="main-container">
                <ReactiveBase
                    app="subleasr-test-app"
                    credentials="ZmKpHSlRT:defa23b4-dc37-49dd-82fd-204038f44192"
                    type="listing"
                    theme={{
                        colors: {
                            primaryColor: "#64d334"
                        }
                    }}
                    mapKey="AIzaSyAWKr64Pz0dpS1oVttJ2vUl6Ep_YcWTdSk"
                >
                    <div className="filters-search-container">
                        <div className="filter-container">
                            <div className="dropdown">
                                <button className="button">Price</button>
                                <div className="dropdown-content">
                                    <RangeInput
                                        componentId="PriceSensor"
                                        dataField="price"
                                        title="Price Range"
                                        range={{
                                            start: 500,
                                            end: 10000
                                        }}
                                        rangeLabels={{
                                            start: "Low",
                                            end: "High"
                                        }}
                                        defaultValue={{
                                            start: 500,
                                            end: 10000
                                        }}
                                        stepValue={1}
                                        interval={2}
                                        // showFilter={true}
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
                                autosuggest={true}
                                placeholder="Search Leasr..."
                                iconPosition="right"
                                className="search"
                                icon={
                                    <img
                                        alt="Search"
                                        src={searchimg}
                                        width="20"
                                        height="20"
                                        className="pb-2"
                                    />
                                }
                            />
                        </div>
                    </div>

                    <div className="result-map-container">
                    <ReactiveGoogleMap
                        componentId="map"
                        dataField="location"
                        defaultZoom={13}
                        pagination
                        onPageChange={() => {
                            window.scrollTo(0, 0);
                        }}
                        style={{
                            width: "100%",
                            height: "100vh"
                        }}
                        onPopoverClick={this.onPopoverClick}
                        // className="rightCol"
                        showMarkerClusters={false}
                        showSearchAsMove={false}
                        innerClass={{
                            label: "label"
                        }}
                        renderError={(error) => (
                            <div>
                                Something went wrong!<br/>Error details<br/>{error}
                            </div>
                        )}   
                        defaultMapStyle="Flat Map"
                        renderAllData={(
                            hits,
                            streamHits,
                            loadMore,
                            renderMap,
                            renderPagination
                        ) => (
                            <div style={{ display: "flex"}}>
                            <div>
                                <div className="card-container">
                                {hits.map(data => (
                                    <div key={data._id} className="card">
                                    <div
                                        className="card__image"
                                        style={{ backgroundImage: `url(${data.image})` }}
                                        alt={data.name}
                                    />
                                    <div>
                                        <h5>{data.name}</h5>
                                        <div className="card__price">${data.price}</div>
                                        <p className="card__info">
                                        {data.room_type} · {data.accommodates} guests
                                        </p>
                                    </div>
                                    </div>
                                ))}
                                </div>
                                <div>{renderPagination()}</div>
                            </div>
                            <div className="map-container">{renderMap()}</div>
                            </div>
                        )}
                        renderData={data => ({
                            label: (
                            <div
                                className="marker"
                                style={{
                                width: 90,
                                display: "block",
                                textAlign: "center"
                                }}
                            >
                                <div className="extra-info">{data.name}</div>${data.price}
                            </div>
                            )
                        })}
                        react={{
                            and: ["GuestSensor", "PriceSensor", "DateRangeSensor", "search"]
                        }}
                        />
                    </div>
                </ReactiveBase>
            </div>
        );
    }
}

export default App;
