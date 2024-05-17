import React from 'react';

const ChildCheckbox = ({ label, isTicked, onChange }) => {
    return (
        <div className='p-1 ml-5'>
            <label className='text-sm'>
                <input
                    className='mr-2'
                    type='checkbox'
                    checked={isTicked}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
};

export default ChildCheckbox
