"use client";

import { CheckCircle, Github, Layers, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const features = [
    { text: "Converts handwritten documents to digital text.", icon: <Zap className="h-5 w-5 text-primary" /> },
    { text: "Automatic annotation for easy document management.", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Awarded 'BEST GIRLS TEAM' at 'HACKODISHA'.", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Featured in the official weekly round-up of STREAMLIT.", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
];

const techStack = ["OpenCV", "Pytesseract", "Numpy"];

export default function RecognAIseComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm text-muted-foreground mt-2">
            An Optical Character Recognition (OCR) based web-application that can convert hand-written documents into digital text with an automatic annotation feature to enable a seamless and hassle-free digital document management.
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
          <a href="https://github.com/Randrita/recognAIse" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
