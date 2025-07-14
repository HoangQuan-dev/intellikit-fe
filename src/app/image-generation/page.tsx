import { DashboardLayout } from "@/components/dashboard-layout"
import { ImageGenerator } from "@/components/image-generator"

export default function ImageGenerationPage() {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Image Generation</h1>
          <p className="text-muted-foreground">Create stunning images with AI-powered generation</p>
        </div>
        <ImageGenerator />
      </div>
    </DashboardLayout>
  )
}
