import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
        
    render() {
        const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
        const {onPaletteChange, checkedColor} = this.props;
        const color_list = colors.map(
        (color, idx) => {
            return <div 
                className={`color ${(color == checkedColor) ? ' active' : ''} `} 
                style={{background: color}} 
                onClick={(e) => {
                    e.stopPropagation();
                    onPaletteChange(colors[e.target.id]);
                }}
                id={idx}
                key={idx}    
            />
        });
        return (
            <div className='palette'>
                {color_list}
            </div>
        );   
    }
}

export default Palette;