/**
 * Pointe4Art Website Content & Configuration
 * ---------------------------------------------------------------------------
 * Edit this file to customize your organization details, contact info,
 * and exhibitions/events shown on https://pointe4art.github.io
 */

window.SITE_DATA = {
  organization: {
    name: "Pointe4Art",
    tagline: "Youth Arts, Leadership & Community Service Foundation",
    statusBadge: "501(c)(3) Youth Nonprofit Organization",
    nonprofitLegal: "501(c)(3) Nonprofit Organization (EIN: 42-4891693)",
    mission:
      "Our mission is to make arts education more accessible to young people by providing free dance instruction, supporting local arts programs, and inspiring creativity, student leadership, and community service.",
    communityDescription:
      "From charity art exhibitions and benefit dance performances to school art supply donations, Pointe4Art members channel their passion for painting, photography, and performing arts into lasting community impact."
  },

  contact: {
    location: "San Jose, CA",
    email: "pointe4art@gmail.com",
      },

  /**
   * Exhibitions, Camps, and Community Events
   * Modeled after yhcca.com's chronological showcase sections.
   * Categories: "exhibition" | "camp" | "community"
   */
  events: [
    {
      id: "sixth-exhibition-first",
      category: "exhibition",
      categoryLabel: "Art Exhibition",
      date: "Autumn 2026",
      title: "Annual “Youth on Pointe & Canvas – Telling Stories Through Lenses, Paintbrushes, and Movement” First Art Exhibition",
      description:
        "Showcasing original oil paintings, watercolors, photography, and mixed-media works created by youth artists exploring cultural heritage and expressive movement.",
      images: [
        {
          src: "exhibition-gallery-1.svg",
          caption: "Opening Reception & Youth Canvas Showcase"
        },
        {
          src: "exhibition-gallery-2.svg",
          caption: "Award-Winning Watercolor & Brushwork Collection"
        },
        {
          src: "exhibition-gallery-3.svg",
          caption: "Pointe & Performing Arts Photography Series"
        },
        {
          src: "exhibition-gallery-4.svg",
          caption: "Young Artists Panel & Curator Walkthrough"
        }
      ]
    },
    {
      id: "sixth-exhibition-highlights",
      category: "camp",
      categoryLabel: "Highlights",
      date: "Summer 2026",
      title: "Annual “Youth on Pointe & Canvas – Telling Stories Through Lenses and Paintbrushes” Highlights",
      description:
        "Memorable moments from our cross-cultural showcase, featuring live classical and contemporary dance interludes alongside youth fine art critiques and community awards.",
      images: [
        {
          src: "highlights-1.svg",
          caption: "Youth Ensemble Classical & Contemporary Pointe Performance"
        },
        {
          src: "highlights-2.svg",
          caption: "Youth Leadership & Artistic Excellence Awards Ceremony"
        },
        {
          src: "highlights-3.svg",
          caption: "Live Painting & Collaborative Mural Workshop"
        },
        {
          src: "highlights-4.svg",
          caption: "Guest Mentors & Student Artists Group Portrait"
        }
      ]
    },
    {
      id: "summer-exchange-camp",
      category: "camp",
      categoryLabel: "Youth Camp",
      date: "July 2026",
      title: "Summer “Youth Arts & Cultural Exchange – Telling Stories with Lenses and Paintbrushes” Camp",
      description:
        "An immersive multi-week summer camp bringing together young painters, photographers, and dancers for plein-air sketching, cultural heritage tours, and studio intensives.",
      images: [
        {
          src: "camp-1.svg",
          caption: "Plein-Air Landscape Sketching & Watercolor Session"
        },
        {
          src: "camp-2.svg",
          caption: "Cultural Heritage Architecture & Photography Field Study"
        },
        {
          src: "camp-3.svg",
          caption: "Dance Choreography & Movement Masterclass"
        },
        {
          src: "camp-4.svg",
          caption: "Campers Sharing Sketchbooks & Cultural Reflections"
        }
      ]
    },
    {
      id: "spring-second-exhibition",
      category: "exhibition",
      categoryLabel: "Art Exhibition",
      date: "Spring 2026",
      title: "Spring “Bridges of Culture – Youth Perspectives in Fine Art & Dance” Second Art Exhibition",
      description:
        "Our spring traveling exhibition celebrating dialogue across cultures through youth portrait photography, calligraphy, ballet/pointe studies, and botanical painting.",
      images: [
        {
          src: "spring-exhibition-1.svg",
          caption: "Gallery Installation & Community Visitors"
        },
        {
          src: "spring-exhibition-2.svg",
          caption: "Youth Botanical & Ink Wash Painting Series"
        },
        {
          src: "spring-exhibition-3.svg",
          caption: "Documentary Photography: Stories of Community"
        }
      ]
    },
    {
      id: "community-school-donation",
      category: "community",
      categoryLabel: "Community Service",
      date: "Winter 2025 – 2026",
      title: "Youth Charity Drive & Art Supplies Donation to Partner Elementary Schools",
      description:
        "Pointe4Art student volunteers organized charity art sales and benefit recitals to donate sketchbooks, paint sets, easels, and dance shoes to underserved elementary classrooms.",
      images: [
        {
          src: "donation-1.svg",
          caption: "Student Volunteers Packing Art Kits & Sketchbooks"
        },
        {
          src: "donation-2.svg",
          caption: "Art Supplies Delivery & Classroom Painting Day"
        },
        {
          src: "donation-3.svg",
          caption: "Collaborative Youth Art Workshop with Elementary Students"
        }
      ]
    }
  ]
};

