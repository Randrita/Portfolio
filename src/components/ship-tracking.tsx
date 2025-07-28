"use client";

import { BrainCircuit, Layers, Satellite, Ship, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const features = [
    { text: "Analyzes ocean satellite imagery to detect ships.", icon: <Satellite className="h-5 w-5 text-primary" /> },
    { text: "Tracks detected ships over time.", icon: <Ship className="h-5 w-5 text-primary" /> },
    { text: "Uses a Convolutional Neural Network (CNN) built from scratch.", icon: <BrainCircuit className="h-5 w-5 text-primary" /> },
];

const techStack = ["Python", "TensorFlow/Keras", "OpenCV"];

export default function ShipTrackingComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm text-muted-foreground mt-2">
            A deep-learning project to analyze the satellite imagery of the ocean and detect the ships and also track them. This project uses a Convolutional Neural Network (CNN) trained from scratch on the Kaggle dataset 'Satellite-imagery-of-ships'.
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
          <a href="https://github.com/Randrita/Ship-Identification-and-Tracking-via-Satellite-Imagery" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
