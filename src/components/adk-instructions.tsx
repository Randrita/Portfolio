import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button";

const steps = [
  {
    id: "step1",
    title: "Step 1: Set up your Firebase project",
    content: "First, you'll need a Firebase project to host your application. If you don't have one, you can create one in the Firebase Console. Once your project is ready, you can proceed to the next step.",
    link: "https://console.firebase.google.com/",
    linkText: "Go to Firebase Console"
  },
  {
    id: "step2",
    title: "Step 2: Install the Firebase CLI",
    content: "The Firebase Command Line Interface (CLI) is essential for managing your Firebase projects and deploying applications. If you haven't already, install it using npm.",
    code: "npm install -g firebase-tools",
  },
  {
    id: "step3",
    title: "Step 3: Initialize Firebase in your project",
    content: "Navigate to your project's root directory in your terminal and run the `firebase init` command. This will set up the necessary Firebase configuration files for your project.",
    code: "firebase init hosting",
  },
  {
    id: "step4",
    title: "Step 4: Configure App Hosting with Cloud Run",
    content: "To use Cloud Run for your backend, you need to configure your `apphosting.yaml` file. This file tells App Hosting how to build and run your app. Ensure it specifies a Cloud Run service.",
  },
  {
    id: "step5",
    title: "Step 5: Deploy your application",
    content: "Once everything is configured, you can deploy your application to Firebase App Hosting. This command will build your application and deploy it to the specified Cloud Run service.",
    code: "firebase apphosting:backends:deploy <your-backend-name>",
  },
];

export default function ADKInstructions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {steps.map(step => (
        <AccordionItem value={step.id} key={step.id}>
          <AccordionTrigger>{step.title}</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p>{step.content}</p>
              {step.code && (
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              )}
              {step.link && (
                 <Button asChild className="mt-2">
                    <a href={step.link} target="_blank" rel="noopener noreferrer">{step.linkText}</a>
                </Button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
