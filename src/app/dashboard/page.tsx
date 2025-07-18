import MainLayout from '@/components/layout/MainLayout'
import { Card, CardContent } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <MainLayout pageTitle="Dashboard">
      <div className="p-10">
        <Card className="min-h-[400px] flex">
          <CardContent className="p-6 flex-1 flex items-center justify-center">
            <h2 className="text-2xl font-normal text-center text-muted-foreground/50">Coming Soon</h2>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}