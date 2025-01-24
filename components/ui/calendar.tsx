import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, DropdownProps } from "react-day-picker"

type CalendarProps = React.ComponentProps<typeof DayPicker>

const Calendar: React.FC<CalendarProps> = ({ className, classNames, showOutsideDays = true, ...props }) => {
  return (
    <DayPicker
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" {...props} />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" {...props} />,
      }}
      className={className}
      classNames={classNames}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}

export default Calendar

