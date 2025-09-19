"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils/index"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DateRangePickerProps {
  date?: DateRange
  onDateChange?: (date: DateRange | undefined) => void
  className?: string
  placeholder?: string
  disabled?: boolean
}

const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  ({
    date,
    onDateChange,
    className,
    placeholder = "Pick a date range",
    disabled = false,
  }, ref) => {
    const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(date)

    React.useEffect(() => {
      setInternalDate(date)
    }, [date])

    const handleDateChange = (newDate: DateRange | undefined) => {
      setInternalDate(newDate)
      onDateChange?.(newDate)
    }

    const formatDateRange = (dateRange: DateRange | undefined) => {
      if (!dateRange) return placeholder

      const { from, to } = dateRange

      if (from) {
        if (to) {
          return `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
        } else {
          return from.toLocaleDateString()
        }
      }

      return placeholder
    }

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !internalDate && "text-muted-foreground",
              className
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange(internalDate)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={internalDate?.from}
            selected={internalDate}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    )
  }
)

DateRangePicker.displayName = "DateRangePicker"

export { DateRangePicker }
