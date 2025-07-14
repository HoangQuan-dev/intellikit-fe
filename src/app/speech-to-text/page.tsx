import { DashboardLayout } from "@/components/dashboard-layout"
import { SpeechToText } from "@/components/speech-to-text"

export default function SpeechToTextPage() {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Speech to Text</h1>
          <p className="text-muted-foreground">Convert audio to text using AI transcription</p>
        </div>
        <SpeechToText />
      </div>
    </DashboardLayout>
  )
}
