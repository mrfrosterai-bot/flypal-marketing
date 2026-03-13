1. **Shimmer Button Animation**  
   **Element:** `.btn-primary`  
   **Wrong:** 3-second loop is too slow and feels sluggish; the shimmer timing doesnΓÇÖt feel premium.  
   **Fix:**  
   ```css
   animation: shimmer-slide 1.6s ease-in-out infinite;
   ```

2. **Gradient Button Animation**  
   **Element:** `.btn-coral`  
   **Wrong:** 4-second gradient cycle is too slow; the button looks dull on first paint.  
   **Fix:**  
   ```css
   animation: gradient-flow 2.2s ease infinite;
   ```

3. **Nav CTA Button**  
   **Element:** `.nav-cta`  
   **Wrong:** No shimmer or gradient; looks flat compared to hero buttons.  
   **Fix:**  
   ```css
   background: linear-gradient(110deg, var(--dark) 45%, rgba(255,255,255,0.15) 50%, var(--dark) 55%);
   background-size: 250% 100%;
   animation: shimmer-slide 1.6s ease-in-out infinite;
   ```

4. **App-Store Badge Hover**  
   **Element:** `.app-store-badge`  
   **Wrong:** Only lifts 3 px; needs subtle shimmer to feel premium.  
   **Fix:**  
   ```css
   .app-store-badge {
     position: relative;
     overflow: hidden;
   }
   .app-store-badge::after {
     content: '';
     position: absolute;
     top: -50%; left: -50%;
     width: 20px; height: 200%;
     background: rgba(255,255,255,0.25);
     transform: rotate(25deg);
     transition: none;
     animation: badge-shimmer 2.2s ease-in-out infinite;
   }
   @keyframes badge-shimmer {
     0% { transform: translateX(-100px) rotate(25deg); }
     100% { transform: translateX(300px) rotate(25deg); }
   }
   ```

5. **Feature Card Hover**  
   **Element:** `.feature-card`  
   **Wrong:** Only lifts 6 px; needs subtle inner-shadow to feel tactile.  
   **Fix:**  
   ```css
   .feature-card:hover {
     transform: translateY(-6px);
     box-shadow: var(--shadow-lift), inset 0 0 0 1px rgba(255,255,255,0.05);
   }
   ```

6. **Flight Card Hover**  
   **Element:** `.flight-card`  
   **Wrong:** Translates only 2 px; needs a soft glow to feel alive.  
   **Fix:**  
   ```css
   .flight-card:hover {
     transform: translateY(-2px);
     box-shadow: 0 0 20px rgba(224,123,57,0.25);
   }
   ```

7. **Floating Notification Speed**  
   **Element:** `.floating-notif`  
   **Wrong:** 6-second loop feels sluggish; needs faster, snappier motion.  
   **Fix:**  
   ```css
   animation: notif-float 3.2s ease-in-out infinite;
   ```

8. **Radar Plane Emoji**  
   **Element:** `.radar-plane`  
   **Wrong:** Plain ΓÇ£Γ£êΓÇ¥ looks childish; replace with sleek SVG or twemoji.  
   **Fix (HTML):**  
   ```html
   <svg class="radar-plane" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
   ```

9. **Step Emojis**  
   **Element:** `.step-number` content  
   **Wrong:** Airplane, link, family emojis look inconsistent; use outlined icons.  
   **Fix (HTML):**  
   ```html
   <!-- Step 1 -->
   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
   <!-- Step 2 -->
   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
   <!-- Step 3 -->
   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M18 8l5 5-5 5"/><path d="M13 8l5 5-5 5"/></svg>
   ```

10. **Dark-Mode Toggle**  
    **Element:** `.mobile-toggle` (reuse for theme)  
    **Wrong:** No sun/moon icon; just lines.  
    **Fix (HTML):**  
    ```html
    <button class="theme-toggle" aria-label="Toggle theme">
      <svg class="sun" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v6m0 6v6m9-9h-6m-6 0H3m16.24-6.24l-4.24 4.24m-6 6l-4.24 4.24m0-14.48l4.24 4.24m6 6l4.24 4.24"/></svg>
      <svg class="moon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>
    ```
    **Fix (CSS):**  
    ```css
    .theme-toggle { background: none; border: none; cursor: pointer; color: var(--text); padding: 0.5rem; border-radius: 50%; transition: background 0.3s; }
    .theme-toggle:hover { background: rgba(255,255,255,0.1); }
    .theme-toggle .moon { display: none; }
    [data-theme="dark"] .theme-toggle .sun { display: none; }
    [data-theme="dark"] .theme-toggle .moon { display: block; }
    ```

11. **Marquee Speed**  
    **Element:** `.marquee-track`  
    **Wrong:** 25-second loop is too slow; feels heavy.  
    **Fix:**  
    ```css
    animation: marquee 18s linear infinite;
    ```

12. **Pulse Dot Speed**  
    **Element:** `.hero-badge .dot`  
    **Wrong:** 2-second pulse feels sleepy; needs faster heartbeat.  
    **Fix:**  
    ```css
    animation: pulse-dot 1.2s ease-in-out infinite;
    ```

13. **Floating Circle Speed**  
    **Element:** `.hero-circle-1` / `-2` / `-3`  
    **Wrong:** 20 s / 15 s / 12 s are too slow; needs lighter motion.  
    **Fix:**  
    ```css
   .hero-circle-1 { animation: float 12s ease-in-out infinite; }
   .hero-circle-2 { animation: float 9s ease-in-out infinite reverse; }
   .hero-circle-3 { animation: float 7s ease-in-out infinite 1s; }
    ```

14. **Butterfly Wings Speed**  
    **Element:** `.butterfly-svg`  
    **Wrong:** 0.3 s alternate feels sluggish; needs quicker flutter.  
    **Fix:**  
    ```css
    animation: butterfly-wings 0.18s ease-in-out infinite alternate;
    ```

15. **Radar Ring Pulse**  
    **Element:** `.radar-ring`  
    **Wrong:** 3-second fade feels heavy; needs snappier sonar.  
    **Fix:**  
    ```css
    animation: radar-pulse 2s ease-out infinite;
    ```

16. **Hero Title Gradient Underline**  
    **Element:** `.hero-title .highlight::after`  
    **Wrong:** Static underline; needs shimmer on hover.  
    **Fix:**  
    ```css
    .hero-title .highlight:hover::after {
      background: linear-gradient(90deg, var(--coral), var(--blue), var(--coral));
      background-size: 200% auto;
      animation: underline-shimmer 2s linear infinite;
    }
    @keyframes underline-shimmer {
      to { background-position: 200% center; }
    }
    ```

17. **Feature Icon Emoji**  
    **Element:** `.feature-icon` content  
    **Wrong:** Plain emojis look inconsistent; swap for outlined SVGs.  
    **Fix (example for first card):**  
    ```html
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 12.5l3-3m15.5 3l-3-3M12 2.5l-3 3m9.5 13.5l-3 3M3.5 3.5l1.4 1.4m14.2 14.2l1.4 1.4M3.5 20.5l1.4-1.4m14.2-14.2l1.4-1.4"/><circle cx="12" cy="12" r="2"/></svg>
    ```

18. **Flight Line Plane Emoji**  
    **Element:** `.flight-line::before` content  
    **Wrong:** ΓÇ£Γ£êΓÇ¥ looks childish; replace with thin SVG.  
    **Fix:**  
    ```css
   content: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23e07b39' stroke-width='2'%3E%3Cpath d='M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'/%3E%3C/svg%3E");
    ```

19. **Hero Stats Number**  
    **Element:** `.hero-stat .number`  
    **Wrong:** Static numbers; needs subtle count-up on reveal.  
    **Fix (JS snippet):**  
    ```js
    const counters = document.querySelectorAll('.hero-stat .number');
    const speed = 120;
    counters.forEach(counter => {
      const animate = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(animate, 20);
        } else {
          counter.innerText = target;
        }
      };
      animate();
    });
    ```
    Add `data-target="250000"` etc. to the `.number` spans.

20. **Radar Ring Color**  
    **Element:** `.radar-ring` border-color  
    **Wrong:** Flat rgba color; needs subtle glow.  
    **Fix:**  
    ```css
    border: 2px solid rgba(224,123,57,0.2);
    box-shadow: 0 0 10px rgba(224,123,57,0.15);
    ```


