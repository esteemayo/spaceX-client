import React from 'react';
import { useQuery } from '@apollo/client';

import Loader from './Loader';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { FETCH_LAUNCHES_QUERY } from '../queries/queries';

const Launches = () => {
    const { loading, error, data } = useQuery(FETCH_LAUNCHES_QUERY);

    if (error) return console.log(error);

    const launches = loading ? (
        <Loader />
    ) : (
            data && data.launches.map(launch => (
                <LaunchItem
                    key={ launch.flight_number || launch.flight_number === 110 ? Math.random() * 10000000 : launch.flight_number }
                    launch={ launch } 
                />
            ))
    )

    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            { launches }
        </div>
    );
}

export default Launches;