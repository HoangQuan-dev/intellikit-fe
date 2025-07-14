import { DashboardLayout } from "@/components/dashboard-layout"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <h1 className="text-lg font-semibold">AI Chatbot</h1>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </DashboardLayout>
  )
}
