import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import content from '@/content.json';
import ADKInstructions from './adk-instructions';
import RecognAIseComponent from './recognAIse';
import FaceMeshAppComponent from './face-mesh-app';
import DocSearchEngineComponent from './doc-search-engine';
import ShipTrackingComponent from './ship-tracking';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';

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
      <h2 className="text-3xl font-bold font-headline text-center mb-12">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.projects.map((project, index) => {
          const ProjectComponent = project.component ? componentMap[project.component] : null;
          const techStackArray = project.techStack.split(', ');
          return (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="flex flex-col cursor-pointer group">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                     <div className="flex flex-wrap gap-2">
                      {techStackArray.map(tech => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                      <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          View Project <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                  </CardFooter>
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
