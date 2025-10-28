"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Extend the JSX namespace to include model-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        "auto-rotate"?: boolean
        "camera-controls"?: boolean
        "disable-zoom"?: boolean
        "environment-image"?: string
        exposure?: string
        "field-of-view"?: string
        "max-camera-orbit"?: string
        "min-camera-orbit"?: string
        "max-field-of-view"?: string
        "min-field-of-view"?: string
        "camera-orbit"?: string
        "camera-target"?: string
        "shadow-intensity"?: string
        "shadow-softness"?: string
        loading?: string
        reveal?: string
        ar?: boolean
        "ar-modes"?: string
        "ios-src"?: string
        "disable-tap"?: boolean
        "interaction-prompt"?: string
        "interaction-prompt-threshold"?: string
      }
    }
  }
}

export default function WindTunnelTranslationProject() {
  const [modelError, setModelError] = useState(false)
  const [modelLoaded, setModelLoaded] = useState(false)

  useEffect(() => {
    const originalError = console.error
    console.error = (...args) => {
      if (args[0]?.includes?.("THREE.GLTFLoader") && args[0]?.includes?.("texture")) {
        return
      }
      originalError.apply(console, args)
    }

    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement("script")
      script.type = "module"
      script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      document.head.appendChild(script)

      script.onload = () => {
        setTimeout(() => {
          const modelViewer = document.querySelector("model-viewer")
          if (modelViewer) {
            setModelLoaded(true)

            modelViewer.addEventListener("load", () => {
              setModelLoaded(true)
              setModelError(false)
            })

            modelViewer.addEventListener("error", (event) => {
              const errorDetail = (event as any)?.detail
              if (errorDetail && !errorDetail.message?.includes("texture")) {
                setModelError(true)
                setModelLoaded(false)
              }
            })
          }
        }, 500)
      }
    }

    return () => {
      console.error = originalError
    }
  }, [])

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
          <h1 className="text-4xl font-bold tracking-tighter">Wind Tunnel Translation Project</h1>
          <p className="mt-4 text-xl text-muted-foreground">4 Axis Translation System for Wind Tunnel Testing!</p>
        </div>

        {/* Project Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>Precision Control System Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For the FPC lab at the University of Utah, I developed a MATLAB simulation and CAD design of a 4-axis arm.
              The arm will be used to translate a model plane in a wind tunnel. The MATLAB simulation is used to
              determine the optimal arm design for a designated X, Y, and Pitch rotation all the physics is fully
              simulated!
            </p>
          </CardContent>
        </Card>

        {/* YouTube Video Embed */}
        {/*
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>System Demonstration</CardTitle>
            <CardDescription>Watch the MATLAB simulation in action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Wind Tunnel Translation System Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="mt-4 text-muted-foreground">See the simulation working.</p>
          </CardContent>
        </Card>
        */}

        {/* Project Image */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg bg-white flex items-center justify-center">
          <Image
            src="/images/design-mode/logo_fpc.png"
            alt="FPC Lab - University of Utah"
            width={600}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        {/* Code Blocks Side by Side */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Control Algorithm Code Block */}
          <Card>
            <CardHeader>
              <CardTitle>Inverse Kinematics</CardTitle>
              <CardDescription>MATLAB inverse kinematics implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-[10px] leading-tight font-mono">
                  <code>{`function [r1,r2,r3] = fcn(x,y,r,e,L1_val,L2_val,L3_val)
  y = -y;
  x3 = x-(L3_val*cosd(r));
  y3 = y-(L3_val*sind(r));
  C = sqrt(x3^2 + y3^2);
  A = acosd((L1_val^2 + L2_val^2 - C^2 )/(2*L1_val*L2_val));
  B = acosd((L1_val^2 + C^2 - L2_val^2 )/(2*L1_val*C));
  if C > (L1_val+L2_val)
    r1 = 0;
    r2 = 0;
    r3 = 0;
  elseif e == 1
    r1 = atan2d(y3,x3)-B;
    r2 = 180-A;
    r3 = r - r1 -r2;
  else
    r1 = atan2d(y3,x3)+B;
    r2 = A-180;
    r3 = r - r1 -r2;
  end
  %r1 = r1 + 90;
  %r2 = r2 - 90;
end`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Arduino Firmware Code Block */}
          <Card>
            <CardHeader>
              <CardTitle>Arm optimization</CardTitle>
              <CardDescription>
                Every simulation the optimal robot arm is generated. In this case, optimal means the least possible
                joint length for the specified conditions. The factors that decide this are
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-[10px] leading-tight font-mono">
                  <code>{`
            
Pos1 = [X_val-L3_val*cosd(AngleRange_val+AngleInitial_val),
Y_val+L3_val*sind(AngleRange_val+AngleInitial_val)];

Pos2 = [X_val-L3_val*cosd(-AngleRange_val+AngleInitial_val),
Y_val+L3_val*sind(-AngleRange_val+AngleInitial_val)];
  
MaxDist = max(norm(Pos1), norm(Pos2));
norm(Pos1);
L1_val = MaxDist/2 + 5; +5mm for a bit of safety margin
L2_val = MaxDist/2 + 5; 
                  
                  
                  `}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Block Descriptions */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Control Algorithm Implementation</h3>
              <p className="text-muted-foreground text-sm">
                At each timestep, the desired position is input, and the inverse kinamtics solver outputs the angle that each motor must reach in order to move the robotic arm's end effector to that desired position.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Data collection details</h3>
              <p className="text-muted-foreground text-sm">
                At each timestep, after solving for inverse kinematics and then moving each joint, the torque that each motor outputs is exported into a csv file and then plotted.  It is important to note that the torque data must be first put through a low-pass filter, becuase matlab will sometimes output extremely high or low torque values for just one time step.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technical Implementation</CardTitle>
            <CardDescription>System Architecture and Design Considerations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The main design constarint for this robotic arm was that I had to use Unitree GO-M8010-6 motors on each joint.
              </p>
              <p className="text-muted-foreground">
                While I never built the full arm, this was the final design iteration.  Each part was prototyped using a 3D printer, and validated to fit together.
              </p>
              <p className="text-muted-foreground">
                The aluminum tube design of the arm allows for different joint lengths to be easily tested, without need for total redesign if the arm geometry needs to change.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CAD Model Viewer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3D CAD Model</CardTitle>
            <CardDescription>Interactive model of the translation mechanism</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              {!modelError ? (
                <model-viewer
                  src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/master_asm.glb"
                  alt="Wind Tunnel Translation Mechanism 3D Model"
                  auto-rotate
                  camera-controls
                  shadow-intensity="0.3"
                  camera-orbit="45deg 75deg 8m"
                  exposure="1.0"
                  shadow-softness="0.5"
                  interaction-prompt="auto"
                  interaction-prompt-threshold="2000"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "400px",
                    backgroundColor: "#f8f9fa",
                  }}
                  loading="eager"
                  reveal="auto"
                >
                  <div
                    slot="error"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    <p style={{ color: "#e74c3c", fontSize: "16px", marginBottom: "8px" }}>Unable to load 3D model</p>
                    <p style={{ color: "#666", fontSize: "14px" }}>
                      Try downloading the file to view in external 3D software.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 bg-transparent"
                      onClick={() =>
                        window.open("https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/master_asm.glb", "_blank")
                      }
                    >
                      Download GLB File
                    </Button>
                  </div>
                </model-viewer>
              ) : (
                <div className="w-full h-full min-h-[400px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">3D Model Preview</h3>
                    <p className="text-muted-foreground mb-4">Wind Tunnel Translation Mechanism</p>
                    <p className="text-sm text-muted-foreground mb-4">Unable to display the 3D model in the browser.</p>
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open("https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/master_asm.glb", "_blank")
                      }
                    >
                      Download GLB File
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              {modelLoaded
                ? "Interactive 3D model - Use mouse to rotate, zoom, and pan around the model."
                : "3D model of the wind tunnel translation mechanism. The model geometry will display even if textures fail to load."}
            </p>
          </CardContent>
        </Card>

        {/* Add CSS for spinner animation */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
