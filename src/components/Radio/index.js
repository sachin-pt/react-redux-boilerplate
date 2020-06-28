import {  dropDownStyle, checkboxWrap } from 'components/Radio/style.js'
import DropDown from 'components/DropDown'
import { useState, useMemo } from 'react'
const countries = [
    {key: 'in', label:'India'},
    {key: 'sr', label:'Sri Lanka'},
    {key: 'aus', label:'Australia'},
    {key: 'us', label:'USA'},
    {key: 'Fr', label:'France'},
    {key: 'En', label:'England'}
]

function Radio () { 
    const [selectedValues, setSelectedValues] = useState()
    const onChange = (value) => {
        setSelectedValues(value)
    }

    const selectedLabels = useMemo(()=> selectedValues && countries.filter(({key})=> selectedValues.includes(key))[0].label, [selectedValues])
    return (
    <div css={checkboxWrap}>
         <DropDown 
          style={dropDownStyle}
          title={selectedLabels || 'Choose Your Country'} 
          options={countries}
          selectedValues={selectedValues}
          onChange={onChange}
        />
    </div>
    )
}

export default Radio