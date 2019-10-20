import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { get_list } from './../actions/tenantAction'
import Spinner from './common/Spinner';
import ListItem from './ListItem';
class Landing extends Component {

    componentDidMount() {
        this.props.get_list()
    }

    render() {

        let { tenants, loading } = this.props.tenant_data
        let content;
        if (tenants === null || loading) {
            content = <Spinner />;
        } else {
            content = <ListItem lists={tenants} />
        }

        return (
            <div className="container-fluid">
                <div className="pull-right create-btn">
                    <Link to={`create`} className="button">
                        Create
                    </Link>
                </div>
                {content}
            </div>
        )
    }
}

Landing.propTypes = {
    get_list: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    tenant_data: state.tenant_data
});


export default connect(mapStateToProps, { get_list })(Landing);