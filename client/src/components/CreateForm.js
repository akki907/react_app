import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  create_user } from './../actions//tenantAction';
import TextFieldGroup from './common/TextFieldGroup';
import { withRouter } from "react-router-dom";

class CreateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pan: '',
            aadhar: '',
            address: '',
            errors: {},
            title:"Create"
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let post_data ={
            id: this.state.id,
            name : this.state.name,
            address : this.state.address,
            pan : this.state.pan,
            aadhar : this.state.aadhar
        }
        this.props.create_user(post_data, this.props.history)
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }


    render() {
        const { errors } = this.props;
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
                            
                            />

                            <TextFieldGroup
                                placeholder="* Pan No"
                                name="pan"
                                value={this.state.pan}
                                onChange={this.onChange}
                                error={errors.pan}
                                info="Please Provide your no."
                            
                            />
                            <TextFieldGroup
                                placeholder="Aadhar id"
                                name="aadhar"
                                type='Number'
                                value={this.state.aadhar}
                                onChange={this.onChange}
                                error={errors.aadhar}
                                info="Please fill your Adhar no."
                            
                            />
                              <TextFieldGroup
                                placeholder="Address Info"
                                name="address"
                                type='text'
                                value={this.state.address}
                                onChange={this.onChange}
                                error={errors.address}
                                info="Please fill your Address"
                            
                            />
                       
                           <input
                                type="submit"
                                value="Submit"
                                className="btn btn-info btn-block mt-4"
                            />
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

export default connect(mapStateToProps, { create_user })(withRouter(CreateForm));