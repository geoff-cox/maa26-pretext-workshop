var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Chapter",
  "number": "",
  "title": "Resource Links",
  "body": " Resource Links  Here are some resources to help you learn more about PreTeXt .       PreTeXt Homepage  The PreTeXt homepage is a great place to start learning more about the project and its capabilities. It includes links to documentation, help forums, and more.    PreTeXt Plus  The PreTeXt Plus is a website for creating, editing, and publishing simple PreTeXt Documents. Think of it as an early beta version of Overleaf, but for PreTeXt .    PreTeXt Guide  The PreTeXt Guide is a general resource for learning how to setup and use PreTeXt .    PreTeXt announcements  Stay updated on the latest news and developments in the PreTeXt community. Include information about drop-in office hours via Zoom.    MathTech  Explore the MathTech website for additional resources and information about PreTeXt .    Video Tutorials  Watch tutorial videos and presentations about PreTeXt .    Help & Support Forums  The PreTeXt Help Forums are a great place to ask questions, share your work, and connect with other members of the PreTeXt community.    Discord Server  Join the PreTeXt Discord server for real-time discussions and support.    Runestone Academy  Runestone Academy is a hosting platform for PreTeXt authored textbooks.     "
},
{
  "id": "sec-cheatsheet",
  "level": "1",
  "url": "sec-cheatsheet.html",
  "type": "Section",
  "number": "",
  "title": "PreTeXt Cheatsheet",
  "body": " PreTeXt Cheatsheet  The tags you will reach for most often. Copy, paste, adapt. See pretextbook.org for the official documentation.      Document Structure     Divisional levels  <part> <!-- 0 --> <chapter> <!-- 1 --> <section> <!-- 2 --> <subsection> <!-- 3 --> <subsubsection> <!-- 4 --> <\/subsubsection> <\/subsection> <\/section> <\/chapter> <\/part>    A section, front to back  <section> <title>Section Title<\/title> <introduction>...<\/introduction> <subsection>...<\/subsection> <subsection>...<\/subsection> <conclusion>...<\/conclusion> <exercises>...<\/exercises> <\/section>          Paragraphs     Paragraph  <p> Most prose lives inside a paragraph. <\/p>    Paragraphs (grouped with title)  <paragraphs> <title>Group Title<\/title> <p>paragraph 1<\/p> <p>paragraph 2<\/p> <\/paragraphs>          Inline Formatting     Emphasis  <em>emphasis<\/em>  Renders as: emphasis .    New term  <term>new term<\/term>  Renders as: new term (bold). Use when introducing vocabulary for the first time.    Inline code  <c>inline code<\/c>  Renders as: inline code . Use for filenames, commands, short code, and tag names in prose.    Alert  <alert>attention<\/alert>  Renders as: attention (bold italic). Use sparingly for genuine emphasis.          Lists     Unordered list  <ul> <li>item<\/li> <li>item<\/li> <\/ul>  The <p> tags inside <li> are optional when the item is a single paragraph.    Ordered list  <ol> <li>item<\/li> <li>item<\/li> <li>item<\/li> <\/ol>  Add cols=\"2\" or cols=\"3\" on the <ol> to lay items out in columns.    Description list  <dl> <li> <title>Term<\/title> <p>Description.<\/p> <\/li> <li> <title>Term<\/title> <p>Description.<\/p> <\/li> <\/dl>  Optional attribute: width=\"narrow\" keeps the term column compact.          Math     Inline math  <m>x^2 + 1<\/m>    Display math  <me>\\int_0^1 f(x)\\,dx<\/me> <md>\\sum_{i=1}^n x_i^2<\/md>  Use <me> for a single line, <md> when you may want to add aligned rows later.    Numbered display equation  <men>e^{i\\pi} + 1 = 0<\/men>  Give the equation an xml:id to reference it later with <xref> .    Aligned, multi-line math  <md> <mrow>a^2 + b^2 \\amp = c^2<\/mrow> <mrow>y \\amp = mx + b<\/mrow> <mrow>m \\amp = \\frac{y-b}{x}<\/mrow> <mrow> \\amp = \\frac{14}{3}<\/mrow> <\/md>  The \\amp character is the alignment anchor — lines align at whatever sits just after it.          Definitions, Theorems, Examples     Definition  <definition xml:id=\"def-x\"> <statement> <p>...<\/p> <\/statement> <\/definition>  The xml:id is optional, but add one if you want to cross-reference the definition later with <xref> .    Theorem with proof  <theorem> <statement><p>...<\/p><\/statement> <proof><p>...<\/p><\/proof> <\/theorem>    Example  <example xml:id=\"ex-x\"> <title>T<\/title> <statement> <p>...<\/p> <\/statement> <solution> <p>...<\/p> <\/solution> <\/example>  The <solution> is optional. If you include it, it renders as a knowl the reader can expand.    Remark  <remark> <p>A note.<\/p> <\/remark>    Aside  <aside> <p>A short aside.<\/p> <\/aside>  An <aside> renders in the margin (on wide screens) or inline (on narrow ones), visually distinct from a <remark> .          Exercises     Simple exercise  <exercise> <statement> <p>...<\/p> <\/statement> <\/exercise>    Exercise with tasks  <exercise xml:id=\"exr-x\"> <introduction> <p>...<\/p> <\/introduction> <task> <statement><p>...<\/p><\/statement> <answer><p>...<\/p><\/answer> <\/task> <task> <statement><p>...<\/p><\/statement> <answer><p>...<\/p><\/answer> <\/task> <\/exercise>  Use <task> for multi-part exercises. Each part gets its own answer knowl.    Hint, answer, solution  <exercise xml:id=\"exr-y\"> <statement> <p>...<\/p> <\/statement> <hint> <p>...<\/p> <\/hint> <answer> <p>...<\/p> <\/answer> <solution> <p>...<\/p> <\/solution> <\/exercise>  All three are optional. Order matters: <statement> first, then any combination of <hint> , <answer> , <solution> .          Worksheets     Worksheet  <worksheet xml:id=\"ws-x\"> <title>Worksheet Title<\/title> <objectives>...<\/objectives> <page>...<\/page> <page>...<\/page> <\/worksheet>  A <worksheet> is a peer of a <section> and holds its own exercises. Split across <page> elements to control pagination in the printable version.    Objectives  <objectives> <ul> <li><p>...<\/p><\/li> <li><p>...<\/p><\/li> <li><p>...<\/p><\/li> <\/ul> <\/objectives>  Place at the top of a worksheet or chapter. The <p> tags inside <li> are optional when the item is a single paragraph.          Interactive Questions     Multiple choice  <exercise xml:id=\"ex-mc\"> <title>Exercise Title<\/title> <statement> <p>Prompt.<\/p> <\/statement> <choices randomize=\"yes\"> <choice> <statement><p>Distractor.<\/p><\/statement> <feedback><p>Why this is wrong.<\/p><\/feedback> <\/choice> <choice correct=\"yes\"> <statement><p>Correct answer.<\/p><\/statement> <feedback><p>Why this is right.<\/p><\/feedback> <\/choice> <choice> <statement><p>Distractor.<\/p><\/statement> <feedback><p>Why this is wrong.<\/p><\/feedback> <\/choice> <\/choices> <\/exercise>  At least one <choice> must have correct=\"yes\" . Optional randomize=\"yes\" on <choices> shuffles the order.    True \/ false  <exercise xml:id=\"ex-tf\"> <title>Exercise Title<\/title> <statement correct=\"no\"> <p>A statement that might be true or false.<\/p> <\/statement> <feedback> <p>Why the statement is true or false.<\/p> <\/feedback> <\/exercise>  The correct=\"yes\" or correct=\"no\" attribute goes on the <statement> itself. No <choices> block.          Links & Cross-references     External link  <url href=\"https:\/\/abc.com\"> click here <\/url>    Internal cross-reference  <xref ref=\"def-x\"\/> <xref ref=\"def-x\" text=\"title\"\/> <xref ref=\"def-x\" text=\"custom\">see here<\/xref>  The target must have an xml:id . Default link text is auto-generated (e.g., Definition 3.1 ); text=\"title\" uses the target's title; text=\"custom\" lets you write your own link text between the opening and closing tags.          Figures     Figure with image  <figure xml:id=\"fig-x\"> <caption>My caption.<\/caption> <image source=\"path.png\"> <shortdescription> Brief alt text. <\/shortdescription> <\/image> <\/figure>  Every image needs a <shortdescription> for screen readers. Keep it brief and literal — what the image shows, not what it means.          Tables     Minimal table  <tabular> <row> <cell>A<\/cell> <cell>B<\/cell> <\/row> <row> <cell>C<\/cell> <cell>D<\/cell> <\/row> <\/tabular>    Table with a header row  <tabular> <row header=\"yes\"> <cell>Name<\/cell> <cell>Value<\/cell> <\/row> <row> <cell>...<\/cell> <cell>...<\/cell> <\/row> <\/tabular>    Table with borders and column widths  <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"30%\" halign=\"center\"\/> <col width=\"70%\"\/> <row header=\"yes\"> <cell>Name<\/cell> <cell>Description<\/cell> <\/row> <row> <cell>...<\/cell> <cell>...<\/cell> <\/row> <\/tabular>  Border options: none , minor , medium , major . Alignment options: left , center , right .          Things That Trip Everyone Up    Every open tag needs a close tag. Mismatched tags are the most common build error.  Use xml:id (not id ) for anything an <xref> will point to.  Save and rebuild after edits. The preview does not refresh on its own.     "
},
{
  "id": "cheatsheet-inline-formatting-2",
  "level": "2",
  "url": "sec-cheatsheet.html#cheatsheet-inline-formatting-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "new term "
},
{
  "id": "a11y-automatic",
  "level": "1",
  "url": "a11y-automatic.html",
  "type": "Section",
  "number": "",
  "title": "What PreTeXt Does Automatically",
  "body": " What PreTeXt Does Automatically   Because you mark up content by what it is rather than how it should look, the generated HTML carries enough structure to be navigated and read by assistive technology with no extra work from you.    Structural Accessibility  The HTML PreTeXt generates targets WCAG 2.1 Level AA . You get, by default:      Proper heading hierarchy. Chapters, sections, and named blocks (definitions, theorems, examples) map to appropriate HTML heading levels, so screen reader users can jump directly to the section they need.     ARIA landmarks and skip-navigation. Screen readers get a structural overview of every page, and keyboard users can bypass the navigation sidebar.     Keyboard navigation. The table of contents, knowl popups, and native exercise types are all reachable and operable without a mouse.     Sufficient color contrast and responsive layout. Default themes meet the 4.5:1 contrast ratio for body text, and the HTML reflows gracefully for screen magnification or mobile use.       Accessible Mathematics  Every equation you write inside an <m> or <me> tag is rendered with MathJax, which simultaneously produces MathML — a structured, machine-readable form of the math. Screen readers that support MathML (JAWS with MathPlayer, NVDA with MathCAT, VoiceOver on recent macOS and iOS) can navigate equations structurally: term by term, into numerators and exponents, at whatever level of detail the reader needs.  Any reader — including sighted readers with low vision — can also right-click any equation to zoom, copy the source, or change the rendering mode.   Try it  In any built HTML output, right-click an equation and choose Accessibility → Explorer → Activate . The page reloads and the arrow keys now walk you through the equation's structure. Fifteen seconds, immediate payoff.     Multiple Output Formats, One Source  A student who needs a specific format is not getting a second-class version of your text — every format is generated from the same semantic source.    Format  Who benefits    HTML  Screen reader users, keyboard-only users, mobile readers    PDF  Students who prefer or require print    ePub  Students using e-readers or read-aloud on tablets    Braille (Nemeth)  Blind students; tactile readers of mathematics    The Braille output is particularly significant. Most math textbooks cannot be Brailled without a specialist transcriber, which creates long wait times and high costs for blind students. PreTeXt uses the liblouis library and Nemeth Code to generate Braille from the same source. An instructor who writes a PreTeXt book automatically produces a format that disability services can send directly to an embosser.   "
},
{
  "id": "a11y-demo-tip-2",
  "level": "2",
  "url": "a11y-automatic.html#a11y-demo-tip-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Accessibility → Explorer → Activate "
},
{
  "id": "a11y-author",
  "level": "1",
  "url": "a11y-author.html",
  "type": "Section",
  "number": "",
  "title": "What You, the Author, Must Do",
  "body": " What You, the Author, Must Do   Two areas require deliberate effort: images and interactives. Everything else is a byproduct of writing clean semantic markup.    Images Need Alt Text  Every informative image needs a <shortdescription> . This becomes the alt attribute in HTML and the described content in ePub and Braille.   <image source=\"graph.png\" width=\"60%\"> <shortdescription> A graph of f(x) = x squared on the interval [-2, 2], showing a parabola opening upward with vertex at the origin. <\/shortdescription> <\/image>   For images that carry substantial information — complex diagrams, data tables presented as images, geometric constructions — add a longer <description> element as well. It appears in the HTML as an expandable region that sighted readers can ignore and screen-reader users can access.   <image source=\"venn.png\" width=\"60%\"> <shortdescription>Venn diagram of sets A, B, and A intersect B.<\/shortdescription> <description> <p> Two overlapping circles. The left circle is labeled A and contains the elements 1, 2, 3. The right circle is labeled B and contains 3, 4, 5. The overlapping region contains 3, representing A intersect B. <\/p> <\/description> <\/image>   A natural question: why can't PreTeXt generate alt text automatically? Because image descriptions depend on context and intent. The same graph might need one description in a section about asymptotes and a different one in a section about symmetry. No tool can reliably make that call.  A second principle: don't rely on color alone . If you ask students to compare the red and green curves, also distinguish them by dashing, thickness, or labels. A quick test is to view the figure in grayscale and check that it still makes sense.    Interactive Elements Need a Prose Fallback  GeoGebra, Desmos, and similar embedded applets are visual by design and not reliably screen-reader accessible. When you include one in a document you intend to be fully accessible, surround it with a paragraph that describes what the interactive shows and what a student is meant to observe. That way the conceptual content is available even to a reader who cannot run the applet.   PreTeXt 's native exercise types — multiple choice, true\/false, fill-in-the-blank, matching — are keyboard-accessible and screen-reader friendly.    A Short Pre-Publication Checklist     Every informative image has a <shortdescription> .  Purely decorative images should carry an empty <shortdescription\/> .    Complex images have a <description> .  Diagrams, graphs, and data figures need the longer form.    Interactive applets have a surrounding prose description.  Students who can't run the applet can still learn from the text around it.    Figures don't rely on color alone.  Use dashing, thickness, or labels as secondary distinctions.    Cross-references use <xref> , not bare URLs.  Semantic cross-references produce meaningful link text ( Definition 3.2 ) rather than raw URLs.    The document builds without errors.  A build error may render correctly for sighted readers but produce broken ARIA or heading structure underneath.      "
},
{
  "id": "a11y-questions",
  "level": "1",
  "url": "a11y-questions.html",
  "type": "Section",
  "number": "",
  "title": "Accessibility FAQ",
  "body": " Accessibility FAQ     Is PreTeXt WCAG-compliant?  The HTML output is designed to meet WCAG 2.1 Level AA, and the community takes this seriously. But compliance is ultimately a property of a specific document, not of a tool. If an author skips alt text, no toolchain can compensate.    Isn't a PDF from latex accessible enough?  Accessible PDFs are possible but genuinely difficult to produce well from latex , and the result is often imperfect. HTML is fundamentally a more accessible format: it reflows, works natively with screen readers, and adapts to user preferences for font size and contrast. Generating HTML from the same PreTeXt source costs you nothing extra.    Does PreTeXt really produce braille?  Yes, from the same source file. Formulas are rendered in Nemeth braille, and tactile diagrams can be generated automatically from structured figures. The approach has been validated on full-length textbooks in abstract algebra and calculus, with quality checked by a certified transcriber and readability confirmed by a blind mathematician.    If screen readers can read math aloud, why does Braille still matter?  Because mathematicians read math by looking back and forth, comparing pieces, holding sub-expressions in view. Braille gives a blind reader the same tactile access.    Do I need to learn accessibility standards to use this well?  No. The authoring practices in What You, the Author, Must Do are your primary responsibilities. You don't need to study WCAG to produce accessible output.    Who decides what accessible enough means for my course?  Ultimately your institution and your students. PreTeXt gives you a document that is accessible by default and easy to improve where it matters most. For specific student accommodations, work with your campus disability services. The HTML, ePub, and Braille outputs will cover most common needs out of the box.    What's my actual responsibility as an author?  Write alt text for images, and design images so they work without color. That is essentially the whole list.    How do I write alt text in PreTeXt ?  Every non-decorative image needs a <shortdescription> : plain text, no markup, no quotation marks, under about 125 characters. Complex images can also include a <description> with paragraphs and even math, which screen readers read as a longer alternative.    Why can't PreTeXt generate alt text automatically?  Because image descriptions depend on author intent and context. The same graph might be described one way in a section about asymptotes and another way in a section about symmetry. No tool can reliably make that call.    What about using color in figures?  Don't rely on color alone. If you ask students to compare the red and green curves, add a second distinguishing feature. For example, dashing, thickness, or labels. A quick test: view your image in black and white and check that it still conveys the intended information.    Can I produce braille with PreTeXt.Plus?  No. Producing braille involves additional tools beyond the setup we're using. The capability exists and the HTML you build today is already screen-reader accessible. Braille is a next step for instructors who need it.    Does PreTeXt align with the recent accessibility requirements?  Yes. Many US institutions are now required to ensure accessibility of all online materials, including content posted in an LMS like Canvas or Blackboard. PreTeXt is well-positioned for this: you can deploy the HTML publicly, or export a single portable HTML file that uploads directly to an LMS.    What about EPUB for students who want to read on a tablet or e-reader?  Produced from the same source. EPUB reflows, supports screen readers, and works across the major e-reader apps.    Are interactive elements accessible?  Native PreTeXt exercise types (multiple choice, true\/false, fill-in) are generally accessible. Embedded third-party interactives (GeoGebra, Desmos, DoenetML) inherit the accessibility of those platforms, which varies. For critical content, consider including an image or text description as a fallback.     "
},
{
  "id": "faq-getting-started",
  "level": "1",
  "url": "faq-getting-started.html",
  "type": "Section",
  "number": "",
  "title": "Getting Started",
  "body": " Getting Started     What exactly is PreTeXt ?   PreTeXt is a semantic markup language for writing textbooks, notes, and lessons. You write a plain-text source file that describes the structure of your content (definition, theorem, example, exercise) and a build tool converts it into HTML, PDF, ePub, or Braille. It is closer in spirit to latex than to a word processor, but the markup describes what something is rather than how it should look.    Do I need to know latex ?  Only for mathematics. PreTeXt uses latex syntax inside the <m> and <me> tags, so if you can write x^2 + 1 or \\frac{a}{b} , you have enough. Prose, lists, definitions, examples, and exercises all use PreTeXt 's own tags.    Do I need to know XML?  You need to follow two rules: every tag that opens must close ( <p>...<\/p> ), and tags must nest properly. That is the practical extent of it. No schemas, namespaces, or DTDs.    What do I need to install?  For today, nothing. PreTeXt.Plus runs entirely in your browser. For longer-term use, a GitHub Codespace (covered in this hub) gives you more room to grow, and a local install via pip install pretext is available when you're ready for it.    Is PreTeXt free?  Yes. PreTeXt is open-source software released under the GPL. PreTeXt.Plus has a free tier with up to ten projects, and hosting on GitHub Pages is free as well.     "
},
{
  "id": "faq-authoring",
  "level": "1",
  "url": "faq-authoring.html",
  "type": "Section",
  "number": "",
  "title": "Writing and Authoring",
  "body": " Writing and Authoring     Can I convert my existing latex files to PreTeXt ?  Partially. PreTeXt.Plus includes a latex -to- PreTeXt converter, and Pandoc can produce rough PreTeXt from .tex . Treat either tool's output as a starting point that will likely need some cleanup. For documents that are mostly prose and basic math, this is still faster than starting from scratch.    How do I include images?  ( This is outside the scope of this workshop ). Put the image file (PNG, JPG, or SVG) in your assets folder and reference it with <image source=\"filename.png\"\/> . Add a <shortdescription> for the alt text. See What You, the Author, Must Do for details. You can also generate figures using TikZ or PGFPlots, and PreTeXt will produce accessible SVG output automatically.    Can exercises be auto-graded?  Yes, when the document is hosted on Runestone Academy. True\/false, multiple-choice, fill-in-the-blank, matching, and clickable-area exercises are all auto-graded with per-answer feedback. If you host on GitHub Pages or embed them into your LMS instead, exercises still display and work interactively, they just aren't tracked in a gradebook.    What controls numbering?   PreTeXt numbers definitions, theorems, examples, exercises, and figures automatically in the order they appear. Cross-references update themselves when you reorganize. This is one of the big wins over word processors: numbers are always consistent, and you never have to fix them by hand.     "
},
{
  "id": "faq-publishing",
  "level": "1",
  "url": "faq-publishing.html",
  "type": "Section",
  "number": "",
  "title": "Publishing",
  "body": " Publishing     Where can I host a PreTeXt book?  Four common options:    PreTeXt.Plus . Built-in hosting with a shareable link, no server required. Ideal for drafts and worksheets.     GitHub Pages . Free, automatic deployment when you push to GitHub; your book lives at a username.github.io\/reponame URL.     Runestone Academy . Free for instructors and students, adds a gradebook and LMS integration.     Your institution's web server . Upload the contents of the output\/web folder to any standard web host.       Can I use PreTeXt materials inside my LMS?  Two ways. Link directly to the published HTML from Canvas, Blackboard, or similar. If you host on Runestone Academy, you can also integrate via LTI so that exercise grades flow back into your LMS gradebook.    Who owns the content I write?  You do. PreTeXt is a tool; it does not claim any rights over your content. You can assign any license you like, and many authors choose a Creative Commons license to make their materials openly remixable.    How do I update a published book?  Edit the source, rebuild, and redeploy. On GitHub Pages, pushing a commit triggers an automatic rebuild. Your URL stays the same and readers see the updated version on their next visit.     "
},
{
  "id": "faq-publishing-2",
  "level": "2",
  "url": "faq-publishing.html#faq-publishing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PreTeXt.Plus GitHub Pages Runestone Academy Your institution's web server "
},
{
  "id": "chp-codespace-guide",
  "level": "1",
  "url": "chp-codespace-guide.html",
  "type": "Chapter",
  "number": "",
  "title": "Level-Up Guide: PreTeXt.Plus to GitHub Codespaces",
  "body": " Level-Up Guide: PreTeXt .Plus to GitHub Codespaces    This is a take-home tutorial. You don't need to do any of it during the workshop. Come back to it on a quiet evening when your laptop is charged, your Wi-Fi is steady, and you have about forty-five minutes of unhurried time.  You already know how to author in PreTeXt .Plus. It is a friendly, frictionless way to draft lessons, and for many instructors it is all they ever need. This guide is for the moment when you want more: multi-file projects, your own public URL, version history, and the same professional toolchain used by authors of full-length open textbooks. That next step is GitHub Codespaces , a browser-based development environment that runs an identical setup to what you'd eventually install locally, without actually installing anything.  You'll work in baby steps. At each stop there's a little check that tells you whether things are working before you move on, and a troubleshooting aside for the thing that most commonly goes sideways. By the end you'll have an editable project, a live preview, a saved version on GitHub, and a public web page you can share.      Created a free GitHub account.  Used the PreTeXt template to create your own GitHub repository.  Launched a Codespace and initialized a PreTeXt project in the browser.  Edited a small lesson, built both HTML and PDF, and previewed both.  Saved your work back to GitHub.  Deployed your HTML as a public web page on GitHub Pages.  Learned several ways to share the finished lesson with colleagues or students.                                            Work-in-progress. More documentation is on the way.   "
},
{
  "id": "chp-codespace-guide-2-2",
  "level": "2",
  "url": "chp-codespace-guide.html#chp-codespace-guide-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitHub Codespaces "
},
{
  "id": "chp-codespace-guide-3",
  "level": "2",
  "url": "chp-codespace-guide.html#chp-codespace-guide-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  Created a free GitHub account.  Used the PreTeXt template to create your own GitHub repository.  Launched a Codespace and initialized a PreTeXt project in the browser.  Edited a small lesson, built both HTML and PDF, and previewed both.  Saved your work back to GitHub.  Deployed your HTML as a public web page on GitHub Pages.  Learned several ways to share the finished lesson with colleagues or students.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
