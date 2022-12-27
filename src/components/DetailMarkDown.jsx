import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

export default function DetailMarkDown({ content }) {
  return (
    <MarkDownWrapper>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </MarkDownWrapper>
  );
}

const MarkDownWrapper = styled.div`
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  padding: 22px;
  width: 100%;
  height: fit-content;
  line-height: 24px;
  font-size: 16px;
  overflow: auto;
`;
