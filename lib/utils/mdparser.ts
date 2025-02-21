import { HeadingType } from '@/app/types';

function groupHeadingsByLevel(headings: HeadingType[]): HeadingType[] {
  const result: HeadingType[] = [];
  const stack: HeadingType[] = [];

  headings.forEach((heading) => {
    while (stack.length && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    const node: HeadingType = { ...heading, children: [] };

    if (stack.length) {
      stack[stack.length - 1].children.push(node);
    } else {
      result.push(node);
    }

    stack.push(node);
  });

  return result;
}

export function extractHeadingsFromMD({
  content,
  levels,
}: {
  content: string;
  levels?: number[];
}): HeadingType[] {
  const headings: HeadingType[] = [];
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const idCountMap: Record<string, number> = {};

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];

    if (levels && !levels.includes(level)) {
      continue;
    }

    let id = text.toLowerCase().replace(/\s+/g, '-');
    id = id.replace(/[^\w\-]/g, '');

    if (!idCountMap[id]) {
      idCountMap[id] = 1;
    }

    headings.push({ level, text, id, children: [] });
  }

  const groupedHeadings = groupHeadingsByLevel(headings);
  return groupedHeadings;
}
