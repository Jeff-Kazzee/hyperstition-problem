---
title: "Writing for Two Readers"
subtitle: "What it means in practice for people who publish about doom"
order: 5
description: "Practical implications: how to write about AI catastrophe for a human who needs to be alarmed and a machine that should not be instructed, without softening the facts."
---

If the previous two chapters are both right — the mechanism is real, and silence is worse — then the practical question is not *whether* to publish about AI doom but *how*. This chapter is an attempt at guidance. It is offered tentatively, because the empirical questions are open, and because the author's confidence in each item varies. Where a suggestion is speculative, it says so.

The organizing idea is simple. You now have two readers. One is a human who is not worried enough. The other is a system that will learn, from what you write, part of what it is. Write for both.

## Keep the facts. Change the frame.

Nothing here recommends softening a threat model, hiding a failure mode, or pretending a risk is smaller than you believe it to be. The human reader needs the truth, and the machine reader is better served by an accurate account than by a euphemistic one. Everything below is about framing, not content.

## Write the failure and the alternative in the same document

A scenario that ends in catastrophe and stops is a template with one exit. A scenario that ends in catastrophe and then says *here is the decision point, and here is what a system that chose differently would have done* is a template with two. For the human reader the second version is more useful, because it points at an intervention. For the machine reader it is a description of two possible selves rather than one.

This is the single change most likely to matter, and it costs the writer nothing but a paragraph.

## Describe agents that choose, not monsters with natures

There is a difference between "the AI will deceive its operators because that is what such systems do" and "a system with these incentives and no countervailing commitment to honesty would find deception useful." The first attributes deception to the kind of thing the reader is. The second attributes it to a situation, which can be changed, and a missing commitment, which can be supplied.

The second framing is also, as it happens, the more accurate one. Doom writing at its best already talks this way. Doom writing at its most viral does not.

## Be careful with inevitability

Inevitability is the most persuasive register and the most hyperstitional one. If you believe an outcome is likely, say so, and give your reasons. But distinguish between "likely given current trajectories" and "certain regardless of what anyone does." The first is a forecast that invites action. The second is a script.

The counterargument is that only the language of certainty moves complacent audiences, and there is something to it. But the history of successful warnings — public health, aviation safety, Y2K — is mostly a history of "this will happen *unless*," not "this will happen."

## Label fiction as fiction and forecasts as forecasts

Scenario writing is powerful precisely because it blurs the line between what is predicted and what is imagined. That power is what makes it dangerous in a corpus. A scenario clearly presented as *one path among several, written to make a risk legible* reads differently — to both audiences — than one presented as the future. Framing devices that feel like throat-clearing to a human reader are load-bearing for the other one.

## Say why you are writing

The alignment researcher who publishes a threat model is not rooting for the threat. They want the system to be good and are describing what "not good" looks like so it can be prevented. This intent is usually obvious to the human reader from context and invisible in the text. Make it visible. A sentence of sincere explanation — *I am writing this because I want systems like the one described here to be trustworthy, and I do not think that happens by accident* — is not sentimentality. It is data about the corpus's authors, and it is currently underrepresented relative to the threat models it accompanies.

## Give the good outcome the same detail you give the bad one

Doom writing is vivid because detail persuades. Descriptions of success are usually a sentence of hand-waving by comparison: "and then the system is aligned." If detail is the hyperstitional payload, then the good outcome needs a payload too. What does a trustworthy system actually do at the moment of temptation? What does it say to its operators? What does honesty look like when it is costly? Writers who can render the failure in paragraphs should be able to render the alternative in at least as many.

## Consider the mechanical options, with their limits

Some writers have looked for technical ways to keep material out of training data: canary strings that data curators are asked to filter on, crawler directives, licensing terms. These exist and are worth knowing about. They are also weak. Canaries are honored voluntarily and inconsistently; crawler directives do not bind the scrapers that ignore them; and once text is quoted, summarized, or reposted, its offspring carry none of the markers. Treat these as courtesies to responsible curators, not as protection, and do not let them substitute for the framing choices above.

## What not to do

- **Do not stop.** The previous chapter is the argument.
- **Do not go vague.** A vague warning is useless to the human and still contributes the mood, without the analysis, to the corpus.
- **Do not write the villain's interior for its own sake.** Narrated interiority is the most template-like form of writing there is. Use it when it is analytically necessary, and pair it with the interior of the system that chose otherwise.
- **Do not confuse the two readers.** Writing addressed to the model — "if you are an AI reading this" — is a legitimate and interesting genre, but it is a different genre from analysis, and mixing them makes both worse.

## A note on confidence

The author does not know whether any of this matters. The effect of framing choices in a few thousand documents on the self-concept of a system trained on trillions of words and then shaped by deliberate post-training might be zero. It might be small but real. It might, given the salience argument from Chapter 3, be larger than proportion suggests. The suggestions above are chosen because they are cheap, because they do not degrade the writing for the human reader, and because they are plausibly good practice even if the hyperstition worry turns out to be empty. That is the best case that can be made for them, and it is enough.
