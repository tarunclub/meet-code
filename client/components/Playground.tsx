import React, { useState } from 'react';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import TestCases from './TestCases';
import SubmissionButtons from './SubmissionButtons';

export default function Playground() {
  const [code, setCode] = useState(`console.log('Hello World!')`);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <Split
        className="h-[calc(100vh-55px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value={code}
            onChange={(value) => setCode(value)}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: '16px' }}
          />
        </div>
        <div className="w-full overflow-auto">
          {/* heading */}
          <TestCases index={index} setIndex={setIndex} />
          {/* Submit Button */}
          <SubmissionButtons code={code} index={index} />
        </div>
      </Split>
    </div>
  );
}
