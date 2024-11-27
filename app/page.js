"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import faqs from "/data/faqs";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CompanyCarousel from "@/components/ui/company-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Every sprint takes you <br />
          closer to success.
        </h1>
        <br />
        {/* <span className="flex mx-auto gap-3 sm:gap-4 items-center">
          <Image src="/images/logobg.png" alt="Logo" width={400} height={400} className="h-14 sm:h-24 w-auto object-contain" />
        </span> */}

        <p className="text-xl text-navy mb-10 max-w-3xl mx-auto">
          Boost your team's potential with our seamless project management tool!
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started
            <ChevronRight size={18} />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>

      <section id="features" className="bg-gray-100 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card key={index} className="bg-blue-100  ">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-blue-800">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted By Industry Leaders
          </h3>
          <CompanyCarousel></CompanyCarousel>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-5 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6=">
            Ready to transform your sprint flow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using Sprint Trekker to streamline
            their projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size='lg' className='animate-bounce'>
              Start for free <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* 'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
} */
