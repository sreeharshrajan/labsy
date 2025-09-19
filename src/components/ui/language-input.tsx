"use client"

import * as React from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils/index"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const languages = [
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "es", label: "Spanish", flag: "🇪🇸" },
  { value: "fr", label: "French", flag: "🇫🇷" },
  { value: "de", label: "German", flag: "🇩🇪" },
  { value: "it", label: "Italian", flag: "🇮🇹" },
  { value: "pt", label: "Portuguese", flag: "🇵🇹" },
  { value: "ru", label: "Russian", flag: "🇷🇺" },
  { value: "ja", label: "Japanese", flag: "🇯🇵" },
  { value: "ko", label: "Korean", flag: "🇰🇷" },
  { value: "zh", label: "Chinese", flag: "🇨🇳" },
  { value: "ar", label: "Arabic", flag: "🇸🇦" },
  { value: "hi", label: "Hindi", flag: "🇮🇳" },
]

interface LanguageInputProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  customLanguages?: Array<{ value: string; label: string; flag?: string }>
}

const LanguageInput = React.forwardRef<HTMLButtonElement, LanguageInputProps>(
  ({
    value,
    onValueChange,
    placeholder = "Select language...",
    className,
    disabled = false,
    customLanguages,
  }, ref) => {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(value || "")

    const languageOptions = customLanguages || languages

    React.useEffect(() => {
      setSelectedValue(value || "")
    }, [value])

    const handleSelect = (currentValue: string) => {
      const newValue = currentValue === selectedValue ? "" : currentValue
      setSelectedValue(newValue)
      onValueChange?.(newValue)
      setOpen(false)
    }

    const selectedLanguage = languageOptions.find(
      (language) => language.value === selectedValue
    )

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between", className)}
            disabled={disabled}
          >
            <div className="flex items-center">
              {selectedLanguage ? (
                <>
                  {selectedLanguage.flag && (
                    <span className="mr-2">{selectedLanguage.flag}</span>
                  )}
                  <Globe className="mr-2 h-4 w-4" />
                  {selectedLanguage.label}
                </>
              ) : (
                <>
                  <Globe className="mr-2 h-4 w-4" />
                  {placeholder}
                </>
              )}
            </div>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search language..." />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languageOptions.map((language) => (
                  <CommandItem
                    key={language.value}
                    value={language.value}
                    onSelect={handleSelect}
                  >
                    <div className="flex items-center">
                      {language.flag && (
                        <span className="mr-2">{language.flag}</span>
                      )}
                      <Globe className="mr-2 h-4 w-4" />
                      {language.label}
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedValue === language.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

LanguageInput.displayName = "LanguageInput"

export { LanguageInput, languages }
