import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTrips, fetchPosts, Trip, Post } from "@/services/tripsApi";
import { Skeleton } from "@/components/ui/skeleton";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80";

export default function JourneysPage() {
  const [filter, setFilter] = useState("All");

  const { data: trips = [], isLoading: tripsLoading, isError: tripsError } = useQuery({
    queryKey: ["wp-trips"],
    queryFn: fetchTrips,
    staleTime: 5 * 60 * 1000,
  });

  const { data: posts = [], isLoading: postsLoading, isError: postsError } = useQuery({
    queryKey: ["wp-posts"],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
  });

  const isLoading = tripsLoading || postsLoading;
  const isError = tripsError && postsError;

  return (
    <main className="pb-14">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80" alt="Egypt Journeys" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <h1 className="heading-display text-white text-4xl md:text-6xl">Egypt Journeys</h1>
        </div>
      </section>

      <section className="section-cream py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Every Egypt journey we create is entirely bespoke — crafted around your interests, travel style, and sense of wonder. Browse our collection for inspiration, then let us tailor-make the perfect trip for you.
          </p>
        </div>

        {/* Trips from /trip endpoint */}
        {trips.length > 0 && (
          <>
            <h2 className="font-heading text-3xl text-center mb-8">Our Journeys</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
              {trips.map((j) => (
                <Link
                  to={`/journey/${j.slug}`}
                  key={j.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={j.image || FALLBACK_IMAGE}
                      alt={j.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-foreground mb-2">{j.title}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      {j.duration && (
                        <span className="text-xs bg-cream rounded-full px-3 py-1 font-body">{j.duration}</span>
                      )}
                      {j.price && (
                        <span className="text-gold font-bold text-sm font-body">from {j.price}</span>
                      )}
                    </div>
                    {j.description && (
                      <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">{j.description}</p>
                    )}
                    <span className="text-gold text-sm font-body font-bold">View Journey →</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Posts from /posts endpoint */}
        {posts.length > 0 && (
          <>
            <h2 className="font-heading text-3xl text-center mb-8">Latest Trips & Stories</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {posts.map((p) => (
                <Link
                  to={`/journey/${p.slug}`}
                  key={`post-${p.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={p.image || FALLBACK_IMAGE}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-foreground mb-2">{p.title}</h3>
                    {p.excerpt && (
                      <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">{p.excerpt}</p>
                    )}
                    <span className="text-gold text-sm font-body font-bold">View Journey →</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Loading */}
        {isLoading && (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <Skeleton className="h-72 w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-body">Unable to load journeys. Please try again later.</p>
          </div>
        )}
      </section>
    </main>
  );
}
