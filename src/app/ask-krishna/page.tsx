import { AskKrishnaForm } from "@/components/ask-krishna-form";

export default function AskKrishnaPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">
          The Wisdom of Krishna
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Here, you can ask questions about the significance of cows, their care, and their place in spirituality. 
          Receive answers inspired by the profound wisdom of Lord Krishna.
        </p>
      </div>
      <AskKrishnaForm />
    </div>
  );
}
