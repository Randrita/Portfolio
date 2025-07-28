import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProjectsComponent() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline text-center mb-8">My Work</h2>
      <div className="max-w-sm mx-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow group">
              <div className="overflow-hidden rounded-t-lg">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Project Header" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" 
                  data-ai-hint="abstract technology"
                />
              </div>
              <CardHeader>
                <CardTitle>AI-Powered Content Generation Tool</CardTitle>
              </CardHeader>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>AI-Powered Content Generation Tool</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="details" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Project Details & Requirements</TabsTrigger>
                <TabsTrigger value="steps">Steps</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4 prose prose-sm max-w-none">
                <p>This project is a web application that leverages a fine-tuned language model to generate marketing copy, blog post ideas, and social media updates. The goal is to provide a simple, intuitive interface for content creators to overcome writer's block and accelerate their workflow.</p>
                <h3 className="font-semibold mt-4">Requirements:</h3>
                <ul className="list-disc pl-5">
                  <li>React/Next.js for the frontend.</li>
                  <li>Python/Flask for the backend API.</li>
                  <li>Hugging Face Transformers for model interaction.</li>
                  <li>Firebase for user authentication and data storage.</li>
                  <li>Stripe for subscription management.</li>
                </ul>
              </TabsContent>
              <TabsContent value="steps" className="mt-4">
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>Setup Backend API:</strong> Develop a Flask API to handle requests, process input, and interact with the language model.</li>
                  <li><strong>Fine-tune Language Model:</strong> Use a base model (e.g., GPT-2, T5) and fine-tune it on a custom dataset of high-quality marketing copy.</li>
                  <li><strong>Build Frontend Interface:</strong> Create a clean user interface using Next.js and shadcn/ui components for input forms and displaying generated content.</li>
                  <li><strong>Implement User Authentication:</strong> Integrate Firebase Authentication to manage user accounts and protect routes.</li>
                  <li><strong>Deploy Application:</strong> Containerize the services using Docker and deploy to a cloud platform like Google Cloud Run or Vercel.</li>
                  <li><strong>Add Subscription Logic:</strong> Integrate Stripe to handle monthly subscriptions for premium features.</li>
                </ol>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
