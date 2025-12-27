import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Gift, Users, MessageSquare, Scroll, Heart, ShoppingBag, Package } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with CTA */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-ancient text-xl tracking-wider uppercase text-foreground">Sufferology</span>
          <div className="hidden md:flex items-center gap-2">
            <div className="group relative">
              <Button size="sm" className="font-medium">
                Buy for Yourself
              </Button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-base font-medium bg-accent text-accent-foreground px-4 py-3 rounded-md shadow-lg whitespace-nowrap">
                  Digital or physical copy for personal use.
                </p>
              </div>
            </div>
            <div className="group relative">
              <Button size="sm" variant="outline" className="font-medium border-2">
                Pay It Forward
              </Button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-base font-medium bg-accent text-accent-foreground px-4 py-3 rounded-md shadow-lg whitespace-nowrap">
                  You choose the recipient and delivery method.
                </p>
              </div>
            </div>
            <div className="group relative">
              <Button size="sm" variant="outline" className="font-medium border-2">
                Donate a Copy
              </Button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-base font-medium bg-accent text-accent-foreground px-4 py-3 rounded-md shadow-lg whitespace-nowrap">
                  We match your gift with someone requesting help.
                </p>
              </div>
            </div>
            <div className="group relative">
              <Button size="sm" variant="secondary" className="font-medium">
                Buy in Bulk
              </Button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-base font-medium bg-accent text-accent-foreground px-4 py-3 rounded-md shadow-lg whitespace-nowrap">
                  Discounted pricing for groups and ministries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 pt-28">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI1MCIgeT0iMTAwIiBmb250LXNpemU9IjEyMCIgb3BhY2l0eT0iMC4xIj7XkDwvdGV4dD48L3N2Zz4=')] bg-repeat"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="mb-6 inline-block">
            <Scroll className="w-16 h-16 text-accent mx-auto mb-4" />
          </div>
          
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Living on the defensive? Seems like life keeps knocking you down when you get up? Give life to someone in their suffering so they can conquer the purpose in pain.
          </p>
          
          
          <p className="text-sm text-muted-foreground mt-10 italic">
            "He was pierced for our transgressions, He was crushed for our iniquities" — Isaiah 53:5
          </p>
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

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Understanding Suffering Through Scripture
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-playfair text-xl italic text-accent">Sufferology</span> is not just a devotional—it's an invitation to be armored up and truly rejoice in affliction.
            </p>
            
            <p className="text-lg leading-relaxed">
              Everyone faces suffering. But what if your pain has purpose? What if the very Hebrew words used to describe affliction, refinement, and redemption unlock a deeper understanding of God's heart toward you?
            </p>
            
            <p className="text-lg leading-relaxed">
              Discover the Hebrew roots of suffering and the profound hope found in Scripture. A devotional journey through the ancient words that reveal purpose in pain.
            </p>
          </div>
        </div>
      </section>

      {/* Four-Column Engagement Grid */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ways to Get the Book
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Whether for yourself, a friend, or a ministry—there's a path for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Buy for Yourself */}
            <Card className="border-2 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <ShoppingBag className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  Buy for Yourself
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Digital or physical copy for personal use.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4 flex-grow text-sm">
                  Purchase a personal copy of Sufferology for your own study and reflection.
                </p>
                <div className="space-y-2 mb-4 text-sm text-foreground/70">
                  <p><strong>Digital Access</strong> — ePub + PDF, secure account-based access.</p>
                  <p><strong>Physical Paperback</strong> — International shipping; multiple languages.</p>
                </div>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  Delivery times depend on our print partner. Physical books arrive within 7–14 business days.
                </p>
                <Button className="w-full font-medium mt-auto">
                  Buy Your Copy
                </Button>
              </CardContent>
            </Card>

            {/* Column 2: Pay It Forward */}
            <Card className="border-2 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <Gift className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  Pay It Forward
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You choose the recipient and delivery method.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4 flex-grow text-sm">
                  Gift this book directly to someone you know who is walking through suffering.
                </p>
                <div className="space-y-2 mb-4 text-sm text-foreground/70">
                  <p><strong>Digital Access</strong> — Delivered to recipient account.</p>
                  <p><strong>Physical Paperback</strong> — Shipped directly to recipient.</p>
                </div>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  Include recipient name, email (digital), or shipping address (physical). Add a personal message.
                </p>
                <Button className="w-full font-medium mt-auto">
                  Gift This Book
                </Button>
              </CardContent>
            </Card>

            {/* Column 3: Donate a Copy */}
            <Card className="border-2 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <Heart className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  Donate a Copy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We match your gift with someone requesting help.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4 flex-grow text-sm">
                  Sponsor a book for someone in need. Donated copies are sent to readers who request one.
                </p>
                <div className="space-y-2 mb-4 text-sm text-foreground/70">
                  <p><strong>Format:</strong> Digital Access or Physical Paperback</p>
                  <p><strong>Quantity:</strong> 1, 3, 5, or custom</p>
                  <p><strong>Monthly:</strong> Optional recurring subscription</p>
                </div>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  Sponsored books are gifts and are not tax-deductible donations.
                </p>
                <Button className="w-full font-medium mt-auto">
                  Donate a Copy
                </Button>
              </CardContent>
            </Card>

            {/* Column 4: Buy in Bulk */}
            <Card className="border-2 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <Package className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  Buy in Bulk
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discounted pricing for groups and ministries.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4 flex-grow text-sm">
                  Designed for churches, workshops, recovery groups, prisons, and study cohorts.
                </p>
                <div className="space-y-2 mb-4 text-sm text-foreground/70">
                  <p><strong>Format:</strong> Digital Access or Physical Paperback</p>
                  <p><strong>Quantity:</strong> 10, 25, 50, 100+</p>
                </div>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  Bulk orders fulfilled using author copies; shipped in batches for group distribution.
                </p>
                <Button className="w-full font-medium mt-auto">
                  Request Bulk Order
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-lg md:text-xl text-foreground mt-10 font-medium">
            Prefer to order through Amazon? <a href="#" className="text-accent underline hover:no-underline">Available on Amazon.</a>
          </p>
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
            Invite our trained media team to speak at your church, conference, or ministry event. 
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

      {/* FAQ Section */}
      <FAQ />

      {/* Media Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Media Inquiries
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            For all podcasts, interviews, or other media/press related inquiries, please contact our media team directly.
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
            Sufferology
          </p>
          
          <p className="text-primary-foreground/80 mb-6 italic">
            "The LORD is close to the brokenhearted and saves those who are crushed in spirit." — Psalm 34:18
          </p>
          
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sufferology Ministry. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
