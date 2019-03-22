import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import API from "../utils/API"



class AddModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            alumno: "",
            edad: undefined,
            direccion: "",
            curp: undefined,
            enfermedad: ""
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    newUser = () => {

        this.postAlumnos()
        this.handleClose()
        window.location.reload(true);
    }


    postAlumnos = () => {
        var alumno = this.state.alumno
        var edad = this.state.edad
        var direccion = this.state.direccion
        var curp = this.state.curp
        var enfermedad = this.state.enfermedad

        API.saveAlumno({ ...this.state })
            .then(res => {
                this.setState({
                    alumno: alumno,
                    edad: edad,
                    direccion: direccion,
                    curp: curp,
                    enfermedad: enfermedad
                })
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Add                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Function</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control value={this.state.alumno} type="input" placeholder="Enter email" onChange={this.onChange} name="alumno" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control value={this.state.edad} type="input" placeholder="Edad" onChange={this.onChange} name="edad" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control value={this.state.direccion} type="input" placeholder="Edad" onChange={this.onChange} name="direccion" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Curp</Form.Label>
                                <Form.Control value={this.state.curp} type="input" placeholder="Curp" onChange={this.onChange} name="curp" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Enfermedad</Form.Label>
                                <Form.Control value={this.state.enfermedad} type="input" placeholder="Enfermedad" onChange={this.onChange} name="enfermedad" />
                            </Form.Group>

                        </Form>

                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.newUser}>
                            Save Changes
                    </Button>
                    </Modal.Footer>

                </Modal>
            </>
        );

    }
}

export default AddModal;