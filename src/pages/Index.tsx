import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Gift, Users, MessageSquare, Scroll } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI1MCIgeT0iMTAwIiBmb250LXNpemU9IjEyMCIgb3BhY2l0eT0iMC4xIj7XkDwvdGV4dD48L3N2Zz4=')] bg-repeat"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="mb-6 inline-block">
            <Scroll className="w-16 h-16 text-accent mx-auto mb-4" />
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Sufferology
          </h1>
          
          <p className="font-playfair text-2xl md:text-3xl text-muted-foreground mb-4 italic">
            In the Tanakh
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover the Hebrew roots of suffering and the profound hope found in Scripture. 
            A devotional journey through the ancient words that reveal purpose in pain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="font-medium">
              Purchase Book
            </Button>
            <Button size="lg" variant="outline" className="font-medium border-2">
              Gift It Forward
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 italic">
            "He was pierced for our transgressions, He was crushed for our iniquities" — Isaiah 53:5
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Understanding Suffering Through Scripture
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-playfair text-xl italic text-accent">Sufferology</span> is not just a book—it's an invitation to encounter God through the lens of Hebrew word study and the sacred text of the Tanakh (Old Testament).
            </p>
            
            <p className="text-lg leading-relaxed">
              Every believer faces suffering. But what if your pain has purpose? What if the very Hebrew words used to describe affliction, refinement, and redemption unlock a deeper understanding of God's heart toward you?
            </p>
            
            <p className="text-lg leading-relaxed">
              This devotional explores the ancient Hebrew language to illuminate the nature of suffering—not to explain it away, but to reveal the Messiah who walked through it, and invites us to trust Him in the midst of it.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            What You'll Discover
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                  Hebrew Word Studies
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Dive deep into the original Hebrew words for suffering, refinement, and redemption—uncovering layers of meaning lost in translation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Scroll className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                  Messianic Hope
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  See Jesus in the Old Testament like never before—His suffering foretold, His purpose revealed, His glory anticipated.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Gift className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                  Purposeful Suffering
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Learn how God uses trials not to break us, but to refine us—like gold in the fire—for His glory and our good.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift It Forward Section */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-16 h-16 text-accent mx-auto mb-6" />
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pay Hope Forward
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Suffering isolates. Hope connects. When you gift <span className="italic">Sufferology</span>, 
            you're not just sharing a book—you're extending comfort, Biblical truth, and the reminder 
            that no one suffers alone.
          </p>
          
          <p className="text-xl font-playfair italic text-foreground mb-8">
            "Comfort those in any trouble with the comfort we ourselves receive from God." — 2 Corinthians 1:4
          </p>
          
          <Button size="lg" className="font-medium">
            Sponsor a Copy Today
          </Button>
        </div>
      </section>

      {/* Hebrew Learning Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 text-accent mx-auto mb-6" />
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join a Hebrew Learning Cohort
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to go deeper? Join a guided cohort experience where we study the Hebrew roots 
            of Scripture together, exploring the beauty and depth of God's Word in its original language.
          </p>
          
          <Card className="max-w-md mx-auto border-2">
            <CardContent className="pt-6">
              <h3 className="font-playfair text-xl font-semibold mb-4 text-foreground">
                Sign Up for Updates
              </h3>
              
              <form className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-background"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background"
                />
                <Button type="submit" className="w-full font-medium">
                  Join the Waitlist
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                We'll notify you when new cohorts open.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Speaking Engagements Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquare className="w-16 h-16 text-accent mx-auto mb-6" />
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Speaking & Workshops
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Invite our team to speak at your church, conference, or ministry event. 
            We offer workshops and teachings on Biblical suffering, Hebrew word study, 
            and finding hope in Christ through the Scriptures.
          </p>
          
          <p className="text-base text-muted-foreground mb-6">
            All inquiries are handled by our media team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="border-2 font-medium">
              Request a Speaker
            </Button>
            <a 
              href="mailto:media.sufferology@gmail.com" 
              className="text-accent hover:underline font-medium"
            >
              media.sufferology@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Media Inquiries
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            For all media requests, interviews, and press inquiries, please contact our media team directly.
          </p>
          
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg font-medium text-foreground mb-2">
                Media Team Contact
              </p>
              <a 
                href="mailto:media.sufferology@gmail.com" 
                className="text-xl text-accent hover:underline font-medium"
              >
                media.sufferology@gmail.com
              </a>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  This is a collective mission. All communication flows through our media team to ensure 
                  clarity and consistency in our message of hope through Scripture.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-playfair text-2xl font-semibold mb-4">
            Sufferology – In the Tanakh
          </p>
          
          <p className="text-primary-foreground/80 mb-6 italic">
            "The LORD is close to the brokenhearted and saves those who are crushed in spirit." — Psalm 34:18
          </p>
          
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sufferology Ministry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
