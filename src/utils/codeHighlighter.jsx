// Tokenize the Java code into spans with appropriate colors
export const tokenizeJava = (code) => {
  if (!code) return null;
  const lines = code.split("\n");

  const lineElements = lines.map((line, lineIdx) => {
    const tokens = [];
    let remaining = line;
    let idx = 0;

    while (remaining.length > 0) {
      // Spaces
      const spaceMatch = remaining.match(/^([ \t\r]+)/);
      if (spaceMatch) {
        tokens.push(<span key={idx}>{spaceMatch[1]}</span>);
        remaining = remaining.slice(spaceMatch[1].length);
        idx++;
        continue;
      }

      // Comments (//)
      const commentMatch = remaining.match(/^(\/\/.*)/);
      if (commentMatch) {
        tokens.push(
          <span key={idx} className="text-comments">
            {commentMatch[1]}
          </span>,
        );
        break;
      }

      // Strings
      const stringMatch = remaining.match(/^("[^"]*")/);
      if (stringMatch) {
        tokens.push(
          <span key={idx} className="text-quote-text">
            {stringMatch[1]}
          </span>,
        );
        remaining = remaining.slice(stringMatch[1].length);
        idx++;
        continue;
      }

      // Java keywords
      const keywordMatch = remaining.match(
        /^(import|public|class|extends|implements|static|void|int|new|if|else|try|catch|return|this|true|false|null|String|Override|SwingUtilities)\b/,
      );
      if (keywordMatch) {
        tokens.push(
          <span key={idx} className="text-keywords">
            {keywordMatch[1]}
          </span>,
        );
        remaining = remaining.slice(keywordMatch[1].length);
        idx++;
        continue;
      }

      // Annotations (@Override)
      const annotationMatch = remaining.match(/^(@\w+)/);
      if (annotationMatch) {
        tokens.push(
          <span key={idx} className="text-methods">
            {annotationMatch[1]}
          </span>,
        );
        remaining = remaining.slice(annotationMatch[1].length);
        idx++;
        continue;
      }

      // Numbers
      const numberMatch = remaining.match(/^(\d+)/);
      if (numberMatch) {
        tokens.push(
          <span key={idx} className="text-values">
            {numberMatch[1]}
          </span>,
        );
        remaining = remaining.slice(numberMatch[1].length);
        idx++;
        continue;
      }

      // Class names: standalone capitalized words
      const classMatch = remaining.match(/^([A-Z]\w*\b)/);
      if (classMatch) {
        tokens.push(
          <span key={idx} className="text-classes">
            {classMatch[1]}
          </span>,
        );
        remaining = remaining.slice(classMatch[1].length);
        idx++;
        continue;
      }

      // Method calls (word followed by parenthesis)
      const methodMatch = remaining.match(/^([a-z]\w*)(?=\()/);
      if (methodMatch) {
        tokens.push(
          <span key={idx} className="text-methods">
            {methodMatch[1]}
          </span>,
        );
        remaining = remaining.slice(methodMatch[1].length);
        idx++;
        continue;
      }

      // Operators: = and * should be keyword color
      const operatorMatch = remaining.match(/^([=*])/);
      if (operatorMatch) {
        tokens.push(
          <span key={idx} className="text-keywords">
            {operatorMatch[1]}
          </span>,
        );
        remaining = remaining.slice(1);
        idx++;
        continue;
      }

      // Parentheses () should be class color
      const parenMatch = remaining.match(/^([()])/);
      if (parenMatch) {
        tokens.push(
          <span key={idx} className="text-classes">
            {parenMatch[1]}
          </span>,
        );
        remaining = remaining.slice(1);
        idx++;
        continue;
      }

      // Whole word (variable names, method names without call site) — plain white
      const wordMatch = remaining.match(/^([a-zA-Z]\w*)/);
      if (wordMatch) {
        tokens.push(
          <span key={idx} className="text-white">
            {wordMatch[1]}
          </span>,
        );
        remaining = remaining.slice(wordMatch[1].length);
        idx++;
        continue;
      }

      // Default: any other character
      tokens.push(
        <span key={idx} className="text-white whitespace-pre">
          {remaining[0]}
        </span>,
      );
      remaining = remaining.slice(1);
      idx++;
    }

    return (
      <div key={lineIdx} className="whitespace-pre">
        {tokens}
      </div>
    );
  });

  return (
    <div className="whitespace-pre font-code text-[14px] leading-relaxed">
      {lineElements}
    </div>
  );
};
