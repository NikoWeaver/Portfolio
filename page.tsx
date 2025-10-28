import { CardContent } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// Update the UAV card in the main portfolio page to include a link
;<Card>
  <Link href="/uav-project">
    <CardHeader>
      <CardTitle>UAV Design Project</CardTitle>
      <CardDescription>Aerodynamic UAV Design and Analysis</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gallery1-f93eOiY7MMqX2tEa8wXSSmyR81S5Zi.png"
          alt="UAV Design"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Developed an advanced UAV design focusing on aerodynamic efficiency and performance optimization. The project
        involved comprehensive 3D modeling and analysis.
      </p>
    </CardContent>
  </Link>
</Card>
