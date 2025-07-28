import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

const projects = [
  {
    title: 'recognAIse',
    description: "Web application converting handwritten documents to digital copy with automatic annotation feature to enable seemless and hassle free digital document management. The project was chosen as one of the best project in “HACKODISHA” and won the title of “BEST GIRLS TEAM”",
    techStack: 'OpenCV, Pytessaract, Numpy',
    link: '#', // Add repository link here
    image: 'https://placehold.co/600x400.png',
    hint: 'document analysis'
  },
  {
    title: 'Face Mesh App',
    description: "A web application, creating mask effects and retouching over a 'face mesh'. Users may verify this mesh by uploading photos or videos, as well as by turning on their camera directly. The project is added in official weekly round-up of STREAMLIT.",
    techStack: 'OpenCV, Numpy, Mediapipe, Streamlit',
    link: '#', // Add repository link here
    image: 'https://placehold.co/600x400.png',
    hint: 'facial recognition'
  },
  {
    title: 'Document Search Engine Over Private Networks',
    description: "An enterprise network document search engine. Whitelisted directory indexing in an enterprise network and near real-time documents search. It auto-correlates files based on their type in order to give a seamless experience while searching documents in a large network.",
    techStack: 'Python, Flask, Elasticsearch', // Assuming tech stack
    link: '#', // Add repository link here
    image: 'https://placehold.co/600x400.png',
    hint: 'search engine'
  },
  {
    title: 'Ship Identification and Tracking via Satellite Imagery',
    description: "Ocean images are analysed to track ships over satellite images. Convolutional Neural Network (CNNs) are used purely without any transfer learning for detection.",
    techStack: 'Python, TensorFlow/Keras, OpenCV', // Assuming tech stack
    link: '#', // Add repository link here
    image: 'https://placehold.co/600x400.png',
    hint: 'satellite imagery'
  },
];

export default function ProjectsComponent() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline text-center mb-8">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden rounded-t-lg">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                    data-ai-hint={project.hint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground truncate">{project.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 prose prose-sm max-w-none dark:prose-invert">
                <p>{project.description}</p>
                <h3 className="font-semibold mt-4">Technology Stack:</h3>
                <p>{project.techStack}</p>
                {project.link && project.link !== '#' && (
                  <Button asChild className="mt-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Repository</a>
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
