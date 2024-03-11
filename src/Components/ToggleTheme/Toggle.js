import React, { useState } from 'react'

function Toggle({toggleTheme, isLightTheme}) {
    const[isToggled, setIsToggled] = useState(isLightTheme)

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme()
    }

    return (
        <label className='toggle-switch'>
            <button type='checkbox' checked={isToggled} onChange={onToggle}>
                <span className='toggle' />
                theme
            </button>
        </label>
    )
}

export default Toggle
