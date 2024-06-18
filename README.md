<p align="left">
  <a href="https://comperai.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/atik-persei/comperai/assets/145193070/d6796a9d-e953-43f1-a61e-5444fd8d717e">
      <img src="https://github.com/atik-persei/comperai/assets/145193070/d6796a9d-e953-43f1-a61e-5444fd8d717e" height="180">
    </picture>
  </a>
</p>

![Static Badge](https://img.shields.io/badge/vercel-black)
[![Web Version Badge](https://img.shields.io/badge/web%20version-0.1.0-blue)](http://localhost:3000/docs/getting-started/project-structure#%EB%AA%A8%EB%8D%B8)
[![Model Version Badge](https://img.shields.io/badge/model%20version-1.0.0-blue)](http://localhost:3000/docs/getting-started/project-structure#%EB%AA%A8%EB%8D%B8)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fvercel.com&up_message=Up&down_message=down&link=https%3A%2F%2Fcomperai.org)

ㅤ  

# 📃 Getting Stated
Introducing an open-source Comperai that helps with effective GitHub history management.
It generates commit messages that adhere to commit style guidelines through ChatGPT.
Whether you're an individual developer or part of a large team, following unified rules and guidelines can improve code consistency and readability, and enhance collaboration.
- To get started with the Comperai, visit the [Comperai Introduction](https://comperai.org/docs/getting-started/introduction).
- To see examples of Comperai results, visit the [Comperai Example](https://comperai.org/docs/getting-started/example).
ㅤ  

## Documentation
To view the complete documentation, visit the [Comperai Docs](https://comperai.org/docs) page.
ㅤ  

## Commit Rules
Introducing the style guideline items followed by the Comperai.

### Types
There are three grammatical rules for commit types.
- Write only in lowercase.
- Write the commit type after an emoji.
- Add a space after the colon (:).

### Title Rules
Summarize the tasks performed briefly.
There are three grammatical rules for commit titles.
- Write within 50 characters.
- Use a bullet point format.
- Do not use periods or special characters.


### Body Rules
Describe the tasks performed in as much detail as possible.
There are two grammatical rules for commit bodies.
- Write within 72 characters per line.
- Explain what was changed and why.


### Output Example
```
✨ feat: add function to perform addition

- Implemented 'add' function that returns the sum of two input parameters
```

ㅤ  

# 📃 Deployment
## Quick Start
**Step 1 - Clone and Install the Repository**  
Clone the repository, set up the environment variables, and then install the Comperai.
```
git clone https://github.com/atik-persei/comperai
cd comperai

echo 'GPT_KEY=<Your GPT API KEY>
GPT_MODEL=<Your GPT Model ID>
GPT_SYSTEM=<Your GPT System Message>
GPT_INPUT_LIMIT=<Your Input Limit Length>' > .env

docker build -t comperai .
docker run -d --name comperai comperai
```
ㅤ  
**Step 2 - Use the Comperai**  
Now, start using the Comperai.
```
https://<Server ip OR Your ip>
```

ㅤ  

# 📃 Multilingual Documentation
We are translating the documentation into multiple languages for user convenience. Currently, two languages are supported.

<p align="center">
    <a href="https://github.com/atik-persei/comperai">English</a>
    · 
    <a href="/docs/README_kr.md">한국어</a>
</p>