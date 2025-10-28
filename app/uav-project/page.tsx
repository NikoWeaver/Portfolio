import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UAVProject() {
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
          <h1 className="text-4xl font-bold tracking-tighter">UAV Design Project</h1>
          <p className="mt-4 text-xl text-muted-foreground">Autonomous 3D Printed UAV (Version 2.0!)</p>
        </div>

        {/* Main Project Image */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/IMG_1814.JPG"
            alt="UAV Design"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Flight #1 Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flight #1</CardTitle>
            <CardDescription>{"Rest in pieces!"}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {
                "Unfortunately, the first flight did not go as planned.  The EDFs did not have the thrust I expected, so the UAV could not accelerate quickly enough to take flight.  Fortunately, every system independly worked, so version two will be ready soon!"
              }
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LX8s9WZDFeg"
                title="Flight #1 Test Flight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Project Mission - New Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Mission</CardTitle>
            <CardDescription>Why a UAV?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This project aims to achieve several key objectives in UAV design and functionality as well as for
                myself:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Develop and refine my own aerodynamic design skills</li>
                <li>Implement full autonomy for GPS waypoint navigation</li>
                <li>Integrate a payload bay for sensor carrying or remote payload deployment </li>
              </ul>
              <p className="text-muted-foreground">
                I love to push the boundaries of my skills, and this is a great project to do so! I flew the UAV first
                in the summer of 2025 and plan fly it back at Duke during fall semester 2025.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Design Inspiration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Inspiration</CardTitle>
            <CardDescription>Modern Military UAV and Stealth Aircraft Influences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Primary Influences</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>B-21 Raider Stealth Bomber</li>
                  <li>MQ-28 Ghost Bat UAV</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Design Goals</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Mimic modern stealth aesthetics</li>
                  <li>Functional aerodynamic design</li>
                  <li>Optimal thrust-to-weight ratio</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">B-21 Raider</h4>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4a/B-21-in-flight.jpg"
                    alt="B-21 Raider Side Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">MQ-28 Ghost Bat</h4>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://www.boeing.com.au/content/dam/boeing/en-au/media/boeingaustralia/boeing-airpower-teaming-system/MQ-28A_Ghost_Bat_Courtesy_Defence.jpg"
                    alt="MQ-28 Ghost Bat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription>Current Design Parameters and Performance Targets</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Current Value</TableHead>
                  <TableHead>Target Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Estimated Weight</TableCell>
                  <TableCell>2.0 kg</TableCell>
                  <TableCell>1.5 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Airframe Weight</TableCell>
                  <TableCell>400</TableCell>
                  <TableCell>500g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thrust Output</TableCell>
                  <TableCell>1.2-1.4 kg</TableCell>
                  <TableCell>1.5 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thrust-to-Weight Ratio</TableCell>
                  <TableCell>0.6-0.7:1</TableCell>
                  <TableCell>1:1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* More specs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>More Specifications</CardTitle>
            <CardDescription>Current design featires</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Specification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Flight Computer</TableCell>
                  <TableCell>Pixhawk 6C running ArduPilot</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Batteries</TableCell>
                  <TableCell>Two 4s 6000mah LiPo batteries</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Propulstion</TableCell>
                  <TableCell>Two 40mm Electric Ducted Fans</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GPS Accuracy</TableCell>
                  <TableCell>1.5m</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Design Considerations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Considerations</CardTitle>
            <CardDescription>Key Factors Influencing the Design Process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Thrust-to-Weight Optimization</h3>
                <p className="text-muted-foreground">
                  The current iteration will have a 2:3 thrust-to-weight ratio, with future iterations aiming for a 1:1
                  ratio. To achieve a 1:1 ratio I will hve to optimize the Weight of the airframe and/or increase the
                  thrust of the aircraft
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="mb-2 font-semibold">Aerodynamic Efficiency</h3>
                <p className="text-muted-foreground">
                  The airframe design incorporates modern stealth aircraft principles while maintaining optimal
                  aerodynamic performance. The large wings provide lots of lift while the teardrop shaped body keeps
                  drag to a minimum
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="mb-2 font-semibold">Future Improvements</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Weight reduction through material optimization</li>
                  <li>Enhanced propulsion system for improved thrust</li>
                  <li>Refined aerodynamic surfaces for better performance</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="mb-2 font-semibold">Manufacturing Method</h3>
                <p className="text-muted-foreground">
                  The UAV is designed to be entirely 3D printed, with an airframe weight goal of 500g. This
                  manufacturing approach allows for rapid prototyping and iterative design improvements while
                  maintaining structural integrity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Project Gallery</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/Plane%20CFD.png"
              alt="UAV CFD Analysis"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/NEwPlane-vtREgGyfPQJehXX3fh3fPy6N8GMGVS.png"
              alt="UAV Project Perspective View"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gallery1-1x31PslsDEcBNYXuaS9oBgKVq0IdUW.png"
              alt="UAV Project Side View"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/IMG_1229-a8dhZbdSZ7DqJ9qCeysh8RKlooTWYb.JPG"
              alt="UAV Prototype assembly"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gallery2-lErQ8vQtTLZGkkYt4ix7owPTJXHmqN.png"
              alt="UAV Project Perspective View"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
