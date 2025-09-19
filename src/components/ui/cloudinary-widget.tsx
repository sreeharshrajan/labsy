"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/index"

interface CloudinaryWidgetProps {
  onUpload?: (result: any) => void
  className?: string
  children?: React.ReactNode
  cloudName?: string
  uploadPreset?: string
  multiple?: boolean
  maxFiles?: number
  resourceType?: "image" | "video" | "raw" | "auto"
  folder?: string
}

const CloudinaryWidget = React.forwardRef<
  HTMLButtonElement,
  CloudinaryWidgetProps
>(({
  onUpload,
  className,
  children,
  cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  multiple = false,
  maxFiles = 1,
  resourceType = "auto",
  folder,
  ...props
}, ref) => {
  const handleUpload = React.useCallback(() => {
    if (typeof window !== "undefined" && window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName,
          uploadPreset,
          multiple,
          maxFiles,
          resourceType,
          folder,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            onUpload?.(result.info)
          }
        }
      )
      widget.open()
    } else {
      console.error("Cloudinary widget not loaded")
    }
  }, [cloudName, uploadPreset, multiple, maxFiles, resourceType, folder, onUpload])

  return (
    <Button
      ref={ref}
      type="button"
      onClick={handleUpload}
      className={cn(className)}
      {...props}
    >
      {children || "Upload Image"}
    </Button>
  )
})

CloudinaryWidget.displayName = "CloudinaryWidget"

export { CloudinaryWidget }

// Type declaration for window.cloudinary
declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        options: any,
        callback: (error: any, result: any) => void
      ) => {
        open: () => void
        close: () => void
      }
    }
  }
}
