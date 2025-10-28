import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModelRocketProject() {
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
          <h1 className="text-4xl font-bold tracking-tighter">Model Rocket Project</h1>
          <p className="mt-4 text-xl text-muted-foreground">Failure! (as seen below)</p>
        </div>

        {/* Main Project Image */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rocket222.JPG-N3wP2cxQa8plmhbBLOSYVxsaEBE6tg.jpeg"
            alt="Model Rocket"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>Custom Model Rocket Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              I designed and flew a guided rocket in the summer of 2023. Launch 1 failed, but I learned a lot! See
              technical info below.
            </p>
          </CardContent>
        </Card>

        {/* Design Features */}
        {/**
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Features</CardTitle>
            <CardDescription>Key Components and Innovations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>3D printed + Vinyl wrapped cardboard tibe airframe to be aerodynamic while beign low cost and robust</li>
              <li>Easily repairable canards "can" for easy assembly and repair</li>
              <li>Modular design allowing for easy assembly and modification</li>
              <li>Arduino based electronics for easy-to use coding and future additions</li>
            </ul>
          </CardContent>
        </Card>
        */}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Design Features</CardTitle>
            <CardDescription>Cool Things I designed!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">Notable features of the rocket include:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Arduino Uno microcontroller</li>
                <li>Accelerometer and Gyro for sensing orientation</li>
                <li>Individual fin control for pitch, yaw, and roll stability</li>
                <li>Custom PID control of all axes</li>
                <li>Custom explosive charge for parachute deployment</li>
                <li>3" cardboard tube based design to be easily upgradable, lighweight, and robust</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Control Loop</CardTitle>
            <CardDescription>How I coded the rocket</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>The Arduino Uno uno uses I2C to communicate to a gyroscope and accelerometer</li>
                <li>
                  The gyroscope data is used with a 3 separate PID loops to keep the rocket stable in Pitch, Yaw, and
                  Roll. The PID loops also can be used to maintain a set direction or path.
                </li>
                <li>
                  Each fin is independantly controlled to allow for Pitch Yaw and Roll commands to be exectured in
                  parallel.
                </li>
                <li>
                  Once the rocket stops accelerating the accelerometer is used to monitor when it stops, and then
                  activate the parachute chage to deploy the parachute
                </li>
                <li>
                  When the parachute is deployed the fins rotate 90˚ to provide maximum drag to the rocket on its way
                  down
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flight Test 1</CardTitle>
            <CardDescription>Initial Launch and Lessons Learned</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The first flight attempt encountered challenges when the engines failed to ignite. Only three ignited,
              resulting in a Rapid Unschedule Dissabembly (RUD) This experience provided valuable insights for
              subsequent launches and led to improvements in the ignition system reliability.
            </p>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Project Outcomes</CardTitle>
            <CardDescription>Achievements and Learnings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">To launch the rocket in the summer of 2025 I plan to</p>
            <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Build an improved V2 of the rocket</li>
              <li>Redesign the ingition wiring to be more robust</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
