"use client";

import { BrainCircuit, Layers, Satellite, Ship } from 'lucide-react';
import { Badge } from './ui/badge';

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
            Analyzes ocean satellite imagery to detect and track ships. This project uses a Convolutional Neural Network (CNN) built from scratch, without transfer learning.
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
    </div>
  );
}
