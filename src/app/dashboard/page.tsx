import { Suspense } from 'react'
import DashboardContent from "./content"

export default function Page() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}