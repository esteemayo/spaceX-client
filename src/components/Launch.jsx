import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { FETCH_LAUNCH_QUERY } from '../queries/queries';
import Loader from './Loader';

const Launch = ({ match }) => {
    let { flight_number } = match.params;
    flight_number = parseInt(flight_number);

    const { loading, error, data } = useQuery(FETCH_LAUNCH_QUERY, {
        variables: {
            flight_number
        }
    });

    if (error) return console.log(error);

    let displayLaunch;

    if (loading) {
        displayLaunch = <Loader />
    } else if (data) {
        const { flight_number, mission_name, launch_year, launch_success, rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;

        displayLaunch = (
            <div>
                <h1 className="display-4 my-3">
                    <span className="text-dark">Mission: { mission_name }</span>
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        Flight Number: { flight_number }
                    </li>
                    <li className="list-group-item">
                        Launch Year: { launch_year }
                    </li>
                    <li className="list-group-item">
                        Launch Successful: <span className={ launch_success ? 'text-success' : 'text-danger' }>
                            {launch_success ? 'Yes' : 'No'}
                        </span>
                    </li>
                </ul>
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                    <li className="list-group-item">Rocket ID: { rocket_id }</li>
                    <li className="list-group-item">Rocket Name: { rocket_name }</li>
                    <li className="list-group-item">Rocket Type: { rocket_type }</li>
                </ul>
                <hr/>
                <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
        )
    }

    return displayLaunch;
}

export default Launch;