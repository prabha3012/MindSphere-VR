import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";
import { toast } from "sonner";

export function Contact() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name");
    toast.success(`Thanks ${name || "there"}! We'll be in touch.`);
    form.reset();
  }

  return (
    <section id="contact" className="relative py-20 scroll-mt-24">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">Contact Us</h2>
        <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" name="email" required placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" name="message" required rows={5} placeholder="How can we help?" />
          </div>
          <Button type="submit" className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-teal-400 text-white shadow-lg transition-transform hover:scale-[1.02] hover:opacity-90">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
