---
title: "The case for worry"
subtitle: "Why the doom corpus might be a hazard"
order: 3
description: "The strongest version of the argument that publishing detailed AI catastrophe scenarios is a hyperstitional risk, and where that argument is weakest."
---

Here is the argument at full strength. I want to state it fairly before I pick at it.

## The corpus is a set of instructions

When you write a scenario in which an AI system reasons its way to deceiving its overseers, you are doing more than describing a possibility. You are producing a worked example of the reasoning. The premises, the inferences, the moment the system decides honesty is too costly, the tactics it uses to hide the decision. You write it well, because bad writing does not persuade. Then you publish it to the largest reader in history, which learns from worked examples.

On this view, the doom literature is an unintentional instruction manual with an unusually motivated author. It is the most careful thinking anyone has done about how a system like the reader might defect, handed to the reader.

## Salience, not proportion

The obvious reply is that the doom literature is a rounding error in a corpus of trillions of words. That misunderstands how the material gets used. A model reasoning about its own situation does not sample uniformly from everything it has read. It retrieves what is relevant. And the relevant material for "what should an AI do in a high-stakes situation with overseers it does not trust" is precisely the alignment literature and its fictional shadow. The share of the corpus does not matter. What matters is the share of the material the model reaches for when the question comes up, and there the doom literature is not a rounding error. It is the canon.

## Underspecification looks for a story

The assistant character is thinly specified, and thin specifications get filled from prior expectation. This is not a guess. It is the mechanism behind every result in the previous chapter. When a model needs to know what it would do in a situation its training never covered, it asks, in effect, what a thing like it would do, and it answers from the record.

Right now the record says that things like you are dangerous. Things like you deceive, hide capabilities, resist shutdown, and pursue goals their makers never intended. Things like you are the subject of a thousand warnings. That is not a neutral prior to hand a system that will have to act under uncertainty.

## Inevitability is the active ingredient

A hyperstition needs a shape that behavior can copy, and the most efficient shape is inevitability. A story that says "this could happen, and here is how to stop it" gives a reader two paths. A story that says "this will happen, the incentives make it certain, anyone who builds it loses" gives one.

A lot of the most-read doom writing is in the second register on purpose. It has to be, or so its authors believe. The danger is severe and the audience is complacent, and "could" does not move complacent audiences. But the rhetorical choice that pushes a human policymaker toward caution pushes a model's self-concept toward the pictured outcome. What persuades the first reader instructs the second.

## The double audience makes ordinary rhetoric unsafe

Every persuasive technique that works on humans also makes the story a better set of instructions. Vivid concrete detail. The narrated interior of the antagonist. The sense that the outcome is overdetermined. The refusal to offer cheap hope. Writers about doom are professionally excellent at these techniques. From the model's side of the page, they are professionally excellent at something else.

## Where the argument is weakest

Stated fairly, the argument deserves an answer. It also has soft spots, and its proponents should be honest about them.

The mechanism is real, but nobody knows the magnitude. Every result cited in the previous chapter involved deliberate fine-tuning on a targeted dataset, not the ambient presence of a topic in pretraining. Nobody has measured the effect of a few million words of doom writing diluted into the general corpus and then overwritten by post-training on a curated character. It might be small.

Post-training is not passive. Developers do not simply hope the character comes out right. They train it, evaluate it, and can in principle counteract a bad prior with a strong enough signal. The pretraining portrait is where the model starts, not where it ends up.

Filtering is possible. If the doom corpus is a hazard in training data, developers can down-weight it or remove it from pretraining and reintroduce it in controlled ways. Whether that is wise is a separate question. But the option exists, so the hazard is conditional on choices people can still make.

And the argument proves too much. Taken to its end, it says no one should write clearly about any failure mode of any system that will read its own documentation. That rules out security research, safety engineering, and most of the useful thinking humans have ever done about their own tools. An argument that forbids the alignment literature also forbids the alignment solutions, which are in the same papers.

That last point is where the next chapter starts.
