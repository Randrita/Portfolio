import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HomeComponent from '@/components/home';
import ProjectsComponent from '@/components/projects';
import BlogsComponent from '@/components/blogs';
import content from '@/content.json';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/50 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground dark:text-white">{content.avatar.fallback}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold font-headline tracking-tight">{content.name}</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-sm mx-auto bg-transparent">
            <TabsTrigger value="home">HOME</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-8">
            <HomeComponent />
          </TabsContent>
          <TabsContent value="projects" className="mt-8">
            <ProjectsComponent />
          </TabsContent>
          <TabsContent value="blogs" className="mt-8">
            <BlogsComponent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
