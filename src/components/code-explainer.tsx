"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"

const languages = ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "PHP", "Ruby"]

export function CodeExplainer() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleExplain = async () => {
    if (!code.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/explain-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      })

      if (response.ok) {
        const result = await response.json()
        setExplanation(result.explanation)
      }
    } catch (error) {
      console.error("Error explaining code:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Code Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select programming language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={12}
            className="font-mono text-sm"
          />

          <Button onClick={handleExplain} disabled={isLoading || !code.trim()} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Explaining...
              </>
            ) : (
              "Explain Code"
            )}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          {explanation ? (
            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap">{explanation}</p>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">Code explanation will appear here</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
