import React, { Component } from 'react';
import Button from './Shared/Button';

class Composer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    onkeyup = evt => {
        this.setState({
            text: evt.target.value
        });
    };

    render() {
        const { onSubmit } = this.props;

        return (
            <div className="composer">
                <div>
                    <textarea onKeyUp={this.onKeyUp} />
                </div>
                <Button type="submit" onClick={() => onSubmit(evt.target)} text="POST" />
            </div>
        );
    }
}

export default Composer;