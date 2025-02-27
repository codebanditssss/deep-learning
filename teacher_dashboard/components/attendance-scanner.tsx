"use client"

import { useEffect, useState } from "react"
import { Camera, User, UserCheck } from "lucide-react"

export function AttendanceScanner() {
  const [scanning, setScanning] = useState(true)
  const [progress, setProgress] = useState(0)
  const [scannedFaces, setScannedFaces] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setScanning(false)
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })

      if (scannedFaces < 24 && Math.random() > 0.7) {
        setScannedFaces((prev) => prev + 1)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [scannedFaces])

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md aspect-video bg-black relative rounded-lg overflow-hidden mb-4 border-2 border-primary">
        {scanning ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Camera className="h-12 w-12 mb-2 animate-pulse text-primary" />
            <div className="text-sm">Scanning faces... {scannedFaces} identified</div>
            <div className="w-64 h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-green-900/20">
            <UserCheck className="h-12 w-12 mb-2 text-green-500" />
            <div className="font-medium">Scanning Complete</div>
            <div className="text-sm mt-1">29 students processed</div>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Live Camera Feed
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">29</span>
          <span className="text-xs text-muted-foreground">registered</span>
        </div>
        <div className="h-4 w-px bg-muted-foreground/30" />
        <div className="flex items-center gap-1">
          <UserCheck className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">{scannedFaces}</span>
          <span className="text-xs text-muted-foreground">identified</span>
        </div>
      </div>
    </div>
  )
}

