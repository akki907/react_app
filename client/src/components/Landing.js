import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

    constructor(){

    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// Landing.propTypes = {
//   auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  tenants: state.tenants
});


export default connect(mapStateToProps)(Landing);