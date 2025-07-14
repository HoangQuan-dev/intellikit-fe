import { DashboardLayout } from "@/components/dashboard-layout"
import { TextSummarizer } from "@/components/text-summarizer"

export default function TextSummarizerPage() {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Text Summarizer</h1>
          <p className="text-muted-foreground">Summarize PDFs and web content with AI</p>
        </div>
        <TextSummarizer />
      </div>
    </DashboardLayout>
  )
}
