import { Section } from "../../ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string;
}

function Testimonial({ content, author, role, image }: TestimonialProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-card p-6">
      <p className="text-lg text-muted-foreground">"{content}"</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      content: "This tool has revolutionized my content strategy. I can reach all my platforms with just one click!",
      author: "Jane D.",
      role: "Content Creator",
      image: "/testimonials/jane.jpg"
    },
    {
      content: "The scheduling feature has doubled my engagement rates. It's a game-changer!",
      author: "Alex R.",
      role: "Social Media Manager",
      image: "/testimonials/alex.jpg"
    },
    {
      content: "I love the customization options. My posts look perfect on every platform.",
      author: "Sarah L.",
      role: "Small Business Owner",
      image: "/testimonials/sarah.jpg"
    }
  ];

  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-12">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          What Our Users Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
} 