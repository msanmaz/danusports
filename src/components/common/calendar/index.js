import React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { addDays } from 'date-fns';

const pastMonth = new Date(2022, 11, 20);
const Calendar = () => {
    const defaultSelected = {
        from: pastMonth,
        to: addDays(pastMonth, 4)
      };
      const [range, setRange] = React.useState(defaultSelected);

    
  return (
<>
<DayPicker
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      onSelect={setRange}
    />
</>
  )
}

export default Calendar