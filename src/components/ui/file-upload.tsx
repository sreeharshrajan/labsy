"use client"

import * as React from "react"
import { Upload, X, File } from "lucide-react"
import { cn } from "@/lib/utils/index"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
  onFileChange?: (files: File[]) => void
  multiple?: boolean
  accept?: string
  maxSize?: number // in MB
  maxFiles?: number
  className?: string
  disabled?: boolean
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  ({
    onFileChange,
    multiple = false,
    accept,
    maxSize = 10,
    maxFiles = 1,
    className,
    disabled = false,
  }, ref) => {
    const [files, setFiles] = React.useState<File[]>([])
    const [isDragOver, setIsDragOver] = React.useState(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleFileSelect = (selectedFiles: File[]) => {
      const validFiles = selectedFiles.filter(file => {
        if (maxSize && file.size > maxSize * 1024 * 1024) {
          console.warn(`File ${file.name} is too large. Max size: ${maxSize}MB`)
          return false
        }
        return true
      })

      const newFiles = multiple
        ? [...files, ...validFiles].slice(0, maxFiles)
        : validFiles.slice(0, 1)

      setFiles(newFiles)
      onFileChange?.(newFiles)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || [])
      handleFileSelect(selectedFiles)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)

      if (disabled) return

      const droppedFiles = Array.from(e.dataTransfer.files)
      handleFileSelect(droppedFiles)
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) {
        setIsDragOver(true)
      }
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
    }

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index)
      setFiles(newFiles)
      onFileChange?.(newFiles)
    }

    const openFileDialog = () => {
      if (!disabled) {
        fileInputRef.current?.click()
      }
    }

    return (
      <div ref={ref} className={cn("space-y-4", className)}>
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            isDragOver && !disabled
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-muted-foreground/50",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={openFileDialog}
        >
          <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-2">
            {multiple
              ? `Drop files here or click to select (max ${maxFiles})`
              : "Drop file here or click to select"
            }
          </p>
          <p className="text-xs text-muted-foreground">
            {accept && `Accepted: ${accept}`}
            {maxSize && ` • Max size: ${maxSize}MB`}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={handleInputChange}
            className="hidden"
            disabled={disabled}
          />
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Selected Files:</h4>
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-2 bg-muted rounded-md"
              >
                <div className="flex items-center space-x-2">
                  <File className="h-4 w-4" />
                  <span className="text-sm truncate">{file.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  disabled={disabled}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)

FileUpload.displayName = "FileUpload"

export { FileUpload }
