import { gql } from '@apollo/client';

const FETCH_LAUNCHES_QUERY = gql`
    query launches {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const FETCH_LAUNCH_QUERY = gql`
    query launch($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export {
    FETCH_LAUNCHES_QUERY,
    FETCH_LAUNCH_QUERY
}