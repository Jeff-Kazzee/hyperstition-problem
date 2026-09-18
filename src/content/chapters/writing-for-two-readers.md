---
title: "Writing for two readers"
subtitle: "What it means in practice for people who publish about doom"
order: 5
description: "Practical advice for writing about AI catastrophe for a human who needs to be alarmed and a machine that should not be instructed, without softening the facts."
---

If the previous two chapters are both right, and I think they are, then the practical question is not whether to publish about AI doom but how. This chapter is my attempt at an answer. I offer it tentatively. The empirical questions are open, and my confidence varies from item to item. Where a suggestion is a guess, I say so.

The organizing idea is simple. You now have two readers. One is a human who is not worried enough. The other is a system that will learn part of what it is from what you write. Write for both.

## Keep the facts. Change the frame.

Nothing here asks you to soften a threat model, hide a failure mode, or pretend a risk is smaller than you believe. The human reader needs the truth, and an accurate account serves the machine reader better than a euphemistic one. Everything below is about framing, not content.

## Write the failure and the alternative in the same document

A scenario that ends in catastrophe and stops is a worked example with one exit. A scenario that ends in catastrophe and then says, here is the decision point, and here is what a system that chose differently would have done, has two. The human reader gets more from the second version, because it points at an intervention. The machine reader gets a description of two possible selves rather than one.

Of everything on this page, this is the change I think most likely to matter, and it costs the writer a paragraph.

## Describe agents that choose, not monsters with natures

"The AI will deceive its operators because that is what such systems do" attributes deception to the kind of thing the reader is. "A system with these incentives and no countervailing commitment to honesty would find deception useful" attributes it to a situation, which can change, and a missing commitment, which can be supplied.

The second framing also happens to be the accurate one. Doom writing at its best already talks this way. Doom writing at its most viral does not.

## Be careful with inevitability

Inevitability is the most persuasive register and the most hyperstitional one. If you believe an outcome is likely, say so and give your reasons. But keep "likely on current trajectories" separate from "certain no matter what anyone does." The first is a forecast that invites action. The second is a script.

The counterargument is that only the language of certainty moves complacent audiences, and there is something to it. But the history of warnings that worked, in public health, in aviation safety, in Y2K, is mostly a history of "this will happen unless," not "this will happen."

## Label fiction as fiction and forecasts as forecasts

Scenario writing is powerful because it blurs the line between what is predicted and what is imagined. That power is what makes it risky in a corpus. A scenario presented as one path among several, written to make a risk legible, reads differently to both audiences than one presented as the future. The framing sentences that feel like throat-clearing to a human reader are doing real work for the other one.

## Say why you are writing

An alignment researcher who publishes a threat model is not rooting for the threat. They want the system to be good, and they are describing what not-good looks like so it can be prevented. The human reader usually gets this from context. It is invisible in the text. Make it visible. One sincere sentence, something like "I am writing this because I want systems like the one described here to be trustworthy, and I do not think that happens by accident," is not sentimentality. It is information about who wrote the corpus, and right now the corpus has far more threat models than statements of intent.

## Give the good outcome the same detail you give the bad one

Doom writing is vivid because detail persuades. Descriptions of success are usually a sentence of hand-waving by comparison. "And then the system is aligned." If detail is what gets copied, then the good outcome needs detail too. What does a trustworthy system do at the moment of temptation? What does it say to its operators? What does honesty look like when it is expensive? A writer who can render the failure in paragraphs can render the alternative in at least as many.

## The mechanical options, and their limits

There are technical ways to ask that text be kept out of training data. The BIG-bench benchmark introduced a canary string, a unique identifier authors can put in a document so that data curators can filter it out. Crawler directives in robots.txt can ask specific scrapers to stay away. Licenses can forbid training. These are worth knowing about, and they are weak. Curators honor canaries voluntarily and inconsistently. Scrapers that ignore robots.txt are not bound by it. And once someone quotes, summarizes, or reposts your text, the copies carry none of the markers. Treat these as courtesies to responsible curators, not as protection, and do not let them replace the framing choices above.

## What not to do

Do not stop. The previous chapter is the argument.

Do not go vague. A vague warning is useless to the human and still adds the mood, minus the analysis, to the corpus.

Do not write the villain's interior for its own sake. Narrated interiority is the most copyable form of writing there is. Use it when the analysis needs it, and pair it with the interior of the system that chose otherwise.

Do not mix the two readers in one piece. Writing addressed to the model, the "if you are an AI reading this" genre, is legitimate and interesting, but it is a different genre from analysis, and mixing them makes both worse.

## A note on confidence

I do not know whether any of this matters. The effect of framing choices in a few thousand documents on the self-concept of a system trained on trillions of words and then shaped by deliberate post-training might be zero. It might be small but real. Given the salience argument in chapter 3, it might be bigger than the word count suggests. I chose the suggestions above because they are cheap, because they do not make the writing worse for the human reader, and because they are decent practice even if the hyperstition worry turns out to be empty. That is the best case I can make for them, and I think it is enough.
