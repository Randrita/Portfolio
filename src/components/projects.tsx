import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import content from '@/content.json';
import ADKInstructions from './adk-instructions';
import RecognAIseComponent from './recognAIse';
import FaceMeshAppComponent from './face-mesh-app';
import DocSearchEngineComponent from './doc-search-engine';
import ShipTrackingComponent from './ship-tracking';

const componentMap: { [key: string]: React.ComponentType } = {
  ADKInstructions,
  RecognAIse: RecognAIseComponent,
  FaceMeshApp: FaceMeshAppComponent,
  DocSearchEngine: DocSearchEngineComponent,
  ShipTracking: ShipTrackingComponent,
};

export default function ProjectsComponent() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline text-center mb-8">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.map((project, index) => {
          const ProjectComponent = project.component ? componentMap[project.component] : null;
          return (
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
              <DialogContent className="max-w-lg md:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                {ProjectComponent ? (
                  <ProjectComponent />
                ) : (
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
                )}
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </section>
  );
}
