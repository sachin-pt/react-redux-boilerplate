

import { useState, useCallback } from 'react';
import { defaultInpStyle, dropDownStyle, filterInpStyle, optionsWrapStyle, optionStyle } from 'components/DropDown/style.js'

export default ({
    title='Choose Option',
    InputComponent = ()=> title,
    type='radio',
    style,
    options = [],
    selectedValues,
    onChange,
    inputPlaceholder='Search Options...'
}) => {
    const [inlineOptions, setInlineOptions] = useState(options) 
    const [isOpen, setIsOpen] = useState(false)
    
    selectedValues = !Array.isArray(selectedValues)?[selectedValues]:selectedValues
    
    const handleDropDown = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    const handleOptionClick = useCallback((newKey) => {
        if (type === 'radio') {
            let newValue = newKey
            if (selectedValues.includes(newKey)) {
                newValue = ''
            } 
            onChange(newKey)
            setIsOpen(false)
        } else if (type === 'checkbox'){
            let newValues
            if (selectedValues.includes(newKey)) {
                newValues = selectedValues.filter((key) => newKey !== key)
            } else {
                selectedValues.push(newKey)
                newValues = [...selectedValues]
            }
            onChange(newValues)
        }
    }, [selectedValues, type])

    const handleInputChange = useCallback((event) => {
        const inputText = event.target.value
        const filteredOptions = options.filter(({label})=>label.toLowerCase().includes(inputText.toLowerCase()))
        setInlineOptions(filteredOptions)
    }, [options])
    
    return (
    <div css={dropDownStyle, style}> 
        <div css={defaultInpStyle(isOpen)} onClick={handleDropDown}><InputComponent/></div>
        
        {isOpen && (
        <div css={optionsWrapStyle} className='option-wrapper'>
            <input type='text' css={filterInpStyle} placeholder={inputPlaceholder} onChange={handleInputChange}/>
            
            {inlineOptions.map(({key, label})=>(
            <div key={key} 
                 css={optionStyle(selectedValues.includes(key))}
                 className='option'
                 onClick={() => handleOptionClick(key)}>
                     {label}
            </div>))}
        </div>
        )}
       
    </div>)
}