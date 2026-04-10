var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  HUB: geoff-cox.github.io\/debook-talk\/hub\/ Applied Mathematics @ Virginia Military Institute        Ordinary differential equations (ODEs) form a gateway course for many STEM majors, yet students often encounter steep conceptual and technical barriers when transitioning from calculus to differential equations. This talk presents a case study in rethinking ODE pedagogy through the development of an open-access textbook that blends student-centered narrative, scaffolded checkpoints, interactive technology, and structured workflows.  The project's guiding question is: How can textbook design itself function as an innovation in teaching and learning? Each chapter is built around conversational explanations, step-by-step workflow and reading checkpoints that emphasize concepts and procedure. Interactive visualizations add a dynamic perspective to simulate a classroom experience.  By framing the textbook not only as a resource but as a pedagogical experiment, this work highlights the role of curriculum design in shaping student experiences of ODEs and opens space for dialogue about how innovative resources can transform undergraduate mathematics education.   "
},
{
  "id": "resources-links",
  "level": "1",
  "url": "resources-links.html",
  "type": "Section",
  "number": "",
  "title": "Resources &amp; Links",
  "body": " Resources & Links     Contact   ▷ Geoff: coxgeoff@vmi.edu     Presentation   ▷ Slides  ▷ Course Homepage  ▷ Textbook (viewable - HTML)  ▷ Textbook (source - GitHub)     PreTeXt  ▷ Homepage  ▷ PreTeXt Guide  ▷ Help Forums    Runestone Academy  ▷ Homepage  ▷ Users Guide  ▷ Videos    Student Survey  ▷ Questions      "
},
{
  "id": "talk-demo-interactive-features",
  "level": "1",
  "url": "talk-demo-interactive-features.html",
  "type": "Section",
  "number": "",
  "title": "Interactive Features",
  "body": " Interactive Features   Third-Party Apps   Embedded Interactives    GeoGebra     Desmos     Google Maps      Reading Questions   ✔ True\/False   True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinte.      ✔ Multiple-Choice   Multiple-Choice, Not Randomized, One Answer   What color is a stop sign?      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?  Maybe go out for a drive?     ✔ Matching  Exponential Integration Rules   Match each function of with its antiderivative. Assume is a constant.                               ✔ Clickable-Area   Integration by Parts   Click on the correct integration by parts formula.                      ✔ Fill-in-the-Blank   Fill-In, Prime less then 20   What is an example of a prime number less than 20?       [2, 3, 5, 7, 11, 13, 17, 19].includes(Number(ans))   Any number from the list is a prime number less than 20.     function(){ const val=Number(ans); if (val <= 0) { return \"You need to give a positive integer.\" } if (val >= 20) { return \"The integer must be less than 20.\" } for (let i=2; i<=3; i++) { if (val % i == 0) { return `Your answer is composite since it is divisible by ${i}.` } } return false; }()        ✔ Interactive Coding  See how the code below counts the number of digits in an integer.   num = 569 nDigits = 0 print(f\"How many digits are in the integer {num}\") temp = num while temp > 1: temp = temp\/10 nDigits = nDigits + 1 print(f\" temp={temp}\") print(f\"{num} has {nDigits} digits\")        Authored (Advanced)   DoenetML -->      JSXGraph         "
},
{
  "id": "vector-space-dimension",
  "level": "2",
  "url": "talk-demo-interactive-features.html#vector-space-dimension",
  "type": "Checkpoint",
  "number": "1",
  "title": "True\/False.",
  "body": " True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinte.   "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "talk-demo-interactive-features.html#multiple-choice-not-randomized",
  "type": "Checkpoint",
  "number": "2",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": " Multiple-Choice, Not Randomized, One Answer   What color is a stop sign?      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?  Maybe go out for a drive?  "
},
{
  "id": "lt-common-transforms-prereading-questions-1",
  "level": "2",
  "url": "talk-demo-interactive-features.html#lt-common-transforms-prereading-questions-1",
  "type": "Checkpoint",
  "number": "3",
  "title": "Exponential Integration Rules.",
  "body": "Exponential Integration Rules   Match each function of with its antiderivative. Assume is a constant.                            "
},
{
  "id": "lt-derivative-transfer-prereading-questions-2",
  "level": "2",
  "url": "talk-demo-interactive-features.html#lt-derivative-transfer-prereading-questions-2",
  "type": "Checkpoint",
  "number": "4",
  "title": "Integration by Parts.",
  "body": " Integration by Parts   Click on the correct integration by parts formula.                   "
},
{
  "id": "ex-demo-jscmp-primes",
  "level": "2",
  "url": "talk-demo-interactive-features.html#ex-demo-jscmp-primes",
  "type": "Checkpoint",
  "number": "5",
  "title": "Fill-In, Prime less then 20.",
  "body": " Fill-In, Prime less then 20   What is an example of a prime number less than 20?       [2, 3, 5, 7, 11, 13, 17, 19].includes(Number(ans))   Any number from the list is a prime number less than 20.     function(){ const val=Number(ans); if (val <= 0) { return \"You need to give a positive integer.\" } if (val >= 20) { return \"The integer must be less than 20.\" } for (let i=2; i<=3; i++) { if (val % i == 0) { return `Your answer is composite since it is divisible by ${i}.` } } return false; }()     "
},
{
  "id": "textbook-highlights",
  "level": "1",
  "url": "textbook-highlights.html",
  "type": "Section",
  "number": "",
  "title": "Textbook Highlights",
  "body": " Textbook Highlights  Talk highlight links:  Audio  Multi-part Questions (prob 2)  Interactive Visualization  Tikz  Slide Show  More Vizualization    "
},
{
  "id": "getting-started-w-pretext",
  "level": "1",
  "url": "getting-started-w-pretext.html",
  "type": "Section",
  "number": "",
  "title": "PreTeXt Setup Guide",
  "body": " PreTeXt Setup Guide   Workspace Setup  The quickest and easiest way to get started with PreTeXt is through GitHub. Using a GitHub Codespace means you don't need to install anything locally — everything runs in your browser with all dependencies preconfigured. Here's how to set it up:     Create a GitHub Account    Go to GitHub .  Create an account (it's free for individual users).      Import the PreTeXt Codespace Template    Visit the official PreTeXt Codespace repository on GitHub.     Click    and choose    Create a New Repository .    In the new window, fill in:  Repository name  Description — optional.  Visibility — choose Public or Private .  Then click Create repository . GitHub will copy the official PreTeXt codespace into your account as a new repo.       Start Your Codespace    If you weren't automatically redirected, go to your GitHub account and open the new repository you just created.     Click    and open the Codespaces tab.         In this tab, click       The Codespace will begin setting up. This may take a few minutes the first time. When complete, you'll have a fully functional PreTeXt workspace running in your browser.         A Minimal Project   Once your Codespace loads, it'll will look like so:   It's ready for PreTeXt , but it needs a few files first. If you click on the README.md and scroll down to Creating a New Project , you'll find some directions for initiating a PreTeXt project.    Creating a New Book     Creating a New PreTeXt Project    Hit F1 to open the command palette.  Type pretext .  Scroll down and select PreTeXt : New Project .  Select the type of document you want to create. For this demo, we'll choose book .  Select the location of your project, but the default should be the one you want.       Completing these steps will populate your codespace with all the files you need to author in PreTeXt . In fact, it also provides a template that build right-away.     Your First Build     Building A PreTeXt Book     Locate the ▷ PreTeXt button on the bottom tool bar.      To build the book, select Build default target .  The default is the html version of the book. Let's also build a pdf version of the book as well.  Click on the ▷ PreTeXt button and select Build Another Target followed by the print option.  The results of both of these builds should now be in the output folder.         Viewing the Output     Viewing A PreTeXt Book    Now, we can view both the html and pdf version of the template book.  To view them, click on the ▷ PreTeXt button again and select View Full Document then choose either the web or print option.  In either case, a new broswer window should open. If the html doesn't display in the broswer, try refreshing the page.          Having A Look Around  Once your Codespace loads, you'll see a ready-to-use PreTeXt project folder. You could begin writing immediately, but before doing so it's helpful to understand the structure and purpose of the key folders and files.   Notable Folders & Files     source  This folder contains your PreTeXt document files. Typically separated by chapter or section, plus a main.ptx file, which pulls them together.    output  The output folder is automatically generated when you build your project and contains the final product, ready to view or publish. You don't edit anything here.    assets  A general-purpose folder for supporting materials like images, data files, videos, etc. When you reference these in your source, PreTeXt includes them automatically.        project.ptx  The central configuration file that describes your entire project. This is where you specify the formats you want to generate and what files are needed to build them.    main.ptx  The entry point of your PreTeXt document that ties together all chapters or sections. It's like the table of contents of your project.    publication.ptx  This settings file that contains all the visual knobs for customizing the output of your documents.       "
},
{
  "id": "root-1-2-7",
  "level": "1",
  "url": "root-1-2-7.html",
  "type": "Section",
  "number": "",
  "title": "Student Feedback Survey",
  "body": " Student Feedback Survey   Purpose and Consent  This survey gathers feedback on your experience using an interactive differential equations textbook. The goal is to understand how interactive reading questions and other features influence student learning and engagement.  Your participation is completely voluntary. You may skip any question or stop at any time. Responses are collected anonymously, and no identifying information will be shared or published.  Aggregated results may be used for educational research, presentations, and peer-reviewed publication to improve interactive learning design.  Estimated time to complete this survey is five to ten minutes. By proceeding, you indicate that you are at least eighteen years old and consent to participate in this study.    Background Information   What is your major?      Applied Mathematics  Physics  Engineering  Other     What is your class standing?      Freshman  Sophomore  Junior  Senior     Is this your first time taking a differential equations course?      Yes  No     Have you used an interactive textbook in any course before?      Yes  No     How do you primarily access this textbook?      Laptop  Desktop  Tablet  Phone  Other      Engagement and Usage   How often do you use the interactive reading questions?      Never  Rarely  Occasionally  Frequently  Always     Indicate how often you do the following when using the interactive reading questions   (0=Never, 1=Rarely, 2=Occasionally, 3=Often, 4=Always)         You answer the reading questions seriously.  0 1 2 3 4    You review the feedback explanations after answering.  0 1 2 3 4    Even when your answer is correct, you select the other answer choices to read the feedback.  0 1 2 3 4        How helpful are each of the following question types for your learning?             Don't know  Not helpful  Somewhat helpful  Helpful  Very helpful     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇        About how many hours per week do you spend using the interactive textbook?   Please enter the amount of hours as a number =       .*  Your answer has been recorded.        Learning Experience   Please rate how much you agree with each statement             Disagree  Neutral  Agree     The interactive features help me understand differential equations better.   〇  〇  〇  〇  〇    I retain concepts better using the interactive textbook.  〇  〇  〇  〇  〇    The textbook helps me apply concepts to problem solving.  〇  〇  〇  〇  〇    The interactive features make abstract concepts more concrete.  〇  〇  〇  〇  〇    The interactive questions help me identify what I do not understand.  〇  〇  〇  〇  〇    The interactive features sometimes distract me from the main ideas.  〇  〇  〇  〇  〇    The interactive textbook encourages me to persist when I get an answer wrong.  〇  〇  〇  〇  〇    The textbook is accessible and works well with my device or screen reader.  〇  〇  〇  〇  〇         Comparison and Perception   Compared to a traditional textbook, how would you rate this interactive textbook on the following aspects?             Traditional Better  Neutral  Interactive Better    Overall learning experience  〇  〇  〇  〇  〇    Concept understanding  〇  〇  〇  〇  〇    Problem-solving support  〇  〇  〇  〇  〇    Motivation to learn  〇  〇  〇  〇  〇        How likely are you to recommend this interactive textbook to another student learning differential equations?   Please respond on a scale from zero (not at all likely) to ten (extremely likely).      Open-Ended Reflection   Describe one moment when an interactive reading question helped a concept click for you         If you could improve one aspect of the interactive textbook (content, visuals, navigation, or feedback), what would it be and why?         "
},
{
  "id": "root-1-2-7-3-2",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-3-2",
  "type": "Exercise",
  "number": "1",
  "title": "What is your major?",
  "body": " What is your major?      Applied Mathematics  Physics  Engineering  Other   "
},
{
  "id": "root-1-2-7-3-3",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-3-3",
  "type": "Exercise",
  "number": "2",
  "title": "What is your class standing?",
  "body": " What is your class standing?      Freshman  Sophomore  Junior  Senior   "
},
{
  "id": "root-1-2-7-3-4",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-3-4",
  "type": "Exercise",
  "number": "3",
  "title": "Is this your first time taking a differential equations course?",
  "body": " Is this your first time taking a differential equations course?      Yes  No   "
},
{
  "id": "root-1-2-7-3-5",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-3-5",
  "type": "Exercise",
  "number": "4",
  "title": "Have you used an interactive textbook in any course before?",
  "body": " Have you used an interactive textbook in any course before?      Yes  No   "
},
{
  "id": "root-1-2-7-3-6",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-3-6",
  "type": "Exercise",
  "number": "5",
  "title": "How do you primarily access this textbook?",
  "body": " How do you primarily access this textbook?      Laptop  Desktop  Tablet  Phone  Other   "
},
{
  "id": "root-1-2-7-4-2",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-4-2",
  "type": "Exercise",
  "number": "1",
  "title": "How often do you use the interactive reading questions?",
  "body": " How often do you use the interactive reading questions?      Never  Rarely  Occasionally  Frequently  Always   "
},
{
  "id": "root-1-2-7-4-3",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-4-3",
  "type": "Exercise",
  "number": "2",
  "title": "Indicate how often you do the following when using the interactive reading questions.",
  "body": " Indicate how often you do the following when using the interactive reading questions   (0=Never, 1=Rarely, 2=Occasionally, 3=Often, 4=Always)         You answer the reading questions seriously.  0 1 2 3 4    You review the feedback explanations after answering.  0 1 2 3 4    Even when your answer is correct, you select the other answer choices to read the feedback.  0 1 2 3 4      "
},
{
  "id": "root-1-2-7-4-4",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-4-4",
  "type": "Exercise",
  "number": "3",
  "title": "How helpful are each of the following question types for your learning?",
  "body": " How helpful are each of the following question types for your learning?             Don't know  Not helpful  Somewhat helpful  Helpful  Very helpful     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇     〇 〇 〇 〇 〇      "
},
{
  "id": "root-1-2-7-4-5",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-4-5",
  "type": "Exercise",
  "number": "4",
  "title": "About how many hours per week do you spend using the interactive textbook?",
  "body": " About how many hours per week do you spend using the interactive textbook?   Please enter the amount of hours as a number =       .*  Your answer has been recorded.     "
},
{
  "id": "root-1-2-7-5-2",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-5-2",
  "type": "Exercise",
  "number": "1",
  "title": "Please rate how much you agree with each statement.",
  "body": " Please rate how much you agree with each statement             Disagree  Neutral  Agree     The interactive features help me understand differential equations better.   〇  〇  〇  〇  〇    I retain concepts better using the interactive textbook.  〇  〇  〇  〇  〇    The textbook helps me apply concepts to problem solving.  〇  〇  〇  〇  〇    The interactive features make abstract concepts more concrete.  〇  〇  〇  〇  〇    The interactive questions help me identify what I do not understand.  〇  〇  〇  〇  〇    The interactive features sometimes distract me from the main ideas.  〇  〇  〇  〇  〇    The interactive textbook encourages me to persist when I get an answer wrong.  〇  〇  〇  〇  〇    The textbook is accessible and works well with my device or screen reader.  〇  〇  〇  〇  〇      "
},
{
  "id": "root-1-2-7-6-2",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-6-2",
  "type": "Exercise",
  "number": "1",
  "title": "Compared to a traditional textbook, how would you rate this interactive textbook on the following aspects?",
  "body": " Compared to a traditional textbook, how would you rate this interactive textbook on the following aspects?             Traditional Better  Neutral  Interactive Better    Overall learning experience  〇  〇  〇  〇  〇    Concept understanding  〇  〇  〇  〇  〇    Problem-solving support  〇  〇  〇  〇  〇    Motivation to learn  〇  〇  〇  〇  〇      "
},
{
  "id": "root-1-2-7-6-3",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-6-3",
  "type": "Exercise",
  "number": "2",
  "title": "How likely are you to recommend this interactive textbook to another student learning differential equations?",
  "body": " How likely are you to recommend this interactive textbook to another student learning differential equations?   Please respond on a scale from zero (not at all likely) to ten (extremely likely).   "
},
{
  "id": "root-1-2-7-7-2",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-7-2",
  "type": "Exercise",
  "number": "1",
  "title": "Describe one moment when an interactive reading question helped a concept click for you.",
  "body": " Describe one moment when an interactive reading question helped a concept click for you       "
},
{
  "id": "root-1-2-7-7-3",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-7-3",
  "type": "Exercise",
  "number": "2",
  "title": "If you could improve one aspect of the interactive textbook (content, visuals, navigation, or feedback), what would it be and why?",
  "body": " If you could improve one aspect of the interactive textbook (content, visuals, navigation, or feedback), what would it be and why?       "
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
