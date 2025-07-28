import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BlogsComponent() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>No blogs yet!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Check back later for my thoughts and insights.</p>
        </CardContent>
      </Card>
    </section>
  );
}
