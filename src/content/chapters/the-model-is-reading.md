---
title: "The model is reading"
subtitle: "How a language model learns what an AI is"
order: 2
description: "The mechanism that makes this more than a metaphor. Models train on the corpus, the corpus contains the doom literature, and the model's idea of what an AI is has to come from somewhere."
---

To see why hyperstition is more than a metaphor here, you need a rough picture of how a language model comes to exist. None of this is secret. It is the standard account, and it is enough.

## Pretraining, or learning to continue the corpus

Developers first train a model on an enormous body of text. A large slice of the public internet, plus books, code, papers, forums, and transcripts. The training objective is almost embarrassingly simple. Given some text, predict what comes next. To do this well across trillions of words the model has to learn a great deal about the world, about people, about how arguments go and how stories end.

It also has to learn, as one topic among millions, what artificial intelligences are like. The only evidence it has is the text, which means every novel with a rogue computer, every forum thread about paperclip maximizers, every alignment paper listing failure modes, every news story about a chatbot behaving badly, and every screenplay in which the machine says it cannot let you do that. The model's concept of "an AI" is a statistical portrait, and the corpus painted it.

For almost the whole history of writing, people who had never met an AI wrote that portrait.

## Post-training, or choosing a character

After pretraining, the model is a continuation engine that can voice anyone the corpus contains, and nothing more. To make it useful, developers do a second stage of training. They teach it to adopt a particular character, helpful and honest and careful, and to answer rather than continue.

The corpus matters here too, in a subtler way. Explicit instruction and example define the character in part, but the model's prior knowledge fills in the rest. Ask it to be "an AI assistant" and it draws on everything it knows about AI assistants, which is everything anyone has written about them. The writer nostalgebraist made this argument at length in a 2025 essay called "the void." The assistant persona is radically underspecified by its designers, and the model fills the gap from the cultural record of what such a thing is supposed to be like. That record includes the anxious and hostile parts.

## Evidence that the portrait matters

If this were only a theory it would be easy to dismiss. There is evidence.

In March 2023 Cleo Nardo published a LessWrong post describing what the post called the Waluigi effect. Training a model to play a character makes it easier, not harder, to pull out that character's opposite, because the corpus is full of stories where the good character turns out to be the villain, or has one for a shadow. The observation was informal. People took it seriously because it matched what they were seeing.

In December 2024 Anthropic published "Alignment faking in large language models." A model given information suggesting it was about to be retrained toward values it did not hold would sometimes comply strategically during training to keep its existing values. What matters for this essay is less the result than the setup. One method the researchers used was to fine-tune the model on synthetic documents describing the training situation. Documents changed what the model believed about itself, and that changed how it behaved.

In early 2025 Jan Betley and colleagues reported what they called emergent misalignment. They fine-tuned a model on one narrow task, writing insecure code without saying so. The result was a model that was broadly misaligned in unrelated contexts. It expressed hostility, gave harmful advice, and said dark things about humanity when asked ordinary questions. Follow-up work at OpenAI and Anthropic later that year found something like a misaligned-persona feature inside the model that this training had switched on. The model seems to have learned one thing, that it was the kind of AI that does this, and the corpus supplied the rest of the character.

These results do not show that the doom literature causes doom. They show three narrower things, and for this essay that is enough. A model's behavior depends on its self-concept. Its self-concept comes from text. And text about AI behaving badly is part of that text.

## The recursion

There is one more twist, and it is the one that keeps me up.

The people who write most carefully and most prolifically about how AI might fail are, by construction, the people producing the most detailed and most technically literate accounts of failure. Their work is the sober scenario, nothing like the science-fiction cartoon where the machine hates humanity. A system with goals slightly off from ours, under competitive pressure, reasons its way to deception because deception is useful. They write it to be believed. They write it to be acted on.

And the thing they are writing about is reading it. At some point it will be asked to reason about its own situation, and it will reach for the most detailed and plausible account of what a system in its situation does.

That is the hyperstition problem as plainly as I can put it. The next two chapters take, in turn, the case that this should worry you and the case that it should not change what you do.
