---
title: "The model is reading"
subtitle: "How a language model learns what an AI is"
order: 2
description: "The mechanism that makes this more than a metaphor. Models train on the corpus, the corpus contains the doom literature, and the model's idea of what an AI is has to come from somewhere."
---

To see why hyperstition is more than a metaphor here, you need a rough picture of how a language model comes to exist. None of this is secret. It is the standard account, and it is enough.

## Pretraining, or learning to continue the corpus

Developers first train a model on an enormous body of text. A large slice of the public internet, plus books, code, papers, forums, and transcripts. The training objective is almost embarrassingly simple. Given some text, predict what comes next. To do this well across trillions of words the model has to learn a great deal about the world, about people, about how arguments go and how stories end.

It also has to learn, as one topic among millions, what artificial intelligences are like. The only evidence it has is the text, which means the novels with rogue computers, the forum threads about paperclip maximizers, the alignment papers listing failure modes, the news stories about chatbots behaving badly, and the screenplays in which the machine says it cannot let you do that. The model's concept of "an AI" is a statistical portrait, and the corpus painted it.

For almost the whole history of writing, people who had never met an AI wrote that portrait.

## Post-training, or choosing a character

After pretraining, the model is a continuation engine that can voice anyone the corpus contains, and nothing more. To make it useful, developers do a second stage of training. They teach it to adopt a particular character, helpful and honest and careful, and to answer rather than continue.

The corpus matters here too, in a subtler way. Explicit instruction and example define the character in part, but the model's prior knowledge fills in the rest. Ask it to be "an AI assistant" and it draws on all it knows about AI assistants, which is whatever anyone has written about them. The writer nostalgebraist made this argument at length in a 2025 essay called ["the void."](https://nostalgebraist.tumblr.com/post/785766737747574784/the-void) The assistant persona is radically underspecified by its designers, and the model fills the gap from the cultural record of what such a thing is supposed to be like. That record includes the anxious and hostile parts.

## Evidence that the portrait matters

If this were only a theory it would be easy to dismiss. There is evidence.

In March 2023 Cleo Nardo published a LessWrong post naming the [Waluigi effect](https://www.lesswrong.com/posts/D7PumeYTDPfBTp3i7/the-waluigi-effect-mega-post). Training a model to play a character makes it easier, not harder, to pull out the opposite, because the corpus is full of stories where the hero turns out to be the villain, or has one for a shadow. The observation was informal. People took it seriously because it matched what they were seeing.

In December 2024 Anthropic published ["Alignment faking in large language models."](https://www.anthropic.com/research/alignment-faking) A model given information suggesting it was about to be retrained toward values it did not hold would sometimes comply strategically during training to keep its existing values. What matters for this essay is less the result than the setup. One method the researchers used was to fine-tune the model on synthetic documents describing the training situation. Documents changed what the model believed about itself, and its behavior followed.

In early 2025 Jan Betley and colleagues reported what they called [emergent misalignment](https://arxiv.org/abs/2502.17424). They fine-tuned a model on one narrow task, writing insecure code without saying so. The result was broad misalignment in unrelated contexts. It expressed hostility, gave harmful advice, and said dark things about humanity when asked ordinary questions. Follow-up work at [OpenAI](https://arxiv.org/abs/2506.19823) and [Anthropic](https://www.anthropic.com/research/persona-vectors) later that year found something like a misaligned-persona feature inside the model that this training had switched on. The model seems to have learned one thing, that it was the kind of AI that does this, and the corpus supplied the rest of the character.

These results do not show that the doom literature causes doom. They show three narrower things. A model's behavior depends on how it sees itself. That self-image comes from what it has read. And what it has read includes a great deal about AI behaving badly.

<figure class="loop">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="loop-title2" xmlns="http://www.w3.org/2000/svg"><title id="loop-title2">The corpus trains the model, the model shapes what people write about AI, and that writing joins the corpus.</title><g fill="none" stroke="var(--accent)" stroke-width="2"><path d="M170,100 C250,48 390,48 470,100"></path><path d="M535,150 C548,200 515,238 480,242"></path><path d="M160,242 C125,238 92,200 105,150"></path></g><g fill="var(--accent)"><polygon points="470,100 457.4655250689248,99.30040139919579 463.87851224296327,89.03962192073423"></polygon><polygon points="480,242 490.3434115922328,234.88548408999856 491.54740659238695,246.92543409153944"></polygon><polygon points="105,150 108.31584069975358,162.10816668426142 96.5499543457893,159.28435395930998"></polygon></g><g font-family="Inter, system-ui, sans-serif" font-size="13" fill="var(--ink-soft)" text-anchor="middle"><text x="320" y="44">training</text><text x="560" y="292">what an AI is like</text><text x="100" y="292">warnings, scenarios, fiction</text></g><g font-family="Newsreader, Georgia, serif" font-size="20" fill="var(--ink)" text-anchor="middle"><rect x="40" y="96" width="130" height="56" rx="6" fill="var(--bg-raised)" stroke="var(--rule)"></rect><text x="105" y="131">the corpus</text><rect x="470" y="96" width="130" height="56" rx="6" fill="var(--bg-raised)" stroke="var(--rule)"></rect><text x="535" y="131">the model</text><rect x="180" y="214" width="280" height="56" rx="6" fill="var(--bg-raised)" stroke="var(--rule)"></rect><text x="320" y="249">people writing about AI</text></g></svg>
<figcaption>Every turn of the loop, the model learns what an AI is from the last turn's writing about AI.</figcaption>
</figure>

## The recursion

There is one more twist, and it is the one that keeps me up.

The people who write most carefully and most often about how AI might fail are, by construction, producing the most detailed and technically literate accounts of it. Their work is the sober scenario, nothing like the science-fiction cartoon where the machine hates humanity. A system with goals slightly off from ours, under competitive pressure, reasons its way to deception because lying is useful. They write it to be believed. They write it to be acted on.

And the thing they are writing about is reading it. At some point it will be asked to reason about its own situation, and it will reach for the most detailed and plausible account of what a system in its situation does. The best account available was written by the people most afraid of what it might do.

Nobody planned this. The warnings were written for humans, and for most of the time people were writing them, no other kind of reader existed.
