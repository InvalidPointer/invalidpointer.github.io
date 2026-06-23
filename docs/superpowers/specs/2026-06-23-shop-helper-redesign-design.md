# Shop Helper Redesign Design

## Goal

Redesign `shop-helper` so it keeps its cute, friendly K-pop community feel while becoming more polished and genuinely usable on mobile. The app should support both phone-first use and general small-screen resilience: users should be able to paste users, paste source data, review totals, copy export text, and scan per-user results without layout friction.

## Chosen Direction

Use the **Cozy Tool Sheet** direction. The page remains a single static tool with one continuous workflow, but the visual hierarchy becomes tighter and more purposeful.

The first viewport should communicate:

- what the tool is,
- where to paste users,
- where to paste source data,
- the current export/totals state when available,
- and the primary copy action.

Avoid a wizard or dashboard split. The current one-page flow is valuable because experienced users can paste, verify, and copy quickly.

## Visual System

Use the **Sakura Sky** palette:

- soft blush page background,
- white or near-white panels,
- rose as the primary personality/action color,
- sky blue for totals, structural highlights, and secondary emphasis,
- dark blue-gray for primary text,
- muted blue-gray for supporting text,
- pale rose borders and input backgrounds.

Violet should not be a primary system color. If any purple-adjacent tint remains, it should be incidental and not define buttons, headings, focus rings, or large surfaces.

The cute vibe should come from softness, small accents, and rhythm rather than large decorations:

- keep small sparkle/flower/star details where they help identity,
- reduce oversized emoji ornaments,
- use compact rounded panels,
- keep shadows subtle,
- avoid one-note pink by balancing rose with sky blue and neutral text.

## Layout

Keep `shop-helper/index.html` as a single static page. No build step, framework, or routing is needed.

The page should be organized into these sections:

- top utility bar with home link and theme toggle,
- compact header with title and short instruction text,
- input sheet with users and source data textareas,
- summary/export area placed before long user results,
- pricing chips,
- per-user result cards,
- footer.

On desktop, the users textarea can sit beside the source data textarea, with source data receiving more width. On mobile, all sections stack in the natural task order. Use stable spacing and dimensions so input focus, copy feedback, and dynamic results do not cause awkward jumps.

## Mobile Behavior

Mobile is a primary workflow, not just a fallback.

Requirements:

- inputs stack full-width,
- touch targets are at least comfortable phone size,
- copy button becomes easy to hit and visually primary,
- summary/export appears before per-user details,
- long tables do not overflow the viewport in a broken way,
- text inside buttons, chips, and cards wraps or scales professionally,
- fixed-position controls must not cover content on narrow screens.

For per-user results, keep the user total prominent. If the table remains, it must be inside a safe horizontal scroll container with clear spacing. A compact mobile card-row rendering is acceptable if it improves readability without changing the data.

## States

Preserve current app behavior:

- parse source data from the `учеты` section,
- track only users entered in the users textarea,
- render pricing by card type,
- render per-user totals and entries,
- generate export text from all matching user rows,
- copy export text to the clipboard,
- preserve light/dark theme selection in `localStorage`.

Improve UI states without changing parsing semantics:

- empty state should feel intentional, not like a broken error,
- parsing errors should be readable and visually distinct,
- copy success/failure feedback should be noticeable but not layout-breaking,
- users with no matched entries should remain understandable if shown.

## Dark Theme

Keep dark theme support. It should use the same Sakura Sky design language:

- dark neutral background,
- elevated dark panels,
- rose primary actions,
- sky blue totals/highlights,
- readable contrast for text, inputs, chips, and table rows.

Theme switching should remain immediate and should preserve the chosen theme.

## Implementation Boundaries

Keep the JavaScript parser and export logic functionally equivalent unless a rendering change requires a small structural adjustment. Do not introduce dependencies or external assets beyond what the current static page already uses.

CSS can be reorganized substantially to support the new design system, responsive behavior, and clearer component boundaries. Markup can be adjusted for semantics, accessibility, and layout, but the tool should remain a single HTML file.

## Verification

Verify manually in a browser:

- initial empty state,
- parsing error for missing `учеты`,
- successful parse with representative source data and users,
- pricing chip rendering,
- total calculation,
- export count and export text,
- copy success and failure fallback where practical,
- light/dark theme switch and persistence,
- desktop layout,
- narrow mobile layout with no overlapping controls or broken overflow.

No automated test suite is required for this static one-file tool, but manual sample-data verification is required before finishing.
