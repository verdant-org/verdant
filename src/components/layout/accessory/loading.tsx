import Icons from "@/components/icons";

export default function LoadingScreen() {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
            <Icons.Loader2 size={128} className="animate-spin"/>
            <div className="text-4xl">Loading...</div>
        </div>
    )
}