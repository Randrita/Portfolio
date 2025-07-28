import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Understanding Attention in Transformers',
    description: 'A deep dive into the attention mechanism that powers modern language models like BERT and GPT-4.',
    link: '#',
    image: 'https://placehold.co/600x400.png',
    hint: 'neural network'
  },
  {
    title: 'My Journey into Machine Learning',
    description: 'How I started my career in machine learning, the challenges I faced, and advice for newcomers.',
    link: '#',
    image: 'https://placehold.co/600x400.png',
    hint: 'person coding'
  },
  {
    title: 'Frontend Frameworks in the AI Era',
    description: 'Exploring how AI is changing frontend development, with a focus on Next.js and AI-powered components.',
    link: '#',
    image: 'https://placehold.co/600x400.png',
    hint: 'web development'
  },
];

export default function BlogsComponent() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline text-center mb-8">Thoughts & Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint={post.hint} />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{post.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 h-auto">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Read on Medium <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
