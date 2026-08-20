/**
 * Vocabrush - Complete CAT VARC Master Dataset
 * Root Engine (36 Lessons) + Tone Taxonomy + Latin Signposts + Secondary Meanings
 */

const CAT_CURRICULUM_DATA = {
  "overview": {
    "title": "Vocabrush Master CAT Curriculum",
    "subtitle": "Complete 36-Lesson Root Engine + CAT Tone Taxonomy + Latin Signposts + Secondary Meaning Traps",
    "totalCategories": 6,
    "totalLessons": 36,
    "totalSupplementaryModules": 3,
    "totalVocabularyWords": 350,
    "totalMicroQuizzes": 150,
    "totalMasteryQuestions": 36
  },
  "categories": [
    {
      "id": "cat-1",
      "number": 1,
      "title": "Tone, Sentiment & Author Attitude",
      "tagline": "Unlocks author stance, mood, and critical valence in CAT Reading Comprehension.",
      "icon": "message-square-heart",
      "color": "from-rose-500/20 to-pink-500/20 border-rose-500/30",
      "accent": "text-rose-400",
      "lessons": [
        {
          "id": "les-1-1",
          "lessonNumber": 1,
          "title": "The Valence Spectrum: BENE/BON vs MAL/MALE",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: The Valence Spectrum: BENE/BON vs MAL/MALE",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between BENE / BON and MAL / MALE provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "BENE / BON represents foundational root concepts, while MAL / MALE establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: BENE / BON",
              "origin": "High-Yield Greek/Latin Root Family (BENE / BON)",
              "coreMeaning": "Well-meaning, kindly",
              "derivatives": [
                {
                  "word": "Benevolent",
                  "breakdown": "BENE+VOL+ENT",
                  "def": "Well-meaning, kindly",
                  "catContext": "The author evaluates the historical implications of benevolent in institutional policymaking."
                },
                {
                  "word": "Beneficent",
                  "breakdown": "BENE+FIC+ENT",
                  "def": "Doing good, actively producing benefit",
                  "catContext": "The author evaluates the historical implications of beneficent in institutional policymaking."
                },
                {
                  "word": "Benign",
                  "breakdown": "BENE+GEN",
                  "def": "Gentle, harmless, non-threatening",
                  "catContext": "The author evaluates the historical implications of benign in institutional policymaking."
                },
                {
                  "word": "Benediction",
                  "breakdown": "BENE+DICT+ION",
                  "def": "Blessing, expression of good wishes",
                  "catContext": "The author evaluates the historical implications of benediction in institutional policymaking."
                },
                {
                  "word": "Benefactor",
                  "breakdown": "BENE+FACT+OR",
                  "def": "Person who gives aid/financial help",
                  "catContext": "The author evaluates the historical implications of benefactor in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: MAL / MALE",
              "origin": "High-Yield Greek/Latin Root Family (MAL / MALE)",
              "coreMeaning": "Wishing evil or harm",
              "derivatives": [
                {
                  "word": "Malevolent",
                  "breakdown": "MALE+VOL+ENT",
                  "def": "Wishing evil or harm",
                  "catContext": "Critics questioned whether the initiative was merely malevolent rather than a sustainable structural reform."
                },
                {
                  "word": "Maladroit",
                  "breakdown": "MAL+ADROIT",
                  "def": "Clumsy, inept, bungling",
                  "catContext": "Critics questioned whether the initiative was merely maladroit rather than a sustainable structural reform."
                },
                {
                  "word": "Malignant",
                  "breakdown": "MAL+GEN+ANT",
                  "def": "Harmful, virulent, destructive",
                  "catContext": "Critics questioned whether the initiative was merely malignant rather than a sustainable structural reform."
                },
                {
                  "word": "Malediction",
                  "breakdown": "MALE+DICT+ION",
                  "def": "A curse, formal condemnation",
                  "catContext": "Critics questioned whether the initiative was merely malediction rather than a sustainable structural reform."
                },
                {
                  "word": "Malfeasance",
                  "breakdown": "MAL+FEAS+ANCE",
                  "def": "Wrongdoing by public officials",
                  "catContext": "Critics questioned whether the initiative was merely malfeasance rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Benevolent (Well-meaning, kindly)",
                  "negative": "Malevolent (Wishing evil or harm)",
                  "rootKey": "BENE+VOL+ENT vs MALE+VOL+ENT"
                },
                {
                  "positive": "Beneficent (Doing good, actively producing benefit)",
                  "negative": "Maladroit (Clumsy, inept, bungling)",
                  "rootKey": "BENE+FIC+ENT vs MAL+ADROIT"
                },
                {
                  "positive": "Benign (Gentle, harmless, non-threatening)",
                  "negative": "Malignant (Harmful, virulent, destructive)",
                  "rootKey": "BENE+GEN vs MAL+GEN+ANT"
                },
                {
                  "positive": "Benediction (Blessing, expression of good wishes)",
                  "negative": "Malediction (A curse, formal condemnation)",
                  "rootKey": "BENE+DICT+ION vs MALE+DICT+ION"
                },
                {
                  "positive": "Benefactor (Person who gives aid/financial help)",
                  "negative": "Malfeasance (Wrongdoing by public officials)",
                  "rootKey": "BENE+FACT+OR vs MAL+FEAS+ANCE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **benevolent** nature of theoretical models with the **malevolent** reality of human behavior. While proponents emphasize the **beneficent** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **maladroit** consequences.",
              "highlights": [
                {
                  "word": "benevolent",
                  "root": "BENE+VOL+ENT",
                  "note": "Key concept: Well-meaning, kindly"
                },
                {
                  "word": "malevolent",
                  "root": "MALE+VOL+ENT",
                  "note": "Critical contrast: Wishing evil or harm"
                },
                {
                  "word": "beneficent",
                  "root": "BENE+FIC+ENT",
                  "note": "Strategic ideal: Doing good, actively producing benefit"
                },
                {
                  "word": "maladroit",
                  "root": "MAL+ADROIT",
                  "note": "Pitfall/Critique: Clumsy, inept, bungling"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-1-1-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **benevolent** in intent but **maladroit** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (well-meaning, kindly), but bungled the execution in a flawed manner (clumsy, inept, bungling).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Benevolent = Well-meaning, kindly.",
                "Break down: Maladroit = Clumsy, inept, bungling.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "BENEVOLENT (Well-meaning, kindly) denotes good intent, while MALADROIT (Clumsy, inept, bungling) critiques flawed execution."
            },
            {
              "id": "q-1-1-2",
              "prompt": "Which word from this lesson signifies 'Gentle, harmless, non-threatening'?",
              "options": [
                "Malevolent",
                "Benign",
                "Malignant",
                "Beneficent"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root BENE / BON.",
                "Breakdown: BENE+GEN."
              ],
              "explanation": "BENIGN (BENE+GEN) means Gentle, harmless, non-threatening."
            },
            {
              "id": "q-1-1-3",
              "prompt": "If an essay claims that an opponent's defense is '**malevolent**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being wishing evil or harm.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Malevolent.",
                "Meaning: Wishing evil or harm."
              ],
              "explanation": "MALEVOLENT (MALE+VOL+ENT) means Wishing evil or harm."
            },
            {
              "id": "q-1-1-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Benevolent vs Malevolent",
                "Benevolent vs Beneficent",
                "Malevolent vs Maladroit",
                "Benign vs Benediction"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast BENE / BON with MAL / MALE.",
                "Benevolent vs Malevolent."
              ],
              "explanation": "Benevolent (BENE / BON) directly contrasts with Malevolent (MAL / MALE)."
            }
          ]
        },
        {
          "id": "les-1-2",
          "lessonNumber": 2,
          "title": "War & Peace in Tone: PLAC/PAC vs PUGN/BELLI",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: War & Peace in Tone: PLAC/PAC vs PUGN/BELLI",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between PLAC / PAC and PUGN / BELLI provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "PLAC / PAC represents foundational root concepts, while PUGN / BELLI establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: PLAC / PAC",
              "origin": "High-Yield Greek/Latin Root Family (PLAC / PAC)",
              "coreMeaning": "To soothe or appease with concessions",
              "derivatives": [
                {
                  "word": "Placate",
                  "breakdown": "PLAC+ATE",
                  "def": "To soothe or appease with concessions",
                  "catContext": "The author evaluates the historical implications of placate in institutional policymaking."
                },
                {
                  "word": "Implacable",
                  "breakdown": "IM+PLAC+ABLE",
                  "def": "Relentless, unstoppable, unable to be appeased",
                  "catContext": "The author evaluates the historical implications of implacable in institutional policymaking."
                },
                {
                  "word": "Complacent",
                  "breakdown": "COM+PLAC+ENT",
                  "def": "Smug, uncritical, self-satisfied",
                  "catContext": "The author evaluates the historical implications of complacent in institutional policymaking."
                },
                {
                  "word": "Pacify",
                  "breakdown": "PAC+FY",
                  "def": "Bring peace, quell agitation",
                  "catContext": "The author evaluates the historical implications of pacify in institutional policymaking."
                },
                {
                  "word": "Pacific",
                  "breakdown": "PAC+IFIC",
                  "def": "Peaceful in character or intent",
                  "catContext": "The author evaluates the historical implications of pacific in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: PUGN / BELLI",
              "origin": "High-Yield Greek/Latin Root Family (PUGN / BELLI)",
              "coreMeaning": "Eager or quick to argue/fight",
              "derivatives": [
                {
                  "word": "Pugnacious",
                  "breakdown": "PUGN+ACIOUS",
                  "def": "Eager or quick to argue/fight",
                  "catContext": "Critics questioned whether the initiative was merely pugnacious rather than a sustainable structural reform."
                },
                {
                  "word": "Belligerent",
                  "breakdown": "BELLI+GER+ENT",
                  "def": "Hostile, aggressive, warlike",
                  "catContext": "Critics questioned whether the initiative was merely belligerent rather than a sustainable structural reform."
                },
                {
                  "word": "Impugn",
                  "breakdown": "IM+PUGN",
                  "def": "Challenge or call into question the truth/integrity",
                  "catContext": "Critics questioned whether the initiative was merely impugn rather than a sustainable structural reform."
                },
                {
                  "word": "Bellicose",
                  "breakdown": "BELLI+COSE",
                  "def": "Demonstrating aggression and willingness to fight",
                  "catContext": "Critics questioned whether the initiative was merely bellicose rather than a sustainable structural reform."
                },
                {
                  "word": "Repugnant",
                  "breakdown": "RE+PUGN+ANT",
                  "def": "Extremely distasteful, unacceptable",
                  "catContext": "Critics questioned whether the initiative was merely repugnant rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Placate (To soothe or appease with concessions)",
                  "negative": "Pugnacious (Eager or quick to argue/fight)",
                  "rootKey": "PLAC+ATE vs PUGN+ACIOUS"
                },
                {
                  "positive": "Implacable (Relentless, unstoppable, unable to be appeased)",
                  "negative": "Belligerent (Hostile, aggressive, warlike)",
                  "rootKey": "IM+PLAC+ABLE vs BELLI+GER+ENT"
                },
                {
                  "positive": "Complacent (Smug, uncritical, self-satisfied)",
                  "negative": "Impugn (Challenge or call into question the truth/integrity)",
                  "rootKey": "COM+PLAC+ENT vs IM+PUGN"
                },
                {
                  "positive": "Pacify (Bring peace, quell agitation)",
                  "negative": "Bellicose (Demonstrating aggression and willingness to fight)",
                  "rootKey": "PAC+FY vs BELLI+COSE"
                },
                {
                  "positive": "Pacific (Peaceful in character or intent)",
                  "negative": "Repugnant (Extremely distasteful, unacceptable)",
                  "rootKey": "PAC+IFIC vs RE+PUGN+ANT"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **placate** nature of theoretical models with the **pugnacious** reality of human behavior. While proponents emphasize the **implacable** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **belligerent** consequences.",
              "highlights": [
                {
                  "word": "placate",
                  "root": "PLAC+ATE",
                  "note": "Key concept: To soothe or appease with concessions"
                },
                {
                  "word": "pugnacious",
                  "root": "PUGN+ACIOUS",
                  "note": "Critical contrast: Eager or quick to argue/fight"
                },
                {
                  "word": "implacable",
                  "root": "IM+PLAC+ABLE",
                  "note": "Strategic ideal: Relentless, unstoppable, unable to be appeased"
                },
                {
                  "word": "belligerent",
                  "root": "BELLI+GER+ENT",
                  "note": "Pitfall/Critique: Hostile, aggressive, warlike"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-1-2-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **placate** in intent but **belligerent** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (to soothe or appease with concessions), but bungled the execution in a flawed manner (hostile, aggressive, warlike).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Placate = To soothe or appease with concessions.",
                "Break down: Belligerent = Hostile, aggressive, warlike.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "PLACATE (To soothe or appease with concessions) denotes good intent, while BELLIGERENT (Hostile, aggressive, warlike) critiques flawed execution."
            },
            {
              "id": "q-1-2-2",
              "prompt": "Which word from this lesson signifies 'Smug, uncritical, self-satisfied'?",
              "options": [
                "Pugnacious",
                "Complacent",
                "Impugn",
                "Implacable"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root PLAC / PAC.",
                "Breakdown: COM+PLAC+ENT."
              ],
              "explanation": "COMPLACENT (COM+PLAC+ENT) means Smug, uncritical, self-satisfied."
            },
            {
              "id": "q-1-2-3",
              "prompt": "If an essay claims that an opponent's defense is '**pugnacious**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being eager or quick to argue/fight.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Pugnacious.",
                "Meaning: Eager or quick to argue/fight."
              ],
              "explanation": "PUGNACIOUS (PUGN+ACIOUS) means Eager or quick to argue/fight."
            },
            {
              "id": "q-1-2-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Placate vs Pugnacious",
                "Placate vs Implacable",
                "Pugnacious vs Belligerent",
                "Complacent vs Pacify"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast PLAC / PAC with PUGN / BELLI.",
                "Placate vs Pugnacious."
              ],
              "explanation": "Placate (PLAC / PAC) directly contrasts with Pugnacious (PUGN / BELLI)."
            }
          ]
        },
        {
          "id": "les-1-3",
          "lessonNumber": 3,
          "title": "Transparency vs Concealment: LUC/LUM vs OB/TENEB",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Transparency vs Concealment: LUC/LUM vs OB/TENEB",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between LUC / LUM / CLAR and OB / TENEB / FUSC provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "LUC / LUM / CLAR represents foundational root concepts, while OB / TENEB / FUSC establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: LUC / LUM / CLAR",
              "origin": "High-Yield Greek/Latin Root Family (LUC / LUM / CLAR)",
              "coreMeaning": "Expressed clearly, easy to understand",
              "derivatives": [
                {
                  "word": "Lucid",
                  "breakdown": "LUC+ID",
                  "def": "Expressed clearly, easy to understand",
                  "catContext": "The author evaluates the historical implications of lucid in institutional policymaking."
                },
                {
                  "word": "Pellucid",
                  "breakdown": "PEL+LUC+ID",
                  "def": "Translucently clear, effortlessly understandable",
                  "catContext": "The author evaluates the historical implications of pellucid in institutional policymaking."
                },
                {
                  "word": "Elucidate",
                  "breakdown": "E+LUC+ID+ATE",
                  "def": "Make clear, shed light upon",
                  "catContext": "The author evaluates the historical implications of elucidate in institutional policymaking."
                },
                {
                  "word": "Luminous",
                  "breakdown": "LUM+IN+OUS",
                  "def": "Giving off light, intellectually brilliant",
                  "catContext": "The author evaluates the historical implications of luminous in institutional policymaking."
                },
                {
                  "word": "Clarify",
                  "breakdown": "CLAR+FY",
                  "def": "Make a statement less confusing",
                  "catContext": "The author evaluates the historical implications of clarify in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: OB / TENEB / FUSC",
              "origin": "High-Yield Greek/Latin Root Family (OB / TENEB / FUSC)",
              "coreMeaning": "Deliberately make obscure or unclear",
              "derivatives": [
                {
                  "word": "Obfuscate",
                  "breakdown": "OB+FUSC+ATE",
                  "def": "Deliberately make obscure or unclear",
                  "catContext": "Critics questioned whether the initiative was merely obfuscate rather than a sustainable structural reform."
                },
                {
                  "word": "Tenebrous",
                  "breakdown": "TENEB+OUS",
                  "def": "Dark, shadowy, obscure",
                  "catContext": "Critics questioned whether the initiative was merely tenebrous rather than a sustainable structural reform."
                },
                {
                  "word": "Obscure",
                  "breakdown": "OB+SCURE",
                  "def": "Not discovered or known about, unclear",
                  "catContext": "Critics questioned whether the initiative was merely obscure rather than a sustainable structural reform."
                },
                {
                  "word": "Nebulous",
                  "breakdown": "NEBUL+OUS",
                  "def": "Vague, ill-defined, cloud-like",
                  "catContext": "Critics questioned whether the initiative was merely nebulous rather than a sustainable structural reform."
                },
                {
                  "word": "Opaque",
                  "breakdown": "OPACUS",
                  "def": "Not transparent, impenetrable to understand",
                  "catContext": "Critics questioned whether the initiative was merely opaque rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Lucid (Expressed clearly, easy to understand)",
                  "negative": "Obfuscate (Deliberately make obscure or unclear)",
                  "rootKey": "LUC+ID vs OB+FUSC+ATE"
                },
                {
                  "positive": "Pellucid (Translucently clear, effortlessly understandable)",
                  "negative": "Tenebrous (Dark, shadowy, obscure)",
                  "rootKey": "PEL+LUC+ID vs TENEB+OUS"
                },
                {
                  "positive": "Elucidate (Make clear, shed light upon)",
                  "negative": "Obscure (Not discovered or known about, unclear)",
                  "rootKey": "E+LUC+ID+ATE vs OB+SCURE"
                },
                {
                  "positive": "Luminous (Giving off light, intellectually brilliant)",
                  "negative": "Nebulous (Vague, ill-defined, cloud-like)",
                  "rootKey": "LUM+IN+OUS vs NEBUL+OUS"
                },
                {
                  "positive": "Clarify (Make a statement less confusing)",
                  "negative": "Opaque (Not transparent, impenetrable to understand)",
                  "rootKey": "CLAR+FY vs OPACUS"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **lucid** nature of theoretical models with the **obfuscate** reality of human behavior. While proponents emphasize the **pellucid** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **tenebrous** consequences.",
              "highlights": [
                {
                  "word": "lucid",
                  "root": "LUC+ID",
                  "note": "Key concept: Expressed clearly, easy to understand"
                },
                {
                  "word": "obfuscate",
                  "root": "OB+FUSC+ATE",
                  "note": "Critical contrast: Deliberately make obscure or unclear"
                },
                {
                  "word": "pellucid",
                  "root": "PEL+LUC+ID",
                  "note": "Strategic ideal: Translucently clear, effortlessly understandable"
                },
                {
                  "word": "tenebrous",
                  "root": "TENEB+OUS",
                  "note": "Pitfall/Critique: Dark, shadowy, obscure"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-1-3-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **lucid** in intent but **tenebrous** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (expressed clearly, easy to understand), but bungled the execution in a flawed manner (dark, shadowy, obscure).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Lucid = Expressed clearly, easy to understand.",
                "Break down: Tenebrous = Dark, shadowy, obscure.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "LUCID (Expressed clearly, easy to understand) denotes good intent, while TENEBROUS (Dark, shadowy, obscure) critiques flawed execution."
            },
            {
              "id": "q-1-3-2",
              "prompt": "Which word from this lesson signifies 'Make clear, shed light upon'?",
              "options": [
                "Obfuscate",
                "Elucidate",
                "Obscure",
                "Pellucid"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root LUC / LUM / CLAR.",
                "Breakdown: E+LUC+ID+ATE."
              ],
              "explanation": "ELUCIDATE (E+LUC+ID+ATE) means Make clear, shed light upon."
            },
            {
              "id": "q-1-3-3",
              "prompt": "If an essay claims that an opponent's defense is '**obfuscate**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being deliberately make obscure or unclear.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Obfuscate.",
                "Meaning: Deliberately make obscure or unclear."
              ],
              "explanation": "OBFUSCATE (OB+FUSC+ATE) means Deliberately make obscure or unclear."
            },
            {
              "id": "q-1-3-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Lucid vs Obfuscate",
                "Lucid vs Pellucid",
                "Obfuscate vs Tenebrous",
                "Elucidate vs Luminous"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast LUC / LUM / CLAR with OB / TENEB / FUSC.",
                "Lucid vs Obfuscate."
              ],
              "explanation": "Lucid (LUC / LUM / CLAR) directly contrasts with Obfuscate (OB / TENEB / FUSC)."
            }
          ]
        },
        {
          "id": "les-1-4",
          "lessonNumber": 4,
          "title": "Praise vs Condemnation: LAUD/PLAUD vs CULP/CRIM",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Praise vs Condemnation: LAUD/PLAUD vs CULP/CRIM",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between LAUD / PLAUD and CULP / CRIM provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "LAUD / PLAUD represents foundational root concepts, while CULP / CRIM establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: LAUD / PLAUD",
              "origin": "High-Yield Greek/Latin Root Family (LAUD / PLAUD)",
              "coreMeaning": "Deserving praise and commendation",
              "derivatives": [
                {
                  "word": "Laudable",
                  "breakdown": "LAUD+ABLE",
                  "def": "Deserving praise and commendation",
                  "catContext": "The author evaluates the historical implications of laudable in institutional policymaking."
                },
                {
                  "word": "Laudatory",
                  "breakdown": "LAUD+ATORY",
                  "def": "Expressing intense praise or approval",
                  "catContext": "The author evaluates the historical implications of laudatory in institutional policymaking."
                },
                {
                  "word": "Plaudits",
                  "breakdown": "PLAUD+ITS",
                  "def": "Enthusiastic expressions of approval",
                  "catContext": "The author evaluates the historical implications of plaudits in institutional policymaking."
                },
                {
                  "word": "Applaud",
                  "breakdown": "AD+PLAUD",
                  "def": "Show approval or praise",
                  "catContext": "The author evaluates the historical implications of applaud in institutional policymaking."
                },
                {
                  "word": "Plausible",
                  "breakdown": "PLAUD+IBLE",
                  "def": "Seeming reasonable or probable",
                  "catContext": "The author evaluates the historical implications of plausible in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: CULP / CRIM",
              "origin": "High-Yield Greek/Latin Root Family (CULP / CRIM)",
              "coreMeaning": "Deserving blame, guilty of wrong",
              "derivatives": [
                {
                  "word": "Culpable",
                  "breakdown": "CULP+ABLE",
                  "def": "Deserving blame, guilty of wrong",
                  "catContext": "Critics questioned whether the initiative was merely culpable rather than a sustainable structural reform."
                },
                {
                  "word": "Exculpate",
                  "breakdown": "EX+CULP+ATE",
                  "def": "Clear of blame or guilt",
                  "catContext": "Critics questioned whether the initiative was merely exculpate rather than a sustainable structural reform."
                },
                {
                  "word": "Inculpate",
                  "breakdown": "IN+CULP+ATE",
                  "def": "Accuse, incriminate",
                  "catContext": "Critics questioned whether the initiative was merely inculpate rather than a sustainable structural reform."
                },
                {
                  "word": "Recriminate",
                  "breakdown": "RE+CRIM+ATE",
                  "def": "Make mutual counter-accusations",
                  "catContext": "Critics questioned whether the initiative was merely recriminate rather than a sustainable structural reform."
                },
                {
                  "word": "Criminology",
                  "breakdown": "CRIM+IN+OLOGY",
                  "def": "Study of crime and deviations",
                  "catContext": "Critics questioned whether the initiative was merely criminology rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Laudable (Deserving praise and commendation)",
                  "negative": "Culpable (Deserving blame, guilty of wrong)",
                  "rootKey": "LAUD+ABLE vs CULP+ABLE"
                },
                {
                  "positive": "Laudatory (Expressing intense praise or approval)",
                  "negative": "Exculpate (Clear of blame or guilt)",
                  "rootKey": "LAUD+ATORY vs EX+CULP+ATE"
                },
                {
                  "positive": "Plaudits (Enthusiastic expressions of approval)",
                  "negative": "Inculpate (Accuse, incriminate)",
                  "rootKey": "PLAUD+ITS vs IN+CULP+ATE"
                },
                {
                  "positive": "Applaud (Show approval or praise)",
                  "negative": "Recriminate (Make mutual counter-accusations)",
                  "rootKey": "AD+PLAUD vs RE+CRIM+ATE"
                },
                {
                  "positive": "Plausible (Seeming reasonable or probable)",
                  "negative": "Criminology (Study of crime and deviations)",
                  "rootKey": "PLAUD+IBLE vs CRIM+IN+OLOGY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **laudable** nature of theoretical models with the **culpable** reality of human behavior. While proponents emphasize the **laudatory** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **exculpate** consequences.",
              "highlights": [
                {
                  "word": "laudable",
                  "root": "LAUD+ABLE",
                  "note": "Key concept: Deserving praise and commendation"
                },
                {
                  "word": "culpable",
                  "root": "CULP+ABLE",
                  "note": "Critical contrast: Deserving blame, guilty of wrong"
                },
                {
                  "word": "laudatory",
                  "root": "LAUD+ATORY",
                  "note": "Strategic ideal: Expressing intense praise or approval"
                },
                {
                  "word": "exculpate",
                  "root": "EX+CULP+ATE",
                  "note": "Pitfall/Critique: Clear of blame or guilt"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-1-4-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **laudable** in intent but **exculpate** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (deserving praise and commendation), but bungled the execution in a flawed manner (clear of blame or guilt).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Laudable = Deserving praise and commendation.",
                "Break down: Exculpate = Clear of blame or guilt.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "LAUDABLE (Deserving praise and commendation) denotes good intent, while EXCULPATE (Clear of blame or guilt) critiques flawed execution."
            },
            {
              "id": "q-1-4-2",
              "prompt": "Which word from this lesson signifies 'Enthusiastic expressions of approval'?",
              "options": [
                "Culpable",
                "Plaudits",
                "Inculpate",
                "Laudatory"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root LAUD / PLAUD.",
                "Breakdown: PLAUD+ITS."
              ],
              "explanation": "PLAUDITS (PLAUD+ITS) means Enthusiastic expressions of approval."
            },
            {
              "id": "q-1-4-3",
              "prompt": "If an essay claims that an opponent's defense is '**culpable**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being deserving blame, guilty of wrong.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Culpable.",
                "Meaning: Deserving blame, guilty of wrong."
              ],
              "explanation": "CULPABLE (CULP+ABLE) means Deserving blame, guilty of wrong."
            },
            {
              "id": "q-1-4-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Laudable vs Culpable",
                "Laudable vs Laudatory",
                "Culpable vs Exculpate",
                "Plaudits vs Applaud"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast LAUD / PLAUD with CULP / CRIM.",
                "Laudable vs Culpable."
              ],
              "explanation": "Laudable (LAUD / PLAUD) directly contrasts with Culpable (CULP / CRIM)."
            }
          ]
        },
        {
          "id": "les-1-5",
          "lessonNumber": 5,
          "title": "Severity vs Gentleness: GRAV/GRIEV vs LEV/MIT",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Severity vs Gentleness: GRAV/GRIEV vs LEV/MIT",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between GRAV / GRIEV and LEV / MIT / MOLL provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "GRAV / GRIEV represents foundational root concepts, while LEV / MIT / MOLL establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: GRAV / GRIEV",
              "origin": "High-Yield Greek/Latin Root Family (GRAV / GRIEV)",
              "coreMeaning": "Dignity, seriousness, solemnity",
              "derivatives": [
                {
                  "word": "Gravitas",
                  "breakdown": "GRAV+ITAS",
                  "def": "Dignity, seriousness, solemnity",
                  "catContext": "The author evaluates the historical implications of gravitas in institutional policymaking."
                },
                {
                  "word": "Aggravate",
                  "breakdown": "AD+GRAV+ATE",
                  "def": "Make a problem or injury worse",
                  "catContext": "The author evaluates the historical implications of aggravate in institutional policymaking."
                },
                {
                  "word": "Grievous",
                  "breakdown": "GRIEV+OUS",
                  "def": "Very severe, serious, painful",
                  "catContext": "The author evaluates the historical implications of grievous in institutional policymaking."
                },
                {
                  "word": "Gravity",
                  "breakdown": "GRAV+ITY",
                  "def": "Extreme importance or seriousness",
                  "catContext": "The author evaluates the historical implications of gravity in institutional policymaking."
                },
                {
                  "word": "Grievance",
                  "breakdown": "GRIEV+ANCE",
                  "def": "A real or imagined cause for complaint",
                  "catContext": "The author evaluates the historical implications of grievance in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: LEV / MIT / MOLL",
              "origin": "High-Yield Greek/Latin Root Family (LEV / MIT / MOLL)",
              "coreMeaning": "Frivolity, humor in serious matters",
              "derivatives": [
                {
                  "word": "Levity",
                  "breakdown": "LEV+ITY",
                  "def": "Frivolity, humor in serious matters",
                  "catContext": "Critics questioned whether the initiative was merely levity rather than a sustainable structural reform."
                },
                {
                  "word": "Mitigate",
                  "breakdown": "MIT+AGERE",
                  "def": "Make less severe, serious, or painful",
                  "catContext": "Critics questioned whether the initiative was merely mitigate rather than a sustainable structural reform."
                },
                {
                  "word": "Mollify",
                  "breakdown": "MOLL+FY",
                  "def": "Appease the anger or anxiety of someone",
                  "catContext": "Critics questioned whether the initiative was merely mollify rather than a sustainable structural reform."
                },
                {
                  "word": "Alleviate",
                  "breakdown": "AD+LEV+ATE",
                  "def": "Make suffering or deficiency less severe",
                  "catContext": "Critics questioned whether the initiative was merely alleviate rather than a sustainable structural reform."
                },
                {
                  "word": "Leniency",
                  "breakdown": "LENI+ENCY",
                  "def": "Fact or quality of being more merciful",
                  "catContext": "Critics questioned whether the initiative was merely leniency rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Gravitas (Dignity, seriousness, solemnity)",
                  "negative": "Levity (Frivolity, humor in serious matters)",
                  "rootKey": "GRAV+ITAS vs LEV+ITY"
                },
                {
                  "positive": "Aggravate (Make a problem or injury worse)",
                  "negative": "Mitigate (Make less severe, serious, or painful)",
                  "rootKey": "AD+GRAV+ATE vs MIT+AGERE"
                },
                {
                  "positive": "Grievous (Very severe, serious, painful)",
                  "negative": "Mollify (Appease the anger or anxiety of someone)",
                  "rootKey": "GRIEV+OUS vs MOLL+FY"
                },
                {
                  "positive": "Gravity (Extreme importance or seriousness)",
                  "negative": "Alleviate (Make suffering or deficiency less severe)",
                  "rootKey": "GRAV+ITY vs AD+LEV+ATE"
                },
                {
                  "positive": "Grievance (A real or imagined cause for complaint)",
                  "negative": "Leniency (Fact or quality of being more merciful)",
                  "rootKey": "GRIEV+ANCE vs LENI+ENCY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **gravitas** nature of theoretical models with the **levity** reality of human behavior. While proponents emphasize the **aggravate** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **mitigate** consequences.",
              "highlights": [
                {
                  "word": "gravitas",
                  "root": "GRAV+ITAS",
                  "note": "Key concept: Dignity, seriousness, solemnity"
                },
                {
                  "word": "levity",
                  "root": "LEV+ITY",
                  "note": "Critical contrast: Frivolity, humor in serious matters"
                },
                {
                  "word": "aggravate",
                  "root": "AD+GRAV+ATE",
                  "note": "Strategic ideal: Make a problem or injury worse"
                },
                {
                  "word": "mitigate",
                  "root": "MIT+AGERE",
                  "note": "Pitfall/Critique: Make less severe, serious, or painful"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-1-5-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **gravitas** in intent but **mitigate** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (dignity, seriousness, solemnity), but bungled the execution in a flawed manner (make less severe, serious, or painful).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Gravitas = Dignity, seriousness, solemnity.",
                "Break down: Mitigate = Make less severe, serious, or painful.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "GRAVITAS (Dignity, seriousness, solemnity) denotes good intent, while MITIGATE (Make less severe, serious, or painful) critiques flawed execution."
            },
            {
              "id": "q-1-5-2",
              "prompt": "Which word from this lesson signifies 'Very severe, serious, painful'?",
              "options": [
                "Levity",
                "Grievous",
                "Mollify",
                "Aggravate"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root GRAV / GRIEV.",
                "Breakdown: GRIEV+OUS."
              ],
              "explanation": "GRIEVOUS (GRIEV+OUS) means Very severe, serious, painful."
            },
            {
              "id": "q-1-5-3",
              "prompt": "If an essay claims that an opponent's defense is '**levity**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being frivolity, humor in serious matters.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Levity.",
                "Meaning: Frivolity, humor in serious matters."
              ],
              "explanation": "LEVITY (LEV+ITY) means Frivolity, humor in serious matters."
            },
            {
              "id": "q-1-5-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Gravitas vs Levity",
                "Gravitas vs Aggravate",
                "Levity vs Mitigate",
                "Grievous vs Gravity"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast GRAV / GRIEV with LEV / MIT / MOLL.",
                "Gravitas vs Levity."
              ],
              "explanation": "Gravitas (GRAV / GRIEV) directly contrasts with Levity (LEV / MIT / MOLL)."
            }
          ]
        },
        {
          "id": "les-1-6",
          "lessonNumber": 6,
          "title": "Certainty vs Doubt: FID/CONFID vs TREP/DUB",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Certainty vs Doubt: FID/CONFID vs TREP/DUB",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between FID / FED and TREP / DUB provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "FID / FED represents foundational root concepts, while TREP / DUB establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: FID / FED",
              "origin": "High-Yield Greek/Latin Root Family (FID / FED)",
              "coreMeaning": "Modest or shy due to lack of self-confidence",
              "derivatives": [
                {
                  "word": "Diffident",
                  "breakdown": "DIS+FID+ENT",
                  "def": "Modest or shy due to lack of self-confidence",
                  "catContext": "The author evaluates the historical implications of diffident in institutional policymaking."
                },
                {
                  "word": "Perfidious",
                  "breakdown": "PER+FID+IOUS",
                  "def": "Deceitful and untrustworthy, treacherous",
                  "catContext": "The author evaluates the historical implications of perfidious in institutional policymaking."
                },
                {
                  "word": "Fiduciary",
                  "breakdown": "FID+UCIARY",
                  "def": "Involving trust, financial stewardship",
                  "catContext": "The author evaluates the historical implications of fiduciary in institutional policymaking."
                },
                {
                  "word": "Confidant",
                  "breakdown": "CON+FID+ANT",
                  "def": "A person with whom one shares private matters",
                  "catContext": "The author evaluates the historical implications of confidant in institutional policymaking."
                },
                {
                  "word": "Fidelity",
                  "breakdown": "FID+ELITY",
                  "def": "Faithfulness, exactness in reproduction",
                  "catContext": "The author evaluates the historical implications of fidelity in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: TREP / DUB",
              "origin": "High-Yield Greek/Latin Root Family (TREP / DUB)",
              "coreMeaning": "Feeling of fear or agitation about the future",
              "derivatives": [
                {
                  "word": "Trepidation",
                  "breakdown": "TREP+ATION",
                  "def": "Feeling of fear or agitation about the future",
                  "catContext": "Critics questioned whether the initiative was merely trepidation rather than a sustainable structural reform."
                },
                {
                  "word": "Intrepid",
                  "breakdown": "IN+TREP+ID",
                  "def": "Fearless, adventurous, undaunted",
                  "catContext": "Critics questioned whether the initiative was merely intrepid rather than a sustainable structural reform."
                },
                {
                  "word": "Dubious",
                  "breakdown": "DUB+IOUS",
                  "def": "Hesitating or doubting, suspect in value",
                  "catContext": "Critics questioned whether the initiative was merely dubious rather than a sustainable structural reform."
                },
                {
                  "word": "Indubitable",
                  "breakdown": "IN+DUB+ABLE",
                  "def": "Impossible to doubt, unquestionable",
                  "catContext": "Critics questioned whether the initiative was merely indubitable rather than a sustainable structural reform."
                },
                {
                  "word": "Doubtful",
                  "breakdown": "DUB+FULL",
                  "def": "Feeling uncertain about something",
                  "catContext": "Critics questioned whether the initiative was merely doubtful rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Diffident (Modest or shy due to lack of self-confidence)",
                  "negative": "Trepidation (Feeling of fear or agitation about the future)",
                  "rootKey": "DIS+FID+ENT vs TREP+ATION"
                },
                {
                  "positive": "Perfidious (Deceitful and untrustworthy, treacherous)",
                  "negative": "Intrepid (Fearless, adventurous, undaunted)",
                  "rootKey": "PER+FID+IOUS vs IN+TREP+ID"
                },
                {
                  "positive": "Fiduciary (Involving trust, financial stewardship)",
                  "negative": "Dubious (Hesitating or doubting, suspect in value)",
                  "rootKey": "FID+UCIARY vs DUB+IOUS"
                },
                {
                  "positive": "Confidant (A person with whom one shares private matters)",
                  "negative": "Indubitable (Impossible to doubt, unquestionable)",
                  "rootKey": "CON+FID+ANT vs IN+DUB+ABLE"
                },
                {
                  "positive": "Fidelity (Faithfulness, exactness in reproduction)",
                  "negative": "Doubtful (Feeling uncertain about something)",
                  "rootKey": "FID+ELITY vs DUB+FULL"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **diffident** nature of theoretical models with the **trepidation** reality of human behavior. While proponents emphasize the **perfidious** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **intrepid** consequences.",
              "highlights": [
                {
                  "word": "diffident",
                  "root": "DIS+FID+ENT",
                  "note": "Key concept: Modest or shy due to lack of self-confidence"
                },
                {
                  "word": "trepidation",
                  "root": "TREP+ATION",
                  "note": "Critical contrast: Feeling of fear or agitation about the future"
                },
                {
                  "word": "perfidious",
                  "root": "PER+FID+IOUS",
                  "note": "Strategic ideal: Deceitful and untrustworthy, treacherous"
                },
                {
                  "word": "intrepid",
                  "root": "IN+TREP+ID",
                  "note": "Pitfall/Critique: Fearless, adventurous, undaunted"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-1-6-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **diffident** in intent but **intrepid** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (modest or shy due to lack of self-confidence), but bungled the execution in a flawed manner (fearless, adventurous, undaunted).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Diffident = Modest or shy due to lack of self-confidence.",
                "Break down: Intrepid = Fearless, adventurous, undaunted.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "DIFFIDENT (Modest or shy due to lack of self-confidence) denotes good intent, while INTREPID (Fearless, adventurous, undaunted) critiques flawed execution."
            },
            {
              "id": "q-1-6-2",
              "prompt": "Which word from this lesson signifies 'Involving trust, financial stewardship'?",
              "options": [
                "Trepidation",
                "Fiduciary",
                "Dubious",
                "Perfidious"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root FID / FED.",
                "Breakdown: FID+UCIARY."
              ],
              "explanation": "FIDUCIARY (FID+UCIARY) means Involving trust, financial stewardship."
            },
            {
              "id": "q-1-6-3",
              "prompt": "If an essay claims that an opponent's defense is '**trepidation**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being feeling of fear or agitation about the future.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Trepidation.",
                "Meaning: Feeling of fear or agitation about the future."
              ],
              "explanation": "TREPIDATION (TREP+ATION) means Feeling of fear or agitation about the future."
            },
            {
              "id": "q-1-6-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Diffident vs Trepidation",
                "Diffident vs Perfidious",
                "Trepidation vs Intrepid",
                "Fiduciary vs Confidant"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast FID / FED with TREP / DUB.",
                "Diffident vs Trepidation."
              ],
              "explanation": "Diffident (FID / FED) directly contrasts with Trepidation (TREP / DUB)."
            }
          ]
        }
      ],
      "masteryQuiz": [
        {
          "id": "mq-1-1",
          "prompt": "In a Category 1 Reading Comprehension passage, how does the author contrast theoretical assertions with empirical reality?",
          "options": [
            "By contrasting idealized conceptual frameworks with the complex reality of human institutions.",
            "By adopting an uncritical, complacent attitude towards government policy.",
            "By expressing total agnostic indifference.",
            "By relying exclusively on circular tautologies."
          ],
          "correctIndex": 0,
          "explanation": "CAT passages typically set up an analytical tension between idealized theories and empirical ground realities."
        },
        {
          "id": "mq-1-2",
          "prompt": "Which term from Category 1 carries an overwhelmingly **positive** valence when used by an author?",
          "options": [
            "Benevolent",
            "Malevolent",
            "Pugnacious",
            "Obfuscate"
          ],
          "correctIndex": 0,
          "explanation": "Benevolent carries a positive root connotation, whereas the other options are negative tone markers."
        },
        {
          "id": "mq-1-3",
          "prompt": "If an essay argues that an institution is guilty of '**culpable**', the author is:",
          "options": [
            "Praising the institution with enthusiastic plaudits.",
            "Criticizing the institution for deserving blame, guilty of wrong.",
            "Declaring the institution legally solvent and exculpated.",
            "Taking an egalitarian stance."
          ],
          "correctIndex": 1,
          "explanation": "Culpable means Deserving blame, guilty of wrong."
        },
        {
          "id": "mq-1-4",
          "prompt": "What is the underlying etymological root of **Lucid**?",
          "options": [
            "High-Yield Greek/Latin Root Family (LUC / LUM / CLAR)",
            "High-Yield Greek/Latin Root Family (OB / TENEB / FUSC)",
            "High-Yield Greek/Latin Root Family (LEV / MIT / MOLL)",
            "High-Yield Greek/Latin Root Family (TREP / DUB)"
          ],
          "correctIndex": 0,
          "explanation": "Lucid is derived from High-Yield Greek/Latin Root Family (LUC / LUM / CLAR)."
        },
        {
          "id": "mq-1-5",
          "prompt": "An author describes a policy as '**gravitas** while warning against **levity** consequences.' What is the author's tone?",
          "options": [
            "Judicious, balanced, and analytically rigorous in weighing benefits against pitfalls.",
            "Fiercely vitriolic and purely destructive.",
            "Apathetic, bored, and disengaged.",
            "Laudatory and uncritical."
          ],
          "correctIndex": 0,
          "explanation": "Balancing positive qualities with cautions against negative pitfalls indicates a judicious and analytically rigorous tone."
        },
        {
          "id": "mq-1-6",
          "prompt": "Which of the following distinguishes the core concept of Lesson 1.1 from Lesson 1.6 in this category?",
          "options": [
            "Lesson 1.1 focuses on foundational valences (The Valence Spectrum: BENE/BON vs MAL/MALE), while Lesson 1.6 develops specialized applications (Certainty vs Doubt: FID/CONFID vs TREP/DUB).",
            "They are identical lessons repeated twice.",
            "Lesson 6 is purely historical with zero relevance to modern CAT reading.",
            "Lesson 1 is only for grammar error identification."
          ],
          "correctIndex": 0,
          "explanation": "The curriculum progresses systematically from foundational concepts (The Valence Spectrum: BENE/BON vs MAL/MALE) to advanced critical frameworks (Certainty vs Doubt: FID/CONFID vs TREP/DUB)."
        }
      ]
    },
    {
      "id": "cat-2",
      "number": 2,
      "title": "Discourse, Rhetoric & Argumentation",
      "tagline": "Master author claims, refutations, logical pivots, and rhetorical styles.",
      "icon": "message-square",
      "color": "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      "accent": "text-blue-400",
      "lessons": [
        {
          "id": "les-2-1",
          "lessonNumber": 1,
          "title": "Pronouncements & Declarations: DICT/DIC vs VOC/VOK",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Pronouncements & Declarations: DICT/DIC vs VOC/VOK",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between DICT / DIC and VOC / VOK provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "DICT / DIC represents foundational root concepts, while VOC / VOK establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: DICT / DIC",
              "origin": "High-Yield Greek/Latin Root Family (DICT / DIC)",
              "coreMeaning": "Formal authoritative pronouncement",
              "derivatives": [
                {
                  "word": "Dictum",
                  "breakdown": "DICT+UM",
                  "def": "Formal authoritative pronouncement",
                  "catContext": "The author evaluates the historical implications of dictum in institutional policymaking."
                },
                {
                  "word": "Contradict",
                  "breakdown": "CONTRA+DICT",
                  "def": "Assert the opposite of a statement",
                  "catContext": "The author evaluates the historical implications of contradict in institutional policymaking."
                },
                {
                  "word": "Vindicate",
                  "breakdown": "VIN+DIC+ATE",
                  "def": "Clear of blame, prove justified",
                  "catContext": "The author evaluates the historical implications of vindicate in institutional policymaking."
                },
                {
                  "word": "Valediction",
                  "breakdown": "VALE+DICT+ION",
                  "def": "Farewell speech/statement",
                  "catContext": "The author evaluates the historical implications of valediction in institutional policymaking."
                },
                {
                  "word": "Dictate",
                  "breakdown": "DICT+ATE",
                  "def": "Lay down authoritatively",
                  "catContext": "The author evaluates the historical implications of dictate in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: VOC / VOK",
              "origin": "High-Yield Greek/Latin Root Family (VOC / VOK)",
              "coreMeaning": "Open to more than one meaning, ambiguous",
              "derivatives": [
                {
                  "word": "Equivocal",
                  "breakdown": "EQUI+VOC+AL",
                  "def": "Open to more than one meaning, ambiguous",
                  "catContext": "Critics questioned whether the initiative was merely equivocal rather than a sustainable structural reform."
                },
                {
                  "word": "Unequivocal",
                  "breakdown": "UN+EQUIVOCAL",
                  "def": "Leaving no doubt, unambiguous",
                  "catContext": "Critics questioned whether the initiative was merely unequivocal rather than a sustainable structural reform."
                },
                {
                  "word": "Vociferous",
                  "breakdown": "VOC+FER+OUS",
                  "def": "Loud, clamorous, vehement",
                  "catContext": "Critics questioned whether the initiative was merely vociferous rather than a sustainable structural reform."
                },
                {
                  "word": "Evoke",
                  "breakdown": "E+VOK+E",
                  "def": "Bring or recall to the conscious mind",
                  "catContext": "Critics questioned whether the initiative was merely evoke rather than a sustainable structural reform."
                },
                {
                  "word": "Provoke",
                  "breakdown": "PRO+VOK+E",
                  "def": "Stimulate or incite reaction",
                  "catContext": "Critics questioned whether the initiative was merely provoke rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Dictum (Formal authoritative pronouncement)",
                  "negative": "Equivocal (Open to more than one meaning, ambiguous)",
                  "rootKey": "DICT+UM vs EQUI+VOC+AL"
                },
                {
                  "positive": "Contradict (Assert the opposite of a statement)",
                  "negative": "Unequivocal (Leaving no doubt, unambiguous)",
                  "rootKey": "CONTRA+DICT vs UN+EQUIVOCAL"
                },
                {
                  "positive": "Vindicate (Clear of blame, prove justified)",
                  "negative": "Vociferous (Loud, clamorous, vehement)",
                  "rootKey": "VIN+DIC+ATE vs VOC+FER+OUS"
                },
                {
                  "positive": "Valediction (Farewell speech/statement)",
                  "negative": "Evoke (Bring or recall to the conscious mind)",
                  "rootKey": "VALE+DICT+ION vs E+VOK+E"
                },
                {
                  "positive": "Dictate (Lay down authoritatively)",
                  "negative": "Provoke (Stimulate or incite reaction)",
                  "rootKey": "DICT+ATE vs PRO+VOK+E"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **dictum** nature of theoretical models with the **equivocal** reality of human behavior. While proponents emphasize the **contradict** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **unequivocal** consequences.",
              "highlights": [
                {
                  "word": "dictum",
                  "root": "DICT+UM",
                  "note": "Key concept: Formal authoritative pronouncement"
                },
                {
                  "word": "equivocal",
                  "root": "EQUI+VOC+AL",
                  "note": "Critical contrast: Open to more than one meaning, ambiguous"
                },
                {
                  "word": "contradict",
                  "root": "CONTRA+DICT",
                  "note": "Strategic ideal: Assert the opposite of a statement"
                },
                {
                  "word": "unequivocal",
                  "root": "UN+EQUIVOCAL",
                  "note": "Pitfall/Critique: Leaving no doubt, unambiguous"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-2-1-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **dictum** in intent but **unequivocal** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (formal authoritative pronouncement), but bungled the execution in a flawed manner (leaving no doubt, unambiguous).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Dictum = Formal authoritative pronouncement.",
                "Break down: Unequivocal = Leaving no doubt, unambiguous.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "DICTUM (Formal authoritative pronouncement) denotes good intent, while UNEQUIVOCAL (Leaving no doubt, unambiguous) critiques flawed execution."
            },
            {
              "id": "q-2-1-2",
              "prompt": "Which word from this lesson signifies 'Clear of blame, prove justified'?",
              "options": [
                "Equivocal",
                "Vindicate",
                "Vociferous",
                "Contradict"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root DICT / DIC.",
                "Breakdown: VIN+DIC+ATE."
              ],
              "explanation": "VINDICATE (VIN+DIC+ATE) means Clear of blame, prove justified."
            },
            {
              "id": "q-2-1-3",
              "prompt": "If an essay claims that an opponent's defense is '**equivocal**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being open to more than one meaning, ambiguous.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Equivocal.",
                "Meaning: Open to more than one meaning, ambiguous."
              ],
              "explanation": "EQUIVOCAL (EQUI+VOC+AL) means Open to more than one meaning, ambiguous."
            },
            {
              "id": "q-2-1-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Dictum vs Equivocal",
                "Dictum vs Contradict",
                "Equivocal vs Unequivocal",
                "Vindicate vs Valediction"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast DICT / DIC with VOC / VOK.",
                "Dictum vs Equivocal."
              ],
              "explanation": "Dictum (DICT / DIC) directly contrasts with Equivocal (VOC / VOK)."
            }
          ]
        },
        {
          "id": "les-2-2",
          "lessonNumber": 2,
          "title": "Talking Styles & Eloquence: LOQU/LOCUT vs GARR/VERB",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Talking Styles & Eloquence: LOQU/LOCUT vs GARR/VERB",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between LOQU / LOCUT and GARR / VERB provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "LOQU / LOCUT represents foundational root concepts, while GARR / VERB establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: LOQU / LOCUT",
              "origin": "High-Yield Greek/Latin Root Family (LOQU / LOCUT)",
              "coreMeaning": "Using roundabout words to evade answering",
              "derivatives": [
                {
                  "word": "Circumlocution",
                  "breakdown": "CIRCUM+LOCUT+ION",
                  "def": "Using roundabout words to evade answering",
                  "catContext": "The author evaluates the historical implications of circumlocution in institutional policymaking."
                },
                {
                  "word": "Grandiloquent",
                  "breakdown": "GRANDI+LOQU+ENT",
                  "def": "Pompous, bombastic speech",
                  "catContext": "The author evaluates the historical implications of grandiloquent in institutional policymaking."
                },
                {
                  "word": "Eloquent",
                  "breakdown": "E+LOQU+ENT",
                  "def": "Fluent, persuasive, and articulate",
                  "catContext": "The author evaluates the historical implications of eloquent in institutional policymaking."
                },
                {
                  "word": "Loquacious",
                  "breakdown": "LOQU+ACIOUS",
                  "def": "Tending to talk a great deal, talkative",
                  "catContext": "The author evaluates the historical implications of loquacious in institutional policymaking."
                },
                {
                  "word": "Colloquial",
                  "breakdown": "CON+LOQU+IAL",
                  "def": "Used in ordinary or familiar conversation",
                  "catContext": "The author evaluates the historical implications of colloquial in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: GARR / VERB",
              "origin": "High-Yield Greek/Latin Root Family (GARR / VERB)",
              "coreMeaning": "Excessively talkative on trivial matters",
              "derivatives": [
                {
                  "word": "Garrulous",
                  "breakdown": "GARR+ULOUS",
                  "def": "Excessively talkative on trivial matters",
                  "catContext": "Critics questioned whether the initiative was merely garrulous rather than a sustainable structural reform."
                },
                {
                  "word": "Verbose",
                  "breakdown": "VERB+OSE",
                  "def": "Using more words than needed, wordy",
                  "catContext": "Critics questioned whether the initiative was merely verbose rather than a sustainable structural reform."
                },
                {
                  "word": "Verbatim",
                  "breakdown": "VERB+ATIM",
                  "def": "In exactly the same words as originally used",
                  "catContext": "Critics questioned whether the initiative was merely verbatim rather than a sustainable structural reform."
                },
                {
                  "word": "Verbiage",
                  "breakdown": "VERB+IAGE",
                  "def": "Excessively wordy language",
                  "catContext": "Critics questioned whether the initiative was merely verbiage rather than a sustainable structural reform."
                },
                {
                  "word": "Prolix",
                  "breakdown": "PRO+LIX",
                  "def": "Using too many words, tedious",
                  "catContext": "Critics questioned whether the initiative was merely prolix rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Circumlocution (Using roundabout words to evade answering)",
                  "negative": "Garrulous (Excessively talkative on trivial matters)",
                  "rootKey": "CIRCUM+LOCUT+ION vs GARR+ULOUS"
                },
                {
                  "positive": "Grandiloquent (Pompous, bombastic speech)",
                  "negative": "Verbose (Using more words than needed, wordy)",
                  "rootKey": "GRANDI+LOQU+ENT vs VERB+OSE"
                },
                {
                  "positive": "Eloquent (Fluent, persuasive, and articulate)",
                  "negative": "Verbatim (In exactly the same words as originally used)",
                  "rootKey": "E+LOQU+ENT vs VERB+ATIM"
                },
                {
                  "positive": "Loquacious (Tending to talk a great deal, talkative)",
                  "negative": "Verbiage (Excessively wordy language)",
                  "rootKey": "LOQU+ACIOUS vs VERB+IAGE"
                },
                {
                  "positive": "Colloquial (Used in ordinary or familiar conversation)",
                  "negative": "Prolix (Using too many words, tedious)",
                  "rootKey": "CON+LOQU+IAL vs PRO+LIX"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **circumlocution** nature of theoretical models with the **garrulous** reality of human behavior. While proponents emphasize the **grandiloquent** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **verbose** consequences.",
              "highlights": [
                {
                  "word": "circumlocution",
                  "root": "CIRCUM+LOCUT+ION",
                  "note": "Key concept: Using roundabout words to evade answering"
                },
                {
                  "word": "garrulous",
                  "root": "GARR+ULOUS",
                  "note": "Critical contrast: Excessively talkative on trivial matters"
                },
                {
                  "word": "grandiloquent",
                  "root": "GRANDI+LOQU+ENT",
                  "note": "Strategic ideal: Pompous, bombastic speech"
                },
                {
                  "word": "verbose",
                  "root": "VERB+OSE",
                  "note": "Pitfall/Critique: Using more words than needed, wordy"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-2-2-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **circumlocution** in intent but **verbose** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (using roundabout words to evade answering), but bungled the execution in a flawed manner (using more words than needed, wordy).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Circumlocution = Using roundabout words to evade answering.",
                "Break down: Verbose = Using more words than needed, wordy.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "CIRCUMLOCUTION (Using roundabout words to evade answering) denotes good intent, while VERBOSE (Using more words than needed, wordy) critiques flawed execution."
            },
            {
              "id": "q-2-2-2",
              "prompt": "Which word from this lesson signifies 'Fluent, persuasive, and articulate'?",
              "options": [
                "Garrulous",
                "Eloquent",
                "Verbatim",
                "Grandiloquent"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root LOQU / LOCUT.",
                "Breakdown: E+LOQU+ENT."
              ],
              "explanation": "ELOQUENT (E+LOQU+ENT) means Fluent, persuasive, and articulate."
            },
            {
              "id": "q-2-2-3",
              "prompt": "If an essay claims that an opponent's defense is '**garrulous**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being excessively talkative on trivial matters.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Garrulous.",
                "Meaning: Excessively talkative on trivial matters."
              ],
              "explanation": "GARRULOUS (GARR+ULOUS) means Excessively talkative on trivial matters."
            },
            {
              "id": "q-2-2-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Circumlocution vs Garrulous",
                "Circumlocution vs Grandiloquent",
                "Garrulous vs Verbose",
                "Eloquent vs Loquacious"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast LOQU / LOCUT with GARR / VERB.",
                "Circumlocution vs Garrulous."
              ],
              "explanation": "Circumlocution (LOQU / LOCUT) directly contrasts with Garrulous (GARR / VERB)."
            }
          ]
        },
        {
          "id": "les-2-3",
          "lessonNumber": 3,
          "title": "Truth, Semblance & Fallacy: VER/VERI vs FALL/FALS",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Truth, Semblance & Fallacy: VER/VERI vs FALL/FALS",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between VER / VERI and FALL / FALS / SPEC provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "VER / VERI represents foundational root concepts, while FALL / FALS / SPEC establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: VER / VERI",
              "origin": "High-Yield Greek/Latin Root Family (VER / VERI)",
              "coreMeaning": "Conformity to facts, accuracy, truth",
              "derivatives": [
                {
                  "word": "Veracity",
                  "breakdown": "VER+ACITY",
                  "def": "Conformity to facts, accuracy, truth",
                  "catContext": "The author evaluates the historical implications of veracity in institutional policymaking."
                },
                {
                  "word": "Verisimilitude",
                  "breakdown": "VERI+SIMILIS+TUDE",
                  "def": "Appearance of being true or realistic",
                  "catContext": "The author evaluates the historical implications of verisimilitude in institutional policymaking."
                },
                {
                  "word": "Aver",
                  "breakdown": "A+VER",
                  "def": "State or assert positively to be true",
                  "catContext": "The author evaluates the historical implications of aver in institutional policymaking."
                },
                {
                  "word": "Verify",
                  "breakdown": "VER+FY",
                  "def": "Make sure or demonstrate that something is true",
                  "catContext": "The author evaluates the historical implications of verify in institutional policymaking."
                },
                {
                  "word": "Veritable",
                  "breakdown": "VERI+TABLE",
                  "def": "Used for emphasis, truly real",
                  "catContext": "The author evaluates the historical implications of veritable in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: FALL / FALS / SPEC",
              "origin": "High-Yield Greek/Latin Root Family (FALL / FALS / SPEC)",
              "coreMeaning": "Based on mistaken belief or flawed logic",
              "derivatives": [
                {
                  "word": "Fallacious",
                  "breakdown": "FALL+ACIOUS",
                  "def": "Based on mistaken belief or flawed logic",
                  "catContext": "Critics questioned whether the initiative was merely fallacious rather than a sustainable structural reform."
                },
                {
                  "word": "Specious",
                  "breakdown": "SPEC+IOUS",
                  "def": "Superficially plausible but actually wrong",
                  "catContext": "Critics questioned whether the initiative was merely specious rather than a sustainable structural reform."
                },
                {
                  "word": "Pseudonym",
                  "breakdown": "PSEUD+ONYM",
                  "def": "Fictitious false name",
                  "catContext": "Critics questioned whether the initiative was merely pseudonym rather than a sustainable structural reform."
                },
                {
                  "word": "Fallible",
                  "breakdown": "FALL+IBLE",
                  "def": "Capable of making mistakes or being wrong",
                  "catContext": "Critics questioned whether the initiative was merely fallible rather than a sustainable structural reform."
                },
                {
                  "word": "Falsify",
                  "breakdown": "FALS+FY",
                  "def": "Alter so as to mislead",
                  "catContext": "Critics questioned whether the initiative was merely falsify rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Veracity (Conformity to facts, accuracy, truth)",
                  "negative": "Fallacious (Based on mistaken belief or flawed logic)",
                  "rootKey": "VER+ACITY vs FALL+ACIOUS"
                },
                {
                  "positive": "Verisimilitude (Appearance of being true or realistic)",
                  "negative": "Specious (Superficially plausible but actually wrong)",
                  "rootKey": "VERI+SIMILIS+TUDE vs SPEC+IOUS"
                },
                {
                  "positive": "Aver (State or assert positively to be true)",
                  "negative": "Pseudonym (Fictitious false name)",
                  "rootKey": "A+VER vs PSEUD+ONYM"
                },
                {
                  "positive": "Verify (Make sure or demonstrate that something is true)",
                  "negative": "Fallible (Capable of making mistakes or being wrong)",
                  "rootKey": "VER+FY vs FALL+IBLE"
                },
                {
                  "positive": "Veritable (Used for emphasis, truly real)",
                  "negative": "Falsify (Alter so as to mislead)",
                  "rootKey": "VERI+TABLE vs FALS+FY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **veracity** nature of theoretical models with the **fallacious** reality of human behavior. While proponents emphasize the **verisimilitude** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **specious** consequences.",
              "highlights": [
                {
                  "word": "veracity",
                  "root": "VER+ACITY",
                  "note": "Key concept: Conformity to facts, accuracy, truth"
                },
                {
                  "word": "fallacious",
                  "root": "FALL+ACIOUS",
                  "note": "Critical contrast: Based on mistaken belief or flawed logic"
                },
                {
                  "word": "verisimilitude",
                  "root": "VERI+SIMILIS+TUDE",
                  "note": "Strategic ideal: Appearance of being true or realistic"
                },
                {
                  "word": "specious",
                  "root": "SPEC+IOUS",
                  "note": "Pitfall/Critique: Superficially plausible but actually wrong"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-2-3-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **veracity** in intent but **specious** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (conformity to facts, accuracy, truth), but bungled the execution in a flawed manner (superficially plausible but actually wrong).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Veracity = Conformity to facts, accuracy, truth.",
                "Break down: Specious = Superficially plausible but actually wrong.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "VERACITY (Conformity to facts, accuracy, truth) denotes good intent, while SPECIOUS (Superficially plausible but actually wrong) critiques flawed execution."
            },
            {
              "id": "q-2-3-2",
              "prompt": "Which word from this lesson signifies 'State or assert positively to be true'?",
              "options": [
                "Fallacious",
                "Aver",
                "Pseudonym",
                "Verisimilitude"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root VER / VERI.",
                "Breakdown: A+VER."
              ],
              "explanation": "AVER (A+VER) means State or assert positively to be true."
            },
            {
              "id": "q-2-3-3",
              "prompt": "If an essay claims that an opponent's defense is '**fallacious**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being based on mistaken belief or flawed logic.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Fallacious.",
                "Meaning: Based on mistaken belief or flawed logic."
              ],
              "explanation": "FALLACIOUS (FALL+ACIOUS) means Based on mistaken belief or flawed logic."
            },
            {
              "id": "q-2-3-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Veracity vs Fallacious",
                "Veracity vs Verisimilitude",
                "Fallacious vs Specious",
                "Aver vs Verify"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast VER / VERI with FALL / FALS / SPEC.",
                "Veracity vs Fallacious."
              ],
              "explanation": "Veracity (VER / VERI) directly contrasts with Fallacious (FALL / FALS / SPEC)."
            }
          ]
        },
        {
          "id": "les-2-4",
          "lessonNumber": 4,
          "title": "Logical Cohesion & Tangents: HER/HES vs GRESS/GRAD",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Logical Cohesion & Tangents: HER/HES vs GRESS/GRAD",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between HER / HES and GRESS / GRAD provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "HER / HES represents foundational root concepts, while GRESS / GRAD establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: HER / HES",
              "origin": "High-Yield Greek/Latin Root Family (HER / HES)",
              "coreMeaning": "Logical, consistent, united",
              "derivatives": [
                {
                  "word": "Coherent",
                  "breakdown": "CO+HER+ENT",
                  "def": "Logical, consistent, united",
                  "catContext": "The author evaluates the historical implications of coherent in institutional policymaking."
                },
                {
                  "word": "Incoherent",
                  "breakdown": "IN+COHERENT",
                  "def": "Disjointed, confusing, not logical",
                  "catContext": "The author evaluates the historical implications of incoherent in institutional policymaking."
                },
                {
                  "word": "Adherent",
                  "breakdown": "AD+HER+ENT",
                  "def": "Someone who supports or sticks to a philosophy",
                  "catContext": "The author evaluates the historical implications of adherent in institutional policymaking."
                },
                {
                  "word": "Cohesion",
                  "breakdown": "CO+HES+ION",
                  "def": "Action or state of sticking together",
                  "catContext": "The author evaluates the historical implications of cohesion in institutional policymaking."
                },
                {
                  "word": "Inherent",
                  "breakdown": "IN+HER+ENT",
                  "def": "Existing as a natural, permanent attribute",
                  "catContext": "The author evaluates the historical implications of inherent in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: GRESS / GRAD",
              "origin": "High-Yield Greek/Latin Root Family (GRESS / GRAD)",
              "coreMeaning": "Leave main subject temporarily in speech/writing",
              "derivatives": [
                {
                  "word": "Digress",
                  "breakdown": "DIS+GRESS",
                  "def": "Leave main subject temporarily in speech/writing",
                  "catContext": "Critics questioned whether the initiative was merely digress rather than a sustainable structural reform."
                },
                {
                  "word": "Transgression",
                  "breakdown": "TRANS+GRESS+ION",
                  "def": "Act that goes beyond bounds of moral/legal limits",
                  "catContext": "Critics questioned whether the initiative was merely transgression rather than a sustainable structural reform."
                },
                {
                  "word": "Regress",
                  "breakdown": "RE+GRESS",
                  "def": "Return to a former, worse state",
                  "catContext": "Critics questioned whether the initiative was merely regress rather than a sustainable structural reform."
                },
                {
                  "word": "Progress",
                  "breakdown": "PRO+GRESS",
                  "def": "Move forward towards a destination",
                  "catContext": "Critics questioned whether the initiative was merely progress rather than a sustainable structural reform."
                },
                {
                  "word": "Egress",
                  "breakdown": "E+GRESS",
                  "def": "Action of going out of or leaving a place",
                  "catContext": "Critics questioned whether the initiative was merely egress rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Coherent (Logical, consistent, united)",
                  "negative": "Digress (Leave main subject temporarily in speech/writing)",
                  "rootKey": "CO+HER+ENT vs DIS+GRESS"
                },
                {
                  "positive": "Incoherent (Disjointed, confusing, not logical)",
                  "negative": "Transgression (Act that goes beyond bounds of moral/legal limits)",
                  "rootKey": "IN+COHERENT vs TRANS+GRESS+ION"
                },
                {
                  "positive": "Adherent (Someone who supports or sticks to a philosophy)",
                  "negative": "Regress (Return to a former, worse state)",
                  "rootKey": "AD+HER+ENT vs RE+GRESS"
                },
                {
                  "positive": "Cohesion (Action or state of sticking together)",
                  "negative": "Progress (Move forward towards a destination)",
                  "rootKey": "CO+HES+ION vs PRO+GRESS"
                },
                {
                  "positive": "Inherent (Existing as a natural, permanent attribute)",
                  "negative": "Egress (Action of going out of or leaving a place)",
                  "rootKey": "IN+HER+ENT vs E+GRESS"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **coherent** nature of theoretical models with the **digress** reality of human behavior. While proponents emphasize the **incoherent** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **transgression** consequences.",
              "highlights": [
                {
                  "word": "coherent",
                  "root": "CO+HER+ENT",
                  "note": "Key concept: Logical, consistent, united"
                },
                {
                  "word": "digress",
                  "root": "DIS+GRESS",
                  "note": "Critical contrast: Leave main subject temporarily in speech/writing"
                },
                {
                  "word": "incoherent",
                  "root": "IN+COHERENT",
                  "note": "Strategic ideal: Disjointed, confusing, not logical"
                },
                {
                  "word": "transgression",
                  "root": "TRANS+GRESS+ION",
                  "note": "Pitfall/Critique: Act that goes beyond bounds of moral/legal limits"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-2-4-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **coherent** in intent but **transgression** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (logical, consistent, united), but bungled the execution in a flawed manner (act that goes beyond bounds of moral/legal limits).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Coherent = Logical, consistent, united.",
                "Break down: Transgression = Act that goes beyond bounds of moral/legal limits.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "COHERENT (Logical, consistent, united) denotes good intent, while TRANSGRESSION (Act that goes beyond bounds of moral/legal limits) critiques flawed execution."
            },
            {
              "id": "q-2-4-2",
              "prompt": "Which word from this lesson signifies 'Someone who supports or sticks to a philosophy'?",
              "options": [
                "Digress",
                "Adherent",
                "Regress",
                "Incoherent"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root HER / HES.",
                "Breakdown: AD+HER+ENT."
              ],
              "explanation": "ADHERENT (AD+HER+ENT) means Someone who supports or sticks to a philosophy."
            },
            {
              "id": "q-2-4-3",
              "prompt": "If an essay claims that an opponent's defense is '**digress**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being leave main subject temporarily in speech/writing.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Digress.",
                "Meaning: Leave main subject temporarily in speech/writing."
              ],
              "explanation": "DIGRESS (DIS+GRESS) means Leave main subject temporarily in speech/writing."
            },
            {
              "id": "q-2-4-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Coherent vs Digress",
                "Coherent vs Incoherent",
                "Digress vs Transgression",
                "Adherent vs Cohesion"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast HER / HES with GRESS / GRAD.",
                "Coherent vs Digress."
              ],
              "explanation": "Coherent (HER / HES) directly contrasts with Digress (GRESS / GRAD)."
            }
          ]
        },
        {
          "id": "les-2-5",
          "lessonNumber": 5,
          "title": "Inquiries & Admonitions: QUER/QUIS/ROG vs MON/MONIT",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Inquiries & Admonitions: QUER/QUIS/ROG vs MON/MONIT",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between QUER / QUIS / ROG and MON / MONIT provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "QUER / QUIS / ROG represents foundational root concepts, while MON / MONIT establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: QUER / QUIS / ROG",
              "origin": "High-Yield Greek/Latin Root Family (QUER / QUIS / ROG)",
              "coreMeaning": "Intensive and prolonged questioning/investigation",
              "derivatives": [
                {
                  "word": "Inquisition",
                  "breakdown": "IN+QUIS+ITION",
                  "def": "Intensive and prolonged questioning/investigation",
                  "catContext": "The author evaluates the historical implications of inquisition in institutional policymaking."
                },
                {
                  "word": "Arrogate",
                  "breakdown": "AD+ROG+ATE",
                  "def": "Take or claim without justification",
                  "catContext": "The author evaluates the historical implications of arrogate in institutional policymaking."
                },
                {
                  "word": "Prerogative",
                  "breakdown": "PRE+ROG+ATIVE",
                  "def": "Exclusive right or privilege",
                  "catContext": "The author evaluates the historical implications of prerogative in institutional policymaking."
                },
                {
                  "word": "Query",
                  "breakdown": "QUER+Y",
                  "def": "Question, inquiry, or doubt",
                  "catContext": "The author evaluates the historical implications of query in institutional policymaking."
                },
                {
                  "word": "Inquisitive",
                  "breakdown": "IN+QUIS+ITIVE",
                  "def": "Curious, inquiring into things",
                  "catContext": "The author evaluates the historical implications of inquisitive in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: MON / MONIT",
              "origin": "High-Yield Greek/Latin Root Family (MON / MONIT)",
              "coreMeaning": "Warn or reprimand firmly",
              "derivatives": [
                {
                  "word": "Admonish",
                  "breakdown": "AD+MON+ISH",
                  "def": "Warn or reprimand firmly",
                  "catContext": "Critics questioned whether the initiative was merely admonish rather than a sustainable structural reform."
                },
                {
                  "word": "Admonitory",
                  "breakdown": "AD+MONIT+ORY",
                  "def": "Giving or conveying a firm warning",
                  "catContext": "Critics questioned whether the initiative was merely admonitory rather than a sustainable structural reform."
                },
                {
                  "word": "Premonition",
                  "breakdown": "PRE+MON+ITION",
                  "def": "Strong feeling that something unpleasant will happen",
                  "catContext": "Critics questioned whether the initiative was merely premonition rather than a sustainable structural reform."
                },
                {
                  "word": "Monitor",
                  "breakdown": "MONIT+OR",
                  "def": "Observe and check progress over time",
                  "catContext": "Critics questioned whether the initiative was merely monitor rather than a sustainable structural reform."
                },
                {
                  "word": "Monument",
                  "breakdown": "MONU+MENT",
                  "def": "Structure erected to commemorate/remind",
                  "catContext": "Critics questioned whether the initiative was merely monument rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Inquisition (Intensive and prolonged questioning/investigation)",
                  "negative": "Admonish (Warn or reprimand firmly)",
                  "rootKey": "IN+QUIS+ITION vs AD+MON+ISH"
                },
                {
                  "positive": "Arrogate (Take or claim without justification)",
                  "negative": "Admonitory (Giving or conveying a firm warning)",
                  "rootKey": "AD+ROG+ATE vs AD+MONIT+ORY"
                },
                {
                  "positive": "Prerogative (Exclusive right or privilege)",
                  "negative": "Premonition (Strong feeling that something unpleasant will happen)",
                  "rootKey": "PRE+ROG+ATIVE vs PRE+MON+ITION"
                },
                {
                  "positive": "Query (Question, inquiry, or doubt)",
                  "negative": "Monitor (Observe and check progress over time)",
                  "rootKey": "QUER+Y vs MONIT+OR"
                },
                {
                  "positive": "Inquisitive (Curious, inquiring into things)",
                  "negative": "Monument (Structure erected to commemorate/remind)",
                  "rootKey": "IN+QUIS+ITIVE vs MONU+MENT"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **inquisition** nature of theoretical models with the **admonish** reality of human behavior. While proponents emphasize the **arrogate** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **admonitory** consequences.",
              "highlights": [
                {
                  "word": "inquisition",
                  "root": "IN+QUIS+ITION",
                  "note": "Key concept: Intensive and prolonged questioning/investigation"
                },
                {
                  "word": "admonish",
                  "root": "AD+MON+ISH",
                  "note": "Critical contrast: Warn or reprimand firmly"
                },
                {
                  "word": "arrogate",
                  "root": "AD+ROG+ATE",
                  "note": "Strategic ideal: Take or claim without justification"
                },
                {
                  "word": "admonitory",
                  "root": "AD+MONIT+ORY",
                  "note": "Pitfall/Critique: Giving or conveying a firm warning"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-2-5-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **inquisition** in intent but **admonitory** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (intensive and prolonged questioning/investigation), but bungled the execution in a flawed manner (giving or conveying a firm warning).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Inquisition = Intensive and prolonged questioning/investigation.",
                "Break down: Admonitory = Giving or conveying a firm warning.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "INQUISITION (Intensive and prolonged questioning/investigation) denotes good intent, while ADMONITORY (Giving or conveying a firm warning) critiques flawed execution."
            },
            {
              "id": "q-2-5-2",
              "prompt": "Which word from this lesson signifies 'Exclusive right or privilege'?",
              "options": [
                "Admonish",
                "Prerogative",
                "Premonition",
                "Arrogate"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root QUER / QUIS / ROG.",
                "Breakdown: PRE+ROG+ATIVE."
              ],
              "explanation": "PREROGATIVE (PRE+ROG+ATIVE) means Exclusive right or privilege."
            },
            {
              "id": "q-2-5-3",
              "prompt": "If an essay claims that an opponent's defense is '**admonish**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being warn or reprimand firmly.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Admonish.",
                "Meaning: Warn or reprimand firmly."
              ],
              "explanation": "ADMONISH (AD+MON+ISH) means Warn or reprimand firmly."
            },
            {
              "id": "q-2-5-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Inquisition vs Admonish",
                "Inquisition vs Arrogate",
                "Admonish vs Admonitory",
                "Prerogative vs Query"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast QUER / QUIS / ROG with MON / MONIT.",
                "Inquisition vs Admonish."
              ],
              "explanation": "Inquisition (QUER / QUIS / ROG) directly contrasts with Admonish (MON / MONIT)."
            }
          ]
        },
        {
          "id": "les-2-6",
          "lessonNumber": 6,
          "title": "Refutation & Probity: NEG/NULL vs PROV/PROB",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Refutation & Probity: NEG/NULL vs PROV/PROB",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between NEG / NULL / ABNEG and PROV / PROB provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "NEG / NULL / ABNEG represents foundational root concepts, while PROV / PROB establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: NEG / NULL / ABNEG",
              "origin": "High-Yield Greek/Latin Root Family (NEG / NULL / ABNEG)",
              "coreMeaning": "Renouncing or rejecting something; self-denial",
              "derivatives": [
                {
                  "word": "Abnegation",
                  "breakdown": "AB+NEG+ATION",
                  "def": "Renouncing or rejecting something; self-denial",
                  "catContext": "The author evaluates the historical implications of abnegation in institutional policymaking."
                },
                {
                  "word": "Nullify",
                  "breakdown": "NULL+FY",
                  "def": "Make legally void, invalidate",
                  "catContext": "The author evaluates the historical implications of nullify in institutional policymaking."
                },
                {
                  "word": "Renegade",
                  "breakdown": "RE+NEG+ADE",
                  "def": "Person who betrays an organization/principles",
                  "catContext": "The author evaluates the historical implications of renegade in institutional policymaking."
                },
                {
                  "word": "Negative",
                  "breakdown": "NEG+ATIVE",
                  "def": "Expressing denial or refusal",
                  "catContext": "The author evaluates the historical implications of negative in institutional policymaking."
                },
                {
                  "word": "Nullity",
                  "breakdown": "NULL+ITY",
                  "def": "State of being legally void or nonexistent",
                  "catContext": "The author evaluates the historical implications of nullity in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: PROV / PROB",
              "origin": "High-Yield Greek/Latin Root Family (PROV / PROB)",
              "coreMeaning": "Strong moral principles, honesty, integrity",
              "derivatives": [
                {
                  "word": "Probity",
                  "breakdown": "PROB+ITY",
                  "def": "Strong moral principles, honesty, integrity",
                  "catContext": "Critics questioned whether the initiative was merely probity rather than a sustainable structural reform."
                },
                {
                  "word": "Reprobate",
                  "breakdown": "RE+PROB+ATE",
                  "def": "Unprincipled, morally corrupt person",
                  "catContext": "Critics questioned whether the initiative was merely reprobate rather than a sustainable structural reform."
                },
                {
                  "word": "Approbation",
                  "breakdown": "AD+PROB+ATION",
                  "def": "Approval, praise, formal endorsement",
                  "catContext": "Critics questioned whether the initiative was merely approbation rather than a sustainable structural reform."
                },
                {
                  "word": "Probative",
                  "breakdown": "PROB+ATIVE",
                  "def": "Having the quality of proving something",
                  "catContext": "Critics questioned whether the initiative was merely probative rather than a sustainable structural reform."
                },
                {
                  "word": "Disprove",
                  "breakdown": "DIS+PROV+E",
                  "def": "Prove that something is false or wrong",
                  "catContext": "Critics questioned whether the initiative was merely disprove rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Abnegation (Renouncing or rejecting something; self-denial)",
                  "negative": "Probity (Strong moral principles, honesty, integrity)",
                  "rootKey": "AB+NEG+ATION vs PROB+ITY"
                },
                {
                  "positive": "Nullify (Make legally void, invalidate)",
                  "negative": "Reprobate (Unprincipled, morally corrupt person)",
                  "rootKey": "NULL+FY vs RE+PROB+ATE"
                },
                {
                  "positive": "Renegade (Person who betrays an organization/principles)",
                  "negative": "Approbation (Approval, praise, formal endorsement)",
                  "rootKey": "RE+NEG+ADE vs AD+PROB+ATION"
                },
                {
                  "positive": "Negative (Expressing denial or refusal)",
                  "negative": "Probative (Having the quality of proving something)",
                  "rootKey": "NEG+ATIVE vs PROB+ATIVE"
                },
                {
                  "positive": "Nullity (State of being legally void or nonexistent)",
                  "negative": "Disprove (Prove that something is false or wrong)",
                  "rootKey": "NULL+ITY vs DIS+PROV+E"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **abnegation** nature of theoretical models with the **probity** reality of human behavior. While proponents emphasize the **nullify** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **reprobate** consequences.",
              "highlights": [
                {
                  "word": "abnegation",
                  "root": "AB+NEG+ATION",
                  "note": "Key concept: Renouncing or rejecting something; self-denial"
                },
                {
                  "word": "probity",
                  "root": "PROB+ITY",
                  "note": "Critical contrast: Strong moral principles, honesty, integrity"
                },
                {
                  "word": "nullify",
                  "root": "NULL+FY",
                  "note": "Strategic ideal: Make legally void, invalidate"
                },
                {
                  "word": "reprobate",
                  "root": "RE+PROB+ATE",
                  "note": "Pitfall/Critique: Unprincipled, morally corrupt person"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-2-6-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **abnegation** in intent but **reprobate** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (renouncing or rejecting something; self-denial), but bungled the execution in a flawed manner (unprincipled, morally corrupt person).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Abnegation = Renouncing or rejecting something; self-denial.",
                "Break down: Reprobate = Unprincipled, morally corrupt person.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "ABNEGATION (Renouncing or rejecting something; self-denial) denotes good intent, while REPROBATE (Unprincipled, morally corrupt person) critiques flawed execution."
            },
            {
              "id": "q-2-6-2",
              "prompt": "Which word from this lesson signifies 'Person who betrays an organization/principles'?",
              "options": [
                "Probity",
                "Renegade",
                "Approbation",
                "Nullify"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root NEG / NULL / ABNEG.",
                "Breakdown: RE+NEG+ADE."
              ],
              "explanation": "RENEGADE (RE+NEG+ADE) means Person who betrays an organization/principles."
            },
            {
              "id": "q-2-6-3",
              "prompt": "If an essay claims that an opponent's defense is '**probity**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being strong moral principles, honesty, integrity.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Probity.",
                "Meaning: Strong moral principles, honesty, integrity."
              ],
              "explanation": "PROBITY (PROB+ITY) means Strong moral principles, honesty, integrity."
            },
            {
              "id": "q-2-6-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Abnegation vs Probity",
                "Abnegation vs Nullify",
                "Probity vs Reprobate",
                "Renegade vs Negative"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast NEG / NULL / ABNEG with PROV / PROB.",
                "Abnegation vs Probity."
              ],
              "explanation": "Abnegation (NEG / NULL / ABNEG) directly contrasts with Probity (PROV / PROB)."
            }
          ]
        }
      ],
      "masteryQuiz": [
        {
          "id": "mq-2-1",
          "prompt": "In a Category 2 Reading Comprehension passage, how does the author contrast theoretical assertions with empirical reality?",
          "options": [
            "By contrasting idealized conceptual frameworks with the complex reality of human institutions.",
            "By adopting an uncritical, complacent attitude towards government policy.",
            "By expressing total agnostic indifference.",
            "By relying exclusively on circular tautologies."
          ],
          "correctIndex": 0,
          "explanation": "CAT passages typically set up an analytical tension between idealized theories and empirical ground realities."
        },
        {
          "id": "mq-2-2",
          "prompt": "Which term from Category 2 carries an overwhelmingly **positive** valence when used by an author?",
          "options": [
            "Dictum",
            "Equivocal",
            "Garrulous",
            "Fallacious"
          ],
          "correctIndex": 0,
          "explanation": "Dictum carries a positive root connotation, whereas the other options are negative tone markers."
        },
        {
          "id": "mq-2-3",
          "prompt": "If an essay argues that an institution is guilty of '**digress**', the author is:",
          "options": [
            "Praising the institution with enthusiastic plaudits.",
            "Criticizing the institution for leave main subject temporarily in speech/writing.",
            "Declaring the institution legally solvent and exculpated.",
            "Taking an egalitarian stance."
          ],
          "correctIndex": 1,
          "explanation": "Digress means Leave main subject temporarily in speech/writing."
        },
        {
          "id": "mq-2-4",
          "prompt": "What is the underlying etymological root of **Veracity**?",
          "options": [
            "High-Yield Greek/Latin Root Family (VER / VERI)",
            "High-Yield Greek/Latin Root Family (FALL / FALS / SPEC)",
            "High-Yield Greek/Latin Root Family (MON / MONIT)",
            "High-Yield Greek/Latin Root Family (PROV / PROB)"
          ],
          "correctIndex": 0,
          "explanation": "Veracity is derived from High-Yield Greek/Latin Root Family (VER / VERI)."
        },
        {
          "id": "mq-2-5",
          "prompt": "An author describes a policy as '**inquisition** while warning against **admonish** consequences.' What is the author's tone?",
          "options": [
            "Judicious, balanced, and analytically rigorous in weighing benefits against pitfalls.",
            "Fiercely vitriolic and purely destructive.",
            "Apathetic, bored, and disengaged.",
            "Laudatory and uncritical."
          ],
          "correctIndex": 0,
          "explanation": "Balancing positive qualities with cautions against negative pitfalls indicates a judicious and analytically rigorous tone."
        },
        {
          "id": "mq-2-6",
          "prompt": "Which of the following distinguishes the core concept of Lesson 2.1 from Lesson 2.6 in this category?",
          "options": [
            "Lesson 2.1 focuses on foundational valences (Pronouncements & Declarations: DICT/DIC vs VOC/VOK), while Lesson 2.6 develops specialized applications (Refutation & Probity: NEG/NULL vs PROV/PROB).",
            "They are identical lessons repeated twice.",
            "Lesson 6 is purely historical with zero relevance to modern CAT reading.",
            "Lesson 1 is only for grammar error identification."
          ],
          "correctIndex": 0,
          "explanation": "The curriculum progresses systematically from foundational concepts (Pronouncements & Declarations: DICT/DIC vs VOC/VOK) to advanced critical frameworks (Refutation & Probity: NEG/NULL vs PROV/PROB)."
        }
      ]
    },
    {
      "id": "cat-3",
      "number": 3,
      "title": "Mind, Cognition & Epistemology",
      "tagline": "Dissect vocabulary for Philosophy, Psychology, and Consciousness RCs.",
      "icon": "brain",
      "color": "from-amber-500/20 to-orange-500/20 border-amber-500/30",
      "accent": "text-amber-400",
      "lessons": [
        {
          "id": "les-3-1",
          "lessonNumber": 1,
          "title": "Knowing & Foresight: GNO/SCI vs ANIM",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Knowing & Foresight: GNO/SCI vs ANIM",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between GNO / GNI / SCI and ANIM provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "GNO / GNI / SCI represents foundational root concepts, while ANIM establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: GNO / GNI / SCI",
              "origin": "High-Yield Greek/Latin Root Family (GNO / GNI / SCI)",
              "coreMeaning": "Believing ultimate reality is unknowable",
              "derivatives": [
                {
                  "word": "Agnostic",
                  "breakdown": "A+GNO+IC",
                  "def": "Believing ultimate reality is unknowable",
                  "catContext": "The author evaluates the historical implications of agnostic in institutional policymaking."
                },
                {
                  "word": "Prescient",
                  "breakdown": "PRE+SCI+ENT",
                  "def": "Having foresight, knowing beforehand",
                  "catContext": "The author evaluates the historical implications of prescient in institutional policymaking."
                },
                {
                  "word": "Cognizant",
                  "breakdown": "COG+GNI+ZANT",
                  "def": "Having awareness or knowledge of something",
                  "catContext": "The author evaluates the historical implications of cognizant in institutional policymaking."
                },
                {
                  "word": "Omniscient",
                  "breakdown": "OMNI+SCI+ENT",
                  "def": "Knowing everything, all-knowing",
                  "catContext": "The author evaluates the historical implications of omniscient in institutional policymaking."
                },
                {
                  "word": "Prognosis",
                  "breakdown": "PRO+GNO+SIS",
                  "def": "Forecast of the likely outcome",
                  "catContext": "The author evaluates the historical implications of prognosis in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: ANIM",
              "origin": "High-Yield Greek/Latin Root Family (ANIM)",
              "coreMeaning": "Mental composure and calmness under stress",
              "derivatives": [
                {
                  "word": "Equanimity",
                  "breakdown": "EQU+ANIM+ITY",
                  "def": "Mental composure and calmness under stress",
                  "catContext": "Critics questioned whether the initiative was merely equanimity rather than a sustainable structural reform."
                },
                {
                  "word": "Pusillanimous",
                  "breakdown": "PUSILL+ANIM+OUS",
                  "def": "Cowardly, lacking courage and resolution",
                  "catContext": "Critics questioned whether the initiative was merely pusillanimous rather than a sustainable structural reform."
                },
                {
                  "word": "Magnanimous",
                  "breakdown": "MAGN+ANIM+OUS",
                  "def": "Generous, noble-spirited, forgiving",
                  "catContext": "Critics questioned whether the initiative was merely magnanimous rather than a sustainable structural reform."
                },
                {
                  "word": "Animosity",
                  "breakdown": "ANIM+OSITY",
                  "def": "Strong hostility or enmity",
                  "catContext": "Critics questioned whether the initiative was merely animosity rather than a sustainable structural reform."
                },
                {
                  "word": "Unanimous",
                  "breakdown": "UNI+ANIM+OUS",
                  "def": "Fully in agreement, of one mind",
                  "catContext": "Critics questioned whether the initiative was merely unanimous rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Agnostic (Believing ultimate reality is unknowable)",
                  "negative": "Equanimity (Mental composure and calmness under stress)",
                  "rootKey": "A+GNO+IC vs EQU+ANIM+ITY"
                },
                {
                  "positive": "Prescient (Having foresight, knowing beforehand)",
                  "negative": "Pusillanimous (Cowardly, lacking courage and resolution)",
                  "rootKey": "PRE+SCI+ENT vs PUSILL+ANIM+OUS"
                },
                {
                  "positive": "Cognizant (Having awareness or knowledge of something)",
                  "negative": "Magnanimous (Generous, noble-spirited, forgiving)",
                  "rootKey": "COG+GNI+ZANT vs MAGN+ANIM+OUS"
                },
                {
                  "positive": "Omniscient (Knowing everything, all-knowing)",
                  "negative": "Animosity (Strong hostility or enmity)",
                  "rootKey": "OMNI+SCI+ENT vs ANIM+OSITY"
                },
                {
                  "positive": "Prognosis (Forecast of the likely outcome)",
                  "negative": "Unanimous (Fully in agreement, of one mind)",
                  "rootKey": "PRO+GNO+SIS vs UNI+ANIM+OUS"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **agnostic** nature of theoretical models with the **equanimity** reality of human behavior. While proponents emphasize the **prescient** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **pusillanimous** consequences.",
              "highlights": [
                {
                  "word": "agnostic",
                  "root": "A+GNO+IC",
                  "note": "Key concept: Believing ultimate reality is unknowable"
                },
                {
                  "word": "equanimity",
                  "root": "EQU+ANIM+ITY",
                  "note": "Critical contrast: Mental composure and calmness under stress"
                },
                {
                  "word": "prescient",
                  "root": "PRE+SCI+ENT",
                  "note": "Strategic ideal: Having foresight, knowing beforehand"
                },
                {
                  "word": "pusillanimous",
                  "root": "PUSILL+ANIM+OUS",
                  "note": "Pitfall/Critique: Cowardly, lacking courage and resolution"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-3-1-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **agnostic** in intent but **pusillanimous** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (believing ultimate reality is unknowable), but bungled the execution in a flawed manner (cowardly, lacking courage and resolution).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Agnostic = Believing ultimate reality is unknowable.",
                "Break down: Pusillanimous = Cowardly, lacking courage and resolution.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "AGNOSTIC (Believing ultimate reality is unknowable) denotes good intent, while PUSILLANIMOUS (Cowardly, lacking courage and resolution) critiques flawed execution."
            },
            {
              "id": "q-3-1-2",
              "prompt": "Which word from this lesson signifies 'Having awareness or knowledge of something'?",
              "options": [
                "Equanimity",
                "Cognizant",
                "Magnanimous",
                "Prescient"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root GNO / GNI / SCI.",
                "Breakdown: COG+GNI+ZANT."
              ],
              "explanation": "COGNIZANT (COG+GNI+ZANT) means Having awareness or knowledge of something."
            },
            {
              "id": "q-3-1-3",
              "prompt": "If an essay claims that an opponent's defense is '**equanimity**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being mental composure and calmness under stress.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Equanimity.",
                "Meaning: Mental composure and calmness under stress."
              ],
              "explanation": "EQUANIMITY (EQU+ANIM+ITY) means Mental composure and calmness under stress."
            },
            {
              "id": "q-3-1-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Agnostic vs Equanimity",
                "Agnostic vs Prescient",
                "Equanimity vs Pusillanimous",
                "Cognizant vs Omniscient"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast GNO / GNI / SCI with ANIM.",
                "Agnostic vs Equanimity."
              ],
              "explanation": "Agnostic (GNO / GNI / SCI) directly contrasts with Equanimity (ANIM)."
            }
          ]
        },
        {
          "id": "les-3-2",
          "lessonNumber": 2,
          "title": "Feeling & Suffering: PATH/PASS vs SENT/SENS",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Feeling & Suffering: PATH/PASS vs SENT/SENS",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between PATH / PASS and SENT / SENS provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "PATH / PASS represents foundational root concepts, while SENT / SENS establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: PATH / PASS",
              "origin": "High-Yield Greek/Latin Root Family (PATH / PASS)",
              "coreMeaning": "Lack of interest, enthusiasm, or concern; total indifference",
              "derivatives": [
                {
                  "word": "Apathy",
                  "breakdown": "A+PATH+Y",
                  "def": "Lack of interest, enthusiasm, or concern; total indifference",
                  "catContext": "The author evaluates the historical implications of apathy in institutional policymaking."
                },
                {
                  "word": "Antipathy",
                  "breakdown": "ANTI+PATH+Y",
                  "def": "Deep-seated feeling of active aversion or dislike",
                  "catContext": "The author evaluates the historical implications of antipathy in institutional policymaking."
                },
                {
                  "word": "Impassive",
                  "breakdown": "IM+PASS+IVE",
                  "def": "Not feeling or showing emotion; calm and expressionless",
                  "catContext": "The author evaluates the historical implications of impassive in institutional policymaking."
                },
                {
                  "word": "Empathy",
                  "breakdown": "EN+PATH+Y",
                  "def": "Ability to understand and share the feelings of another",
                  "catContext": "The author evaluates the historical implications of empathy in institutional policymaking."
                },
                {
                  "word": "Pathos",
                  "breakdown": "PATH+OS",
                  "def": "Quality that evokes pity or sadness",
                  "catContext": "The author evaluates the historical implications of pathos in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: SENT / SENS",
              "origin": "High-Yield Greek/Latin Root Family (SENT / SENS)",
              "coreMeaning": "Able to perceive or feel things; conscious",
              "derivatives": [
                {
                  "word": "Sentient",
                  "breakdown": "SENT+IENT",
                  "def": "Able to perceive or feel things; conscious",
                  "catContext": "Critics questioned whether the initiative was merely sentient rather than a sustainable structural reform."
                },
                {
                  "word": "Dissension",
                  "breakdown": "DIS+SENT+ION",
                  "def": "Disagreement leading to discord within a group",
                  "catContext": "Critics questioned whether the initiative was merely dissension rather than a sustainable structural reform."
                },
                {
                  "word": "Presentiment",
                  "breakdown": "PRE+SENT+MENT",
                  "def": "Intuitive feeling of impending misfortune",
                  "catContext": "Critics questioned whether the initiative was merely presentiment rather than a sustainable structural reform."
                },
                {
                  "word": "Consent",
                  "breakdown": "CON+SENT",
                  "def": "Permission or agreement for something to happen",
                  "catContext": "Critics questioned whether the initiative was merely consent rather than a sustainable structural reform."
                },
                {
                  "word": "Sensory",
                  "breakdown": "SENS+ORY",
                  "def": "Relating to sensation or the physical senses",
                  "catContext": "Critics questioned whether the initiative was merely sensory rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Apathy (Lack of interest, enthusiasm, or concern; total indifference)",
                  "negative": "Sentient (Able to perceive or feel things; conscious)",
                  "rootKey": "A+PATH+Y vs SENT+IENT"
                },
                {
                  "positive": "Antipathy (Deep-seated feeling of active aversion or dislike)",
                  "negative": "Dissension (Disagreement leading to discord within a group)",
                  "rootKey": "ANTI+PATH+Y vs DIS+SENT+ION"
                },
                {
                  "positive": "Impassive (Not feeling or showing emotion; calm and expressionless)",
                  "negative": "Presentiment (Intuitive feeling of impending misfortune)",
                  "rootKey": "IM+PASS+IVE vs PRE+SENT+MENT"
                },
                {
                  "positive": "Empathy (Ability to understand and share the feelings of another)",
                  "negative": "Consent (Permission or agreement for something to happen)",
                  "rootKey": "EN+PATH+Y vs CON+SENT"
                },
                {
                  "positive": "Pathos (Quality that evokes pity or sadness)",
                  "negative": "Sensory (Relating to sensation or the physical senses)",
                  "rootKey": "PATH+OS vs SENS+ORY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **apathy** nature of theoretical models with the **sentient** reality of human behavior. While proponents emphasize the **antipathy** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **dissension** consequences.",
              "highlights": [
                {
                  "word": "apathy",
                  "root": "A+PATH+Y",
                  "note": "Key concept: Lack of interest, enthusiasm, or concern; total indifference"
                },
                {
                  "word": "sentient",
                  "root": "SENT+IENT",
                  "note": "Critical contrast: Able to perceive or feel things; conscious"
                },
                {
                  "word": "antipathy",
                  "root": "ANTI+PATH+Y",
                  "note": "Strategic ideal: Deep-seated feeling of active aversion or dislike"
                },
                {
                  "word": "dissension",
                  "root": "DIS+SENT+ION",
                  "note": "Pitfall/Critique: Disagreement leading to discord within a group"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-3-2-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **apathy** in intent but **dissension** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (lack of interest, enthusiasm, or concern; total indifference), but bungled the execution in a flawed manner (disagreement leading to discord within a group).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Apathy = Lack of interest, enthusiasm, or concern; total indifference.",
                "Break down: Dissension = Disagreement leading to discord within a group.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "APATHY (Lack of interest, enthusiasm, or concern; total indifference) denotes good intent, while DISSENSION (Disagreement leading to discord within a group) critiques flawed execution."
            },
            {
              "id": "q-3-2-2",
              "prompt": "Which word from this lesson signifies 'Not feeling or showing emotion; calm and expressionless'?",
              "options": [
                "Sentient",
                "Impassive",
                "Presentiment",
                "Antipathy"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root PATH / PASS.",
                "Breakdown: IM+PASS+IVE."
              ],
              "explanation": "IMPASSIVE (IM+PASS+IVE) means Not feeling or showing emotion; calm and expressionless."
            },
            {
              "id": "q-3-2-3",
              "prompt": "If an essay claims that an opponent's defense is '**sentient**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being able to perceive or feel things; conscious.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Sentient.",
                "Meaning: Able to perceive or feel things; conscious."
              ],
              "explanation": "SENTIENT (SENT+IENT) means Able to perceive or feel things; conscious."
            },
            {
              "id": "q-3-2-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Apathy vs Sentient",
                "Apathy vs Antipathy",
                "Sentient vs Dissension",
                "Impassive vs Empathy"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast PATH / PASS with SENT / SENS.",
                "Apathy vs Sentient."
              ],
              "explanation": "Apathy (PATH / PASS) directly contrasts with Sentient (SENT / SENS)."
            }
          ]
        },
        {
          "id": "les-3-3",
          "lessonNumber": 3,
          "title": "Memory & Oblivion: MEM/MNEM vs OBLIV",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Memory & Oblivion: MEM/MNEM vs OBLIV",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between MEM / MNEM and OBLIV / LETHE provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "MEM / MNEM represents foundational root concepts, while OBLIV / LETHE establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: MEM / MNEM",
              "origin": "High-Yield Greek/Latin Root Family (MEM / MNEM)",
              "coreMeaning": "Device or pattern assisting memory",
              "derivatives": [
                {
                  "word": "Mnemonic",
                  "breakdown": "MNEM+IC",
                  "def": "Device or pattern assisting memory",
                  "catContext": "The author evaluates the historical implications of mnemonic in institutional policymaking."
                },
                {
                  "word": "Commemorate",
                  "breakdown": "COM+MEM+ATE",
                  "def": "Recall and show respect for in ceremony",
                  "catContext": "The author evaluates the historical implications of commemorate in institutional policymaking."
                },
                {
                  "word": "Amnesia",
                  "breakdown": "A+MNES+IA",
                  "def": "Partial or total loss of memory",
                  "catContext": "The author evaluates the historical implications of amnesia in institutional policymaking."
                },
                {
                  "word": "Memoir",
                  "breakdown": "MEM+OIR",
                  "def": "Historical account written from personal knowledge",
                  "catContext": "The author evaluates the historical implications of memoir in institutional policymaking."
                },
                {
                  "word": "Memorable",
                  "breakdown": "MEM+OR+ABLE",
                  "def": "Worth remembering, easily remembered",
                  "catContext": "The author evaluates the historical implications of memorable in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: OBLIV / LETHE",
              "origin": "High-Yield Greek/Latin Root Family (OBLIV / LETHE)",
              "coreMeaning": "Not aware of or concerned about surroundings",
              "derivatives": [
                {
                  "word": "Oblivious",
                  "breakdown": "OBLIV+IOUS",
                  "def": "Not aware of or concerned about surroundings",
                  "catContext": "Critics questioned whether the initiative was merely oblivious rather than a sustainable structural reform."
                },
                {
                  "word": "Oblivion",
                  "breakdown": "OBLIV+ION",
                  "def": "State of being forgotten or extinguished from history",
                  "catContext": "Critics questioned whether the initiative was merely oblivion rather than a sustainable structural reform."
                },
                {
                  "word": "Lethargic",
                  "breakdown": "LETHE+ARGOS",
                  "def": "Sluggish, apathetic, lacking energy and awareness",
                  "catContext": "Critics questioned whether the initiative was merely lethargic rather than a sustainable structural reform."
                },
                {
                  "word": "Lethe",
                  "breakdown": "LETHE",
                  "def": "River of forgetfulness in Greek mythology",
                  "catContext": "Critics questioned whether the initiative was merely lethe rather than a sustainable structural reform."
                },
                {
                  "word": "Obliterate",
                  "breakdown": "OB+LITERA+ATE",
                  "def": "Destroy utterly, wipe out from existence",
                  "catContext": "Critics questioned whether the initiative was merely obliterate rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Mnemonic (Device or pattern assisting memory)",
                  "negative": "Oblivious (Not aware of or concerned about surroundings)",
                  "rootKey": "MNEM+IC vs OBLIV+IOUS"
                },
                {
                  "positive": "Commemorate (Recall and show respect for in ceremony)",
                  "negative": "Oblivion (State of being forgotten or extinguished from history)",
                  "rootKey": "COM+MEM+ATE vs OBLIV+ION"
                },
                {
                  "positive": "Amnesia (Partial or total loss of memory)",
                  "negative": "Lethargic (Sluggish, apathetic, lacking energy and awareness)",
                  "rootKey": "A+MNES+IA vs LETHE+ARGOS"
                },
                {
                  "positive": "Memoir (Historical account written from personal knowledge)",
                  "negative": "Lethe (River of forgetfulness in Greek mythology)",
                  "rootKey": "MEM+OIR vs LETHE"
                },
                {
                  "positive": "Memorable (Worth remembering, easily remembered)",
                  "negative": "Obliterate (Destroy utterly, wipe out from existence)",
                  "rootKey": "MEM+OR+ABLE vs OB+LITERA+ATE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **mnemonic** nature of theoretical models with the **oblivious** reality of human behavior. While proponents emphasize the **commemorate** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **oblivion** consequences.",
              "highlights": [
                {
                  "word": "mnemonic",
                  "root": "MNEM+IC",
                  "note": "Key concept: Device or pattern assisting memory"
                },
                {
                  "word": "oblivious",
                  "root": "OBLIV+IOUS",
                  "note": "Critical contrast: Not aware of or concerned about surroundings"
                },
                {
                  "word": "commemorate",
                  "root": "COM+MEM+ATE",
                  "note": "Strategic ideal: Recall and show respect for in ceremony"
                },
                {
                  "word": "oblivion",
                  "root": "OBLIV+ION",
                  "note": "Pitfall/Critique: State of being forgotten or extinguished from history"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-3-3-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **mnemonic** in intent but **oblivion** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (device or pattern assisting memory), but bungled the execution in a flawed manner (state of being forgotten or extinguished from history).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Mnemonic = Device or pattern assisting memory.",
                "Break down: Oblivion = State of being forgotten or extinguished from history.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "MNEMONIC (Device or pattern assisting memory) denotes good intent, while OBLIVION (State of being forgotten or extinguished from history) critiques flawed execution."
            },
            {
              "id": "q-3-3-2",
              "prompt": "Which word from this lesson signifies 'Partial or total loss of memory'?",
              "options": [
                "Oblivious",
                "Amnesia",
                "Lethargic",
                "Commemorate"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root MEM / MNEM.",
                "Breakdown: A+MNES+IA."
              ],
              "explanation": "AMNESIA (A+MNES+IA) means Partial or total loss of memory."
            },
            {
              "id": "q-3-3-3",
              "prompt": "If an essay claims that an opponent's defense is '**oblivious**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being not aware of or concerned about surroundings.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Oblivious.",
                "Meaning: Not aware of or concerned about surroundings."
              ],
              "explanation": "OBLIVIOUS (OBLIV+IOUS) means Not aware of or concerned about surroundings."
            },
            {
              "id": "q-3-3-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Mnemonic vs Oblivious",
                "Mnemonic vs Commemorate",
                "Oblivious vs Oblivion",
                "Amnesia vs Memoir"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast MEM / MNEM with OBLIV / LETHE.",
                "Mnemonic vs Oblivious."
              ],
              "explanation": "Mnemonic (MEM / MNEM) directly contrasts with Oblivious (OBLIV / LETHE)."
            }
          ]
        },
        {
          "id": "les-3-4",
          "lessonNumber": 4,
          "title": "Belief, Dogma & Skepticism: CRED vs DOG/DOX",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Belief, Dogma & Skepticism: CRED vs DOG/DOX",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between CRED / CREED and DOG / DOX provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "CRED / CREED represents foundational root concepts, while DOG / DOX establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: CRED / CREED",
              "origin": "High-Yield Greek/Latin Root Family (CRED / CREED)",
              "coreMeaning": "Too ready to believe things; gullible",
              "derivatives": [
                {
                  "word": "Credulous",
                  "breakdown": "CRED+ULOUS",
                  "def": "Too ready to believe things; gullible",
                  "catContext": "The author evaluates the historical implications of credulous in institutional policymaking."
                },
                {
                  "word": "Incredulous",
                  "breakdown": "IN+CRED+ULOUS",
                  "def": "Unwilling to believe; skeptical",
                  "catContext": "The author evaluates the historical implications of incredulous in institutional policymaking."
                },
                {
                  "word": "Credence",
                  "breakdown": "CRED+ENCE",
                  "def": "Belief in or acceptance of something as true",
                  "catContext": "The author evaluates the historical implications of credence in institutional policymaking."
                },
                {
                  "word": "Credible",
                  "breakdown": "CRED+IBLE",
                  "def": "Able to be believed; convincing",
                  "catContext": "The author evaluates the historical implications of credible in institutional policymaking."
                },
                {
                  "word": "Creed",
                  "breakdown": "CREED",
                  "def": "System of beliefs or principles",
                  "catContext": "The author evaluates the historical implications of creed in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: DOG / DOX",
              "origin": "High-Yield Greek/Latin Root Family (DOG / DOX)",
              "coreMeaning": "Laying down principles as incontrovertibly true without evidence",
              "derivatives": [
                {
                  "word": "Dogmatic",
                  "breakdown": "DOGMA+TIC",
                  "def": "Laying down principles as incontrovertibly true without evidence",
                  "catContext": "Critics questioned whether the initiative was merely dogmatic rather than a sustainable structural reform."
                },
                {
                  "word": "Orthodox",
                  "breakdown": "ORTHO+DOX",
                  "def": "Conforming to traditionally accepted standards",
                  "catContext": "Critics questioned whether the initiative was merely orthodox rather than a sustainable structural reform."
                },
                {
                  "word": "Heterodox",
                  "breakdown": "HETERO+DOX",
                  "def": "Holding unconventional, non-standard views",
                  "catContext": "Critics questioned whether the initiative was merely heterodox rather than a sustainable structural reform."
                },
                {
                  "word": "Paradox",
                  "breakdown": "PARA+DOX",
                  "def": "Seemingly absurd statement that may be true",
                  "catContext": "Critics questioned whether the initiative was merely paradox rather than a sustainable structural reform."
                },
                {
                  "word": "Doxology",
                  "breakdown": "DOX+OLOGY",
                  "def": "Liturgical formula of praise",
                  "catContext": "Critics questioned whether the initiative was merely doxology rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Credulous (Too ready to believe things; gullible)",
                  "negative": "Dogmatic (Laying down principles as incontrovertibly true without evidence)",
                  "rootKey": "CRED+ULOUS vs DOGMA+TIC"
                },
                {
                  "positive": "Incredulous (Unwilling to believe; skeptical)",
                  "negative": "Orthodox (Conforming to traditionally accepted standards)",
                  "rootKey": "IN+CRED+ULOUS vs ORTHO+DOX"
                },
                {
                  "positive": "Credence (Belief in or acceptance of something as true)",
                  "negative": "Heterodox (Holding unconventional, non-standard views)",
                  "rootKey": "CRED+ENCE vs HETERO+DOX"
                },
                {
                  "positive": "Credible (Able to be believed; convincing)",
                  "negative": "Paradox (Seemingly absurd statement that may be true)",
                  "rootKey": "CRED+IBLE vs PARA+DOX"
                },
                {
                  "positive": "Creed (System of beliefs or principles)",
                  "negative": "Doxology (Liturgical formula of praise)",
                  "rootKey": "CREED vs DOX+OLOGY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **credulous** nature of theoretical models with the **dogmatic** reality of human behavior. While proponents emphasize the **incredulous** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **orthodox** consequences.",
              "highlights": [
                {
                  "word": "credulous",
                  "root": "CRED+ULOUS",
                  "note": "Key concept: Too ready to believe things; gullible"
                },
                {
                  "word": "dogmatic",
                  "root": "DOGMA+TIC",
                  "note": "Critical contrast: Laying down principles as incontrovertibly true without evidence"
                },
                {
                  "word": "incredulous",
                  "root": "IN+CRED+ULOUS",
                  "note": "Strategic ideal: Unwilling to believe; skeptical"
                },
                {
                  "word": "orthodox",
                  "root": "ORTHO+DOX",
                  "note": "Pitfall/Critique: Conforming to traditionally accepted standards"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-3-4-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **credulous** in intent but **orthodox** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (too ready to believe things; gullible), but bungled the execution in a flawed manner (conforming to traditionally accepted standards).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Credulous = Too ready to believe things; gullible.",
                "Break down: Orthodox = Conforming to traditionally accepted standards.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "CREDULOUS (Too ready to believe things; gullible) denotes good intent, while ORTHODOX (Conforming to traditionally accepted standards) critiques flawed execution."
            },
            {
              "id": "q-3-4-2",
              "prompt": "Which word from this lesson signifies 'Belief in or acceptance of something as true'?",
              "options": [
                "Dogmatic",
                "Credence",
                "Heterodox",
                "Incredulous"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root CRED / CREED.",
                "Breakdown: CRED+ENCE."
              ],
              "explanation": "CREDENCE (CRED+ENCE) means Belief in or acceptance of something as true."
            },
            {
              "id": "q-3-4-3",
              "prompt": "If an essay claims that an opponent's defense is '**dogmatic**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being laying down principles as incontrovertibly true without evidence.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Dogmatic.",
                "Meaning: Laying down principles as incontrovertibly true without evidence."
              ],
              "explanation": "DOGMATIC (DOGMA+TIC) means Laying down principles as incontrovertibly true without evidence."
            },
            {
              "id": "q-3-4-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Credulous vs Dogmatic",
                "Credulous vs Incredulous",
                "Dogmatic vs Orthodox",
                "Credence vs Credible"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast CRED / CREED with DOG / DOX.",
                "Credulous vs Dogmatic."
              ],
              "explanation": "Credulous (CRED / CREED) directly contrasts with Dogmatic (DOG / DOX)."
            }
          ]
        },
        {
          "id": "les-3-5",
          "lessonNumber": 5,
          "title": "Will & Cognition: VOL vs COG/COGIT",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Will & Cognition: VOL vs COG/COGIT",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between VOL / VEL and COG / COGIT provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "VOL / VEL represents foundational root concepts, while COG / COGIT establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: VOL / VEL",
              "origin": "High-Yield Greek/Latin Root Family (VOL / VEL)",
              "coreMeaning": "Power of using one's will; conscious choice",
              "derivatives": [
                {
                  "word": "Volition",
                  "breakdown": "VOL+ITION",
                  "def": "Power of using one's will; conscious choice",
                  "catContext": "The author evaluates the historical implications of volition in institutional policymaking."
                },
                {
                  "word": "Benevolence",
                  "breakdown": "BENE+VOL+ENCE",
                  "def": "Quality of well-wishing and kindness",
                  "catContext": "The author evaluates the historical implications of benevolence in institutional policymaking."
                },
                {
                  "word": "Malevolence",
                  "breakdown": "MALE+VOL+ENCE",
                  "def": "State of wishing evil to others",
                  "catContext": "The author evaluates the historical implications of malevolence in institutional policymaking."
                },
                {
                  "word": "Voluntary",
                  "breakdown": "VOL+UNTARY",
                  "def": "Done or given of one's own free will",
                  "catContext": "The author evaluates the historical implications of voluntary in institutional policymaking."
                },
                {
                  "word": "Involuntary",
                  "breakdown": "IN+VOLUNTARY",
                  "def": "Done without will or conscious control",
                  "catContext": "The author evaluates the historical implications of involuntary in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: COG / COGIT",
              "origin": "High-Yield Greek/Latin Root Family (COG / COGIT)",
              "coreMeaning": "Clear, logical, and convincing argument",
              "derivatives": [
                {
                  "word": "Cogent",
                  "breakdown": "COG+ENT",
                  "def": "Clear, logical, and convincing argument",
                  "catContext": "Critics questioned whether the initiative was merely cogent rather than a sustainable structural reform."
                },
                {
                  "word": "Cogitate",
                  "breakdown": "COGIT+ATE",
                  "def": "Think deeply about something; ponder",
                  "catContext": "Critics questioned whether the initiative was merely cogitate rather than a sustainable structural reform."
                },
                {
                  "word": "Excogitate",
                  "breakdown": "EX+COGIT+ATE",
                  "def": "Think out, devise, or invent by mental effort",
                  "catContext": "Critics questioned whether the initiative was merely excogitate rather than a sustainable structural reform."
                },
                {
                  "word": "Cognition",
                  "breakdown": "COG+NITION",
                  "def": "Mental action of acquiring knowledge",
                  "catContext": "Critics questioned whether the initiative was merely cognition rather than a sustainable structural reform."
                },
                {
                  "word": "Incogitant",
                  "breakdown": "IN+COGIT+ANT",
                  "def": "Thoughtless, unthinking, inconsiderate",
                  "catContext": "Critics questioned whether the initiative was merely incogitant rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Volition (Power of using one's will; conscious choice)",
                  "negative": "Cogent (Clear, logical, and convincing argument)",
                  "rootKey": "VOL+ITION vs COG+ENT"
                },
                {
                  "positive": "Benevolence (Quality of well-wishing and kindness)",
                  "negative": "Cogitate (Think deeply about something; ponder)",
                  "rootKey": "BENE+VOL+ENCE vs COGIT+ATE"
                },
                {
                  "positive": "Malevolence (State of wishing evil to others)",
                  "negative": "Excogitate (Think out, devise, or invent by mental effort)",
                  "rootKey": "MALE+VOL+ENCE vs EX+COGIT+ATE"
                },
                {
                  "positive": "Voluntary (Done or given of one's own free will)",
                  "negative": "Cognition (Mental action of acquiring knowledge)",
                  "rootKey": "VOL+UNTARY vs COG+NITION"
                },
                {
                  "positive": "Involuntary (Done without will or conscious control)",
                  "negative": "Incogitant (Thoughtless, unthinking, inconsiderate)",
                  "rootKey": "IN+VOLUNTARY vs IN+COGIT+ANT"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **volition** nature of theoretical models with the **cogent** reality of human behavior. While proponents emphasize the **benevolence** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **cogitate** consequences.",
              "highlights": [
                {
                  "word": "volition",
                  "root": "VOL+ITION",
                  "note": "Key concept: Power of using one's will; conscious choice"
                },
                {
                  "word": "cogent",
                  "root": "COG+ENT",
                  "note": "Critical contrast: Clear, logical, and convincing argument"
                },
                {
                  "word": "benevolence",
                  "root": "BENE+VOL+ENCE",
                  "note": "Strategic ideal: Quality of well-wishing and kindness"
                },
                {
                  "word": "cogitate",
                  "root": "COGIT+ATE",
                  "note": "Pitfall/Critique: Think deeply about something; ponder"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-3-5-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **volition** in intent but **cogitate** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (power of using one's will; conscious choice), but bungled the execution in a flawed manner (think deeply about something; ponder).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Volition = Power of using one's will; conscious choice.",
                "Break down: Cogitate = Think deeply about something; ponder.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "VOLITION (Power of using one's will; conscious choice) denotes good intent, while COGITATE (Think deeply about something; ponder) critiques flawed execution."
            },
            {
              "id": "q-3-5-2",
              "prompt": "Which word from this lesson signifies 'State of wishing evil to others'?",
              "options": [
                "Cogent",
                "Malevolence",
                "Excogitate",
                "Benevolence"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root VOL / VEL.",
                "Breakdown: MALE+VOL+ENCE."
              ],
              "explanation": "MALEVOLENCE (MALE+VOL+ENCE) means State of wishing evil to others."
            },
            {
              "id": "q-3-5-3",
              "prompt": "If an essay claims that an opponent's defense is '**cogent**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being clear, logical, and convincing argument.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Cogent.",
                "Meaning: Clear, logical, and convincing argument."
              ],
              "explanation": "COGENT (COG+ENT) means Clear, logical, and convincing argument."
            },
            {
              "id": "q-3-5-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Volition vs Cogent",
                "Volition vs Benevolence",
                "Cogent vs Cogitate",
                "Malevolence vs Voluntary"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast VOL / VEL with COG / COGIT.",
                "Volition vs Cogent."
              ],
              "explanation": "Volition (VOL / VEL) directly contrasts with Cogent (COG / COGIT)."
            }
          ]
        },
        {
          "id": "les-3-6",
          "lessonNumber": 6,
          "title": "Perception & Introspection: SPEC/SPIC vs INTUIT/TAC",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Perception & Introspection: SPEC/SPIC vs INTUIT/TAC",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between SPEC / SPIC and INTUIT / TAC provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "SPEC / SPIC represents foundational root concepts, while INTUIT / TAC establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: SPEC / SPIC",
              "origin": "High-Yield Greek/Latin Root Family (SPEC / SPIC)",
              "coreMeaning": "Having ready insight into things; shrewd",
              "derivatives": [
                {
                  "word": "Perspicacious",
                  "breakdown": "PER+SPIC+ACIOUS",
                  "def": "Having ready insight into things; shrewd",
                  "catContext": "The author evaluates the historical implications of perspicacious in institutional policymaking."
                },
                {
                  "word": "Circumspect",
                  "breakdown": "CIRCUM+SPECT",
                  "def": "Wary and unwilling to take risks; cautious",
                  "catContext": "The author evaluates the historical implications of circumspect in institutional policymaking."
                },
                {
                  "word": "Specious",
                  "breakdown": "SPEC+IOUS",
                  "def": "Misleading; looking good on surface but false",
                  "catContext": "The author evaluates the historical implications of specious in institutional policymaking."
                },
                {
                  "word": "Spectator",
                  "breakdown": "SPECT+ATOR",
                  "def": "Person who watches or observes",
                  "catContext": "The author evaluates the historical implications of spectator in institutional policymaking."
                },
                {
                  "word": "Introspection",
                  "breakdown": "INTRO+SPECT+ION",
                  "def": "Examination of one's own conscious thoughts",
                  "catContext": "The author evaluates the historical implications of introspection in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: INTUIT / TAC",
              "origin": "High-Yield Greek/Latin Root Family (INTUIT / TAC)",
              "coreMeaning": "Understood or implied without being stated aloud",
              "derivatives": [
                {
                  "word": "Tacit",
                  "breakdown": "TAC+IT",
                  "def": "Understood or implied without being stated aloud",
                  "catContext": "Critics questioned whether the initiative was merely tacit rather than a sustainable structural reform."
                },
                {
                  "word": "Taciturn",
                  "breakdown": "TACIT+URN",
                  "def": "Reserved or uncommunicative in speech",
                  "catContext": "Critics questioned whether the initiative was merely taciturn rather than a sustainable structural reform."
                },
                {
                  "word": "Intuition",
                  "breakdown": "IN+TUIT+ION",
                  "def": "Understanding instinctively without conscious reasoning",
                  "catContext": "Critics questioned whether the initiative was merely intuition rather than a sustainable structural reform."
                },
                {
                  "word": "Reticent",
                  "breakdown": "RE+TIC+ENT",
                  "def": "Not revealing one's thoughts or feelings readily",
                  "catContext": "Critics questioned whether the initiative was merely reticent rather than a sustainable structural reform."
                },
                {
                  "word": "Tacitly",
                  "breakdown": "TACIT+LY",
                  "def": "In a way that is understood without being spoken",
                  "catContext": "Critics questioned whether the initiative was merely tacitly rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Perspicacious (Having ready insight into things; shrewd)",
                  "negative": "Tacit (Understood or implied without being stated aloud)",
                  "rootKey": "PER+SPIC+ACIOUS vs TAC+IT"
                },
                {
                  "positive": "Circumspect (Wary and unwilling to take risks; cautious)",
                  "negative": "Taciturn (Reserved or uncommunicative in speech)",
                  "rootKey": "CIRCUM+SPECT vs TACIT+URN"
                },
                {
                  "positive": "Specious (Misleading; looking good on surface but false)",
                  "negative": "Intuition (Understanding instinctively without conscious reasoning)",
                  "rootKey": "SPEC+IOUS vs IN+TUIT+ION"
                },
                {
                  "positive": "Spectator (Person who watches or observes)",
                  "negative": "Reticent (Not revealing one's thoughts or feelings readily)",
                  "rootKey": "SPECT+ATOR vs RE+TIC+ENT"
                },
                {
                  "positive": "Introspection (Examination of one's own conscious thoughts)",
                  "negative": "Tacitly (In a way that is understood without being spoken)",
                  "rootKey": "INTRO+SPECT+ION vs TACIT+LY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **perspicacious** nature of theoretical models with the **tacit** reality of human behavior. While proponents emphasize the **circumspect** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **taciturn** consequences.",
              "highlights": [
                {
                  "word": "perspicacious",
                  "root": "PER+SPIC+ACIOUS",
                  "note": "Key concept: Having ready insight into things; shrewd"
                },
                {
                  "word": "tacit",
                  "root": "TAC+IT",
                  "note": "Critical contrast: Understood or implied without being stated aloud"
                },
                {
                  "word": "circumspect",
                  "root": "CIRCUM+SPECT",
                  "note": "Strategic ideal: Wary and unwilling to take risks; cautious"
                },
                {
                  "word": "taciturn",
                  "root": "TACIT+URN",
                  "note": "Pitfall/Critique: Reserved or uncommunicative in speech"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-3-6-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **perspicacious** in intent but **taciturn** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (having ready insight into things; shrewd), but bungled the execution in a flawed manner (reserved or uncommunicative in speech).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Perspicacious = Having ready insight into things; shrewd.",
                "Break down: Taciturn = Reserved or uncommunicative in speech.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "PERSPICACIOUS (Having ready insight into things; shrewd) denotes good intent, while TACITURN (Reserved or uncommunicative in speech) critiques flawed execution."
            },
            {
              "id": "q-3-6-2",
              "prompt": "Which word from this lesson signifies 'Misleading; looking good on surface but false'?",
              "options": [
                "Tacit",
                "Specious",
                "Intuition",
                "Circumspect"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root SPEC / SPIC.",
                "Breakdown: SPEC+IOUS."
              ],
              "explanation": "SPECIOUS (SPEC+IOUS) means Misleading; looking good on surface but false."
            },
            {
              "id": "q-3-6-3",
              "prompt": "If an essay claims that an opponent's defense is '**tacit**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being understood or implied without being stated aloud.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Tacit.",
                "Meaning: Understood or implied without being stated aloud."
              ],
              "explanation": "TACIT (TAC+IT) means Understood or implied without being stated aloud."
            },
            {
              "id": "q-3-6-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Perspicacious vs Tacit",
                "Perspicacious vs Circumspect",
                "Tacit vs Taciturn",
                "Specious vs Spectator"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast SPEC / SPIC with INTUIT / TAC.",
                "Perspicacious vs Tacit."
              ],
              "explanation": "Perspicacious (SPEC / SPIC) directly contrasts with Tacit (INTUIT / TAC)."
            }
          ]
        }
      ],
      "masteryQuiz": [
        {
          "id": "mq-3-1",
          "prompt": "In a Category 3 Reading Comprehension passage, how does the author contrast theoretical assertions with empirical reality?",
          "options": [
            "By contrasting idealized conceptual frameworks with the complex reality of human institutions.",
            "By adopting an uncritical, complacent attitude towards government policy.",
            "By expressing total agnostic indifference.",
            "By relying exclusively on circular tautologies."
          ],
          "correctIndex": 0,
          "explanation": "CAT passages typically set up an analytical tension between idealized theories and empirical ground realities."
        },
        {
          "id": "mq-3-2",
          "prompt": "Which term from Category 3 carries an overwhelmingly **positive** valence when used by an author?",
          "options": [
            "Agnostic",
            "Equanimity",
            "Sentient",
            "Oblivious"
          ],
          "correctIndex": 0,
          "explanation": "Agnostic carries a positive root connotation, whereas the other options are negative tone markers."
        },
        {
          "id": "mq-3-3",
          "prompt": "If an essay argues that an institution is guilty of '**dogmatic**', the author is:",
          "options": [
            "Praising the institution with enthusiastic plaudits.",
            "Criticizing the institution for laying down principles as incontrovertibly true without evidence.",
            "Declaring the institution legally solvent and exculpated.",
            "Taking an egalitarian stance."
          ],
          "correctIndex": 1,
          "explanation": "Dogmatic means Laying down principles as incontrovertibly true without evidence."
        },
        {
          "id": "mq-3-4",
          "prompt": "What is the underlying etymological root of **Mnemonic**?",
          "options": [
            "High-Yield Greek/Latin Root Family (MEM / MNEM)",
            "High-Yield Greek/Latin Root Family (OBLIV / LETHE)",
            "High-Yield Greek/Latin Root Family (COG / COGIT)",
            "High-Yield Greek/Latin Root Family (INTUIT / TAC)"
          ],
          "correctIndex": 0,
          "explanation": "Mnemonic is derived from High-Yield Greek/Latin Root Family (MEM / MNEM)."
        },
        {
          "id": "mq-3-5",
          "prompt": "An author describes a policy as '**volition** while warning against **cogent** consequences.' What is the author's tone?",
          "options": [
            "Judicious, balanced, and analytically rigorous in weighing benefits against pitfalls.",
            "Fiercely vitriolic and purely destructive.",
            "Apathetic, bored, and disengaged.",
            "Laudatory and uncritical."
          ],
          "correctIndex": 0,
          "explanation": "Balancing positive qualities with cautions against negative pitfalls indicates a judicious and analytically rigorous tone."
        },
        {
          "id": "mq-3-6",
          "prompt": "Which of the following distinguishes the core concept of Lesson 3.1 from Lesson 3.6 in this category?",
          "options": [
            "Lesson 3.1 focuses on foundational valences (Knowing & Foresight: GNO/SCI vs ANIM), while Lesson 3.6 develops specialized applications (Perception & Introspection: SPEC/SPIC vs INTUIT/TAC).",
            "They are identical lessons repeated twice.",
            "Lesson 6 is purely historical with zero relevance to modern CAT reading.",
            "Lesson 1 is only for grammar error identification."
          ],
          "correctIndex": 0,
          "explanation": "The curriculum progresses systematically from foundational concepts (Knowing & Foresight: GNO/SCI vs ANIM) to advanced critical frameworks (Perception & Introspection: SPEC/SPIC vs INTUIT/TAC)."
        }
      ]
    },
    {
      "id": "cat-4",
      "number": 4,
      "title": "Power, Governance & Social Dynamics",
      "tagline": "Dissect political theory, institutional economics, justice, and social contracts.",
      "icon": "scale",
      "color": "from-purple-500/20 to-violet-500/20 border-purple-500/30",
      "accent": "text-purple-400",
      "lessons": [
        {
          "id": "les-4-1",
          "lessonNumber": 1,
          "title": "Rulers & Hierarchies: CRAC/CRAT vs ARCH/ARCHY",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Rulers & Hierarchies: CRAC/CRAT vs ARCH/ARCHY",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between CRAC / CRAT and ARCH / ARCHY provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "CRAC / CRAT represents foundational root concepts, while ARCH / ARCHY establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: CRAC / CRAT",
              "origin": "High-Yield Greek/Latin Root Family (CRAC / CRAT)",
              "coreMeaning": "Society ruled or dominated by the wealthy",
              "derivatives": [
                {
                  "word": "Plutocracy",
                  "breakdown": "PLUTO+CRACY",
                  "def": "Society ruled or dominated by the wealthy",
                  "catContext": "The author evaluates the historical implications of plutocracy in institutional policymaking."
                },
                {
                  "word": "Autocrat",
                  "breakdown": "AUTO+CRAT",
                  "def": "Ruler who has absolute, unchecked power",
                  "catContext": "The author evaluates the historical implications of autocrat in institutional policymaking."
                },
                {
                  "word": "Technocracy",
                  "breakdown": "TECHNO+CRACY",
                  "def": "Government by technical experts and engineers",
                  "catContext": "The author evaluates the historical implications of technocracy in institutional policymaking."
                },
                {
                  "word": "Democracy",
                  "breakdown": "DEMO+CRACY",
                  "def": "Government by the whole population",
                  "catContext": "The author evaluates the historical implications of democracy in institutional policymaking."
                },
                {
                  "word": "Aristocracy",
                  "breakdown": "ARISTO+CRACY",
                  "def": "Highest class in society, hereditary nobility",
                  "catContext": "The author evaluates the historical implications of aristocracy in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: ARCH / ARCHY",
              "origin": "High-Yield Greek/Latin Root Family (ARCH / ARCHY)",
              "coreMeaning": "State of disorder due to absence of authority",
              "derivatives": [
                {
                  "word": "Anarchy",
                  "breakdown": "AN+ARCHY",
                  "def": "State of disorder due to absence of authority",
                  "catContext": "Critics questioned whether the initiative was merely anarchy rather than a sustainable structural reform."
                },
                {
                  "word": "Oligarchy",
                  "breakdown": "OLIG+ARCHY",
                  "def": "Small group having control of a country",
                  "catContext": "Critics questioned whether the initiative was merely oligarchy rather than a sustainable structural reform."
                },
                {
                  "word": "Hierarchy",
                  "breakdown": "HIER+ARCHY",
                  "def": "System ranked according to relative status",
                  "catContext": "Critics questioned whether the initiative was merely hierarchy rather than a sustainable structural reform."
                },
                {
                  "word": "Monarch",
                  "breakdown": "MONO+ARCH",
                  "def": "Sovereign head of state, king/queen",
                  "catContext": "Critics questioned whether the initiative was merely monarch rather than a sustainable structural reform."
                },
                {
                  "word": "Patriarchy",
                  "breakdown": "PATRI+ARCHY",
                  "def": "System where men hold primary power",
                  "catContext": "Critics questioned whether the initiative was merely patriarchy rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Plutocracy (Society ruled or dominated by the wealthy)",
                  "negative": "Anarchy (State of disorder due to absence of authority)",
                  "rootKey": "PLUTO+CRACY vs AN+ARCHY"
                },
                {
                  "positive": "Autocrat (Ruler who has absolute, unchecked power)",
                  "negative": "Oligarchy (Small group having control of a country)",
                  "rootKey": "AUTO+CRAT vs OLIG+ARCHY"
                },
                {
                  "positive": "Technocracy (Government by technical experts and engineers)",
                  "negative": "Hierarchy (System ranked according to relative status)",
                  "rootKey": "TECHNO+CRACY vs HIER+ARCHY"
                },
                {
                  "positive": "Democracy (Government by the whole population)",
                  "negative": "Monarch (Sovereign head of state, king/queen)",
                  "rootKey": "DEMO+CRACY vs MONO+ARCH"
                },
                {
                  "positive": "Aristocracy (Highest class in society, hereditary nobility)",
                  "negative": "Patriarchy (System where men hold primary power)",
                  "rootKey": "ARISTO+CRACY vs PATRI+ARCHY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **plutocracy** nature of theoretical models with the **anarchy** reality of human behavior. While proponents emphasize the **autocrat** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **oligarchy** consequences.",
              "highlights": [
                {
                  "word": "plutocracy",
                  "root": "PLUTO+CRACY",
                  "note": "Key concept: Society ruled or dominated by the wealthy"
                },
                {
                  "word": "anarchy",
                  "root": "AN+ARCHY",
                  "note": "Critical contrast: State of disorder due to absence of authority"
                },
                {
                  "word": "autocrat",
                  "root": "AUTO+CRAT",
                  "note": "Strategic ideal: Ruler who has absolute, unchecked power"
                },
                {
                  "word": "oligarchy",
                  "root": "OLIG+ARCHY",
                  "note": "Pitfall/Critique: Small group having control of a country"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-4-1-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **plutocracy** in intent but **oligarchy** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (society ruled or dominated by the wealthy), but bungled the execution in a flawed manner (small group having control of a country).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Plutocracy = Society ruled or dominated by the wealthy.",
                "Break down: Oligarchy = Small group having control of a country.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "PLUTOCRACY (Society ruled or dominated by the wealthy) denotes good intent, while OLIGARCHY (Small group having control of a country) critiques flawed execution."
            },
            {
              "id": "q-4-1-2",
              "prompt": "Which word from this lesson signifies 'Government by technical experts and engineers'?",
              "options": [
                "Anarchy",
                "Technocracy",
                "Hierarchy",
                "Autocrat"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root CRAC / CRAT.",
                "Breakdown: TECHNO+CRACY."
              ],
              "explanation": "TECHNOCRACY (TECHNO+CRACY) means Government by technical experts and engineers."
            },
            {
              "id": "q-4-1-3",
              "prompt": "If an essay claims that an opponent's defense is '**anarchy**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being state of disorder due to absence of authority.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Anarchy.",
                "Meaning: State of disorder due to absence of authority."
              ],
              "explanation": "ANARCHY (AN+ARCHY) means State of disorder due to absence of authority."
            },
            {
              "id": "q-4-1-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Plutocracy vs Anarchy",
                "Plutocracy vs Autocrat",
                "Anarchy vs Oligarchy",
                "Technocracy vs Democracy"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast CRAC / CRAT with ARCH / ARCHY.",
                "Plutocracy vs Anarchy."
              ],
              "explanation": "Plutocracy (CRAC / CRAT) directly contrasts with Anarchy (ARCH / ARCHY)."
            }
          ]
        },
        {
          "id": "les-4-2",
          "lessonNumber": 2,
          "title": "Fairness & Law: EQU/EGAL vs JUR/JUD",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Fairness & Law: EQU/EGAL vs JUR/JUD",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between EQU / EGAL and JUR / JUD / JUS provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "EQU / EGAL represents foundational root concepts, while JUR / JUD / JUS establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: EQU / EGAL",
              "origin": "High-Yield Greek/Latin Root Family (EQU / EGAL)",
              "coreMeaning": "Believing all people are equal and deserve equal rights",
              "derivatives": [
                {
                  "word": "Egalitarian",
                  "breakdown": "EGAL+ITARIAN",
                  "def": "Believing all people are equal and deserve equal rights",
                  "catContext": "The author evaluates the historical implications of egalitarian in institutional policymaking."
                },
                {
                  "word": "Equitable",
                  "breakdown": "EQU+ITABLE",
                  "def": "Fair and impartial; dealing justly with all",
                  "catContext": "The author evaluates the historical implications of equitable in institutional policymaking."
                },
                {
                  "word": "Iniquity",
                  "breakdown": "IN+EQU+ITY",
                  "def": "Gross injustice or moral wickedness",
                  "catContext": "The author evaluates the historical implications of iniquity in institutional policymaking."
                },
                {
                  "word": "Equivocate",
                  "breakdown": "EQUI+VOC+ATE",
                  "def": "Use ambiguous language to conceal truth",
                  "catContext": "The author evaluates the historical implications of equivocate in institutional policymaking."
                },
                {
                  "word": "Equity",
                  "breakdown": "EQU+ITY",
                  "def": "Quality of being fair and impartial",
                  "catContext": "The author evaluates the historical implications of equity in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: JUR / JUD / JUS",
              "origin": "High-Yield Greek/Latin Root Family (JUR / JUD / JUS)",
              "coreMeaning": "Official power to make legal decisions and judgments",
              "derivatives": [
                {
                  "word": "Jurisdiction",
                  "breakdown": "JURIS+DICT+ION",
                  "def": "Official power to make legal decisions and judgments",
                  "catContext": "Critics questioned whether the initiative was merely jurisdiction rather than a sustainable structural reform."
                },
                {
                  "word": "Judicious",
                  "breakdown": "JUDIC+IOUS",
                  "def": "Having or showing good judgment and sense; prudent",
                  "catContext": "Critics questioned whether the initiative was merely judicious rather than a sustainable structural reform."
                },
                {
                  "word": "Abjure",
                  "breakdown": "AB+JURE",
                  "def": "Solemnly renounce a belief, cause, or claim",
                  "catContext": "Critics questioned whether the initiative was merely abjure rather than a sustainable structural reform."
                },
                {
                  "word": "Perjury",
                  "breakdown": "PER+JURY",
                  "def": "Offense of willfully telling an untruth under oath",
                  "catContext": "Critics questioned whether the initiative was merely perjury rather than a sustainable structural reform."
                },
                {
                  "word": "Jurisprudence",
                  "breakdown": "JURIS+PRUDENCE",
                  "def": "Theory or philosophy of law",
                  "catContext": "Critics questioned whether the initiative was merely jurisprudence rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Egalitarian (Believing all people are equal and deserve equal rights)",
                  "negative": "Jurisdiction (Official power to make legal decisions and judgments)",
                  "rootKey": "EGAL+ITARIAN vs JURIS+DICT+ION"
                },
                {
                  "positive": "Equitable (Fair and impartial; dealing justly with all)",
                  "negative": "Judicious (Having or showing good judgment and sense; prudent)",
                  "rootKey": "EQU+ITABLE vs JUDIC+IOUS"
                },
                {
                  "positive": "Iniquity (Gross injustice or moral wickedness)",
                  "negative": "Abjure (Solemnly renounce a belief, cause, or claim)",
                  "rootKey": "IN+EQU+ITY vs AB+JURE"
                },
                {
                  "positive": "Equivocate (Use ambiguous language to conceal truth)",
                  "negative": "Perjury (Offense of willfully telling an untruth under oath)",
                  "rootKey": "EQUI+VOC+ATE vs PER+JURY"
                },
                {
                  "positive": "Equity (Quality of being fair and impartial)",
                  "negative": "Jurisprudence (Theory or philosophy of law)",
                  "rootKey": "EQU+ITY vs JURIS+PRUDENCE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **egalitarian** nature of theoretical models with the **jurisdiction** reality of human behavior. While proponents emphasize the **equitable** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **judicious** consequences.",
              "highlights": [
                {
                  "word": "egalitarian",
                  "root": "EGAL+ITARIAN",
                  "note": "Key concept: Believing all people are equal and deserve equal rights"
                },
                {
                  "word": "jurisdiction",
                  "root": "JURIS+DICT+ION",
                  "note": "Critical contrast: Official power to make legal decisions and judgments"
                },
                {
                  "word": "equitable",
                  "root": "EQU+ITABLE",
                  "note": "Strategic ideal: Fair and impartial; dealing justly with all"
                },
                {
                  "word": "judicious",
                  "root": "JUDIC+IOUS",
                  "note": "Pitfall/Critique: Having or showing good judgment and sense; prudent"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-4-2-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **egalitarian** in intent but **judicious** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (believing all people are equal and deserve equal rights), but bungled the execution in a flawed manner (having or showing good judgment and sense; prudent).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Egalitarian = Believing all people are equal and deserve equal rights.",
                "Break down: Judicious = Having or showing good judgment and sense; prudent.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "EGALITARIAN (Believing all people are equal and deserve equal rights) denotes good intent, while JUDICIOUS (Having or showing good judgment and sense; prudent) critiques flawed execution."
            },
            {
              "id": "q-4-2-2",
              "prompt": "Which word from this lesson signifies 'Gross injustice or moral wickedness'?",
              "options": [
                "Jurisdiction",
                "Iniquity",
                "Abjure",
                "Equitable"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root EQU / EGAL.",
                "Breakdown: IN+EQU+ITY."
              ],
              "explanation": "INIQUITY (IN+EQU+ITY) means Gross injustice or moral wickedness."
            },
            {
              "id": "q-4-2-3",
              "prompt": "If an essay claims that an opponent's defense is '**jurisdiction**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being official power to make legal decisions and judgments.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Jurisdiction.",
                "Meaning: Official power to make legal decisions and judgments."
              ],
              "explanation": "JURISDICTION (JURIS+DICT+ION) means Official power to make legal decisions and judgments."
            },
            {
              "id": "q-4-2-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Egalitarian vs Jurisdiction",
                "Egalitarian vs Equitable",
                "Jurisdiction vs Judicious",
                "Iniquity vs Equivocate"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast EQU / EGAL with JUR / JUD / JUS.",
                "Egalitarian vs Jurisdiction."
              ],
              "explanation": "Egalitarian (EQU / EGAL) directly contrasts with Jurisdiction (JUR / JUD / JUS)."
            }
          ]
        },
        {
          "id": "les-4-3",
          "lessonNumber": 3,
          "title": "Blame & Absolution: CULP vs SOLV/ABSOLV",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Blame & Absolution: CULP vs SOLV/ABSOLV",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between CULP / CRIM and SOLV / SOLUT / ABSOLV provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "CULP / CRIM represents foundational root concepts, while SOLV / SOLUT / ABSOLV establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: CULP / CRIM",
              "origin": "High-Yield Greek/Latin Root Family (CULP / CRIM)",
              "coreMeaning": "Deserving blame; responsible for a wrong",
              "derivatives": [
                {
                  "word": "Culpable",
                  "breakdown": "CULP+ABLE",
                  "def": "Deserving blame; responsible for a wrong",
                  "catContext": "The author evaluates the historical implications of culpable in institutional policymaking."
                },
                {
                  "word": "Exculpate",
                  "breakdown": "EX+CULP+ATE",
                  "def": "Declare or prove that someone is not guilty",
                  "catContext": "The author evaluates the historical implications of exculpate in institutional policymaking."
                },
                {
                  "word": "Inculpate",
                  "breakdown": "IN+CULP+ATE",
                  "def": "Accuse or show evidence of guilt; incriminate",
                  "catContext": "The author evaluates the historical implications of inculpate in institutional policymaking."
                },
                {
                  "word": "Mea Culpa",
                  "breakdown": "MEA+CULPA",
                  "def": "Acknowledgment of one's fault or error",
                  "catContext": "The author evaluates the historical implications of mea culpa in institutional policymaking."
                },
                {
                  "word": "Culpability",
                  "breakdown": "CULP+ABILITY",
                  "def": "Responsibility for a fault or wrong",
                  "catContext": "The author evaluates the historical implications of culpability in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: SOLV / SOLUT / ABSOLV",
              "origin": "High-Yield Greek/Latin Root Family (SOLV / SOLUT / ABSOLV)",
              "coreMeaning": "Set or declare someone free from blame or guilt",
              "derivatives": [
                {
                  "word": "Absolve",
                  "breakdown": "AB+SOLVE",
                  "def": "Set or declare someone free from blame or guilt",
                  "catContext": "Critics questioned whether the initiative was merely absolve rather than a sustainable structural reform."
                },
                {
                  "word": "Insolvent",
                  "breakdown": "IN+SOLVE",
                  "def": "Unable to pay debts owed; bankrupt",
                  "catContext": "Critics questioned whether the initiative was merely insolvent rather than a sustainable structural reform."
                },
                {
                  "word": "Dissolution",
                  "breakdown": "DIS+SOLUT+ION",
                  "def": "Closing down or dismissal of an official body",
                  "catContext": "Critics questioned whether the initiative was merely dissolution rather than a sustainable structural reform."
                },
                {
                  "word": "Resolute",
                  "breakdown": "RE+SOLUT+E",
                  "def": "Admirably purposeful, determined, and unwavering",
                  "catContext": "Critics questioned whether the initiative was merely resolute rather than a sustainable structural reform."
                },
                {
                  "word": "Solvent",
                  "breakdown": "SOLVE+NT",
                  "def": "Having assets in excess of liabilities; able to pay",
                  "catContext": "Critics questioned whether the initiative was merely solvent rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Culpable (Deserving blame; responsible for a wrong)",
                  "negative": "Absolve (Set or declare someone free from blame or guilt)",
                  "rootKey": "CULP+ABLE vs AB+SOLVE"
                },
                {
                  "positive": "Exculpate (Declare or prove that someone is not guilty)",
                  "negative": "Insolvent (Unable to pay debts owed; bankrupt)",
                  "rootKey": "EX+CULP+ATE vs IN+SOLVE"
                },
                {
                  "positive": "Inculpate (Accuse or show evidence of guilt; incriminate)",
                  "negative": "Dissolution (Closing down or dismissal of an official body)",
                  "rootKey": "IN+CULP+ATE vs DIS+SOLUT+ION"
                },
                {
                  "positive": "Mea Culpa (Acknowledgment of one's fault or error)",
                  "negative": "Resolute (Admirably purposeful, determined, and unwavering)",
                  "rootKey": "MEA+CULPA vs RE+SOLUT+E"
                },
                {
                  "positive": "Culpability (Responsibility for a fault or wrong)",
                  "negative": "Solvent (Having assets in excess of liabilities; able to pay)",
                  "rootKey": "CULP+ABILITY vs SOLVE+NT"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **culpable** nature of theoretical models with the **absolve** reality of human behavior. While proponents emphasize the **exculpate** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **insolvent** consequences.",
              "highlights": [
                {
                  "word": "culpable",
                  "root": "CULP+ABLE",
                  "note": "Key concept: Deserving blame; responsible for a wrong"
                },
                {
                  "word": "absolve",
                  "root": "AB+SOLVE",
                  "note": "Critical contrast: Set or declare someone free from blame or guilt"
                },
                {
                  "word": "exculpate",
                  "root": "EX+CULP+ATE",
                  "note": "Strategic ideal: Declare or prove that someone is not guilty"
                },
                {
                  "word": "insolvent",
                  "root": "IN+SOLVE",
                  "note": "Pitfall/Critique: Unable to pay debts owed; bankrupt"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-4-3-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **culpable** in intent but **insolvent** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (deserving blame; responsible for a wrong), but bungled the execution in a flawed manner (unable to pay debts owed; bankrupt).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Culpable = Deserving blame; responsible for a wrong.",
                "Break down: Insolvent = Unable to pay debts owed; bankrupt.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "CULPABLE (Deserving blame; responsible for a wrong) denotes good intent, while INSOLVENT (Unable to pay debts owed; bankrupt) critiques flawed execution."
            },
            {
              "id": "q-4-3-2",
              "prompt": "Which word from this lesson signifies 'Accuse or show evidence of guilt; incriminate'?",
              "options": [
                "Absolve",
                "Inculpate",
                "Dissolution",
                "Exculpate"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root CULP / CRIM.",
                "Breakdown: IN+CULP+ATE."
              ],
              "explanation": "INCULPATE (IN+CULP+ATE) means Accuse or show evidence of guilt; incriminate."
            },
            {
              "id": "q-4-3-3",
              "prompt": "If an essay claims that an opponent's defense is '**absolve**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being set or declare someone free from blame or guilt.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Absolve.",
                "Meaning: Set or declare someone free from blame or guilt."
              ],
              "explanation": "ABSOLVE (AB+SOLVE) means Set or declare someone free from blame or guilt."
            },
            {
              "id": "q-4-3-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Culpable vs Absolve",
                "Culpable vs Exculpate",
                "Absolve vs Insolvent",
                "Inculpate vs Mea Culpa"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast CULP / CRIM with SOLV / SOLUT / ABSOLV.",
                "Culpable vs Absolve."
              ],
              "explanation": "Culpable (CULP / CRIM) directly contrasts with Absolve (SOLV / SOLUT / ABSOLV)."
            }
          ]
        },
        {
          "id": "les-4-4",
          "lessonNumber": 4,
          "title": "Stability & Entrenchment: SED/SID vs STA/STIT",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Stability & Entrenchment: SED/SID vs STA/STIT",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between SED / SID / SESS and STA / STIT / STAT provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "SED / SID / SESS represents foundational root concepts, while STA / STIT / STAT establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: SED / SID / SESS",
              "origin": "High-Yield Greek/Latin Root Family (SED / SID / SESS)",
              "coreMeaning": "Tending to spend much time seated; settled in one place",
              "derivatives": [
                {
                  "word": "Sedentary",
                  "breakdown": "SED+ENT+ARY",
                  "def": "Tending to spend much time seated; settled in one place",
                  "catContext": "The author evaluates the historical implications of sedentary in institutional policymaking."
                },
                {
                  "word": "Insidious",
                  "breakdown": "IN+SID+IOUS",
                  "def": "Proceeding in a gradual, subtle way with harmful effects",
                  "catContext": "The author evaluates the historical implications of insidious in institutional policymaking."
                },
                {
                  "word": "Assiduous",
                  "breakdown": "AD+SID+UOUS",
                  "def": "Showing great care, attention, and persistent effort",
                  "catContext": "The author evaluates the historical implications of assiduous in institutional policymaking."
                },
                {
                  "word": "Subside",
                  "breakdown": "SUB+SIDE",
                  "def": "Become less intense, violent, or severe",
                  "catContext": "The author evaluates the historical implications of subside in institutional policymaking."
                },
                {
                  "word": "Preside",
                  "breakdown": "PRE+SIDE",
                  "def": "Be in the position of authority in a meeting/court",
                  "catContext": "The author evaluates the historical implications of preside in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: STA / STIT / STAT",
              "origin": "High-Yield Greek/Latin Root Family (STA / STIT / STAT)",
              "coreMeaning": "Period or state of inactivity or stagnation",
              "derivatives": [
                {
                  "word": "Stasis",
                  "breakdown": "STA+SIS",
                  "def": "Period or state of inactivity or stagnation",
                  "catContext": "Critics questioned whether the initiative was merely stasis rather than a sustainable structural reform."
                },
                {
                  "word": "Statutory",
                  "breakdown": "STATU+ORY",
                  "def": "Required, permitted, or enacted by statute/law",
                  "catContext": "Critics questioned whether the initiative was merely statutory rather than a sustainable structural reform."
                },
                {
                  "word": "Apostasy",
                  "breakdown": "APO+STAS+Y",
                  "def": "Abandonment or renunciation of a religious/political belief",
                  "catContext": "Critics questioned whether the initiative was merely apostasy rather than a sustainable structural reform."
                },
                {
                  "word": "Static",
                  "breakdown": "STAT+IC",
                  "def": "Lacking in movement, action, or change",
                  "catContext": "Critics questioned whether the initiative was merely static rather than a sustainable structural reform."
                },
                {
                  "word": "Constituent",
                  "breakdown": "CON+STIT+UENT",
                  "def": "Being a voting member of an organization/electorate",
                  "catContext": "Critics questioned whether the initiative was merely constituent rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Sedentary (Tending to spend much time seated; settled in one place)",
                  "negative": "Stasis (Period or state of inactivity or stagnation)",
                  "rootKey": "SED+ENT+ARY vs STA+SIS"
                },
                {
                  "positive": "Insidious (Proceeding in a gradual, subtle way with harmful effects)",
                  "negative": "Statutory (Required, permitted, or enacted by statute/law)",
                  "rootKey": "IN+SID+IOUS vs STATU+ORY"
                },
                {
                  "positive": "Assiduous (Showing great care, attention, and persistent effort)",
                  "negative": "Apostasy (Abandonment or renunciation of a religious/political belief)",
                  "rootKey": "AD+SID+UOUS vs APO+STAS+Y"
                },
                {
                  "positive": "Subside (Become less intense, violent, or severe)",
                  "negative": "Static (Lacking in movement, action, or change)",
                  "rootKey": "SUB+SIDE vs STAT+IC"
                },
                {
                  "positive": "Preside (Be in the position of authority in a meeting/court)",
                  "negative": "Constituent (Being a voting member of an organization/electorate)",
                  "rootKey": "PRE+SIDE vs CON+STIT+UENT"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **sedentary** nature of theoretical models with the **stasis** reality of human behavior. While proponents emphasize the **insidious** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **statutory** consequences.",
              "highlights": [
                {
                  "word": "sedentary",
                  "root": "SED+ENT+ARY",
                  "note": "Key concept: Tending to spend much time seated; settled in one place"
                },
                {
                  "word": "stasis",
                  "root": "STA+SIS",
                  "note": "Critical contrast: Period or state of inactivity or stagnation"
                },
                {
                  "word": "insidious",
                  "root": "IN+SID+IOUS",
                  "note": "Strategic ideal: Proceeding in a gradual, subtle way with harmful effects"
                },
                {
                  "word": "statutory",
                  "root": "STATU+ORY",
                  "note": "Pitfall/Critique: Required, permitted, or enacted by statute/law"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-4-4-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **sedentary** in intent but **statutory** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (tending to spend much time seated; settled in one place), but bungled the execution in a flawed manner (required, permitted, or enacted by statute/law).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Sedentary = Tending to spend much time seated; settled in one place.",
                "Break down: Statutory = Required, permitted, or enacted by statute/law.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "SEDENTARY (Tending to spend much time seated; settled in one place) denotes good intent, while STATUTORY (Required, permitted, or enacted by statute/law) critiques flawed execution."
            },
            {
              "id": "q-4-4-2",
              "prompt": "Which word from this lesson signifies 'Showing great care, attention, and persistent effort'?",
              "options": [
                "Stasis",
                "Assiduous",
                "Apostasy",
                "Insidious"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root SED / SID / SESS.",
                "Breakdown: AD+SID+UOUS."
              ],
              "explanation": "ASSIDUOUS (AD+SID+UOUS) means Showing great care, attention, and persistent effort."
            },
            {
              "id": "q-4-4-3",
              "prompt": "If an essay claims that an opponent's defense is '**stasis**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being period or state of inactivity or stagnation.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Stasis.",
                "Meaning: Period or state of inactivity or stagnation."
              ],
              "explanation": "STASIS (STA+SIS) means Period or state of inactivity or stagnation."
            },
            {
              "id": "q-4-4-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Sedentary vs Stasis",
                "Sedentary vs Insidious",
                "Stasis vs Statutory",
                "Assiduous vs Subside"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast SED / SID / SESS with STA / STIT / STAT.",
                "Sedentary vs Stasis."
              ],
              "explanation": "Sedentary (SED / SID / SESS) directly contrasts with Stasis (STA / STIT / STAT)."
            }
          ]
        },
        {
          "id": "les-4-5",
          "lessonNumber": 5,
          "title": "Dominance & Servitude: DOMIN/POT vs SERV/SUB",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Dominance & Servitude: DOMIN/POT vs SERV/SUB",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between DOMIN / POT and SERV / SUB / SEQU provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "DOMIN / POT represents foundational root concepts, while SERV / SUB / SEQU establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: DOMIN / POT",
              "origin": "High-Yield Greek/Latin Root Family (DOMIN / POT)",
              "coreMeaning": "Sovereignty or control; territory of rule",
              "derivatives": [
                {
                  "word": "Dominion",
                  "breakdown": "DOMIN+ION",
                  "def": "Sovereignty or control; territory of rule",
                  "catContext": "The author evaluates the historical implications of dominion in institutional policymaking."
                },
                {
                  "word": "Potentate",
                  "breakdown": "POTENT+ATE",
                  "def": "A monarch or ruler, especially an autocratic one",
                  "catContext": "The author evaluates the historical implications of potentate in institutional policymaking."
                },
                {
                  "word": "Omnipotent",
                  "breakdown": "OMNI+POTENT",
                  "def": "Having unlimited or all-encompassing power",
                  "catContext": "The author evaluates the historical implications of omnipotent in institutional policymaking."
                },
                {
                  "word": "Predominant",
                  "breakdown": "PRE+DOMIN+ANT",
                  "def": "Present as the strongest or main element",
                  "catContext": "The author evaluates the historical implications of predominant in institutional policymaking."
                },
                {
                  "word": "Potent",
                  "breakdown": "POT+ENT",
                  "def": "Having great power, influence, or effect",
                  "catContext": "The author evaluates the historical implications of potent in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: SERV / SUB / SEQU",
              "origin": "High-Yield Greek/Latin Root Family (SERV / SUB / SEQU)",
              "coreMeaning": "Prepared to obey others unquestioningly; subordinate",
              "derivatives": [
                {
                  "word": "Subservient",
                  "breakdown": "SUB+SERVI+ENT",
                  "def": "Prepared to obey others unquestioningly; subordinate",
                  "catContext": "Critics questioned whether the initiative was merely subservient rather than a sustainable structural reform."
                },
                {
                  "word": "Subjugate",
                  "breakdown": "SUB+JUGUM+ATE",
                  "def": "Bring under domination or control, especially by conquest",
                  "catContext": "Critics questioned whether the initiative was merely subjugate rather than a sustainable structural reform."
                },
                {
                  "word": "Obsequious",
                  "breakdown": "OB+SEQU+IOUS",
                  "def": "Obedient or attentive to an excessive, servile degree",
                  "catContext": "Critics questioned whether the initiative was merely obsequious rather than a sustainable structural reform."
                },
                {
                  "word": "Servile",
                  "breakdown": "SERV+ILE",
                  "def": "Having or showing an excessive willingness to serve",
                  "catContext": "Critics questioned whether the initiative was merely servile rather than a sustainable structural reform."
                },
                {
                  "word": "Submissive",
                  "breakdown": "SUB+MISS+IVE",
                  "def": "Ready to conform to the authority or will of others",
                  "catContext": "Critics questioned whether the initiative was merely submissive rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Dominion (Sovereignty or control; territory of rule)",
                  "negative": "Subservient (Prepared to obey others unquestioningly; subordinate)",
                  "rootKey": "DOMIN+ION vs SUB+SERVI+ENT"
                },
                {
                  "positive": "Potentate (A monarch or ruler, especially an autocratic one)",
                  "negative": "Subjugate (Bring under domination or control, especially by conquest)",
                  "rootKey": "POTENT+ATE vs SUB+JUGUM+ATE"
                },
                {
                  "positive": "Omnipotent (Having unlimited or all-encompassing power)",
                  "negative": "Obsequious (Obedient or attentive to an excessive, servile degree)",
                  "rootKey": "OMNI+POTENT vs OB+SEQU+IOUS"
                },
                {
                  "positive": "Predominant (Present as the strongest or main element)",
                  "negative": "Servile (Having or showing an excessive willingness to serve)",
                  "rootKey": "PRE+DOMIN+ANT vs SERV+ILE"
                },
                {
                  "positive": "Potent (Having great power, influence, or effect)",
                  "negative": "Submissive (Ready to conform to the authority or will of others)",
                  "rootKey": "POT+ENT vs SUB+MISS+IVE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **dominion** nature of theoretical models with the **subservient** reality of human behavior. While proponents emphasize the **potentate** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **subjugate** consequences.",
              "highlights": [
                {
                  "word": "dominion",
                  "root": "DOMIN+ION",
                  "note": "Key concept: Sovereignty or control; territory of rule"
                },
                {
                  "word": "subservient",
                  "root": "SUB+SERVI+ENT",
                  "note": "Critical contrast: Prepared to obey others unquestioningly; subordinate"
                },
                {
                  "word": "potentate",
                  "root": "POTENT+ATE",
                  "note": "Strategic ideal: A monarch or ruler, especially an autocratic one"
                },
                {
                  "word": "subjugate",
                  "root": "SUB+JUGUM+ATE",
                  "note": "Pitfall/Critique: Bring under domination or control, especially by conquest"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-4-5-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **dominion** in intent but **subjugate** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (sovereignty or control; territory of rule), but bungled the execution in a flawed manner (bring under domination or control, especially by conquest).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Dominion = Sovereignty or control; territory of rule.",
                "Break down: Subjugate = Bring under domination or control, especially by conquest.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "DOMINION (Sovereignty or control; territory of rule) denotes good intent, while SUBJUGATE (Bring under domination or control, especially by conquest) critiques flawed execution."
            },
            {
              "id": "q-4-5-2",
              "prompt": "Which word from this lesson signifies 'Having unlimited or all-encompassing power'?",
              "options": [
                "Subservient",
                "Omnipotent",
                "Obsequious",
                "Potentate"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root DOMIN / POT.",
                "Breakdown: OMNI+POTENT."
              ],
              "explanation": "OMNIPOTENT (OMNI+POTENT) means Having unlimited or all-encompassing power."
            },
            {
              "id": "q-4-5-3",
              "prompt": "If an essay claims that an opponent's defense is '**subservient**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being prepared to obey others unquestioningly; subordinate.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Subservient.",
                "Meaning: Prepared to obey others unquestioningly; subordinate."
              ],
              "explanation": "SUBSERVIENT (SUB+SERVI+ENT) means Prepared to obey others unquestioningly; subordinate."
            },
            {
              "id": "q-4-5-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Dominion vs Subservient",
                "Dominion vs Potentate",
                "Subservient vs Subjugate",
                "Omnipotent vs Predominant"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast DOMIN / POT with SERV / SUB / SEQU.",
                "Dominion vs Subservient."
              ],
              "explanation": "Dominion (DOMIN / POT) directly contrasts with Subservient (SERV / SUB / SEQU)."
            }
          ]
        },
        {
          "id": "les-4-6",
          "lessonNumber": 6,
          "title": "The Public Sphere: CIV/POLIT vs DEMO/POP",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: The Public Sphere: CIV/POLIT vs DEMO/POP",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between CIV / POLIT and DEMO / POP provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "CIV / POLIT represents foundational root concepts, while DEMO / POP establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: CIV / POLIT",
              "origin": "High-Yield Greek/Latin Root Family (CIV / POLIT)",
              "coreMeaning": "Relating to a city, citizen, or citizenship",
              "derivatives": [
                {
                  "word": "Civic",
                  "breakdown": "CIV+IC",
                  "def": "Relating to a city, citizen, or citizenship",
                  "catContext": "The author evaluates the historical implications of civic in institutional policymaking."
                },
                {
                  "word": "Politic",
                  "breakdown": "POLIT+IC",
                  "def": "Prudent and sensible in circumstances; diplomatic",
                  "catContext": "The author evaluates the historical implications of politic in institutional policymaking."
                },
                {
                  "word": "Cosmopolitan",
                  "breakdown": "COSMO+POLIT+AN",
                  "def": "Familiar with and at ease in many different countries",
                  "catContext": "The author evaluates the historical implications of cosmopolitan in institutional policymaking."
                },
                {
                  "word": "Civilian",
                  "breakdown": "CIVIL+IAN",
                  "def": "Person not in the armed services or police",
                  "catContext": "The author evaluates the historical implications of civilian in institutional policymaking."
                },
                {
                  "word": "Civility",
                  "breakdown": "CIVIL+ITY",
                  "def": "Formal politeness and courtesy in behavior",
                  "catContext": "The author evaluates the historical implications of civility in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: DEMO / POP",
              "origin": "High-Yield Greek/Latin Root Family (DEMO / POP)",
              "coreMeaning": "Leader who appeals to popular desires/prejudices rather than reason",
              "derivatives": [
                {
                  "word": "Demagogue",
                  "breakdown": "DEMO+AGOG",
                  "def": "Leader who appeals to popular desires/prejudices rather than reason",
                  "catContext": "Critics questioned whether the initiative was merely demagogue rather than a sustainable structural reform."
                },
                {
                  "word": "Populism",
                  "breakdown": "POPUL+ISM",
                  "def": "Political approach that appeals to ordinary people against elites",
                  "catContext": "Critics questioned whether the initiative was merely populism rather than a sustainable structural reform."
                },
                {
                  "word": "Endemic",
                  "breakdown": "EN+DEM+IC",
                  "def": "Regularly found among particular people or area",
                  "catContext": "Critics questioned whether the initiative was merely endemic rather than a sustainable structural reform."
                },
                {
                  "word": "Epidemic",
                  "breakdown": "EPI+DEM+IC",
                  "def": "Widespread occurrence of disease in a community",
                  "catContext": "Critics questioned whether the initiative was merely epidemic rather than a sustainable structural reform."
                },
                {
                  "word": "Pandemic",
                  "breakdown": "PAN+DEM+IC",
                  "def": "Prevalent over a whole country or the world",
                  "catContext": "Critics questioned whether the initiative was merely pandemic rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Civic (Relating to a city, citizen, or citizenship)",
                  "negative": "Demagogue (Leader who appeals to popular desires/prejudices rather than reason)",
                  "rootKey": "CIV+IC vs DEMO+AGOG"
                },
                {
                  "positive": "Politic (Prudent and sensible in circumstances; diplomatic)",
                  "negative": "Populism (Political approach that appeals to ordinary people against elites)",
                  "rootKey": "POLIT+IC vs POPUL+ISM"
                },
                {
                  "positive": "Cosmopolitan (Familiar with and at ease in many different countries)",
                  "negative": "Endemic (Regularly found among particular people or area)",
                  "rootKey": "COSMO+POLIT+AN vs EN+DEM+IC"
                },
                {
                  "positive": "Civilian (Person not in the armed services or police)",
                  "negative": "Epidemic (Widespread occurrence of disease in a community)",
                  "rootKey": "CIVIL+IAN vs EPI+DEM+IC"
                },
                {
                  "positive": "Civility (Formal politeness and courtesy in behavior)",
                  "negative": "Pandemic (Prevalent over a whole country or the world)",
                  "rootKey": "CIVIL+ITY vs PAN+DEM+IC"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **civic** nature of theoretical models with the **demagogue** reality of human behavior. While proponents emphasize the **politic** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **populism** consequences.",
              "highlights": [
                {
                  "word": "civic",
                  "root": "CIV+IC",
                  "note": "Key concept: Relating to a city, citizen, or citizenship"
                },
                {
                  "word": "demagogue",
                  "root": "DEMO+AGOG",
                  "note": "Critical contrast: Leader who appeals to popular desires/prejudices rather than reason"
                },
                {
                  "word": "politic",
                  "root": "POLIT+IC",
                  "note": "Strategic ideal: Prudent and sensible in circumstances; diplomatic"
                },
                {
                  "word": "populism",
                  "root": "POPUL+ISM",
                  "note": "Pitfall/Critique: Political approach that appeals to ordinary people against elites"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-4-6-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **civic** in intent but **populism** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (relating to a city, citizen, or citizenship), but bungled the execution in a flawed manner (political approach that appeals to ordinary people against elites).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Civic = Relating to a city, citizen, or citizenship.",
                "Break down: Populism = Political approach that appeals to ordinary people against elites.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "CIVIC (Relating to a city, citizen, or citizenship) denotes good intent, while POPULISM (Political approach that appeals to ordinary people against elites) critiques flawed execution."
            },
            {
              "id": "q-4-6-2",
              "prompt": "Which word from this lesson signifies 'Familiar with and at ease in many different countries'?",
              "options": [
                "Demagogue",
                "Cosmopolitan",
                "Endemic",
                "Politic"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root CIV / POLIT.",
                "Breakdown: COSMO+POLIT+AN."
              ],
              "explanation": "COSMOPOLITAN (COSMO+POLIT+AN) means Familiar with and at ease in many different countries."
            },
            {
              "id": "q-4-6-3",
              "prompt": "If an essay claims that an opponent's defense is '**demagogue**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being leader who appeals to popular desires/prejudices rather than reason.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Demagogue.",
                "Meaning: Leader who appeals to popular desires/prejudices rather than reason."
              ],
              "explanation": "DEMAGOGUE (DEMO+AGOG) means Leader who appeals to popular desires/prejudices rather than reason."
            },
            {
              "id": "q-4-6-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Civic vs Demagogue",
                "Civic vs Politic",
                "Demagogue vs Populism",
                "Cosmopolitan vs Civilian"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast CIV / POLIT with DEMO / POP.",
                "Civic vs Demagogue."
              ],
              "explanation": "Civic (CIV / POLIT) directly contrasts with Demagogue (DEMO / POP)."
            }
          ]
        }
      ],
      "masteryQuiz": [
        {
          "id": "mq-4-1",
          "prompt": "In a Category 4 Reading Comprehension passage, how does the author contrast theoretical assertions with empirical reality?",
          "options": [
            "By contrasting idealized conceptual frameworks with the complex reality of human institutions.",
            "By adopting an uncritical, complacent attitude towards government policy.",
            "By expressing total agnostic indifference.",
            "By relying exclusively on circular tautologies."
          ],
          "correctIndex": 0,
          "explanation": "CAT passages typically set up an analytical tension between idealized theories and empirical ground realities."
        },
        {
          "id": "mq-4-2",
          "prompt": "Which term from Category 4 carries an overwhelmingly **positive** valence when used by an author?",
          "options": [
            "Plutocracy",
            "Anarchy",
            "Jurisdiction",
            "Absolve"
          ],
          "correctIndex": 0,
          "explanation": "Plutocracy carries a positive root connotation, whereas the other options are negative tone markers."
        },
        {
          "id": "mq-4-3",
          "prompt": "If an essay argues that an institution is guilty of '**stasis**', the author is:",
          "options": [
            "Praising the institution with enthusiastic plaudits.",
            "Criticizing the institution for period or state of inactivity or stagnation.",
            "Declaring the institution legally solvent and exculpated.",
            "Taking an egalitarian stance."
          ],
          "correctIndex": 1,
          "explanation": "Stasis means Period or state of inactivity or stagnation."
        },
        {
          "id": "mq-4-4",
          "prompt": "What is the underlying etymological root of **Culpable**?",
          "options": [
            "High-Yield Greek/Latin Root Family (CULP / CRIM)",
            "High-Yield Greek/Latin Root Family (SOLV / SOLUT / ABSOLV)",
            "High-Yield Greek/Latin Root Family (SERV / SUB / SEQU)",
            "High-Yield Greek/Latin Root Family (DEMO / POP)"
          ],
          "correctIndex": 0,
          "explanation": "Culpable is derived from High-Yield Greek/Latin Root Family (CULP / CRIM)."
        },
        {
          "id": "mq-4-5",
          "prompt": "An author describes a policy as '**dominion** while warning against **subservient** consequences.' What is the author's tone?",
          "options": [
            "Judicious, balanced, and analytically rigorous in weighing benefits against pitfalls.",
            "Fiercely vitriolic and purely destructive.",
            "Apathetic, bored, and disengaged.",
            "Laudatory and uncritical."
          ],
          "correctIndex": 0,
          "explanation": "Balancing positive qualities with cautions against negative pitfalls indicates a judicious and analytically rigorous tone."
        },
        {
          "id": "mq-4-6",
          "prompt": "Which of the following distinguishes the core concept of Lesson 4.1 from Lesson 4.6 in this category?",
          "options": [
            "Lesson 4.1 focuses on foundational valences (Rulers & Hierarchies: CRAC/CRAT vs ARCH/ARCHY), while Lesson 4.6 develops specialized applications (The Public Sphere: CIV/POLIT vs DEMO/POP).",
            "They are identical lessons repeated twice.",
            "Lesson 6 is purely historical with zero relevance to modern CAT reading.",
            "Lesson 1 is only for grammar error identification."
          ],
          "correctIndex": 0,
          "explanation": "The curriculum progresses systematically from foundational concepts (Rulers & Hierarchies: CRAC/CRAT vs ARCH/ARCHY) to advanced critical frameworks (The Public Sphere: CIV/POLIT vs DEMO/POP)."
        }
      ]
    },
    {
      "id": "cat-5",
      "number": 5,
      "title": "Time, Evolution & Universal Scale",
      "tagline": "Master vocabulary for Evolutionary Biology, Anthropology, Tech, and History RCs.",
      "icon": "hourglass",
      "color": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
      "accent": "text-emerald-400",
      "lessons": [
        {
          "id": "les-5-1",
          "lessonNumber": 1,
          "title": "Chronology & Eras: CHRON/TEMP vs AETERN/PERP",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Chronology & Eras: CHRON/TEMP vs AETERN/PERP",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between CHRON / TEMP and AETERN / PERP / DUR provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "CHRON / TEMP represents foundational root concepts, while AETERN / PERP / DUR establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: CHRON / TEMP",
              "origin": "High-Yield Greek/Latin Root Family (CHRON / TEMP)",
              "coreMeaning": "Thing belonging to a period other than that in which it exists",
              "derivatives": [
                {
                  "word": "Anachronism",
                  "breakdown": "ANA+CHRON+ISM",
                  "def": "Thing belonging to a period other than that in which it exists",
                  "catContext": "The author evaluates the historical implications of anachronism in institutional policymaking."
                },
                {
                  "word": "Synchronous",
                  "breakdown": "SYN+CHRON+OUS",
                  "def": "Existing or occurring at the same time",
                  "catContext": "The author evaluates the historical implications of synchronous in institutional policymaking."
                },
                {
                  "word": "Temporal",
                  "breakdown": "TEMP+ORAL",
                  "def": "Relating to worldly time as opposed to eternity",
                  "catContext": "The author evaluates the historical implications of temporal in institutional policymaking."
                },
                {
                  "word": "Chronicle",
                  "breakdown": "CHRON+ICLE",
                  "def": "Factual written account of historical events",
                  "catContext": "The author evaluates the historical implications of chronicle in institutional policymaking."
                },
                {
                  "word": "Chronology",
                  "breakdown": "CHRON+OLOGY",
                  "def": "Arrangement of events in order of occurrence",
                  "catContext": "The author evaluates the historical implications of chronology in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: AETERN / PERP / DUR",
              "origin": "High-Yield Greek/Latin Root Family (AETERN / PERP / DUR)",
              "coreMeaning": "Make an undesirable situation continue indefinitely",
              "derivatives": [
                {
                  "word": "Perpetuate",
                  "breakdown": "PER+PET+UATE",
                  "def": "Make an undesirable situation continue indefinitely",
                  "catContext": "Critics questioned whether the initiative was merely perpetuate rather than a sustainable structural reform."
                },
                {
                  "word": "Duress",
                  "breakdown": "DUR+ESS",
                  "def": "Threats or constraints brought to force someone to act",
                  "catContext": "Critics questioned whether the initiative was merely duress rather than a sustainable structural reform."
                },
                {
                  "word": "Perpetual",
                  "breakdown": "PERPETU+AL",
                  "def": "Never ending or changing; occurring repeatedly",
                  "catContext": "Critics questioned whether the initiative was merely perpetual rather than a sustainable structural reform."
                },
                {
                  "word": "Endure",
                  "breakdown": "EN+DURE",
                  "def": "Remain in existence, last through hardship",
                  "catContext": "Critics questioned whether the initiative was merely endure rather than a sustainable structural reform."
                },
                {
                  "word": "Durable",
                  "breakdown": "DUR+ABLE",
                  "def": "Able to withstand wear, pressure, or damage",
                  "catContext": "Critics questioned whether the initiative was merely durable rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Anachronism (Thing belonging to a period other than that in which it exists)",
                  "negative": "Perpetuate (Make an undesirable situation continue indefinitely)",
                  "rootKey": "ANA+CHRON+ISM vs PER+PET+UATE"
                },
                {
                  "positive": "Synchronous (Existing or occurring at the same time)",
                  "negative": "Duress (Threats or constraints brought to force someone to act)",
                  "rootKey": "SYN+CHRON+OUS vs DUR+ESS"
                },
                {
                  "positive": "Temporal (Relating to worldly time as opposed to eternity)",
                  "negative": "Perpetual (Never ending or changing; occurring repeatedly)",
                  "rootKey": "TEMP+ORAL vs PERPETU+AL"
                },
                {
                  "positive": "Chronicle (Factual written account of historical events)",
                  "negative": "Endure (Remain in existence, last through hardship)",
                  "rootKey": "CHRON+ICLE vs EN+DURE"
                },
                {
                  "positive": "Chronology (Arrangement of events in order of occurrence)",
                  "negative": "Durable (Able to withstand wear, pressure, or damage)",
                  "rootKey": "CHRON+OLOGY vs DUR+ABLE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **anachronism** nature of theoretical models with the **perpetuate** reality of human behavior. While proponents emphasize the **synchronous** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **duress** consequences.",
              "highlights": [
                {
                  "word": "anachronism",
                  "root": "ANA+CHRON+ISM",
                  "note": "Key concept: Thing belonging to a period other than that in which it exists"
                },
                {
                  "word": "perpetuate",
                  "root": "PER+PET+UATE",
                  "note": "Critical contrast: Make an undesirable situation continue indefinitely"
                },
                {
                  "word": "synchronous",
                  "root": "SYN+CHRON+OUS",
                  "note": "Strategic ideal: Existing or occurring at the same time"
                },
                {
                  "word": "duress",
                  "root": "DUR+ESS",
                  "note": "Pitfall/Critique: Threats or constraints brought to force someone to act"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-5-1-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **anachronism** in intent but **duress** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (thing belonging to a period other than that in which it exists), but bungled the execution in a flawed manner (threats or constraints brought to force someone to act).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Anachronism = Thing belonging to a period other than that in which it exists.",
                "Break down: Duress = Threats or constraints brought to force someone to act.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "ANACHRONISM (Thing belonging to a period other than that in which it exists) denotes good intent, while DURESS (Threats or constraints brought to force someone to act) critiques flawed execution."
            },
            {
              "id": "q-5-1-2",
              "prompt": "Which word from this lesson signifies 'Relating to worldly time as opposed to eternity'?",
              "options": [
                "Perpetuate",
                "Temporal",
                "Perpetual",
                "Synchronous"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root CHRON / TEMP.",
                "Breakdown: TEMP+ORAL."
              ],
              "explanation": "TEMPORAL (TEMP+ORAL) means Relating to worldly time as opposed to eternity."
            },
            {
              "id": "q-5-1-3",
              "prompt": "If an essay claims that an opponent's defense is '**perpetuate**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being make an undesirable situation continue indefinitely.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Perpetuate.",
                "Meaning: Make an undesirable situation continue indefinitely."
              ],
              "explanation": "PERPETUATE (PER+PET+UATE) means Make an undesirable situation continue indefinitely."
            },
            {
              "id": "q-5-1-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Anachronism vs Perpetuate",
                "Anachronism vs Synchronous",
                "Perpetuate vs Duress",
                "Temporal vs Chronicle"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast CHRON / TEMP with AETERN / PERP / DUR.",
                "Anachronism vs Perpetuate."
              ],
              "explanation": "Anachronism (CHRON / TEMP) directly contrasts with Perpetuate (AETERN / PERP / DUR)."
            }
          ]
        },
        {
          "id": "les-5-2",
          "lessonNumber": 2,
          "title": "Shape & Transformation: MORPH vs MUT/VAR",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Shape & Transformation: MORPH vs MUT/VAR",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between MORPH and MUT / VAR provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "MORPH represents foundational root concepts, while MUT / VAR establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: MORPH",
              "origin": "High-Yield Greek/Latin Root Family (MORPH)",
              "coreMeaning": "Without a clearly defined shape or form; vague",
              "derivatives": [
                {
                  "word": "Amorphous",
                  "breakdown": "A+MORPH+OUS",
                  "def": "Without a clearly defined shape or form; vague",
                  "catContext": "The author evaluates the historical implications of amorphous in institutional policymaking."
                },
                {
                  "word": "Anthropomorphic",
                  "breakdown": "ANTHROPO+MORPH+IC",
                  "def": "Attributing human traits to non-human entities",
                  "catContext": "The author evaluates the historical implications of anthropomorphic in institutional policymaking."
                },
                {
                  "word": "Metamorphosis",
                  "breakdown": "META+MORPH+OSIS",
                  "def": "Profound change in form from one stage to next",
                  "catContext": "The author evaluates the historical implications of metamorphosis in institutional policymaking."
                },
                {
                  "word": "Morphology",
                  "breakdown": "MORPH+OLOGY",
                  "def": "Study of the forms and structures of organisms/words",
                  "catContext": "The author evaluates the historical implications of morphology in institutional policymaking."
                },
                {
                  "word": "Polymorphic",
                  "breakdown": "POLY+MORPH+IC",
                  "def": "Occurring in several different forms or stages",
                  "catContext": "The author evaluates the historical implications of polymorphic in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: MUT / VAR",
              "origin": "High-Yield Greek/Latin Root Family (MUT / VAR)",
              "coreMeaning": "Unchanging over time or unable to be changed",
              "derivatives": [
                {
                  "word": "Immutable",
                  "breakdown": "IM+MUT+ABLE",
                  "def": "Unchanging over time or unable to be changed",
                  "catContext": "Critics questioned whether the initiative was merely immutable rather than a sustainable structural reform."
                },
                {
                  "word": "Permutation",
                  "breakdown": "PER+MUT+ATION",
                  "def": "Way in which a set of things can be arranged",
                  "catContext": "Critics questioned whether the initiative was merely permutation rather than a sustainable structural reform."
                },
                {
                  "word": "Variegated",
                  "breakdown": "VARI+GAT+ED",
                  "def": "Exhibiting diverse colors, traits, or varied types",
                  "catContext": "Critics questioned whether the initiative was merely variegated rather than a sustainable structural reform."
                },
                {
                  "word": "Mutable",
                  "breakdown": "MUT+ABLE",
                  "def": "Liable to change; changeable",
                  "catContext": "Critics questioned whether the initiative was merely mutable rather than a sustainable structural reform."
                },
                {
                  "word": "Variant",
                  "breakdown": "VARI+ANT",
                  "def": "Form or version of something that differs in some respect",
                  "catContext": "Critics questioned whether the initiative was merely variant rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Amorphous (Without a clearly defined shape or form; vague)",
                  "negative": "Immutable (Unchanging over time or unable to be changed)",
                  "rootKey": "A+MORPH+OUS vs IM+MUT+ABLE"
                },
                {
                  "positive": "Anthropomorphic (Attributing human traits to non-human entities)",
                  "negative": "Permutation (Way in which a set of things can be arranged)",
                  "rootKey": "ANTHROPO+MORPH+IC vs PER+MUT+ATION"
                },
                {
                  "positive": "Metamorphosis (Profound change in form from one stage to next)",
                  "negative": "Variegated (Exhibiting diverse colors, traits, or varied types)",
                  "rootKey": "META+MORPH+OSIS vs VARI+GAT+ED"
                },
                {
                  "positive": "Morphology (Study of the forms and structures of organisms/words)",
                  "negative": "Mutable (Liable to change; changeable)",
                  "rootKey": "MORPH+OLOGY vs MUT+ABLE"
                },
                {
                  "positive": "Polymorphic (Occurring in several different forms or stages)",
                  "negative": "Variant (Form or version of something that differs in some respect)",
                  "rootKey": "POLY+MORPH+IC vs VARI+ANT"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **amorphous** nature of theoretical models with the **immutable** reality of human behavior. While proponents emphasize the **anthropomorphic** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **permutation** consequences.",
              "highlights": [
                {
                  "word": "amorphous",
                  "root": "A+MORPH+OUS",
                  "note": "Key concept: Without a clearly defined shape or form; vague"
                },
                {
                  "word": "immutable",
                  "root": "IM+MUT+ABLE",
                  "note": "Critical contrast: Unchanging over time or unable to be changed"
                },
                {
                  "word": "anthropomorphic",
                  "root": "ANTHROPO+MORPH+IC",
                  "note": "Strategic ideal: Attributing human traits to non-human entities"
                },
                {
                  "word": "permutation",
                  "root": "PER+MUT+ATION",
                  "note": "Pitfall/Critique: Way in which a set of things can be arranged"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-5-2-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **amorphous** in intent but **permutation** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (without a clearly defined shape or form; vague), but bungled the execution in a flawed manner (way in which a set of things can be arranged).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Amorphous = Without a clearly defined shape or form; vague.",
                "Break down: Permutation = Way in which a set of things can be arranged.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "AMORPHOUS (Without a clearly defined shape or form; vague) denotes good intent, while PERMUTATION (Way in which a set of things can be arranged) critiques flawed execution."
            },
            {
              "id": "q-5-2-2",
              "prompt": "Which word from this lesson signifies 'Profound change in form from one stage to next'?",
              "options": [
                "Immutable",
                "Metamorphosis",
                "Variegated",
                "Anthropomorphic"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root MORPH.",
                "Breakdown: META+MORPH+OSIS."
              ],
              "explanation": "METAMORPHOSIS (META+MORPH+OSIS) means Profound change in form from one stage to next."
            },
            {
              "id": "q-5-2-3",
              "prompt": "If an essay claims that an opponent's defense is '**immutable**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being unchanging over time or unable to be changed.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Immutable.",
                "Meaning: Unchanging over time or unable to be changed."
              ],
              "explanation": "IMMUTABLE (IM+MUT+ABLE) means Unchanging over time or unable to be changed."
            },
            {
              "id": "q-5-2-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Amorphous vs Immutable",
                "Amorphous vs Anthropomorphic",
                "Immutable vs Permutation",
                "Metamorphosis vs Morphology"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast MORPH with MUT / VAR.",
                "Amorphous vs Immutable."
              ],
              "explanation": "Amorphous (MORPH) directly contrasts with Immutable (MUT / VAR)."
            }
          ]
        },
        {
          "id": "les-5-3",
          "lessonNumber": 3,
          "title": "Universal Scope: PAN/OMNI vs PAUCI/MIN",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Universal Scope: PAN/OMNI vs PAUCI/MIN",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between PAN / OMNI and PAUCI / MIN / OLIG provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "PAN / OMNI represents foundational root concepts, while PAUCI / MIN / OLIG establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: PAN / OMNI",
              "origin": "High-Yield Greek/Latin Root Family (PAN / OMNI)",
              "coreMeaning": "Remedy for all difficulties or diseases; cure-all",
              "derivatives": [
                {
                  "word": "Panacea",
                  "breakdown": "PAN+AKEA",
                  "def": "Remedy for all difficulties or diseases; cure-all",
                  "catContext": "The author evaluates the historical implications of panacea in institutional policymaking."
                },
                {
                  "word": "Omniscient",
                  "breakdown": "OMNI+SCI+ENT",
                  "def": "Knowing everything; possessing infinite knowledge",
                  "catContext": "The author evaluates the historical implications of omniscient in institutional policymaking."
                },
                {
                  "word": "Omnipresent",
                  "breakdown": "OMNI+PRESENT",
                  "def": "Present everywhere at the same time; ubiquitous",
                  "catContext": "The author evaluates the historical implications of omnipresent in institutional policymaking."
                },
                {
                  "word": "Pandemic",
                  "breakdown": "PAN+DEM+IC",
                  "def": "Prevalent over a whole continent or world",
                  "catContext": "The author evaluates the historical implications of pandemic in institutional policymaking."
                },
                {
                  "word": "Panorama",
                  "breakdown": "PAN+ORAMA",
                  "def": "Unbroken view of the entire region",
                  "catContext": "The author evaluates the historical implications of panorama in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: PAUCI / MIN / OLIG",
              "origin": "High-Yield Greek/Latin Root Family (PAUCI / MIN / OLIG)",
              "coreMeaning": "Presence of something in only small, insufficient amounts; scarcity",
              "derivatives": [
                {
                  "word": "Paucity",
                  "breakdown": "PAUC+ITY",
                  "def": "Presence of something in only small, insufficient amounts; scarcity",
                  "catContext": "Critics questioned whether the initiative was merely paucity rather than a sustainable structural reform."
                },
                {
                  "word": "Diminution",
                  "breakdown": "DE+MINU+TION",
                  "def": "Reduction in the size, extent, or importance of something",
                  "catContext": "Critics questioned whether the initiative was merely diminution rather than a sustainable structural reform."
                },
                {
                  "word": "Minuscule",
                  "breakdown": "MINUS+CULE",
                  "def": "Extremely small; tiny",
                  "catContext": "Critics questioned whether the initiative was merely minuscule rather than a sustainable structural reform."
                },
                {
                  "word": "Minute",
                  "breakdown": "MINUTUS",
                  "def": "Extremely small as to size, detail, or significance",
                  "catContext": "Critics questioned whether the initiative was merely minute rather than a sustainable structural reform."
                },
                {
                  "word": "Minority",
                  "breakdown": "MINOR+ITY",
                  "def": "Smaller number or part, less than half",
                  "catContext": "Critics questioned whether the initiative was merely minority rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Panacea (Remedy for all difficulties or diseases; cure-all)",
                  "negative": "Paucity (Presence of something in only small, insufficient amounts; scarcity)",
                  "rootKey": "PAN+AKEA vs PAUC+ITY"
                },
                {
                  "positive": "Omniscient (Knowing everything; possessing infinite knowledge)",
                  "negative": "Diminution (Reduction in the size, extent, or importance of something)",
                  "rootKey": "OMNI+SCI+ENT vs DE+MINU+TION"
                },
                {
                  "positive": "Omnipresent (Present everywhere at the same time; ubiquitous)",
                  "negative": "Minuscule (Extremely small; tiny)",
                  "rootKey": "OMNI+PRESENT vs MINUS+CULE"
                },
                {
                  "positive": "Pandemic (Prevalent over a whole continent or world)",
                  "negative": "Minute (Extremely small as to size, detail, or significance)",
                  "rootKey": "PAN+DEM+IC vs MINUTUS"
                },
                {
                  "positive": "Panorama (Unbroken view of the entire region)",
                  "negative": "Minority (Smaller number or part, less than half)",
                  "rootKey": "PAN+ORAMA vs MINOR+ITY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **panacea** nature of theoretical models with the **paucity** reality of human behavior. While proponents emphasize the **omniscient** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **diminution** consequences.",
              "highlights": [
                {
                  "word": "panacea",
                  "root": "PAN+AKEA",
                  "note": "Key concept: Remedy for all difficulties or diseases; cure-all"
                },
                {
                  "word": "paucity",
                  "root": "PAUC+ITY",
                  "note": "Critical contrast: Presence of something in only small, insufficient amounts; scarcity"
                },
                {
                  "word": "omniscient",
                  "root": "OMNI+SCI+ENT",
                  "note": "Strategic ideal: Knowing everything; possessing infinite knowledge"
                },
                {
                  "word": "diminution",
                  "root": "DE+MINU+TION",
                  "note": "Pitfall/Critique: Reduction in the size, extent, or importance of something"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-5-3-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **panacea** in intent but **diminution** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (remedy for all difficulties or diseases; cure-all), but bungled the execution in a flawed manner (reduction in the size, extent, or importance of something).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Panacea = Remedy for all difficulties or diseases; cure-all.",
                "Break down: Diminution = Reduction in the size, extent, or importance of something.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "PANACEA (Remedy for all difficulties or diseases; cure-all) denotes good intent, while DIMINUTION (Reduction in the size, extent, or importance of something) critiques flawed execution."
            },
            {
              "id": "q-5-3-2",
              "prompt": "Which word from this lesson signifies 'Present everywhere at the same time; ubiquitous'?",
              "options": [
                "Paucity",
                "Omnipresent",
                "Minuscule",
                "Omniscient"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root PAN / OMNI.",
                "Breakdown: OMNI+PRESENT."
              ],
              "explanation": "OMNIPRESENT (OMNI+PRESENT) means Present everywhere at the same time; ubiquitous."
            },
            {
              "id": "q-5-3-3",
              "prompt": "If an essay claims that an opponent's defense is '**paucity**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being presence of something in only small, insufficient amounts; scarcity.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Paucity.",
                "Meaning: Presence of something in only small, insufficient amounts; scarcity."
              ],
              "explanation": "PAUCITY (PAUC+ITY) means Presence of something in only small, insufficient amounts; scarcity."
            },
            {
              "id": "q-5-3-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Panacea vs Paucity",
                "Panacea vs Omniscient",
                "Paucity vs Diminution",
                "Omnipresent vs Pandemic"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast PAN / OMNI with PAUCI / MIN / OLIG.",
                "Panacea vs Paucity."
              ],
              "explanation": "Panacea (PAN / OMNI) directly contrasts with Paucity (PAUCI / MIN / OLIG)."
            }
          ]
        },
        {
          "id": "les-5-4",
          "lessonNumber": 4,
          "title": "Origins & Mortality: GEN/GENE vs MORT/NECR",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Origins & Mortality: GEN/GENE vs MORT/NECR",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between GEN / GENE / NAT and MORT / NECR / MORB provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "GEN / GENE / NAT represents foundational root concepts, while MORT / NECR / MORB establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: GEN / GENE / NAT",
              "origin": "High-Yield Greek/Latin Root Family (GEN / GENE / NAT)",
              "coreMeaning": "Diverse in character or content; composed of distinct parts",
              "derivatives": [
                {
                  "word": "Heterogeneous",
                  "breakdown": "HETERO+GEN+EOUS",
                  "def": "Diverse in character or content; composed of distinct parts",
                  "catContext": "The author evaluates the historical implications of heterogeneous in institutional policymaking."
                },
                {
                  "word": "Homogeneous",
                  "breakdown": "HOMO+GEN+EOUS",
                  "def": "Of the same kind; uniform throughout",
                  "catContext": "The author evaluates the historical implications of homogeneous in institutional policymaking."
                },
                {
                  "word": "Indigenous",
                  "breakdown": "INDI+GEN+OUS",
                  "def": "Originating naturally in a particular land; native",
                  "catContext": "The author evaluates the historical implications of indigenous in institutional policymaking."
                },
                {
                  "word": "Genesis",
                  "breakdown": "GEN+ESIS",
                  "def": "Origin or mode of formation of something",
                  "catContext": "The author evaluates the historical implications of genesis in institutional policymaking."
                },
                {
                  "word": "Progeny",
                  "breakdown": "PRO+GENY",
                  "def": "Descendant or the descendants of a person/animal",
                  "catContext": "The author evaluates the historical implications of progeny in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: MORT / NECR / MORB",
              "origin": "High-Yield Greek/Latin Root Family (MORT / NECR / MORB)",
              "coreMeaning": "At the point of death; in terminal decline; lacking vitality",
              "derivatives": [
                {
                  "word": "Moribund",
                  "breakdown": "MORI+BUND",
                  "def": "At the point of death; in terminal decline; lacking vitality",
                  "catContext": "Critics questioned whether the initiative was merely moribund rather than a sustainable structural reform."
                },
                {
                  "word": "Mortality",
                  "breakdown": "MORT+ALITY",
                  "def": "State of being subject to death; death rate",
                  "catContext": "Critics questioned whether the initiative was merely mortality rather than a sustainable structural reform."
                },
                {
                  "word": "Morbid",
                  "breakdown": "MORB+ID",
                  "def": "Characterized by abnormal interest in disturbing subjects",
                  "catContext": "Critics questioned whether the initiative was merely morbid rather than a sustainable structural reform."
                },
                {
                  "word": "Necrosis",
                  "breakdown": "NECR+OSIS",
                  "def": "Death of most or all cells in an organ or tissue",
                  "catContext": "Critics questioned whether the initiative was merely necrosis rather than a sustainable structural reform."
                },
                {
                  "word": "Mortify",
                  "breakdown": "MORT+FY",
                  "def": "Cause someone to feel embarrassed, ashamed, or humiliated",
                  "catContext": "Critics questioned whether the initiative was merely mortify rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Heterogeneous (Diverse in character or content; composed of distinct parts)",
                  "negative": "Moribund (At the point of death; in terminal decline; lacking vitality)",
                  "rootKey": "HETERO+GEN+EOUS vs MORI+BUND"
                },
                {
                  "positive": "Homogeneous (Of the same kind; uniform throughout)",
                  "negative": "Mortality (State of being subject to death; death rate)",
                  "rootKey": "HOMO+GEN+EOUS vs MORT+ALITY"
                },
                {
                  "positive": "Indigenous (Originating naturally in a particular land; native)",
                  "negative": "Morbid (Characterized by abnormal interest in disturbing subjects)",
                  "rootKey": "INDI+GEN+OUS vs MORB+ID"
                },
                {
                  "positive": "Genesis (Origin or mode of formation of something)",
                  "negative": "Necrosis (Death of most or all cells in an organ or tissue)",
                  "rootKey": "GEN+ESIS vs NECR+OSIS"
                },
                {
                  "positive": "Progeny (Descendant or the descendants of a person/animal)",
                  "negative": "Mortify (Cause someone to feel embarrassed, ashamed, or humiliated)",
                  "rootKey": "PRO+GENY vs MORT+FY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **heterogeneous** nature of theoretical models with the **moribund** reality of human behavior. While proponents emphasize the **homogeneous** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **mortality** consequences.",
              "highlights": [
                {
                  "word": "heterogeneous",
                  "root": "HETERO+GEN+EOUS",
                  "note": "Key concept: Diverse in character or content; composed of distinct parts"
                },
                {
                  "word": "moribund",
                  "root": "MORI+BUND",
                  "note": "Critical contrast: At the point of death; in terminal decline; lacking vitality"
                },
                {
                  "word": "homogeneous",
                  "root": "HOMO+GEN+EOUS",
                  "note": "Strategic ideal: Of the same kind; uniform throughout"
                },
                {
                  "word": "mortality",
                  "root": "MORT+ALITY",
                  "note": "Pitfall/Critique: State of being subject to death; death rate"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-5-4-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **heterogeneous** in intent but **mortality** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (diverse in character or content; composed of distinct parts), but bungled the execution in a flawed manner (state of being subject to death; death rate).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Heterogeneous = Diverse in character or content; composed of distinct parts.",
                "Break down: Mortality = State of being subject to death; death rate.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "HETEROGENEOUS (Diverse in character or content; composed of distinct parts) denotes good intent, while MORTALITY (State of being subject to death; death rate) critiques flawed execution."
            },
            {
              "id": "q-5-4-2",
              "prompt": "Which word from this lesson signifies 'Originating naturally in a particular land; native'?",
              "options": [
                "Moribund",
                "Indigenous",
                "Morbid",
                "Homogeneous"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root GEN / GENE / NAT.",
                "Breakdown: INDI+GEN+OUS."
              ],
              "explanation": "INDIGENOUS (INDI+GEN+OUS) means Originating naturally in a particular land; native."
            },
            {
              "id": "q-5-4-3",
              "prompt": "If an essay claims that an opponent's defense is '**moribund**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being at the point of death; in terminal decline; lacking vitality.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Moribund.",
                "Meaning: At the point of death; in terminal decline; lacking vitality."
              ],
              "explanation": "MORIBUND (MORI+BUND) means At the point of death; in terminal decline; lacking vitality."
            },
            {
              "id": "q-5-4-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Heterogeneous vs Moribund",
                "Heterogeneous vs Homogeneous",
                "Moribund vs Mortality",
                "Indigenous vs Genesis"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast GEN / GENE / NAT with MORT / NECR / MORB.",
                "Heterogeneous vs Moribund."
              ],
              "explanation": "Heterogeneous (GEN / GENE / NAT) directly contrasts with Moribund (MORT / NECR / MORB)."
            }
          ]
        },
        {
          "id": "les-5-5",
          "lessonNumber": 5,
          "title": "Flow, Transition & Succession: FLU/FLUX vs CED/CESS",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Flow, Transition & Succession: FLU/FLUX vs CED/CESS",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between FLU / FLUX and CED / CESS / CEED provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "FLU / FLUX represents foundational root concepts, while CED / CESS / CEED establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: FLU / FLUX",
              "origin": "High-Yield Greek/Latin Root Family (FLU / FLUX)",
              "coreMeaning": "Continuous change, passage, or movement",
              "derivatives": [
                {
                  "word": "Flux",
                  "breakdown": "FLUX",
                  "def": "Continuous change, passage, or movement",
                  "catContext": "The author evaluates the historical implications of flux in institutional policymaking."
                },
                {
                  "word": "Effluent",
                  "breakdown": "EX+FLU+ENT",
                  "def": "Liquid waste or sewage discharged into river/sea",
                  "catContext": "The author evaluates the historical implications of effluent in institutional policymaking."
                },
                {
                  "word": "Superfluous",
                  "breakdown": "SUPER+FLU+OUS",
                  "def": "Exceeding what is sufficient or necessary; redundant",
                  "catContext": "The author evaluates the historical implications of superfluous in institutional policymaking."
                },
                {
                  "word": "Fluent",
                  "breakdown": "FLU+ENT",
                  "def": "Able to express oneself easily and articulately",
                  "catContext": "The author evaluates the historical implications of fluent in institutional policymaking."
                },
                {
                  "word": "Affluence",
                  "breakdown": "AD+FLU+ENCE",
                  "def": "State of having a great deal of money; wealth",
                  "catContext": "The author evaluates the historical implications of affluence in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: CED / CESS / CEED",
              "origin": "High-Yield Greek/Latin Root Family (CED / CESS / CEED)",
              "coreMeaning": "Give up power or territory; surrender formally",
              "derivatives": [
                {
                  "word": "Cede",
                  "breakdown": "CED+E",
                  "def": "Give up power or territory; surrender formally",
                  "catContext": "Critics questioned whether the initiative was merely cede rather than a sustainable structural reform."
                },
                {
                  "word": "Incessant",
                  "breakdown": "IN+CESS+ANT",
                  "def": "Continuing without pause or interruption",
                  "catContext": "Critics questioned whether the initiative was merely incessant rather than a sustainable structural reform."
                },
                {
                  "word": "Precedent",
                  "breakdown": "PRE+CED+ENT",
                  "def": "Earlier event regarded as guide/example",
                  "catContext": "Critics questioned whether the initiative was merely precedent rather than a sustainable structural reform."
                },
                {
                  "word": "Recede",
                  "breakdown": "RE+CED+E",
                  "def": "Go or move back or further away from previous point",
                  "catContext": "Critics questioned whether the initiative was merely recede rather than a sustainable structural reform."
                },
                {
                  "word": "Concede",
                  "breakdown": "CON+CED+E",
                  "def": "Admit that something is true after first denying it",
                  "catContext": "Critics questioned whether the initiative was merely concede rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Flux (Continuous change, passage, or movement)",
                  "negative": "Cede (Give up power or territory; surrender formally)",
                  "rootKey": "FLUX vs CED+E"
                },
                {
                  "positive": "Effluent (Liquid waste or sewage discharged into river/sea)",
                  "negative": "Incessant (Continuing without pause or interruption)",
                  "rootKey": "EX+FLU+ENT vs IN+CESS+ANT"
                },
                {
                  "positive": "Superfluous (Exceeding what is sufficient or necessary; redundant)",
                  "negative": "Precedent (Earlier event regarded as guide/example)",
                  "rootKey": "SUPER+FLU+OUS vs PRE+CED+ENT"
                },
                {
                  "positive": "Fluent (Able to express oneself easily and articulately)",
                  "negative": "Recede (Go or move back or further away from previous point)",
                  "rootKey": "FLU+ENT vs RE+CED+E"
                },
                {
                  "positive": "Affluence (State of having a great deal of money; wealth)",
                  "negative": "Concede (Admit that something is true after first denying it)",
                  "rootKey": "AD+FLU+ENCE vs CON+CED+E"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **flux** nature of theoretical models with the **cede** reality of human behavior. While proponents emphasize the **effluent** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **incessant** consequences.",
              "highlights": [
                {
                  "word": "flux",
                  "root": "FLUX",
                  "note": "Key concept: Continuous change, passage, or movement"
                },
                {
                  "word": "cede",
                  "root": "CED+E",
                  "note": "Critical contrast: Give up power or territory; surrender formally"
                },
                {
                  "word": "effluent",
                  "root": "EX+FLU+ENT",
                  "note": "Strategic ideal: Liquid waste or sewage discharged into river/sea"
                },
                {
                  "word": "incessant",
                  "root": "IN+CESS+ANT",
                  "note": "Pitfall/Critique: Continuing without pause or interruption"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-5-5-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **flux** in intent but **incessant** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (continuous change, passage, or movement), but bungled the execution in a flawed manner (continuing without pause or interruption).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Flux = Continuous change, passage, or movement.",
                "Break down: Incessant = Continuing without pause or interruption.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "FLUX (Continuous change, passage, or movement) denotes good intent, while INCESSANT (Continuing without pause or interruption) critiques flawed execution."
            },
            {
              "id": "q-5-5-2",
              "prompt": "Which word from this lesson signifies 'Exceeding what is sufficient or necessary; redundant'?",
              "options": [
                "Cede",
                "Superfluous",
                "Precedent",
                "Effluent"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root FLU / FLUX.",
                "Breakdown: SUPER+FLU+OUS."
              ],
              "explanation": "SUPERFLUOUS (SUPER+FLU+OUS) means Exceeding what is sufficient or necessary; redundant."
            },
            {
              "id": "q-5-5-3",
              "prompt": "If an essay claims that an opponent's defense is '**cede**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being give up power or territory; surrender formally.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Cede.",
                "Meaning: Give up power or territory; surrender formally."
              ],
              "explanation": "CEDE (CED+E) means Give up power or territory; surrender formally."
            },
            {
              "id": "q-5-5-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Flux vs Cede",
                "Flux vs Effluent",
                "Cede vs Incessant",
                "Superfluous vs Fluent"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast FLU / FLUX with CED / CESS / CEED.",
                "Flux vs Cede."
              ],
              "explanation": "Flux (FLU / FLUX) directly contrasts with Cede (CED / CESS / CEED)."
            }
          ]
        },
        {
          "id": "les-5-6",
          "lessonNumber": 6,
          "title": "Magnitude & Brevity: MAGN/MAX vs BREV/CURT",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Magnitude & Brevity: MAGN/MAX vs BREV/CURT",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between MAGN / MAX / GRAND and BREV / CURT / TRUNC provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "MAGN / MAX / GRAND represents foundational root concepts, while BREV / CURT / TRUNC establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: MAGN / MAX / GRAND",
              "origin": "High-Yield Greek/Latin Root Family (MAGN / MAX / GRAND)",
              "coreMeaning": "Great size, extent, or profound importance",
              "derivatives": [
                {
                  "word": "Magnitude",
                  "breakdown": "MAGN+ITUDE",
                  "def": "Great size, extent, or profound importance",
                  "catContext": "The author evaluates the historical implications of magnitude in institutional policymaking."
                },
                {
                  "word": "Magniloquent",
                  "breakdown": "MAGNI+LOQU+ENT",
                  "def": "Using high-flown, bombastic language",
                  "catContext": "The author evaluates the historical implications of magniloquent in institutional policymaking."
                },
                {
                  "word": "Maxim",
                  "breakdown": "MAXIM",
                  "def": "Short, pithy statement expressing a general truth",
                  "catContext": "The author evaluates the historical implications of maxim in institutional policymaking."
                },
                {
                  "word": "Magnify",
                  "breakdown": "MAGN+FY",
                  "def": "Make something appear larger than it is",
                  "catContext": "The author evaluates the historical implications of magnify in institutional policymaking."
                },
                {
                  "word": "Magnificent",
                  "breakdown": "MAGNI+FIC+ENT",
                  "def": "Impressively beautiful, elaborate, or noble",
                  "catContext": "The author evaluates the historical implications of magnificent in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: BREV / CURT / TRUNC",
              "origin": "High-Yield Greek/Latin Root Family (BREV / CURT / TRUNC)",
              "coreMeaning": "Concise and exact use of words; shortness",
              "derivatives": [
                {
                  "word": "Brevity",
                  "breakdown": "BREV+ITY",
                  "def": "Concise and exact use of words; shortness",
                  "catContext": "Critics questioned whether the initiative was merely brevity rather than a sustainable structural reform."
                },
                {
                  "word": "Curtail",
                  "breakdown": "CURT+TAIL",
                  "def": "Reduce in extent or quantity; impose restriction on",
                  "catContext": "Critics questioned whether the initiative was merely curtail rather than a sustainable structural reform."
                },
                {
                  "word": "Truncate",
                  "breakdown": "TRUNC+ATE",
                  "def": "Shorten by cutting off the top or the end",
                  "catContext": "Critics questioned whether the initiative was merely truncate rather than a sustainable structural reform."
                },
                {
                  "word": "Brief",
                  "breakdown": "BREVIS",
                  "def": "Of short duration; concise in words",
                  "catContext": "Critics questioned whether the initiative was merely brief rather than a sustainable structural reform."
                },
                {
                  "word": "Curt",
                  "breakdown": "CURTUS",
                  "def": "Rudely brief or abrupt in speech/manner",
                  "catContext": "Critics questioned whether the initiative was merely curt rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Magnitude (Great size, extent, or profound importance)",
                  "negative": "Brevity (Concise and exact use of words; shortness)",
                  "rootKey": "MAGN+ITUDE vs BREV+ITY"
                },
                {
                  "positive": "Magniloquent (Using high-flown, bombastic language)",
                  "negative": "Curtail (Reduce in extent or quantity; impose restriction on)",
                  "rootKey": "MAGNI+LOQU+ENT vs CURT+TAIL"
                },
                {
                  "positive": "Maxim (Short, pithy statement expressing a general truth)",
                  "negative": "Truncate (Shorten by cutting off the top or the end)",
                  "rootKey": "MAXIM vs TRUNC+ATE"
                },
                {
                  "positive": "Magnify (Make something appear larger than it is)",
                  "negative": "Brief (Of short duration; concise in words)",
                  "rootKey": "MAGN+FY vs BREVIS"
                },
                {
                  "positive": "Magnificent (Impressively beautiful, elaborate, or noble)",
                  "negative": "Curt (Rudely brief or abrupt in speech/manner)",
                  "rootKey": "MAGNI+FIC+ENT vs CURTUS"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **magnitude** nature of theoretical models with the **brevity** reality of human behavior. While proponents emphasize the **magniloquent** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **curtail** consequences.",
              "highlights": [
                {
                  "word": "magnitude",
                  "root": "MAGN+ITUDE",
                  "note": "Key concept: Great size, extent, or profound importance"
                },
                {
                  "word": "brevity",
                  "root": "BREV+ITY",
                  "note": "Critical contrast: Concise and exact use of words; shortness"
                },
                {
                  "word": "magniloquent",
                  "root": "MAGNI+LOQU+ENT",
                  "note": "Strategic ideal: Using high-flown, bombastic language"
                },
                {
                  "word": "curtail",
                  "root": "CURT+TAIL",
                  "note": "Pitfall/Critique: Reduce in extent or quantity; impose restriction on"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-5-6-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **magnitude** in intent but **curtail** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (great size, extent, or profound importance), but bungled the execution in a flawed manner (reduce in extent or quantity; impose restriction on).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Magnitude = Great size, extent, or profound importance.",
                "Break down: Curtail = Reduce in extent or quantity; impose restriction on.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "MAGNITUDE (Great size, extent, or profound importance) denotes good intent, while CURTAIL (Reduce in extent or quantity; impose restriction on) critiques flawed execution."
            },
            {
              "id": "q-5-6-2",
              "prompt": "Which word from this lesson signifies 'Short, pithy statement expressing a general truth'?",
              "options": [
                "Brevity",
                "Maxim",
                "Truncate",
                "Magniloquent"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root MAGN / MAX / GRAND.",
                "Breakdown: MAXIM."
              ],
              "explanation": "MAXIM (MAXIM) means Short, pithy statement expressing a general truth."
            },
            {
              "id": "q-5-6-3",
              "prompt": "If an essay claims that an opponent's defense is '**brevity**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being concise and exact use of words; shortness.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Brevity.",
                "Meaning: Concise and exact use of words; shortness."
              ],
              "explanation": "BREVITY (BREV+ITY) means Concise and exact use of words; shortness."
            },
            {
              "id": "q-5-6-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Magnitude vs Brevity",
                "Magnitude vs Magniloquent",
                "Brevity vs Curtail",
                "Maxim vs Magnify"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast MAGN / MAX / GRAND with BREV / CURT / TRUNC.",
                "Magnitude vs Brevity."
              ],
              "explanation": "Magnitude (MAGN / MAX / GRAND) directly contrasts with Brevity (BREV / CURT / TRUNC)."
            }
          ]
        }
      ],
      "masteryQuiz": [
        {
          "id": "mq-5-1",
          "prompt": "In a Category 5 Reading Comprehension passage, how does the author contrast theoretical assertions with empirical reality?",
          "options": [
            "By contrasting idealized conceptual frameworks with the complex reality of human institutions.",
            "By adopting an uncritical, complacent attitude towards government policy.",
            "By expressing total agnostic indifference.",
            "By relying exclusively on circular tautologies."
          ],
          "correctIndex": 0,
          "explanation": "CAT passages typically set up an analytical tension between idealized theories and empirical ground realities."
        },
        {
          "id": "mq-5-2",
          "prompt": "Which term from Category 5 carries an overwhelmingly **positive** valence when used by an author?",
          "options": [
            "Anachronism",
            "Perpetuate",
            "Immutable",
            "Paucity"
          ],
          "correctIndex": 0,
          "explanation": "Anachronism carries a positive root connotation, whereas the other options are negative tone markers."
        },
        {
          "id": "mq-5-3",
          "prompt": "If an essay argues that an institution is guilty of '**moribund**', the author is:",
          "options": [
            "Praising the institution with enthusiastic plaudits.",
            "Criticizing the institution for at the point of death; in terminal decline; lacking vitality.",
            "Declaring the institution legally solvent and exculpated.",
            "Taking an egalitarian stance."
          ],
          "correctIndex": 1,
          "explanation": "Moribund means At the point of death; in terminal decline; lacking vitality."
        },
        {
          "id": "mq-5-4",
          "prompt": "What is the underlying etymological root of **Panacea**?",
          "options": [
            "High-Yield Greek/Latin Root Family (PAN / OMNI)",
            "High-Yield Greek/Latin Root Family (PAUCI / MIN / OLIG)",
            "High-Yield Greek/Latin Root Family (CED / CESS / CEED)",
            "High-Yield Greek/Latin Root Family (BREV / CURT / TRUNC)"
          ],
          "correctIndex": 0,
          "explanation": "Panacea is derived from High-Yield Greek/Latin Root Family (PAN / OMNI)."
        },
        {
          "id": "mq-5-5",
          "prompt": "An author describes a policy as '**flux** while warning against **cede** consequences.' What is the author's tone?",
          "options": [
            "Judicious, balanced, and analytically rigorous in weighing benefits against pitfalls.",
            "Fiercely vitriolic and purely destructive.",
            "Apathetic, bored, and disengaged.",
            "Laudatory and uncritical."
          ],
          "correctIndex": 0,
          "explanation": "Balancing positive qualities with cautions against negative pitfalls indicates a judicious and analytically rigorous tone."
        },
        {
          "id": "mq-5-6",
          "prompt": "Which of the following distinguishes the core concept of Lesson 5.1 from Lesson 5.6 in this category?",
          "options": [
            "Lesson 5.1 focuses on foundational valences (Chronology & Eras: CHRON/TEMP vs AETERN/PERP), while Lesson 5.6 develops specialized applications (Magnitude & Brevity: MAGN/MAX vs BREV/CURT).",
            "They are identical lessons repeated twice.",
            "Lesson 6 is purely historical with zero relevance to modern CAT reading.",
            "Lesson 1 is only for grammar error identification."
          ],
          "correctIndex": 0,
          "explanation": "The curriculum progresses systematically from foundational concepts (Chronology & Eras: CHRON/TEMP vs AETERN/PERP) to advanced critical frameworks (Magnitude & Brevity: MAGN/MAX vs BREV/CURT)."
        }
      ]
    },
    {
      "id": "cat-6",
      "number": 6,
      "title": "Epistemic Disciplines: -OLOGY & -ITICS",
      "tagline": "Master the #1 highest-frequency academic suffixes and critical frameworks in CAT Philosophy & Theory.",
      "icon": "graduation-cap",
      "color": "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      "accent": "text-cyan-400",
      "lessons": [
        {
          "id": "les-6-1",
          "lessonNumber": 1,
          "title": "Core Foundations: EPISTEMOLOGY vs ONTOLOGY",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Core Foundations: EPISTEMOLOGY vs ONTOLOGY",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between EPISTEME + OLOGY and ONTOS + OLOGY provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "EPISTEME + OLOGY represents foundational root concepts, while ONTOS + OLOGY establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: EPISTEME + OLOGY",
              "origin": "High-Yield Greek/Latin Root Family (EPISTEME + OLOGY)",
              "coreMeaning": "Theory of knowledge, validity, scope, and methods",
              "derivatives": [
                {
                  "word": "Epistemology",
                  "breakdown": "EPISTEME+OLOGY",
                  "def": "Theory of knowledge, validity, scope, and methods",
                  "catContext": "The author evaluates the historical implications of epistemology in institutional policymaking."
                },
                {
                  "word": "Epistemic",
                  "breakdown": "EPISTEME+IC",
                  "def": "Relating to knowledge or degree of its validation",
                  "catContext": "The author evaluates the historical implications of epistemic in institutional policymaking."
                },
                {
                  "word": "Epistemologist",
                  "breakdown": "EPISTEME+OLOGIST",
                  "def": "Philosopher who studies knowledge systems",
                  "catContext": "The author evaluates the historical implications of epistemologist in institutional policymaking."
                },
                {
                  "word": "Episteme",
                  "breakdown": "EPISTEME",
                  "def": "System of understanding or scientific knowledge",
                  "catContext": "The author evaluates the historical implications of episteme in institutional policymaking."
                },
                {
                  "word": "Epistemological",
                  "breakdown": "EPISTEME+OLOGICAL",
                  "def": "Relating to the philosophical theory of knowledge",
                  "catContext": "The author evaluates the historical implications of epistemological in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: ONTOS + OLOGY",
              "origin": "High-Yield Greek/Latin Root Family (ONTOS + OLOGY)",
              "coreMeaning": "Branch of metaphysics dealing with the nature of being/reality",
              "derivatives": [
                {
                  "word": "Ontology",
                  "breakdown": "ONTOS+OLOGY",
                  "def": "Branch of metaphysics dealing with the nature of being/reality",
                  "catContext": "Critics questioned whether the initiative was merely ontology rather than a sustainable structural reform."
                },
                {
                  "word": "Ontological",
                  "breakdown": "ONTOS+LOGICAL",
                  "def": "Relating to the philosophical study of being and existence",
                  "catContext": "Critics questioned whether the initiative was merely ontological rather than a sustainable structural reform."
                },
                {
                  "word": "Ontologist",
                  "breakdown": "ONTOS+OLOGIST",
                  "def": "Philosopher who investigates what entities exist",
                  "catContext": "Critics questioned whether the initiative was merely ontologist rather than a sustainable structural reform."
                },
                {
                  "word": "Ontogeny",
                  "breakdown": "ONTO+GENY",
                  "def": "Development of an individual organism",
                  "catContext": "Critics questioned whether the initiative was merely ontogeny rather than a sustainable structural reform."
                },
                {
                  "word": "Deontology",
                  "breakdown": "DEON+OLOGY",
                  "def": "Ethical theory based on moral duty and rules",
                  "catContext": "Critics questioned whether the initiative was merely deontology rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Epistemology (Theory of knowledge, validity, scope, and methods)",
                  "negative": "Ontology (Branch of metaphysics dealing with the nature of being/reality)",
                  "rootKey": "EPISTEME+OLOGY vs ONTOS+OLOGY"
                },
                {
                  "positive": "Epistemic (Relating to knowledge or degree of its validation)",
                  "negative": "Ontological (Relating to the philosophical study of being and existence)",
                  "rootKey": "EPISTEME+IC vs ONTOS+LOGICAL"
                },
                {
                  "positive": "Epistemologist (Philosopher who studies knowledge systems)",
                  "negative": "Ontologist (Philosopher who investigates what entities exist)",
                  "rootKey": "EPISTEME+OLOGIST vs ONTOS+OLOGIST"
                },
                {
                  "positive": "Episteme (System of understanding or scientific knowledge)",
                  "negative": "Ontogeny (Development of an individual organism)",
                  "rootKey": "EPISTEME vs ONTO+GENY"
                },
                {
                  "positive": "Epistemological (Relating to the philosophical theory of knowledge)",
                  "negative": "Deontology (Ethical theory based on moral duty and rules)",
                  "rootKey": "EPISTEME+OLOGICAL vs DEON+OLOGY"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **epistemology** nature of theoretical models with the **ontology** reality of human behavior. While proponents emphasize the **epistemic** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **ontological** consequences.",
              "highlights": [
                {
                  "word": "epistemology",
                  "root": "EPISTEME+OLOGY",
                  "note": "Key concept: Theory of knowledge, validity, scope, and methods"
                },
                {
                  "word": "ontology",
                  "root": "ONTOS+OLOGY",
                  "note": "Critical contrast: Branch of metaphysics dealing with the nature of being/reality"
                },
                {
                  "word": "epistemic",
                  "root": "EPISTEME+IC",
                  "note": "Strategic ideal: Relating to knowledge or degree of its validation"
                },
                {
                  "word": "ontological",
                  "root": "ONTOS+LOGICAL",
                  "note": "Pitfall/Critique: Relating to the philosophical study of being and existence"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-6-1-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **epistemology** in intent but **ontological** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (theory of knowledge, validity, scope, and methods), but bungled the execution in a flawed manner (relating to the philosophical study of being and existence).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Epistemology = Theory of knowledge, validity, scope, and methods.",
                "Break down: Ontological = Relating to the philosophical study of being and existence.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "EPISTEMOLOGY (Theory of knowledge, validity, scope, and methods) denotes good intent, while ONTOLOGICAL (Relating to the philosophical study of being and existence) critiques flawed execution."
            },
            {
              "id": "q-6-1-2",
              "prompt": "Which word from this lesson signifies 'Philosopher who studies knowledge systems'?",
              "options": [
                "Ontology",
                "Epistemologist",
                "Ontologist",
                "Epistemic"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root EPISTEME + OLOGY.",
                "Breakdown: EPISTEME+OLOGIST."
              ],
              "explanation": "EPISTEMOLOGIST (EPISTEME+OLOGIST) means Philosopher who studies knowledge systems."
            },
            {
              "id": "q-6-1-3",
              "prompt": "If an essay claims that an opponent's defense is '**ontology**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being branch of metaphysics dealing with the nature of being/reality.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Ontology.",
                "Meaning: Branch of metaphysics dealing with the nature of being/reality."
              ],
              "explanation": "ONTOLOGY (ONTOS+OLOGY) means Branch of metaphysics dealing with the nature of being/reality."
            },
            {
              "id": "q-6-1-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Epistemology vs Ontology",
                "Epistemology vs Epistemic",
                "Ontology vs Ontological",
                "Epistemologist vs Episteme"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast EPISTEME + OLOGY with ONTOS + OLOGY.",
                "Epistemology vs Ontology."
              ],
              "explanation": "Epistemology (EPISTEME + OLOGY) directly contrasts with Ontology (ONTOS + OLOGY)."
            }
          ]
        },
        {
          "id": "les-6-2",
          "lessonNumber": 2,
          "title": "Purpose & Finality: TELEOLOGY vs ESCHATOLOGY",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Purpose & Finality: TELEOLOGY vs ESCHATOLOGY",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between TELOS + OLOGY and ESCHATOS + OLOGY provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "TELOS + OLOGY represents foundational root concepts, while ESCHATOS + OLOGY establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: TELOS + OLOGY",
              "origin": "High-Yield Greek/Latin Root Family (TELOS + OLOGY)",
              "coreMeaning": "Explanation of phenomena by purpose rather than prior causes",
              "derivatives": [
                {
                  "word": "Teleology",
                  "breakdown": "TELOS+OLOGY",
                  "def": "Explanation of phenomena by purpose rather than prior causes",
                  "catContext": "The author evaluates the historical implications of teleology in institutional policymaking."
                },
                {
                  "word": "Teleological",
                  "breakdown": "TELOS+LOGICAL",
                  "def": "Relating to the doctrine of design/purpose in nature",
                  "catContext": "The author evaluates the historical implications of teleological in institutional policymaking."
                },
                {
                  "word": "Teleologist",
                  "breakdown": "TELOS+OLOGIST",
                  "def": "Thinker who explains nature through final goals",
                  "catContext": "The author evaluates the historical implications of teleologist in institutional policymaking."
                },
                {
                  "word": "Dysteleology",
                  "breakdown": "DYS+TELOS+OLOGY",
                  "def": "Philosophical view that existence has no ultimate purpose",
                  "catContext": "The author evaluates the historical implications of dysteleology in institutional policymaking."
                },
                {
                  "word": "Telic",
                  "breakdown": "TEL+IC",
                  "def": "Expressing purpose or tending toward an end-goal",
                  "catContext": "The author evaluates the historical implications of telic in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: ESCHATOS + OLOGY",
              "origin": "High-Yield Greek/Latin Root Family (ESCHATOS + OLOGY)",
              "coreMeaning": "Theology/philosophy of death, judgment, and final destiny",
              "derivatives": [
                {
                  "word": "Eschatology",
                  "breakdown": "ESCHATOS+OLOGY",
                  "def": "Theology/philosophy of death, judgment, and final destiny",
                  "catContext": "Critics questioned whether the initiative was merely eschatology rather than a sustainable structural reform."
                },
                {
                  "word": "Eschatological",
                  "breakdown": "ESCHATOS+LOGICAL",
                  "def": "Relating to death, judgment, or the end of the world",
                  "catContext": "Critics questioned whether the initiative was merely eschatological rather than a sustainable structural reform."
                },
                {
                  "word": "Eschatologist",
                  "breakdown": "ESCHATOS+OLOGIST",
                  "def": "Scholar of ultimate endpoints and apocalyptic destiny",
                  "catContext": "Critics questioned whether the initiative was merely eschatologist rather than a sustainable structural reform."
                },
                {
                  "word": "Eschaton",
                  "breakdown": "ESCHATON",
                  "def": "The final event in the divine plan, the end of the world",
                  "catContext": "Critics questioned whether the initiative was merely eschaton rather than a sustainable structural reform."
                },
                {
                  "word": "Apocalyptic",
                  "breakdown": "APO+CALYP+TIC",
                  "def": "Describing or prophesying complete destruction",
                  "catContext": "Critics questioned whether the initiative was merely apocalyptic rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Teleology (Explanation of phenomena by purpose rather than prior causes)",
                  "negative": "Eschatology (Theology/philosophy of death, judgment, and final destiny)",
                  "rootKey": "TELOS+OLOGY vs ESCHATOS+OLOGY"
                },
                {
                  "positive": "Teleological (Relating to the doctrine of design/purpose in nature)",
                  "negative": "Eschatological (Relating to death, judgment, or the end of the world)",
                  "rootKey": "TELOS+LOGICAL vs ESCHATOS+LOGICAL"
                },
                {
                  "positive": "Teleologist (Thinker who explains nature through final goals)",
                  "negative": "Eschatologist (Scholar of ultimate endpoints and apocalyptic destiny)",
                  "rootKey": "TELOS+OLOGIST vs ESCHATOS+OLOGIST"
                },
                {
                  "positive": "Dysteleology (Philosophical view that existence has no ultimate purpose)",
                  "negative": "Eschaton (The final event in the divine plan, the end of the world)",
                  "rootKey": "DYS+TELOS+OLOGY vs ESCHATON"
                },
                {
                  "positive": "Telic (Expressing purpose or tending toward an end-goal)",
                  "negative": "Apocalyptic (Describing or prophesying complete destruction)",
                  "rootKey": "TEL+IC vs APO+CALYP+TIC"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **teleology** nature of theoretical models with the **eschatology** reality of human behavior. While proponents emphasize the **teleological** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **eschatological** consequences.",
              "highlights": [
                {
                  "word": "teleology",
                  "root": "TELOS+OLOGY",
                  "note": "Key concept: Explanation of phenomena by purpose rather than prior causes"
                },
                {
                  "word": "eschatology",
                  "root": "ESCHATOS+OLOGY",
                  "note": "Critical contrast: Theology/philosophy of death, judgment, and final destiny"
                },
                {
                  "word": "teleological",
                  "root": "TELOS+LOGICAL",
                  "note": "Strategic ideal: Relating to the doctrine of design/purpose in nature"
                },
                {
                  "word": "eschatological",
                  "root": "ESCHATOS+LOGICAL",
                  "note": "Pitfall/Critique: Relating to death, judgment, or the end of the world"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-6-2-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **teleology** in intent but **eschatological** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (explanation of phenomena by purpose rather than prior causes), but bungled the execution in a flawed manner (relating to death, judgment, or the end of the world).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Teleology = Explanation of phenomena by purpose rather than prior causes.",
                "Break down: Eschatological = Relating to death, judgment, or the end of the world.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "TELEOLOGY (Explanation of phenomena by purpose rather than prior causes) denotes good intent, while ESCHATOLOGICAL (Relating to death, judgment, or the end of the world) critiques flawed execution."
            },
            {
              "id": "q-6-2-2",
              "prompt": "Which word from this lesson signifies 'Thinker who explains nature through final goals'?",
              "options": [
                "Eschatology",
                "Teleologist",
                "Eschatologist",
                "Teleological"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root TELOS + OLOGY.",
                "Breakdown: TELOS+OLOGIST."
              ],
              "explanation": "TELEOLOGIST (TELOS+OLOGIST) means Thinker who explains nature through final goals."
            },
            {
              "id": "q-6-2-3",
              "prompt": "If an essay claims that an opponent's defense is '**eschatology**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being theology/philosophy of death, judgment, and final destiny.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Eschatology.",
                "Meaning: Theology/philosophy of death, judgment, and final destiny."
              ],
              "explanation": "ESCHATOLOGY (ESCHATOS+OLOGY) means Theology/philosophy of death, judgment, and final destiny."
            },
            {
              "id": "q-6-2-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Teleology vs Eschatology",
                "Teleology vs Teleological",
                "Eschatology vs Eschatological",
                "Teleologist vs Dysteleology"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast TELOS + OLOGY with ESCHATOS + OLOGY.",
                "Teleology vs Eschatology."
              ],
              "explanation": "Teleology (TELOS + OLOGY) directly contrasts with Eschatology (ESCHATOS + OLOGY)."
            }
          ]
        },
        {
          "id": "les-6-3",
          "lessonNumber": 3,
          "title": "Values & Circular Logic: AXIOLOGY vs TAUTOLOGY",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Values & Circular Logic: AXIOLOGY vs TAUTOLOGY",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between AXIOS + OLOGY and TAUTO + LOGY provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "AXIOS + OLOGY represents foundational root concepts, while TAUTO + LOGY establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: AXIOS + OLOGY",
              "origin": "High-Yield Greek/Latin Root Family (AXIOS + OLOGY)",
              "coreMeaning": "Philosophical study of value, ethics, and aesthetics",
              "derivatives": [
                {
                  "word": "Axiology",
                  "breakdown": "AXIOS+OLOGY",
                  "def": "Philosophical study of value, ethics, and aesthetics",
                  "catContext": "The author evaluates the historical implications of axiology in institutional policymaking."
                },
                {
                  "word": "Axiological",
                  "breakdown": "AXIOS+LOGICAL",
                  "def": "Relating to value theory or moral worth",
                  "catContext": "The author evaluates the historical implications of axiological in institutional policymaking."
                },
                {
                  "word": "Axiologist",
                  "breakdown": "AXIOS+OLOGIST",
                  "def": "Thinker who specializes in theories of human value",
                  "catContext": "The author evaluates the historical implications of axiologist in institutional policymaking."
                },
                {
                  "word": "Axiom",
                  "breakdown": "AXIOMA",
                  "def": "Self-evident truth requiring no proof",
                  "catContext": "The author evaluates the historical implications of axiom in institutional policymaking."
                },
                {
                  "word": "Axiomatic",
                  "breakdown": "AXIOM+ATIC",
                  "def": "Self-evident, unquestionable, taken for granted",
                  "catContext": "The author evaluates the historical implications of axiomatic in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: TAUTO + LOGY",
              "origin": "High-Yield Greek/Latin Root Family (TAUTO + LOGY)",
              "coreMeaning": "Saying the same thing twice in different words; circular logic",
              "derivatives": [
                {
                  "word": "Tautology",
                  "breakdown": "TAUTO+LOGY",
                  "def": "Saying the same thing twice in different words; circular logic",
                  "catContext": "Critics questioned whether the initiative was merely tautology rather than a sustainable structural reform."
                },
                {
                  "word": "Tautological",
                  "breakdown": "TAUTO+LOGICAL",
                  "def": "Redundant, circular, true by logical form alone",
                  "catContext": "Critics questioned whether the initiative was merely tautological rather than a sustainable structural reform."
                },
                {
                  "word": "Tautologist",
                  "breakdown": "TAUTO+LOGIST",
                  "def": "One who uses circular tautological reasoning",
                  "catContext": "Critics questioned whether the initiative was merely tautologist rather than a sustainable structural reform."
                },
                {
                  "word": "Tautologize",
                  "breakdown": "TAUTO+LOGIZE",
                  "def": "Repeat the same idea in different words",
                  "catContext": "Critics questioned whether the initiative was merely tautologize rather than a sustainable structural reform."
                },
                {
                  "word": "Pleonasm",
                  "breakdown": "PLEON+ASM",
                  "def": "Use of more words than needed to express an idea",
                  "catContext": "Critics questioned whether the initiative was merely pleonasm rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Axiology (Philosophical study of value, ethics, and aesthetics)",
                  "negative": "Tautology (Saying the same thing twice in different words; circular logic)",
                  "rootKey": "AXIOS+OLOGY vs TAUTO+LOGY"
                },
                {
                  "positive": "Axiological (Relating to value theory or moral worth)",
                  "negative": "Tautological (Redundant, circular, true by logical form alone)",
                  "rootKey": "AXIOS+LOGICAL vs TAUTO+LOGICAL"
                },
                {
                  "positive": "Axiologist (Thinker who specializes in theories of human value)",
                  "negative": "Tautologist (One who uses circular tautological reasoning)",
                  "rootKey": "AXIOS+OLOGIST vs TAUTO+LOGIST"
                },
                {
                  "positive": "Axiom (Self-evident truth requiring no proof)",
                  "negative": "Tautologize (Repeat the same idea in different words)",
                  "rootKey": "AXIOMA vs TAUTO+LOGIZE"
                },
                {
                  "positive": "Axiomatic (Self-evident, unquestionable, taken for granted)",
                  "negative": "Pleonasm (Use of more words than needed to express an idea)",
                  "rootKey": "AXIOM+ATIC vs PLEON+ASM"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **axiology** nature of theoretical models with the **tautology** reality of human behavior. While proponents emphasize the **axiological** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **tautological** consequences.",
              "highlights": [
                {
                  "word": "axiology",
                  "root": "AXIOS+OLOGY",
                  "note": "Key concept: Philosophical study of value, ethics, and aesthetics"
                },
                {
                  "word": "tautology",
                  "root": "TAUTO+LOGY",
                  "note": "Critical contrast: Saying the same thing twice in different words; circular logic"
                },
                {
                  "word": "axiological",
                  "root": "AXIOS+LOGICAL",
                  "note": "Strategic ideal: Relating to value theory or moral worth"
                },
                {
                  "word": "tautological",
                  "root": "TAUTO+LOGICAL",
                  "note": "Pitfall/Critique: Redundant, circular, true by logical form alone"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-6-3-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **axiology** in intent but **tautological** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (philosophical study of value, ethics, and aesthetics), but bungled the execution in a flawed manner (redundant, circular, true by logical form alone).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Axiology = Philosophical study of value, ethics, and aesthetics.",
                "Break down: Tautological = Redundant, circular, true by logical form alone.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "AXIOLOGY (Philosophical study of value, ethics, and aesthetics) denotes good intent, while TAUTOLOGICAL (Redundant, circular, true by logical form alone) critiques flawed execution."
            },
            {
              "id": "q-6-3-2",
              "prompt": "Which word from this lesson signifies 'Thinker who specializes in theories of human value'?",
              "options": [
                "Tautology",
                "Axiologist",
                "Tautologist",
                "Axiological"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root AXIOS + OLOGY.",
                "Breakdown: AXIOS+OLOGIST."
              ],
              "explanation": "AXIOLOGIST (AXIOS+OLOGIST) means Thinker who specializes in theories of human value."
            },
            {
              "id": "q-6-3-3",
              "prompt": "If an essay claims that an opponent's defense is '**tautology**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being saying the same thing twice in different words; circular logic.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Tautology.",
                "Meaning: Saying the same thing twice in different words; circular logic."
              ],
              "explanation": "TAUTOLOGY (TAUTO+LOGY) means Saying the same thing twice in different words; circular logic."
            },
            {
              "id": "q-6-3-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Axiology vs Tautology",
                "Axiology vs Axiological",
                "Tautology vs Tautological",
                "Axiologist vs Axiom"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast AXIOS + OLOGY with TAUTO + LOGY.",
                "Axiology vs Tautology."
              ],
              "explanation": "Axiology (AXIOS + OLOGY) directly contrasts with Tautology (TAUTO + LOGY)."
            }
          ]
        },
        {
          "id": "les-6-4",
          "lessonNumber": 4,
          "title": "Interpretive Arts: HERMENEUTICS vs EXEGESIS",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Interpretive Arts: HERMENEUTICS vs EXEGESIS",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between HERMES + ITICS and EX + HEGESIS provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "HERMES + ITICS represents foundational root concepts, while EX + HEGESIS establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: HERMES + ITICS",
              "origin": "High-Yield Greek/Latin Root Family (HERMES + ITICS)",
              "coreMeaning": "Theory and methodology of textual or human interpretation",
              "derivatives": [
                {
                  "word": "Hermeneutics",
                  "breakdown": "HERMES+ITICS",
                  "def": "Theory and methodology of textual or human interpretation",
                  "catContext": "The author evaluates the historical implications of hermeneutics in institutional policymaking."
                },
                {
                  "word": "Hermeneutic",
                  "breakdown": "HERMES+IC",
                  "def": "Relating to the theory or practice of interpretation",
                  "catContext": "The author evaluates the historical implications of hermeneutic in institutional policymaking."
                },
                {
                  "word": "Hermeneuticist",
                  "breakdown": "HERMES+ICIST",
                  "def": "Scholar of textual interpretation methodologies",
                  "catContext": "The author evaluates the historical implications of hermeneuticist in institutional policymaking."
                },
                {
                  "word": "Hermeneutical",
                  "breakdown": "HERMES+ICAL",
                  "def": "Concerning critical interpretation of texts",
                  "catContext": "The author evaluates the historical implications of hermeneutical in institutional policymaking."
                },
                {
                  "word": "Hermetic",
                  "breakdown": "HERMES+IC",
                  "def": "Complete and airtight, sealed from outside influence",
                  "catContext": "The author evaluates the historical implications of hermetic in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: EX + HEGESIS",
              "origin": "High-Yield Greek/Latin Root Family (EX + HEGESIS)",
              "coreMeaning": "Critical explanation or interpretation of a text, scripture, law",
              "derivatives": [
                {
                  "word": "Exegesis",
                  "breakdown": "EX+HEGESIS",
                  "def": "Critical explanation or interpretation of a text, scripture, law",
                  "catContext": "Critics questioned whether the initiative was merely exegesis rather than a sustainable structural reform."
                },
                {
                  "word": "Exegetical",
                  "breakdown": "EXEGESIS+ICAL",
                  "def": "Relating to critical explanation or textual analysis",
                  "catContext": "Critics questioned whether the initiative was merely exegetical rather than a sustainable structural reform."
                },
                {
                  "word": "Exegete",
                  "breakdown": "EX+HEGETE",
                  "def": "Person who provides critical textual explanation",
                  "catContext": "Critics questioned whether the initiative was merely exegete rather than a sustainable structural reform."
                },
                {
                  "word": "Eisegesis",
                  "breakdown": "EIS+HEGESIS",
                  "def": "Reading one's own biases into a text",
                  "catContext": "Critics questioned whether the initiative was merely eisegesis rather than a sustainable structural reform."
                },
                {
                  "word": "Hermeneutic Circle",
                  "breakdown": "HERMES+CIRCLE",
                  "def": "Idea that parts are understood in relation to the whole",
                  "catContext": "Critics questioned whether the initiative was merely hermeneutic circle rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Hermeneutics (Theory and methodology of textual or human interpretation)",
                  "negative": "Exegesis (Critical explanation or interpretation of a text, scripture, law)",
                  "rootKey": "HERMES+ITICS vs EX+HEGESIS"
                },
                {
                  "positive": "Hermeneutic (Relating to the theory or practice of interpretation)",
                  "negative": "Exegetical (Relating to critical explanation or textual analysis)",
                  "rootKey": "HERMES+IC vs EXEGESIS+ICAL"
                },
                {
                  "positive": "Hermeneuticist (Scholar of textual interpretation methodologies)",
                  "negative": "Exegete (Person who provides critical textual explanation)",
                  "rootKey": "HERMES+ICIST vs EX+HEGETE"
                },
                {
                  "positive": "Hermeneutical (Concerning critical interpretation of texts)",
                  "negative": "Eisegesis (Reading one's own biases into a text)",
                  "rootKey": "HERMES+ICAL vs EIS+HEGESIS"
                },
                {
                  "positive": "Hermetic (Complete and airtight, sealed from outside influence)",
                  "negative": "Hermeneutic Circle (Idea that parts are understood in relation to the whole)",
                  "rootKey": "HERMES+IC vs HERMES+CIRCLE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **hermeneutics** nature of theoretical models with the **exegesis** reality of human behavior. While proponents emphasize the **hermeneutic** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **exegetical** consequences.",
              "highlights": [
                {
                  "word": "hermeneutics",
                  "root": "HERMES+ITICS",
                  "note": "Key concept: Theory and methodology of textual or human interpretation"
                },
                {
                  "word": "exegesis",
                  "root": "EX+HEGESIS",
                  "note": "Critical contrast: Critical explanation or interpretation of a text, scripture, law"
                },
                {
                  "word": "hermeneutic",
                  "root": "HERMES+IC",
                  "note": "Strategic ideal: Relating to the theory or practice of interpretation"
                },
                {
                  "word": "exegetical",
                  "root": "EXEGESIS+ICAL",
                  "note": "Pitfall/Critique: Relating to critical explanation or textual analysis"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-6-4-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **hermeneutics** in intent but **exegetical** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (theory and methodology of textual or human interpretation), but bungled the execution in a flawed manner (relating to critical explanation or textual analysis).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Hermeneutics = Theory and methodology of textual or human interpretation.",
                "Break down: Exegetical = Relating to critical explanation or textual analysis.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "HERMENEUTICS (Theory and methodology of textual or human interpretation) denotes good intent, while EXEGETICAL (Relating to critical explanation or textual analysis) critiques flawed execution."
            },
            {
              "id": "q-6-4-2",
              "prompt": "Which word from this lesson signifies 'Scholar of textual interpretation methodologies'?",
              "options": [
                "Exegesis",
                "Hermeneuticist",
                "Exegete",
                "Hermeneutic"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root HERMES + ITICS.",
                "Breakdown: HERMES+ICIST."
              ],
              "explanation": "HERMENEUTICIST (HERMES+ICIST) means Scholar of textual interpretation methodologies."
            },
            {
              "id": "q-6-4-3",
              "prompt": "If an essay claims that an opponent's defense is '**exegesis**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being critical explanation or interpretation of a text, scripture, law.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Exegesis.",
                "Meaning: Critical explanation or interpretation of a text, scripture, law."
              ],
              "explanation": "EXEGESIS (EX+HEGESIS) means Critical explanation or interpretation of a text, scripture, law."
            },
            {
              "id": "q-6-4-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Hermeneutics vs Exegesis",
                "Hermeneutics vs Hermeneutic",
                "Exegesis vs Exegetical",
                "Hermeneuticist vs Hermeneutical"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast HERMES + ITICS with EX + HEGESIS.",
                "Hermeneutics vs Exegesis."
              ],
              "explanation": "Hermeneutics (HERMES + ITICS) directly contrasts with Exegesis (EX + HEGESIS)."
            }
          ]
        },
        {
          "id": "les-6-5",
          "lessonNumber": 5,
          "title": "Signs & Debate: SEMIOTICS vs DIALECTICS",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Signs & Debate: SEMIOTICS vs DIALECTICS",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between SEMEION + ICS and DIA + LECT + ICS provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "SEMEION + ICS represents foundational root concepts, while DIA + LECT + ICS establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: SEMEION + ICS",
              "origin": "High-Yield Greek/Latin Root Family (SEMEION + ICS)",
              "coreMeaning": "Study of signs, symbols, and their cultural interpretation",
              "derivatives": [
                {
                  "word": "Semiotics",
                  "breakdown": "SEMEION+ICS",
                  "def": "Study of signs, symbols, and their cultural interpretation",
                  "catContext": "The author evaluates the historical implications of semiotics in institutional policymaking."
                },
                {
                  "word": "Semiotic",
                  "breakdown": "SEMEION+IC",
                  "def": "Relating to signs and symbols in communication",
                  "catContext": "The author evaluates the historical implications of semiotic in institutional policymaking."
                },
                {
                  "word": "Semiotician",
                  "breakdown": "SEMEION+ICIAN",
                  "def": "Scholar who investigates sign systems and codes",
                  "catContext": "The author evaluates the historical implications of semiotician in institutional policymaking."
                },
                {
                  "word": "Semiosis",
                  "breakdown": "SEMEION+OSIS",
                  "def": "Process of signifying and interpreting signs",
                  "catContext": "The author evaluates the historical implications of semiosis in institutional policymaking."
                },
                {
                  "word": "Signifier",
                  "breakdown": "SIGN+FIER",
                  "def": "The sound or image that represents a concept",
                  "catContext": "The author evaluates the historical implications of signifier in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: DIA + LECT + ICS",
              "origin": "High-Yield Greek/Latin Root Family (DIA + LECT + ICS)",
              "coreMeaning": "Art of investigating truth through opposing arguments",
              "derivatives": [
                {
                  "word": "Dialectics",
                  "breakdown": "DIA+LECT+ICS",
                  "def": "Art of investigating truth through opposing arguments",
                  "catContext": "Critics questioned whether the initiative was merely dialectics rather than a sustainable structural reform."
                },
                {
                  "word": "Dialectical",
                  "breakdown": "DIALECTIC+AL",
                  "def": "Relating to the collision and synthesis of opposing views",
                  "catContext": "Critics questioned whether the initiative was merely dialectical rather than a sustainable structural reform."
                },
                {
                  "word": "Dialectician",
                  "breakdown": "DIALECTIC+IAN",
                  "def": "Person skilled in logical argumentation through debate",
                  "catContext": "Critics questioned whether the initiative was merely dialectician rather than a sustainable structural reform."
                },
                {
                  "word": "Dialectic",
                  "breakdown": "DIA+LECTIC",
                  "def": "Discourse between opposing viewpoints",
                  "catContext": "Critics questioned whether the initiative was merely dialectic rather than a sustainable structural reform."
                },
                {
                  "word": "Synthesis",
                  "breakdown": "SYN+THESIS",
                  "def": "Combination of thesis and antithesis to form new truth",
                  "catContext": "Critics questioned whether the initiative was merely synthesis rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Semiotics (Study of signs, symbols, and their cultural interpretation)",
                  "negative": "Dialectics (Art of investigating truth through opposing arguments)",
                  "rootKey": "SEMEION+ICS vs DIA+LECT+ICS"
                },
                {
                  "positive": "Semiotic (Relating to signs and symbols in communication)",
                  "negative": "Dialectical (Relating to the collision and synthesis of opposing views)",
                  "rootKey": "SEMEION+IC vs DIALECTIC+AL"
                },
                {
                  "positive": "Semiotician (Scholar who investigates sign systems and codes)",
                  "negative": "Dialectician (Person skilled in logical argumentation through debate)",
                  "rootKey": "SEMEION+ICIAN vs DIALECTIC+IAN"
                },
                {
                  "positive": "Semiosis (Process of signifying and interpreting signs)",
                  "negative": "Dialectic (Discourse between opposing viewpoints)",
                  "rootKey": "SEMEION+OSIS vs DIA+LECTIC"
                },
                {
                  "positive": "Signifier (The sound or image that represents a concept)",
                  "negative": "Synthesis (Combination of thesis and antithesis to form new truth)",
                  "rootKey": "SIGN+FIER vs SYN+THESIS"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **semiotics** nature of theoretical models with the **dialectics** reality of human behavior. While proponents emphasize the **semiotic** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **dialectical** consequences.",
              "highlights": [
                {
                  "word": "semiotics",
                  "root": "SEMEION+ICS",
                  "note": "Key concept: Study of signs, symbols, and their cultural interpretation"
                },
                {
                  "word": "dialectics",
                  "root": "DIA+LECT+ICS",
                  "note": "Critical contrast: Art of investigating truth through opposing arguments"
                },
                {
                  "word": "semiotic",
                  "root": "SEMEION+IC",
                  "note": "Strategic ideal: Relating to signs and symbols in communication"
                },
                {
                  "word": "dialectical",
                  "root": "DIALECTIC+AL",
                  "note": "Pitfall/Critique: Relating to the collision and synthesis of opposing views"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-6-5-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **semiotics** in intent but **dialectical** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (study of signs, symbols, and their cultural interpretation), but bungled the execution in a flawed manner (relating to the collision and synthesis of opposing views).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Semiotics = Study of signs, symbols, and their cultural interpretation.",
                "Break down: Dialectical = Relating to the collision and synthesis of opposing views.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "SEMIOTICS (Study of signs, symbols, and their cultural interpretation) denotes good intent, while DIALECTICAL (Relating to the collision and synthesis of opposing views) critiques flawed execution."
            },
            {
              "id": "q-6-5-2",
              "prompt": "Which word from this lesson signifies 'Scholar who investigates sign systems and codes'?",
              "options": [
                "Dialectics",
                "Semiotician",
                "Dialectician",
                "Semiotic"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root SEMEION + ICS.",
                "Breakdown: SEMEION+ICIAN."
              ],
              "explanation": "SEMIOTICIAN (SEMEION+ICIAN) means Scholar who investigates sign systems and codes."
            },
            {
              "id": "q-6-5-3",
              "prompt": "If an essay claims that an opponent's defense is '**dialectics**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being art of investigating truth through opposing arguments.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Dialectics.",
                "Meaning: Art of investigating truth through opposing arguments."
              ],
              "explanation": "DIALECTICS (DIA+LECT+ICS) means Art of investigating truth through opposing arguments."
            },
            {
              "id": "q-6-5-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Semiotics vs Dialectics",
                "Semiotics vs Semiotic",
                "Dialectics vs Dialectical",
                "Semiotician vs Semiosis"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast SEMEION + ICS with DIA + LECT + ICS.",
                "Semiotics vs Dialectics."
              ],
              "explanation": "Semiotics (SEMEION + ICS) directly contrasts with Dialectics (DIA + LECT + ICS)."
            }
          ]
        },
        {
          "id": "les-6-6",
          "lessonNumber": 6,
          "title": "Shortcuts & Rhetorical Warfare: HEURISTICS vs POLEMICS",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "The Strategic Concept: Shortcuts & Rhetorical Warfare: HEURISTICS vs POLEMICS",
              "badge": "Core Strategy Hook",
              "hook": "In CAT Reading Comprehension passages, understanding the tension between HEURISKEIN + ICS and POLEMOS + ICS provides an immediate shortcut to mapping author tone, argument trajectory, and eliminate distractor choices.",
              "keyInsight": "HEURISKEIN + ICS represents foundational root concepts, while POLEMOS + ICS establishes opposing critical valences.",
              "rule": "CAT Decryption Rule: Identify the root core before analyzing the surrounding syntax to prevent getting trapped by complex vocabulary."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Root Family A: HEURISKEIN + ICS",
              "origin": "High-Yield Greek/Latin Root Family (HEURISKEIN + ICS)",
              "coreMeaning": "Practical rule-of-thumb problem-solving methods",
              "derivatives": [
                {
                  "word": "Heuristics",
                  "breakdown": "HEURISK+ICS",
                  "def": "Practical rule-of-thumb problem-solving methods",
                  "catContext": "The author evaluates the historical implications of heuristics in institutional policymaking."
                },
                {
                  "word": "Heuristic",
                  "breakdown": "HEURISK+IC",
                  "def": "Enabling a person to discover through practical trials",
                  "catContext": "The author evaluates the historical implications of heuristic in institutional policymaking."
                },
                {
                  "word": "Eureka",
                  "breakdown": "HEUREKA",
                  "def": "Cry of joy upon discovering something",
                  "catContext": "The author evaluates the historical implications of eureka in institutional policymaking."
                },
                {
                  "word": "Heuristically",
                  "breakdown": "HEURISTIC+ALLY",
                  "def": "By means of trial-and-error discovery methods",
                  "catContext": "The author evaluates the historical implications of heuristically in institutional policymaking."
                },
                {
                  "word": "Bounded Rationality",
                  "breakdown": "BOUND+RATIONAL",
                  "def": "Decision-making constrained by cognitive limits",
                  "catContext": "The author evaluates the historical implications of bounded rationality in institutional policymaking."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Root Family B: POLEMOS + ICS",
              "origin": "High-Yield Greek/Latin Root Family (POLEMOS + ICS)",
              "coreMeaning": "Practice of engaging in aggressive verbal attacks on opposing views",
              "derivatives": [
                {
                  "word": "Polemics",
                  "breakdown": "POLEM+ICS",
                  "def": "Practice of engaging in aggressive verbal attacks on opposing views",
                  "catContext": "Critics questioned whether the initiative was merely polemics rather than a sustainable structural reform."
                },
                {
                  "word": "Polemical",
                  "breakdown": "POLEM+ICAL",
                  "def": "Relating to strongly critical, aggressive, or disputatious writing",
                  "catContext": "Critics questioned whether the initiative was merely polemical rather than a sustainable structural reform."
                },
                {
                  "word": "Polemicist",
                  "breakdown": "POLEM+ICIST",
                  "def": "Person who writes passionate verbal attacks",
                  "catContext": "Critics questioned whether the initiative was merely polemicist rather than a sustainable structural reform."
                },
                {
                  "word": "Polemicize",
                  "breakdown": "POLEM+ICIZE",
                  "def": "Engage in aggressive verbal or written dispute",
                  "catContext": "Critics questioned whether the initiative was merely polemicize rather than a sustainable structural reform."
                },
                {
                  "word": "Invective",
                  "breakdown": "IN+VECT+IVE",
                  "def": "Insulting, abusive, or highly critical language",
                  "catContext": "Critics questioned whether the initiative was merely invective rather than a sustainable structural reform."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Morphological Symmetry & Trap Distinctions",
              "matrix": [
                {
                  "positive": "Heuristics (Practical rule-of-thumb problem-solving methods)",
                  "negative": "Polemics (Practice of engaging in aggressive verbal attacks on opposing views)",
                  "rootKey": "HEURISK+ICS vs POLEM+ICS"
                },
                {
                  "positive": "Heuristic (Enabling a person to discover through practical trials)",
                  "negative": "Polemical (Relating to strongly critical, aggressive, or disputatious writing)",
                  "rootKey": "HEURISK+IC vs POLEM+ICAL"
                },
                {
                  "positive": "Eureka (Cry of joy upon discovering something)",
                  "negative": "Polemicist (Person who writes passionate verbal attacks)",
                  "rootKey": "HEUREKA vs POLEM+ICIST"
                },
                {
                  "positive": "Heuristically (By means of trial-and-error discovery methods)",
                  "negative": "Polemicize (Engage in aggressive verbal or written dispute)",
                  "rootKey": "HEURISTIC+ALLY vs POLEM+ICIZE"
                },
                {
                  "positive": "Bounded Rationality (Decision-making constrained by cognitive limits)",
                  "negative": "Invective (Insulting, abusive, or highly critical language)",
                  "rootKey": "BOUND+RATIONAL vs IN+VECT+IVE"
                }
              ],
              "proTip": "Always inspect the prefix: watch how the same core root shifts from active to passive or positive to negative depending on prefixes like IM-, MAL-, EX-, or DIS-."
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Comprehension Context",
              "passage": "Academic discourse in philosophy and economics frequently contrasts the **heuristics** nature of theoretical models with the **polemics** reality of human behavior. While proponents emphasize the **heuristic** framework of institutional governance, skeptics warn that unmonitored executive power inevitably produces **polemical** consequences.",
              "highlights": [
                {
                  "word": "heuristics",
                  "root": "HEURISK+ICS",
                  "note": "Key concept: Practical rule-of-thumb problem-solving methods"
                },
                {
                  "word": "polemics",
                  "root": "POLEM+ICS",
                  "note": "Critical contrast: Practice of engaging in aggressive verbal attacks on opposing views"
                },
                {
                  "word": "heuristic",
                  "root": "HEURISK+IC",
                  "note": "Strategic ideal: Enabling a person to discover through practical trials"
                },
                {
                  "word": "polemical",
                  "root": "POLEM+ICAL",
                  "note": "Pitfall/Critique: Relating to strongly critical, aggressive, or disputatious writing"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "q-6-6-1",
              "prompt": "In a dense academic passage: 'The commission's report was criticized for being **heuristics** in intent but **polemical** in execution.' What does the author mean?",
              "options": [
                "The commission was well-meaning (practical rule-of-thumb problem-solving methods), but bungled the execution in a flawed manner (relating to strongly critical, aggressive, or disputatious writing).",
                "The commission was completely hostile from the start.",
                "The execution was praised as flawless and perfect.",
                "The commission acted with total indifference."
              ],
              "correctIndex": 0,
              "hints": [
                "Break down: Heuristics = Practical rule-of-thumb problem-solving methods.",
                "Break down: Polemical = Relating to strongly critical, aggressive, or disputatious writing.",
                "Contrast between good intentions and flawed execution."
              ],
              "explanation": "HEURISTICS (Practical rule-of-thumb problem-solving methods) denotes good intent, while POLEMICAL (Relating to strongly critical, aggressive, or disputatious writing) critiques flawed execution."
            },
            {
              "id": "q-6-6-2",
              "prompt": "Which word from this lesson signifies 'Cry of joy upon discovering something'?",
              "options": [
                "Polemics",
                "Eureka",
                "Polemicist",
                "Heuristic"
              ],
              "correctIndex": 1,
              "hints": [
                "Look for the root HEURISKEIN + ICS.",
                "Breakdown: HEUREKA."
              ],
              "explanation": "EUREKA (HEUREKA) means Cry of joy upon discovering something."
            },
            {
              "id": "q-6-6-3",
              "prompt": "If an essay claims that an opponent's defense is '**polemics**', what is the author asserting?",
              "options": [
                "The defense is celebrated for its clarity.",
                "The defense possesses the quality of being practice of engaging in aggressive verbal attacks on opposing views.",
                "The defense is legally binding and unassailable.",
                "The opponent has surrendered unconditionally."
              ],
              "correctIndex": 1,
              "hints": [
                "Look at the root of Polemics.",
                "Meaning: Practice of engaging in aggressive verbal attacks on opposing views."
              ],
              "explanation": "POLEMICS (POLEM+ICS) means Practice of engaging in aggressive verbal attacks on opposing views."
            },
            {
              "id": "q-6-6-4",
              "prompt": "Which pair of words represents opposing etymological concepts from this lesson?",
              "options": [
                "Heuristics vs Polemics",
                "Heuristics vs Heuristic",
                "Polemics vs Polemical",
                "Eureka vs Heuristically"
              ],
              "correctIndex": 0,
              "hints": [
                "Contrast HEURISKEIN + ICS with POLEMOS + ICS.",
                "Heuristics vs Polemics."
              ],
              "explanation": "Heuristics (HEURISKEIN + ICS) directly contrasts with Polemics (POLEMOS + ICS)."
            }
          ]
        }
      ],
      "masteryQuiz": [
        {
          "id": "mq-6-1",
          "prompt": "In a Category 6 Reading Comprehension passage, how does the author contrast theoretical assertions with empirical reality?",
          "options": [
            "By contrasting idealized conceptual frameworks with the complex reality of human institutions.",
            "By adopting an uncritical, complacent attitude towards government policy.",
            "By expressing total agnostic indifference.",
            "By relying exclusively on circular tautologies."
          ],
          "correctIndex": 0,
          "explanation": "CAT passages typically set up an analytical tension between idealized theories and empirical ground realities."
        },
        {
          "id": "mq-6-2",
          "prompt": "Which term from Category 6 carries an overwhelmingly **positive** valence when used by an author?",
          "options": [
            "Epistemology",
            "Ontology",
            "Eschatology",
            "Tautology"
          ],
          "correctIndex": 0,
          "explanation": "Epistemology carries a positive root connotation, whereas the other options are negative tone markers."
        },
        {
          "id": "mq-6-3",
          "prompt": "If an essay argues that an institution is guilty of '**exegesis**', the author is:",
          "options": [
            "Praising the institution with enthusiastic plaudits.",
            "Criticizing the institution for critical explanation or interpretation of a text, scripture, law.",
            "Declaring the institution legally solvent and exculpated.",
            "Taking an egalitarian stance."
          ],
          "correctIndex": 1,
          "explanation": "Exegesis means Critical explanation or interpretation of a text, scripture, law."
        },
        {
          "id": "mq-6-4",
          "prompt": "What is the underlying etymological root of **Axiology**?",
          "options": [
            "High-Yield Greek/Latin Root Family (AXIOS + OLOGY)",
            "High-Yield Greek/Latin Root Family (TAUTO + LOGY)",
            "High-Yield Greek/Latin Root Family (DIA + LECT + ICS)",
            "High-Yield Greek/Latin Root Family (POLEMOS + ICS)"
          ],
          "correctIndex": 0,
          "explanation": "Axiology is derived from High-Yield Greek/Latin Root Family (AXIOS + OLOGY)."
        },
        {
          "id": "mq-6-5",
          "prompt": "An author describes a policy as '**semiotics** while warning against **dialectics** consequences.' What is the author's tone?",
          "options": [
            "Judicious, balanced, and analytically rigorous in weighing benefits against pitfalls.",
            "Fiercely vitriolic and purely destructive.",
            "Apathetic, bored, and disengaged.",
            "Laudatory and uncritical."
          ],
          "correctIndex": 0,
          "explanation": "Balancing positive qualities with cautions against negative pitfalls indicates a judicious and analytically rigorous tone."
        },
        {
          "id": "mq-6-6",
          "prompt": "Which of the following distinguishes the core concept of Lesson 6.1 from Lesson 6.6 in this category?",
          "options": [
            "Lesson 6.1 focuses on foundational valences (Core Foundations: EPISTEMOLOGY vs ONTOLOGY), while Lesson 6.6 develops specialized applications (Shortcuts & Rhetorical Warfare: HEURISTICS vs POLEMICS).",
            "They are identical lessons repeated twice.",
            "Lesson 6 is purely historical with zero relevance to modern CAT reading.",
            "Lesson 1 is only for grammar error identification."
          ],
          "correctIndex": 0,
          "explanation": "The curriculum progresses systematically from foundational concepts (Core Foundations: EPISTEMOLOGY vs ONTOLOGY) to advanced critical frameworks (Shortcuts & Rhetorical Warfare: HEURISTICS vs POLEMICS)."
        }
      ]
    }
  ],
  "supplementaryModules": [
    {
      "id": "supp-tone-taxonomy",
      "track": "Tone Decryption Suite",
      "title": "The CAT Tone Taxonomy & Decryption Guide",
      "tagline": "Master the exact 16 tone descriptors used in CAT answer options (Acerbic, Laudatory, Sanguine, Ambivalent).",
      "badge": "RC Tone Mastery",
      "lessons": [
        {
          "id": "tone-les-1",
          "lessonNumber": 1,
          "title": "Critical & Vitriolic Tones: The Spectrum of Attack",
          "estimatedTime": "7 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "Decoding Critical Tone Options in CAT",
              "badge": "Tone Option Strategy",
              "hook": "When a CAT question asks: 'The author's attitude towards the neo-liberal paradigm can best be characterized as...', options will frequently pit Acerbic vs Vitriolic vs Sardonic vs Disparaging. Choosing the right one requires calibrating severity.",
              "keyInsight": "Not all criticism is created equal. Tone descriptors vary on an emotional intensity scale: Analytical Critique (Dispassionate) -> Scornful Mockery (Sardonic) -> Sharp Biting Attack (Acerbic) -> Pure Burning Malice (Vitriolic).",
              "rule": "Golden Elimination Rule: If the author presents logical evidence without emotional slurs, ELIMINATE 'Vitriolic' or 'Vituperative' and choose 'Critical', 'Cautious', or 'Analytical'."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Tone Group A: Sharp & Biting Attacks",
              "origin": "Latin acer (sharp) / Greek vitriol (sulfuric glass acid)",
              "coreMeaning": "Biting, sharp, cutting, chemically caustic",
              "derivatives": [
                {
                  "word": "Acerbic",
                  "breakdown": "ACER (sharp) + BIC",
                  "def": "Sharp, biting, or forthright in expression; astringent tone",
                  "catContext": "The critic launched an acerbic assault on the director's derivative script."
                },
                {
                  "word": "Vitriolic",
                  "breakdown": "VITRIOL (acidic) + IC",
                  "def": "Filled with bitter malice; burning and violently aggressive",
                  "catContext": "The editorial was vitriolic, accusing the committee of intentional sabotage."
                },
                {
                  "word": "Caustic",
                  "breakdown": "KAIEIN (to burn) + IC",
                  "def": "Sarcastic in a scathing and bitter way; corrosive",
                  "catContext": "With caustic wit, the essay dismantled the candidate's economic promises."
                },
                {
                  "word": "Trenchant",
                  "breakdown": "TRUNCARE (to cut) + ANT",
                  "def": "Vigorous, sharp, incisive in expression, keenly effective",
                  "catContext": "Her trenchant analysis laid bare the structural contradictions in the treaty."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Tone Group B: Mockery & Cynicism",
              "origin": "Greek sardonios (bitter grinning) / kynikos (dog-like distrust)",
              "coreMeaning": "Mocking, scornful, skeptical of human motives",
              "derivatives": [
                {
                  "word": "Sardonic",
                  "breakdown": "SARDON (bitter grin) + IC",
                  "def": "Grimly mocking, cynical, sneering with dark irony",
                  "catContext": "The author made sardonic remarks about the government's sudden interest in transparency."
                },
                {
                  "word": "Derisive",
                  "breakdown": "DE (down) + RIDERE (to laugh)",
                  "def": "Expressing contempt or ridicule; mocking",
                  "catContext": "The audience responded with derisive laughter to the unconvincing alibi."
                },
                {
                  "word": "Disparaging",
                  "breakdown": "DIS (away) + PAR (equal)",
                  "def": "Expressing the opinion that something is of little worth; derogatory",
                  "catContext": "The review made disparaging remarks about the artist's technical maturity."
                },
                {
                  "word": "Cynical",
                  "breakdown": "CYNIC (distrust) + AL",
                  "def": "Believing that people are motivated purely by self-interest; distrustful",
                  "catContext": "A cynical appraisal of corporate charity as a PR shield."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "The CAT Severity Calibration Matrix",
              "matrix": [
                {
                  "positive": "Trenchant (Sharp, incisive, intellectually rigorous)",
                  "negative": "Vitriolic (Burning malice, emotional hatred)",
                  "rootKey": "Intellect vs Emotion"
                },
                {
                  "positive": "Sardonic (Darkly humorous, ironical mockery)",
                  "negative": "Acerbic (Direct biting severity, no humor)",
                  "rootKey": "Irony vs Harshness"
                },
                {
                  "positive": "Critical (Objective identification of flaws)",
                  "negative": "Disparaging (Belittling, degrading worth)",
                  "rootKey": "Evidence vs Contempt"
                }
              ],
              "proTip": "90% of CAT RC passages are written by academic essayists. Academics rarely write 'Vitriolic' or 'Hysterical' rants. When in doubt between 'Trenchant/Critical' and 'Vitriolic', pick 'Critical'!"
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Tone Passage Analysis",
              "passage": "Proponents of algorithmic trading assure us that machine intelligence has eliminated human bias from capital markets. What a comforting fairy tale. In reality, modern automated markets merely accelerate herd contagion at sub-millisecond speeds, institutionalizing a form of digital roulette where retail investors are systematically fleeced.",
              "highlights": [
                {
                  "word": "comforting fairy tale",
                  "root": "Tone Marker: Sardonic / Mocking",
                  "note": "Irony used to debunk claim."
                },
                {
                  "word": "digital roulette",
                  "root": "Tone Marker: Acerbic / Scathing",
                  "note": "Sharp metaphor exposing risk."
                },
                {
                  "word": "systematically fleeced",
                  "root": "Tone Marker: Highly Critical",
                  "note": "Definite negative stance."
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "tone-q-1-1",
              "prompt": "An RC author labels an opponent's theory as 'a quaint illusion that collapses under the most basic arithmetic.' What is the author's tone?",
              "options": [
                "Sardonic and critical (grimly mocking the theory's naivety).",
                "Laudatory and reverent.",
                "Apathetic and disengaged.",
                "Sanguine and hopeful."
              ],
              "correctIndex": 0,
              "hints": [
                "Look at 'quaint illusion'. It's sarcastic mockery.",
                "Sardonic means grimly mocking."
              ],
              "explanation": "Calling a serious theory a 'quaint illusion' is sardonic mockery combined with a critical dismissal."
            },
            {
              "id": "tone-q-1-2",
              "prompt": "Which option is an extreme tone that should be avoided unless the passage contains venomous insults and hatred?",
              "options": [
                "Vitriolic",
                "Analytical",
                "Cautious",
                "Nuanced"
              ],
              "correctIndex": 0,
              "hints": [
                "Vitriol means sulfuric acid. Pure hatred."
              ],
              "explanation": "Vitriolic implies unhinged, acidic malice, which is very rare in academic CAT passages."
            }
          ]
        }
      ]
    },
    {
      "id": "supp-latin-signposts",
      "track": "Academic Loanwords & Latin Signposts",
      "title": "High-Frequency Latin Signposts & Logical Operators",
      "tagline": "Decode A Priori, Status Quo, Ad Hominem, Ipso Facto, Sui Generis, and Caveat.",
      "badge": "Philosophy & Law Signposts",
      "lessons": [
        {
          "id": "latin-les-1",
          "lessonNumber": 1,
          "title": "Epistemic Proof & Logical Pivots: A Priori to Ad Hominem",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "Latin Signposts in Academic RC Arguments",
              "badge": "Signpost Architecture",
              "hook": "CAT Philosophy and Law passages frequently leave Latin phrases untranslated because authors assume the reader recognizes their exact logical function in proof systems.",
              "keyInsight": "These phrases are not decorative jargon; they tell you exactly WHERE knowledge comes from (A Priori vs A Posteriori) or WHERE an argument fails (Ad Hominem vs Non Sequitur).",
              "rule": "Signpost Rule: 'Ipso facto' translates to 'by that very fact itself'. When an author says 'A implies B, and ipso facto C', C is not an optional inference\u2014it is automatic!"
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Epistemic Proof Signposts",
              "origin": "Latin Epistemic Logic",
              "coreMeaning": "How knowledge is justified and proved",
              "derivatives": [
                {
                  "word": "A Priori",
                  "breakdown": "FROM THE EARLIER",
                  "def": "Knowledge deduced from pure reason/logic independent of empirical experience",
                  "catContext": "Descartes attempted to construct an a priori proof of the existence of the self."
                },
                {
                  "word": "A Posteriori",
                  "breakdown": "FROM THE LATTER",
                  "def": "Knowledge derived from empirical observation and sensory evidence",
                  "catContext": "Modern evolutionary theory relies strictly on a posteriori genetic data."
                },
                {
                  "word": "Prima Facie",
                  "breakdown": "AT FIRST FACE",
                  "def": "Based on first impression; accepted as correct until proven otherwise",
                  "catContext": "The plaintiff established a prima facie case of discriminatory employment practices."
                },
                {
                  "word": "Ipso Facto",
                  "breakdown": "BY THE FACT ITSELF",
                  "def": "By that very fact or act; inevitably resulting from the condition",
                  "catContext": "A state that loses monopoly on violence is, ipso facto, a failed state."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Argumentation & Fallacy Signposts",
              "origin": "Classical Latin Rhetoric",
              "coreMeaning": "Logical fallacies and qualifications",
              "derivatives": [
                {
                  "word": "Ad Hominem",
                  "breakdown": "TO THE PERSON",
                  "def": "Attacking an opponent's character rather than answering their argument",
                  "catContext": "The senator resorted to an ad hominem smear rather than debating the tax rates."
                },
                {
                  "word": "Non Sequitur",
                  "breakdown": "IT DOES NOT FOLLOW",
                  "def": "A conclusion or statement that does not logically follow from the previous premise",
                  "catContext": "Claiming that wealth equals moral virtue is a glaring non sequitur."
                },
                {
                  "word": "Sui Generis",
                  "breakdown": "OF ITS OWN KIND",
                  "def": "Unique, in a class by itself, without an exact precedent",
                  "catContext": "The European Union represents a sui generis geopolitical entity."
                },
                {
                  "word": "Caveat",
                  "breakdown": "LET HIM BEWARE",
                  "def": "A warning or proviso of specific stipulations, conditions, or limitations",
                  "catContext": "The economist praised the GDP forecast but added a crucial caveat regarding inflation."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Epistemic Dichotomy: A Priori vs A Posteriori",
              "matrix": [
                {
                  "positive": "A Priori (Reasoned before sensory evidence, pure math/logic)",
                  "negative": "A Posteriori (Derived after empirical observation, science)",
                  "rootKey": "Deduction vs Induction"
                },
                {
                  "positive": "Prima Facie (Apparent on the surface, provisional)",
                  "negative": "Ipso Facto (Definite, inevitable fact by its very existence)",
                  "rootKey": "Provisional vs Inevitable"
                }
              ],
              "proTip": "In CAT Philosophy RCs, Rationalists (Kant, Descartes) champion 'a priori' deduction, while Empiricists (Locke, Hume) champion 'a posteriori' sensory experience!"
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Passage Context",
              "passage": "Legal positivists maintain that a law is valid **ipso facto** once enacted by sovereign authority. Natural law theorists object to this **a priori** formalism, arguing that any statute devoid of moral justice is a **sui generis** tyranny. While an initial draft may appear **prima facie** equitable, constitutional courts must enter a vital **caveat** against executive overreach.",
              "highlights": [
                {
                  "word": "ipso facto",
                  "root": "By that very fact",
                  "note": "Inevitability."
                },
                {
                  "word": "a priori",
                  "root": "Deduction before fact",
                  "note": "Theoretical formalism."
                },
                {
                  "word": "sui generis",
                  "root": "In a class of its own",
                  "note": "Unique phenomenon."
                },
                {
                  "word": "caveat",
                  "root": "Warning/Limitation",
                  "note": "Qualifying condition."
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "lat-q-1-1",
              "prompt": "An author writes: 'The scientist deduced the existence of the particle from mathematical equations alone, providing an **a priori** model before lab experiments.' What does 'a priori' mean here?",
              "options": [
                "Deduced from pure logical reasoning prior to empirical observation.",
                "Derived from hands-on lab experiments.",
                "An aggressive personal attack on peers.",
                "A completely unique entity with no precedent."
              ],
              "correctIndex": 0,
              "hints": [
                "Prior = before.",
                "Reasoned before observational data."
              ],
              "explanation": "A PRIORI refers to knowledge or deduction derived from theoretical reasoning rather than empirical observation."
            },
            {
              "id": "lat-q-1-2",
              "prompt": "When an author qualifies their thesis with a '**caveat**', what is the author doing?",
              "options": [
                "Adding an important warning, exception, or limitation to their claim.",
                "Committing a logical non sequitur.",
                "Launching a bitter ad hominem insult.",
                "Surrendering their argument unconditionally."
              ],
              "correctIndex": 0,
              "hints": [
                "Caveat = beware/warning.",
                "Limiting the scope of a claim."
              ],
              "explanation": "A CAVEAT is a warning or specific condition/limitation that restricts a broad assertion."
            }
          ]
        }
      ]
    },
    {
      "id": "supp-secondary-meanings",
      "track": "Secondary Meaning Trap Vault",
      "title": "CAT Secondary Meaning Traps (Academic Polysemy)",
      "tagline": "Words where academic writing means the exact opposite of colloquial conversational English.",
      "badge": "Trap Defuser",
      "lessons": [
        {
          "id": "sec-les-1",
          "lessonNumber": 1,
          "title": "The Top 8 CAT Traps: Qualify, Pedestrian, Plastic, and Sanction",
          "estimatedTime": "8 mins",
          "panels": [
            {
              "panelNumber": 1,
              "type": "concept",
              "title": "Why Secondary Meanings Are CAT Question Setter Favorites",
              "badge": "Trap Mechanics",
              "hook": "In CAT VARC, question setters deliberately pick common words whose primary conversational definition leads you straight into trap options. If you read 'The author qualifies her support for trade liberalization' and think it means 'makes it eligible', you will fail the question!",
              "keyInsight": "In academic writing, 'to qualify' means TO LIMIT, RESTRICT, OR MODERATE. Academic prose relies on nuanced qualification rather than sweeping superlatives.",
              "rule": "Trap Decryption: Always test whether a word is operating in its colloquial physical sense (e.g. pedestrian = walking) or its figurative academic sense (pedestrian = dull/commonplace)."
            },
            {
              "panelNumber": 2,
              "type": "root_deep_dive",
              "title": "Trap Words 1 to 4: Academic Transformations",
              "origin": "Polysemic Academic Usage",
              "coreMeaning": "Common words with elevated academic meanings",
              "derivatives": [
                {
                  "word": "Qualify",
                  "breakdown": "Conversational: Make eligible / Academic: Limit/restrict a claim",
                  "def": "To make a statement less absolute; to limit, restrict, or modify",
                  "catContext": "The historian qualifies her thesis by noting exceptions in agrarian provinces."
                },
                {
                  "word": "Pedestrian",
                  "breakdown": "Conversational: Person on foot / Academic: Dull, mundane",
                  "def": "Lacking inspiration or excitement; dull, ordinary, commonplace",
                  "catContext": "The novel suffered from pedestrian dialogue and predictable pacing."
                },
                {
                  "word": "Plastic",
                  "breakdown": "Conversational: Synthetic polymer / Academic: Malleable, moldable",
                  "def": "Capable of being shaped, molded, or modified; adaptable",
                  "catContext": "Neuroscientists discovered that synaptic pathways remain plastic well into adulthood."
                },
                {
                  "word": "Arrest",
                  "breakdown": "Conversational: Police capture / Academic: Halt or stop progress",
                  "def": "To stop or check the progress, spread, or development of something",
                  "catContext": "The quarantine successfully arrested the contagion across the capital."
                }
              ]
            },
            {
              "panelNumber": 3,
              "type": "root_deep_dive",
              "title": "Trap Words 5 to 8: The Contronyms (Opposite Meanings)",
              "origin": "Contronyms (Words that mean their own opposite)",
              "coreMeaning": "Dual opposing polarities",
              "derivatives": [
                {
                  "word": "Sanction",
                  "breakdown": "Meaning 1: Official penalty / Meaning 2: Official approval",
                  "def": "Can mean to punish/restrict OR to formally permit/authorize",
                  "catContext": "The council gave its official sanction to the treaty while imposing sanctions on violators."
                },
                {
                  "word": "Currency",
                  "breakdown": "Conversational: Money / Academic: General acceptance/timeliness",
                  "def": "The state of being commonly accepted, used, or relevant today",
                  "catContext": "The theory gained wide currency among evolutionary anthropologists."
                },
                {
                  "word": "Checked",
                  "breakdown": "Conversational: Inspected / Academic: Restrained, slowed down",
                  "def": "Stopped, restrained, or held back from unchecked expansion",
                  "catContext": "Constitutional separation of powers checked the president's impulse toward autocracy."
                },
                {
                  "word": "Flag",
                  "breakdown": "Conversational: National banner / Academic: Decline in vitality",
                  "def": "To become tired, weaker, or less enthusiastic; to signal a flaw",
                  "catContext": "By the fourth quarter, consumer enthusiasm had begun to flag noticeably."
                }
              ]
            },
            {
              "panelNumber": 4,
              "type": "contrast_matrix",
              "title": "Colloquial Meaning vs CAT Academic Meaning",
              "matrix": [
                {
                  "positive": "Conversational: Qualify = Pass a test / become eligible",
                  "negative": "CAT RC: Qualify = Moderate, restrict, make less extreme",
                  "rootKey": "Limitation"
                },
                {
                  "positive": "Conversational: Pedestrian = Person walking on street",
                  "negative": "CAT RC: Pedestrian = Dull, unoriginal, uninspired",
                  "rootKey": "Banal / Mundane"
                },
                {
                  "positive": "Conversational: Plastic = Credit card / Tupperware",
                  "negative": "CAT RC: Plastic = Malleable, moldable, capable of learning",
                  "rootKey": "Neuroplasticity"
                }
              ],
              "proTip": "Whenever you see 'qualifies' in a CAT Main Idea or Purpose question (e.g. 'The author qualifies an earlier assertion...'), it is often the CORRECT answer because academic authors almost always nuance their claims!"
            },
            {
              "panelNumber": 5,
              "type": "rc_excerpt",
              "title": "Authentic CAT Reading Passage Excerpt",
              "passage": "While the author endorses technological automation in manufacturing, she immediately **qualifies** her stance by highlighting the **pedestrian** nature of current generative AI models. Without **plastic** neural architectures capable of true conceptual abstraction, un**checked** commercial deployment will inevitably cause worker productivity to **flag**.",
              "highlights": [
                {
                  "word": "qualifies",
                  "root": "Limits/restricts claim",
                  "note": "Not 'makes eligible'!"
                },
                {
                  "word": "pedestrian",
                  "root": "Dull/Ordinary",
                  "note": "Not 'walker'!"
                },
                {
                  "word": "plastic",
                  "root": "Adaptable/Malleable",
                  "note": "Not 'synthetic plastic'!"
                },
                {
                  "word": "flag",
                  "root": "Decline/Wane",
                  "note": "Not 'national banner'!"
                }
              ]
            }
          ],
          "quiz": [
            {
              "id": "sec-q-1-1",
              "prompt": "An RC question states: 'In the third paragraph, the author **qualifies** her endorsement of globalization.' What did the author do?",
              "options": [
                "She restricted and limited her endorsement by discussing drawbacks and exceptions.",
                "She proved she was certified to talk about globalization.",
                "She celebrated globalization with uncritical praise.",
                "She retracted her entire essay and surrendered."
              ],
              "correctIndex": 0,
              "hints": [
                "To qualify a claim is to make it less absolute and add exceptions.",
                "Limitation / restriction."
              ],
              "explanation": "In academic rhetoric, to 'qualify' an endorsement means to add conditions, exceptions, and limitations."
            },
            {
              "id": "sec-q-1-2",
              "prompt": "If a literary critic describes a prize-winning essay as having '**pedestrian** prose and **plastic** characters', what does the critic mean?",
              "options": [
                "The writing is dull and uninspired, while the characters are adaptable and moldable.",
                "The writing is about people walking on the street, and characters are made of PVC polymer.",
                "The author is an Olympic walker.",
                "The essay is completely unreadable."
              ],
              "correctIndex": 0,
              "hints": [
                "Pedestrian = dull/commonplace.",
                "Plastic = moldable/adaptable."
              ],
              "explanation": "Pedestrian means uninspired/dull; plastic means malleable/moldable."
            }
          ]
        }
      ]
    }
  ]
};
