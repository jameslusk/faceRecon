import React from 'react';
import './Rank.css';

const Rank = () => {
    return (
        <div className="rankContainer">
            <div className='white b f3'>
                {'James, your current rank is:'}
            </div>
            <div className='white b f1'>
                {'#5'}
            </div>
        </div>
    )
}

export default Rank;