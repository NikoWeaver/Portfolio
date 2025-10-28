import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function UnderwaterROVProject() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter">Underwater ROV  | Meet Crush!</h1>
          <p className="mt-4 text-xl text-muted-foreground">{"Duke Robotics Club - 2025 RoboSub Competition Finalists!"}</p>
        </div>

        {/* Main Project Image */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minibot%20render-8VNVx5cU7OnkLV89ePrNVPWApd0ElG.png"
            alt="Underwater ROV"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>Crush Delevopment!</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I Contributed to the development of an autonomous underwater ROV for the 2025 RoboSub competition, Crush. Crush is designed to operate independently underwater, completing various competition tasks through autonomous navigation and control in the annual RoboSub competition.
            </p>
            <div className="mt-4">
              <h3 className="mb-2 font-semibold">Current Developments</h3>
              <p className="text-muted-foreground">
                As the chief engineer coming into the 2025, I plan to add a seventh thruster to crush for enable pitch control, and also add a case to optimize for forward movement.                            
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Contributions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technical Contributions</CardTitle>
            <CardDescription>Key Design Elements and Systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Capsule Mounting System</h3>
                <p className="text-muted-foreground">
                  Designed the mounting system for the dual capsule configuration, incorporating:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>SLS-Nylon prints to achieve complex geometries</li>
                  <li>
                    3-part design to contrain the capsules side to side movement, but still allow them to be easily
                    removed{" "}
                  </li>
                  <li>Hexagonal profile for easy mounting to modular bars</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="mb-2 font-semibold">Structural Design</h3>
                <p className="text-muted-foreground">Developed the primary structural components:</p>
                <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Side plates: Large enclosure panels providing structural integrity and protection</li>
                  <li>
                    Mounting bars: Cross-vehicle support with hexagon and bolt pattern for flexible component mounting
                  </li>
                  <li>
                    Assisted in modeling other components of the minibot in order to easily change the dimensions of the
                    robot via paramaterization
                  </li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="mb-2 font-semibold">Hydrodynamic Analysis</h3>
                <p className="text-muted-foreground">
                  Conducted Computational Fluid Dynamics (CFD) analysis on the frame design to:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Optimize hydrodynamic performance</li>
                  <li>Reduce drag coefficients</li>
                  <li>Improve overall efficiency of thrusters underwater</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Features */}
        <Card>
          <CardHeader>
            <CardTitle>Design Features</CardTitle>
            <CardDescription>Key Characteristics and Innovations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Structural Innovation</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Dual capsule design for separated systems</li>
                  <li>Modular mounting system for easy maintenance</li>
                  <li>Optimized weight distribution</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">General Performance Features of Crush </h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Hydrodynamically optimized frame</li>
                  <li>Six thrusters for Three-axis translation </li>
                  <li>Robust waterproof enclosure system</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
