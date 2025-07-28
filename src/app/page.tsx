import { Bot } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HomeComponent from '@/components/home';
import ProjectsComponent from '@/components/projects';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold font-headline tracking-tight">Randrita Sarkar</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="home">HOME</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-8">
            <HomeComponent />
          </TabsContent>
          <TabsContent value="projects" className="mt-8">
            <ProjectsComponent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
