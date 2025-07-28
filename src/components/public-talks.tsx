import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import content from '@/content.json';
import ADKInstructions from './adk-instructions';
import { Badge } from './ui/badge';
import { ArrowRight, Presentation } from 'lucide-react';

const componentMap: { [key: string]: React.ComponentType } = {
  ADKInstructions,
};

export default function PublicTalksComponent() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline text-center mb-12">Public Talks</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {content.public_talks.map((talk, index) => {
          const TalkComponent = talk.component ? componentMap[talk.component] : null;
          const techStackArray = talk.techStack.split(', ');
          return (
            <Dialog key={index}>
              <div className="flex flex-col md:flex-row cursor-pointer group overflow-hidden border rounded-lg hover:shadow-[0_0_0_1px_hsl(var(--secondary))]">
                <div className="md:w-1/3 overflow-hidden">
                    <Image 
                      src={talk.image} 
                      alt={talk.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      data-ai-hint={talk.hint}
                    />
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader>
                    <CardTitle>{talk.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{talk.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {techStackArray.map(tech => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex-wrap justify-end gap-2">
                      {talk.slides_link && talk.slides_link !== '#' && (
                        <Button variant="outline" asChild>
                           <a href={talk.slides_link} target="_blank" rel="noopener noreferrer">
                              <Presentation className="mr-2 h-4 w-4" />
                              View Slides
                           </a>
                        </Button>
                      )}
                      <DialogTrigger asChild>
                        <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            View Details <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                  </CardFooter>
                </div>
              </div>
              <DialogContent className="max-w-lg md:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{talk.title}</DialogTitle>
                </DialogHeader>
                {TalkComponent ? (
                  <TalkComponent />
                ) : (
                  <div className="mt-4 prose prose-sm max-w-none dark:prose-invert">
                    <p>{talk.description}</p>
                    <h3 className="font-semibold mt-4">Technology Stack:</h3>
                    <p>{talk.techStack}</p>
                    {talk.link && talk.link !== '#' && (
                      <Button asChild className="mt-4">
                        <a href={talk.link} target="_blank" rel="noopener noreferrer">View Details</a>
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
