"use client"

import * as React from "react"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils/index"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SimpleFileUploadProps {
  onFileChange?: (file: File | null) => void
  accept?: string
  className?: string
  disabled?: boolean
  placeholder?: string
}

const SimpleFileUpload = React.forwardRef<HTMLInputElement, SimpleFileUploadProps>(
  ({
    onFileChange,
    accept,
    className,
    disabled = false,
    placeholder = "Choose file...",
  }, ref) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null
      setSelectedFile(file)
      onFileChange?.(file)
    }

    const handleButtonClick = () => {
      if (!disabled) {
        fileInputRef.current?.click()
      }
    }

    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <Input
          type="text"
          readOnly
          value={selectedFile?.name || ""}
          placeholder={placeholder}
          className="flex-1"
          disabled={disabled}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleButtonClick}
          disabled={disabled}
        >
          <Upload className="h-4 w-4 mr-2" />
          Browse
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
      </div>
    )
  }
)

SimpleFileUpload.displayName = "SimpleFileUpload"

export { SimpleFileUpload }
