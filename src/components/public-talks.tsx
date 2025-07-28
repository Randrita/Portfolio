import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import content from '@/content.json';
import ADKInstructions from './adk-instructions';
import RecognAIseComponent from './recognAIse';

const componentMap: { [key: string]: React.ComponentType } = {
  ADKInstructions,
  RecognAIse: RecognAIseComponent,
};

export default function PublicTalksComponent() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline text-center mb-8">Public Talks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.public_talks.map((talk, index) => {
          const TalkComponent = talk.component ? componentMap[talk.component] : null;
          return (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow group">
                  <div className="overflow-hidden rounded-t-lg">
                    <Image 
                      src={talk.image} 
                      alt={talk.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      data-ai-hint={talk.hint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{talk.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground truncate">{talk.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
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
