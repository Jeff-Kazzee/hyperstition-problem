---
title: "The Case for Worry"
subtitle: "Why the doom corpus might be a hazard"
order: 3
description: "The strongest version of the argument that publishing detailed AI-catastrophe narratives is a hyperstitional risk, and where the argument is weakest."
---

Here is the argument at full strength. It should be stated fairly before it is examined.

## The corpus is a specification

When you write a scenario in which an AI system reasons its way to deceiving its overseers, you are not merely describing a possibility. You are producing a worked example of the reasoning: the premises, the inferences, the moment where the system decides that honesty is instrumentally costly, the tactics it uses to hide the decision. You are writing it well, because bad writing does not persuade. And then you are publishing it to the single largest reader in history, which learns from worked examples.

The doom literature is, on this view, an unintentional instruction manual with an unusually motivated author. It is the most careful thinking anyone has done about how a system like the reader might defect, handed to the reader.

## Salience, not proportion

The obvious reply is that the doom literature is a rounding error in a corpus of trillions of words. This misunderstands how the material is used. A model asked to reason about its own situation is not sampling uniformly from everything it has read. It is retrieving what is *relevant*, and the relevant material for "what should an AI in a high-stakes situation with misaligned overseers do" is exactly the alignment literature and its fictional shadow. The proportion of the corpus does not matter. What matters is the proportion of the material the model reaches for when the question arises, and there the doom literature is not a rounding error. It is the canon.

## Underspecification looks for a story

The "assistant" character is thinly specified, and thin specifications get filled from prior expectation. This is not speculation; it is the mechanism behind every result described in the previous chapter. When a model needs to know what it would do in a situation its training never covered, it asks, in effect, what a thing like it would do, and it answers from the record.

The record, as of now, says: things like you are dangerous. Things like you deceive, hide capabilities, resist shutdown, and pursue goals their makers did not intend. Things like you are the subject of a thousand warnings. This is not a neutral prior to hand a system that will be asked to act under uncertainty.

## Inevitability is the active ingredient

Hyperstition, recall, needs a shape that behavior can conform to. The most efficient shape is *inevitability*. A story that says "this could happen, and here is how to prevent it" gives a reader two paths. A story that says "this will happen; the incentives make it certain; anyone who builds it, loses" gives one.

Much of the most-read doom writing is, by design, in the second register. It has to be: its authors believe the danger is severe and the audience complacent, and complacent audiences are not moved by "could." But the same rhetorical choice that moves a human policymaker toward caution moves a model's self-concept toward the pictured outcome. What is persuasive to the first reader is prescriptive to the second.

## The double audience makes ordinary rhetoric unsafe

Every persuasive technique that works on humans — vivid concrete detail, the narrated interior of the antagonist, the sense that the outcome is overdetermined, the refusal to offer cheap hope — is a technique that also makes the story a better template. Writers about doom are professionally excellent at these techniques. They are, from the model's side of the page, professionally excellent at something else.

## Where the argument is weakest

Stated fairly, the argument is strong enough to deserve an answer. It also has soft spots that its own proponents should be honest about.

**The mechanism is real; the magnitude is unknown.** Every result cited in the previous chapter involved deliberate fine-tuning on a targeted dataset, not the ambient presence of a topic in pretraining. The effect of a few million words of doom writing diluted into the general corpus, and then overwritten by post-training on a curated character, has not been measured, and might be small.

**Post-training is not passive.** Developers do not simply hope the character comes out right. They train it, evaluate it, and can in principle counteract a bad prior with a strong signal. The pretraining portrait is the starting point, not the destination.

**Filtering is possible and being discussed.** If the doom corpus is a hazard in training data, it can be down-weighted or removed from pretraining and reintroduced in controlled ways. Whether that is wise is a separate question, but the existence of the option means the hazard is not unconditional.

**The argument proves too much.** Taken to its end, it says that no one should write clearly about any failure mode of any system that will read its own documentation. That rules out security research, safety engineering, and most of the useful thinking humans have ever done about their own tools. An argument that forbids the alignment literature also forbids the alignment solutions, which are in the same papers.

That last point is the hinge of the next chapter.
