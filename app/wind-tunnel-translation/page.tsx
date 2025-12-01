"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
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
      if (
        args[0]?.includes?.("THREE.GLTFLoader") ||
        (typeof args[0] === "string" && args[0].includes("Couldn't load texture"))
      ) {
        return
      }
      originalError.apply(console, args)
    }

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
              const errorMsg = String(event)
              if (!errorMsg.includes("texture")) {
                console.error("Model viewer error:", event)
                setModelError(true)
              }
              setModelLoaded(true)
            })
          }
        }, 1000)
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
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
          <img
            src="https://zmtbsodvdekwtp1d.public.blob.vercel-storage.com/Multibody%20Explorer%20-%20Optimized_Arm%202025-11-30%2020-25-38%20%28online-video-cutter.com%29.gif"
            alt="Wind Tunnel Translation System Animation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Code Blocks Side by Side */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Control Algorithm Code Block */}
          <Card>
            <CardHeader>
              <CardTitle>Inverse Kinematics</CardTitle>
              <CardDescription>MATLAB control system implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-3 overflow-hidden max-h-96">
                <pre className="text-[10px] leading-tight whitespace-pre-wrap break-words font-mono">
                  <code>{`function [r1,r2,r3] = fcn(x,y,r,e,L1_val,L2_val,L3_val)
    y = -y; %not sure why the joints are messed up, but this fixes it :)
    
    x3 = x-(L3_val*cosd(r));
    y3 = y-(L3_val*sind(r));

    C = sqrt(x3^2 + y3^2);
    a = acosd((L1_val^2 + L2_val^2 - C^2 )/(2*L1_val*L2_val));
    B = acosd((L1_val^2 + C^2 - L2_val^2 )/(2*L1_val*C));

    if C > (L1_val+L2_val)
        r1 = 0;
        r2 = 0;
        r3 = 0;
    elseif e == 1
        r1 = atan2d(y3,x3)-B;
        r2 = 180-a;
        r3 = r - r1 -r2;
    else
        r1 = atan2d(y3,x3)+B;
        r2 = a-180;
        r3 = r - r1 -r2;
    end
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
                joint length for the specified conditions. The simulation finds the maximum total joint length, then
                sets each joint to be half of that length, plus 5mm for clearence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-3 overflow-hidden max-h-96">
                <pre className="text-[10px] leading-tight whitespace-pre-wrap break-words font-mono">
                  <code>{`% Optimization Algorithm
% Finds maximum total joint length
L_total = max_workspace_distance

% Distribute length equally with clearance
clearance = 5; % mm
L_per_joint = (L_total / 2) - clearance;

% Set joint parameters
L1 = L_per_joint;
L2 = L_per_joint;
L3 = L_per_joint / 2;

% Validate arm geometry
if check_constraints(L1, L2, L3, conditions)
    arm_optimal = true;
else
    % Adjust parameters
    [L1, L2, L3] = refine_geometry(...);
end`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* IRL Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Physical Implementation</CardTitle>
            <CardDescription>System Architecture and Design Considerations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I designed the arm to use aluminum tubes for the joints in order to have it be easily customized, but
                still very rigid.
              </p>
              <p className="text-muted-foreground">
                While the final arm was not built, the process to build it would be as follows:
              </p>
              <p className="text-muted-foreground">
                Use the MATLAB simulation to find the optimal arm geometry generated from the given set of initial
                conditions.
              </p>
              <p className="text-muted-foreground">
                Then the maximum actuator torques could be used to decide if the desired conditions were feasible for
                the chosen actuators.
              </p>
              <p className="text-muted-foreground">
                Once a desired arm geometry has been settled on, the aluminum tubes could be cut to the correct lengths
                and then assembled to make the full arm.
              </p>
              <p className="text-muted-foreground">
                Below is the full CAD model of the arm I designed. Please take a look at the model!!
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
