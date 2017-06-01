import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { ProviderManager } from '../data/ProviderManager';

@observer
export class ProviderDisplayHeader extends Component<{ manager: ProviderManager }, {}> {
    constructor(props: { manager: ProviderManager }) {
        super(props);

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSearchChange(event: any) {
        this.props.manager.setSearch(event.target.value);
    }

    handleOrderChange(event: any) {
        this.props.manager.setOrder(event.target.value);
    }

    handleSortChange(event: any) {
        this.props.manager.setSortBy(event.target.value);
    }

    render() {
        return (
            <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col-4">
                    <h2 className="card-title" >Provider List</h2>
                </div>
                <div className="col-5">
                    <input type="text" onChange={this.handleSearchChange} placeholder="Search" style={{ width: "100%" }} />
                </div>
                <div className="col">
                    <select style={{ float: "right" }} onChange={this.handleSortChange} value={this.props.manager.getSortBy}>
                        <option value="last_name">Last Name</option>
                        <option value="first_name">First Name</option>
                        <option value="email_address">Email Address</option>
                        <option value="specialty">Specialty</option>
                        <option value="practice_name">Practice Name</option>
                    </select>
                    <select style={{ float: "right" }} onChange={this.handleOrderChange} value={this.props.manager.getOrder}>
                        <option value="asc">Ascending</option>
                        <option value="dsc">Descending</option>
                    </select>
                </div>
            </div>
        );
    }
}


