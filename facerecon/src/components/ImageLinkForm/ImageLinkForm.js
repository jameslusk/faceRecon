import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f2 b'>
                {'This is cutting edge face detection technology.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' placeholder="Enter JPG URL Here" onChange={onInputChange} />
                    <button
                        className='detect w-40 grow f4 b link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>

            </div>
        </div>
    )
}

export default ImageLinkForm;