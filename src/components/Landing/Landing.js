/**
Copyright 2018 Expedia Group, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
import React, {Component} from 'react';
import Search from '../Common/Search/Search';
import './Landing.css';
import axios from 'axios';
import config from '../../config';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.routes = [`${props.match.path}`];
        const routeIndex = this.routes.indexOf(props.location.pathname);

        this.state = {
            navIndex: routeIndex !== -1 ? routeIndex : 0,
            propertyId: ''
        };

        this.handleNavChange = this.handleNavChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.callZillowAPI = this.callZillowAPI.bind(this);
    }

    

    callZillowAPI(address, cityAndStateAndZip) {
        const zwsId = config['zillow_api_key'];
        
        const url = `https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${zwsId}&address=${address}&citystatezip=${cityAndStateAndZip}`;

        axios({
            method: 'get',
            url,
        }).then((resp) => {
            console.log(resp);
        });
    }


    componentDidMount() {
        this.callZillowAPI('2114+Bigelow+Ave', 'Seattle%2C+WA');
    }
    handleNavChange(event, navIndex) {
        this.setState({navIndex});
        const path = this.routes[navIndex];
        this.props.history.push(path);
    }

    onSubmit(searchTerm) {
        // Navigate to details page
        this.props.history.push(`${this.props.match.path}/${encodeURIComponent(searchTerm)}`);
    }

    render() {
        return (
            <div className="landing">
                <h1>{'Welcome to the 2018 HomeAway RezFest Hackathon!'}</h1>
                <p>{'This is a starter project intended to get you started using the HomeAway GraphQL endpoints.'}</p>
                <Search name={'propertyId'} onSubmit={this.onSubmit} label={'Seach By Property ID'}/>
            </div>
        );
    }
}

export default Landing;
