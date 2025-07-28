import Image from 'next/image';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomeComponent() {
  const communityEvents = [
    {
      title: 'Google I/O 2023 Watch Party',
      description: 'Hosted a local watch party for Google I/O, discussing the latest announcements in AI and web development with the community.',
      image: 'https://placehold.co/600x400.png',
      hint: 'tech conference'
    },
    {
      title: 'DevFest 2022 Speaker',
      description: 'Presented a session on "State Management in Modern Web Apps" at the annual DevFest conference.',
      image: 'https://placehold.co/600x400.png',
      hint: 'presentation stage'
    },
    {
      title: 'AI Hackathon Mentor',
      description: 'Mentored teams at a 24-hour AI hackathon, helping them build innovative projects using new machine learning models.',
      image: 'https://placehold.co/600x400.png',
      hint: 'people coding'
    },
  ];

  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20">
          <AvatarImage src="https://placehold.co/200x200.png" alt="User's Photo" data-ai-hint="professional portrait" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold font-headline tracking-tight">Jane Doe</h1>
          <p className="text-xl text-muted-foreground mt-1">Senior AI Engineer & Community Builder</p>
          <div className="mt-4 flex justify-center md:justify-start gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Google</h3>
              <p className="text-sm text-muted-foreground">Senior AI Engineer | 2020 - Present</p>
            </div>
            <div>
              <h3 className="font-semibold">Microsoft</h3>
              <p className="text-sm text-muted-foreground">Software Engineer | 2018 - 2020</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Published 3 papers on Large Language Models.</li>
              <li>Google Developer Expert in Machine Learning.</li>
              <li>Winner of the 2021 Innovation Award.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Community Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <Image src={event.image} alt={event.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={event.hint} />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{event.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
         <Card>
          <CardHeader>
            <CardTitle>Research Papers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">The Architecture of Modern LLMs</h3>
              <p className="text-sm text-muted-foreground">Published in Journal of AI Research, 2023</p>
              <Button variant="link" className="p-0 h-auto mt-1" asChild>
                <a href="#">Read Paper</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
