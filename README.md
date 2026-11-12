# Grade 6 ADEK AI Build Lab

A GitHub Pages learning site for **AI Build Battle**. Includes the complete 20-lesson ADEK Core/Lab sequence, two MYP bridge-making/testing lessons and two reserve sessions. The bridge is made from LEGO, cardboard and recycled materials; no food theme is used.

## Start using the site

Extract the ZIP and open `index.html` in a browser for a local preview. For classroom iPads, publish the folder with GitHub Pages and open the resulting HTTPS address in Safari. No installation, build command, external font, student account or AI API key is required.

Keep `index.html`, `styles.css`, `app.js`, `lessons.js`, `assets` and `resources` together. Moving the HTML alone breaks its relative asset/resource links.

## Publish on GitHub Pages

1. Create a repository such as `grade6-ai-build-lab` in your GitHub account. Use a repository/plan that supports Pages.
2. Upload the **contents** of the extracted folder, with `index.html` at the repository root. Do not upload only the ZIP or put all files inside an extra parent folder.
3. Commit the files to `main`.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select **main** and **/(root)**, then **Save**.
7. Wait for GitHub to show the published address and open that exact address. The repository name is part of a project-site URL.

All paths in the site are relative, so it works beneath a repository subpath. `.nojekyll` is included. The `resources` folder includes the supplied Teacher Pack and unit plan; these are accessible to visitors when published, just like the teacher guide. There is no pretend staff password or authentication gate.

GitHub instructions were checked against the official documentation on 12 November 2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Visual student experience

Each lesson uses **Look → Try → Do → Show**. Students see a short idea with picture tiles, a tap-to-choose practice activity, one practical instruction at a time, then one evidence question at a time. They can move back, revisit completed steps and ask for help. Full explanations, worked examples, task sequences, source titles and learning outcomes are in the Teacher guide. Practice cards open on demand, one card at a time.

The prompt builder asks one question per screen. The research board uses four visual tabs with one section visible. Read-aloud reads only the current lesson step. Existing workbook backups remain compatible.

## Actual lesson content included

Every ADEK lesson contains:

- The exact source lesson title and Teacher Pack PDF page reference.
- A student-friendly explanation, worked example, practice cards/reference information and a task checklist.
- Guided, Independent and Stretch routes.
- An editable activity sheet with evidence prompts, optional sentence starters, oral-evidence recording and an exit question.
- Printing of a blank or completed worksheet.

The workbench provides a rules/learning comparison, a transparent numeric learning model, a structured prompt builder, four output-triage stations, a risk-matrix aid and a three-trial bridge log. The Criterion A research board and evidence export/restore are included.

## Differentiation

**Guided** supports SEN access through single-step cards, visual cues, sentence frames, optional reading support, oral/scribed responses and practical scaffolding. Each lesson has specific teacher adjustment notes. Required task quantities remain: for example, six test inputs and at least five before/after retests.

**Independent** retains all task steps and evidence requirements, with optional support available.

**Stretch** supports gifted and talented learners through counterexamples, experimental control, assumptions, tradeoffs, limitations and transfer. It adds reasoning depth after the core task, not just extra repetition.

Routes are flexible task choices, not diagnoses or fixed ability labels. Record agreed adjustments, extra project time beyond the normal allocation where required, assistance and review points in the school's approved system. Use the school's year overview to check annual coverage of every MYP Design strand; the site does not certify that coverage.

## Source fidelity

The supplied source is `Grade6_Main_Term1_Teacher_Pack_v4(1).pdf`, 67 pages. It is included unchanged as `resources/adek-grade6-teacher-pack.pdf`. The school unit is scheduled in Term 2; the source pack is labelled Main Course, Term 1. Source lesson order, objectives and essential quantities are retained.

The separate issued ADEK Student Lesson Content and Student Worksheets were not available. The website's explanations, practice materials and worksheets are **classroom adaptations aligned to the Teacher Pack**, not the issued ADEK student documents. The adapted four-strand task is teacher-assessed; use an issued assessment instead where required. The original Teacher Pack may include example contexts not selected for this unit; student activities here use classroom objects, drawings and the bridge task.

Use the exact source PDFs for the original rubrics and lesson detail. MYP A, B, C and D are separately assessed with the school's Year 1 descriptors. The site does not award grades.

## AI and data behaviour

- The prompt builder creates text for the **teacher** to run in a school-approved tool. It never sends a request to an AI service.
- Curated practice outputs are fixed and explicitly labelled. They are not generated from the learner's prompt and are not evidence of a live run.
- The numeric classifier actually calculates class means from labelled training examples and predicts the nearest mean. It is a small numeric demonstration, not a camera/vision model.
- No cameras, microphones, external analytics, student recording, submission server or student AI sign-in are used.
- Optional read-aloud uses the browser's speech-synthesis implementation and available device voices. Availability varies by device; a human reader is the alternative.
- Notes, self-recorded progress and logs use this browser's local storage. Private browsing, clearing browser data or device management can remove them. Export backups regularly.
- Nothing is sent to a teacher automatically. Export and share through the approved school system. Use no real names, student numbers, photos, voices or private details in task inputs.
- On a shared iPad: export the first learner's workbook, reset, then start the next learner. Restore the appropriate backup when returning. Backups replace rather than merge a workbook and require confirmation.
- Ready for review is a **self-recorded** status, not teacher approval, certification or grading.

## Teacher preparation

Trial the available bridge pieces and toy vehicle before confirming the class gap. The suggested 20 cm span is a starting point, not a promised design. Prepare actual inventories, labelled sketches, training/test cards and curated outputs. Maintain the approve-to-build gate and human verification. Record real crossing results and limitations.

The schedule includes 20 ADEK lessons, two practical periods and two reserves. Actual Ramadan period lengths and school dates need confirmation; the essential shortened route does not prove all 45-minute lesson activities fit. Plan additional project time where required by a learner's agreed arrangement.

## Edit the content

Edit `lessons.js` for text, prompts, worksheets and route tasks, including the `visual` object for each lesson. Each lesson is a data object with source title/page, explanation, example, practice materials, core checklist, support and extension. Edit `styles.css` for colours/layout and `app.js` for interactions. Keep the no-personal-data and source labels intact.

If regenerating the data, run `make_content.py` and then `visual_content.py` to add the visual lesson content. Run `node tests/check-content.cjs` to check source coverage and step counts.

The source is framework-free HTML/CSS/JavaScript. There is no package installation or server to maintain.

## Credits

Made by Ashleigh Lavens. Based on ADEK (Abu Dhabi Department of Education and Knowledge), *Grade 6 Main Course, Term 1 Teacher Pack*, version 4, supplied as `Grade6_Main_Term1_Teacher_Pack_v4(1).pdf`. Classroom activities and visual presentation are adaptations by Ashleigh Lavens; original source credited to ADEK. The visible website footer links to the included source PDF.
