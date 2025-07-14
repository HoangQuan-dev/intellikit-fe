"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Download } from "lucide-react"
import Image from "next/image"

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<{
    imageUrl: string
    description: string
  } | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    try {
      const response = await fetch("/api/image-generation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      if (response.ok) {
        const result = await response.json()
        setGeneratedImage(result)
      }
    } catch (error) {
      console.error("Error generating image:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Generate Image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
          />
          <Button type="submit" variant={"ghost"} onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="w-full">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Image"
            )}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Image</CardTitle>
        </CardHeader>
        <CardContent>
          {generatedImage ? (
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={generatedImage.imageUrl || "/placeholder.svg"}
                  alt={generatedImage.description}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">{generatedImage.description}</p>
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Download Image
              </Button>
            </div>
          ) : (
            <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Generated image will appear here</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
