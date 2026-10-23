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
      title: "Art Exhibition Volunteer Service",
      description:
        "Youth volunteers supported a local art exhibition-Floating Memory.",
      images: [
  {
    src: "images/Floating Memory Art Exhibition_01.jpg",
    caption: "By the Gain of High Tech We Promote Art."
  },
 
  {
    src: "images/Floating Memory Art Exhibition_03.jpg",
    caption: "Youth volunteers with Mr. Shu, Director of the Asian Art Center."
  },
        
  {
    src: "images/Floating Memory Art Exhibition_05.jpg",
    caption: "Youth enjoying the artwork before the Floating Memory exhibition."
  },
        
  {
    src: "images/Floating Memory Art Exhibition_04.jpg",
    caption: "Helping with Food Preparation at Art Exhibition."
  },
        
  {
    src: "images/Floating Memory Art Exhibition_06.jpg",
    caption: "Artists introducing their work and sharing insights during the Floating Memory exhibition.."
  },
        
  {
    src: "images/Floating Memory Art Exhibition_07.jpg",
    caption: "Artists and guests gathering to celebrate art and community at the Floating Memory exhibition.."
  },
  {
    src: "images/Floating Memory Art Exhibition_08.jpg",
    caption: "Youth in front of one of her favorite Art."
  },
        
  {
    src: "images/Floating Memory Art Exhibition_09.JPG",
    caption: "Family Memory in front of San Jose Asian Art Center."
  }     
]
    },
    {
      id: "sixth-exhibition-highlights",
      category: "camp",
      categoryLabel: "Community Dance Engagement",
      date: "Ongoing",
      title: "Youth Dance & Community Engagement",
      description:
        "Highlights from our ongoing youth dance activities, including community dance instruction and cultural performances celebrating Chinese traditions.",
      images: [
        {
          src: "images/Dance In the Park_01.jpg",
          caption: "Youth Dance Instructions at Park"
        },
        {
          src: "images/Dance In the Park_02.jpg",
          caption: "Youth Dance Instructions at Park"
        },
        {
          src: "images/Dance In the Park_03.jpg",
          caption: "Youth Dance Instructions at Park"
        },
        {
          src: "images/Dance In the Park_04.jpg",
          caption: "Youth Dance Instructions at Park"
        },
        {
          src: "images/Dance In the Park_05.jpg",
          caption: "Youth Dance Instructions at Park"
        },
        {
          src: "images/Dance In the Park_06.jpg",
          caption: "Youth Dance Instructions at Park"
        },
       {
          src: "images/Spring Festival_1.jpg",
          caption: "Dance Performance at Community Center to Celebrate Chinese New Year"
        },
        {
          src: "images/Spring Festival_2.jpg",
          caption: "Dance Performance at Community Center to Celebrate Chinese New Year"
        }     
      ]
    },
    {
      id: "summer-exchange-camp",
      category: "camp",
      categoryLabel: "Community Donation and Service",
      date: "Ongoing",
      title: "Youth Community Outreach to Support Dance Studio and Community Service",
      description:
        "Highlights from Donation to Local Studios and Other Community Service.",
      images: [
        {
          src: "images/Mexican Heritage Dance Program_01.jpg",
          caption: "   "
        },
        {
          src: "images/Mexican Heritage Dance Program_02.jpg",
          caption: "  "
        },
        {
          src: "images/City Team_02.jpg",
          caption: " "
        },
        {
          src: "images/City Team_03.jpg",
          caption: ""
        },
        {
          src: "images/City Team_04.jpg",
          caption: ""
        },
        {
          src: "images/City Team_05.jpg",
          caption: ""
        },
       {
          src: "images/Raft_01.jpg",
          caption: ""
        },
       {
          src: "images/Raft_02.jpg",
          caption: ""
        },
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
