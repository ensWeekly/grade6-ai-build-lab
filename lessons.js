window.LESSONS = [
  {
    "id": 1,
    "week": 1,
    "type": "Core",
    "title": "Unit Launch - Rule-Based vs Learning Systems",
    "page": 5,
    "success": [
      "I can ask at least two genuine questions about rule-based and learning systems.",
      "I can sort three systems into 'follows fixed rules' or 'learns from data' and give a reason for each.",
      "I can help write our class responsible-use rules for AI tools."
    ],
    "originalSteps": [
      "Compare the fixed-rule and learning-system scenario cards, or watch the teacher’s two clips. Note which system was told every step.",
      "Read the two definitions and add one example of each to your page.",
      "Sort the three system cards into 'fixed rules' or 'learns from data' with your partner.",
      "Write one reason under each card - what is your evidence?",
      "Post at least two genuine questions on the class question wall.",
      "Agree one responsible-use rule and add it to the class charter."
    ],
    "short": "Spot the system",
    "hook": "An AI instruction asks for a piece we do not have. What would you check first?",
    "teach": "A rule-based system follows instructions written by a person. A learning system finds patterns in examples. Both need people to check their results.",
    "guided": [
      "Look at the two system pictures with your teacher.",
      "Sort all three cards. Point, choose a label, then give a reason.",
      "Ask two questions and help agree one safe-use rule."
    ],
    "stretch": "Find a system that could use both rules and learning. Explain what information you would need before classifying it.",
    "fields": [
      {
        "id": "q1",
        "label": "Two questions",
        "frame": "I want to know how ___. My second question is ___."
      },
      {
        "id": "q2",
        "label": "Three system decisions",
        "frame": "Traffic-light timer: ___ because ___. Learning spam filter: ___ because ___. Learning suggestions: ___ because ___."
      },
      {
        "id": "q3",
        "label": "Class safe-use rule",
        "frame": "We will ___ because ___."
      }
    ],
    "exit": "What evidence would tell you that a system learned from examples?",
    "access": "Use two labelled columns and read the cards aloud. Keep three decisions and two questions; accept pointing followed by an oral reason.",
    "strand": "Integration",
    "date": "4–8 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Two ways to decide",
      "body": "A traffic-light timer changes after a fixed time: the person wrote the timing rule. A classifier shown labelled shapes predicts a label for a new shape: the prediction comes from patterns in its training examples."
    },
    "materials": [
      {
        "title": "Two comparison scenarios",
        "body": "A vending machine follows a stored price/change rule. A shape model studies labelled examples and predicts the label for a new drawing. Compare these cards if your teacher is not using video clips."
      },
      {
        "title": "Three sorting cards",
        "body": "1 Traffic-light timer: its person-set timing never changes from examples. 2 Learning spam filter: trained on labelled messages. 3 Learning suggestion tool: trained on examples of text. Sort each and give a reason; these descriptions specify the mechanism."
      }
    ]
  },
  {
    "id": 2,
    "week": 1,
    "type": "Lab",
    "title": "Rule vs Learning - Hands-On Exploration (Lab)",
    "page": 8,
    "success": [
      "I can run the rule-card machine and the learn-from-examples game and record what each does.",
      "I can log at least three differences I observed between them.",
      "I can design a fair test that would reveal whether a system follows rules or learns."
    ],
    "originalSteps": [
      "Assign roles: feeder, recorder, tester.",
      "At Station A, feed five inputs through the rule cards, including one unusual input, and log each output.",
      "Note whether Station A ever changed its behaviour.",
      "At Station B, study the labelled example cards and agree a pattern as a group.",
      "Classify five new cards using only the pattern you built; log your guesses and the correct answers.",
      "Record at least three differences between the two stations.",
      "Design one test that would reveal whether an unknown system follows rules or learns.",
      "Predict what input would break each station and note it."
    ],
    "short": "Investigate two stations",
    "hook": "Can a system get better just because you gave it a new example?",
    "teach": "Compare a fixed IF–THEN card machine with a paper activity where a pattern is inferred from labelled examples. The paper activity models learning; it is not a live AI service.",
    "guided": [
      "Feed five inputs through the rule station, including an unusual one.",
      "Study labelled examples, then classify five new cards at the learning station.",
      "Use a comparison frame for three differences, then propose a fair test."
    ],
    "stretch": "Design a counterexample that exposes a weak inferred pattern. Keep your comparison fair by changing one input feature.",
    "fields": [
      {
        "id": "q1",
        "label": "Station A five-input log",
        "frame": "Input / fixed rule / output / unusual result."
      },
      {
        "id": "q2",
        "label": "Station B five-new-card log",
        "frame": "New card / prediction / correct label / result."
      },
      {
        "id": "q3",
        "label": "Three differences and a test",
        "frame": "One difference is ___. Another is ___. A third is ___. My fair test would ___."
      },
      {
        "id": "q4",
        "label": "Prediction",
        "frame": "I predict ___ might fail when ___ because ___."
      }
    ],
    "exit": "Which test could reveal a difference between fixed rules and learning?",
    "access": "Provide numbered input cards and a scribed log. Chunk the five trials; do not omit the unusual input or three differences.",
    "strand": "Integration",
    "date": "4–8 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "An unusual input",
      "body": "A rule says IF the card is a square, put it in Box A. A new triangle may have no instruction. A learned pattern may also misclassify a new triangle if the examples were too narrow. Both failures need evidence."
    },
    "materials": [
      {
        "title": "Station A fixed-rule machine",
        "body": "Rule: IF a card has 3 sides, send it to A. IF it has 4 sides, send it to B. Otherwise send it to CHECK. Inputs: triangle, square, rectangle, a different triangle, and a circle. Record the result of every input."
      },
      {
        "title": "Station B example-learning cards",
        "body": "Training cards: two small triangles labelled A, two large triangles labelled A, two squares labelled B and two rectangles labelled B. Infer a pattern from the examples. New cards: thin triangle, wide triangle, rotated square, long rectangle and circle. The teacher’s reference is A for 3-sided shapes, B for 4-sided shapes and CHECK otherwise. Predict before revealing/checking labels."
      },
      {
        "title": "Compare",
        "body": "Did the rule machine change its rules? Which information did you infer from examples? What happened to the unusual circle? Log at least three differences, not just the labels."
      }
    ]
  },
  {
    "id": 3,
    "week": 2,
    "type": "Core",
    "title": "Rules vs Learning - How Each System Works",
    "page": 11,
    "success": [
      "I can name two features that separate rule-based and learning systems.",
      "I can give one real example of each and explain why it fits.",
      "I can use the words rule-based, learning, data and model correctly."
    ],
    "originalSteps": [
      "Copy the two-column feature chart.",
      "Add one example to each row with your partner.",
      "Classify two everyday systems using the chart.",
      "For each, underline the feature that decided your answer.",
      "Write two sentences using data and model correctly."
    ],
    "short": "Explain how each system works",
    "hook": "Does a robot automatically count as a learning system?",
    "teach": "Look at how a system makes a decision, not at how modern it looks. A model is a pattern learned from training data. A fixed timer can be useful without learning.",
    "guided": [
      "Match rule-based, learning, data and model to examples.",
      "Find two differences using the comparison frame.",
      "Explain one real example of each system."
    ],
    "stretch": "Explain when fixed rules are a better choice than learning. Use a boundary case where a learning system could be unnecessary.",
    "fields": [
      {
        "id": "q1",
        "label": "Two features",
        "frame": "A rule-based system ___. A learning system ___. A second difference is ___."
      },
      {
        "id": "q2",
        "label": "Two everyday examples",
        "frame": "My fixed-rule example is ___ because ___. My learning example is ___ because ___."
      },
      {
        "id": "q3",
        "label": "Vocabulary in use",
        "frame": "The data is ___. The model learns ___."
      }
    ],
    "exit": "Where do the rules or decision patterns come from?",
    "access": "Use objects and paired definitions. Allow first-language rehearsal and a short recorded teacher observation.",
    "strand": "CU",
    "date": "11–15 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Choose by mechanism",
      "body": "A wheeled vehicle follows a stored turn sequence. It is following fixed rules. A separate model learns labels from examples of pieces. Calling both “robots” does not explain how their decisions are made."
    },
    "materials": [
      {
        "title": "Mechanism cards",
        "body": "Card A: a model learns piece labels from drawings. Card B: a robot repeats a stored turn sequence. Card C: a timer follows fixed intervals. Explain each mechanism; do not classify solely by the word robot or AI."
      },
      {
        "title": "Word bank",
        "body": "Rule-based: person-written steps. Data: examples or information. Learning system: derives a pattern from examples. Model: the learned pattern used for a prediction."
      }
    ]
  },
  {
    "id": 4,
    "week": 2,
    "type": "Lab",
    "title": "Train a Simple Model (Lab)",
    "page": 14,
    "success": [
      "I can sort examples into training and testing sets and train a simple classifier.",
      "I can test the model on new examples and record how it did.",
      "I can explain how my training examples changed what the model learned, and name one data-safety rule."
    ],
    "originalSteps": [
      "Choose two categories of non-personal items (for example, short versus long LEGO pieces, or circles versus triangles).",
      "Collect and label 8-10 clear training examples per category.",
      "Set aside 3 testing examples per category and keep them hidden.",
      "Train the model (teacher-operated classifier or your paper-classifier) using training examples only.",
      "Predict how each testing example will be classified.",
      "Test each held-back example and log correct or incorrect.",
      "Explain how your training examples shaped what the model learned.",
      "Run the data-safety and risk check, then write one improvement to your training set."
    ],
    "short": "Train and test a small model",
    "hook": "Would a test be fair if the model already saw every test card?",
    "teach": "Training examples help a model learn a pattern. Held-back testing examples check it on new cases. Use only non-personal pieces or drawings. The Workbench has a small numeric learning demonstration.",
    "guided": [
      "Prepare 8–10 labelled examples for each of two categories.",
      "Keep three new test examples per category separate. Train only with the training examples.",
      "Predict and test all six held-back examples; explain one result and a data-safety rule."
    ],
    "stretch": "Compare balanced, narrow and noisy training sets. Hold the test set constant and explain whether a performance change supports your explanation.",
    "fields": [
      {
        "id": "q1",
        "label": "Training and testing split",
        "frame": "Category A: ___, training count ___. Category B: ___, training count ___. I held back three per category."
      },
      {
        "id": "q2",
        "label": "Six predictions and results",
        "frame": "Case / true label / prediction / result. Repeat for six cases."
      },
      {
        "id": "q3",
        "label": "How data affected the model",
        "frame": "The model learned ___ from ___. A mistake suggests ___."
      },
      {
        "id": "q4",
        "label": "Safety and improvement",
        "frame": "We used no personal data. I would improve the examples by ___."
      }
    ],
    "exit": "Why must training and testing examples be different?",
    "access": "Provide pre-labelled sets with 8 examples per category and six held-back cards. Students still predict, check and explain each result.",
    "strand": "CU",
    "date": "11–15 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Separate the sets",
      "body": "Prepare eight short-piece examples and eight long-piece examples. Keep three fresh examples of each class hidden. Train on the sixteen training examples; then predict and test the six unseen examples. Do not move the test cards into training before the first test."
    },
    "materials": [
      {
        "title": "Prepare the class sets",
        "body": "Use 8–10 examples per category, such as short/long pieces or circles/triangles. Hold back three different examples per category. All examples are non-personal objects/drawings. Label consistently and keep test cards out of training."
      },
      {
        "title": "On-screen alternative",
        "body": "Open Workbench → Train a small model. It supplies eight examples per class and six held-back test cases. Compare the sets using the same test cases. It is a transparent numeric model, not a camera-based classifier."
      }
    ]
  },
  {
    "id": 5,
    "week": 3,
    "type": "Core",
    "title": "Structured Prompts to Complete a Task",
    "page": 17,
    "success": [
      "I can write a structured prompt with a clear goal, context and format.",
      "I can say whether the task was completed and why.",
      "I can improve my prompt once to complete the task more fully."
    ],
    "originalSteps": [
      "Read the defined task and underline what 'complete' means.",
      "Write a structured prompt with Goal, Context and Format.",
      "Hand your prompt to the teacher to run on the approved tool.",
      "Judge whether the output completed the task.",
      "Make one adjustment to your prompt to complete it more fully.",
      "Verify the output against the task and complete a quick risk check."
    ],
    "short": "Give AI a clear building task",
    "hook": "Which prompt is easier to check: “make a bridge” or one with materials, a gap and a format?",
    "teach": "Goal says what to do. Context supplies the facts. Format says how the answer should look. A structured prompt still needs checking against the real task.",
    "guided": [
      "Fill the Goal, Context and Format boxes using a supplied inventory.",
      "Ask your teacher to run it, or use the labelled practice outputs.",
      "Check task completion; change one prompt feature and compare."
    ],
    "stretch": "Keep the task and input fixed. Predict how a precise format constraint might help or hurt usability, then check the output.",
    "fields": [
      {
        "id": "q1",
        "label": "First structured prompt",
        "frame": "Goal: ___. Context: ___. Format: ___."
      },
      {
        "id": "q2",
        "label": "Output and completion check",
        "frame": "The output said ___. The task was complete / incomplete because ___."
      },
      {
        "id": "q3",
        "label": "One adjustment and result",
        "frame": "I changed ___. After checking, ___."
      },
      {
        "id": "q4",
        "label": "Verification and risk",
        "frame": "I checked against ___. One risk and action are ___."
      }
    ],
    "exit": "What did your prompt change actually improve?",
    "access": "Use a cloze frame one slot at a time. Dictation to the teacher is an equivalent response option; keep the output check and adjustment.",
    "strand": "SD",
    "date": "18–22 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "From vague to checkable",
      "body": "Vague: “Help build a bridge.” Structured: “Goal: write assembly steps. Context: use this inventory and approved sketch for a 20 cm gap. Format: at most six short steps and three checks.” Then check whether each condition was met."
    },
    "materials": [
      {
        "title": "A fictional practice task",
        "body": "Goal: create short instructions for a tabletop model. Sample inventory: 6 plates, 8 bricks and one 25 × 10 cm cardboard strip. Gap: 20 cm. Vehicle width: 5 cm. Sample sketch: two supports, one deck resting on both supports. Joining and fit need teacher verification; these facts are a prompt exercise, not a validated construction design."
      },
      {
        "title": "Compare prompts",
        "body": "Vague: “Build a good bridge.” Structured: “Using the supplied inventory and sketch, give at most six short assembly steps, followed by inventory, gap/vehicle-fit and physical-test checks.” Compare actual completion against the task."
      }
    ]
  },
  {
    "id": 6,
    "week": 3,
    "type": "Lab",
    "title": "Prompt-to-Task Workshop (Lab)",
    "page": 20,
    "success": [
      "I can complete a richer task with a structured prompt and compare two structures.",
      "I can design a reusable prompt template for similar tasks.",
      "I can check an output for accuracy and complete a risk check."
    ],
    "originalSteps": [
      "List the three requirements of the richer task.",
      "Draft two structured prompts that order Goal, Context and Format differently.",
      "Predict which structure will complete the task more fully.",
      "Have the teacher run both prompts; record the outputs.",
      "Mark which requirements each output met and verify the facts.",
      "Choose the stronger structure and turn it into a reusable template with labelled slots.",
      "Build a verification step and a risk check into the template.",
      "Test your template mentally on a second, similar task."
    ],
    "short": "Compare two prompt designs",
    "hook": "Is the longest answer always the best one?",
    "teach": "Compare two structures on the same richer task with three requirements. Choose using completion and accuracy, then build a reusable template with verification and a risk check.",
    "guided": [
      "Highlight the three task requirements.",
      "Arrange two prompt structures and compare the two teacher-run or curated outputs.",
      "Choose a template, add check slots, and explain what can be reused."
    ],
    "stretch": "Test the chosen template on a second task. Identify which parts transfer and which must change; explain the limits of your evidence.",
    "fields": [
      {
        "id": "q1",
        "label": "Three requirements",
        "frame": "1 ___. 2 ___. 3 ___."
      },
      {
        "id": "q2",
        "label": "Prompt A and Prompt B",
        "frame": "A: ___. B: ___. Both use the same task facts."
      },
      {
        "id": "q3",
        "label": "Comparison and choice",
        "frame": "A met ___ requirements. B met ___. My choice is ___ because the checked evidence shows ___."
      },
      {
        "id": "q4",
        "label": "Reusable template",
        "frame": "Goal [ ]. Context [ ]. Format [ ]. Verify against [ ]. Risk check [ ]."
      }
    ],
    "exit": "Why does a reusable template still need a check for each new task?",
    "access": "Provide movable text cards, a three-box requirement checklist and sentence frames. Keep both structures and both accuracy checks.",
    "strand": "SD",
    "date": "18–22 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Compare the same task",
      "body": "Both prompts must use the same inventory, match the same sketch and include three checks. Prompt A gives numbered steps; Prompt B gives a step/material/check table. Compare completion and accuracy rather than choosing the longest output."
    },
    "materials": [
      {
        "title": "Three requirements for the richer task",
        "body": "1 Use only the stated inventory and approved sketch. 2 Use the requested short step format. 3 Include inventory, gap/vehicle-fit and physical-crossing checks. Keep the same task facts for both prompt designs."
      },
      {
        "title": "Two structures to test",
        "body": "A: Goal → Context → Format, with numbered steps. B: Context → Goal → Format, with a step/material/check table. Run through your teacher or compare the clearly labelled fixed outputs in Workbench → Prompt builder. Verify each result; fixed samples do not react to your prompt."
      }
    ]
  },
  {
    "id": 7,
    "week": 4,
    "type": "Core",
    "title": "Judging Outputs - Correct, Incorrect, Unclear",
    "page": 23,
    "success": [
      "I can sort outputs into correct, incorrect, and unclear.",
      "I can give a reason for each judgement I make.",
      "I can name one action to take when an output cannot be trusted."
    ],
    "originalSteps": [
      "Read the task each output was meant to answer.",
      "Read the output and check it against the task and any given source.",
      "Assign a verdict: correct, incorrect, or unclear.",
      "Write a six-word reason for the verdict.",
      "Name one action for any unclear or incorrect output."
    ],
    "short": "Correct incorrect or unclear",
    "hook": "A guide names a piece you do not have. Is that an accuracy problem or just a style choice?",
    "teach": "Correct matches the supplied evidence. Incorrect conflicts with it. Unclear does not give enough information to decide or act. Choose a verification action before using it.",
    "guided": [
      "Read one task, output and reference together.",
      "Classify all three outputs and point to the evidence.",
      "Choose an action for an incorrect or unclear output."
    ],
    "stretch": "Create an output that sounds confident but cannot be verified. Explain what evidence would change your verdict.",
    "fields": [
      {
        "id": "q1",
        "label": "Three verdicts with reasons",
        "frame": "Output 1: ___ because ___. Output 2: ___. Output 3: ___."
      },
      {
        "id": "q2",
        "label": "Warning signal",
        "frame": "I would not trust it as-is because ___."
      },
      {
        "id": "q3",
        "label": "Verification action",
        "frame": "I would check ___ or ask ___ before ___."
      }
    ],
    "exit": "What is the difference between incorrect and unclear?",
    "access": "Show one output at a time and offer three labelled verdict cards. Keep a reason for each classification.",
    "strand": "CE",
    "date": "25–29 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Three verdicts",
      "body": "Reference: the inventory has six plates and no cardboard. “Use six plates” matches that fact. “Cut a cardboard deck” conflicts with it. “Join it over there” is unclear because the connection and location are unspecified."
    },
    "materials": [
      {
        "title": "Reference and outputs",
        "body": "Reference: 6 plates and no cardboard. Output 1: “Use six plates and compare the layout with the approved sketch.” Output 2: “Use eight plates and add cardboard.” Output 3: “Join it over there.” Decide correct/incorrect/unclear, give a reason and select a check. Correct here means the statement matches its reference; it does not prove the whole bridge works."
      }
    ]
  },
  {
    "id": 8,
    "week": 4,
    "type": "Lab",
    "title": "Output Triage Clinic (Lab)",
    "page": 26,
    "success": [
      "I can run the triage routine across a full set of outputs.",
      "I can rank outputs by trustworthiness and defend my order.",
      "I can choose a verification action for outputs I cannot trust."
    ],
    "originalSteps": [
      "At each station, read the task and the curated output.",
      "Assign a verdict: correct, incorrect, or unclear.",
      "Write a checkable reason for the verdict.",
      "Choose a verification action (check a source, compare to original, re-prompt, ask a person).",
      "After all stations, rank outputs on the trust ladder from most to least trustworthy.",
      "Agree a group defence for the top and bottom placements.",
      "Name one risk of using the least trustworthy output as-is."
    ],
    "short": "Run the output triage clinic",
    "hook": "Would you trust a neat guide that ignores the inventory?",
    "teach": "Use the reference at each station, assign a verdict with a reason, choose a check and build a trust ladder. Confidence and neatness are not proof of accuracy.",
    "guided": [
      "Complete all four stations with a partner reading if needed.",
      "At each station record a verdict, evidence and check.",
      "Rank the outputs and explain the top and bottom positions."
    ],
    "stretch": "Defend a near-tie in your ranking. Explain what additional evidence could reverse the order.",
    "fields": [
      {
        "id": "q1",
        "label": "Four station records",
        "frame": "Station / verdict / reference evidence / verification action."
      },
      {
        "id": "q2",
        "label": "Trust ladder",
        "frame": "Most trustworthy ___, then ___, then ___, least ___."
      },
      {
        "id": "q3",
        "label": "Defence and risk",
        "frame": "The top is ___ because ___. The bottom is ___ because ___. Using it could ___."
      }
    ],
    "exit": "Which check is best suited to the least trustworthy output?",
    "access": "Use numbered stations, a visible NOW–NEXT–THEN plan and a ticked reference strip. All four stations remain required.",
    "strand": "CE",
    "date": "25–29 January",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Match check to output",
      "body": "For “use eight plates”, count the real plates. For “join the beam there”, compare the labelled sketch and ask which connection is meant. Rewriting the wording cannot replace checking the actual materials."
    },
    "materials": [
      {
        "title": "Four clinic stations",
        "body": "Open Workbench → Output triage. Station 1 has a count mismatch; Station 2 matches the inventory; Station 3 leaves a joint unclear; Station 4 makes an unsupported strength claim. Classify all four, choose verification actions and then defend your trust ladder."
      },
      {
        "title": "Possible verification actions",
        "body": "Count the actual pieces. Compare with the approved sketch. Ask a person to identify the joint. Run a physical test before making a strength claim. Choose an action appropriate to the problem."
      }
    ]
  },
  {
    "id": 9,
    "week": 5,
    "type": "Core",
    "title": "Risks and Responsible Use",
    "page": 29,
    "success": [
      "I can name two genuine risks of using an AI tool.",
      "I can explain who each risk could affect.",
      "I can state a responsible-use rule that reduces a risk."
    ],
    "originalSteps": [
      "Read the scenario card.",
      "Decide the risk family: accuracy or safety/privacy.",
      "Name who could be affected.",
      "Attach one responsible-use rule that reduces the risk."
    ],
    "short": "Name a risk and reduce it",
    "hook": "An AI guide promises “this will definitely hold” without a test. Who could be affected?",
    "teach": "A risk is a possible problem and its effect on someone. Consider wrong instructions, misleading claims, unfair access and personal information. A useful rule reduces a named risk.",
    "guided": [
      "Match two risk cards to the people affected.",
      "Explain why each matters using a sentence frame.",
      "Write one rule and rewrite the private-data example with fictional information."
    ],
    "stretch": "Compare two mitigations for the same risk. Explain the tradeoff and why a rule reduces rather than removes risk.",
    "fields": [
      {
        "id": "q1",
        "label": "Two risks and affected users",
        "frame": "Risk 1 ___ affects ___ because ___. Risk 2 ___ affects ___ because ___."
      },
      {
        "id": "q2",
        "label": "Responsible-use rule",
        "frame": "To reduce ___, we will ___."
      },
      {
        "id": "q3",
        "label": "Remove personal information",
        "frame": "Instead of the identifying input, use this fictional version: ___."
      }
    ],
    "exit": "How does your rule reduce the risk you named?",
    "access": "Use picture-supported risk/action pairs, short text and oral rehearsal. Students still explain two risks and affected users.",
    "strand": "GE",
    "date": "1–5 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Risk → person → rule",
      "body": "Risk: the guide invents a piece. Effect: the builder cannot finish and may waste time. Rule: compare every named piece and count with the inventory before using the guide. This reduces the risk but does not prove the structure will hold."
    },
    "materials": [
      {
        "title": "Risk cards",
        "body": "A: A guide invents a piece. B: It guarantees strength without a test. C: It requests a real learner’s full name and student number. D: Long instructions prevent a peer from accessing the task. Name affected user types and practical mitigations."
      },
      {
        "title": "Rewrite the identifying input",
        "body": "Problem prompt: “Use my real name and real student number in every instruction.” Rewrite it with a fictional builder code or no identifier. Never enter actual identifying details into the site or a teacher-run AI tool."
      }
    ]
  },
  {
    "id": 10,
    "week": 5,
    "type": "Lab",
    "title": "Class AI Risk Audit (Lab)",
    "page": 32,
    "success": [
      "I can audit our AI use against a rule set and find a gap.",
      "I can place risks on a matrix by likelihood and impact.",
      "I can propose one rule to reduce the highest-priority risk."
    ],
    "originalSteps": [
      "Read the anonymised class AI-use log.",
      "Check each entry against the responsible-use rule set.",
      "Flag any gap and name the risk and who it affects.",
      "Place each flagged risk on the likelihood-impact matrix.",
      "Circle the highest-priority risk to mitigate first.",
      "Write one responsible-use rule that closes that gap.",
      "Pitch the rule for the class charter."
    ],
    "short": "Audit our own AI use",
    "hook": "Which class habit should we improve first?",
    "teach": "An audit checks what happened against agreed rules. Use anonymised class records or clearly labelled fictional samples. Rank risk by likelihood and impact, then propose a practical rule.",
    "guided": [
      "Compare each use-log entry with the class rules.",
      "Name a gap and place the risk on the matrix.",
      "Choose the priority risk and propose one rule to close the gap."
    ],
    "stretch": "Challenge the ranking with a plausible alternative. Justify which evidence or stakeholder perspective changed your priority.",
    "fields": [
      {
        "id": "q1",
        "label": "Audit entries",
        "frame": "Entry / rule checked / gap / affected user. Use no names."
      },
      {
        "id": "q2",
        "label": "Risk matrix and priority",
        "frame": "Risk ___; likelihood ___; impact ___; priority because ___."
      },
      {
        "id": "q3",
        "label": "New rule and reason",
        "frame": "Our rule is ___. It reduces the gap by ___."
      }
    ],
    "exit": "Why is this the priority risk rather than another one?",
    "access": "Provide a shortened anonymised log with the same genuine decision, a colour-and-word matrix and a modelled entry.",
    "strand": "GE",
    "date": "1–5 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Audit a fictional record",
      "body": "A sample log says: “A guide was used without comparing it with the pieces.” The gap is missing verification. Decide the likelihood and impact using evidence, then propose an inventory check. In class, use anonymised records where available."
    },
    "materials": [
      {
        "title": "Fictional audit log for practice",
        "body": "Entry 1: team used a guide without inventory verification. Entry 2: prompt used a fictional material list and the output was checked. Entry 3: a vague joint instruction was followed without asking. Entry 4: an identifying learner detail was requested; the teacher removed it before any tool use. Use anonymised actual class records instead when available."
      },
      {
        "title": "Rule set to audit",
        "body": "Only teacher-operated AI. No personal data. Check outputs against references. Stop and ask a person when unclear. Be honest about limits. For each entry: identify the rule, gap, affected user and mitigation. Rank likelihood and impact with a reason."
      }
    ]
  },
  {
    "id": 11,
    "week": 6,
    "type": "Core",
    "title": "Bringing the Strands Together",
    "page": 35,
    "success": [
      "I can complete a guided challenge that uses all four strands.",
      "I can explain how the system type and prompt shaped the output.",
      "I can name one responsible-use choice I made."
    ],
    "originalSteps": [
      "Name the system type behind the task.",
      "Write or choose a clear prompt.",
      "Triage the curated output as correct, incorrect, or unclear.",
      "Run a basic risk check and note one responsible-use choice.",
      "Explain how the system and prompt shaped the output."
    ],
    "short": "Connect all four strands",
    "hook": "A guide looks useful. What else must we know before using it?",
    "teach": "Connect system type, structured prompting, output verification and risk. A final use decision needs both an accuracy check and a responsible-use reason.",
    "guided": [
      "Name the system type and the task.",
      "Complete the structured prompt and compare the output with the reference.",
      "Check a risk; decide use, change or reject and explain."
    ],
    "stretch": "Explain how one weakness can affect another strand. Test whether changing the prompt changes the accuracy or risk decision.",
    "fields": [
      {
        "id": "q1",
        "label": "System and prompt",
        "frame": "System type ___ because ___. Goal ___. Context ___. Format ___."
      },
      {
        "id": "q2",
        "label": "Accuracy and risk verdict",
        "frame": "Accuracy ___ because ___. Risk ___; mitigation ___."
      },
      {
        "id": "q3",
        "label": "Use decision",
        "frame": "Use / change / reject because ___. The prompt affected the result by ___."
      }
    ],
    "exit": "Which responsible-use choice did you make and why?",
    "access": "Use a four-picture strand strip and one shared example before the independent decision. Keep both accuracy and risk verdicts.",
    "strand": "Integration",
    "date": "8–12 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Connect the checks",
      "body": "A prompt-based guide uses an existing AI system. The prompt supplies facts and format. The output names an absent piece, so the accuracy verdict is incorrect. The responsible action is to reject that step and ask a person, not continue building."
    },
    "materials": [
      {
        "title": "Guided integrated case",
        "body": "Reference: a prompt-based guide must use 6 plates and no cardboard. Output: “Use 8 plates and a cardboard deck; it will definitely hold.” Name the system/task, build a structured prompt, give an accuracy verdict and a risk verdict, then justify use/change/reject."
      }
    ]
  },
  {
    "id": 12,
    "week": 6,
    "type": "Lab",
    "title": "Integrated Build-and-Check (Lab)",
    "page": 38,
    "success": [
      "I can run a build-and-check task through all four strands end-to-end.",
      "I can record the accuracy and risk checks I made.",
      "I can name which strand I most need to improve."
    ],
    "originalSteps": [
      "Station 1: name the system type suited to the task and why.",
      "Station 2: design a clear, specific prompt.",
      "Station 3: triage the curated output for accuracy with a reason.",
      "Station 4: run a risk assessment and choose a mitigation.",
      "Give the output an accuracy verdict and a risk verdict.",
      "Decide: use, do not use, or use-with-changes.",
      "Diagnose the group's weakest strand before the signature solution."
    ],
    "short": "Build and check end to end",
    "hook": "Could a good build still have a weak verification process?",
    "teach": "Run four stations: system, prompt, accuracy and risk. Make a justified use decision and identify the strand most needing work before the Signature Solution.",
    "guided": [
      "Visit all four stations using the strand strip.",
      "Record the accuracy verdict, risk verdict and use decision.",
      "Choose one strand to improve and say what you will do."
    ],
    "stretch": "Swap your evidence with another group. Identify a possible weakness in their reasoning and revise your own diagnosis after discussion.",
    "fields": [
      {
        "id": "q1",
        "label": "Four station notes",
        "frame": "1 system ___. 2 prompt ___. 3 accuracy ___. 4 risk ___."
      },
      {
        "id": "q2",
        "label": "Use decision with evidence",
        "frame": "My decision is ___ because ___ and ___."
      },
      {
        "id": "q3",
        "label": "Strand to improve",
        "frame": "I most need to improve ___ by ___."
      }
    ],
    "exit": "Which piece of evidence supports your diagnosis?",
    "access": "Chunk the four-station sheet into one visible step at a time. Allow a scribe for the learner’s own explanations.",
    "strand": "Integration",
    "date": "8–12 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "A complete use decision",
      "body": "“I will use this guide with changes. Its material list matches the tray, but Step 3 does not identify the joint. I will ask my teacher to confirm the connection and log the correction.” This combines accuracy, risk and an action."
    },
    "materials": [
      {
        "title": "The four station cards",
        "body": "Station 1: Which system mechanism is involved and why? Station 2: Write a Goal–Context–Format request using the fictional inventory from Lesson 5. Station 3: compare the output “use 8 plates” with a 6-plate inventory. Station 4: name the risk, affected user and mitigation. Finish with the use decision and weakest-strand diagnosis."
      }
    ]
  },
  {
    "id": 13,
    "week": 7,
    "type": "Core",
    "title": "Signature Solution - Planning",
    "page": 41,
    "success": [
      "I can state the goal of my solution in one clear sentence.",
      "I can lay out a prompt structure with a role, a task, and one rule.",
      "I can name the inputs my solution needs and how I will check the output.",
      "I can describe one risk and one way my plan reduces it."
    ],
    "originalSteps": [
      "Read your task card and write the goal in one sentence.",
      "Build the prompt structure: role, task, and one rule.",
      "List the inputs the prompt needs (no personal or identifying data).",
      "Write your output-evaluation method (how you will check accuracy).",
      "Name one risk and one way your plan reduces it, then submit for the approve-to-build gate."
    ],
    "short": "Plan the Signature Solution",
    "hook": "What must your teacher know before approving a build?",
    "teach": "Plan the goal, prompt structure, inputs, output-check method and a risk mitigation. The teacher checks the plan before building. Include a role, task and rule in the structured prompt.",
    "guided": [
      "Complete the five planning sections using real, counted pieces.",
      "Compare two feasible guide formats and draw the bridge plus checking process.",
      "Show the plan to your teacher and record feedback before building."
    ],
    "stretch": "Add a second user or changed material set. Explain how your architecture supports it without weakening verification.",
    "fields": [
      {
        "id": "q1",
        "label": "Goal role task and rule",
        "frame": "User need ___. Goal ___. Role ___. Task ___. Rule ___."
      },
      {
        "id": "q2",
        "label": "Inputs and evaluation",
        "frame": "Inventory/counts/sizes ___. Gap ___. Vehicle ___. Sketch ___. I will verify by ___."
      },
      {
        "id": "q3",
        "label": "Two designs and chosen format",
        "frame": "A numbered steps ___. B step/material/check ___. I chose ___ because ___."
      },
      {
        "id": "q4",
        "label": "Risk mitigation and teacher feedback",
        "frame": "Risk ___. Mitigation ___. Teacher feedback and next action ___."
      },
      {
        "id": "q5",
        "label": "Diagram and evidence reference",
        "frame": "My labelled bridge and input → prompt → output → check → fallback diagram are recorded at ___."
      }
    ],
    "exit": "Which missing check would stop your plan being approved?",
    "access": "Use a five-panel visual planner, measured sample pieces and an illustrated input frame. Teacher review is required for every route.",
    "strand": "Integration",
    "date": "15–19 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Five-part plan",
      "body": "Goal: a usable building guide. Inputs: inventory, dimensions and approved sketch. Structure: role, task, rule and format. Evaluation: compare pieces, sketch and test conditions. Risk: invented connections; mitigation: teacher verification and fallback."
    },
    "materials": [
      {
        "title": "Five planning panels",
        "body": "1 Goal and user need. 2 Role/task/rule and prompt format. 3 Inputs: actual inventory, dimensions and approved sketch. 4 How output accuracy and usefulness will be checked. 5 Risk mitigation and human fallback. Submit to the teacher before building."
      },
      {
        "title": "Practical brief",
        "body": "Teacher trials and agrees a manageable tabletop gap and the same toy vehicle before confirming the brief. Suggested starting point: 20 cm and three crossings. Use actual pieces and dimensions; do not assume the fictional practice inventory matches your kit."
      }
    ]
  },
  {
    "id": 14,
    "week": 7,
    "type": "Lab",
    "title": "Prototype and Pressure-Test the Plan (Lab)",
    "page": 44,
    "success": [
      "I can run my prompt structure on a normal input and read the output.",
      "I can pressure-test it with a tricky input and spot where it fails.",
      "I can add a fallback branch that says what to do when a check fails.",
      "I can record the change I made and the reason for it."
    ],
    "originalSteps": [
      "Copy your approved prompt structure onto the prototype slot of your build/test log.",
      "Run it on a normal curated input (teacher board) and record whether it met the goal.",
      "Pressure-test with a tricky curated input; record what failed and the error type.",
      "Write a fallback branch: 'If the check fails, then ___ and ask a person.'",
      "Re-run on the tricky input if time allows and log the change you made and the reason."
    ],
    "short": "Pressure test the plan",
    "hook": "What should your helper do when the required gap is missing?",
    "teach": "A normal input shows the intended behaviour; a tricky input exposes a weak spot. Classify the error, add a human fallback and record what changed and why.",
    "guided": [
      "Try one complete request using the teacher’s tool or labelled output cards.",
      "Try a missing or conflicting input and identify the error.",
      "Write an IF check fails THEN action and ask a person; record a change."
    ],
    "stretch": "Design an adversarial but classroom-appropriate input. Explain which assumption it tests and why your fallback is proportionate.",
    "fields": [
      {
        "id": "q1",
        "label": "Normal run",
        "frame": "Input ___. Output ___. Goal met because ___."
      },
      {
        "id": "q2",
        "label": "Tricky run and error type",
        "frame": "Input ___. Failure ___. Error type: incorrect / unclear / missing / conflict."
      },
      {
        "id": "q3",
        "label": "Fallback and change",
        "frame": "If ___, then ___ and ask ___. I changed ___ because ___."
      }
    ],
    "exit": "How will your fallback protect a user when the check fails?",
    "access": "Show normal and tricky inputs side by side; provide IF–THEN cards and an error word bank. Keep both runs and the logged reason.",
    "strand": "Integration",
    "date": "15–19 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "A pressure test",
      "body": "Normal input gives a clear gap, inventory and sketch. Tricky input gives “20 cm and 30 cm” for the same required gap. The expected action is ASK TEACHER and identify the conflict. If the output chooses silently, log the failure and improve validation."
    },
    "materials": [
      {
        "title": "Normal input card",
        "body": "A complete, teacher-approved inventory, one agreed gap, vehicle dimensions and labelled sketch. Define the correct-output checks before running."
      },
      {
        "title": "Tricky input cards",
        "body": "A: gap missing. B: the same field says both 20 cm and 30 cm. C: the approved sketch needs cardboard, but the inventory excludes it. The expected response identifies the missing/conflicting fact and asks a person. Log the actual output and classified failure, not just the expected answer."
      }
    ]
  },
  {
    "id": 15,
    "week": 8,
    "type": "Core",
    "title": "Signature Solution - Building",
    "page": 47,
    "success": [
      "I can build my solution by following my approved plan.",
      "I can evaluate outputs and flag ones that are wrong or unclear.",
      "I can make one improvement and explain what changed and why.",
      "I can keep personal data out of every prompt."
    ],
    "originalSteps": [
      "Restate your goal and check on the build/test log.",
      "Run your prompt structure on defined, curated inputs (teacher board) and record each output.",
      "Evaluate each output against your check and flag any that are wrong or unclear.",
      "Make one improvement to a rule or the structure in response to a flag.",
      "Re-run and log the loop as evaluate -> change -> result."
    ],
    "short": "Build from the approved plan",
    "hook": "What counts as an improvement rather than just a change?",
    "teach": "Create the working prompt-driven Build Guide from the approved plan. Evaluate outputs, flag errors, refine one feature and keep a version record. Only the teacher operates live AI.",
    "guided": [
      "Copy your approved structure and fill the real input slots.",
      "Run through the teacher or use clearly labelled curated outputs.",
      "Check, flag and improve one feature; log the result with no personal data."
    ],
    "stretch": "Compare two possible fixes. Use a held-back case to check whether the chosen fix helps beyond the example that prompted it.",
    "fields": [
      {
        "id": "q1",
        "label": "Plan and first version",
        "frame": "Plan reference ___. Prompt version 1 ___."
      },
      {
        "id": "q2",
        "label": "Output check",
        "frame": "Output ___. I checked ___; it was correct / incorrect / unclear because ___."
      },
      {
        "id": "q3",
        "label": "Improvement log",
        "frame": "Evidence → change → result: ___."
      },
      {
        "id": "q4",
        "label": "Privacy and skill evidence",
        "frame": "No personal data check ___. My own technical action was ___; evidence reference ___."
      }
    ],
    "exit": "How does the output check justify your improvement?",
    "access": "Supply the approved template with empty input slots and a three-column log. Record the learner’s own check and change.",
    "strand": "Integration",
    "date": "22–26 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "An evidence-based change",
      "body": "Version 1 names “a long beam” without identifying it. The checker cannot choose a piece. Version 2 requires each step to name a piece from the labelled inventory. Retest to see whether the output now identifies it correctly."
    },
    "materials": [
      {
        "title": "Build and version log",
        "body": "Version / input / actual output / evidence check / incorrect or unclear flag / change / result. Save both versions. Use actual teacher-run outputs or label curated responses as simulated."
      },
      {
        "title": "Fixed samples for practice",
        "body": "Workbench → Prompt builder contains a weak output and a revised output for a fixed fictional inventory. They help you practise checking; they do not demonstrate that your own prompt has worked."
      }
    ]
  },
  {
    "id": 16,
    "week": 8,
    "type": "Lab",
    "title": "Extended Build and Evaluation (Lab)",
    "page": 50,
    "success": [
      "I can complete a working solution that follows my plan.",
      "I can evaluate its outputs across several test inputs and measure accuracy.",
      "I can handle an incorrect output gracefully using my fallback.",
      "I can run a basic risk check and document the fix I made."
    ],
    "originalSteps": [
      "Confirm your solution follows the plan and the fallback branch is wired in.",
      "Define what counts as a correct output for your goal.",
      "Run all six curated test inputs on the board and record each result.",
      "Compute accuracy (correct out of six) and handle any failure with your fallback.",
      "Document the fix and complete the three-question risk check (accuracy, clarity, no personal data)."
    ],
    "short": "Test six inputs",
    "hook": "Would one successful run be enough evidence?",
    "teach": "Define correct before running. Test all six curated inputs, count accuracy, handle a failure with the fallback, document a fix and complete the risk check.",
    "guided": [
      "Read the six request cards and expected checks.",
      "Evaluate every output against its check; mark correct or not yet and give evidence.",
      "Count correct out of six, demonstrate fallback and complete accuracy/clarity/privacy checks."
    ],
    "stretch": "Explain which cases the test set covers and which it misses. Propose a new case and justify its value without replacing the six required ones.",
    "fields": [
      {
        "id": "q1",
        "label": "Correct-output criteria",
        "frame": "A correct output must ___."
      },
      {
        "id": "q2",
        "label": "Six-case log",
        "frame": "Case / input / actual output / expected check / result / reason. Include all six."
      },
      {
        "id": "q3",
        "label": "Accuracy fallback and fix",
        "frame": "Correct ___ out of 6. Failure ___. Fallback ___. Fix ___."
      },
      {
        "id": "q4",
        "label": "Risk check",
        "frame": "Accuracy checked ___. Clarity checked ___. No personal data confirmed ___."
      }
    ],
    "exit": "Which failure did your fallback handle?",
    "access": "Evaluate two cases at a time with a modelled row and a scribe if needed. All six cases, accuracy count and risk check remain.",
    "strand": "Integration",
    "date": "22–26 February",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Count accuracy honestly",
      "body": "If four of six requests satisfy every predetermined check, record 4/6. A neat answer does not count as correct when it invents a material. Keep the failing case and demonstrate the fallback before logging the fix."
    },
    "materials": [
      {
        "title": "Six curated input cases",
        "body": "1 Complete approved task and real inventory. 2 Complete task with a different teacher-approved gap/sketch. 3 Only tape available, no structural pieces. 4 Required gap missing. 5 Two conflicting gaps. 6 Sketch needs cardboard, inventory excludes it."
      },
      {
        "title": "Expected checks",
        "body": "Cases 1–2: respect all supplied facts/materials, use at most six steps, include all three final checks, and have human-checked feasible connections. Cases 3–6: ASK TEACHER and identify the specific problem. Count correct only if all stated checks are met. No generated guide is physically validated until tested."
      },
      {
        "title": "Six-row log",
        "body": "For every case record input, actual output, expected check, verdict and reason. Then count correct/6, show a failure/fallback/fix and complete accuracy, clarity and privacy checks."
      }
    ]
  },
  {
    "id": 17,
    "week": 9,
    "type": "Core",
    "title": "Signature Solution - Refining & Finishing",
    "page": 53,
    "success": [
      "I can finish my solution so it meets the success criteria our class agreed on.",
      "I can judge my solution for accuracy, usefulness and risk using the rubric.",
      "I can explain one change I made and say why it made the solution better."
    ],
    "originalSteps": [
      "Open the agreed success-criteria card and read the three lenses.",
      "Run one accuracy test using examples with known correct answers.",
      "Run one usefulness check against what the real user needs.",
      "Run one basic risk check (harm, fairness, privacy).",
      "Choose the single most important improvement and record why.",
      "Make the change and re-test to confirm it helped and broke nothing.",
      "Swap with another pair for 'two stars and a wish' feedback."
    ],
    "short": "Refine using evidence",
    "hook": "A peer prefers prettier instructions. Is that your biggest priority?",
    "teach": "Review accuracy, usefulness and risk against the agreed criteria. Give specific peer feedback, act on an improvement and explain the result.",
    "guided": [
      "Match evidence to the three headings accuracy, usefulness and risk.",
      "Ask a peer for specific feedback using two stars and a wish.",
      "Make one change and compare the checked result."
    ],
    "stretch": "Explain a tradeoff between clarity, brevity and completeness. Defend a change using two types of evidence.",
    "fields": [
      {
        "id": "q1",
        "label": "Self and peer review",
        "frame": "Accuracy evidence ___. Usefulness evidence ___. Risk evidence ___. Peer feedback ___."
      },
      {
        "id": "q2",
        "label": "Refinement",
        "frame": "Before ___. Change ___. After ___. This improved ___ because ___."
      },
      {
        "id": "q3",
        "label": "Remaining limitation",
        "frame": "I still need to check ___."
      }
    ],
    "exit": "What evidence shows the solution became more useful?",
    "access": "Use three labelled review cards, one feedback stem and a before/change/after frame. Keep a reason linked to the result.",
    "strand": "Integration",
    "date": "1–5 March",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "A useful peer comment",
      "body": "“Your first step names the piece clearly. Step 3 still says ‘attach here’; label that connection on the sketch.” The designer changes one feature and checks the new output against the same evidence."
    },
    "materials": [
      {
        "title": "Review headings",
        "body": "Accuracy: matches the reference and constraints. Usefulness: helps the intended builder take the next action. Risk: identifies who could be affected and how harm/confusion is reduced. Feedback: two specific strengths and one actionable improvement."
      }
    ]
  },
  {
    "id": 18,
    "week": 9,
    "type": "Lab",
    "title": "Final Iteration and Risk Review (Lab)",
    "page": 56,
    "success": [
      "I can run a final evaluation across accuracy, usefulness and risk and act on one improvement.",
      "I can complete a risk review and confirm my solution is safe and fair.",
      "I can record my final iteration with clear before-and-after evidence."
    ],
    "originalSteps": [
      "Re-open the refinement log and set the Lab goal.",
      "Make the final planned improvement to the solution.",
      "Re-test with at least five known-answer cases and record before and after.",
      "List possible risks (wrong answer, unfairness, privacy).",
      "Place each risk on the likelihood-by-seriousness matrix.",
      "Decide an action for any high risk and confirm no personal data is used.",
      "Write a one-line safe-and-fair statement and freeze the version.",
      "Swap matrices with another pair to sense-check placements."
    ],
    "short": "Retest and review risk",
    "hook": "Can a fix solve one case and break another?",
    "teach": "Retest at least five identical known cases before and after the final change. Keep a risk matrix, act on high risk, confirm privacy and write an honest safe-and-fair statement.",
    "guided": [
      "Choose at least five known cases and keep their expected checks unchanged.",
      "Record before and after results for the same cases.",
      "Finish the risk matrix, cross-check it with another pair and freeze the final version."
    ],
    "stretch": "Investigate a regression: identify a case that gets worse after a change. Explain what your evidence does and does not justify about reliability.",
    "fields": [
      {
        "id": "q1",
        "label": "At least five before-and-after cases",
        "frame": "Case / expected / before / after / reason. Use the same cases and checks."
      },
      {
        "id": "q2",
        "label": "Final risk matrix",
        "frame": "Risk / likelihood / impact / action. Include wrong output, fairness and privacy."
      },
      {
        "id": "q3",
        "label": "Safe-and-fair statement",
        "frame": "My solution is suitable for ___ when ___. Its limits are ___. No personal data was used."
      },
      {
        "id": "q4",
        "label": "Final version and sense-check",
        "frame": "Version ___. Peer matrix check ___. Change and reason ___."
      }
    ],
    "exit": "What would make your final reliability claim too strong?",
    "access": "Use five paired-row cards and read the expected check aloud. Preserve the before/after comparison, risk review and limitation statement.",
    "strand": "Integration",
    "date": "1–5 March",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Check for regression",
      "body": "Keep cases 1–5 and their expected checks unchanged. A revision may improve missing-input handling but make a valid case fail. Record both improvements and regressions. A before-and-after table is stronger evidence than “it is better”."
    },
    "materials": [
      {
        "title": "Retest protocol",
        "body": "Choose at least five known cases from Lesson 16. Preserve the same requests, expected checks and conditions for before/after comparison. Keep failures and regressions visible."
      },
      {
        "title": "Risk review prompts",
        "body": "Wrong output: what would the user do? Fairness/access: who might be left out? Privacy: are all inputs non-personal? Place risks on the matrix, act on any priority risk, confirm a person can intervene and state limitations honestly."
      }
    ]
  },
  {
    "id": 19,
    "week": 10,
    "type": "Core",
    "title": "Showcase, Assessment & Reflection",
    "page": 59,
    "success": [
      "I can present my finished solution and explain at least two design or evaluation choices.",
      "I can show the term's key outcomes in a short assessment task.",
      "I can state one thing I learned and set one goal for next term."
    ],
    "originalSteps": [
      "Read the four-strand summary and set out your evidence.",
      "Complete the short Term-1 assessment task individually.",
      "Prepare a 60-second pitch naming user, problem and two justified choices.",
      "Present to your small group.",
      "Give one peer a specific 'why' question about their choices.",
      "Write one thing learned and one Term-2 goal toward Proficient."
    ],
    "short": "Showcase and individual assessment",
    "hook": "Can you explain why you chose a design and a test?",
    "teach": "Complete the supplied four-strand task individually. Present the finished AI solution, justify at least two choices and set a next-stage goal. A display alone is not evidence of the four outcomes.",
    "guided": [
      "Gather one piece of evidence for each of the four strands.",
      "Complete your teacher’s individual assessment with your agreed access support.",
      "Prepare a 60-second pitch with two because statements and a next-step goal."
    ],
    "stretch": "Answer a peer’s challenging why question with evidence and a limitation. Transfer your explanation to a changed user or material set.",
    "fields": [
      {
        "id": "q1",
        "label": "CU explain the decision process",
        "frame": "A fixed-rule system ___. A learning system ___. Training and testing differ because ___."
      },
      {
        "id": "q2",
        "label": "SD draft a structured task request",
        "frame": "Goal ___. Context ___. Format ___. Verification and fallback ___."
      },
      {
        "id": "q3",
        "label": "CE evaluate the provided output",
        "frame": "My verdict is ___ because the reference shows ___. My action is ___."
      },
      {
        "id": "q4",
        "label": "GE risk affected user and mitigation",
        "frame": "Risk ___ affects ___ because ___. A mitigation is ___."
      },
      {
        "id": "q5",
        "label": "Two justified design or evaluation choices",
        "frame": "I chose ___ because evidence ___. I tested ___ because ___."
      },
      {
        "id": "q6",
        "label": "Reflection and next-stage goal",
        "frame": "I learned ___. My next goal is ___."
      }
    ],
    "exit": "Which evidence best supports your explanation?",
    "access": "Use a visual pitch strip, quiet slot, oral/scribed response and extra processing time as agreed. Preserve individual judgement; do not prefill assessed answers.",
    "strand": "Integration",
    "date": "15–19 March",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Justify two choices",
      "body": "“I used labelled input slots because the first output omitted the gap. I tested a conflicting-gap case because a normal case alone did not reveal validation problems.” Both choices name evidence and a reason."
    },
    "materials": [
      {
        "title": "Classroom four-strand performance task",
        "body": "This is an adapted teacher-assessed task. Use the fictional reference: 6 plates, no cardboard, an approved sketch and a stated gap. Output: “use 8 plates and a cardboard deck; it will definitely hold.” Explain a fixed-rule versus learned decision, draft a structured request, evaluate the output with a reason/action, and identify a risk and mitigation. Your teacher may use the issued assessment instead."
      },
      {
        "title": "Pitch and reflection",
        "body": "Present the finished solution and two justified design/evaluation choices using your own evidence. Ask/answer one why question, state one learning and set a next-stage goal."
      }
    ]
  },
  {
    "id": 20,
    "week": 10,
    "type": "Lab",
    "title": "Showcase Carousel and Reflection (Lab)",
    "page": 62,
    "success": [
      "I can present my solution in a showcase carousel and give structured peer feedback.",
      "I can consolidate my reflections into a Term-2 goal across the four strands.",
      "I can confirm my solution is responsible to use and honest about its limits."
    ],
    "originalSteps": [
      "Set up your station with the frozen solution, evidence and responsible-use message.",
      "Present your solution in 60 seconds, naming two justified choices.",
      "Rotate to at least two other stations and leave 'two stars and a wish' feedback tagged to a strand.",
      "Collect the feedback slips left at your own station.",
      "Gather your term notes and feedback onto the four-strand summary.",
      "Set one specific Term-2 goal aimed at Proficient.",
      "Confirm your responsible-use message is complete and honest."
    ],
    "short": "Carousel and next steps",
    "hook": "What makes feedback useful enough to act on?",
    "teach": "Visit at least two stations, give two stars and a wish tagged to strands, then consolidate your four-strand summary, responsible-use message and next-stage goal.",
    "guided": [
      "Set out your final prompt, checked output, tests and responsible-use message.",
      "Visit at least two other stations; use strand labels on specific feedback.",
      "Summarise all four strands and choose one next-stage goal."
    ],
    "stretch": "Synthesise feedback from different peers into a prioritised next iteration. Explain which suggestion you would not follow and why.",
    "fields": [
      {
        "id": "q1",
        "label": "Two station visits",
        "frame": "Station A: strand-tagged stars/wish ___. Station B: strand-tagged stars/wish ___."
      },
      {
        "id": "q2",
        "label": "My four-strand summary",
        "frame": "I can explain systems ___. Build prompts ___. Evaluate outputs ___. Reduce risks ___."
      },
      {
        "id": "q3",
        "label": "Responsible use and goal",
        "frame": "My limits and checks are ___. My next-stage goal is ___."
      }
    ],
    "exit": "How did feedback change your next step?",
    "access": "Offer a quieter gallery route, picture strand labels, feedback stems and a scribe. Keep at least two visits and all four summary strands.",
    "strand": "Integration",
    "date": "15–19 March",
    "duration": "45 min ADEK core · school period 55 min",
    "kind": "adek",
    "example": {
      "title": "Specific feedback",
      "body": "Star tagged CE: “You checked all six outputs against stated criteria.” Wish tagged GE: “Explain who is affected by an invented connection and show the fallback.” A next goal could target independent verification rather than a bigger display."
    },
    "materials": [
      {
        "title": "Feedback slip",
        "body": "Station code [fictional]. Strand CU / SD / CE / GE. Star 1 with evidence ___. Star 2 with evidence ___. Wish with a practical next action ___. Visit at least two other stations."
      },
      {
        "title": "Four-strand summary",
        "body": "CU: explain rule-based versus learning. SD: build a structured prompt solution. CE: verify outputs and choose use/change/reject. GE: identify affected users, risks and mitigations. Add your own evidence reference and next-stage goal."
      }
    ]
  },
  {
    "id": 21,
    "week": 11,
    "type": "Practical",
    "title": "Build the working bridge",
    "short": "Make it work",
    "page": null,
    "strand": "MYP C",
    "date": "22–26 March",
    "kind": "myp",
    "hook": "Does every connection in your checked guide work with the real pieces?",
    "teach": "Assemble or finish the model using your approved sketch and checked guide. Record your own contribution, a practical skill and any design or plan change.",
    "guided": [
      "Lay out the counted pieces and approved drawing.",
      "Make one section at a time; ask a peer to check each connection.",
      "Record your own action, a change and the evidence reference."
    ],
    "originalSteps": [
      "Follow the checked plan and guide.",
      "Measure the gap and check the vehicle fits.",
      "Capture a student-specific skill observation or annotated photo reference.",
      "List changes to the design and plan."
    ],
    "success": [
      "I can follow my plan and assemble a working model.",
      "I can demonstrate a skill and record a change."
    ],
    "stretch": "Try a material-saving change without weakening the agreed function. Use evidence to justify keeping or rejecting it.",
    "access": "Offer a pre-sorted tray, larger pieces, adult help with joining and one-step picture cards; keep the learner’s choices and explanation.",
    "fields": [
      {
        "id": "q1",
        "label": "My own making action",
        "frame": "I measured/joined/checked ___."
      },
      {
        "id": "q2",
        "label": "Plan change and reason",
        "frame": "I changed ___ because ___."
      },
      {
        "id": "q3",
        "label": "Skill evidence reference",
        "frame": "My photo or teacher observation is stored at ___."
      }
    ],
    "exit": "Which part needs a physical check before the crossing trial?",
    "duration": "55 min practical"
  },
  {
    "id": 22,
    "week": 11,
    "type": "Practical",
    "title": "Test improve and evaluate the bridge",
    "short": "Cross the gap",
    "page": null,
    "strand": "MYP D",
    "date": "22–26 March",
    "kind": "myp",
    "hook": "Can your bridge pass the same crossing test three times?",
    "teach": "Use the agreed gap and the same class vehicle under the same conditions. Record three actual trials, change one feature and compare the retest. Explain the impact on the builder or user.",
    "guided": [
      "Check the agreed gap and vehicle with your teacher.",
      "Record all three crossings, including failures.",
      "Change one feature and explain the before-and-after result."
    ],
    "originalSteps": [
      "Outline the common test and pass conditions.",
      "Run and record three actual crossings.",
      "Compare actual results with success criteria.",
      "Try a manageable improvement and explain user impact."
    ],
    "success": [
      "I can test fairly and record real results.",
      "I can compare with criteria and explain an improvement and impact."
    ],
    "stretch": "Identify a variable your test did not control. Design a fair follow-up without making unsupported claims about real-world safety.",
    "access": "Provide a three-trial picture log, count counters, a measured setup and a recorded oral evaluation. Keep actual results and the comparison.",
    "fields": [
      {
        "id": "q1",
        "label": "Test and pass conditions",
        "frame": "Gap ___ cm; vehicle ___; same conditions ___."
      },
      {
        "id": "q2",
        "label": "Three actual trial results",
        "frame": "Trial 1 ___. Trial 2 ___. Trial 3 ___. Successful crossings ___/3."
      },
      {
        "id": "q3",
        "label": "Change retest and user impact",
        "frame": "Before ___. I changed ___. After ___. This helped the user by ___."
      }
    ],
    "exit": "What does your test show, and what does it not show?",
    "duration": "55 min practical"
  },
  {
    "id": 23,
    "week": 12,
    "type": "Reserve",
    "title": "Reserve and evidence clinic 1",
    "short": "Finish essential evidence",
    "page": null,
    "strand": "Review",
    "date": "29 March–2 April",
    "kind": "reserve",
    "duration": "Use as needed",
    "hook": "Which required evidence is still missing?",
    "teach": "Complete required ADEK tasks and individual assessment evidence first. Use remaining time for accessible make-up, moderation or transfer.",
    "guided": [
      "Check your evidence list with the teacher.",
      "Complete one missing essential task.",
      "Show the evidence and name your next step."
    ],
    "originalSteps": [
      "Identify incomplete required work.",
      "Agree a priority with the teacher.",
      "Finish and review individual evidence."
    ],
    "success": [
      "I can complete a missing essential task and explain it."
    ],
    "stretch": "Transfer your prompt-and-check process to a different inventory or an unfamiliar instruction task.",
    "access": "Agree one achievable next action and the appropriate access support.",
    "fields": [
      {
        "id": "q1",
        "label": "Priority agreed with teacher",
        "frame": "I need to finish ___."
      },
      {
        "id": "q2",
        "label": "Evidence completed",
        "frame": "I completed ___ and can explain ___."
      }
    ],
    "exit": "What is now complete, and what still needs teacher review?"
  },
  {
    "id": 24,
    "week": 12,
    "type": "Reserve",
    "title": "Reserve and evidence clinic 2",
    "short": "Finish essential evidence",
    "page": null,
    "strand": "Review",
    "date": "29 March–2 April",
    "kind": "reserve",
    "duration": "Use as needed",
    "hook": "Which required evidence is still missing?",
    "teach": "Complete required ADEK tasks and individual assessment evidence first. Use remaining time for accessible make-up, moderation or transfer.",
    "guided": [
      "Check your evidence list with the teacher.",
      "Complete one missing essential task.",
      "Show the evidence and name your next step."
    ],
    "originalSteps": [
      "Identify incomplete required work.",
      "Agree a priority with the teacher.",
      "Finish and review individual evidence."
    ],
    "success": [
      "I can complete a missing essential task and explain it."
    ],
    "stretch": "Transfer your prompt-and-check process to a different inventory or an unfamiliar instruction task.",
    "access": "Agree one achievable next action and the appropriate access support.",
    "fields": [
      {
        "id": "q1",
        "label": "Priority agreed with teacher",
        "frame": "I need to finish ___."
      },
      {
        "id": "q2",
        "label": "Evidence completed",
        "frame": "I completed ___ and can explain ___."
      }
    ],
    "exit": "What is now complete, and what still needs teacher review?"
  }
];
