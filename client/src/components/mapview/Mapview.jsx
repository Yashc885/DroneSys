'use client';
import React, { useCallback, useEffect, useState } from "react";
import Select from 'react-select';
import CountryRegion from "countryregionjs";
import Map from "./map.jsx";
import "./map.css";

function Mapview() {
    const [state, setState] = useState("");
    const [states, setStates] = useState([]);
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState([]);
    const [lga, setLGA] = useState("");
    const [lgas, setLGAs] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedCountryName, setSelectedCountryName] = useState("");
    const [selectedStateName, setSelectedStateName] = useState("");

    const ZERO = 0;
    const countryRegion = new CountryRegion();

    const getCountryRegionInstance = useCallback(() => countryRegion, []);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const countries = await getCountryRegionInstance().getCountries();
                setCountries(countries.map(country => ({
                    value: country.id,
                    label: country.name
                })));
            } catch (error) {
                console.error(error);
            }
        }
        getCountries();
    }, [getCountryRegionInstance]);

    useEffect(() => {
        const getStates = async () => {
            try {
                const states = await getCountryRegionInstance().getStates(country);
                setStates(states.map(userState => ({
                    value: userState?.id,
                    label: userState?.name
                })));
            } catch (error) {
                console.error(error);
            }
        }

        if (country) {
            getStates();
        }
    }, [country, getCountryRegionInstance]);

    useEffect(() => {
        const getLGAs = async () => {
            try {
                const lgas = await getCountryRegionInstance().getLGAs(country, state);
                setLGAs(lgas?.map(lga => ({
                    value: lga?.id,
                    label: lga?.name
                })));
            } catch (error) {
                console.error(error);
            }
        }

        if (state) {
            getLGAs();
        }
    }, [country, state, getCountryRegionInstance]);

    const handleCountryChange = (event) => {
        const { value, label } = event;
        setCountry(value);
        setSelectedCountryName(label); // Set the selected country name
    };

    const handleStateChange = (event) => {
        const { value, label } = event;
        setState(value);
        setSelectedStateName(label); // Set the selected state name
    };

    const handleLGAChange = (event) => {
        const { value, label } = event;
        setLGA(value);
        setSelectedCity(label); // Update the selected city when LGA changes
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Country:', selectedCountryName);
        console.log('Selected State:', selectedStateName);
        console.log('Selected City:', selectedCity);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: '1.4783px solid rgba(11, 70, 84, 0.25)',
            borderRadius: '5.91319px',
            fontSize: "1.5rem",
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? '#3B0051' : '#F2CCFF',
            ':hover': {
                color: 'black'
            }
        })
    };

    return (
        <>
            <main>
                <section className="submain submain-one">
                    <section className="submain-zero-image-cover">
                        <Map selectedCity={selectedCity} />  {/* Pass selectedCity as a prop */}
                    </section>
                    <form className="submain-one-form" onSubmit={handleSubmit}>
                        <header className="submain-one-form-header">
                            <h1>Pick-A-Location</h1>
                        </header>
                        <section className="submain-one-form-body">
                            <section className="submain-one-form-body-subsection">
                                <Select
                                    type="text"
                                    placeholder="Select a country"
                                    id="name"
                                    onChange={handleCountryChange}
                                    options={countries}
                                    styles={customStyles}
                                    className="submain-one-form-body-subsection-select"
                                />
                            </section>
                            <section className="submain-one-form-body-subsection">
                                {
                                    states?.length !== ZERO &&
                                    <Select
                                        placeholder="Select a state"
                                        id="name"
                                        onChange={handleStateChange}
                                        options={states}
                                        styles={customStyles}
                                        className="submain-one-form-body-subsection-select"
                                    />
                                }
                            </section>
                            <section className="submain-one-form-body-subsection">
                                {
                                    lgas && lgas?.length !== ZERO &&
                                    <Select
                                        placeholder="Select a City"
                                        id="name"
                                        onChange={handleLGAChange}
                                        options={lgas}
                                        styles={customStyles}
                                        className="submain-one-form-body-subsection-select"
                                    />
                                }
                            </section>
                            {
                                !true && lga
                            }
                            <section className="subdomain-one-form-body-subsection-one">
                                <button className="subdomain-one-form-body-subsection-one-button">Submit</button>
                            </section>
                        </section>
                    </form>
                </section>
                <section className="submain submain-two">
                    <section className="submain-two-image-cover">
                        <Map selectedCity={selectedCity} /> 
                    </section>
                </section>
            </main>
        </>
    );
}

export default Mapview;
