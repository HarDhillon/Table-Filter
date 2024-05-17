import React, { useState } from 'react';
import { useFiltersDispatch } from '../lib/filters-context';
import ChildCheckbox from './child-checkbox';

export default function Checkbox({ label, tableColumn, childrenLabels }) {
    const [isTicked, setIsTicked] = useState(false);
    const [childTicks, setChildTicks] = useState(
        childrenLabels ? childrenLabels.reduce((acc, childLabel) => {
            acc[childLabel] = false
            return acc;
        }, {}) : {}
    )

    const dispatch = useFiltersDispatch()

    const handleChange = () => {
        const newIsTicked = !isTicked
        setIsTicked(newIsTicked)
        dispatch({
            type: newIsTicked ? 'add-box' : 'remove-box',
            payload: {
                [tableColumn]: label
            }
        })

        // Update all child checkboxes state
        if (childrenLabels) {
            const updatedChildTicks = {}
            childrenLabels.forEach(childLabel => {
                updatedChildTicks[childLabel] = newIsTicked;
                dispatch({
                    type: newIsTicked ? 'add-box' : 'remove-box',
                    payload: {
                        [tableColumn]: childLabel
                    }
                })
            })
            setChildTicks(updatedChildTicks)
        }
    }

    const handleChildChange = (childLabel) => {
        const newChildTickedState = !childTicks[childLabel]
        setChildTicks(prevState => ({
            ...prevState,
            [childLabel]: newChildTickedState
        }))
        dispatch({
            type: newChildTickedState ? 'add-box' : 'remove-box',
            payload: {
                [tableColumn]: childLabel
            }
        })
    }

    let renderedChildBoxes = null;
    if (childrenLabels) {
        renderedChildBoxes = childrenLabels.map((childLabel) => (
            <ChildCheckbox
                key={childLabel}
                label={childLabel}
                isTicked={childTicks[childLabel]}
                onChange={() => handleChildChange(childLabel)}
            />
        ))
    }

    return (
        <div className='p-1'>
            <label>
                <input
                    className='mr-2'
                    onChange={handleChange}
                    checked={isTicked}
                    type='checkbox'
                />
                {label}
            </label>
            {renderedChildBoxes}
        </div>
    )
}
