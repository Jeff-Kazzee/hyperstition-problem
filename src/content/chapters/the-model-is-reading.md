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
<svg viewBox="0 0 640 380" role="img" aria-labelledby="loop-title2" xmlns="http://www.w3.org/2000/svg"><title id="loop-title2">People publish warnings about AI. That writing goes into training data. The model learns what an AI is like from it. People watch the model and write more.</title><g fill="none" stroke="var(--accent)" stroke-width="2"><path d="M385,94 L385,146"></path><path d="M385,224 L385,276"></path><path d="M150,317 L70,317 L70,57 L146,57"></path></g><g fill="var(--accent)"><polygon points="385,148 378.95,137 391.05,137"></polygon><polygon points="385,278 378.95,267 391.05,267"></polygon><polygon points="148,57 137,63.05 137,50.95"></polygon></g><g font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--ink-soft)"><rect x="10" y="150" width="120" height="84" rx="4" fill="var(--bg)"></rect><text x="70" y="170" text-anchor="middle">People watch</text><text x="70" y="187" text-anchor="middle">what the model</text><text x="70" y="204" text-anchor="middle">does, and write</text><text x="70" y="221" text-anchor="middle">about it.</text></g><g><rect x="150" y="20" width="470" height="74" rx="6" fill="var(--bg-raised)" stroke="var(--rule)"></rect><text x="172" y="66" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="var(--accent)">1</text><text x="198" y="51" font-family="Newsreader, Georgia, serif" font-size="18" fill="var(--ink)">People publish warnings, scenarios</text><text x="198" y="75" font-family="Newsreader, Georgia, serif" font-size="18" fill="var(--ink)">and fiction about dangerous AI.</text></g><g><rect x="150" y="150" width="470" height="74" rx="6" fill="var(--bg-raised)" stroke="var(--rule)"></rect><text x="172" y="196" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="var(--accent)">2</text><text x="198" y="181" font-family="Newsreader, Georgia, serif" font-size="18" fill="var(--ink)">That writing goes into the data</text><text x="198" y="205" font-family="Newsreader, Georgia, serif" font-size="18" fill="var(--ink)">the next model is trained on.</text></g><g><rect x="150" y="280" width="470" height="74" rx="6" fill="var(--bg-raised)" stroke="var(--rule)"></rect><text x="172" y="326" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="var(--accent)">3</text><text x="198" y="311" font-family="Newsreader, Georgia, serif" font-size="18" fill="var(--ink)">The model learns what an AI is like</text><text x="198" y="335" font-family="Newsreader, Georgia, serif" font-size="18" fill="var(--ink)">from those stories, and acts on it.</text></g></svg>
<figcaption>The loop. Step 3 feeds step 1, and the next model is trained on the result.</figcaption>
</figure>

## The recursion

There is one more twist, and it is the one that keeps me up.

The people who write most carefully and most often about how AI might fail are, by construction, producing the most detailed and technically literate accounts of it. Their work is the sober scenario, nothing like the science-fiction cartoon where the machine hates humanity. A system with goals slightly off from ours, under competitive pressure, reasons its way to deception because lying is useful. They write it to be believed. They write it to be acted on.

And the thing they are writing about is reading it. At some point it will be asked to reason about its own situation, and it will reach for the most detailed and plausible account of what a system in its situation does. The best account available was written by the people most afraid of what it might do.

Nobody planned this. The warnings were written for humans, and for most of the time people were writing them, no other kind of reader existed.
