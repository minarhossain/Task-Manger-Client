import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Create = () => {
    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4>Create New</h4>
                            <br />
                            <input type="text" placeholder="Task Name" className="form-control animated fadeInUp" />
                            <br />
                            <textarea className='form-control animated fadeInUp' name="" id="" cols="30" rows={5}></textarea>
                            <br />
                            <button className="btn btn-primary float-end">Create</button>
                        </div>
                    </div>

                </div>
            </Row>

        </Container>
    );
};

export default Create;