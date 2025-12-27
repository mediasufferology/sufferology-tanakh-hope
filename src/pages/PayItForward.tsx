import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gift, ArrowLeft, Heart, BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PayItForward = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-6 h-6" />
            <span className="font-ancient text-xl tracking-wider uppercase">Sufferology</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-20 h-20 text-accent mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Pay It Forward
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Gift the book of Sufferology to someone who is walking through suffering. 
            You choose the recipient and delivery method.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Why Gift This Book?
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Everyone faces suffering at some point in their life. When someone you love is going through 
                  a difficult season, words often fail us. But a thoughtful gift can speak volumes.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  <span className="font-playfair italic text-accent">Sufferology</span> offers hope, 
                  biblical wisdom, and a deeper understanding of God's purpose in pain. It's more than 
                  a book—it's an embrace wrapped in scripture.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-accent" />
                    What's Included
                  </h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Personal message from you to the recipient</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Choice of digital access or physical paperback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Direct delivery to recipient's email or address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Gift notification with your heartfelt note</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 bg-card">
                <CardContent className="pt-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                    Pricing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-lg text-foreground">Digital Access (ePub + PDF)</span>
                      <span className="text-2xl font-bold text-accent">$14.99</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-lg text-foreground">Physical Paperback</span>
                      <span className="text-2xl font-bold text-accent">$24.99</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic pt-2">
                      Physical books include free shipping within the US. International shipping rates apply.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-2 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6 text-center">
                    Send a Gift
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-base font-medium text-foreground">Your Name</label>
                      <Input 
                        type="text" 
                        placeholder="Enter your name"
                        className="bg-background py-6 text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-medium text-foreground">Your Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com"
                        className="bg-background py-6 text-lg"
                      />
                    </div>

                    <div className="border-t border-border pt-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-accent" />
                        Recipient Information
                      </h4>
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-medium text-foreground">Recipient's Name</label>
                      <Input 
                        type="text" 
                        placeholder="Their name"
                        className="bg-background py-6 text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-medium text-foreground">Recipient's Email</label>
                      <Input 
                        type="email" 
                        placeholder="their@email.com"
                        className="bg-background py-6 text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-medium text-foreground">Personal Message (Optional)</label>
                      <Textarea 
                        placeholder="Write a heartfelt message to include with the gift..."
                        className="bg-background min-h-[120px] text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-base font-medium text-foreground">Format</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          type="button"
                          variant="outline" 
                          className="py-8 text-lg border-2 hover:bg-accent hover:text-accent-foreground transition-all"
                        >
                          Digital
                          <span className="block text-sm opacity-70">$14.99</span>
                        </Button>
                        <Button 
                          type="button"
                          variant="outline" 
                          className="py-8 text-lg border-2 hover:bg-accent hover:text-accent-foreground transition-all"
                        >
                          Paperback
                          <span className="block text-sm opacity-70">$24.99</span>
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full py-8 text-xl font-semibold mt-4">
                      <Gift className="w-6 h-6 mr-3" />
                      Send This Gift
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Secure checkout. Your recipient will receive a notification about your gift.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl italic text-foreground/80 leading-relaxed mb-6">
            "Bear one another's burdens, and so fulfill the law of Christ."
          </p>
          <p className="text-lg text-muted-foreground">— Galatians 6:2</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="text-accent hover:underline text-lg">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default PayItForward;
