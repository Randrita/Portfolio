import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomeComponent() {

  const skills = [
    'Python', 'PySpark', 'DBMS(SQL)', 'Unix Tools', 'Unix Shell Scripting', 'Java',
    'Git', 'EDA', 'Machine Learning', 'Power BI', 'Deep Learning (CNN)', 'Kafka', 'Spark Streaming'
  ];

  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20">
          <AvatarImage src="https://placehold.co/200x200.png" alt="Randrita Sarkar" data-ai-hint="professional portrait" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold font-headline tracking-tight">Randrita Sarkar</h1>
          <p className="text-xl text-muted-foreground mt-1">A young mind ready to face a learning curve</p>
          <div className="mt-4 flex justify-center md:justify-start gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:randritas@gmail.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:+917980773303" aria-label="Phone"><Phone className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Randrita" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/randritas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
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
            <div>
              <h3 className="font-semibold">B.P. Poddar Institute of Management and Technology</h3>
              <p className="text-sm text-muted-foreground">B.Tech in Information Technology | CGPA: 9.38/10 | 2019 - 2023</p>
            </div>
            <div>
              <h3 className="font-semibold">Dum Dum Road Govt. Sponsored High School for Girls</h3>
              <p className="text-sm text-muted-foreground">WBCHSE (Class XII), Aggregate: 72% | 2016 - 2018</p>
              <p className="text-sm text-muted-foreground">WBBSE (Class X), Aggregate: 88% | 2015 - 2016</p>
            </div>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <div key={skill} className="bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full">{skill}</div>
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
            <div>
              <h3 className="font-semibold">Tata Consultancy Services</h3>
              <p className="text-sm text-muted-foreground">Assistant System Engineer | Feb 2024 - Aug 2024</p>
              <p className="mt-1">Responsible in developing seamless query tool using servicenow.</p>
            </div>
            <div>
              <h3 className="font-semibold">Statts CyberSecurity Solutions</h3>
              <p className="text-sm text-muted-foreground">Data Analyst | Feb 2023 - Feb 2024</p>
              <p className="mt-1">Responsible in performing exploratory data analysis using python libraries, power BI and MS Excel.</p>
            </div>
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
              <li>Secured 1st runner-up position in HackFest 2022 organised by IIT(ISM) Dhanbad.</li>
              <li>Secured 1st runner-up position in Technovation 2022 organised by Heritage Institute of Technology, Kolkata.</li>
              <li>Secured 2nd runner-up position in YOUNG ENGINEERS AWARD 2022 organised by IET Kolkata Local Network.</li>
              <li>Selected as a Problem Setter for the inter college coding competition, SMARTCODER 2.22.</li>
              <li>Invited as a Speaker multiple times by GOOGLE DEVELOPERS GROUPS.</li>
              <li>Secured 1st position Twice in intra-college poster making competition.</li>
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
            <div>
              <h3 className="font-semibold">Breast Cancer Detection using Transfer Learning Techniques in Convolutional Neural Networks</h3>
              <p className="text-sm text-muted-foreground">7th International Conference EAIT'22</p>
            </div>
            <div>
              <h3 className="font-semibold">Sentiment Analysis on Twitter Data: A Comparative Approach</h3>
              <p className="text-sm text-muted-foreground">DOI: 10.47760/ijcsma.2021.v09i10.001</p>
               <Button variant="link" className="p-0 h-auto mt-1" asChild>
                <a href="https://doi.org/10.47760/ijcsma.2021.v09i10.001" target="_blank" rel="noopener noreferrer">Read Paper</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
