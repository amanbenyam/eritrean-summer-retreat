import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Morning Hike 2024",
      description: "Community members enjoying the scenic mountain trails",
    },
    {
      id: 2,
      title: "Traditional Dance",
      description: "ጓይላ celebration under the stars",
    },
    {
      id: 3,
      title: "Community Barbeque",
      description: "Sharing food and laughter together",
    },
    {
      id: 4,
      title: "Flag Ceremony",
      description: "Honoring our heritage as one community",
    },
    {
      id: 5,
      title: "Bonfire Night",
      description: "Stories and connections around the fire",
    },
    {
      id: 6,
      title: "Group Photo",
      description: "Memories that last a lifetime",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-body tracking-widest uppercase text-sm mb-4">
              Memories
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground font-bold mb-6">
              Previous Retreats
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Relive the beautiful moments from our past gatherings. Each retreat brings new memories, 
              deeper connections, and shared joy.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-muted-foreground/30" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl text-cream font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="font-body text-cream/80 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/50 px-6 py-3 rounded-full">
              <Camera className="w-5 h-5 text-primary" />
              <span className="font-body text-muted-foreground">
                More photos from previous retreats coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
