
'use client';

import { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users, LogOut, LayoutDashboard, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const recentSevas = [
  { name: 'Ramesh Patel', email: 'ramesh@example.com', seva: 'Go-Grasa Seva', amount: '₹1,100' },
  { name: 'Priya Sharma', email: 'priya.s@example.com', seva: 'Medical Seva', amount: '₹2,100' },
  { name: 'Amit Singh', email: 'amit.singh@example.com', seva: 'Vatsa Seva', amount: '₹5,100' },
  { name: 'Sunita Gupta', email: 'sunita@example.com', seva: 'Video Seva', amount: '₹1,100' },
  { name: 'Vikram Kumar', email: 'vikram.k@example.com', seva: 'Gau Daan', amount: '₹21,000' },
];

export default function AdminDashboardPage() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const data = [
      { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
      { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 },
    ];
    setChartData(data);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden w-64 flex-col border-r bg-background p-4 sm:flex">
        <div className="flex items-center gap-3 mb-8">
            <Image 
              src="/gallery/logo.png?v=3" 
              alt="Goshala Logo" 
              width={64} 
              height={64} 
              className="p-1 bg-logo-background rounded-full object-cover" 
            />
            <span className="text-xl font-bold text-primary">Admin Panel</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Button variant="secondary" className="justify-start gap-2">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Button>
        </nav>
        <div className="mt-auto">
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
             <Link href="/">
                <LogOut className="h-5 w-5" />
                Logout
            </Link>
          </Button>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
               <nav className="grid gap-4 text-lg font-medium">
                 <Link href="#" className="flex items-center gap-3 mb-4">
                    <Image 
                      src="/gallery/logo.png?v=3" 
                      alt="Goshala Logo" 
                      width={40} 
                      height={40} 
                      className="p-1 bg-logo-background rounded-full object-cover" 
                    />
                    <span className="text-lg font-bold text-primary">Admin Panel</span>
                  </Link>
                  <Button variant="secondary" className="justify-start gap-2">
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Button>
               </nav>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full justify-start gap-2" asChild>
                    <Link href="/">
                      <LogOut className="h-5 w-5" />
                      Logout
                    </Link>
                  </Button>
                </div>
            </SheetContent>
          </Sheet>
          <span className="text-lg font-semibold">Dashboard</span>
        </header>
        <main className="flex-1 p-4 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Seva Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹4,52,318.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Devotees
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sevas</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4 md:mt-8 grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Seva Contributions Overview</CardTitle>
                <CardDescription>
                  An overview of Seva financial contributions for the year.
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                   <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}K`} />
                    <Tooltip cursor={{fill: 'hsl(var(--secondary))'}} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                    <Legend />
                    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Recent Sevas</CardTitle>
                  <CardDescription>
                    Recent sevas from our devotees.
                  </CardDescription>
                </div>
                 <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Devotee</TableHead>
                      <TableHead className="text-right">Amount (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSevas.map((seva, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{seva.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {seva.email}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{seva.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
