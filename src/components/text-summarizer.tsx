"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, FileText, Link } from "lucide-react"

export function TextSummarizer() {
  const [text, setText] = useState("")
  const [url, setUrl] = useState("")
  const [summary, setSummary] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSummarize = async (type: "text" | "url") => {
    const content = type === "text" ? text : url
    if (!content.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(type === "text" ? { text } : { url }),
      })

      if (response.ok) {
        const result = await response.json()
        setSummary(result.summary)
      }
    } catch (error) {
      console.error("Error summarizing:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Input Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="text">
                <FileText className="mr-2 h-4 w-4" />
                Text
              </TabsTrigger>
              <TabsTrigger value="url">
                <Link className="mr-2 h-4 w-4" />
                URL
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-4">
              <Textarea
                placeholder="Paste your text here to summarize..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={8}
              />
              <Button onClick={() => handleSummarize("text")} disabled={isLoading || !text.trim()} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  "Summarize Text"
                )}
              </Button>
            </TabsContent>

            <TabsContent value="url" className="space-y-4">
              <Input placeholder="Enter URL to summarize..." value={url} onChange={(e) => setUrl(e.target.value)} />
              <Button onClick={() => handleSummarize("url")} disabled={isLoading || !url.trim()} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  "Summarize URL"
                )}
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {summary ? (
            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap">{summary}</p>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">Summary will appear here after processing</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
