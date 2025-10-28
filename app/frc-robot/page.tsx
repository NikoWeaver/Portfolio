import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FRCRobotProject() {
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
          <h1 className="text-4xl font-bold tracking-tighter">FRC Robot - Team 3245</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            2024 FIRST Robotics Competition Robot Design and Development
          </p>
        </div>

        {/* Main Project Image */}
        <div className="relative mb-12 aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3245bot.png-bvCoWHqQ7D1V0Ziw3oXpDPbieC9rdm.jpeg"
            alt="FRC Robot"
            fill
            className="object-contain bg-background"
            priority
          />
        </div>

        {/* Project Role */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Role</CardTitle>
            <CardDescription>Leadership and Technical Contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              As the captain and mechanical lead of my team in 2024, I was responsible for designing multiple major
              systems on the Robot. Most notably, I designed the shooter, pivot, and swerve Drivebase of the robot.
            </p>
          </CardContent>
        </Card>

        {/* Game Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2024 FRC Game</CardTitle>
            <CardDescription>Crescendo - Shooting and Climbing Challenge</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              In 2024, the FRC game was to shoot "notes" into an elevated goal, as well as climb on a chain.
            </p>
          </CardContent>
        </Card>

        {/* Robot Design */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Robot Design</CardTitle>
            <CardDescription>Key Systems and Features I designed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shooter and Pivot System</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  I designed the shooter's home position allow the robot to score easily without needing to use pivot in
                  case of failure
                </li>
                <li>
                  Two brushless motors on an 18:24 overdrive power the shooter for high-speed and accurate shooting with
                  quicks spin-up time
                </li>
                <li>
                  The shooter has an Indexer to hold notes before shooting to precisily control when to shoot based on
                  the driver{" "}
                </li>
              </ul>

              <h3 className="text-lg font-semibold">Pivot Mechanism</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Uses four brushless motors on a 40:1 reduction for quick angle adjustments, even for the heavy arm
                </li>
                <li>Becuase of the four 500w motors it is able to use the arm to climb on a chain.</li>
                <li>Mounted on a 0.75" dead axle with roller bearings for robustness</li>
              </ul>

              <h3 className="text-lg font-semibold">Swerve Drivebase</h3>
              <p className="text-muted-foreground">
                <li>
                  Designed the robot's swerve drivebase to be as compact as possible (only 26"x26") and to also keep the
                  elctronics + battery low to the ground
                </li>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Competition Awards</CardTitle>
            <CardDescription>Recognition of Technical Excellence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Utah Regional Autonomous Award</h3>
                <p className="text-muted-foreground">
                  Recognized for exceptional autonomous capabilities and reliable performance during the autonomous
                  period.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Idaho Regional Quality Award</h3>
                <p className="text-muted-foreground">
                  Acknowledged for outstanding robot construction quality and robust mechanical design.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
