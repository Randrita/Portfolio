import { Github, Linkedin, Instagram, Cpu, Database, Code, Cloud, BrainCircuit, BarChart, Server, GraduationCap } from 'lucide-react';
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
  "AI": <BrainCircuit className="h-5 w-5" />,
  "Snowflake": <Database className="h-5 w-5" />,
  "Grafana": <BarChart className="h-5 w-5" />
};

export default function HomeComponent() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <Avatar className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-secondary">
          <AvatarImage src={content.avatar.src} alt={content.avatar.alt} data-ai-hint={content.avatar.hint} />
          <AvatarFallback>{content.avatar.fallback}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight">{content.name}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-1">{content.tagline}</p>
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
        <h2 className="text-3xl font-bold font-headline text-center mb-2">Work Experience</h2>
        <p className="text-center text-muted-foreground mb-12">My professional journey and key roles over the years.</p>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-px bg-border ml-3.5" aria-hidden="true"></div>
          <div className="space-y-8">
            {content.experience.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                 <div className="flex-shrink-0 w-8 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 mt-1"></div>
                 </div>
                <div className="ml-4 flex-grow">
                  <Card>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    {exp.description && (
                      <CardContent>
                        <p className="text-sm">{exp.description}</p>
                      </CardContent>
                    )}
                  </Card>
                </div>
                <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-full pr-4">
                  <span className="bg-background text-muted-foreground text-sm px-2 py-1 rounded-md">{exp.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <section>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.education.map((edu, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <p className="text-sm">{edu.degree}</p>
                    <div className="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground mt-1">
                      <span>{edu.grade}</span>
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {content.skills.map(skill => (
                <div key={skill} className="flex items-center gap-2 bg-primary/10 text-primary-foreground dark:bg-[#6A0DAD]/70 dark:text-white font-medium text-sm px-3 py-1.5 rounded-full transition-colors hover:bg-secondary hover:text-secondary-foreground dark:hover:bg-[#580A8D]">
                  {skillIcons[skill] || <Code className="h-5 w-5" />}
                  <span>{skill}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm sm:text-base">
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
                <h3 className="font-semibold text-base sm:text-lg">{pub.title}</h3>
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
