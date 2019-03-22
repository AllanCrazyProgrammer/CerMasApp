import React, { Component } from 'react';
import API from "../utils/API"
import ButtonCheckbox from "../components/buttonCheckbox"
import Table from 'react-bootstrap/Table'
import EditModal from "../components/editModal"

class AllAlumnos extends Component {
    state = {
        alumnos: []
    }

    componentDidMount() {
        this.loadAlumnos();
    }

    loadAlumnos = () => {
        API.getAlumnos()
            .then(res => {
                this.setState({
                    alumnos: res.data
                })
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };

    onEditClick = id => {
        console.log(id)
        // this.props.history.push(`/${id}`);
    }



    render() {
        return (
            <container fluid>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Direccion</th>
                            <th>Curp</th>
                            <th>Enfermedad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.alumnos.map(alumno => {
                                const id = alumno._id;
                                return (
                                    <tr key={id}>
                                        <td>{alumno.alumno}</td>
                                        <td>{alumno.edad}</td>
                                        <td>{alumno.direccion}</td>
                                        <td>{alumno.curp}</td>
                                        <td>{alumno.enfermedad}</td>
                                        <td>
                                            <EditModal id={id} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>;

            </container>
        );
    }
}

export default AllAlumnos;