> Brief: Make a spell checker for BASIC English
> 
> Time allowed: 1 hour (outside of the interview time)
> 
> Background: British American Scientific International Commercial (BASIC) English is a constructed language. It has 850 English words, carefully chosen to make the language easy to learn but still powerful enough to communicate everyday ideas and actions. The rules of usage are identical to full English, so the speaker communicates in perfectly good, but simple, English.
> It is an interesting exercise to try to write out a complicated idea in simple English (e.g. https://xkcd.com/1133), and a spell checker that tells you when you are using BASIC English would be a useful tool.
> 
> Objectives: The main objective is to make something that works in the time you have (~1h pre-interview). In the interview, we’ll then discuss your approach, in terms of both UX and implementation, and ask you to extend your prototype in some way. There are no right or wrong answers. Here are some examples of discussion questions:
> 
> What should the user experience be like? What are people expecting or used to? How did you scope your solution given the time constraint?
> 
> You don’t have to worry too much about efficiency when there are only a few thousand words, but efficiency is more important for real languages. How would you make it faster and / or require less memory?
> Resources: More about BE:
> http://ogden.basic-english.org/basiceng.html
> The list of 850 words:
> http://ogden.basic-english.org/words.html
> Combined word list (includes some compound words):
> https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist
> The page on (Simple) Wikipedia:
> https://simple.wikipedia.org/wiki/Basic_English


## Notes

1. Took the word list from https://github.com/dariusk/corpora/blob/a5cd0b8/data/words/common.json
2. My solution does not handle conjugations or pluralization, I would fix this next
3. I pasted a portion of a Wikipedia article into the Textarea default value, so we can immediately see how it works and its shortcomings.
4. With more time, I would highlight words in the Textarea, probably using https://www.slatejs.org
