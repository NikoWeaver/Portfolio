import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Blog</h1>

      {/* New UAV Summer Update Blog Post */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>UAV summer update | heartbreak</CardTitle>
              <CardDescription>Not unexpected...</CardDescription>
            </div>
            <span className="text-sm text-muted-foreground">August 2025</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
            <Image
              src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/IMG_1819%202.JPG"
              alt="UAV Summer Update"
              fill
              className="object-contain bg-background"
            />
          </div>
          <p className="text-muted-foreground mb-4">
            I Finally flew my UAV!  Unfortunately the flight ended as fast as it begun :(.  The EDFs didn't have as much thrust as I anticipated so the UAV could not reach cruising speed (~20mph estimated) fast enough.
          </p>
          <p className="text-muted-foreground mb-4">
            Coming back from this failure, I plan to switch to 9 inch propellors instead of the two 40mm EDFs.  EDFs provide good thrust for their size (at a blistering 80,000rpm!), but ultimately are too weak for what I need.
          </p>
          <p className="text-muted-foreground mb-4">
            Ultimately this isn't that big of a setback.  The Airframe is easy to 3D print and all the electronics are still in good shape!  Stay tuned for Flight 2!!!
          </p>
          <p className="mb-2">
            See my UAV project page for the video of my failure!
          </p>
        </CardContent>
      </Card>

      {/* Existing UAV Progress Blog Post */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>UAV Progess!</CardTitle>
              <CardDescription>Version 2.0</CardDescription>
            </div>
            <span className="text-sm text-muted-foreground">April 9, 2025</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            I have been diligently working on my UAV! My most recent developments have been to redesign the wings to be
            slightly larger, and to also add winglets at the ends.
          </p>
          <p className="text-muted-foreground mb-4">
            It was very important to me to no comprimise the cool looks of the UAV while still improving the wings, and
            I am quite happy with the result I have acheived! Check out a picure of Version 1.0's mockup below!
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg mt-6 mb-4">
            <Image
              src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/IMG_1229-a8dhZbdSZ7DqJ9qCeysh8RKlooTWYb.JPG"
              alt="UAV Prototype assembly"
              fill
              className="object-contain bg-background"
            />
          </div>
        </CardContent>
      </Card>

      {/* Placeholder for future posts */}
      <Card>
        <CardHeader>
          <CardTitle>More Posts Coming Soon</CardTitle>
          <CardDescription>Stay tuned for future updates and technical deep-dives</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Check back later for updates and new content!</p>
        </CardContent>
      </Card>
    </div>
  )
}
