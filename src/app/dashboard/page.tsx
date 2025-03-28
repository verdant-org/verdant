"use client"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export default function Page() {
  const { toast } = useToast()

  return (
    // To Be Determined, Not final design

    // <div className="[--header-height:calc(theme(spacing.14))]">
    //   <SidebarProvider className="flex flex-col">
    //     <SiteHeader />
    //     <div className="flex flex-1">
    //       <AppSidebar />
    //       <SidebarInset>
    //         <div className="flex flex-1 flex-col gap-4 p-4">
    //           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
    //             <div className="aspect-video rounded-xl bg-muted/50" />
    //             <div className="aspect-video rounded-xl bg-muted/50" />
    //             <div className="aspect-video rounded-xl bg-muted/50" />
    //           </div>
    //           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    //         </div>
    //       </SidebarInset>
    //     </div>
    //   </SidebarProvider>
    // </div>
    <div className="flex min-h-screen w-full">
      <div className="text-9xl flex justify-center items-center grow-1 w-full">Dashboard</div>
    </div>
  )
}
