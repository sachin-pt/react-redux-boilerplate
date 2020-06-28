import { dropDownStyle, checkboxWrap } from 'components/Checkbox/style.js'
import DropDown from 'components/DropDown'
import { useState, useMemo } from 'react'
const fruits = [
    {key: 'ba', label:'Banana'},
    {key: 'or', label:'Orange'},
    {key: 'ma', label:'Mango'},
    {key: 'ap', label:'Apple'},
    {key: 'ki', label:'Kiwi'},
    {key: 'mu', label:'Muskmelon'},
    {key: 'wa', label:'Watermelon'},
    {key: 'pe', label:'Peach'},
    {key: 'gr', label:'Grapes'},
    {key: 'bl', label:'Blueberries'},
    {key: 'ga', label:'Gauva'},
    {key: 'pi', label:'Pineapple'}
]

function Checkbox () { 
    const [selectedValues, setSelectedValues] = useState([])
    const onChange = (value) => {
        setSelectedValues(value)
    }

    const selectedLabels = useMemo(()=> fruits.reduce((acc, {key, label})=> {
        if ((selectedValues).includes(key)) {
            acc.push(label)
        }
        return acc
    }, []).join(', '), [selectedValues])

    return (
    <div css={checkboxWrap}>
        <DropDown 
          style={dropDownStyle}
          title={selectedLabels || 'Choose Your Favourite Fruit' }
          options={fruits}
          selectedValues={selectedValues}
          onChange={onChange}
          type='checkbox'
        />
    </div>
    )
}

export default Checkbox