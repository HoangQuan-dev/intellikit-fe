import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, ImageIcon, FileText, Code, Mic, ArrowRight } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    title: "AI Chatbot",
    description: "Chat with an intelligent AI assistant powered by GPT-4",
    icon: Bot,
    href: "/chat",
    color: "text-blue-500",
  },
  {
    title: "Image Generation",
    description: "Create stunning images from text descriptions",
    icon: ImageIcon,
    href: "/image-generation",
    color: "text-purple-500",
  },
  {
    title: "Text Summarizer",
    description: "Summarize PDFs and web content quickly",
    icon: FileText,
    href: "/text-summarizer",
    color: "text-green-500",
  },
  {
    title: "Code Explainer",
    description: "Get detailed explanations of your code",
    icon: Code,
    href: "/code-explainer",
    color: "text-orange-500",
  },
  {
    title: "Speech to Text",
    description: "Convert audio recordings to text",
    icon: Mic,
    href: "/speech-to-text",
    color: "text-red-500",
  },
]

export function DashboardOverview() {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AI Tools Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive suite of AI-powered utilities
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <tool.icon className={`h-8 w-8 ${tool.color}`} />
                <div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </div>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={tool.href} className="flex items-center gap-2 bg-gray-800 text-white">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>For Developers</CardTitle>
            <CardDescription>
              Streamline your development workflow with AI-powered code
              explanation and documentation tools.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Content Creators</CardTitle>
            <CardDescription>
              Generate images, summarize content, and transcribe audio to
              boost your creative productivity.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
