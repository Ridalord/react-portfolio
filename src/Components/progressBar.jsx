import React from 'react';

const Skill = (props) => {

    return (
        <>
            <div className='progress'>
                <span className="skill">{props.name} <i className="val">{props.width}%</i></span>
                <div className='progress-bar-wrap'>
                    <div className='progress-bar' style={{ width: props.width + '%' }}></div>
                </div>
            </div>
        </>
    );
}

export default Skill;