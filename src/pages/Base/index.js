import React, { Fragment, useState, useMemo } from 'react'
import { seatStyle } from './style.js'
import { classStyle, colStyle, containerStyle, rowStyle } from './style'

const mapData = mapSeatsData => mapSeatsData.reduce((res, {type, rows, price}) => {
  rows.map(({key, seats}) => {
    seats.map(seat => {
      res[seat.key] = {...seat, type, rowKey: key, price}
    })
  })
  return res
}, {})
const defaultLayout = [{
  'type': 'club',
  'price': 236,
  'rows': [{
    'key': 'A',
    'seats': [{'id': 1, 'key': 'A1', 'booked': true}, {'id': 2, 'key': 'A2', 'booked': true}, {
      'id': 3,
      'key': 'A3',
      'booked': true
    }, {'id': 4, 'key': 'A4', 'booked': true}, {'id': 5, 'key': 'A5', 'booked': true}, {
      'id': 6,
      'key': 'A6',
      'booked': true
    }, {'id': 7, 'key': 'A7', 'booked': true}, {'id': 8, 'key': 'A8', 'booked': true}, {
      'id': 9,
      'key': 'A9',
      'booked': true
    }, {'id': 10, 'key': 'A10', 'booked': true}, {'id': 11, 'key': 'A11', 'booked': true}, {
      'id': 12,
      'key': 'A12',
      'booked': true
    }, {'id': 13, 'key': 'A13', 'booked': true}, {'id': 14, 'key': 'A14', 'booked': true}, {
      'id': 15,
      'key': 'A15',
      'booked': true
    }]
  }, {
    'key': 'B',
    'seats': [{'id': 3, 'key': 'B3', 'booked': true}, {'id': 4, 'key': 'B4', 'booked': true}, {
      'id': 5,
      'key': 'B5',
      'booked': true
    }, {'id': 6, 'key': 'B6', 'booked': true}, {'id': 7, 'key': 'B7', 'booked': true}, {
      'id': 8,
      'key': 'B8',
      'booked': true
    }, {'id': 9, 'key': 'B9', 'booked': true}, {'id': 10, 'key': 'B10', 'booked': true}, {
      'id': 11,
      'key': 'B11',
      'booked': true
    }, {'id': 12, 'key': 'B12', 'booked': true}, {'id': 13, 'key': 'B13', 'booked': true}, {
      'id': 14,
      'key': 'B14',
      'booked': true
    }, {'id': 15, 'key': 'B15', 'booked': true}]
  }]
}, {
  'type': 'executive',
  'price': 230,
  'rows': [{
    'key': 'C',
    'seats': [{'id': 7, 'key': 'C7', 'booked': true}, {'id': 8, 'key': 'C8', 'booked': true}, {
      'id': 9,
      'key': 'C9',
      'booked': true
    }, {'id': 10, 'key': 'C10', 'booked': true}, {'id': 11, 'key': 'C11', 'booked': true}, {
      'id': 12,
      'key': 'C12',
      'booked': true
    }, {'id': 13, 'key': 'C13', 'booked': true}, {'id': 14, 'key': 'C14', 'booked': true}, {
      'id': 15,
      'key': 'C15',
      'booked': true
    }]
  }, {
    'key': 'D',
    'seats': [{'id': 7, 'key': 'D7', 'booked': true}, {'id': 8, 'key': 'D8', 'booked': true}, {
      'id': 9,
      'key': 'D9',
      'booked': true
    }, {'id': 10, 'key': 'D10', 'booked': true}, {'id': 11, 'key': 'D11', 'booked': true}, {
      'id': 12,
      'key': 'D12',
      'booked': true
    }, {'id': 13, 'key': 'D13', 'booked': true}, {'id': 14, 'key': 'D14', 'booked': true}, {
      'id': 15,
      'key': 'D15',
      'booked': true
    }]
  }, {
    'key': 'E',
    'seats': [{'id': 7, 'key': 'E7', 'booked': true}, {'id': 8, 'key': 'E8', 'booked': true}, {
      'id': 9,
      'key': 'E9',
      'booked': true
    }, {'id': 10, 'key': 'E10', 'booked': true}, {'id': 11, 'key': 'E11', 'booked': true}, {
      'id': 12,
      'key': 'E12',
      'booked': true
    }, {'id': 13, 'key': 'E13', 'booked': true}, {'id': 14, 'key': 'E14', 'booked': true}, {
      'id': 15,
      'key': 'E15',
      'booked': true
    }]
  }, {
    'key': 'F',
    'seats': [{'id': 7, 'key': 'F7', 'booked': true}, {'id': 8, 'key': 'F8', 'booked': true}, {
      'id': 9,
      'key': 'F9',
      'booked': true
    }, {'id': 10, 'key': 'F10', 'booked': true}, {'id': 11, 'key': 'F11', 'booked': true}, {
      'id': 12,
      'key': 'F12',
      'booked': true
    }, {'id': 13, 'key': 'F13', 'booked': true}, {'id': 14, 'key': 'F14', 'booked': true}, {
      'id': 15,
      'key': 'F15',
      'booked': true
    }]
  }, {
    'key': 'G',
    'seats': [{'id': 3, 'key': 'G3', 'booked': true}, {'id': 4, 'key': 'G4', 'booked': true}, {
      'id': 5,
      'key': 'G5',
      'booked': true
    }, {'id': 6, 'key': 'G6', 'booked': true}, {'id': 7, 'key': 'G7', 'booked': true}, {
      'id': 8,
      'key': 'G8',
      'booked': true
    }, {'id': 9, 'key': 'G9', 'booked': true}, {'id': 10, 'key': 'G10', 'booked': true}, {
      'id': 11,
      'key': 'G11',
      'booked': true
    }, {'id': 12, 'key': 'G12', 'booked': true}, {'id': 13, 'key': 'G13', 'booked': true}, {
      'id': 14,
      'key': 'G14',
      'booked': true
    }, {'id': 15, 'key': 'G15', 'booked': true}]
  }, {
    'key': 'H',
    'seats': [{'id': 3, 'key': 'H3', 'booked': false}, {'id': 4, 'key': 'H4', 'booked': true}, {
      'id': 5,
      'key': 'H5',
      'booked': true
    }, {'id': 6, 'key': 'H6', 'booked': true}, {'id': 7, 'key': 'H7', 'booked': true}, {
      'id': 8,
      'key': 'H8',
      'booked': true
    }, {'id': 9, 'key': 'H9', 'booked': true}, {'id': 10, 'key': 'H10', 'booked': true}, {
      'id': 11,
      'key': 'H11',
      'booked': true
    }, {'id': 12, 'key': 'H12', 'booked': true}, {'id': 13, 'key': 'H13', 'booked': true}, {
      'id': 14,
      'key': 'H14',
      'booked': true
    }, {'id': 15, 'key': 'H15', 'booked': true}]
  }, {
    'key': 'I',
    'seats': [{'id': 3, 'key': 'I3', 'booked': true}, {'id': 4, 'key': 'I4', 'booked': true}, {
      'id': 5,
      'key': 'I5',
      'booked': true
    }, {'id': 6, 'key': 'I6', 'booked': true}, {'id': 7, 'key': 'I7', 'booked': false}, {
      'id': 8,
      'key': 'I8',
      'booked': false
    }, {'id': 9, 'key': 'I9', 'booked': true}, {'id': 10, 'key': 'I10', 'booked': true}, {
      'id': 11,
      'key': 'I11',
      'booked': false
    }, {'id': 12, 'key': 'I12', 'booked': false}, {'id': 13, 'key': 'I13', 'booked': false}, {
      'id': 14,
      'key': 'I14',
      'booked': true
    }, {'id': 15, 'key': 'I15', 'booked': true}]
  }, {
    'key': 'J',
    'seats': [{'id': 3, 'key': 'J3', 'booked': true}, {'id': 4, 'key': 'J4', 'booked': true}, {
      'id': 5,
      'key': 'J5',
      'booked': false
    }, {'id': 6, 'key': 'J6', 'booked': false}, {'id': 7, 'key': 'J7', 'booked': false}, {
      'id': 8,
      'key': 'J8',
      'booked': false
    }, {'id': 9, 'key': 'J9', 'booked': false}, {'id': 10, 'key': 'J10', 'booked': false}, {
      'id': 11,
      'key': 'J11',
      'booked': false
    }, {'id': 12, 'key': 'J12', 'booked': false}, {'id': 13, 'key': 'J13', 'booked': false}, {
      'id': 14,
      'key': 'J14',
      'booked': false
    }, {'id': 15, 'key': 'J15', 'booked': false}]
  }]
}]

function Hall ({numSeatsRequired = 5, layout = defaultLayout, gridSize: [rows, columns] = [10, 15]}) {
  const [selectedSeats, setSelected] = useState([])
  const seatsData = useMemo(() => mapData(layout))
  const tempArray = [...new Array(columns)]
  const findSeatsToRight = (seat, numRequired) => {
    const {rowKey, id} = seat
    let seats = []
    for (let i =  id + 1; i <= columns; i++) {
      const key = `${rowKey}${i}`
      const {booked} = seatsData[key] || {booked: true}
      if (booked === true || seats.length === numRequired) {
        break
      }
      seats.push(key)
    }
    return seats
  }
  const onChange = (key) => {
    // check if previous category !== this category => deselect all previous, make new selection

    // case when already selectedSeats.length === numSeatsRequired && this seat is not selected i.e. selectedSeats.indexOf(key) < 0
    // find max adjacent seats and select them (x), remove x seats from earlier selection

    const newSeat = seatsData[key]
    const firstSeat = seatsData[selectedSeats[0] || ''] || {}
    const numSeatsRequiredOnRight = numSeatsRequired - 1

    const seatsToRight = findSeatsToRight(newSeat, numSeatsRequiredOnRight)

    let seatsToKeep = numSeatsRequiredOnRight - seatsToRight.length
    console.log(numSeatsRequiredOnRight, seatsToRight.length)

    if (firstSeat.type !== newSeat.type) {
      seatsToKeep = 0
    }
    let seatsToRemove = selectedSeats.length - seatsToKeep >= 0 ? 0 : selectedSeats.length - seatsToKeep
    const oldSeatsToKeep = selectedSeats.filter((key, index) => index >= seatsToRemove)
    const newSeats = [newSeat.key, ...seatsToRight]
    console.log(seatsToRight, key, newSeats, oldSeatsToKeep, numSeatsRequiredOnRight, seatsToRemove)
    setSelected([...oldSeatsToKeep, ...newSeats])
  }
  return (
    <div css={containerStyle(columns)}>
      {layout.map(({type, price, rows}) => {
        return (
          <Fragment key={type}>
            <div css={classStyle}>{type} - Rs. {price}</div>
            {rows.map(({key}) => {
              return (
                <div css={rowStyle(key)} key={key}>
                  {tempArray.map((x, index) => {
                    const colKey = index + 1
                    const seatKey = `${key}${colKey}`
                    let content = ''
                    const data = seatsData[seatKey]
                    if (data) {
                      content = (
                        <div css={seatStyle(selectedSeats.indexOf(seatKey) >= 0, data.booked)}
                             onClick={() => !data.booked && onChange(seatKey)}>{colKey}</div>
                      )
                    }
                    return <div css={colStyle} key={index}>{content}</div>
                  })}
                </div>
              )
            })}
          </Fragment>
        )
      })}
    </div>
  )
}

export default Hall
