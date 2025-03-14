import ToggleTheme from "@/components/ToggleTheme";
import {  Rocket, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const libraries=[
    "Next.js 15",
    "Tailwind CSS v4",
    "next-themes",
    "lucide-react",
    "Zustand",
    "React Hook Form",
    "Axios",
    "Framer Motion",
    "shadcn/ui"
  ]
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-background text-foreground">
      <Card className="w-full max-w-4xl   ">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
            <Rocket className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold tracking-tight">Modern Next.js Starter</CardTitle>
          <CardDescription className="text-lg mt-2">
            A feature-rich template with essential libraries for your next project
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-center gap-2">
            <ToggleTheme />
          </div>
          
    
          
          {/* Libraries Section */}
          <div className="mt-8 ">
            <h2 className="text-xl font-semibold mb-4 flex  items-center gap-2">
              <Package className="h-5 w-5" /> Included Libraries
            </h2>
            <div className="flex flex-wrap gap-2">
              {libraries.map((lib, index) => (
                <span key={index} className="px-3 py-1 text-sm border rounded-full bg-background">
                  {lib}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        
       
      </Card>
    </main>
  );
}