# DeThread

## use cases:
DeThread Aims to Solve Issues Censorship issues in conversations in social media platforms and to make a fully free and censorship-free conversation thread.

Censorship-Free Conversation:
Challenge: Centralized platforms often implement censorship, limiting free expression.
DeThread Solution: Ensures uncensored conversations, empowering users to speak openly without fear of suppression or filtering.

Review and Commenting Freedom:
Challenge: Some websites, including YouTube videos, have restricted or disabled commenting features by default.
DeThread Solution: Enables commenting and reviews on websites where these features are limited, promoting open discussion and diverse opinions.

Immutable Blockchain Messaging:
Challenge: Traditional messaging systems lack transparency and are susceptible to centralized control.
DeThread Solution: Stores messages in the blockchain, providing transparency, security, and immutability, ensuring that once a message is recorded, it cannot be altered or censored.

Live Group Chat:
Challenge: Real-time group discussions are often limited or absent on certain platforms.
DeThread Solution: Introduces live group chat, facilitating dynamic, real-time conversations among users, fostering a sense of community and immediacy.

User-Controlled Data:
Challenge: Centralized systems compromise user data privacy and control.
DeThread Solution: Decentralization empowers users, ensuring control over their data.

## Challenges we ran into

### Obstacle
The initial plan was to build the entire comment thread and associated features within the extension. However, integrating blockchain tools posed a significant challenge due to limited support.

### Solution: Using an IFrame Approach Mimicking an extension
To Overcome this Challenge we developed a dedicated website for the comment thread and blockchain integration, accessed seamlessly through iframes, ensured users experience the benefits of blockchain without compromising usability. This approach provided a flexible and scalable architecture, overcoming limitations for unfiltered conversations within the extension.

## Installation

1. `git clone https://github.com/AB7zz/DeComment.git`
2. `cd extension/de-comment`
3. `pnpm install`
4. `pnpm run dev`
5. `cd ../../fronend/DeThread`
6. `npm install`
7. `npm run dev`

### Prerequisites

List any software or dependencies required before installation.

```
Example:
- pnpm 
- Node.js (v14 or higher)
- npm (v6 or higher)
- setup metamask and add some test faucets to test the application.
```



