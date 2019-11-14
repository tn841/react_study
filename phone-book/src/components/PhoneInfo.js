import React, {Component} from 'react'

class PhoneInfo extends Component{
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id:0
        }
    }


    /*
        - PhoneInfo 컴포넌트에 새로운 상태가 생겼다.
        - 각 PhoneInfo 컴포넌트는 '수정 중' 인지 아닌지 판단하는 상태가 생겼다.
        - 따라서 state를 구현 해준다.
    */
    state = {
        editFlag: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const {editFlag} = this.state;
        this.setState({
            editFlag: !editFlag
        });
    }
    
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    //
    componentDidUpdate(prevProps, prevState) {
        const { info, onEdit } = this.props;
        if(!prevState.editFlag && this.state.editFlag) {
            // 이전에 false이고 현재가 true이면, 즉 수정중 상태이면
            // 부모에게서 받은 props 값들로 현재 state를 바꾼다.
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editFlag && !this.state.editFlag){
            //즉 수정완료 이면
            //현재 state를 부모에게 보낸다. (onEdit)
            const {info, onEdit} = this.props;
            onEdit(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if( !this.state.editFlag 
            && !nextState.editFlag 
            && nextProps.info === this.props.info){
                return false;
            
        }

        return true;
    }

    render() {
        console.log('PhoneInfo render()'+this.props.info.name);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        if(!this.state.editFlag){
            // 수정 중이지 않은 상태
            const {
                name, phone, id
            } = this.props.info;

            return (
                <div style={style}>
                    <div><b>{name}</b></div>
                    <div>{phone}</div>
                    <button onClick={this.handleRemove}>삭제</button>
                    <button onClick={this.handleToggleEdit}>수정</button>
                </div>
            )
        }
        else {
            // 수정 모드
            const {info} = this.props;

            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleInputChange}
                        />
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleInputChange}
                        />
                        <button 
                            onClick={this.handleToggleEdit}
                        >수정완료</button>
                    </div>
                </div>
            )
        }
        
    }
}

export default PhoneInfo;