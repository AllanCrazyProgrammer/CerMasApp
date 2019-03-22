import React from 'react';
import AllAlumnos from '../pages/AllAlumnos'
import Button from 'react-bootstrap/Button';

class ButtonCheckbox extends React.Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({ showing: !showing })}>Get all</Button>
                {showing
                    ? <AllAlumnos />
                    : null
                }
            </div>
        )
    }
}
export default ButtonCheckbox;