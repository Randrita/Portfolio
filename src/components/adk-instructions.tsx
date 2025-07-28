"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import React from "react";
import { CheckCircle, ExternalLink } from "lucide-react";

const steps = [
  {
    id: "step1",
    title: "Set up your Firebase project",
    content: "First, you'll need a Firebase project to host your application. If you don't have one, you can create one in the Firebase Console. Once your project is ready, you can proceed to the next step.",
    link: "https://console.firebase.google.com/",
    linkText: "Go to Firebase Console"
  },
  {
    id: "step2",
    title: "Install the Firebase CLI",
    content: "The Firebase Command Line Interface (CLI) is essential for managing your Firebase projects and deploying applications. If you haven't already, install it using npm.",
    code: "npm install -g firebase-tools",
  },
  {
    id: "step3",
    title: "Initialize Firebase in your project",
    content: "Navigate to your project's root directory in your terminal and run the `firebase init` command. This will set up the necessary Firebase configuration files for your project.",
    code: "firebase init hosting",
  },
  {
    id: "step4",
    title: "Configure App Hosting with Cloud Run",
    content: "To use Cloud Run for your backend, you need to configure your `apphosting.yaml` file. This file tells App Hosting how to build and run your app. Ensure it specifies a Cloud Run service.",
  },
  {
    id: "step5",
    title: "Deploy your application",
    content: "Once everything is configured, you can deploy your application to Firebase App Hosting. This command will build your application and deploy it to the specified Cloud Run service.",
    code: "firebase apphosting:backends:deploy <your-backend-name>",
  },
];

export default function ADKInstructions() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  const handleStepToggle = (index: number) => {
    const isOpening = activeStep !== index;
    if (isOpening) {
      setActiveStep(index);
      if (!completedSteps.includes(index)) {
        setCompletedSteps(prev => [...prev, index]);
      }
    } else {
      setActiveStep(-1);
    }
  };

  const progress = 100;

  return (
    <div className="w-full space-y-6 p-2">
       <div>
        <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">Progress</span>
            <span className="text-sm font-bold text-primary">{progress}%</span>
        </div>
        <Progress value={progress} className="w-full h-2" />
      </div>
      <Accordion 
        type="single" 
        collapsible 
        className="w-full space-y-2"
        value={steps[activeStep]?.id}
        onValueChange={(value) => {
            const stepIndex = steps.findIndex(s => s.id === value);
            handleStepToggle(stepIndex);
        }}
      >
        {steps.map((step, index) => (
          <AccordionItem value={step.id} key={step.id} className="border bg-card rounded-lg hover:bg-accent/50 transition-colors">
            <AccordionTrigger 
              className="p-4 text-left hover:no-underline"
              onClick={() => handleStepToggle(index)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${completedSteps.includes(index) || activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {completedSteps.includes(index) ? <CheckCircle className="w-5 h-5" /> : index + 1}
                </div>
                <span className="flex-1 font-semibold text-base">{step.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="prose prose-sm max-w-none dark:prose-invert pl-12 space-y-4">
                <p>{step.content}</p>
                {step.code && (
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                )}
                {step.link && (
                   <Button asChild className="mt-2" variant="outline">
                      <a href={step.link} target="_blank" rel="noopener noreferrer">
                        {step.linkText} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                  </Button>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
