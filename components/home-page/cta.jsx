"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema for form validation using Zod
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function CTA() {
  // Define the form using React Hook Form and Zod for validation
  const form =
    useForm <
    z.infer <
    typeof formSchema >>
      {
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
        },
      };

  // Define a submit handler for the form
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Perform action with form values (e.g., send to an API or console log)
    console.log(values);
  }

  return (
    <Section>
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="!my-0">Welcome to Jansen Accountants!</h2>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>
            Your trusted partner for accounting and financial services.
          </Balancer>
        </p>
        <p className="text-sm md:text-base opacity-80 max-w-2xl">
          At Jansen Accountants, we understand that your business needs reliable
          financial management to succeed. Our team of experienced professionals
          offers comprehensive services, including bookkeeping, tax planning,
          auditing, and financial consulting. Whether your a startup looking for
          guidance or an established company needing advanced financial
          strategies, we are here to help you achieve your business goals with
          precision and trust.
        </p>
        <p className="text-sm md:text-base opacity-80 max-w-2xl">
          Sign up with your email below to get started. Receive expert tips,
          industry updates, and exclusive insights tailored to your financial
          needs. Let Jansen Accountants be your partner in success.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex h-fit items-center justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="!mt-0 md:w-64"
                      placeholder="Your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Get Started</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
}

export default CTA;
