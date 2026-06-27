import { Product, Review } from './types';

export const products: Product[] = [
  {
    id: 'obsidian-controller',
    name: 'Obsidian Controller',
    price: 249,
    originalPrice: 320,
    description: 'The pinnacle of luxury gaming input devices. Sculpted with aerospace-grade metal alloy, customized for lightning response and extreme sensory tactile comfort.',
    longDescription: 'Engineered for those who reject the ordinary. The Obsidian Controller combines fluid organic industrial design with mechanical perfection. Featuring high-precision hall-effect analog sticks, configurable custom magnetic travel triggers, and dual haptic feedback modules that offer physical realism. Hand-polished to a fine satin brushed finish, every unit is unique.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Eprz2gXedy2M1YYWoNcfst41wPV-zbwCoKdaBAFP3kWOG8WhYv9GIEUzzg9HaYEXb6kKzytwLqN4bgUqFhAggnA8MjtBgMNZtsBw-3eOZpnjvGHuu_Yzd8KPgJYD1ZL43uv-37vBH_SfWvqluxH1PaThVgNCq5305XlOeeVHSMoROKlRpJ_33bySjfIcvLKOz7OA5EagJNKBA9eqaLB6MA-FFRv7Gdbf0O929mgi9dzGXNhSWpmgxuv78wCC2joesm8-woQnGmc',
    category: 'controllers',
    tag: 'Best Seller',
    rating: 4.9,
    reviewsCount: 142,
    features: [
      'Aerospace-Grade Forged Titanium Alloy Shell',
      'Hall-Effect Magnetic Anti-Drift Joysticks',
      'Ultra-Low Latency Proprietary 2.4GHz & Bluetooth Connection',
      'Adjustable Trigger-Travel Distance Mechanism',
      'Subtle Ambient LED Glow Accent Ring'
    ],
    specs: {
      'Material': 'Forged aerospace alloy, Carbon fiber back plates',
      'Latency': '0.8ms wireless / 0.1ms wired connection',
      'Battery Life': 'Up to 36 hours of active play',
      'Compatibility': 'PC, macOS, Console, Mobile, VR Terminals',
      'Weight': '312g (Optimized inertia distribution)'
    },
    finishes: [
      { name: 'Obsidian Black', hex: '#111111', priceModifier: 0 },
      { name: 'Brushed Titanium', hex: '#555555', priceModifier: 30 },
      { name: 'Carbon Fiber Weave', hex: '#222222', priceModifier: 50 }
    ]
  },
  {
    id: 'aero-controller',
    name: 'Aero Controller',
    price: 249,
    originalPrice: 289,
    description: 'An architectural piece of technological sculpture. Reflected neon aesthetics integrated with precision mechanical feedback controls.',
    longDescription: 'The Aero Controller leverages a semi-translucent composite body with custom internal neon light matrices. It is an exploration of geometry and luxury light. Optimized with our proprietary zero-latency wireless chipset, it delivers immediate input recognition, securing your competitive edge while matching the high-end dark cyberpunk home layout.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoKSnIg9PFq0ot_gzDeW7ZPVV7SKzt_wUIpDinUrf5GCGnFsJPIAtyf7TyTyPSFqsROXSv9Im1vlMxcYOK9fovncRSq1SGQ0_7QwWoEDV4HozMkkRbualjffhDjvJaiT1IqcoZGt0TjghjAM6_jpEUmPKWaUG_TfLEmrZXAafIRgL1TRWtBe3sTe0sNbxozkH1jx2pUIcXEjiZzWS-vimOgIgtilyC3KKq8rQqDKEc0Hto6B15s09Iz49uLMRBzi-HAbmNVR2m6t0',
    category: 'controllers',
    tag: 'Exclusive',
    rating: 4.8,
    reviewsCount: 89,
    features: [
      'Neon Geometric Inner Chassis Projection',
      'Proprietary Linear Silent Switches',
      'Rapid-Fire Response D-Pad with micro-switches',
      'Interchangeable Ergonomic Thumb Grips',
      'Precision Polished Electroplated Accents'
    ],
    specs: {
      'Material': 'Polycarbonate crystal composite, brushed steel plating',
      'Illumination': '16.8M colors generative reactive animation',
      'Wireless Type': 'Dual-channel ultra-band 5.4GHz',
      'Charge Time': '1.5 Hours fast USB-C charge',
      'In the Box': 'Travel case, 3 set of analog thumbcaps, key tool'
    },
    finishes: [
      { name: 'Polar Aurora', hex: '#00e0b7', priceModifier: 0 },
      { name: 'Symphony Red', hex: '#ff3366', priceModifier: 20 },
      { name: 'Midnight Violet', hex: '#8a2be2', priceModifier: 20 }
    ]
  },
  {
    id: 'nova-audio',
    name: 'Nova Audio System',
    price: 899,
    originalPrice: 1100,
    description: 'Monolithic aluminum speaker cabinet. A sonic revelation built for minimalistic spaces, housing custom balanced active transducers.',
    longDescription: 'The Nova Audio System is a premium audio speaker. Housing dual mid-bass drivers and ribbon high-frequency transducers, it produces exceptional studio-level acoustic resonance. The outer shell is carved from solid blocks of CNC-milled aluminum, micro-sandblasted for a velvety, anti-scratch satin black texture. "NOVA AUDIO" is debossed on the side with high-precision engraving.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6BRK7bzN3agLV-VgRaAJQMsr817CYOfC0Cg6Jjx6Zsyq85f35yiKrreGc89hEmNMQESe75urzDwvEECnw4k_R49bLGv2tAqgByKXsQ9X8-CoggQTBPamHDiry_aOMSs3_GvF_FbV9y2NnM_QxQZVc-IK0gtf2_CYSoGaBXtAyNSti1c_GxS3imSMAADxCTCp4sXaVdxAUD9ZecuSWExdkw3t9KXVUBxac5_e2dmibdmnnBznZaOGQu_g_Y0CHbrSpEq7wq2-st38',
    category: 'audio',
    tag: 'Limited Edition',
    rating: 5.0,
    reviewsCount: 64,
    features: [
      'CNC Milled Satin-Finish Monolith Cabinet',
      'Ribbon Tweeters for Crystal Clear Highs',
      'Active Passive Radiators for Rich, Grounded Bass',
      'AirPlay 2, Spotify Connect, and Lossless aptX Bluetooth',
      'Proximity Sensor Volume Gestures'
    ],
    specs: {
      'Cabinet Material': 'Aircraft-grade 6000 series aluminum block',
      'Frequency Response': '28Hz - 42kHz (exceptional studio fidelity)',
      'Total Output': '180W RMS Class-D amplification',
      'Dimensions': '340mm x 140mm x 110mm',
      'Acoustic EQ': 'Dynamic room-calibration self-correction'
    },
    finishes: [
      { name: 'Anodized Noir', hex: '#1c1c1c', priceModifier: 0 },
      { name: 'Raw Silver Brushed', hex: '#c0c0c0', priceModifier: 50 },
      { name: 'Imperial Champagne', hex: '#d4af37', priceModifier: 100 }
    ]
  },
  {
    id: 'aurum-assistant',
    name: 'Aurum Smart Terminal',
    price: 450,
    originalPrice: 550,
    description: 'An elegant smart control tower standing on a solid slab of hand-carved Nero Marquina marble, illuminating rooms with warm ambient light.',
    longDescription: 'Bring serenity and luxury to your space. The Aurum Smart Terminal sits majestically in your room, serving as an interactive hub for intelligent control while maintaining a quiet, stunning visual presence. Its base glows with a soft, warm orange ember line that mimics the natural flickering of fire, casting a warm mood in modern, dim-lit spaces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsJIt-u25zR9SlU6mLRHPO-x219Bc1n2QdOY7Beg7W0nydc7azOSowxGlI6oFJJP04npRaZTyDU3xIuaUjAEiiwWTmwt78t099JVdfw53oOZbFCfTH9VMb5zvSLIMfgallNPFUHKkd4Dub1IPDhmk54abEMoRYWvYljOd90r1LZAErVU8OHNaB5lwfHpp_Xp7Gp_WG13tE5_1TykRk1MAaPKcEU3N5ojfD0G2iSao3JcK0dlmgvptjAY4Xfjz0iz7he5nUSjg4_tI',
    category: 'smart-home',
    tag: 'New Collection',
    rating: 4.9,
    reviewsCount: 47,
    features: [
      'Nero Marquina Solid Marble Base Plating',
      'Amber-Glow Ambient Base LED (adjustable intensity)',
      'Far-Field Microphone Array with Privacy Shutter',
      'Hi-Res Audio Omnidirectional Driver Built-In',
      'Elegant Touch Glass Top Panel with laser indicator'
    ],
    specs: {
      'Base Material': 'Hand-picked Italian Nero Marquina Marble',
      'Chassis': 'Premium anodized matte composite block',
      'Smart Connectivity': 'Matter, Thread, Wi-Fi 6E, Zigbee 3.0',
      'Lighting Output': 'Up to 450 lumens of dynamic warm Kelvin amber light',
      'Voice Assistant': 'Google Home & Alexa fully integrated'
    },
    finishes: [
      { name: 'Noir Gold Line', hex: '#222222', priceModifier: 0 },
      { name: 'Alabaster Silver Line', hex: '#e8e8e8', priceModifier: 30 }
    ]
  },
  {
    id: 'aether-tablet',
    name: 'Aura Control Pad',
    price: 599,
    originalPrice: 699,
    description: 'The elegant central nervous system of your smart home, featuring a circular glowing touch sensor and ultra-thin aluminum unibody.',
    longDescription: 'Crafted to blend seamlessly into luxury living rooms, the Aura Control Pad is a tablet engineered purely for aesthetics and effortless domestic control. Designed to rest beautifully on clean leather sofas or walnut coffee tables, its back features an integrated copper inductive charging ring that beams warm light during active smart control.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLbEHSr9nsnG2vZ4CETn-DqqC5h9t6V56IREsSJ2pdh8OKKlh79zdfl6EN7EWGqz3GXXFoRAUfdc2kXoy2fXSCL-t9m5wp2IZA-qRLYzk_URONR5BiI52htGg8ybTYwHIKp2XdwDwyLWhoLfbSmnjNDSAwNBldLunIUDYW2h_KMizipUopu1K174AfoQpXWxUyT1mKMpcKypqIZdYzstOEjfSZS6WH7KIEMUB50Q7852UQcZCIcc6wOzIHbMMvkwlPm7lCyZB3fN4',
    category: 'smart-home',
    tag: 'Exclusive',
    rating: 4.7,
    reviewsCount: 31,
    features: [
      '11.4-inch Fluid Ultra-Thin LTPO Display',
      'Rear Circular Radiant Inductive Glow Ring',
      'Preloaded Minimalistic Control Dashboard',
      'Integrated Magnetic Desk Stand and Wall Mount included',
      'Machined Aerospace Titanium Unibody Frame'
    ],
    specs: {
      'Thickness': '4.9mm (Incredibly slim silhouette)',
      'Resolution': '2560 x 1600 pixels (HDR10+ support)',
      'Charging': 'Wireless magnetic inductive quick-charging support',
      'OS': 'LuxeOS (Curated minimalistic home control system)',
      'Stand Material': 'Solid European Walnut and brushed titanium base'
    },
    finishes: [
      { name: 'Titanium Grey', hex: '#444444', priceModifier: 0 },
      { name: 'Cashmere Beige', hex: '#d2b48c', priceModifier: 40 }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Jean-Laurent M.',
    rating: 5,
    date: '14 Mai 2026',
    comment: 'Une pièce d\'art absolue. La manette Obsidian change totalement l\'aspect esthétique de mon bureau minimaliste. Le retour haptique est d\'une subtilité divine.',
    verified: true
  },
  {
    id: 'r2',
    author: 'Elena R.',
    rating: 5,
    date: '28 Avril 2026',
    comment: 'Le son du Nova Audio est extrêmement pur. J\'étais sceptique sur le prix pour une "dropshipping boutique", mais la qualité de fabrication est digne d\'un orfèvre.',
    verified: true
  },
  {
    id: 'r3',
    author: 'Alexander K.',
    rating: 4,
    date: '02 Juin 2026',
    comment: 'L\'enceinte Aurum est magnifique sur sa plaque de marbre. Son éclairage tamisé crée une ambiance cinéma irrésistible le soir dans le salon.',
    verified: true
  }
];

export const stories = [
  {
    id: 'journal-1',
    title: 'The Art of Tech-Sparsity',
    subtitle: 'Why minimal aesthetics are dominating modern luxury spaces.',
    date: 'Juillet 2026',
    readTime: '4 min',
    summary: 'How gadgets transitioned from grey plastic boxes to monolithic sculptures carved from raw steel and Italian marble.',
    content: 'We explore the design language of tomorrow—where tech doesn’t scream for attention, but rather blends in like a silent architectural masterpiece.'
  },
  {
    id: 'journal-2',
    title: 'Designing the Obsidian Controller',
    subtitle: 'Behind the organic contours and tactile inertia.',
    date: 'Juin 2026',
    readTime: '6 min',
    summary: 'A deep dive into our engineering workshops, selecting high-grade titanium and hand-polishing the seamless curves.',
    content: 'Our core philosophy is simple: tactile objects should feel like extensions of the human hand. Read how we achieved the ultimate ergonomic masterpiece.'
  }
];
