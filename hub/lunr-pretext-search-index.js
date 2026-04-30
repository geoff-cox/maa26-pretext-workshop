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
  "body": " PreTeXt Cheatsheet  The tags you will reach for most often. Copy, paste, adapt. See pretextbook.org for the official documentation.      Document Structure     Divisional levels  <part> <!-- Level 0 --> <chapter> <!-- Level 1 --> <section> <!-- Level 2 --> <subsection> <!-- Level 3 --> <subsubsection> <!-- Level 4 --> <\/subsubsection> <\/subsection> <\/section> <\/chapter> <\/part>    A section, front to back  <section> <title>Section Title<\/title> <introduction>...<\/introduction> <subsection>...<\/subsection> <subsection>...<\/subsection> <conclusion>...<\/conclusion> <exercises>...<\/exercises> <\/section>          Paragraphs     Paragraph  <p> Text in a paragraph. <\/p>    Paragraphs (grouped with title)  <paragraphs> <title>Group Title<\/title> <p>paragraph 1<\/p> <p>paragraph 2<\/p> <\/paragraphs>          Inline Formatting     Emphasis  <em>emphasis<\/em>  Renders as: emphasis .    New term  <term>new term<\/term>  Renders as: new term (bold). Use when introducing vocabulary for the first time.    Inline code  <c>inline code<\/c>  Renders as: inline code . Use for filenames, code, etc.    Alert  <alert>attention<\/alert>  Renders as: attention (bold italic). Use sparingly for genuine emphasis.          Lists     Unordered list  <ul> <li><p>item<\/p><\/li> <li><p>item<\/p><\/li> <\/ul>  The <p> tags inside <li> are optional when the item is a single paragraph.    Ordered list  <ol> <li>item<\/li> <li>item<\/li> <li>item<\/li> <\/ol>  Add cols=\"2\" or cols=\"3\" on the <ol> to lay items out in columns.    Description list  <dl> <li> <title>Term<\/title> <p>Description.<\/p> <\/li> <li> <title>Term<\/title> <p>Description.<\/p> <\/li> <\/dl>  Optional attribute: width=\"narrow|medium|wide\" to adjust title vs. description width.          Math     Inline  <m>x^2 + 1<\/m>    Display, single-line  <md>\\sum_{i=1}^n x_i^2<\/md>    Numbered display equation  <md number=\"yes\">e^{i\\pi} + 1 = 0<\/md>  Give the equation an xml:id to reference it with <xref> .    Aligned, multi-line  <md> <mrow>a^2 + b^2 \\amp = c^2<\/mrow> <mrow>y \\amp = mx + b<\/mrow> <mrow>m \\amp = \\frac{y-b}{x}<\/mrow> <mrow> \\amp = \\frac{14}{3}<\/mrow> <\/md>  The \\amp character is the alignment anchor ( & in latex ).          Definitions, Theorems, Examples     Definition  <definition xml:id=\"def-x\"> <statement>...<\/statement> <\/definition>  The xml:id is optional, but add one if you want to cross-reference the definition later with <xref> .    Theorem with proof  <theorem> <statement>...<\/statement> <proof>...<\/proof> <\/theorem>    Example  <example xml:id=\"ex-x\"> <title>...<\/title> <statement>...<\/statement> <solution>...<\/solution> <\/example>  The <solution> is optional. If you include it, it renders as a knowl the reader can expand.    Remark  <remark> <p>A note.<\/p> <\/remark>    Aside  <aside> <p>A short aside.<\/p> <\/aside>  An <aside> renders in the margin (on wide screens) or inline (on narrow ones), visually distinct from a <remark> .          Exercises     Simple exercise  <exercise> <statement>...<\/statement> <\/exercise>    Exercise with tasks  <exercise xml:id=\"exr-x\"> <introduction>...<\/introduction> <task> <statement>...<\/statement> <answer>...<\/answer> <\/task> <task> <statement>...<\/statement> <answer>...<\/answer> <\/task> <\/exercise>  Use <task> for multi-part exercises. Each part gets its own answer knowl.    Hint, answer, solution  <exercise xml:id=\"exr-y\"> <statement>...<\/statement> <hint>...<\/hint> <answer>...<\/answer> <solution>...<\/solution> <\/exercise>  All three are optional. Order matters: <statement> first, then any combination of <hint> , <answer> , <solution> .          Worksheets     Worksheet  <worksheet xml:id=\"ws-x\"> <title>...<\/title> <objectives>...<\/objectives> <page>...<\/page> <page>...<\/page> <\/worksheet>  A <worksheet> is a special environment that behaves like a <section> , but is styled differently and supports printing. <worksheet> can be split across <page> elements to help control the layout.  While <title> , <objectives> , and <page> elements are common child elements of worksheets, they are optional.    Objectives  <objectives> <ul> <li>...<\/li> <li>...<\/li> <li>...<\/li> <\/ul> <\/objectives>  Place at the top of a worksheet or chapter.    Exercise with workspace  <exercise workspace=\"2.5in\"> <statement>...<\/statement> <\/exercise>  Add workspace=\"2.5in\" to an exercise inside a worksheet to leave blank space for student work when the worksheet is printed. Adjust the measurement to suit the problem.          Interactive Questions     True \/ False  <exercise xml:id=\"ex-tf\"> <title> Exercise Title <\/title> <statement correct=\"no\"> <p> A statement that might be true or false. <\/p> <\/statement> <feedback> <p> Why the statement is true or false. <\/p> <\/feedback> <\/exercise>  The true and false indicators are correct=\"yes\" and correct=\"no\" , respectively goes directly inside the <statement> tag.    Multiple-Choice & Multiple-Answer  <exercise xml:id=\"ex-mc\"> <title> Exercise Title <\/title> <statement> Problem Statement <\/statement> <choices randomize=\"yes\"> <choice> <statement> Distractor. <\/statement> <feedback> Why this is wrong. <\/feedback> <\/choice> <choice correct=\"yes\"> <statement> Correct answer. <\/statement> <feedback> Why this is right. <\/feedback> <\/choice> <choice> <statement> Distractor. <\/statement> <feedback> Why this is wrong. <\/feedback> <\/choice> <\/choices> <\/exercise>  When exactly one <choice> has correct=\"yes\" , it is a multiple-choice question. When more than one <choice> has correct=\"yes\" , it is a multiple-answer question. Optional randomize=\"yes\" on <choices> shuffles the order.    Cardsort-Matching  <exercise label=\"chkpt-matching\"> <title> Exercise Title <\/title> <statement> Problem Statement <\/statement> <feedback> General Feedback <\/feedback> <cardsort> <match> <premise> Item 1 <\/premise> <response> Target 1 <\/response> <\/match> <match> <premise> Item 2 <\/premise> <response> Target 2 <\/response> <\/match> <match> <premise> Item 3a <\/premise> <premise> Item 3b <\/premise> <premise> Item 3c <\/premise> <response> Target 3 <\/response> <\/match> <match> <premise> Distractor Item <\/premise> <\/match> <match> <response> Distractor Target <\/response> <\/match> <\/cardsort> <\/exercise>     Clickable Area  <exercise label=\"chkpt-fill-in-the-blank\"> <title> Exercise Title <\/title> <statement> Problem Statement <\/statement> <areas> <p> Non-Clickable Text * <area> Correct Clickable Item 1 <\/area> * <area> Correct Clickable Item 2 <\/area> * <area correct=\"no\"> Incorrect Clickable <\/area> * <area> Correct Clickable Item 3 <\/area> * <area correct=\"no\"> Incorrect Clickable <\/area> * <\/p> <\/areas> <feedback> General Feedback <\/feedback> <\/exercise>           Links & Cross-references     External link  <url href=\"https:\/\/abc.com\"> click here <\/url>    Internal cross-reference  <xref ref=\"def-x\"\/> <xref ref=\"def-x\" text=\"title\"\/> <xref ref=\"def-x\" text=\"custom\">see here<\/xref>  The target must have an xml:id . Default link text is auto-generated (e.g., Definition 3.1 ); text=\"title\" uses the target's title; text=\"custom\" lets you write your own link text between the opening and closing tags.          Figures     Figure with image  <figure xml:id=\"fig-x\"> <caption>My caption.<\/caption> <image source=\"path.png\"> <shortdescription> Brief alt text. <\/shortdescription> <\/image> <\/figure>  Every image needs a <shortdescription> for screen readers. Keep it brief and literal. Describe what the image shows, not what it means.          Tables     Minimal table  <tabular> <row> <cell>A<\/cell> <cell>B<\/cell> <\/row> <row> <cell>C<\/cell> <cell>D<\/cell> <\/row> <\/tabular>    Table with a header row  <tabular> <row header=\"yes\"> <cell>Name<\/cell> <cell>Value<\/cell> <\/row> <row> <cell>...<\/cell> <cell>...<\/cell> <\/row> <\/tabular>    Table with borders and column widths  <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"30%\" halign=\"center\"\/> <col width=\"70%\"\/> <row header=\"yes\"> <cell>Name<\/cell> <cell>Description<\/cell> <\/row> <row> <cell>...<\/cell> <cell>...<\/cell> <\/row> <\/tabular>  Border options: none , minor , medium , major . Alignment options: left , center , right .      "
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
  "id": "sec-start-here",
  "level": "1",
  "url": "sec-start-here.html",
  "type": "Section",
  "number": "",
  "title": "Start Here",
  "body": " Start Here   What you will build    A small syllabus page that practices document structure, lists, inline formatting, math, and tables.   A worksheet lesson that uses  <worksheet> ,  <definition> ,  <example> , and  <exercise> with <task>s .     An interactive reading check with auto-graded questions that you can share online.      Your working rhythm  In PreTeXt .Plus, the rhythm is simple: Edit → Rebuild → Preview. The preview does not update on its own, so plan to click Rebuild or press Ctrl + S after every meaningful change.  If a step asks you to compare against a finished model, open that target in another tab so you can glance back and forth while you work.    When you get stuck  Most beginner errors are ordinary XML errors: a missing closing tag, a tag typed in the wrong place, or content pasted outside the environment that should contain it. When that happens, compare your source to the linked template in the , rebuild again, and make one small correction at a time.  If you want more context after this tutorial, the , , and chapters are the next places to go.   "
},
{
  "id": "sec-start-here-3-2",
  "level": "2",
  "url": "sec-start-here.html#sec-start-here-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rebuild "
},
{
  "id": "sec-see-what-is-possible",
  "level": "1",
  "url": "sec-see-what-is-possible.html",
  "type": "Section",
  "number": "",
  "title": "See What PreTeXt Can Do",
  "body": " See What PreTeXt Can Do    These slides contain a short orientation into PreTeXt . Feel free to review them before you start the tutorial, but they are not required.  Before you build anything, it helps to see the range. The core idea of PreTeXt is that you describe what a piece of content is , whether it be a definition, an example, an exercise, an interactive and the system handles presentation for web, print, and accessibility.  You do not need to recreate these examples today. They are here to give you a sense of what becomes possible once the syntax starts to feel familiar.    Interactive Feature Gallery   GeoGebra  A GeoGebra applet can be embedded directly in a PreTeXt page.     True\/False  Auto-graded true\/false questions are one of the fastest ways to add lightweight interactivity.   True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has an infinite basis, so not every vector space is finite-dimensional.      Multiple Choice  Multiple-choice questions can include feedback for every option.   Multiple Choice   What color is a stop sign?     Green  Green means go , not stop .    Red  Red is the standard stop-sign color.    White  White would be hard to see in many settings.        See These Features in Real Books  The examples above are useful on their own, but it is even better to see them in context. These pages come from existing PreTeXt books and lessons.   Sample Pages    ▷ Audio with embedded narration.  ▷ Multi-part Questions with scaffolded parts.  ▷ Interactive Visualization .  ▷ TikZ Graphics rendered as accessible SVG.      "
},
{
  "id": "tutorial-gallery-tf-3",
  "level": "2",
  "url": "sec-see-what-is-possible.html#tutorial-gallery-tf-3",
  "type": "Checkpoint",
  "number": "1",
  "title": "True\/False.",
  "body": " True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has an infinite basis, so not every vector space is finite-dimensional.   "
},
{
  "id": "tutorial-gallery-mc-3",
  "level": "2",
  "url": "sec-see-what-is-possible.html#tutorial-gallery-mc-3",
  "type": "Checkpoint",
  "number": "2",
  "title": "Multiple Choice.",
  "body": " Multiple Choice   What color is a stop sign?     Green  Green means go , not stop .    Red  Red is the standard stop-sign color.    White  White would be hard to see in many settings.    "
},
{
  "id": "sec-pretextplus-setup",
  "level": "1",
  "url": "sec-pretextplus-setup.html",
  "type": "Section",
  "number": "",
  "title": "Set Up PreTeXt.Plus",
  "body": " Set Up PreTeXt .Plus   The rest of this tutorial happens in pretext.plus . If you already have an account, skip to the project steps below. Otherwise, take two minutes to get oriented.   If possible, use an .edu email  If you have an .edu email address, use it to sign up. This gives you direct access to a free account. Otherwise, you'll have to request an invitation code from support@pretext.plus to complete this tutorial.     Create or Open Your Account     Go to pretext.plus and choose Sign up if you are new.    Confirm your email, then sign in.    Notice the list of projects. This is where you will return each time you come back to continue the tutorial.       Create a Fresh Project     Click Projects , then New project .    Give the project a clear title. You will create a new project for each guided build, so choose names you will recognize later.    Open the project with Edit . The source appears on the left and the preview appears on the right.       Know the Three Panels You Need    The source panel is where you type XML.  The preview panel shows the built result.  The project list is how you return to saved work later.    That is enough to begin. The first guided build focuses on the handful of tags that most new authors need right away.   "
},
{
  "id": "sec-pretextplus-setup-2-2",
  "level": "2",
  "url": "sec-pretextplus-setup.html#sec-pretextplus-setup-2-2",
  "type": "Remark",
  "number": "3",
  "title": "If possible, use an <code class=\"code-inline tex2jax_ignore\">.edu<\/code> email.",
  "body": " If possible, use an .edu email  If you have an .edu email address, use it to sign up. This gives you direct access to a free account. Otherwise, you'll have to request an invitation code from support@pretext.plus to complete this tutorial.  "
},
{
  "id": "tutorial-account-2",
  "level": "2",
  "url": "sec-pretextplus-setup.html#tutorial-account-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign up "
},
{
  "id": "tutorial-first-project-2",
  "level": "2",
  "url": "sec-pretextplus-setup.html#tutorial-first-project-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Projects New project Edit "
},
{
  "id": "sec-guided-project-syllabus",
  "level": "1",
  "url": "sec-guided-project-syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Project 1: Build a Syllabus",
  "body": " Project 1: Build a Syllabus   This first project is deliberately plain. That is a feature, not a limitation. A syllabus is a good beginner project because it practices the structures that appear everywhere else in PreTeXt :  <section> and <subsection> ,  <p> ,  lists ,  links ,  inline math , and  tables    Create a new project called Calculus 1 Syllabus . Keep the finished model open in another tab: target syllabus .    Part 1. Build the Overall Structure   Set up the section and subsection skeleton   Start by shaping the document before you worry about wording. This makes every later paste easier because you already know where each chunk belongs.     Delete the starter content and paste a single <section> template into your project.    Target shape  <section> <title>Calculus I Syllabus<\/title> <subsection> <title>Course and Instructor Information<\/title> <\/subsection> <subsection> <title>Course Description<\/title> <\/subsection> <subsection> <title>Graded Work<\/title> <\/subsection> <subsection> <title>Course Schedule<\/title> <\/subsection> <\/section>      Rebuild and confirm that the preview now shows one section with four empty subsections. If it does, your document structure is ready for content.       Part 2. Course and Instructor Information   Turn plain text into a structured list    Paste the block below into your first subsection, rebuild once, and notice that the content appears as one continuous paragraph.  <p> Course: ==CourseName==, ==Term== Instructor: ==YourName== Email: ==yourname@example.edu== Office: ==OfficeLocation== Office Hours: ==OfficeHours== Lecture: ==MeetingTime==, ==Room== Course Website: ==CanvasURL== <\/p>      Convert that paragraph into a formatted list using:  <ul> and <li> for the seven lines,  <c> for the email address, and  <url> for the course website.      If you want to compare  <subsection> <title>Course and Instructor Information<\/title> <p> <ul> <li>Course: ==CourseName==, ==Term==<\/li> <li>Instructor: ==YourName==<\/li> <li>Email: <c>==yourname@example.edu==<\/c><\/li> <li>Office: ==OfficeLocation==<\/li> <li>Office Hours: ==OfficeHours==<\/li> <li>Lecture: ==MeetingTime==, ==Room==<\/li> <li>Course Website: <url href=\"==URL==\">Canvas<\/url><\/li> <\/ul> <\/p> <p> The best way to reach me outside of office hours is by email. I aim to reply within one business day. <\/p> <\/subsection>       Part 3. Course Description   Separate paragraphs and mark up the math    Paste the following into the second subsection and rebuild. The prose will look dense and the math will render as plain text.  <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. By the end of the course, a successful student will be able to differentiate polynomials like p(x) = x^3 - 2x + 1, exponentials like e^x, logarithms like ln(x), and trigonometric functions like sin(x) and cos(x). They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. <\/p>      Improve the structure by splitting the text into two <p> tags , wrapping every formula with <m> , and emphasizing the word Prerequisites somewhere in a final sentence with <em> .    One clean version  <subsection> <title>Course Description<\/title> <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. <\/p> <p> By the end of the course, a successful student will be able to differentiate polynomials like <m>p(x)=x^3-2x+1<\/m>, exponentials like <m>e^x<\/m>, logarithms like <m>\\ln(x)<\/m>, and trigonometric functions like <m>\\sin(x)<\/m> and <m>\\cos(x)<\/m>. They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. <\/p> <p> <em>Prerequisites:<\/em> successful completion of precalculus or the equivalent. <\/p> <\/subsection>       Part 4. Graded Work   Use a description list and a table together    Paste the block below into the third subsection. Rebuild once so you can see why plain text is not the right structure for policy information.  <p> Homework: 20 percent. Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped. Quizzes: 10 percent. Short biweekly quizzes covering the recent material. Midterm 1: 20 percent. Closed book, closed notes, one handwritten reference sheet permitted. Midterm 2: 20 percent. Same format as Midterm 1. Final exam: 30 percent. Cumulative. Time and room set by the registrar. Grade cutoffs: A at 90 percent or above, B at 80 percent or above, C at 70 percent or above, D at 60 percent or above. Cutoffs may be lowered at the end of the term but will never be raised. <\/p>      Turn the policy text into a <dl> description list . Put each grading component in the <title> of an item and each explanation in a <p>.      Add a summary table above the description list using the <tabular>, <row>, and <cell> templates. Two columns are enough: the component and the percentage.    Checkpoint  <subsection> <title>Graded Work<\/title> <tabular> <row> <cell>Homework<\/cell> <cell>20%<\/cell> <\/row> <row> <cell>Quizzes<\/cell> <cell>10%<\/cell> <\/row> <row> <cell>Midterm 1<\/cell> <cell>20%<\/cell> <\/row> <row> <cell>Midterm 2<\/cell> <cell>20%<\/cell> <\/row> <row> <cell>Final Exam<\/cell> <cell>30%<\/cell> <\/row> <\/tabular> <p> <dl> <li> <title>Homework<\/title> <p>Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped.<\/p> <\/li> <li> <title>Quizzes<\/title> <p>Short biweekly quizzes covering the recent material.<\/p> <\/li> <li> <title>Midterm 1<\/title> <p>Closed book, closed notes, one handwritten reference sheet permitted.<\/p> <\/li> <li> <title>Midterm 2<\/title> <p>Same format as Midterm 1.<\/p> <\/li> <li> <title>Final Exam<\/title> <p>Cumulative. Time and room set by the registrar.<\/p> <\/li> <li> <title>Grade Cutoffs<\/title> <p>At most A at 90 percent, B at 80, C at 70, D at 60. Cutoffs may be lowered at the end of the term but will never be raised.<\/p> <\/li> <\/dl> <\/p> <\/subsection>       Part 5. Course Schedule   Style a longer table   This final subsection turns a large block of schedule data into a readable table. The syntax is a little verbose, so work slowly and rebuild after each small edit.     Paste this starter table into your last subsection.  <tabular> <row> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell><cell><p>Reading<\/p><\/cell> <\/row> <row><cell>1<\/cell><cell>Aug 25-Aug 29<\/cell><cell>Introduction; average\/instantaneous velocity<\/cell><cell>1.1<\/cell><\/row> <row><cell>2<\/cell><cell>Sep 1-Sep 5<\/cell><cell>The limit of a function; limit laws<\/cell><cell>1.2<\/cell><\/row> <row><cell>3<\/cell><cell>Sep 8-Sep 12<\/cell><cell>Continuity; limits at infinity<\/cell><cell>1.3, 1.4<\/cell><\/row> <row><cell>4<\/cell><cell>Sep 15-Sep 19<\/cell><cell>Definition of the derivative<\/cell><cell>2.1, 2.2<\/cell><\/row> <row><cell>5<\/cell><cell>Sep 22-Sep 26<\/cell><cell>Midterm 1<\/cell><cell><\/cell><\/row> <row><cell>6<\/cell><cell>Sep 29-Oct 3<\/cell><cell>Product\/quotient rules<\/cell><cell>2.4, 2.5<\/cell><\/row> <row><cell>7<\/cell><cell>Oct 6-Oct 10<\/cell><cell>The chain rule<\/cell><cell>2.6<\/cell><\/row> <row><cell>8<\/cell><cell>Oct 13-Oct 17<\/cell><cell>Implicit differentiation; inverse functions<\/cell><cell>2.7, 2.8<\/cell><\/row> <row><cell>9<\/cell><cell>Oct 20-Oct 24<\/cell><cell>Related rates; linear approximation<\/cell><cell>3.1, 3.2<\/cell><\/row> <row><cell>10<\/cell><cell>Oct 27-Oct 31<\/cell><cell>Midterm 2<\/cell><cell><\/cell><\/row> <row><cell>11<\/cell><cell>Nov 3-Nov 7<\/cell><cell>Increasing\/decreasing; Concavity<\/cell><cell>3.4, 3.5<\/cell><\/row> <row><cell>12<\/cell><cell>Nov 10-Nov 14<\/cell><cell>Optimization<\/cell><cell>3.6<\/cell><\/row> <row><cell>13<\/cell><cell>Nov 17-Nov 21<\/cell><cell>L'Hopital's rule; antiderivatives<\/cell><cell>3.7, 4.1<\/cell><\/row> <row><cell>14<\/cell><cell>Dec 1-Dec 5<\/cell><cell>The definite integral; Riemann sums<\/cell><cell>4.2, 4.3<\/cell><\/row> <row><cell>15<\/cell><cell>Dec 8-Dec 12<\/cell><cell>Fundamental Theorem of Calculus; review<\/cell><cell>4.4<\/cell><\/row> <row><cell>16<\/cell><cell>Dec 16<\/cell><cell>Final Exam, 8:00-10:00 am<\/cell><cell>Cumulative<\/cell><\/row> <\/tabular>      Apply the following table improvements, rebuilding after each one:  Mark the first row as a header with header=\"yes\" .  Add borders on the <tabular> .  Add four <col\/> tags for width and alignment.  Wrap the exam weeks in <alert> .      Styled version  <subsection> <title>Course Schedule<\/title> <p> Section numbers refer to <em>Active Calculus<\/em>. Topic coverage may shift by a class or two depending on pacing. <\/p> <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"9%\" halign=\"center\"\/> <col width=\"40%\" halign=\"center\"\/> <col width=\"36%\"\/> <col width=\"15%\"\/> <row header=\"yes\"> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell><cell><p>Reading<\/p><\/cell> <\/row> <row><cell>1<\/cell><cell>Aug 25-Aug 29<\/cell><cell>Introduction; average\/instantaneous velocity<\/cell><cell>1.1<\/cell><\/row> <row><cell>2<\/cell><cell>Sep 1-Sep 5<\/cell><cell>The limit of a function; limit laws<\/cell><cell>1.2<\/cell><\/row> <row><cell>3<\/cell><cell>Sep 8-Sep 12<\/cell><cell>Continuity; limits at infinity<\/cell><cell>1.3, 1.4<\/cell><\/row> <row><cell>4<\/cell><cell>Sep 15-Sep 19<\/cell><cell>Definition of the derivative<\/cell><cell>2.1, 2.2<\/cell><\/row> <row><cell>5<\/cell><cell>Sep 22-Sep 26<\/cell><cell><alert>Midterm 1<\/alert><\/cell><cell><\/cell><\/row> <row><cell>6<\/cell><cell>Sep 29-Oct 3<\/cell><cell>Product\/quotient rules<\/cell><cell>2.4, 2.5<\/cell><\/row> <row><cell>7<\/cell><cell>Oct 6-Oct 10<\/cell><cell>The chain rule<\/cell><cell>2.6<\/cell><\/row> <row><cell>8<\/cell><cell>Oct 13-Oct 17<\/cell><cell>Implicit differentiation; inverse functions<\/cell><cell>2.7, 2.8<\/cell><\/row> <row><cell>9<\/cell><cell>Oct 20-Oct 24<\/cell><cell>Related rates; linear approximation<\/cell><cell>3.1, 3.2<\/cell><\/row> <row><cell>10<\/cell><cell>Oct 27-Oct 31<\/cell><cell><alert>Midterm 2<\/alert><\/cell><cell><\/cell><\/row> <row><cell>11<\/cell><cell>Nov 3-Nov 7<\/cell><cell>Increasing\/decreasing; Concavity<\/cell><cell>3.4, 3.5<\/cell><\/row> <row><cell>12<\/cell><cell>Nov 10-Nov 14<\/cell><cell>Optimization<\/cell><cell>3.6<\/cell><\/row> <row><cell>13<\/cell><cell>Nov 17-Nov 21<\/cell><cell>L'Hopital's rule; antiderivatives<\/cell><cell>3.7, 4.1<\/cell><\/row> <row><cell>14<\/cell><cell>Dec 1-Dec 5<\/cell><cell>The definite integral; Riemann sums<\/cell><cell>4.2, 4.3<\/cell><\/row> <row><cell>15<\/cell><cell>Dec 8-Dec 12<\/cell><cell>Fundamental Theorem of Calculus; review<\/cell><cell>4.4<\/cell><\/row> <row><cell>16<\/cell><cell>Dec 16<\/cell><cell><alert>Final Exam, 8:00-10:00 am<\/alert><\/cell><cell>Cumulative<\/cell><\/row> <\/tabular> <p> <em>Note:<\/em> There is no class November 24-28 (Thanksgiving break). <\/p> <\/subsection>       What this project taught you  You have now used the most common beginner structures in PreTeXt . If you can build this syllabus from scratch, you are ready for short narrative lessons and handouts.   "
},
{
  "id": "exr-syllabus-structure",
  "level": "2",
  "url": "sec-guided-project-syllabus.html#exr-syllabus-structure",
  "type": "Checkpoint",
  "number": "4",
  "title": "Set up the section and subsection skeleton.",
  "body": " Set up the section and subsection skeleton   Start by shaping the document before you worry about wording. This makes every later paste easier because you already know where each chunk belongs.     Delete the starter content and paste a single <section> template into your project.    Target shape  <section> <title>Calculus I Syllabus<\/title> <subsection> <title>Course and Instructor Information<\/title> <\/subsection> <subsection> <title>Course Description<\/title> <\/subsection> <subsection> <title>Graded Work<\/title> <\/subsection> <subsection> <title>Course Schedule<\/title> <\/subsection> <\/section>      Rebuild and confirm that the preview now shows one section with four empty subsections. If it does, your document structure is ready for content.    "
},
{
  "id": "exr-syllabus-course-info",
  "level": "2",
  "url": "sec-guided-project-syllabus.html#exr-syllabus-course-info",
  "type": "Checkpoint",
  "number": "5",
  "title": "Turn plain text into a structured list.",
  "body": " Turn plain text into a structured list    Paste the block below into your first subsection, rebuild once, and notice that the content appears as one continuous paragraph.  <p> Course: ==CourseName==, ==Term== Instructor: ==YourName== Email: ==yourname@example.edu== Office: ==OfficeLocation== Office Hours: ==OfficeHours== Lecture: ==MeetingTime==, ==Room== Course Website: ==CanvasURL== <\/p>      Convert that paragraph into a formatted list using:  <ul> and <li> for the seven lines,  <c> for the email address, and  <url> for the course website.      If you want to compare  <subsection> <title>Course and Instructor Information<\/title> <p> <ul> <li>Course: ==CourseName==, ==Term==<\/li> <li>Instructor: ==YourName==<\/li> <li>Email: <c>==yourname@example.edu==<\/c><\/li> <li>Office: ==OfficeLocation==<\/li> <li>Office Hours: ==OfficeHours==<\/li> <li>Lecture: ==MeetingTime==, ==Room==<\/li> <li>Course Website: <url href=\"==URL==\">Canvas<\/url><\/li> <\/ul> <\/p> <p> The best way to reach me outside of office hours is by email. I aim to reply within one business day. <\/p> <\/subsection>    "
},
{
  "id": "exr-syllabus-description",
  "level": "2",
  "url": "sec-guided-project-syllabus.html#exr-syllabus-description",
  "type": "Checkpoint",
  "number": "6",
  "title": "Separate paragraphs and mark up the math.",
  "body": " Separate paragraphs and mark up the math    Paste the following into the second subsection and rebuild. The prose will look dense and the math will render as plain text.  <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. By the end of the course, a successful student will be able to differentiate polynomials like p(x) = x^3 - 2x + 1, exponentials like e^x, logarithms like ln(x), and trigonometric functions like sin(x) and cos(x). They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. <\/p>      Improve the structure by splitting the text into two <p> tags , wrapping every formula with <m> , and emphasizing the word Prerequisites somewhere in a final sentence with <em> .    One clean version  <subsection> <title>Course Description<\/title> <p> Calculus I is a first course in differential calculus. We develop the concept of the limit from scratch, use it to give a precise definition of the derivative, and spend most of the semester learning to compute and apply derivatives. The course closes with an introduction to integration and the Fundamental Theorem of Calculus, which connects the two main ideas of the subject. <\/p> <p> By the end of the course, a successful student will be able to differentiate polynomials like <m>p(x)=x^3-2x+1<\/m>, exponentials like <m>e^x<\/m>, logarithms like <m>\\ln(x)<\/m>, and trigonometric functions like <m>\\sin(x)<\/m> and <m>\\cos(x)<\/m>. They will also evaluate limits, apply the derivative to problems involving rates of change and optimization, and interpret the definite integral as a signed area. <\/p> <p> <em>Prerequisites:<\/em> successful completion of precalculus or the equivalent. <\/p> <\/subsection>    "
},
{
  "id": "exr-syllabus-graded-work",
  "level": "2",
  "url": "sec-guided-project-syllabus.html#exr-syllabus-graded-work",
  "type": "Checkpoint",
  "number": "7",
  "title": "Use a description list and a table together.",
  "body": " Use a description list and a table together    Paste the block below into the third subsection. Rebuild once so you can see why plain text is not the right structure for policy information.  <p> Homework: 20 percent. Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped. Quizzes: 10 percent. Short biweekly quizzes covering the recent material. Midterm 1: 20 percent. Closed book, closed notes, one handwritten reference sheet permitted. Midterm 2: 20 percent. Same format as Midterm 1. Final exam: 30 percent. Cumulative. Time and room set by the registrar. Grade cutoffs: A at 90 percent or above, B at 80 percent or above, C at 70 percent or above, D at 60 percent or above. Cutoffs may be lowered at the end of the term but will never be raised. <\/p>      Turn the policy text into a <dl> description list . Put each grading component in the <title> of an item and each explanation in a <p>.      Add a summary table above the description list using the <tabular>, <row>, and <cell> templates. Two columns are enough: the component and the percentage.    Checkpoint  <subsection> <title>Graded Work<\/title> <tabular> <row> <cell>Homework<\/cell> <cell>20%<\/cell> <\/row> <row> <cell>Quizzes<\/cell> <cell>10%<\/cell> <\/row> <row> <cell>Midterm 1<\/cell> <cell>20%<\/cell> <\/row> <row> <cell>Midterm 2<\/cell> <cell>20%<\/cell> <\/row> <row> <cell>Final Exam<\/cell> <cell>30%<\/cell> <\/row> <\/tabular> <p> <dl> <li> <title>Homework<\/title> <p>Due Sundays at 11:59 pm on Canvas. Collaborate freely, but write solutions in your own words. Late work accepted up to 48 hours late at a 20 percent penalty; lowest two scores dropped.<\/p> <\/li> <li> <title>Quizzes<\/title> <p>Short biweekly quizzes covering the recent material.<\/p> <\/li> <li> <title>Midterm 1<\/title> <p>Closed book, closed notes, one handwritten reference sheet permitted.<\/p> <\/li> <li> <title>Midterm 2<\/title> <p>Same format as Midterm 1.<\/p> <\/li> <li> <title>Final Exam<\/title> <p>Cumulative. Time and room set by the registrar.<\/p> <\/li> <li> <title>Grade Cutoffs<\/title> <p>At most A at 90 percent, B at 80, C at 70, D at 60. Cutoffs may be lowered at the end of the term but will never be raised.<\/p> <\/li> <\/dl> <\/p> <\/subsection>    "
},
{
  "id": "exr-syllabus-schedule",
  "level": "2",
  "url": "sec-guided-project-syllabus.html#exr-syllabus-schedule",
  "type": "Checkpoint",
  "number": "8",
  "title": "Style a longer table.",
  "body": " Style a longer table   This final subsection turns a large block of schedule data into a readable table. The syntax is a little verbose, so work slowly and rebuild after each small edit.     Paste this starter table into your last subsection.  <tabular> <row> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell><cell><p>Reading<\/p><\/cell> <\/row> <row><cell>1<\/cell><cell>Aug 25-Aug 29<\/cell><cell>Introduction; average\/instantaneous velocity<\/cell><cell>1.1<\/cell><\/row> <row><cell>2<\/cell><cell>Sep 1-Sep 5<\/cell><cell>The limit of a function; limit laws<\/cell><cell>1.2<\/cell><\/row> <row><cell>3<\/cell><cell>Sep 8-Sep 12<\/cell><cell>Continuity; limits at infinity<\/cell><cell>1.3, 1.4<\/cell><\/row> <row><cell>4<\/cell><cell>Sep 15-Sep 19<\/cell><cell>Definition of the derivative<\/cell><cell>2.1, 2.2<\/cell><\/row> <row><cell>5<\/cell><cell>Sep 22-Sep 26<\/cell><cell>Midterm 1<\/cell><cell><\/cell><\/row> <row><cell>6<\/cell><cell>Sep 29-Oct 3<\/cell><cell>Product\/quotient rules<\/cell><cell>2.4, 2.5<\/cell><\/row> <row><cell>7<\/cell><cell>Oct 6-Oct 10<\/cell><cell>The chain rule<\/cell><cell>2.6<\/cell><\/row> <row><cell>8<\/cell><cell>Oct 13-Oct 17<\/cell><cell>Implicit differentiation; inverse functions<\/cell><cell>2.7, 2.8<\/cell><\/row> <row><cell>9<\/cell><cell>Oct 20-Oct 24<\/cell><cell>Related rates; linear approximation<\/cell><cell>3.1, 3.2<\/cell><\/row> <row><cell>10<\/cell><cell>Oct 27-Oct 31<\/cell><cell>Midterm 2<\/cell><cell><\/cell><\/row> <row><cell>11<\/cell><cell>Nov 3-Nov 7<\/cell><cell>Increasing\/decreasing; Concavity<\/cell><cell>3.4, 3.5<\/cell><\/row> <row><cell>12<\/cell><cell>Nov 10-Nov 14<\/cell><cell>Optimization<\/cell><cell>3.6<\/cell><\/row> <row><cell>13<\/cell><cell>Nov 17-Nov 21<\/cell><cell>L'Hopital's rule; antiderivatives<\/cell><cell>3.7, 4.1<\/cell><\/row> <row><cell>14<\/cell><cell>Dec 1-Dec 5<\/cell><cell>The definite integral; Riemann sums<\/cell><cell>4.2, 4.3<\/cell><\/row> <row><cell>15<\/cell><cell>Dec 8-Dec 12<\/cell><cell>Fundamental Theorem of Calculus; review<\/cell><cell>4.4<\/cell><\/row> <row><cell>16<\/cell><cell>Dec 16<\/cell><cell>Final Exam, 8:00-10:00 am<\/cell><cell>Cumulative<\/cell><\/row> <\/tabular>      Apply the following table improvements, rebuilding after each one:  Mark the first row as a header with header=\"yes\" .  Add borders on the <tabular> .  Add four <col\/> tags for width and alignment.  Wrap the exam weeks in <alert> .      Styled version  <subsection> <title>Course Schedule<\/title> <p> Section numbers refer to <em>Active Calculus<\/em>. Topic coverage may shift by a class or two depending on pacing. <\/p> <tabular top=\"minor\" bottom=\"minor\" left=\"minor\" right=\"minor\"> <col width=\"9%\" halign=\"center\"\/> <col width=\"40%\" halign=\"center\"\/> <col width=\"36%\"\/> <col width=\"15%\"\/> <row header=\"yes\"> <cell><p>Week<\/p><\/cell><cell><p>Dates<\/p><\/cell> <cell><p>Topics<\/p><\/cell><cell><p>Reading<\/p><\/cell> <\/row> <row><cell>1<\/cell><cell>Aug 25-Aug 29<\/cell><cell>Introduction; average\/instantaneous velocity<\/cell><cell>1.1<\/cell><\/row> <row><cell>2<\/cell><cell>Sep 1-Sep 5<\/cell><cell>The limit of a function; limit laws<\/cell><cell>1.2<\/cell><\/row> <row><cell>3<\/cell><cell>Sep 8-Sep 12<\/cell><cell>Continuity; limits at infinity<\/cell><cell>1.3, 1.4<\/cell><\/row> <row><cell>4<\/cell><cell>Sep 15-Sep 19<\/cell><cell>Definition of the derivative<\/cell><cell>2.1, 2.2<\/cell><\/row> <row><cell>5<\/cell><cell>Sep 22-Sep 26<\/cell><cell><alert>Midterm 1<\/alert><\/cell><cell><\/cell><\/row> <row><cell>6<\/cell><cell>Sep 29-Oct 3<\/cell><cell>Product\/quotient rules<\/cell><cell>2.4, 2.5<\/cell><\/row> <row><cell>7<\/cell><cell>Oct 6-Oct 10<\/cell><cell>The chain rule<\/cell><cell>2.6<\/cell><\/row> <row><cell>8<\/cell><cell>Oct 13-Oct 17<\/cell><cell>Implicit differentiation; inverse functions<\/cell><cell>2.7, 2.8<\/cell><\/row> <row><cell>9<\/cell><cell>Oct 20-Oct 24<\/cell><cell>Related rates; linear approximation<\/cell><cell>3.1, 3.2<\/cell><\/row> <row><cell>10<\/cell><cell>Oct 27-Oct 31<\/cell><cell><alert>Midterm 2<\/alert><\/cell><cell><\/cell><\/row> <row><cell>11<\/cell><cell>Nov 3-Nov 7<\/cell><cell>Increasing\/decreasing; Concavity<\/cell><cell>3.4, 3.5<\/cell><\/row> <row><cell>12<\/cell><cell>Nov 10-Nov 14<\/cell><cell>Optimization<\/cell><cell>3.6<\/cell><\/row> <row><cell>13<\/cell><cell>Nov 17-Nov 21<\/cell><cell>L'Hopital's rule; antiderivatives<\/cell><cell>3.7, 4.1<\/cell><\/row> <row><cell>14<\/cell><cell>Dec 1-Dec 5<\/cell><cell>The definite integral; Riemann sums<\/cell><cell>4.2, 4.3<\/cell><\/row> <row><cell>15<\/cell><cell>Dec 8-Dec 12<\/cell><cell>Fundamental Theorem of Calculus; review<\/cell><cell>4.4<\/cell><\/row> <row><cell>16<\/cell><cell>Dec 16<\/cell><cell><alert>Final Exam, 8:00-10:00 am<\/alert><\/cell><cell>Cumulative<\/cell><\/row> <\/tabular> <p> <em>Note:<\/em> There is no class November 24-28 (Thanksgiving break). <\/p> <\/subsection>    "
},
{
  "id": "sec-guided-project-worksheet",
  "level": "1",
  "url": "sec-guided-project-worksheet.html",
  "type": "Section",
  "number": "",
  "title": "Project 2: Build a Worksheet Lesson",
  "body": " Project 2: Build a Worksheet Lesson   This project moves from a mostly informational document to a lesson structure meant for student work. You will use  <worksheet> ,  <objectives> ,  <definition> ,  <example> ,  <exercise> with <task> tags , and  <exercise> with specified workspace values .    Create a new project called Product Rule Worksheet . Keep this finished model open: Product Rule Lesson Worksheet .    Start with the worksheet shell     Replace the default starter <section> with the worksheet template from the cheatsheet.      Set the worksheet title to The Product Rule and replace the objectives placeholder with the objectives template .      Copy the objective text from the finished worksheet. Rebuild and confirm that the page now has a title and a short list of learning goals.       Build the first page    The first page combines a few reusable teaching blocks. Use the cheatsheet templates instead of trying to write the syntax from memory.     Inside the first <page>, paste these pieces in order:  a paragraph  a definition  another paragraph  an example  an exercise with tasks        Copy the two short paragraphs from the target worksheet into the two <p> tags you just placed.      Give the definition xml:id=\"def-product-rule\" , then paste the product-rule statement into the <statement>. For the mathematics, right-click the rendered target and use Copy to Clipboard → TeX Commands when needed.      Give the example xml:id=\"ex-applying-product-rule\" and the title Applying the product rule . Add a solution that links back to the definition with <xref> .      Build the practice exercise with a title, an introduction, and two tasks. Add workspace=\"2.5in\" so the worksheet leaves room for student work when printed.    Reminder  The <workspace> example in the cheatsheet shows the exact attribute placement.       Polish and personalize  Once your worksheet matches the target, make one small change of your own so the project becomes yours: change the topic to the quotient rule, revise the practice problems, or add a note to students in an <aside> .  That last step matters. The goal is not just to copy a model once; it is to leave with a reusable pattern you can adapt for a real lesson.    Troubleshooting     The preview shows a red error box  Look for a missing closing tag first. Most worksheet mistakes come from opening a <page>, <example>, or <task> and forgetting to close it.    The layout looks strange  Compare your source to the linked cheatsheet template and then to the target worksheet. Fix one environment at a time rather than repasting everything.    You want to experiment without losing progress  Duplicate the project in PreTeXt .Plus and try the revision in the copy.      "
},
{
  "id": "exr-worksheet-shell",
  "level": "2",
  "url": "sec-guided-project-worksheet.html#exr-worksheet-shell",
  "type": "Checkpoint",
  "number": "9",
  "title": "",
  "body": "   Replace the default starter <section> with the worksheet template from the cheatsheet.      Set the worksheet title to The Product Rule and replace the objectives placeholder with the objectives template .      Copy the objective text from the finished worksheet. Rebuild and confirm that the page now has a title and a short list of learning goals.    "
},
{
  "id": "exr-worksheet-page-one",
  "level": "2",
  "url": "sec-guided-project-worksheet.html#exr-worksheet-page-one",
  "type": "Checkpoint",
  "number": "10",
  "title": "",
  "body": "  The first page combines a few reusable teaching blocks. Use the cheatsheet templates instead of trying to write the syntax from memory.     Inside the first <page>, paste these pieces in order:  a paragraph  a definition  another paragraph  an example  an exercise with tasks        Copy the two short paragraphs from the target worksheet into the two <p> tags you just placed.      Give the definition xml:id=\"def-product-rule\" , then paste the product-rule statement into the <statement>. For the mathematics, right-click the rendered target and use Copy to Clipboard → TeX Commands when needed.      Give the example xml:id=\"ex-applying-product-rule\" and the title Applying the product rule . Add a solution that links back to the definition with <xref> .      Build the practice exercise with a title, an introduction, and two tasks. Add workspace=\"2.5in\" so the worksheet leaves room for student work when printed.    Reminder  The <workspace> example in the cheatsheet shows the exact attribute placement.    "
},
{
  "id": "sec-guided-project-reading-check",
  "level": "1",
  "url": "sec-guided-project-reading-check.html",
  "type": "Section",
  "number": "",
  "title": "Project 3: Build an Interactive Reading Check",
  "body": " Project 3: Build an Interactive Reading Check   This project is intentionally different from the first two. Instead of building a reference document or a printable worksheet, you will build a short online activity designed for immediate feedback. It is a good pattern for pre-class checks, warm-ups, or low-stakes review.  Create a new project called Product Rule Reading Check . This time you will build the whole activity from the instructions below rather than from a finished target.    Build the page structure     Start with the <section> template . Give the section the title Product Rule Reading Check .      Replace the section's <introduction> with a short paragraph explaining that learners should answer the questions before class and use the feedback to review.    Possible introduction  <introduction> <p> Use this short reading check to make sure you recognize the product rule, can distinguish it from nearby derivative rules, and can identify where it applies. <\/p> <\/introduction>       Add a true\/false question     Paste the true\/false template and adapt it to this statement: The product rule is needed to differentiate .       Set the correct attribute appropriately and write feedback that explains why the answer is correct.    One working version  <exercise> <title>True\/False<\/title> <statement correct=\"yes\"> <p> The product rule is needed to differentiate <m>f(x)=x^2e^x<\/m>. <\/p> <\/statement> <feedback> <p> Correct. The function is a product of <m>x^2<\/m> and <m>e^x<\/m>, so the derivative requires the product rule. <\/p> <\/feedback> <\/exercise>       Add a multiple-choice question     Paste the multiple-choice template . Ask which derivative matches .      Keep three answer choices, mark the correct one, and write feedback for every option so the learner gets useful guidance even when they miss it.    Possible answer choices  <exercise> <title>Multiple Choice<\/title> <statement> <p> Which derivative is correct for <m>f(x)=x^3\\sin x<\/m>? <\/p> <\/statement> <choices randomize=\"yes\"> <choice> <statement> <p><m>3x^2\\cos x<\/m><\/p> <\/statement> <feedback> <p> This multiplies the individual derivatives instead of adding the two terms required by the product rule. <\/p> <\/feedback> <\/choice> <choice correct=\"yes\"> <statement> <p><m>3x^2\\sin x + x^3\\cos x<\/m><\/p> <\/statement> <feedback> <p> Yes. Differentiate one factor at a time and add the two products. <\/p> <\/feedback> <\/choice> <choice> <statement> <p><m>x^3\\cos x<\/m><\/p> <\/statement> <feedback> <p> This differentiates only the sine factor and forgets the derivative of <m>x^3<\/m>. <\/p> <\/feedback> <\/choice> <\/choices> <\/exercise>       Add a clickable-area question     Paste the clickable-area template . Use it to ask learners to click every expression that would require the product rule.      Include at least four expressions, with a mix of correct and incorrect choices. Write feedback that tells the learner to look for an actual product of two nonconstant factors.    One working version  <exercise> <title>Clickable Area<\/title> <statement> <p> Click every function that requires the product rule. <\/p> <\/statement> <areas> <p> <area><m>x^2\\cos x<\/m><\/area>, <area correct=\"no\"><m>\\sin(x^2)<\/m><\/area>, <area><m>(x+1)e^x<\/m><\/area>, <area correct=\"no\"><m>\\dfrac{x^2+1}{x-3}<\/m><\/area> <\/p> <\/areas> <feedback> <p> Look for a product of two factors being multiplied together. Composition suggests the chain rule, and a quotient such as <m>\\dfrac{x^2+1}{x-3}<\/m> suggests the quotient rule instead. <\/p> <\/feedback> <\/exercise>       Finish the activity  Add one final <p> at the bottom inviting learners to revisit the product-rule definition or worksheet if they struggled. If you want, link back to the worksheet you built in the previous project with a <url> once it has a shareable link.  This pattern generalizes well. You can build reading checks for theorem recognition, notation review, common misconceptions, or short pre-class quizzes without leaving PreTeXt .Plus.   "
},
{
  "id": "exr-reading-check-structure",
  "level": "2",
  "url": "sec-guided-project-reading-check.html#exr-reading-check-structure",
  "type": "Checkpoint",
  "number": "11",
  "title": "",
  "body": "   Start with the <section> template . Give the section the title Product Rule Reading Check .      Replace the section's <introduction> with a short paragraph explaining that learners should answer the questions before class and use the feedback to review.    Possible introduction  <introduction> <p> Use this short reading check to make sure you recognize the product rule, can distinguish it from nearby derivative rules, and can identify where it applies. <\/p> <\/introduction>    "
},
{
  "id": "exr-reading-check-tf",
  "level": "2",
  "url": "sec-guided-project-reading-check.html#exr-reading-check-tf",
  "type": "Checkpoint",
  "number": "12",
  "title": "",
  "body": "   Paste the true\/false template and adapt it to this statement: The product rule is needed to differentiate .       Set the correct attribute appropriately and write feedback that explains why the answer is correct.    One working version  <exercise> <title>True\/False<\/title> <statement correct=\"yes\"> <p> The product rule is needed to differentiate <m>f(x)=x^2e^x<\/m>. <\/p> <\/statement> <feedback> <p> Correct. The function is a product of <m>x^2<\/m> and <m>e^x<\/m>, so the derivative requires the product rule. <\/p> <\/feedback> <\/exercise>    "
},
{
  "id": "exr-reading-check-mc",
  "level": "2",
  "url": "sec-guided-project-reading-check.html#exr-reading-check-mc",
  "type": "Checkpoint",
  "number": "13",
  "title": "",
  "body": "   Paste the multiple-choice template . Ask which derivative matches .      Keep three answer choices, mark the correct one, and write feedback for every option so the learner gets useful guidance even when they miss it.    Possible answer choices  <exercise> <title>Multiple Choice<\/title> <statement> <p> Which derivative is correct for <m>f(x)=x^3\\sin x<\/m>? <\/p> <\/statement> <choices randomize=\"yes\"> <choice> <statement> <p><m>3x^2\\cos x<\/m><\/p> <\/statement> <feedback> <p> This multiplies the individual derivatives instead of adding the two terms required by the product rule. <\/p> <\/feedback> <\/choice> <choice correct=\"yes\"> <statement> <p><m>3x^2\\sin x + x^3\\cos x<\/m><\/p> <\/statement> <feedback> <p> Yes. Differentiate one factor at a time and add the two products. <\/p> <\/feedback> <\/choice> <choice> <statement> <p><m>x^3\\cos x<\/m><\/p> <\/statement> <feedback> <p> This differentiates only the sine factor and forgets the derivative of <m>x^3<\/m>. <\/p> <\/feedback> <\/choice> <\/choices> <\/exercise>    "
},
{
  "id": "exr-reading-check-clickable",
  "level": "2",
  "url": "sec-guided-project-reading-check.html#exr-reading-check-clickable",
  "type": "Checkpoint",
  "number": "14",
  "title": "",
  "body": "   Paste the clickable-area template . Use it to ask learners to click every expression that would require the product rule.      Include at least four expressions, with a mix of correct and incorrect choices. Write feedback that tells the learner to look for an actual product of two nonconstant factors.    One working version  <exercise> <title>Clickable Area<\/title> <statement> <p> Click every function that requires the product rule. <\/p> <\/statement> <areas> <p> <area><m>x^2\\cos x<\/m><\/area>, <area correct=\"no\"><m>\\sin(x^2)<\/m><\/area>, <area><m>(x+1)e^x<\/m><\/area>, <area correct=\"no\"><m>\\dfrac{x^2+1}{x-3}<\/m><\/area> <\/p> <\/areas> <feedback> <p> Look for a product of two factors being multiplied together. Composition suggests the chain rule, and a quotient such as <m>\\dfrac{x^2+1}{x-3}<\/m> suggests the quotient rule instead. <\/p> <\/feedback> <\/exercise>    "
},
{
  "id": "sec-share-and-next-steps",
  "level": "1",
  "url": "sec-share-and-next-steps.html",
  "type": "Section",
  "number": "",
  "title": "Share Your Work and Keep Going",
  "body": " Share Your Work and Keep Going   Create a shareable link     Save the project and return to the project list.    Select the project and choose its shareable link option.    Copy the URL and test it in a fresh browser tab.       Good next experiments    Duplicate one of your projects and adapt it to a new topic.  Add a <remark> or <aside> to support student reading.  Browse the chapter for documentation and community support.  When you want multi-file projects and GitHub publishing, continue with the .      Final note  The important habit is not memorizing every tag. It is learning to recognize the structure you need, finding the matching template, and iterating in small rebuild cycles. That habit scales from tiny course documents to full online textbooks.   "
},
{
  "id": "sec-share-and-next-steps-2-2",
  "level": "2",
  "url": "sec-share-and-next-steps.html#sec-share-and-next-steps-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shareable link "
},
{
  "id": "a11y-automatic",
  "level": "1",
  "url": "a11y-automatic.html",
  "type": "Section",
  "number": "",
  "title": "What PreTeXt Does Automatically",
  "body": " What PreTeXt Does Automatically   Because you mark up content by what it is rather than how it should look, the generated HTML carries enough structure to be navigated and read by assistive technology with no extra work from you.    Structural Accessibility  The HTML PreTeXt generates targets WCAG 2.1 Level AA . You get, by default:      Proper heading hierarchy. Chapters, sections, and named blocks (definitions, theorems, examples) map to appropriate HTML heading levels, so screen reader users can jump directly to the section they need.     ARIA landmarks and skip-navigation. Screen readers get a structural overview of every page, and keyboard users can bypass the navigation sidebar.     Keyboard navigation. The table of contents, knowl popups, and native exercise types are all reachable and operable without a mouse.     Sufficient color contrast and responsive layout. Default themes meet the 4.5:1 contrast ratio for body text, and the HTML reflows gracefully for screen magnification or mobile use.       Accessible Mathematics  Every equation you write inside an <m> or <me> tag is rendered with MathJax, which simultaneously produces MathML, a structured, machine-readable form of the math. Screen readers that support MathML (JAWS with MathPlayer, NVDA with MathCAT, VoiceOver on recent macOS and iOS) can navigate equations structurally: term by term, into numerators and exponents, at whatever level of detail the reader needs.  Any reader, including sighted readers with low vision, can also right-click any equation to zoom, copy the source, or change the rendering mode.   Try it  In any built HTML output, right-click an equation and choose Accessibility → Explorer → Activate . The page reloads and the arrow keys now walk you through the equation's structure. Fifteen seconds, immediate payoff.     Multiple Output Formats, One Source  A student who needs a specific format is not getting a second-class version of your text; every format is generated from the same semantic source.    Format  Who benefits    HTML  Screen reader users, keyboard-only users, mobile readers    PDF  Students who prefer or require print    EPUB  Students using e-readers or read-aloud on tablets    Braille (Nemeth)  Blind students; tactile readers of mathematics    The Braille output is particularly significant. Most math textbooks cannot be Brailled without a specialist transcriber, which creates long wait times and high costs for blind students. PreTeXt uses the liblouis library and Nemeth Code to generate Braille from the same source. An instructor who writes a PreTeXt book automatically produces a format that disability services can send directly to an embosser.   "
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
  "body": " What You, the Author, Must Do   Two areas require deliberate effort: images and interactives. Everything else is a byproduct of writing clean semantic markup.    Images Need Alt Text  Every informative image needs a <shortdescription> . This becomes the alt attribute in HTML and the described content in EPUB and Braille.   <image source=\"graph.png\" width=\"60%\"> <shortdescription> A graph of f(x) = x squared on the interval [-2, 2], showing a parabola opening upward with vertex at the origin. <\/shortdescription> <\/image>   For images that carry substantial information (complex diagrams, data tables presented as images, and geometric constructions), add a longer <description> element as well. It appears in the HTML as an expandable region that sighted readers can ignore and screen-reader users can access.   <image source=\"venn.png\" width=\"60%\"> <shortdescription>Venn diagram of sets A, B, and A intersect B.<\/shortdescription> <description> <p> Two overlapping circles. The left circle is labeled A and contains the elements 1, 2, 3. The right circle is labeled B and contains 3, 4, 5. The overlapping region contains 3, representing A intersect B. <\/p> <\/description> <\/image>   A natural question: why can't PreTeXt generate alt text automatically? Because image descriptions depend on context and intent. The same graph might need one description in a section about asymptotes and a different one in a section about symmetry. No tool can reliably make that call.  A second principle: don't rely on color alone . If you ask students to compare the red and green curves, also distinguish them by dashing, thickness, or labels. A quick test is to view the figure in grayscale and check that it still makes sense.    Interactive Elements Need a Prose Fallback  GeoGebra, Desmos, and similar embedded applets are visual by design and not reliably screen-reader accessible. When you include one in a document you intend to be fully accessible, surround it with a paragraph that describes what the interactive shows and what a student is meant to observe. That way the conceptual content is available even to a reader who cannot run the applet.   PreTeXt 's native exercise types (multiple choice, true\/false, fill-in-the-blank, and matching) are keyboard-accessible and screen-reader friendly.    A Short Pre-Publication Checklist     Every informative image has a <shortdescription> .  Purely decorative images should carry an empty <shortdescription\/> .    Complex images have a <description> .  Diagrams, graphs, and data figures need the longer form.    Interactive applets have a surrounding prose description.  Students who can't run the applet can still learn from the text around it.    Figures don't rely on color alone.  Use dashing, thickness, or labels as secondary distinctions.    Cross-references use <xref> , not bare URLs.  Semantic cross-references produce meaningful link text ( Definition 3.2 ) rather than raw URLs.    The document builds without errors.  A build error may render correctly for sighted readers but produce broken ARIA or heading structure underneath.      "
},
{
  "id": "a11y-questions",
  "level": "1",
  "url": "a11y-questions.html",
  "type": "Section",
  "number": "",
  "title": "Accessibility FAQ",
  "body": " Accessibility FAQ     Is PreTeXt WCAG-compliant?  The HTML output is designed to meet WCAG 2.1 Level AA, and the community takes this seriously. But compliance is ultimately a property of a specific document, not of a tool. If an author skips alt text, no toolchain can compensate.    Isn't a PDF from latex accessible enough?  Accessible PDFs are possible but genuinely difficult to produce well from latex , and the result is often imperfect. HTML is fundamentally a more accessible format: it reflows, works natively with screen readers, and adapts to user preferences for font size and contrast. Generating HTML from the same PreTeXt source costs you nothing extra.    Does PreTeXt really produce Braille?  Yes, from the same source file. Formulas are rendered in Nemeth Code, and tactile diagrams can be generated automatically from structured figures. The approach has been validated on full-length textbooks in abstract algebra and calculus, with quality checked by a certified transcriber and readability confirmed by a blind mathematician.    If screen readers can read math aloud, why does Braille still matter?  Because mathematicians read math by looking back and forth, comparing pieces, holding sub-expressions in view. Braille gives a blind reader the same tactile access.    Do I need to learn accessibility standards to use this well?  No. The authoring practices in What You, the Author, Must Do are your primary responsibilities. You don't need to study WCAG to produce accessible output.    Who decides what accessible enough means for my course?  Ultimately your institution and your students. PreTeXt gives you a document that is accessible by default and easy to improve where it matters most. For specific student accommodations, work with your campus disability services. The HTML, EPUB, and Braille outputs will cover most common needs out of the box.    What's my actual responsibility as an author?  Write alt text for images, and design images so they work without color. That is essentially the whole list.    How do I write alt text in PreTeXt ?  Every non-decorative image needs a <shortdescription> : plain text, no markup, no quotation marks, under about 125 characters. Complex images can also include a <description> with paragraphs and even math, which screen readers read as a longer alternative.    Why can't PreTeXt generate alt text automatically?  Because image descriptions depend on author intent and context. The same graph might be described one way in a section about asymptotes and another way in a section about symmetry. No tool can reliably make that call.    What about using color in figures?  Don't rely on color alone. If you ask students to compare the red and green curves, add a second distinguishing feature. For example, dashing, thickness, or labels. A quick test: view your image in black and white and check that it still conveys the intended information.    Can I produce Braille with PreTeXt.Plus?  No. Producing Braille involves additional tools beyond the setup we're using. The capability exists and the HTML you build today is already screen-reader accessible. Braille is a next step for instructors who need it.    Does PreTeXt align with the recent accessibility requirements?  Yes. Many US institutions are now required to ensure accessibility of all online materials, including content posted in an LMS like Canvas or Blackboard. PreTeXt is well-positioned for this: you can deploy the HTML publicly, or export a single portable HTML file that uploads directly to an LMS.    What about EPUB for students who want to read on a tablet or e-reader?  Produced from the same source. EPUB reflows, supports screen readers, and works across the major e-reader apps.    Are interactive elements accessible?  Native PreTeXt exercise types (multiple choice, true\/false, fill-in) are generally accessible. Embedded third-party interactives (GeoGebra, Desmos, DoenetML) inherit the accessibility of those platforms, which varies. For critical content, consider including an image or text description as a fallback.     "
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
  "body": " Writing and Authoring     Can I convert my existing latex files to PreTeXt ?  Partially. PreTeXt.Plus includes a latex -to- PreTeXt converter, and Pandoc can produce rough PreTeXt source from .tex . Treat either tool's output as a starting point that will likely need cleanup. For documents that are mostly prose and basic math, this is still faster than starting from scratch.    How do I include images?  This topic is outside the scope of this workshop. Put the image file (PNG, JPG, or SVG) in your assets folder and reference it with <image source=\"filename.png\"\/> . Add a <shortdescription> for the alt text. See What You, the Author, Must Do for details. You can also generate figures using TikZ or PGFPlots, and PreTeXt will produce accessible SVG output automatically.    Can exercises be auto-graded?  Yes, when the document is hosted on Runestone Academy. True\/false, multiple-choice, fill-in-the-blank, matching, and clickable-area exercises are all auto-graded with per-answer feedback. If you host on GitHub Pages or embed them into your LMS instead, the exercises still display and work interactively, but they are not tracked in a gradebook.    What controls numbering?   PreTeXt numbers definitions, theorems, examples, exercises, and figures automatically in the order they appear. Cross-references update themselves when you reorganize. This is one of the big wins over word processors: numbers are always consistent, and you never have to fix them by hand.     "
},
{
  "id": "faq-publishing",
  "level": "1",
  "url": "faq-publishing.html",
  "type": "Section",
  "number": "",
  "title": "Publishing",
  "body": " Publishing     Where can I host a PreTeXt book?  Four common options:    PreTeXt.Plus . Built-in hosting with a shareable link, no server required. Ideal for drafts and worksheets.     GitHub Pages . Free, automatic deployment when you push to GitHub; your book lives at a username.github.io\/reponame URL.     Runestone Academy . Free for instructors and students, adds a gradebook and LMS integration.     Your institution's web server . Upload the contents of the output\/web folder to any standard web host.       Can I use PreTeXt materials inside my LMS?  There are two common approaches. Link directly to the published HTML from Canvas, Blackboard, or a similar LMS. If you host on Runestone Academy, you can also integrate via LTI so that exercise grades flow back into your LMS gradebook.    Who owns the content I write?  You do. PreTeXt is a tool; it does not claim any rights over your content. You can assign any license you like, and many authors choose a Creative Commons license to make their materials openly remixable.    How do I update a published book?  Edit the source, rebuild, and redeploy. On GitHub Pages, pushing a commit triggers an automatic rebuild. Your URL stays the same and readers see the updated version on their next visit.     "
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
  "id": "codespace-github-account",
  "level": "1",
  "url": "codespace-github-account.html",
  "type": "Section",
  "number": "",
  "title": "Part 1. Create a GitHub Account",
  "body": " Part 1. Create a GitHub Account  GitHub is the service that will host your project files and your public web page. A personal account is free and more than enough for everything in this guide.     Open github.com in your browser.    Click Sign up in the top right and follow the prompts. Choose a username you can live with (it will appear in the public URL of anything you publish), enter your email, and pick a password.    Check your email and confirm the address. GitHub will not let you use template repositories until you do.    When you land on the GitHub home page logged in, you're done with Part 1.      ✓ You know it worked when…  In the top right corner of github.com , you see a small profile icon with your username's first letter, not a Sign in button.    If you get stuck: confirmation email didn't arrive  Check your spam folder. Some institutional email systems are aggressive about GitHub. If nothing shows up after a few minutes, there's usually a Resend confirmation link on the GitHub page you land on. Worst case, use a personal email address instead of your institutional one for this signup.   "
},
{
  "id": "codespace-github-account-3",
  "level": "2",
  "url": "codespace-github-account.html#codespace-github-account-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign up "
},
{
  "id": "check-part-1-2",
  "level": "2",
  "url": "codespace-github-account.html#check-part-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign in "
},
{
  "id": "trouble-account-confirmation-2",
  "level": "2",
  "url": "codespace-github-account.html#trouble-account-confirmation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Resend confirmation "
},
{
  "id": "codespace-repo",
  "level": "1",
  "url": "codespace-repo.html",
  "type": "Section",
  "number": "",
  "title": "Part 2. Create Your Repository from the PreTeXt Template",
  "body": " Part 2. Create Your Repository from the PreTeXt Template  The PreTeXt team maintains a template repository : a starter project that has all the right configuration baked in. You'll copy it into your own account. Think of it as cloning a well-furnished apartment rather than building one from bare walls.     Make sure you are signed in to GitHub in your browser. Then go to:   github.com\/PreTeXtBook\/pretext-codespace     Near the top right of that page, find the green button labeled Use this template and click it.    The green \"Use this template\" button on GitHub.    From the dropdown, choose Create a new repository .    On the next page, fill in:    Repository name : pick something short and descriptive, for example my-first-pretext .  Description : optional, a sentence or two for your future self.  Public or Private : public is recommended if you'd ever like help from the PreTeXt community, and it doesn't prevent you from keeping draft material unlisted. Private is fine too and easy to flip later.      Click Create repository from template . After a short pause, you'll land on your brand-new repository page, which is now a fresh copy of the template under your own account.      ✓ You know it worked when…  The URL in your browser is github.com\/YOUR-USERNAME\/YOUR-REPO-NAME , and the file list shows a README.md and a .devcontainer folder.    If you get stuck: Use this template button is missing  The most common cause is that you aren't signed in. Look at the top right of the page: if you see Sign in , click it, log in, and refresh the template page. If the button still won't appear, confirm your email (Part 1, step 3) and try again.   "
},
{
  "id": "codespace-repo-2",
  "level": "2",
  "url": "codespace-repo.html#codespace-repo-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "template repository "
},
{
  "id": "codespace-repo-3",
  "level": "2",
  "url": "codespace-repo.html#codespace-repo-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use this template Create a new repository Repository name Description Public Private Create repository from template "
},
{
  "id": "trouble-template-button-2",
  "level": "2",
  "url": "codespace-repo.html#trouble-template-button-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign in "
},
{
  "id": "codespace-launch",
  "level": "1",
  "url": "codespace-launch.html",
  "type": "Section",
  "number": "",
  "title": "Part 3. Launch Your Codespace",
  "body": " Part 3. Launch Your Codespace  Your repository is just the storage. The Codespace is where you'll actually edit, build, and preview: a full development environment that runs entirely in your browser, with every PreTeXt dependency already installed.     From your new repository's page on GitHub, find the green < > Code button, a bit below the repository name.    The green \"Code\" button on a GitHub repository page.      Click it, then switch to the Codespaces tab of the little popup that appears.    Click Create codespace on main .    The \"Create codespace on main\" button inside the Code popup.      A new tab opens and begins the setup. This is the 5-to-10-minute wait from the introduction. Get a cup of coffee. You'll know it's done when the progress messages stop and you see a layout with a file explorer on the left and a welcome file in the center.    A freshly loaded Codespace showing the file explorer sidebar on the left and the README open in the main editor.        ✓ You know it worked when…    You see a file explorer on the left side of the browser window.  At the very bottom of the window there is a blue bar, and somewhere on that bar is a ▷ PreTeXt button.  A terminal panel is visible at the bottom (or can be opened by pressing Ctrl + ` ).      If you get stuck: the Codespace seems frozen  First-time setup really does take several minutes, and some of those minutes look silent. Give it at least ten before worrying. If after fifteen minutes there is still no file explorer, close the tab, return to your repository, click < > Code , then Codespaces , and click your existing codespace to resume rather than creating a new one.   "
},
{
  "id": "codespace-launch-2",
  "level": "2",
  "url": "codespace-launch.html#codespace-launch-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Codespace "
},
{
  "id": "codespace-launch-3",
  "level": "2",
  "url": "codespace-launch.html#codespace-launch-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "< > Code Codespaces Create codespace on main "
},
{
  "id": "check-part-3-2",
  "level": "2",
  "url": "codespace-launch.html#check-part-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt "
},
{
  "id": "trouble-codespace-slow-2",
  "level": "2",
  "url": "codespace-launch.html#trouble-codespace-slow-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "< > Code Codespaces "
},
{
  "id": "codespace-new-project",
  "level": "1",
  "url": "codespace-new-project.html",
  "type": "Section",
  "number": "",
  "title": "Part 4. Initialize Your PreTeXt Project",
  "body": " Part 4. Initialize Your PreTeXt Project  Your Codespace is ready but empty of PreTeXt files. The template is deliberately minimal so you can pick what sort of document you want. You'll create a book project, which is a good default for lessons, course notes, or worksheets.     Press F1 (or Ctrl + Shift + P on Windows\/Linux, Cmd + Shift + P on Mac) to open the command palette , a text bar that drops down from the top of the window.    Start typing pretext new . From the matching entries, select PreTeXt : New Project and press Enter .    You'll be asked what sort of project. Choose book .    Next you'll be asked where to put it. The default location (your current folder) is what you want. Press Enter to accept.    The window will reload after a moment. The file explorer on the left now shows a real project structure.    The Codespace after initializing a book project, with source, assets, and project.ptx visible in the file explorer.        A quick tour of what you just created     source\/  Your PreTeXt source files live here. Look for main.ptx (the entry point) and at least one chapter file.    assets\/  Images, data files, and any other supporting materials go here. PreTeXt will include them automatically when you reference them in your source.    output\/  Generated files (HTML, PDF) land here when you build. You never edit this directly. It will appear after your first build.    project.ptx  The project manifest. It tells PreTeXt which output formats to produce and where to put them.    publication.ptx  Settings that control the look and feel of your output: theme, numbering depth, and similar cosmetic knobs.       ✓ You know it worked when…  The file explorer on the left shows source , assets , project.ptx , and publication.ptx .    If you get stuck: pretext new doesn't appear in the palette  The PreTeXt extension may still be loading, especially right after the Codespace finishes setup. Wait a minute, then open the command palette again and retry. If the command still isn't there, close the Codespace tab and reopen it from < > Code → Codespaces on your repository page.   "
},
{
  "id": "codespace-new-project-2",
  "level": "2",
  "url": "codespace-new-project.html#codespace-new-project-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "book "
},
{
  "id": "codespace-new-project-3",
  "level": "2",
  "url": "codespace-new-project.html#codespace-new-project-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "command palette PreTeXt : New Project book "
},
{
  "id": "trouble-command-palette-2",
  "level": "2",
  "url": "codespace-new-project.html#trouble-command-palette-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "< > Code → Codespaces "
},
{
  "id": "codespace-starter",
  "level": "1",
  "url": "codespace-starter.html",
  "type": "Section",
  "number": "",
  "title": "Part 5. Add a Small Starter Lesson",
  "body": " Part 5. Add a Small Starter Lesson  The template book comes with placeholder content that's fine but not very interesting to edit. Let's replace a chunk of it with a short lesson you can actually work with.     In the file explorer, open source\/ and double-click main.ptx . You should see a PreTeXt document with a few <chapter> and <section> tags.    Find the first <section> inside the first <chapter> . Select everything from the opening <section> tag through its closing <\/section> , and replace it with the block below.   <section xml:id=\"sec-right-triangles\"> <title>Right Triangles<\/title> <p>This short lesson introduces right triangles and the Pythagorean theorem.<\/p> <definition xml:id=\"def-right-triangle\"> <statement> <p>A <term>right triangle<\/term> is a triangle with one angle measuring exactly 90 degrees.<\/p> <\/statement> <\/definition> <p>The Pythagorean theorem states that <m>a^2 + b^2 = c^2<\/m>, where <m>c<\/m> is the length of the hypotenuse.<\/p> <example> <title>A 3-4-5 triangle<\/title> <statement> <p>Show that a triangle with sides 3, 4, and 5 is a right triangle.<\/p> <\/statement> <solution> <p>Check: <m>3^2 + 4^2 = 9 + 16 = 25 = 5^2<\/m>.<\/p> <\/solution> <\/example> <exercise> <statement> <p>Find the length of the hypotenuse of a right triangle with legs of length 5 and 12.<\/p> <\/statement> <\/exercise> <p>For a reminder of the terminology, see <xref ref=\"def-right-triangle\"\/>.<\/p> <\/section>     Save the file: Ctrl + S on Windows\/Linux, Cmd + S on Mac.      Make it yours  If you have a few extra minutes, change the topic to something you actually teach. Swap the definition, rewrite the example, replace the exercise. The structure stays the same; only the content changes. This is the authoring rhythm you'll use for everything you write in PreTeXt from here on out.   "
},
{
  "id": "codespace-build",
  "level": "1",
  "url": "codespace-build.html",
  "type": "Section",
  "number": "",
  "title": "Part 6. Build and Preview",
  "body": " Part 6. Build and Preview  Building a PreTeXt project means running the toolchain that converts your source XML into polished HTML (or PDF, or ePub). You'll do this dozens of times as you write, so it's worth learning two ways to trigger it: a button and a command.   Build the HTML version     Look at the blue bar at the very bottom of the Codespace window. Find the ▷ PreTeXt button.    The PreTeXt button on the bottom status bar, shown as an arrow followed by the word \"PreTeXt\".      Click it. A small menu appears. Choose Build default target .    A terminal panel opens and shows the build's progress. The first build takes a little longer than subsequent ones because it downloads some supporting files. Typical time: 30 to 60 seconds.    When you see a success message at the end of the terminal output, expand the output folder in the file explorer. You should see a web subfolder containing an index.html .       Preview the HTML version  Don't try to open index.html by hand, it won't render correctly from the file system. Use the built-in preview instead.     Click ▷ PreTeXt on the blue bar again.    Choose View Full Document , then web .    A new tab opens with your document rendered as a real web page: table of contents on the left, your lesson in the middle, equations typeset with MathJax.       Build a PDF too     Click ▷ PreTeXt one more time and choose Build Another Target .    From the list, pick print . This triggers a latex -based build to produce a typeset PDF, which lands in output\/print\/ .    The first PDF build takes longer because it needs to fetch latex packages. Expect two or three minutes.    When it finishes, preview it the same way as the HTML: ▷ PreTeXt → View Full Document → print .       The rebuild rhythm  The preview does not update on its own. Every time you edit the source, you need to build again and then refresh the preview tab. You'll internalize this rhythm in the first ten minutes: edit, build, refresh, look .    ✓ You know it worked when…    The output folder exists and has a web\/index.html inside it.  A browser tab is showing your lesson with a navigation sidebar.  Optionally, you also have a output\/print\/main.pdf .      If you get stuck: build fails with a red error  Almost always a missing or mismatched tag in the source. Read the error message, which will usually include a line number. Double-check that every <tag> you added has a matching <\/tag> . If you can't find it, copy the starter block from Part 5 again carefully. Don't panic at red text. These errors are routine and fixable.    If you get stuck: preview is blank or stale  Build again first, then refresh the preview tab with F5 . If that doesn't help, close the preview tab and reopen it with ▷ PreTeXt → View Full Document → web .   "
},
{
  "id": "codespace-build-html-2",
  "level": "2",
  "url": "codespace-build.html#codespace-build-html-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt Build default target "
},
{
  "id": "codespace-view-html-3",
  "level": "2",
  "url": "codespace-build.html#codespace-view-html-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt View Full Document web "
},
{
  "id": "codespace-build-pdf-2",
  "level": "2",
  "url": "codespace-build.html#codespace-build-pdf-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt Build Another Target print ▷ PreTeXt → View Full Document → print "
},
{
  "id": "codespace-rebuild-rhythm-2",
  "level": "2",
  "url": "codespace-build.html#codespace-rebuild-rhythm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "build refresh "
},
{
  "id": "trouble-preview-blank-2",
  "level": "2",
  "url": "codespace-build.html#trouble-preview-blank-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt → View Full Document → web "
},
{
  "id": "codespace-save",
  "level": "1",
  "url": "codespace-save.html",
  "type": "Section",
  "number": "",
  "title": "Part 7. Save Your Work to GitHub",
  "body": " Part 7. Save Your Work to GitHub  Your edits live inside the Codespace, which is a good enough home for an active work session but not a permanent one. GitHub will eventually recycle inactive Codespaces (after about a month of disuse at the time of writing), so you should periodically push your work back to the repository on github.com , where it is safe forever.  The operation has two parts, traditionally called commit (take a snapshot of the current state with a short note) and sync (upload the snapshot to GitHub). The Codespace combines them into a single action.      On the left side of the window, find the Source Control icon: it looks like a branching diagram with three dots. Click it.    You'll see a list of files you've changed. At the top there's a text box asking for a message . Type something brief that describes what you did, for example Add right triangles lesson .    Click the blue Commit & Sync button (sometimes labeled Commit the first time, with Sync appearing after). If asked to confirm, say yes. You may also be asked to allow the Codespace to act on your behalf, which is expected.    After a few seconds, the changed-files list empties. Your work is now saved to github.com\/YOUR-USERNAME\/YOUR-REPO-NAME .      The Source Control panel in VS Code, showing the branching-diagram icon on the left rail, a list of changed files, a commit message text box, and a blue Commit and Sync button.     ✓ You know it worked when…  Open a new tab, go to your repository's page on github.com , and you'll see your changed files listed with your commit message next to them. If you refresh the page you see your latest edits reflected in the source files on GitHub itself.    A habit worth building  Commit and sync often. Every time you finish a meaningful chunk of work (a new example, a fixed exercise, a reorganized section) is a reasonable moment. Each commit is a save point you can return to later if you decide you liked an earlier version better.   "
},
{
  "id": "codespace-save-4-1",
  "level": "2",
  "url": "codespace-save.html#codespace-save-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Source Control message Commit & Sync Commit Sync "
},
{
  "id": "codespace-deploy",
  "level": "1",
  "url": "codespace-deploy.html",
  "type": "Section",
  "number": "",
  "title": "Part 8. Deploy to a Public Web Page",
  "body": " Part 8. Deploy to a Public Web Page   Deploying means publishing your built HTML at a real URL that anyone can visit. GitHub provides free hosting for this through a service called GitHub Pages . There's a one-time setup step and then a single command does the rest.   One-time setup: turn on GitHub Pages     Open your repository page on github.com in a new tab.    Click Settings in the top row of tabs on that page.    In the left sidebar, click Pages (under Code and automation ).    Under Source , use the dropdown to select GitHub Actions . You'll not need to configure a workflow by hand; the PreTeXt deploy command will handle that for you.    That's it. No save button to press, the setting takes effect immediately.       Deploy your site  Back in your Codespace:     Click ▷ PreTeXt on the blue bar.    Choose Deploy . (If you don't see it, first commit and sync any pending changes from Part 7, then try again.)    Watch the terminal. Several things happen in sequence: a build, a push to a special gh-pages branch, and a trigger of the GitHub Actions workflow that actually publishes the site.    When the command finishes, the terminal will print your public URL. It looks like:   https:\/\/YOUR-USERNAME.github.io\/YOUR-REPO-NAME\/     The site itself may take another minute or two to actually go live even after the command finishes. You can check progress by going to your repository on github.com and clicking the Actions tab; a green checkmark means it's up.       ✓ You know it worked when…  You can open the github.io URL in a fresh browser tab (or on your phone, or from a friend's laptop) and see your lesson live on the public internet.    If you get stuck: the URL shows a 404  Two usual causes. First, give it another two or three minutes; the initial publish sometimes lags behind the deploy command. Second, go to Settings → Pages and confirm the source really is set to GitHub Actions . If it still says Deploy from a branch , change it, then run Deploy one more time.    If you get stuck: deploy command fails with a permissions error  On your repository page, go to Settings → Actions → General , scroll to Workflow permissions , and make sure Read and write permissions is selected. Save. Return to the Codespace and run Deploy again.   "
},
{
  "id": "codespace-deploy-2",
  "level": "2",
  "url": "codespace-deploy.html#codespace-deploy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Deploying GitHub Pages "
},
{
  "id": "codespace-enable-pages-2",
  "level": "2",
  "url": "codespace-deploy.html#codespace-enable-pages-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Settings Pages Source GitHub Actions "
},
{
  "id": "codespace-run-deploy-3",
  "level": "2",
  "url": "codespace-deploy.html#codespace-run-deploy-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt Deploy Actions "
},
{
  "id": "trouble-deploy-404-2",
  "level": "2",
  "url": "codespace-deploy.html#trouble-deploy-404-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Settings → Pages GitHub Actions Deploy from a branch Deploy "
},
{
  "id": "trouble-deploy-permission-2",
  "level": "2",
  "url": "codespace-deploy.html#trouble-deploy-permission-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Settings → Actions → General Workflow permissions Read and write permissions Deploy "
},
{
  "id": "codespace-share",
  "level": "1",
  "url": "codespace-share.html",
  "type": "Section",
  "number": "",
  "title": "Part 9. Share Your Work",
  "body": " Part 9. Share Your Work  You now have several ways to get your lesson in front of other people. Pick the one that fits each situation.   Share the public URL  The simplest option. Send colleagues or students the github.io URL from Part 8. It works on any device, requires no login, and updates whenever you redeploy. This is the right choice for: a lesson you want students to read, a handout for an upcoming class, anything you're comfortable having publicly indexed.    Share the PDF  For contexts where a single portable file is better, use the PDF you built in Part 6. You can download it from the Codespace: right-click output\/print\/main.pdf in the file explorer and choose Download . Attach it to email, post it in your LMS, or print it. This is the right choice for: handouts, one-page worksheets, anything that needs to travel through email or be printed.    Embed in your LMS  Most LMSs (Canvas, Blackboard, Moodle, Brightspace) let you add an external URL as a module item. Point it at your github.io URL and students get a native-looking link inside the course. Some LMSs also let you embed the page in an iframe; this works but can be visually cramped, and linking out is usually a better experience.    Share the source  If a colleague wants to adapt your lesson for their own course, send them the URL of your repository on github.com , not the github.io URL. From there they can click Use this template and have their own editable copy in seconds. This is how open-source textbook collaboration actually works in practice.    Share a self-contained HTML folder  If you need to deliver the whole lesson as a file bundle (for example, for an archive, or for a student without reliable internet), you can download the full output\/web\/ folder from the Codespace. Right-click it in the file explorer and choose Download . The resulting zip file can be unzipped anywhere; double-clicking index.html will open your lesson locally in a browser. Math rendering and interactives still work as long as the folder structure is preserved.    Share through Runestone Academy  For a full course with exercises that track student progress, consider publishing your PreTeXt book on Runestone Academy . Runestone adds auto-graded exercises, a gradebook, and LMS integration via LTI. This is the most involved option of the bunch (it involves a separate account and a publication review) and belongs on your radar as a longer-term goal rather than something to try today.     "
},
{
  "id": "codespace-share-2",
  "level": "2",
  "url": "codespace-share.html#codespace-share-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Download Use this template Download "
},
{
  "id": "codespace-returning",
  "level": "1",
  "url": "codespace-returning.html",
  "type": "Section",
  "number": "",
  "title": "Part 10. Coming Back Later",
  "body": " Part 10. Coming Back Later  The whole setup you just built is now waiting for you whenever you want to return to it.     Go to github.com and log in.    Click your repository in the list on the left (or navigate directly to github.com\/YOUR-USERNAME\/YOUR-REPO-NAME ).    Click the green < > Code button, switch to the Codespaces tab, and click your existing codespace to resume it. Do not create a new codespace every time , that will waste your free hours and leave you with unrelated environments.    Resuming takes about 30 seconds. Your files and any in-progress edits will be there.      A note on Codespace recycling  Unused Codespaces get deleted after about a month of inactivity. This sounds scary but only affects the environment , not your files : everything you've committed and synced is permanently safe on github.com . If your Codespace disappears, just create a fresh one on the same repository, and all your source will reappear. The lesson: commit often.   "
},
{
  "id": "codespace-returning-3",
  "level": "2",
  "url": "codespace-returning.html#codespace-returning-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "< > Code Codespaces "
},
{
  "id": "codespace-next-level",
  "level": "1",
  "url": "codespace-next-level.html",
  "type": "Section",
  "number": "",
  "title": "The Next Level: Installing PreTeXt Locally",
  "body": " The Next Level: Installing PreTeXt Locally  At some point you may want PreTeXt running on your own machine rather than in the cloud. Reasons to consider this:    You work somewhere with unreliable internet.  You're drafting a long book and prefer the speed of a local editor.  You want to use your favorite editor (Vim, Emacs, BBEdit, something else) instead of the browser's VS Code.  You want to avoid the free-tier Codespace monthly hours.    You don't need to go local to write great PreTeXt documents, and the Codespaces workflow will carry you a long way. But when you're ready, the official PreTeXt Guide has a thorough installation chapter at pretextbook.org\/doc\/guide\/html\/tutorial-install.html . There are three supported paths, in rough order of how hands-on they get:     Docker container (easiest)  Install VS Code , install Docker Desktop , and the official PreTeXt Docker image gives you an environment identical to the Codespace but running entirely on your own computer. Needs roughly 5 GB of disk space. Works the same way on Windows, Mac, and Linux.    Python install via pip (medium)  If you already have Python 3.10 or later, a single command ( pip install pretext ) gets you the PreTeXt command-line interface. For PDF and Braille output you'll also need latex and (for Braille) Node.js. This is the lightest-weight option if you're a comfortable Python user.    Developer install (advanced)  For contributors to PreTeXt itself, or for very custom setups. Not recommended as a first local install.     Whichever you pick, the source code stays identical . You can move a project between your local install and your Codespace freely through GitHub. That's one of the big payoffs of the version-controlled workflow you set up in Part 7: your work is portable across environments.  "
},
{
  "id": "codespace-next-level-5",
  "level": "2",
  "url": "codespace-next-level.html#codespace-next-level-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "VS Code Docker Desktop "
},
{
  "id": "codespace-latex-bridge",
  "level": "1",
  "url": "codespace-latex-bridge.html",
  "type": "Section",
  "number": "",
  "title": "Bonus: <span class=\"latex-logo\">L<span class=\"A\">a<\/span>T<span class=\"E\">e<\/span>X<\/span> to PreTeXt Quick Reference",
  "body": " Bonus: latex to PreTeXt Quick Reference  Most of what you know from latex transfers directly. The math inside the tags is still latex . This table covers the patterns that come up most often.   Common latex patterns and their PreTeXt equivalents      latex  PreTeXt    \\(x^2\\)  <m>x^2<\/m>    \\[ \\int f \\]  <me>\\int f<\/me>    \\section{Title}  <section><title>Title<\/title>    \\begin{itemize}  <ul>    \\item text  <li><p>text<\/p><\/li>    \\begin{definition}  <definition><statement><p>    \\emph{word}  <em>word<\/em>    \\textbf{word}  <term>word<\/term>    \\ref{label}  <xref ref=\"label\"\/>     "
},
{
  "id": "codespace-latex-bridge-3",
  "level": "2",
  "url": "codespace-latex-bridge.html#codespace-latex-bridge-3",
  "type": "Table",
  "number": "15",
  "title": "Common <span class=\"latex-logo\">L<span class=\"A\">a<\/span>T<span class=\"E\">e<\/span>X<\/span> patterns and their PreTeXt equivalents",
  "body": " Common latex patterns and their PreTeXt equivalents      latex  PreTeXt    \\(x^2\\)  <m>x^2<\/m>    \\[ \\int f \\]  <me>\\int f<\/me>    \\section{Title}  <section><title>Title<\/title>    \\begin{itemize}  <ul>    \\item text  <li><p>text<\/p><\/li>    \\begin{definition}  <definition><statement><p>    \\emph{word}  <em>word<\/em>    \\textbf{word}  <term>word<\/term>    \\ref{label}  <xref ref=\"label\"\/>    "
},
{
  "id": "codespace-troubleshooting",
  "level": "1",
  "url": "codespace-troubleshooting.html",
  "type": "Section",
  "number": "",
  "title": "Troubleshooting Quick Reference",
  "body": " Troubleshooting Quick Reference  These are the issues that come up most often. Each has already been mentioned in the relevant part of the tutorial; they're collected here for easy lookup.   The Use this template button is missing  You aren't signed in to GitHub, or haven't confirmed your email address. Sign in or confirm and refresh the page.    The Codespace looks frozen during first-time setup  First-time setup takes 5 to 10 minutes. Give it fifteen before worrying. If it still hasn't loaded, close the tab and reopen the Codespace from your repository's < > Code → Codespaces menu.    pretext new isn't in the command palette  The PreTeXt extension may still be initializing. Wait a minute and retry. If it still isn't there, close and reopen the Codespace.    Build fails with a red error  Almost always a missing or mismatched tag. Check the line number in the error message. Confirm every <tag> has a matching <\/tag> .    Preview is blank or stale  Build again, then refresh the preview tab with F5 . If that fails, close the preview tab and reopen via ▷ PreTeXt → View Full Document .    My Codespace disappeared  Inactive Codespaces are recycled after about a month. Your files are safe on github.com as long as you've committed and synced. Create a fresh Codespace from the same repository to pick up where you left off.    Deploy URL shows a 404  Wait 2 to 3 minutes for the first deploy to finish on GitHub's side. If it still 404s, check Settings → Pages on your repository and confirm the source is set to GitHub Actions .    Deploy fails with a permissions error  On your repository, go to Settings → Actions → General → Workflow permissions and select Read and write permissions . Save, then run Deploy again.    Something else is wrong  The PreTeXt community forums and Discord server (see the Information & Links chapter of this hub) are genuinely helpful for unusual problems. Post a short description of what you were trying to do, what happened instead, and any error text. Someone has almost certainly hit the same thing before.   "
},
{
  "id": "ts-codespace-slow-2",
  "level": "2",
  "url": "codespace-troubleshooting.html#ts-codespace-slow-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "< > Code → Codespaces "
},
{
  "id": "ts-preview-stale-2",
  "level": "2",
  "url": "codespace-troubleshooting.html#ts-preview-stale-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "▷ PreTeXt → View Full Document "
},
{
  "id": "ts-deploy-404-2",
  "level": "2",
  "url": "codespace-troubleshooting.html#ts-deploy-404-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Settings → Pages GitHub Actions "
},
{
  "id": "ts-deploy-permission-2",
  "level": "2",
  "url": "codespace-troubleshooting.html#ts-deploy-permission-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Settings → Actions → General → Workflow permissions Read and write permissions Deploy "
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
