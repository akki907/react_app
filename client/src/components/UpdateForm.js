import React, { Component } from 'react'
import { connect } from 'react-redux';
import { get_by_id, update_info } from '../actions/tenantAction';
import TextFieldGroup from './common/TextFieldGroup';
import { withRouter } from "react-router-dom";

class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pan: '',
            aadhar: '',
            address: '',
            errors: {},
            id: '',
            isEdit: false,
            title: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
            if (this.props.match.path.includes('Edit')) {
                this.setState({ isEdit: true, title: 'Edit' })
            }
            this.setState({ id: this.props.match.params.id })
            this.props.get_by_id(this.props.match.params.id)
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let post_data = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            pan: this.state.pan,
            aadhar: this.state.aadhar
        }
        this.props.update_info(post_data, this.props.history)
    }

    componentWillReceiveProps(nextProps) {
        const { tenant } = nextProps.tenant_data
        if (tenant && Object.keys(tenant).length > 0) {
            this.setState({ name: tenant.name, pan: tenant.pan, address: tenant.address, aadhar: tenant.aadhar })
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }


    render() {
        const { errors } = this.props;
        const { loading } = this.props.tenant_data
        let form = (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="pull-left d-flex">
                            <button className="btn btn-light" onClick={this.props.history.goBack}>Back</button>
                        </div>

                        <h1 className="display-4 text-center">{this.state.title} Tenant Info</h1>
                        <small className="d-block pb-3">* = required fields</small>
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                placeholder="* Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                error={errors.name}
                                info="Please Provide your name."
                                disabled={!this.state.isEdit}
                            />

                            <TextFieldGroup
                                placeholder="* Pan No"
                                name="pan"
                                value={this.state.pan}
                                onChange={this.onChange}
                                error={errors.pan}
                                info="Please Provide your no."
                                disabled={!this.state.isEdit}
                            />
                            <TextFieldGroup
                                placeholder="Aadhar id"
                                name="aadhar"
                                type='Number'
                                value={this.state.aadhar}
                                onChange={this.onChange}
                                error={errors.aadhar}
                                info="Please fill your Adhar no."
                                disabled={!this.state.isEdit}
                            />
                            <TextFieldGroup
                                placeholder="Address Info"
                                name="address"
                                type='text'
                                value={this.state.address}
                                onChange={this.onChange}
                                error={errors.address}
                                info="Please fill your Address"
                                disabled={!this.state.isEdit}
                            />


                            {this.state.isEdit ? (<input
                                type="submit"
                                value="Submit"
                                className="btn btn-info btn-block mt-4"
                            />) : null}
                        </form>
                    </div>
                </div>
            </div>
        )
        return (
            <div>
                {form}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    tenant_data: state.tenant_data,
    errors: state.errors
});

export default connect(mapStateToProps, { get_by_id, update_info })(withRouter(UpdateForm));