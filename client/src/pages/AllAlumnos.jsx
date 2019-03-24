import React, { Component } from 'react';
import API from "../utils/API"
import Table from 'react-bootstrap/Table'
import EditModal from "../components/editModal"

class AllAlumnos extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.loadItems();
        console.log(this.state)
    }

    loadItems = () => {
        API.getCSV()
            .then(res => {
                console.table(res)
                var fieldsData = res.data[2].data
                this.setState({
                    items: fieldsData

                })
                console.log(this.state)
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };

    onEditClick = id => {
        console.log(id)
        // this.props.history.push(`/${id}`);
    }



    render() {
        var myObject = this.state.items
        console.log(this.state)
        return (
            <container fluid>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {

                                Object.keys(myObject).map(function (key) {
                                    myObject[key] *= 2;
                                    // console.log(myObject);


                                })

                            }
                            <th>this.state.items</th>
                            <th>Edad</th>
                            <th>Direccion</th>
                            <th>Curp</th>
                            <th>Enfermedad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            this.state.items.map(item => {
                                const id = item._id;
                                return (
                                    <tr key={id}>
                                        <td>{item.price}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <EditModal id={id} />
                                        </td>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </Table>;

            </container>
        );
    }
}

export default AllAlumnos;