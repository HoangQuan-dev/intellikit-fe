import { DashboardLayout } from "@/components/dashboard-layout"
import { CodeExplainer } from "@/components/code-explainer"

export default function CodeExplainerPage() {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Code Explainer</h1>
          <p className="text-muted-foreground">Get detailed explanations of your code</p>
        </div>
        <CodeExplainer />
      </div>
    </DashboardLayout>
  )
}
