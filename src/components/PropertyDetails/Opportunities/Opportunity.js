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
import Panel from '../../Common/Panel/Panel';
import status from '../../../util/status';

class Opportunity extends Component {
    render() {
        const rate = this.props.data.rates.length ? this.props.data.rates[0].currentRate : '';
        const body = (
            <div className="panel-body">
                <h3>{'Rate '}<span>{rate}</span></h3>
                <h3>{'Status '}<span>{status[this.props.data.status] || ''}</span></h3>
            </div>
        )
        return (
            <Panel headline={`${this.props.data.startDate} to ${this.props.data.endDate}`} content={body}/>
        );
    }
}

export default Opportunity;