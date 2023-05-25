import React, { useState } from 'react';
import Modal from 'react-modal';

const CountryItem = ({ name }) => (
    <li>
        <a href={`https://www.google.com/search?q=${name}`}>
            {name}
        </a>
    </li>
);

const ContinentList = ({ name, countries }) => (
    <li>
        <a href={`https://www.google.com/search?q=${name}`}>
            <h4>{name}</h4>
        </a>
        <ul>
            {countries.map((country) => (
                <CountryItem key={country} name={country} />
            ))}
        </ul>
    </li>
);

const CountryList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <button className='btn btn-outline-secondary' onClick={() => setModalIsOpen(true)}>Country List</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button className='btn btn-outline-secondary' onClick={() => setModalIsOpen(false)}>Close</button>
                <ul className="modal-list">
                    <ContinentList name="Americas" countries={[
                        'United States',
                        'Canada',
                        'Mexico',
                        'Brazil',
                        'Argentina',
                        'Chile',
                        'Colombia',
                        'Peru',
                        'Venezuela',
                        'Ecuador',
                        'Guatemala',
                        'Cuba',
                        'Haiti',
                        'Bolivia',
                        'Dominican Republic',
                        'Honduras',
                        'Paraguay',
                        'Panama'
                    ]} />
                    <ContinentList name="Europe" countries={[
                        'Germany',
                        'France',
                        'United Kingdom',
                        'Italy',
                        'Spain',
                        'Poland',
                        'Romania',
                        'Netherlands',
                        'Belgium',
                        'Greece',
                        'Czech Republic',
                        'Portugal',
                        'Sweden',
                        'Hungary',
                        'Austria',
                        'Bulgaria',
                        'Denmark',
                        'Finland'
                    ]} />
                    <ContinentList name="Africa" countries={[
                        'Nigeria',
                        'Ethiopia',
                        'Egypt',
                        'Democratic Republic of the Congo',
                        'South Africa',
                        'Tanzania',
                        'Kenya',
                        'Uganda',
                        'Algeria',
                        'Sudan',
                        'Morocco',
                        'Angola',
                        'Mozambique',
                        'Ghana',
                        'Madagascar',
                        'Cameroon',
                        'Côte d\'Ivoire'
                    ]} />
                    <ContinentList name="Asia" countries={[
                        'China',
                        'India',
                        'Indonesia',
                        'Pakistan',
                        'Bangladesh',
                        'Japan',
                        'Philippines',
                        'Vietnam',
                        'Iran',
                        'Turkey',
                        'Thailand',
                        'Myanmar',
                        'South Korea',
                        'Iraq',
                        'Afghanistan',
                        'Saudi Arabia',
                        'Uzbekistan'
                    ]} />
                    <ContinentList name="Oceania" countries={[
                        'Australia',
                        'Papua New Guinea',
                        'New Zealand',
                        'Fiji',
                        'Solomon Islands',
                        'Vanuatu',
                        'Samoa',
                        'Kiribati',
                        'Tonga',
                        'Micronesia'
                    ]} />
                    <ContinentList name="Antarctica" countries={[]} />
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Modal>
        </div>
    );
};

export default CountryList;