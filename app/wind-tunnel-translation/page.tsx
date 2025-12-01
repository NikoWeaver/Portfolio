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
    // Load the model-viewer script
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement("script")
      script.type = "module"
      script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      document.head.appendChild(script)

      script.onload = () => {
        // Add event listeners after script loads
        setTimeout(() => {
          const modelViewer = document.querySelector("model-viewer")
          if (modelViewer) {
            modelViewer.addEventListener("load", () => {
              setModelLoaded(true)
              setModelError(false)
            })

            modelViewer.addEventListener("error", (event) => {
              console.error("Model viewer error:", event)
              setModelError(true)
              setModelLoaded(false)
            })
          }
        }, 1000)
      }
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
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Wind Tunnel Translation System"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Code Blocks Side by Side */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Control Algorithm Code Block */}
          <Card>
            <CardHeader>
              <CardTitle>Control Algorithm</CardTitle>
              <CardDescription>Python control system implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>I used inverse kinematics to control the robot.  The input to equation solve for the three joint angles based on the length of each joint, the desired X and Y position, and desired angle</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Arduino Firmware Code Block */}
          <Card>
            <CardHeader>
              <CardTitle>Arm optimization</CardTitle>
              <CardDescription>Every simulation the optimal robot arm is generated.  In this case, optimal means the least possible joint length for the specified conditions.  The factors that decide this are</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>Lorem ipsum dolor sit amet...</code>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Arduino Firmware Details</h3>
              <p className="text-muted-foreground text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
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
                  shadow-intensity="0.5"
                  camera-orbit="45deg 75deg 8m"
                  exposure="0.8"
                  shadow-softness="0.8"
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
                    slot="progress-bar"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      zIndex: 100,
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "4px solid #f3f3f3",
                        borderTop: "4px solid #3498db",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                        margin: "0 auto 16px",
                      }}
                    ></div>
                    <p style={{ color: "#666", fontSize: "14px" }}>Loading 3D Model...</p>
                  </div>

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
                      The model may contain unsupported textures or formats.
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
                    <p className="text-sm text-muted-foreground mb-4">
                      The 3D model contains texture files that cannot be displayed in the browser viewer.
                    </p>
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
                : "3D model of the wind tunnel translation mechanism. If the model doesn't load, you can download the GLB file to view in external 3D software."}
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
