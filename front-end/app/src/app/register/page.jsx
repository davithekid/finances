"use client";

import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/themes/mode-toggle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Register = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2">
       
        <div className="bg-muted hidden lg:block border-l" />
         <div className="max-w-xs m-auto w-full flex flex-col items-center">
          <ModeToggle />
          <Logo className="h-9 w-9" />
          <p className="mt-4 text-xl font-semibold tracking-tight">
            Bem-vindo (a)
          </p>

          <Form {...form}>
            <form className="w-full space-y-4 my-7" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input type="username" placeholder="Nome" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="username" placeholder="Username" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="username" placeholder="Username" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="*******" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Passoword</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="*******" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

            </form>
          </Form>

          <p className="mt-5 text-sm text-center">
            Já possui uma conta?
            <Link href="/login" className="ml-1 underline text-muted-foreground">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
