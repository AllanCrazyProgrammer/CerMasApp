import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import API from "../utils/API"



class AddModal extends React.Component {
    state = {
        items: []
    };
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


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

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getCSV()
            .then(res => {
                console.log(res.data.length)
                var fieldsData = res.data[res.data.length - 1].data
                this.setState({
                    items: fieldsData

                })
                console.log(this.state)
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };



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
        var keys = [];

        if (this.state.items && this.state.items.length > 0) {
            keys = Object.keys(this.state.items[0]);

        }

        const formRows = keys.map(key => {
            console.log(key)
            return (
                <>
                    <Form.Label key={key}>{key}</Form.Label>
                    <Form.Control value={key} onChange={this.onChange} type="input" placeholder={key} name={key} />
                </>
            )
        });


        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Add                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Function</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        <Form  >
                            <Form.Group >{formRows}</Form.Group >
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