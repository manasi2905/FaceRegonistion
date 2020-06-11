import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3'>
                This Alien detects faces in your pictures. Give it a try.
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 starryNight center size'>
                    <input className='fa4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button 
                        className='w-30 br2 grow link f4 ph4 pv2 mh2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
            
        </div>
    );
}

export default ImageLinkForm;