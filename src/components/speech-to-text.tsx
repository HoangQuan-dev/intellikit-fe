"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Mic, MicOff, Upload, Loader2 } from "lucide-react"

export function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcription, setTranscription] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleStartRecording = () => {
    setIsRecording(true)
    // In a real implementation, you would start recording audio here
    // For demo purposes, we'll simulate recording
    setTimeout(() => {
      setIsRecording(false)
      setTranscription(
        "This is a demo transcription. In a real implementation, " +
          "this would be the actual transcribed text from your audio recording.",
      )
    }, 3000)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsProcessing(true)
      // In a real implementation, you would process the audio file here
      // For demo purposes, we'll simulate processing
      setTimeout(() => {
        setIsProcessing(false)
        setTranscription(
          `Transcription from uploaded file: ${file.name}. This is a demo transcription showing how the uploaded audio would be converted to text.`,
        )
      }, 2000)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Audio Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="text-center">
              <Button
                onClick={
                  isRecording ? handleStopRecording : handleStartRecording
                }
                disabled={isProcessing}
                size="lg"
                className={`w-32 h-32 rounded-full ${isRecording ? "bg-red-500 hover:bg-red-600" : ""}`}
              >
                {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                {isRecording ? "Recording... Click to stop" : "Click to start recording"}
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <div className="text-center">
              <input type="file" accept="audio/*" onChange={handleFileUpload} ref={fileInputRef} className="hidden" />
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={isRecording || isProcessing}
                variant="outline"
                className="w-full"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Audio File
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transcription</CardTitle>
        </CardHeader>
        <CardContent>
          {transcription ? (
            <Textarea
              value={transcription}
              onChange={(e) => setTranscription(e.target.value)}
              rows={8}
              placeholder="Transcribed text will appear here..."
            />
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              {isRecording ? "Recording in progress..." : "Transcribed text will appear here"}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
