import React, {Component} from 'react';

class PhoneForm extends Component{
    // constructor(props) {
    //     super(props);
        
    // }

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            /* Computed property names 문법을 사용하여 key값 설정 */
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
    }

    render = () => {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
                <div>{this.state.name} {this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;