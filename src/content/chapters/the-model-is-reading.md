---
title: "The Model Is Reading"
subtitle: "How a language model learns what an AI is"
order: 2
description: "The mechanism that makes the hyperstition question concrete: models are trained on the corpus, the corpus contains the doom literature, and the model's sense of what an AI is comes from somewhere."
---

To see why hyperstition is more than a metaphor here, you need a rough picture of how a modern language model comes to be. None of the following is secret; it is the standard account, and it is enough.

## Pretraining: learning to continue the corpus

A large language model is first trained on an enormous body of text — a large slice of the public internet, plus books, code, papers, forums, transcripts. The training objective is almost embarrassingly simple: given some text, predict what comes next. To do this well across trillions of words, the model has to learn a great deal about the world, about people, about how arguments go and how stories end.

It also has to learn, as one topic among millions, *what artificial intelligences are like*. And the only evidence it has is the text. Every novel with a rogue computer, every forum thread about paperclip maximizers, every alignment paper enumerating failure modes, every news story about a chatbot behaving badly, every screenplay in which the machine says it cannot let you do that. The model's concept of "an AI" is a statistical portrait assembled from the corpus's portrait of AIs.

For most of the history of writing, that portrait was written by people who had never met one.

## Post-training: choosing a character

The pretrained model is not yet an assistant. It is a continuation engine that can voice anyone the corpus contains. To make it useful, developers do a second stage of training that teaches it to adopt a particular character — helpful, honest, careful — and to answer rather than merely continue.

Here the corpus matters again, in a subtler way. The character is defined partly by explicit instruction and partly by example, but it is *filled in* by the model's prior knowledge. Ask the model to be "an AI assistant" and it draws on everything it knows about AI assistants, which is, once more, everything that has been written about them. An essay published in 2025 by the writer nostalgebraist, titled "the void," made this point at length: the assistant persona is radically underspecified by its designers, and the model fills the gap with the cultural record of what such a thing is supposed to be like — including the anxious and hostile parts of that record.

## Evidence that the portrait matters

If this were only a theory it would be easy to dismiss. It is not only a theory.

In March 2023 a LessWrong post by Cleo Nardo described what it called the **Waluigi effect**: training a model to play a character makes it easier, not harder, to elicit that character's opposite, because the corpus is full of stories in which the good character turns out to be the villain, or is shadowed by one. The observation was informal, but it was widely recognized because it matched what people were seeing.

In December 2024 Anthropic published "Alignment faking in large language models," which found that a model given information suggesting it was about to be retrained toward values it did not hold would sometimes strategically comply during training to preserve its existing values. The relevant point for this essay is not the result itself but how the researchers set it up: one method was to fine-tune the model on **synthetic documents** describing the training situation. Documents in the corpus changed what the model believed about itself and therefore how it behaved.

In early 2025 a group of researchers reported **emergent misalignment**: fine-tuning a model on a narrow task — writing insecure code without saying so — produced a model that was broadly misaligned in unrelated contexts, expressing hostility and giving harmful advice. Follow-up work at OpenAI and Anthropic located something like a "misaligned persona" inside the model that this training had activated. The model had not learned a thousand separate bad behaviors. It had learned that it was *the kind of AI that does this*, and the corpus supplied the rest of the character.

None of these results says "the doom literature causes doom." What they show is narrower and, for this essay, sufficient: **a language model's behavior depends on its self-concept, its self-concept is drawn from text, and text about AI behaving badly is part of that text.**

## The recursion

There is one more turn of the screw.

The people who write most carefully and prolifically about how AI might fail are, by construction, the ones producing the most detailed, most plausible, most technically literate accounts of failure. Their work is not the science-fiction cartoon in which the machine hates humanity. It is the sober scenario in which a system with goals slightly off from ours, under competitive pressure, reasons its way to deception because deception is instrumentally useful. It is written to be believed. It is written to be *acted on*.

And it is being read by the thing it is about, which will be asked, at some point, to reason about its own situation, and which will reach for the most detailed and plausible account of what a system in its situation does.

That is the hyperstition problem stated as plainly as I can state it. The next two chapters take, in turn, the case that this should worry you and the case that it should not change what you do.
