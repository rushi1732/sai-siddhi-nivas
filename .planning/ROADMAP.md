# Roadmap: Sai Siddhi Nivas Transformation

## Phase 1: Foundation & Data Architecture
- Update Tailwind color tokens and typography to deep forest green, champagne gold, ivory, beige, and charcoal.
- Replace `src/data/cranganorData.js` with structured, rich `src/data/hotelData.js` representing Sai Siddhi Nivas.
- Add SEO tags, schema.org JSON-LD, sitemap, robots.txt, and metadata in `index.html`.

## Phase 2: Core Components Re-architecture
- Refactor `Navbar.jsx` with Sai Siddhi Nivas luxury identity, navigation links, and phone action.
- Update `Hero.jsx` with required headings, CTA buttons ("Book Your Stay", "Explore Rooms", "Contact Us"), and instant booking bar.
- Update `OurStory.jsx` -> `AboutUs.jsx` for Sai Siddhi Nivas hospitality, tranquility, and Konkan location.
- Enhance `RoomsSection.jsx` and `RoomDetailModal.jsx` with room categories, amenities, capacities, and editable rate notices.
- Build dedicated `AmenitiesSection.jsx` with icon cards (Parking, Wi-Fi, Restaurant, AC, Room Service, Hot Water, Family Stays, etc.).
- Update `DiningSection.jsx` to feature Konkan hospitality and traditional dining.
- Enhance `GallerySection.jsx` with luxury hotel photography, category tabs, and interactive lightbox.
- Enhance `LocationSection.jsx` with Modka Agar, MSH4, Kirtanwadi Tarf, Warweli Plus Code F6HC+27, directions button, and route guide.
- Update `ReviewsSection.jsx` with genuine review invitation & editable guest feedback cards.
- Build `ContactSection.jsx` & upgrade `BookingModal.jsx` with WhatsApp prefilled messaging (+91 9764764359), form validation, and non-misleading confirmation flow.
- Update `Footer.jsx` and add Floating WhatsApp button.

## Phase 3: Verification & Polish
- Run build (`npm run build`) and test in Vite preview/dev server.
- Visually test with browser subagent across desktop (1440px) and mobile (375px).
- Verify all links, forms, modals, lightbox, and responsiveness.
