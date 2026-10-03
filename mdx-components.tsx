import type { MDXComponents } from 'mdx/types';
import Callout from '@/components/Callout';
import CopyButton from '@/components/CopyButton';
import StepCard from '@/components/StepCard';
import CodeBlock from '@/components/CodeBlock';
import HowItWorksDiagram from '@/components/HowItWorksDiagram';
import TroubleshootingAccordion from '@/components/TroubleshootingAccordion';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    CopyButton,
    StepCard,
    CodeBlock,
    HowItWorksDiagram,
    TroubleshootingAccordion,
  };
}
