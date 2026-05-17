import { tokenizeMarkdown } from "../utils/codeHighlighter";

const markdownContent = `# Automata Compilation Activity

## Group Name: Basket Barbarians
## Section: III-DCSAD
---

### Members
- IBAY, Charles Allen T.
- MANZANILLO, Maveric Brycel
- PAGAD, Euvert Zion P.
- TALIGATOS, John Lenard M.

### Submitted in partial fulfilments to:
**AUTOMATA THEORY AND FORMAL LANGUAGES**

### Submitted to:
**Prof. Lester G. Diampoc, Associate Professor**
---
### Technologies Used
- React.js (JavaScript)
- TailwindCSS
- LucideIcons
-
*This project is for academic purposes only!*
`;

export default function Members() {
  return <>{tokenizeMarkdown(markdownContent)}</>;
}
