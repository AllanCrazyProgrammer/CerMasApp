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

    onEditClick = id => {
        console.log(id)
        // this.props.history.push(`/${id}`);
    }

    render() {
        var keys = [];
        var values = [];
        if (this.state.items && this.state.items.length > 0) {
            keys = Object.keys(this.state.items[0]);
            values = this.state.items;
            console.log(values)

        }
        console.log(this.state.items)

        return (
            <container fluid>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {

                                keys.map(function (key) {
                                    return <th key={key}>{key}</th>;
                                })

                            }

                        </tr>
                    </thead>
                    <tbody>
                        {values.map(function (value) {
                            const valueCols = keys.map(function (key) {
                                return <td>{value[key]}</td>
                            });

                            return <tr>{valueCols}</tr>
                        })



                        }
                    </tbody>
                </Table>;

            </container>
        );

    }
}

export default AllAlumnos;