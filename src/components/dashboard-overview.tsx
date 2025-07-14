import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  ImageIcon, 
  FileText, 
  Code, 
  Mic, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Users, 
  Star,
  Clock,
  Shield,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

const tools = [
  {
    title: "AI Chatbot",
    description: "Have intelligent conversations with our advanced AI assistant. Get help, ask questions, or just chat!",
    icon: Bot,
    href: "/chat",
    gradient: "from-green-400 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10",
    features: ["GPT-4 Powered", "Natural Conversations", "24/7 Available"],
    popular: true
  },
  {
    title: "Image Generation",
    description: "Transform your ideas into stunning visuals. Create artwork, designs, and illustrations with just words.",
    icon: ImageIcon,
    href: "/image-generation",
    gradient: "from-purple-400 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10",
    features: ["AI-Powered Art", "High Resolution", "Multiple Styles"]
  },
  {
    title: "Text Summarizer",
    description: "Quickly understand long documents, articles, and PDFs. Save time with intelligent summaries.",
    icon: FileText,
    href: "/text-summarizer",
    gradient: "from-orange-400 to-red-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/10 dark:to-red-950/10",
    features: ["PDF Support", "Web Content", "Key Points"]
  },
  {
    title: "Code Explainer",
    description: "Understand complex code instantly. Get detailed explanations and learn programming concepts.",
    icon: Code,
    href: "/code-explainer",
    gradient: "from-red-400 to-rose-600",
    bgGradient: "from-red-50 to-rose-50 dark:from-red-950/10 dark:to-rose-950/10",
    features: ["Multi-Language", "Detailed Analysis", "Learning Focus"]
  },
  {
    title: "Speech to Text",
    description: "Convert spoken words into accurate text. Perfect for transcription, note-taking, and accessibility.",
    icon: Mic,
    href: "/speech-to-text",
    gradient: "from-teal-400 to-blue-600",
    bgGradient: "from-teal-50 to-blue-50 dark:from-teal-950/10 dark:to-blue-950/10",
    features: ["Real-time", "High Accuracy", "Multiple Languages"]
  }
]

const stats = [
  { icon: Users, value: "10K+", label: "Users" },
  { icon: Zap, value: "50M+", label: "Requests" },
  { icon: Clock, value: "99.9%", label: "Uptime" },
  { icon: Shield, value: "Enterprise", label: "Security" }
]

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse blur-xl" />
            <Sparkles className="h-16 w-16 text-primary relative z-10" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Welcome to IntelliKit
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your personal AI assistant suite. 
            Boost productivity and creativity with powerful, easy-to-use tools.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-colors">
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Explore AI Tools</h2>
          <p className="text-muted-foreground">Choose a tool to get started with your AI-powered journey</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card 
              key={tool.title} 
              className={`group relative overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl 
                transition-all duration-500 hover:scale-105 bg-gradient-to-br ${tool.bgGradient} hover:border-border`}
            >
              {tool.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full border border-border/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link href={tool.href}>
                  <Button className="w-full group/btn bg-card hover:bg-accent border border-border/30 text-foreground hover:text-accent-foreground">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 text-center space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose IntelliKit?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI with our comprehensive 
            suite of tools designed for productivity and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 rounded-lg bg-card/50 border border-border/50">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Get instant results with our 
              optimized AI models and infrastructure
            </p>
          </div>
          
          <div className="space-y-4 p-6 rounded-lg bg-card/50 border border-border/50">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Shield className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your data is protected with enterprise-grade security and privacy
            </p>
          </div>
          
          <div className="space-y-4 p-6 rounded-lg bg-card/50 border border-border/50">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Lightbulb className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Easy to Use</h3>
            <p className="text-muted-foreground">
              Intuitive interface designed for users of all technical levels
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
