import { useRouter } from 'next/router'
import Head from 'next/head'

const topics: Record<string, {title: string, description: string}> = {
  'Agentic-AI': {
    title: 'Agentic AI Evolution',
    description: 'Agentic AI refers to systems that not only generate content but also take goal-driven actions autonomously. These agents, powered by models like GPT and multi-modal interfaces, can plan, adapt, and interact across complex environments — shaping the next era of human-computer collaboration.'
  },
  'Generative-AI': {
    title: 'Generative AI Revolution',
    description: 'Generative AI refers to models that can create entirely new content—from images and text to music and code. These models, such as GPT and diffusion-based systems, are transforming creative industries and redefining productivity in tech and business.'
  },
  'Quantum-Breakthroughs': {
    title: 'Quantum Breakthroughs',
    description: 'Quantum computing represents a shift from classical processing to qubits, enabling exponentially faster computations for certain problems. This revolutionizes cryptography, optimization, and materials science.'
  },
  'SaaS-Scaling': {
    title: 'SaaS Scaling Strategies',
    description: 'Scaling a SaaS business requires robust infrastructure, intelligent automation, and relentless focus on user retention. Successful SaaS products iterate quickly, personalize experiences, and expand globally without compromising performance.'
  },
  'Secure-AI': {
    title: 'Secure AI and Cybersecurity',
    description: 'As AI evolves, its role in cybersecurity grows. Secure AI integrates models designed to detect threats, predict breaches, and respond faster than traditional systems while introducing new surfaces that must be protected.'
  },
  'What-Is-Codex': {
    title: 'What is OpenAI Codex ?',
    description: 'Codex is an advanced AI system by OpenAI, powering tools like GitHub Copilot. Trained on billions of lines of code, it interprets natural language prompts and translates them into working code across many languages.'
  }
}

export default function TopicPage() {
  const router = useRouter()
  const { slug } = router.query
  const topic = typeof slug === 'string' ? topics[slug] : undefined

  if (!topic) {
    return <p>Topic not found.</p>
  }

  return (
    <>
      <Head>
        <title>{topic.title} - TechInviting</title>
      </Head>
      <article className="topic-page">
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </article>
    </>
  )
}
