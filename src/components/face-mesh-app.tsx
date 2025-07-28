"use client";

import { CheckCircle, Layers, Zap, Video, Upload, Camera, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const features = [
    { text: "Creates mask effects over a 'face mesh'.", icon: <Zap className="h-5 w-5 text-primary" /> },
    { text: "Provides retouching capabilities.", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Verify mesh by uploading photos.", icon: <Upload className="h-5 w-5 text-primary" /> },
    { text: "Verify mesh by uploading videos.", icon: <Video className="h-5 w-5 text-primary" /> },
    { text: "Verify mesh using the camera directly.", icon: <Camera className="h-5 w-5 text-primary" /> },
    { text: "Featured in the official weekly round-up of STREAMLIT.", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
];

const techStack = ["OpenCV", "Numpy", "Mediapipe", "Streamlit"];

export default function FaceMeshAppComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm text-muted-foreground mt-2">
            A web application that creates mask effects and provides retouching over a 'face mesh'. Users can verify this mesh by uploading photos or videos, or by using their camera directly. This project was featured in the official weekly round-up of STREAMLIT.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="mt-2 space-y-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    {feature.icon}
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                </li>
            ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map(tech => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button asChild>
          <a href="https://github.com/Randrita/Face-Mesh-App" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
