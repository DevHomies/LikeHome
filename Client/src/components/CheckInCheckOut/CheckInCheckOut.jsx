import { useEffect, useRef, useState } from 'react'
import { DateRange} from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './CheckInCheckOut.css'

const CheckInCheckOut = ({parentCallback}) => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }, 
  ])

  // const handleChange = (item) => {
  //   setRange([item.selection]);
  //   parentCallback("checkDates", [item.selection.startDate, item.selection.endDate]);
  // }

  const handleChange = (item) => {
    setRange([item.selection]);
    parentCallback("checkDates", [item.selection.startDate, item.selection.endDate]);
  }

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }

  return (
    <div className="WholeCalendarContainer">
      <div className="SubContainer">
        <div class="check-date">
          <p>Check In</p>
          <p>Check Out</p>
        </div>
          <div className="CalendarWrap">

            <input
              value={`${format(range[0].startDate, "MM/dd/yyyy")}   |   ${format(range[0].endDate, "MM/dd/yyyy")}`}
              readOnly
              className="inputBox"
              onClick={() => setOpen(open => !open)} />

            <div ref={refOne}>
              {open &&
                  <DateRange 
                      onChange={item => handleChange(item)}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction="horizontal"
                      className="calendarElement" 
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 350)}
                      />
                    }
            </div>  
          </div>

      </div>

    </div>
  )
}

export default CheckInCheckOut