import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import { get_by_id, delet_by_id } from './../actions/tenantAction'
import { connect } from 'react-redux';
class ListItem extends Component {
    on_delete_handler(id) {
        this.props.delet_by_id(id)
    }

    view_handler(id) {
        console.log('clicked')
    }

    edit_handler(id) {
        console.log('clicked')
    }

    render() {
        const { lists } = this.props;

        return (
            lists.map(item =>
                <div className="p-2" key={item._id}>
                    <div className="list-group">
                        <div className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <div className="mb-1 d-flex flex-column">
                                    <div>{item.name}</div>
                                    <div>
                                        <Moment format="YYYY/MM/DD">
                                            {item.createdAt}
                                        </Moment>
                                    </div>
                                </div>
                                <div className="text-muted">
                                    <Link to={`tenant/Edit/${item._id}`} className="btn btn-outline-secondary mr-1">
                                        Edit
                                    </Link>
                                    <Link to={`tenant/${item._id}`} className="btn btn-outline-info mr-1">
                                        View
                                    </Link>

                                    {/* <button type="button" onClick={this.edit_handler.bind(this)} class="btn btn-outline-secondary m-1">Edit</button> */}
                                    <button type="button" onClick={this.on_delete_handler.bind(this, item._id)} className="btn btn-outline-danger m-1">Delete</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        )
    }
}

ListItem.propTypes = {
    lists: PropTypes.array.isRequired
}

// export default ListItem;
const mapStateToProps = state => ({
    tenant_data: state.tenant_data
});

export default connect(mapStateToProps, { delet_by_id, get_by_id })(ListItem);
