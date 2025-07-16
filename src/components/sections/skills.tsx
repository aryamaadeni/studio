"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { RESUME_DATA, type SkillCategory } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  level: {
    label: "Proficiency",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function SkillsSection() {
  const categories = Object.keys(RESUME_DATA.skills) as SkillCategory[];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            My proficiency in various technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-[250px]">
                  <ResponsiveContainer>
                    <BarChart
                      data={RESUME_DATA.skills[category]}
                      layout="vertical"
                      margin={{ left: 10, right: 10 }}
                    >
                      <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                      <XAxis type="number" hide />
                      <YAxis
                        dataKey="name"
                        type="category"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        width={110}
                        tick={{ fill: "hsl(var(--foreground))" }}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
                      <Bar dataKey="level" radius={5} fill="var(--color-level)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
