"use client";

import { CheckCircle, Layers, FileSearch, Zap, ShieldCheck, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const features = [
    { text: "Enterprise search engine for documents on a private network.", icon: <FileSearch className="h-5 w-5 text-primary" /> },
    { text: "Whitelisted directory indexing for security.", icon: <ShieldCheck className="h-5 w-5 text-primary" /> },
    { text: "Near real-time document search.", icon: <Zap className="h-5 w-5 text-primary" /> },
    { text: "Automatically correlates files by type.", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
];

const techStack = ["Python", "Flask", "Elasticsearch"];

export default function DocSearchEngineComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm text-muted-foreground mt-2">
            An enterprise search engine for documents on a private network. It features whitelisted directory indexing and near real-time document search, automatically correlating files by type for a seamless experience. This project uses a custom script to automatically correlate files and their types, providing a seamless experience without needing an active internet connection.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="mt-2 space-y-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    {feature.icon}
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                </li>
            ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map(tech => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
        </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <Button asChild>
          <a href="https://github.com/Randrita/Document_Search_Engine" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
