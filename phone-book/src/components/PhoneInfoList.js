import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component{
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onEdit: () => console.warn('onEdit not defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 최적화
        //다음에 받아올 data가 현재 data와 다른경우 다시 그린다.
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('PhoneInfoList render()');
        const {data, onRemove, onEdit} = this.props;
        const list = data.map((info) => {
            return <PhoneInfo 
            key={info.id} //react가 배열을 랜더링할때 꼭 필요한 값
            info={info} 
            onRemove={onRemove}
            onEdit={onEdit}
            />
        });

        return (
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;