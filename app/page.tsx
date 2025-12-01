import Link from "next/link"
import Image from "next/image"
import { Phone, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Niko Weaver
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">Mechanical Engineering Student at Duke University</p>
          <div className="mt-6 flex gap-4">
            <div className="relative group">
              <a href="tel:+16178521905">
                <Button variant="outline" size="icon">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                617-852-1905
              </span>
            </div>
            <div className="relative group">
              <a href="https://www.linkedin.com/in/niko-weaver/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                linkedin.com/in/niko-weaver
              </span>
            </div>
            <div className="relative group">
              <a href="mailto:nikoweaver@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                nikoweaver@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
        <div className="flex flex-col items-center gap-8">
          {/* Image commented out as requested
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Niko Weaver"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          */}
          <div className="w-full">
            <p className="text-lg text-muted-foreground">
              Hello! I'm Niko Weaver, a Mechanical Engineering student at Duke University. I am really interested in
              Aerospace and Robotics! I love to play Guitar, Ski and build Rockets
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a very curious person, and I always love to learn new things. Right now I'm working on my UAV project
              and have one flight in the books!
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="#projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center md:text-6xl font-bold tracking-tighter">Engineering Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* UAV Project */}
          <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/50 hover:shadow-primary/20">
            <Link href="/uav-project">
              <div className="relative aspect-video">
                <Image
                  src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/IMG_1814.JPG"
                  alt="UAV Design"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>UAV Design Project</CardTitle>
                <CardDescription>Aerodynamic UAV Design and Analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I am designing a UAV! I have been granted $1050 from the Duke University Colab grant.
                </p>
              </CardContent>
            </Link>
          </Card>

          {/* Underwater AUV Project */}
          <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/50 hover:shadow-primary/20">
            <Link href="/underwater-rov">
              <div className="relative aspect-video">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minibot%20render-8VNVx5cU7OnkLV89ePrNVPWApd0ElG.png"
                  alt="Underwater ROV"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Underwater AUV</CardTitle>
                <CardDescription>Duke Robotics Club - RoboSub Competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designed key structural components and performed hydrodynamic analysis for an autonomous underwater
                  ROV (aka an AUV) for the Duke Robotics Club.
                </p>
                <Image
                  src="https://duke-robotics.com/wp-content/uploads/2019/04/title_logo-1.png"
                  alt="Duke Robotics Club Logo"
                  width={500}
                  height={70}
                  className="mt-2"
                />
              </CardContent>
            </Link>
          </Card>

          {/* Combat Robotics Project */}
          <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/50 hover:shadow-primary/20">
            <Link href="/combat-robotics">
              <div className="relative aspect-video">
                <Image
                  src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/Screenshot%202025-04-09%20at%201.53.02%E2%80%AFPM-8in5uhFdWVSg6MwfOb4OWQhSUhgjyh.png"
                  alt="Combat Robot"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Combat Robotics</CardTitle>
                <CardDescription>SPIN-N-OUT Battle Bot</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">See my robots for Duke Combat robotics club!</p>
                <Image
                  src="https://combatrobotics.wiki.duke.edu/images/2/2d/LOGO_-_Combat_Robotics.png"
                  alt="Duke Robotics Club Logo"
                  width={150}
                  height={150}
                  className="mt-2 mr-auto"
                />
              </CardContent>
            </Link>
          </Card>

          {/* FRC Robot Project */}
          <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/50 hover:shadow-primary/20">
            <Link href="/frc-robot">
              <div className="relative aspect-video">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3245bot.png-bvCoWHqQ7D1V0Ziw3oXpDPbieC9rdm.jpeg"
                  alt="FRC Robot"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>FRC Robotics Competition</CardTitle>
                <CardDescription>Team 3245 Competition Robot</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Led the mechanical design and construction of Team 3245's competition robot for the 2024 FRC season.
                </p>
              </CardContent>
            </Link>
          </Card>

          {/* Model Rocket Project */}
          <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/50 hover:shadow-primary/20">
            <Link href="/model-rocket">
              <div className="relative aspect-video">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rocket111.jpg-p266SRo3kx0i2oX5qYUs9BRK8L7xAC.jpeg"
                  alt="Model Rocket"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Model Rocket Development</CardTitle>
                <CardDescription>Custom Rocket Design and Construction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designed and constructed a custom model rocket. Flown in the Bonneville Salt Flats, Utah, December
                  2023. Half of the engines ignited, resulting in an RUD (Rapid Unscheduled Disassembly).
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="container mx-auto px-4 py-16">
        <h2 className="text-center font-bold tracking-tighter md:text-6xl">Resume</h2>
        <div className="max-w-3xl mx-auto bg-card text-card-foreground p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Niko Weaver</h1>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <a
                href="https://drive.google.com/file/d/1d2OFM8HKAMxMuZhgnBw4-9NqP2V0vR_5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </a>
            </Button>
          </div>
          <p className="mb-4">
            <a
              href="https://linkedin.com/in/niko-weaver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/niko-weaver
            </a>{" "}
            |
            <a href="tel:+16178521905" className="text-primary hover:underline">
              {" "}
              +1 (617) 852-1905
            </a>{" "}
            |
            <a href="mailto:nikoweaver@gmail.com" className="text-primary hover:underline">
              {" "}
              nikoweaver@gmail.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
          <h3 className="text-xl font-medium">Duke University, Durham NC</h3>
          <p className="italic mb-2">Expected Spring 2028</p>
          <ul className="list-disc list-inside mb-4">
            <li>Bachelor of Science in Engineering</li>
            <li>Major in Mechanical Engineering, Minor in Math, Aerospace Certificate</li>
            <li>Relevant Coursework: Thermodynamics, Differential equations, Properties of solids</li>
          </ul>

          <h3 className="text-xl font-medium">Waterford School, Sandy UT</h3>
          <p className="italic mb-2">August 2020 - June 2024</p>
          <ul className="list-disc list-inside mb-4">
            <li>High school diploma, Summa Cum Laude, 3.95 GPA</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Technical Skills</h2>
          <p className="mb-2">
            <strong>Software:</strong> Autodesk Fusion CAD, CAM, FEA; Siemens NX CAD; Solidworks CAD; Ansys Fluent CFD;
            Adobe Photoshop, Illustrator; Microsoft Office suite.
          </p>
          <p className="mb-4">
            <strong>Languages:</strong> MATLAB, Python, Java, Arduino C++
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Projects</h2>
          <h3 className="text-xl font-medium">Autonomous UAV</h3>
          <p className="italic mb-2">Summer 2025</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Designed and flew an autonomous UAV. The fixed-wing UAV weighs 2kg and has a wingspan of 1 meter. Used CFD
              to optimize and validate geometries.
            </li>
          </ul>

          <h3 className="text-xl font-medium">Underwater ROV - Duke Robotics Club</h3>
          <p className="italic mb-2">September 2024 - present</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Designed and machined major mechanical components of an autonomous submarine using Solidworks CAD and
              Ansys Fluent.
            </li>
          </ul>

          <h3 className="text-xl font-medium">Self-guided Rocket</h3>
          <p className="italic mb-2">Summer 2023</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Designed, built, and flew a ~1m long canard-guided rocket. Used an IMU and Arduino uno for closed-loop
              control to maintain trajectory.
            </li>
          </ul>

          <h3 className="text-xl font-medium">FRC Robot</h3>
          <p className="italic mb-2">Winter 2024</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Designed and manufactured a Pivoting disk shooter, electronics system, and drivetrain for my robotics team
              using Autodesk Fusion CAD, CAM, and FEA.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Experience</h2>
          <h3 className="text-xl font-medium">Unpaid Intern</h3>
          <p className="italic mb-2">Summer 2025</p>
          <p className="font-medium mb-2">University of Utah Aerospace Engineering Department</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Designed a 4-axis robot arm to move a model in a wind tunnel. Used MATLAB to simulate the robot arm in
              real-time operation and collect torque values.
            </li>
          </ul>

          <h3 className="text-xl font-medium">Freelance engineer</h3>
          <p className="italic mb-2">Summer 2024 - present</p>
          <p className="font-medium mb-2">Self-employed</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Used CAD and 3D printing to validate a product before being launched for large-scale manufacturing.
              Provided a working prototype to the client in under 2 weeks.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Leadership</h2>
          <h3 className="text-xl font-medium">Duke Robotics Club Chief Engineer</h3>
          <p className="italic mb-2">Fall 2025 - Present</p>

          <h3 className="text-xl font-medium">High School Robotics Team Captain and Mechanical Lead</h3>
          <p className="italic mb-2">Fall 2022 - Spring 2024</p>

          <h3 className="text-xl font-medium">Science Olympiad Makerspace Vice President</h3>
          <p className="italic mb-2">Fall 2023 - Spring 2024</p>
        </div>
      </section>
    </div>
  )
}
