import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import propic from '../../assets/images/propic.jpg';

class ProImage extends Component {
    render() {
        return (
            <Fragment>
                <img src={propic} className='homeImg' />
                <Button className='proImgButton'>
                    Available For Hire 
                </Button>
            </Fragment>
        );
    }
}

export default ProImage;