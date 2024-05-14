import Link from 'next/link';
import { Card,Cards } from 'fumadocs-ui/components/card';
export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to Deblok Documentation</h1>
      <p className="text-muted-foreground">
        {' '}
        <Cards className='w-[50%] mx-auto justify-center'>
          <Card title="Go to /docs" description='to get started' href="/docs"></Card>
          <Card title="Go to deblok.me" description='to view the Deblok homepage' href="https://deblok.me"></Card>
          <Card title="Go to status.deblok.me" description='to view the Deblok status' href="https://status.deblok.me"></Card>
          <Card title="Go to deblok.link/discord" description='to join the Deblok Discord' href="https://deblok.link/discord"></Card>
        </Cards>
        {' '}
        
      </p>
    </main>
  );
}
