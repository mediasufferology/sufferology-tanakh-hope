import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Sufferology?",
    answer: "Sufferology is a Christ-centered devotional that explores the Hebrew roots of suffering and the profound hope found in Scripture. It's an invitation to be armored up and truly rejoice in affliction."
  },
  {
    question: "What formats are available?",
    answer: "Digital Access includes ePub and PDF formats, provided securely via your account for individual use. Physical Paperback is available with international shipping and multiple language options."
  },
  {
    question: "How does 'Pay It Forward' work?",
    answer: "You can gift this book directly to someone walking through suffering. Choose digital (delivered to their account) or physical (shipped to their address). You can include a personal message."
  },
  {
    question: "What is 'Donate a Copy'?",
    answer: "Sponsor a book for someone in need. We match your gift with readers who request one. Note: Sponsored books are gifts and are not tax-deductible donations."
  },
  {
    question: "How long does shipping take?",
    answer: "Physical books are printed and shipped by third-party print partners. Delivery times may vary by location, generally 7–14 business days."
  },
  {
    question: "Is Sufferology available on Amazon?",
    answer: "Yes! Sufferology is independently produced and distributed. Amazon is a separate platform offering additional purchasing options."
  },
  {
    question: "Why are there different ways to get the book?",
    answer: "We offer direct gifting, sponsorships, and Amazon ordering so readers can choose the option that best fits their situation."
  },
  {
    question: "What about bulk orders?",
    answer: "Bulk orders are designed for churches, workshops, recovery groups, prisons, and study cohorts. Quantities of 10, 25, 50, or 100+ are available with discounted group pricing."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="text-left font-playfair text-lg font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
