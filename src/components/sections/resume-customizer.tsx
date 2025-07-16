"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { handleCustomizeResume } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  companyDescription: z.string().min(20, {
    message: "Company description must be at least 20 characters.",
  }).max(1000, {
    message: "Company description must be at most 1000 characters.",
  }),
  jobDescription: z.string().min(20, {
    message: "Job description must be at least 20 characters.",
  }).max(1000, {
    message: "Job description must be at most 1000 characters.",
  }),
});

export function ResumeCustomizerSection() {
  const [isPending, startTransition] = useTransition();
  const [customizedResume, setCustomizedResume] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyDescription: "",
      jobDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCustomizedResume(null);
    startTransition(async () => {
      const result = await handleCustomizeResume(values);
      if (result.success && result.data) {
        setCustomizedResume(result.data.customizedResume);
        toast({
          title: "Success!",
          description: "Your customized resume has been generated.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.error || "There was a problem with your request.",
        });
      }
    });
  }

  return (
    <section id="ai-resume" className="py-24 bg-muted/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            AI-Powered Resume
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Paste in a company and job description to see how AI can tailor my resume for the perfect fit.
          </p>
        </div>
        
        <Card className="shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle className="font-headline">Tailor My Resume</CardTitle>
                <CardDescription>
                  Our AI will rewrite my resume to highlight the skills and experience most relevant to the role.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the company's mission, values, and industry..."
                          className="resize-y min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the job description here..."
                          className="resize-y min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                  {isPending ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Customized Resume
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        {isPending && (
          <div className="mt-8 text-center">
            <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">AI is working its magic...</p>
          </div>
        )}

        {customizedResume && (
          <div className="mt-8">
            <h3 className="font-headline text-2xl font-bold mb-4">Your Customized Resume:</h3>
            <Card>
              <CardContent className="p-6">
                <pre className="whitespace-pre-wrap font-body text-sm leading-relaxed">
                  {customizedResume}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
