import { Github, Linkedin, Instagram, Cpu, Database, Code, Cloud, BrainCircuit, BarChart, Server } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import content from '@/content.json';

const skillIcons: { [key: string]: React.ReactNode } = {
  "Python": <Code className="h-5 w-5" />,
  "PySpark": <Cpu className="h-5 w-5" />,
  "DBMS (SQL)": <Database className="h-5 w-5" />,
  "Unix Tools": <Server className="h-5 w-5" />,
  "Unix Shell Scripting": <Code className="h-5 w-5" />,
  "Java": <Code className="h-5 w-5" />,
  "Git": <Github className="h-5 w-5" />,
  "EDA": <BarChart className="h-5 w-5" />,
  "Machine Learning": <BrainCircuit className="h-5 w-5" />,
  "Power BI": <BarChart className="h-5 w-5" />,
  "Deep Learning (CNN)": <BrainCircuit className="h-5 w-5" />,
  "Kafka": <Server className="h-5 w-5" />,
  "Spark Streaming": <Cpu className="h-5 w-5" />,
  "GCP": <Cloud className="h-5 w-5" />,
  "AI": <BrainCircuit className="h-5 w-5" />
};

export default function HomeComponent() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20">
          <AvatarImage src={content.avatar.src} alt={content.avatar.alt} data-ai-hint={content.avatar.hint} />
          <AvatarFallback>{content.avatar.fallback}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold font-headline tracking-tight">{content.name}</h1>
          <p className="text-xl text-muted-foreground mt-1">{content.tagline}</p>
          <div className="mt-4 flex justify-center md:justify-start gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={content.contact.github} target="_blank" rel="noopener noreferrer" aria-label="Github"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={content.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{edu.details}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {content.skills.map(skill => (
              <div key={skill} className="flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full transition-colors hover:bg-secondary hover:text-secondary-foreground">
                {skillIcons[skill] || <Code className="h-5 w-5" />}
                <span>{skill}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.experience.map((exp, index) => (
              <div key={index}>
                <h3 className="font-semibold">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.role} | {exp.duration}</p>
                <p className="mt-1">{exp.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {content.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
         <Card>
          <CardHeader>
            <CardTitle>Publications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.publications.map((pub, index) => (
              <div key={index}>
                <h3 className="font-semibold">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">{pub.conference || pub.doi}</p>
                {pub.link && (
                  <Button variant="link" className="p-0 h-auto mt-1" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">Read Paper</a>
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
