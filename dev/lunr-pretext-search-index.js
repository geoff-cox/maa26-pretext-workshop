var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chp-resource-links",
  "level": "1",
  "url": "chp-resource-links.html",
  "type": "Chapter",
  "number": "",
  "title": "Resource Links",
  "body": " Resource Links  Here are some resources to help you learn more about PreTeXt .       PreTeXt Homepage  The PreTeXt homepage is a great place to start learning more about the project and its capabilities. It includes links to documentation, help forums, and more.    PreTeXt Plus  The PreTeXt Plus is a website for creating, editing, and publishing simple PreTeXt Documents. Think of it as an early beta version of Overleaf, but for PreTeXt .    PreTeXt Guide  The PreTeXt Guide is a general resource for learning how to set up and use PreTeXt .    PreTeXt announcements  Stay updated on the latest news and developments in the PreTeXt community, including information about drop-in office hours via Zoom.    MathTech  Explore the MathTech website for additional resources and information about PreTeXt .    Video Tutorials  Watch tutorial videos and presentations about PreTeXt .    Help & Support Forums  The PreTeXt Help Forums are a great place to ask questions, share your work, and connect with other members of the PreTeXt community.    Discord Server  Join the PreTeXt Discord server for real-time discussions and support.    Runestone Academy  Runestone Academy is a hosting platform for PreTeXt authored textbooks.     "
},
{
  "id": "sec-cheatsheet",
  "level": "1",
  "url": "sec-cheatsheet.html",
  "type": "Section",
  "number": "",
  "title": "PreTeXt Cheatsheet",
  "body": " PreTeXt Cheatsheet  The tags you will reach for most often. Copy, paste, adapt. See pretextbook.org for the official documentation.      Document Structure     Divisional levels  <part> <!-- Level 0 --> <chapter> <!-- Level 1 --> <section> <!-- Level 2 --> <subsection> <!-- Level 3 --> <subsubsection> <!-- Level 4 --> <\/subsubsection> <\/subsection> <\/section> <\/chapter> <\/part>    A section, front to back  <section> <title>Section Title<\/title> <introduction>...<\/introduction> <subsection>...<\/subsection> <subsection>...<\/subsection> <conclusion>...<\/conclusion> <exercises>...<\/exercises> <\/section>          Paragraphs     Paragraph  <p> Text in a paragraph. <\/p>    Paragraphs (grouped with title)  <paragraphs> <title>Group Title<\/title> <p>paragraph 1<\/p> <p>paragraph 2<\/p> <\/paragraphs>          Inline Formatting     Emphasis  <em>emphasis<\/em>  Renders as: emphasis .    New term  <term>new term<\/term>  Renders as: new term (bold). Use when introducing vocabulary for the first time.    Inline code  <c>inline code<\/c>  Renders as: inline code . Use for filenames, code, etc.    Alert  <alert>attention<\/alert>  Renders as: attention (bold italic). Use sparingly for genuine emphasis.          Lists     Unordered list  <ul> <li><p>item<\/p><\/li> <li><p>item<\/p><\/li> <\/ul>  The <p> tags inside <li> are optional when the item is a single paragraph.    Ordered list  <ol> <li>item<\/li> <li>item<\/li> <li>item<\/li> <\/ol>  Add cols=\"2\" or cols=\"3\" on the <ol> to lay items out in columns.    Description list  <dl> <li> <title>Term<\/title> <p>Description.<\/p> <\/li> <li> <title>Term<\/title> <p>Description.<\/p> <\/li> <\/dl>  Optional attribute: width=\"narrow|medium|wide\" to adjust title vs. description width.          Math     Inline math  <m>x^2 + 1<\/m>    Display math  <me>\\int_0^1 f(x)\\,dx<\/me> <md>\\sum_{i=1}^n x_i^2<\/md>  Use <me> for a single line, <md> when you may want to add aligned rows later.    Numbered display equation  <men>e^{i\\pi} + 1 = 0<\/men>  Give the equation an xml:id to reference it with <xref> .    Aligned, multi-line math  <md> <mrow>a^2 + b^2 \\amp = c^2<\/mrow> <mrow>y \\amp = mx + b<\/mrow> <mrow>m \\amp = \\frac{y-b}{x}<\/mrow> <mrow> \\amp = \\frac{14}{3}<\/mrow> <\/md>  The \\amp character is the alignment anchor ( & in latex ).          Definitions, Theorems, Examples     Definition  <definition xml:id=\"def-x\"> <statement>...<\/statement> <\/definition>  The xml:id is optional, but add one if you want to cross-reference the definition later with <xref> .    Theorem with proof  <theorem> <statement>...<\/statement> <proof>...<\/proof> <\/theorem>    Example  <example xml:id=\"ex-x\"> <title>...<\/title> <statement>...<\/statement> <solution>...<\/solution> <\/example>  The <solution> is optional. If you include it, it renders as a knowl the reader can expand.    Remark  <remark> <p>A note.<\/p> <\/remark>    Aside  <aside> <p>A short aside.<\/p> <\/aside>  An <aside> renders in the margin (on wide screens) or inline (on narrow ones), visually distinct from a <remark> .          Exercises     Simple exercise  <exercise> <statement>...<\/statement> <\/exercise>    Exercise with tasks  <exercise xml:id=\"exr-x\"> <introduction>...<\/introduction> <task> <statement>...<\/statement> <answer>...<\/answer> <\/task> <task> <statement>...<\/statement> <answer>...<\/answer> <\/task> <\/exercise>  Use <task> for multi-part exercises. Each part gets its own answer knowl.    Hint, answer, solution  <exercise xml:id=\"exr-y\"> <statement>...<\/statement> <hint>...<\/hint> <answer>...<\/answer> <solution>...<\/solution> <\/exercise>  All three are optional. Order matters: <statement> first, then any combination of <hint> , <answer> , <solution> .          Worksheets     Worksheet  <worksheet xml:id=\"ws-x\"> <title>...<\/title> <objectives>...<\/objectives> <page>...<\/page> <page>...<\/page> <\/worksheet>  A <worksheet> is a special environment that behaves like a <section> , but is styled differently and supports printing. <worksheet> can be split across <page> elements to help control the layout.  While <title> , <objectives> , and <page> elements are common child elements of worksheets, they are optional.    Objectives  <objectives> <ul> <li>...<\/li> <li>...<\/li> <li>...<\/li> <\/ul> <\/objectives>  Place at the top of a worksheet or chapter.    Exercise with workspace  <exercise workspace=\"2.5in\"> <statement>...<\/statement> <\/exercise>  Add workspace=\"2.5in\" to an exercise inside a worksheet to leave blank space for student work when the worksheet is printed. Adjust the measurement to suit the problem.          Interactive Questions     True \/ False  <exercise xml:id=\"ex-tf\"> <title> Exercise Title <\/title> <statement correct=\"no\"> <p> A statement that might be true or false. <\/p> <\/statement> <feedback> <p> Why the statement is true or false. <\/p> <\/feedback> <\/exercise>  The true and false indicators are correct=\"yes\" and correct=\"no\" , respectively goes directly inside the <statement> tag.    Multiple-Choice & Multiple-Answer  <exercise xml:id=\"ex-mc\"> <title> Exercise Title <\/title> <statement> Problem Statement <\/statement> <choices randomize=\"yes\"> <choice> <statement> Distractor. <\/statement> <feedback> Why this is wrong. <\/feedback> <\/choice> <choice correct=\"yes\"> <statement> Correct answer. <\/statement> <feedback> Why this is right. <\/feedback> <\/choice> <choice> <statement> Distractor. <\/statement> <feedback> Why this is wrong. <\/feedback> <\/choice> <\/choices> <\/exercise>  When exactly one <choice> has correct=\"yes\" , it is a multiple-choice question. When more than one <choice> has correct=\"yes\" , it is a multiple-answer question. Optional randomize=\"yes\" on <choices> shuffles the order.    Cardsort-Matching  <exercise label=\"chkpt-matching\"> <title> Exercise Title <\/title> <statement> Problem Statement <\/statement> <feedback> General Feedback <\/feedback> <cardsort> <match> <premise> Item 1 <\/premise> <response> Target 1 <\/response> <\/match> <match> <premise> Item 2 <\/premise> <response> Target 2 <\/response> <\/match> <match> <premise> Item 3a <\/premise> <premise> Item 3b <\/premise> <premise> Item 3c <\/premise> <response> Target 3 <\/response> <\/match> <match> <premise> Distractor Item <\/premise> <\/match> <match> <response> Distractor Target <\/response> <\/match> <\/cardsort> <\/exercise>     Clickable Area  <exercise label=\"chkpt-fill-in-the-blank\"> <title> Exercise Title <\/title> <statement> Problem Statement <\/statement> <areas> <p> Non-Clickable Text * <area> Correct Clickable Item 1 <\/area> * <area> Correct Clickable Item 2 <\/area> * <area correct=\"no\"> Incorrect Clickable <\/area> * <area> Correct Clickable Item 3 <\/area> * <area correct=\"no\"> Incorrect Clickable <\/area> * <\/p> <\/areas> <feedback> General Feedback <\/feedback> <\/exercise>           Links & Cross-references     External link  <url href=\"https:\/\/abc.com\"> click here <\/url>    Internal cross-reference  <xref ref=\"def-x\"\/> <xref ref=\"def-x\" text=\"title\"\/> <xref ref=\"def-x\" text=\"custom\">see here<\/xref>  The target must have an xml:id . Default link text is auto-generated (e.g., Definition 3.1 ); text=\"title\" uses the target's title; text=\"custom\" lets you write your own link text between the opening and closing tags.          Figures     Figure with image  <figure xml:id=\"fig-x\"> <caption>My caption.<\/caption> <image source=\"path.png\"> <shortdescription> Brief alt text. <\/shortdescription> <\/image> <\/figure>  Every image needs a <shortdescription> for screen readers. Keep it brief and literal. Describe what the image shows, not what it means.          Tables     Minimal table  <tabular> <row> <cell>A<\/cell> <cell>B<\/cell> <\/row> <row> <cell>C<\/cell> <cell>D<\/cell> <\/row> <\/tabular>    Table with a header row  <tabular> <row header=\"yes\"> <cell>Name<\/cell> <cell>Value<\/cell> <\/row> <row> <cell>...<\/cell> <cell>...<\/cell> <\/row> <\/tabular>    Table with borders and column widths  <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"30%\" halign=\"center\"\/> <col width=\"70%\"\/> <row header=\"yes\"> <cell>Name<\/cell> <cell>Description<\/cell> <\/row> <row> <cell>...<\/cell> <cell>...<\/cell> <\/row> <\/tabular>  Border options: none , minor , medium , major . Alignment options: left , center , right .      "
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
  "id": "sec-welcome",
  "level": "1",
  "url": "sec-welcome.html",
  "type": "Section",
  "number": "",
  "title": "4:00-4:10 Welcome",
  "body": " 4:00-4:10 Welcome  Thanks for coming. We'll start with a short orientation , take a quick tour of what PreTeXt can do, then spend most of our time in a hands-on editor.   What you'll leave with    A working PreTeXt authoring setup in your browser that you can return to tomorrow.  A small lesson you wrote yourself, on a topic you actually teach.  A shareable link to that lesson.     "
},
{
  "id": "sec-book-tour",
  "level": "1",
  "url": "sec-book-tour.html",
  "type": "Section",
  "number": "",
  "title": "4:10-4:20 What Can PreTeXt Do?",
  "body": " 4:10-4:20 What Can PreTeXt Do?   Before you write any PreTeXt yourself, it helps to see where this is going. The key idea is that you describe what your content is . It might be a definition, an example, an exercise, or an interactive. Then PreTeXt decides how it should look on the page, in a PDF, on a phone, or through a screen reader.  The gallery below shows some of what's possible. You are not expected to build any of this today. Skim it, get a sense of the range, and come back to it later when you want ideas.    Interactive Feature Gallery   GeoGebra  GeoGebra is a powerful tool for creating interactive math visualizations. You can build an applet in GeoGebra and then embed it directly into a PreTeXt document with a single tag.     Desmos  Desmos is another popular tool for creating interactive math visualizations. Like GeoGebra, Desmos graphs embed directly into a PreTeXt document.     Google Maps  Anything with an embed code will work, not just math tools. Here is a Google Map embedded the same way.     ✔ True\/False Questions  Auto-graded true\/false questions with targeted feedback. Students see an explanation tailored to the answer they gave.   True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinite.      ✔ Multiple-Choice Questions  Multiple choice with per-option feedback, hints that reveal in sequence, and the option to randomize choices at build time.   Multiple-Choice, Not Randomized, One Answer   What color is a stop sign?      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?  Maybe go out for a drive?     ✔ Matching Questions  Drag-and-drop matching, useful for pre-reading checks or review.  Exponential Integration Rules   Match each function of with its antiderivative. Assume is a constant.                               ✔ Clickable-Area Questions  Let students pick out the correct formula, diagram, or expression by clicking on it directly.   Integration by Parts   Click on the correct integration by parts formula.                      ✔ Fill-in-the-Blank Questions  Accept any answer in a given set, or write your own check with a small snippet of JavaScript for richer feedback.   Fill-In, Prime less then 20   What is an example of a prime number less than 20?       [2, 3, 5, 7, 11, 13, 17, 19].includes(Number(ans))   Any number from the list is a prime number less than 20.     function(){ const val=Number(ans); if (val <= 0) { return \"You need to give a positive integer.\" } if (val >= 20) { return \"The integer must be less than 20.\" } for (let i=2; i<=3; i++) { if (val % i == 0) { return `Your answer is composite since it is divisible by ${i}.` } } return false; }()        DoenetML  DoenetML is a newer platform designed specifically for interactive math documents. The example below lets students drag vectors to visualize a determinant identity, which is the kind of thing that is genuinely hard to show on paper.     JSXGraph  JSXGraph is a lightweight JavaScript library for interactive geometry and function plots. PreTeXt lets you author JSXGraph code in a separate file and pull it in with a short tag.         Textbook Tour  The features above are nice in isolation, but they're more convincing in context. The links below point at real textbook pages built with PreTeXt , each one showing off a different capability.   Sample Interactive Features    ▷ Audio with embedded narration.  ▷ Multi-part Questions , where one exercise is broken into scaffolded parts.  ▷ Interactive Visualization .  ▷ TikZ examples with latex graphics rendered as accessible SVG.  ▷ Slide Show , a lecture deck built from the same source.  ▷ More Visualization .      "
},
{
  "id": "vector-space-dimension",
  "level": "2",
  "url": "sec-book-tour.html#vector-space-dimension",
  "type": "Checkpoint",
  "number": "1",
  "title": "True\/False.",
  "body": " True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinite.   "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "sec-book-tour.html#multiple-choice-not-randomized",
  "type": "Checkpoint",
  "number": "2",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": " Multiple-Choice, Not Randomized, One Answer   What color is a stop sign?      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?  Maybe go out for a drive?  "
},
{
  "id": "lt-common-transforms-prereading-questions-1",
  "level": "2",
  "url": "sec-book-tour.html#lt-common-transforms-prereading-questions-1",
  "type": "Checkpoint",
  "number": "3",
  "title": "Exponential Integration Rules.",
  "body": "Exponential Integration Rules   Match each function of with its antiderivative. Assume is a constant.                            "
},
{
  "id": "lt-derivative-transfer-prereading-questions-2",
  "level": "2",
  "url": "sec-book-tour.html#lt-derivative-transfer-prereading-questions-2",
  "type": "Checkpoint",
  "number": "4",
  "title": "Integration by Parts.",
  "body": " Integration by Parts   Click on the correct integration by parts formula.                   "
},
{
  "id": "ex-demo-jscmp-primes",
  "level": "2",
  "url": "sec-book-tour.html#ex-demo-jscmp-primes",
  "type": "Checkpoint",
  "number": "5",
  "title": "Fill-In, Prime less then 20.",
  "body": " Fill-In, Prime less then 20   What is an example of a prime number less than 20?       [2, 3, 5, 7, 11, 13, 17, 19].includes(Number(ans))   Any number from the list is a prime number less than 20.     function(){ const val=Number(ans); if (val <= 0) { return \"You need to give a positive integer.\" } if (val >= 20) { return \"The integer must be less than 20.\" } for (let i=2; i<=3; i++) { if (val % i == 0) { return `Your answer is composite since it is divisible by ${i}.` } } return false; }()     "
},
{
  "id": "sec-pretextplus-tour",
  "level": "1",
  "url": "sec-pretextplus-tour.html",
  "type": "Section",
  "number": "",
  "title": "4:20-4:35 PreTeXt.Plus",
  "body": " 4:20-4:35 PreTeXt.Plus   For today's workshop, everyone works inside pretext.plus , a browser-based editor for PreTeXt that needs nothing installed. You'll make a free account, create a project, and get oriented to the editor. By the end of this phase, you should have an empty project open and be ready to paste in content.    Create your account     Go to pretext.plus and click Sign up . Use an email you can check right now because there's a confirmation step.    Confirm your email, then log in.       Create your first project     Click Projects in the top nav, then the blue New project button.    Give it a title. My First Lesson works fine. Then click Create .    Click the gray Edit button on your new project. The editor opens with PreTeXt source on the left and a live preview on the right.       Learn the rebuild rhythm  The preview does not update automatically. After every edit, you need to rebuild.    Click the green Rebuild button at the top right of the preview, or  Press Ctrl + S (this also saves your work).     The rhythm is: Edit → Rebuild → look at the preview. You'll repeat that cycle dozens of times this afternoon. It becomes automatic within about ten minutes.    A quick orientation  Before we start editing, take thirty seconds to notice:    The source panel on the left is where you type. It's PreTeXt XML, and we'll get to what that means in the next section.  The preview panel on the right is what your readers will see.  There's a short starter document already loaded. Don't delete it. You'll paste new material inside it.    You're ready. On to the exercises.   "
},
{
  "id": "pp-create-account-2",
  "level": "2",
  "url": "sec-pretextplus-tour.html#pp-create-account-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign up "
},
{
  "id": "pp-first-project-2",
  "level": "2",
  "url": "sec-pretextplus-tour.html#pp-first-project-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Projects New project Create Edit "
},
{
  "id": "pp-rebuild-rhythm-3",
  "level": "2",
  "url": "sec-pretextplus-tour.html#pp-rebuild-rhythm-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rebuild "
},
{
  "id": "sec-guided-practice",
  "level": "1",
  "url": "sec-guided-practice.html",
  "type": "Section",
  "number": "",
  "title": "4:35-5:00 Create a Syllabus",
  "body": " 4:35-5:00 Create a Syllabus   We're going to build a real syllabus together in four parts. A finished version lives at this target link . Open it in a separate tab now so you can compare as you go.  Placeholders like ==YourName== are yours to fill in or leave alone; whichever helps you focus on the tags.   Pair up with a neighbor. With a room this size, your neighbor is faster than I am. Ask them first; ask me if you're both stuck.       Part 1. Course and Instructor Information   Course Information   Complete the following tasks to build the course information section.     Paste this block into your PreTeXt.Plus project just above the closing <\/section> tag, then rebuild. You'll see seven lines run together as a single paragraph.  <p> Course: ==CourseName==, ==Term== Instructor: ==YourName== Email: ==yourname@example.edu== Office: ==OfficeLocation== Office Hours: ==OfficeHours==, or by appointment Lecture: ==MeetingTime==, ==Room== Course Website: ==CanvasURL== <\/p>  After you rebuild, you should see something like:   The seven contact lines rendered as a single run-on paragraph.       Now convert this into a formatted bulleted (unordered) list using:   <ul> , <li> to turn each line into a list item   <c> around the email address   <url> for the course website  Rebuild to see the transformation and verify that it resembles the target syllabus .    If you get stuck...  <p> <ul> <li>Course: ==CourseName==, ==Term==<\/li> <li>Instructor: ==YourName==<\/li> <li>Email: <c>==yourname@example.edu==<\/c><\/li> <li>Office: ==OfficeLocation==<\/li> <li>Office Hours: ==OfficeHours==, or by appointment<\/li> <li>Lecture: ==MeetingTime==, ==Room==<\/li> <li>Course Website: <url href=\"==URL==\">Canvas<\/url><\/li> <\/ul> <\/p>          Part 2. Course Description   Course Description   Complete the following tasks to build the course description section.     Paste this block into your project below what you just built, then rebuild. Three chunks of prose will collapse into one undivided wall of text, with math expressions appearing as plain characters.  <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. By the end of the course, a successful student will be able to differentiate polynomials like p(x) = x^3 - 2x + 1, exponentials like e^x, logarithms like ln(x), and trigonometric functions like sin(x) and cos(x). They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. Prerequisites: a grade of C or better in Precalculus, or a passing score on the mathematics placement exam. Students unsure whether they are adequately prepared should speak with me during the first week. <\/p>  After you rebuild, you should see something like:   Three paragraphs collapsed into one unstyled block with raw math characters visible.       Give this text proper structure and rendered math using:   <p> split into three separate paragraphs   <m> around each math expression   <em> on the word Prerequisites   Try rebuilding after each change to watch the math snap into place one expression at a time.  After the last rebuild, verify that it resembles the target syllabus .    If you get stuck...  <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. <\/p> <p> By the end of the course, a successful student will be able to differentiate polynomials like <m>p(x) = x^3 - 2x + 1<\/m>, exponentials like <m>e^x<\/m>, logarithms like <m>\\ln(x)<\/m>, and trigonometric functions like <m>\\sin(x)<\/m> and <m>\\cos(x)<\/m>. They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. <\/p> <p> <em>Prerequisites:<\/em> a grade of C or better in Precalculus, or a passing score on the mathematics placement exam. Students unsure whether they are adequately prepared should speak with me during the first week. <\/p>          Part 3. Graded Work   Graded Work   Complete the following tasks to build the graded work section. This one has two transformations: a description list for the policies, and a small table for the grade weights.     Paste this block into your project below what you just built, then rebuild. Six grading components will appear as one undivided block of prose.  <p> Homework: 20 percent. Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped. Quizzes: 10 percent. Short biweekly quizzes covering the recent material. Midterm 1: 20 percent. Held in class during Week 5. Closed book, closed notes, one handwritten reference sheet permitted. Midterm 2: 20 percent. Held in class during Week 10. Same format as Midterm 1. Final exam: 30 percent. Cumulative. Time and room set by the registrar. Grade cutoffs: at most A at 90 percent, B at 80, C at 70, D at 60. Cutoffs may be lowered at the end of the term but will never be raised. <\/p>      Turn the six components into a labeled description list using:   <dl> with <title> inside each <li>   Each component name goes in the <title> ; the description goes in a <p> . Rebuild.    If you get stuck...  <p> <dl> <li> <title>Homework (20%)<\/title> <p> Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped. <\/p> <\/li> <li> <title>Quizzes (10%)<\/title> <p>Short biweekly quizzes covering the recent material.<\/p> <\/li> <li> <title>Midterm 1 (20%)<\/title> <p> Held in class during Week 5. Closed book, closed notes, one handwritten reference sheet permitted. <\/p> <\/li> <li> <title>Midterm 2 (20%)<\/title> <p> Held in class during Week 10. Same format as Midterm 1. <\/p> <\/li> <li> <title>Final Exam (30%)<\/title> <p>Cumulative. Time and room set by the registrar.<\/p> <\/li> <li> <title>Grade Cutoffs<\/title> <p> At most A at 90 percent, B at 80, C at 70, D at 60. Cutoffs may be lowered at the end of the term but will never be raised. <\/p> <\/li> <\/dl> <\/p>      Pull the grade weights out of the list and display them as a compact two-column table. Add a <tabular> directly above the <dl> using:  <tabular> as the container  <row> for each component  <cell> for the name and the percentage  Rebuild.  After the last rebuild, verify that it resembles the target syllabus .    If you get stuck...  <tabular> <row><cell>Homework<\/cell><cell>20%<\/cell><\/row> <row><cell>Quizzes<\/cell><cell>10%<\/cell><\/row> <row><cell>Midterm 1<\/cell><cell>20%<\/cell><\/row> <row><cell>Midterm 2<\/cell><cell>20%<\/cell><\/row> <row><cell>Final Exam<\/cell><cell>30%<\/cell><\/row> <\/tabular>          Part 4. Course Schedule   Course Schedule   The last section, and the most dramatic transformation of the day. Tables are verbose, so this time we'll hand you a working <tabular> and walk through styling it together. Follow along as we go.     Paste this block into your project below the graded work section, then rebuild. You'll see a plain, unstyled sixteen-row table.  <tabular> <row> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell> <cell><p>Reading<\/p><\/cell> <\/row> <row> <cell>1<\/cell><cell>Aug 25-Aug 29<\/cell> <cell>Introduction; average\/instantaneous velocity<\/cell> <cell>1.1<\/cell> <\/row> <row> <cell>2<\/cell><cell>Sep 1-Sep 5<\/cell> <cell>The limit of a function; limit laws<\/cell> <cell>1.2<\/cell> <\/row> <row> <cell>3<\/cell><cell>Sep 8-Sep 12<\/cell> <cell>Continuity; limits at infinity<\/cell> <cell>1.3, 1.4<\/cell> <\/row> <row> <cell>4<\/cell><cell>Sep 15-Sep 19<\/cell> <cell>Definition of the derivative<\/cell> <cell>2.1, 2.2<\/cell> <\/row> <row> <cell>5<\/cell><cell>Sep 22-Sep 26<\/cell> <cell>Midterm 1<\/cell> <cell><\/cell> <\/row> <row> <cell>6<\/cell><cell>Sep 29-Oct 3<\/cell> <cell>Product\/quotient rules<\/cell> <cell>2.4, 2.5<\/cell> <\/row> <row> <cell>7<\/cell><cell>Oct 6-Oct 10<\/cell> <cell>The chain rule<\/cell> <cell>2.6<\/cell> <\/row> <row> <cell>8<\/cell><cell>Oct 13-Oct 17<\/cell> <cell>Implicit differentiation; inverse functions<\/cell> <cell>2.7, 2.8<\/cell> <\/row> <row> <cell>9<\/cell><cell>Oct 20-Oct 24<\/cell> <cell>Related rates; linear approximation<\/cell> <cell>3.1, 3.2<\/cell> <\/row> <row> <cell>10<\/cell><cell>Oct 27-Oct 31<\/cell> <cell>Midterm 2<\/cell> <cell><\/cell> <\/row> <row> <cell>11<\/cell><cell>Nov 3-Nov 7<\/cell> <cell>Increasing\/decreasing; Concavity<\/cell> <cell>3.4, 3.5<\/cell> <\/row> <row> <cell>12<\/cell><cell>Nov 10-Nov 14<\/cell> <cell>Optimization<\/cell> <cell>3.6<\/cell> <\/row> <row> <cell>13<\/cell><cell>Nov 17-Nov 21<\/cell> <cell>L'Hopital's rule; antiderivatives<\/cell> <cell>3.7, 4.1<\/cell> <\/row> <row> <cell>14<\/cell><cell>Dec 1-Dec 5<\/cell> <cell>The definite integral; Riemann sums<\/cell> <cell>4.2, 4.3<\/cell> <\/row> <row> <cell>15<\/cell><cell>Dec 8-Dec 12<\/cell> <cell>Fundamental Theorem of Calculus; review<\/cell> <cell>4.4<\/cell> <\/row> <row> <cell>16<\/cell><cell>Dec 16<\/cell> <cell>Final Exam, 8:00-10:00 am<\/cell> <cell>Cumulative<\/cell> <\/row> <\/tabular>      Now we'll style it together, one change at a time. Rebuild after each step to see the effect.     Mark the first row as a header by adding header=\"yes\" to its <row> tag.    Add borders by setting top=\"minor\" , bottom=\"minor\" , left=\"minor\" , and right=\"minor\" on the <tabular> tag.    Control column widths by adding four <col\/> elements before the first row. Try width=\"9%\" , width=\"40%\" , width=\"36%\" , and width=\"15%\" . Center the first two with halign=\"center\" .    Highlight the exam weeks by wrapping their topic cells in <alert> .     Compare your result to the target syllabus .    If you get stuck...  <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"9%\" halign=\"center\"\/> <col width=\"40%\" halign=\"center\"\/> <col width=\"36%\"\/> <col width=\"15%\"\/> <row header=\"yes\"> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell> <cell><p>Reading<\/p><\/cell> <\/row> <!-- ... rows 1-4 as before ... --> <row> <cell>5<\/cell><cell>Sep 22-Sep 26<\/cell> <cell><alert>Midterm 1<\/alert><\/cell> <cell><\/cell> <\/row> <!-- ... rows 6-9 as before ... --> <row> <cell>10<\/cell><cell>Oct 27-Oct 31<\/cell> <cell><alert>Midterm 2<\/alert><\/cell> <cell><\/cell> <\/row> <!-- ... rows 11-15 as before ... --> <row> <cell>16<\/cell><cell>Dec 16<\/cell> <cell><alert>Final Exam, 8:00-10:00 am<\/alert><\/cell> <cell>Cumulative<\/cell> <\/row> <\/tabular>      "
},
{
  "id": "exr-course-info",
  "level": "2",
  "url": "sec-guided-practice.html#exr-course-info",
  "type": "Checkpoint",
  "number": "6",
  "title": "Course Information.",
  "body": " Course Information   Complete the following tasks to build the course information section.     Paste this block into your PreTeXt.Plus project just above the closing <\/section> tag, then rebuild. You'll see seven lines run together as a single paragraph.  <p> Course: ==CourseName==, ==Term== Instructor: ==YourName== Email: ==yourname@example.edu== Office: ==OfficeLocation== Office Hours: ==OfficeHours==, or by appointment Lecture: ==MeetingTime==, ==Room== Course Website: ==CanvasURL== <\/p>  After you rebuild, you should see something like:   The seven contact lines rendered as a single run-on paragraph.       Now convert this into a formatted bulleted (unordered) list using:   <ul> , <li> to turn each line into a list item   <c> around the email address   <url> for the course website  Rebuild to see the transformation and verify that it resembles the target syllabus .    If you get stuck...  <p> <ul> <li>Course: ==CourseName==, ==Term==<\/li> <li>Instructor: ==YourName==<\/li> <li>Email: <c>==yourname@example.edu==<\/c><\/li> <li>Office: ==OfficeLocation==<\/li> <li>Office Hours: ==OfficeHours==, or by appointment<\/li> <li>Lecture: ==MeetingTime==, ==Room==<\/li> <li>Course Website: <url href=\"==URL==\">Canvas<\/url><\/li> <\/ul> <\/p>    "
},
{
  "id": "exr-description",
  "level": "2",
  "url": "sec-guided-practice.html#exr-description",
  "type": "Checkpoint",
  "number": "7",
  "title": "Course Description.",
  "body": " Course Description   Complete the following tasks to build the course description section.     Paste this block into your project below what you just built, then rebuild. Three chunks of prose will collapse into one undivided wall of text, with math expressions appearing as plain characters.  <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. By the end of the course, a successful student will be able to differentiate polynomials like p(x) = x^3 - 2x + 1, exponentials like e^x, logarithms like ln(x), and trigonometric functions like sin(x) and cos(x). They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. Prerequisites: a grade of C or better in Precalculus, or a passing score on the mathematics placement exam. Students unsure whether they are adequately prepared should speak with me during the first week. <\/p>  After you rebuild, you should see something like:   Three paragraphs collapsed into one unstyled block with raw math characters visible.       Give this text proper structure and rendered math using:   <p> split into three separate paragraphs   <m> around each math expression   <em> on the word Prerequisites   Try rebuilding after each change to watch the math snap into place one expression at a time.  After the last rebuild, verify that it resembles the target syllabus .    If you get stuck...  <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. <\/p> <p> By the end of the course, a successful student will be able to differentiate polynomials like <m>p(x) = x^3 - 2x + 1<\/m>, exponentials like <m>e^x<\/m>, logarithms like <m>\\ln(x)<\/m>, and trigonometric functions like <m>\\sin(x)<\/m> and <m>\\cos(x)<\/m>. They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. <\/p> <p> <em>Prerequisites:<\/em> a grade of C or better in Precalculus, or a passing score on the mathematics placement exam. Students unsure whether they are adequately prepared should speak with me during the first week. <\/p>    "
},
{
  "id": "exr-graded-work",
  "level": "2",
  "url": "sec-guided-practice.html#exr-graded-work",
  "type": "Checkpoint",
  "number": "8",
  "title": "Graded Work.",
  "body": " Graded Work   Complete the following tasks to build the graded work section. This one has two transformations: a description list for the policies, and a small table for the grade weights.     Paste this block into your project below what you just built, then rebuild. Six grading components will appear as one undivided block of prose.  <p> Homework: 20 percent. Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped. Quizzes: 10 percent. Short biweekly quizzes covering the recent material. Midterm 1: 20 percent. Held in class during Week 5. Closed book, closed notes, one handwritten reference sheet permitted. Midterm 2: 20 percent. Held in class during Week 10. Same format as Midterm 1. Final exam: 30 percent. Cumulative. Time and room set by the registrar. Grade cutoffs: at most A at 90 percent, B at 80, C at 70, D at 60. Cutoffs may be lowered at the end of the term but will never be raised. <\/p>      Turn the six components into a labeled description list using:   <dl> with <title> inside each <li>   Each component name goes in the <title> ; the description goes in a <p> . Rebuild.    If you get stuck...  <p> <dl> <li> <title>Homework (20%)<\/title> <p> Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped. <\/p> <\/li> <li> <title>Quizzes (10%)<\/title> <p>Short biweekly quizzes covering the recent material.<\/p> <\/li> <li> <title>Midterm 1 (20%)<\/title> <p> Held in class during Week 5. Closed book, closed notes, one handwritten reference sheet permitted. <\/p> <\/li> <li> <title>Midterm 2 (20%)<\/title> <p> Held in class during Week 10. Same format as Midterm 1. <\/p> <\/li> <li> <title>Final Exam (30%)<\/title> <p>Cumulative. Time and room set by the registrar.<\/p> <\/li> <li> <title>Grade Cutoffs<\/title> <p> At most A at 90 percent, B at 80, C at 70, D at 60. Cutoffs may be lowered at the end of the term but will never be raised. <\/p> <\/li> <\/dl> <\/p>      Pull the grade weights out of the list and display them as a compact two-column table. Add a <tabular> directly above the <dl> using:  <tabular> as the container  <row> for each component  <cell> for the name and the percentage  Rebuild.  After the last rebuild, verify that it resembles the target syllabus .    If you get stuck...  <tabular> <row><cell>Homework<\/cell><cell>20%<\/cell><\/row> <row><cell>Quizzes<\/cell><cell>10%<\/cell><\/row> <row><cell>Midterm 1<\/cell><cell>20%<\/cell><\/row> <row><cell>Midterm 2<\/cell><cell>20%<\/cell><\/row> <row><cell>Final Exam<\/cell><cell>30%<\/cell><\/row> <\/tabular>    "
},
{
  "id": "exr-schedule",
  "level": "2",
  "url": "sec-guided-practice.html#exr-schedule",
  "type": "Checkpoint",
  "number": "9",
  "title": "Course Schedule.",
  "body": " Course Schedule   The last section, and the most dramatic transformation of the day. Tables are verbose, so this time we'll hand you a working <tabular> and walk through styling it together. Follow along as we go.     Paste this block into your project below the graded work section, then rebuild. You'll see a plain, unstyled sixteen-row table.  <tabular> <row> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell> <cell><p>Reading<\/p><\/cell> <\/row> <row> <cell>1<\/cell><cell>Aug 25-Aug 29<\/cell> <cell>Introduction; average\/instantaneous velocity<\/cell> <cell>1.1<\/cell> <\/row> <row> <cell>2<\/cell><cell>Sep 1-Sep 5<\/cell> <cell>The limit of a function; limit laws<\/cell> <cell>1.2<\/cell> <\/row> <row> <cell>3<\/cell><cell>Sep 8-Sep 12<\/cell> <cell>Continuity; limits at infinity<\/cell> <cell>1.3, 1.4<\/cell> <\/row> <row> <cell>4<\/cell><cell>Sep 15-Sep 19<\/cell> <cell>Definition of the derivative<\/cell> <cell>2.1, 2.2<\/cell> <\/row> <row> <cell>5<\/cell><cell>Sep 22-Sep 26<\/cell> <cell>Midterm 1<\/cell> <cell><\/cell> <\/row> <row> <cell>6<\/cell><cell>Sep 29-Oct 3<\/cell> <cell>Product\/quotient rules<\/cell> <cell>2.4, 2.5<\/cell> <\/row> <row> <cell>7<\/cell><cell>Oct 6-Oct 10<\/cell> <cell>The chain rule<\/cell> <cell>2.6<\/cell> <\/row> <row> <cell>8<\/cell><cell>Oct 13-Oct 17<\/cell> <cell>Implicit differentiation; inverse functions<\/cell> <cell>2.7, 2.8<\/cell> <\/row> <row> <cell>9<\/cell><cell>Oct 20-Oct 24<\/cell> <cell>Related rates; linear approximation<\/cell> <cell>3.1, 3.2<\/cell> <\/row> <row> <cell>10<\/cell><cell>Oct 27-Oct 31<\/cell> <cell>Midterm 2<\/cell> <cell><\/cell> <\/row> <row> <cell>11<\/cell><cell>Nov 3-Nov 7<\/cell> <cell>Increasing\/decreasing; Concavity<\/cell> <cell>3.4, 3.5<\/cell> <\/row> <row> <cell>12<\/cell><cell>Nov 10-Nov 14<\/cell> <cell>Optimization<\/cell> <cell>3.6<\/cell> <\/row> <row> <cell>13<\/cell><cell>Nov 17-Nov 21<\/cell> <cell>L'Hopital's rule; antiderivatives<\/cell> <cell>3.7, 4.1<\/cell> <\/row> <row> <cell>14<\/cell><cell>Dec 1-Dec 5<\/cell> <cell>The definite integral; Riemann sums<\/cell> <cell>4.2, 4.3<\/cell> <\/row> <row> <cell>15<\/cell><cell>Dec 8-Dec 12<\/cell> <cell>Fundamental Theorem of Calculus; review<\/cell> <cell>4.4<\/cell> <\/row> <row> <cell>16<\/cell><cell>Dec 16<\/cell> <cell>Final Exam, 8:00-10:00 am<\/cell> <cell>Cumulative<\/cell> <\/row> <\/tabular>      Now we'll style it together, one change at a time. Rebuild after each step to see the effect.     Mark the first row as a header by adding header=\"yes\" to its <row> tag.    Add borders by setting top=\"minor\" , bottom=\"minor\" , left=\"minor\" , and right=\"minor\" on the <tabular> tag.    Control column widths by adding four <col\/> elements before the first row. Try width=\"9%\" , width=\"40%\" , width=\"36%\" , and width=\"15%\" . Center the first two with halign=\"center\" .    Highlight the exam weeks by wrapping their topic cells in <alert> .     Compare your result to the target syllabus .    If you get stuck...  <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"9%\" halign=\"center\"\/> <col width=\"40%\" halign=\"center\"\/> <col width=\"36%\"\/> <col width=\"15%\"\/> <row header=\"yes\"> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell> <cell><p>Reading<\/p><\/cell> <\/row> <!-- ... rows 1-4 as before ... --> <row> <cell>5<\/cell><cell>Sep 22-Sep 26<\/cell> <cell><alert>Midterm 1<\/alert><\/cell> <cell><\/cell> <\/row> <!-- ... rows 6-9 as before ... --> <row> <cell>10<\/cell><cell>Oct 27-Oct 31<\/cell> <cell><alert>Midterm 2<\/alert><\/cell> <cell><\/cell> <\/row> <!-- ... rows 11-15 as before ... --> <row> <cell>16<\/cell><cell>Dec 16<\/cell> <cell><alert>Final Exam, 8:00-10:00 am<\/alert><\/cell> <cell>Cumulative<\/cell> <\/row> <\/tabular>    "
},
{
  "id": "sec-whats-next",
  "level": "1",
  "url": "sec-whats-next.html",
  "type": "Section",
  "number": "",
  "title": "5:00-5:05 What’s Next?",
  "body": " 5:00-5:05 What's Next?  Quick pause to set up the back half. After a five-minute break you'll leave these small exercises behind and build a worksheet lesson of your own: about twenty-five minutes to write, five minutes to share with a neighbor, then we'll look at a few lessons together and close with next steps and questions.  "
},
{
  "id": "sec-break",
  "level": "1",
  "url": "sec-break.html",
  "type": "Section",
  "number": "",
  "title": "5:05-5:10 Break",
  "body": " 5:05-5:10 Break  Take five. Stretch, refill water, say hi to a neighbor. We'll start again at 5:10.  "
},
{
  "id": "sec-build-lesson",
  "level": "1",
  "url": "sec-build-lesson.html",
  "type": "Section",
  "number": "",
  "title": "5:10-5:35 Worksheet Lesson",
  "body": " 5:10-5:35 Worksheet Lesson   In this phase of the workshop, you'll be given an HTML-rendered worksheet and your goal will be to replicate it using the structures you met while creating the syllabus, plus a handful of new ones we will point out along the way.    Tour the Target  Open the worksheet Product Rule Lesson Worksheet . We'll walk through what the students would see and discuss the elements involved in building it.    Initialize Your Project     New Project  In PreTeXt.Plus:  Click Projects on the top navigation bar.  Click the + New Project button.  Choose PreTeXt for the Source format .  Name your project \"Product Rule Worksheet\" .  Click Create Project .         Choose Your Own Adventure   PATH A: Build your Own  If you would like to take off the training wheels and build the worksheet from scratch, then go ahead and get started. You can choose your own topic and use the for templates and reference. If you get stuck, you can always come back to the guided instructions in \"PATH B: Guided Build\".    PATH B: Guided Build  If you would like a more guided experience, follow the instructions below to recreate the Product Rule Lesson Worksheet step by step. The instructions are designed to be followed in order, but feel free to skip around if you want to work on a particular part of the worksheet first.    As you work through the steps below, click Rebuild or press Ctrl + S after each one to see your progress in the preview pane.    Worksheet   The <worksheet> tag will span your entire PreTeXt document. Paste the 📋 worksheet template over the default <section> currently in your project.     Title   Fill the <title> tag with The Product Rule .     Objectives   Replace the <objectives> placeholder with the 📋 objectives template , then copy and paste each objective from the target worksheet.     Page Structure   Inside the first <page> , paste the following blocks in order:  📋 paragraph  📋 definition  📋 paragraph  📋 example  📋 exercise with tasks       Paragraphs   Copy the two short paragraphs from the target worksheet, namely the lead-in sentence and the bridge sentence before the example, into your two <p> tags.     Definition   Add xml:id=\"def-product-rule\" to the <definition> tag so you can cross-reference it later. Then copy the definition text from the target worksheet into the <p> inside <statement> . For the math, right-click any expression in the rendered worksheet and choose Copy to Clipboard ▸ TeX Commands .     Example   Add xml:id=\"ex-applying-product-rule\" and set the <title> to Applying the product rule . Copy the problem statement and solution text from the target worksheet. In the solution, link back to the definition using <xref ref=\"def-product-rule\"> .     Practice Exercises   Give the exercise a <title> of Practice and a <workspace> of 2.5in . Add an <introduction> that references <xref ref=\"def-product-rule\"> . Then add two <task> elements, one for each function in the target worksheet, each with a <statement> and an <answer> .        If you get stuck     Red error in the preview  Almost always a missing or mismatched tag. The error message usually has a line number. If you can't find it, paste the relevant template again and re-edit more carefully.    Preview didn't update  Click Rebuild or press Ctrl + S . The preview doesn't refresh on its own.    Lost your work  Click Projects in the top nav. It's saved.    Anything else  Ask the person next to you, or raise your hand.       🕰️ If you finish early  If you finish building the worksheet before 5:45, go ahead and move on to the next self-guided section where you'll add some interactive questions to your worksheet.   "
},
{
  "id": "bl-initialize-project-2",
  "level": "2",
  "url": "sec-build-lesson.html#bl-initialize-project-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Projects + New Project PreTeXt Source format \"Product Rule Worksheet\" Create Project "
},
{
  "id": "bl-cyoa-3-3",
  "level": "2",
  "url": "sec-build-lesson.html#bl-cyoa-3-3",
  "type": "Checkpoint",
  "number": "10",
  "title": "",
  "body": "  As you work through the steps below, click Rebuild or press Ctrl + S after each one to see your progress in the preview pane.    Worksheet   The <worksheet> tag will span your entire PreTeXt document. Paste the 📋 worksheet template over the default <section> currently in your project.     Title   Fill the <title> tag with The Product Rule .     Objectives   Replace the <objectives> placeholder with the 📋 objectives template , then copy and paste each objective from the target worksheet.     Page Structure   Inside the first <page> , paste the following blocks in order:  📋 paragraph  📋 definition  📋 paragraph  📋 example  📋 exercise with tasks       Paragraphs   Copy the two short paragraphs from the target worksheet, namely the lead-in sentence and the bridge sentence before the example, into your two <p> tags.     Definition   Add xml:id=\"def-product-rule\" to the <definition> tag so you can cross-reference it later. Then copy the definition text from the target worksheet into the <p> inside <statement> . For the math, right-click any expression in the rendered worksheet and choose Copy to Clipboard ▸ TeX Commands .     Example   Add xml:id=\"ex-applying-product-rule\" and set the <title> to Applying the product rule . Copy the problem statement and solution text from the target worksheet. In the solution, link back to the definition using <xref ref=\"def-product-rule\"> .     Practice Exercises   Give the exercise a <title> of Practice and a <workspace> of 2.5in . Add an <introduction> that references <xref ref=\"def-product-rule\"> . Then add two <task> elements, one for each function in the target worksheet, each with a <statement> and an <answer> .    "
},
{
  "id": "bl-if-stuck-2",
  "level": "2",
  "url": "sec-build-lesson.html#bl-if-stuck-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rebuild Projects "
},
{
  "id": "sec-interactive-questions",
  "level": "1",
  "url": "sec-interactive-questions.html",
  "type": "Section",
  "number": "",
  "title": "5:35-5:45 Interactive Questions",
  "body": " 5:35-5:45 Interactive Questions   Creating interactive questions can transform the learning experience. They allow students to test their understanding and receive instant feedback.  Add another <page> to your worksheet and create one or two interactive questions related to the product rule using the templates below. Feel free to get creative with this part.    True-False  Using the 📋 True-False Template produces the following exercise:   Exercise Title   A statement that might be true or false.    Why the statement is true or false.      Multiple-Choice\/Multiple-Answer  Using the 📋 Multiple Choice Template produces the following exercise:   Exercise Title  Problem Statement    Distractor.  Why this is wrong.    Correct answer.  Why this is right.    Distractor.  Why this is wrong.       Cardsort-Matching  Using the 📋 Cardsort\/Matching Template produces the following exercise:   Exercise Title  Problem Statement  General Feedback    Item 1  Target 1    Item 2  Target 2    Item 3a  Item 3b  Item 3c  Target 3    Distractor Item    Distractor Target       Clickable Area  Using the 📋 Clickable Area Template produces the following exercise:   Exercise Title  Problem Statement   Normal text here CLICK ME (✔️) , no CLICK ME (❌) more normal text.    CLICK ME (❌)  CLICK ME (✔️)  CLICK ME (❌)     General Feedback    "
},
{
  "id": "ex-tf",
  "level": "2",
  "url": "sec-interactive-questions.html#ex-tf",
  "type": "Checkpoint",
  "number": "11",
  "title": "Exercise Title.",
  "body": " Exercise Title   A statement that might be true or false.    Why the statement is true or false.   "
},
{
  "id": "ex-mc",
  "level": "2",
  "url": "sec-interactive-questions.html#ex-mc",
  "type": "Checkpoint",
  "number": "12",
  "title": "Exercise Title.",
  "body": " Exercise Title  Problem Statement    Distractor.  Why this is wrong.    Correct answer.  Why this is right.    Distractor.  Why this is wrong.    "
},
{
  "id": "chkpt-matching",
  "level": "2",
  "url": "sec-interactive-questions.html#chkpt-matching",
  "type": "Checkpoint",
  "number": "13",
  "title": "Exercise Title.",
  "body": " Exercise Title  Problem Statement  General Feedback    Item 1  Target 1    Item 2  Target 2    Item 3a  Item 3b  Item 3c  Target 3    Distractor Item    Distractor Target    "
},
{
  "id": "chkpt-fill-in-the-blank",
  "level": "2",
  "url": "sec-interactive-questions.html#chkpt-fill-in-the-blank",
  "type": "Checkpoint",
  "number": "14",
  "title": "Exercise Title.",
  "body": " Exercise Title  Problem Statement   Normal text here CLICK ME (✔️) , no CLICK ME (❌) more normal text.    CLICK ME (❌)  CLICK ME (✔️)  CLICK ME (❌)     General Feedback  "
},
{
  "id": "sec-sharing-your-work",
  "level": "1",
  "url": "sec-sharing-your-work.html",
  "type": "Section",
  "number": "",
  "title": "5:45-5:50 Sharing Your Work",
  "body": " 5:45-5:50 Sharing Your Work  Now that you've created your lesson, it's time to share it. There are multiple ways to share your work, depending on your teaching context.   How to share your link     Save your project ( Ctrl + S ) and click Back to projects .    Click your project, then Sharable link .    Copy the URL and give it to your neighbor on paper, by email, or just by turning your screen.       Embedding in your LMS  If you're using a learning management system (LMS) like Canvas, Blackboard, or Moodle, you can embed your PreTeXt.Plus lesson directly into an assignment. Most LMS platforms support embedding external content via an iframe or external tool link. Simply copy the shareable link from PreTeXt.Plus and paste it into your LMS assignment as an external URL or embed code.  If your LMS doesn't support embedding or you prefer a simpler approach, you can also just share the link directly with students through your LMS announcements, assignment descriptions, or course homepage.   "
},
{
  "id": "sec-sharing-your-work-3-2",
  "level": "2",
  "url": "sec-sharing-your-work.html#sec-sharing-your-work-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Back to projects Sharable link "
},
{
  "id": "sec-next-steps",
  "level": "1",
  "url": "sec-next-steps.html",
  "type": "Section",
  "number": "",
  "title": "5:50-6:00 Next Steps and Q &amp; A",
  "body": " 5:50-6:00 Next Steps and Q & A  You now have a working lesson, a shareable link, and the rhythm of PreTeXt authoring. Here are three directions you might take it next.   Keep using PreTeXt.Plus  Your free account stays. You can create up to ten projects. If you adopt PreTeXt seriously, this is a perfectly good home for a while.    Move to GitHub Codespaces when you're ready  When you want multi-file projects, custom assets, or to publish to your own github.io URL, the Codespaces workflow gives you all of that with the same browser-based feel. The Codespace Guide chapter in this hub walks through the process. There are also some YouTube videos that make good starting points.    Install locally (long-term)  Eventually, some of you will want PreTeXt running on your own machine. When that day comes, start at PreTeXt Homepage . No rush. The PreTeXt Plus and GitHub codespace workflows will take you far.    Community  The PreTeXt community is active and welcoming. See the in this hub for forums, documentation, and the author's guide.    Questions  Ask whatever's on your mind, whether it's about today, about where to go next, or about whether PreTeXt fits a specific thing you teach. The floor is yours.   "
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
