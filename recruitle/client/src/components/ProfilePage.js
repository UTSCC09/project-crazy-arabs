import { useQuery } from '@apollo/client';
import { GET_USER } from '../queries/queries';
import { getUsername } from './api.js';
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ProfilePage(props) {
    const navigate = useNavigate();

    const username = getUsername();
    console.log(username)
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: username }
    });

    const displayUserDetails = () => {
        if (data && data.applicant) {
            return (
                <div>
                <h2>{ data.applicant.id }</h2>
                <p>{ data.applicant.firstName }</p>
                <p>{ data.applicant.lastName }</p>
                <p>{ data.applicant.email }</p>
                </div>
            );
        }
    };

    function authResolver(){
        if (!props.isSignedIn){
            console.log("shouldnt be here!")
            navigate('/')
        } else {
            console.log("please be here!")
            return (
                <div>
                    {displayUserDetails()}
                </div>
            );
        }
      }
    
      return (
        <React.Fragment>
          {authResolver()}
        </React.Fragment>
      );
};