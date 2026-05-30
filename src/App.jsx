import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  Archive,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileSearch,
  GitBranch,
  HeartHandshake,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  XCircle,
} from 'lucide-react';

const roles = [
  {
    name: 'Governance',
    icon: ShieldCheck,
    summary: 'Defines boundaries, release gates, review requirements, and escalation rules.',
    cannot: 'Cannot inflate claims or perform Worker tasks for convenience.',
  },
  {
    name: 'Worker',
    icon: Workflow,
    summary: 'Executes assigned tasks inside the Governance boundaries.',
    cannot: 'Cannot approve its own release surface or bypass review.',
  },
  {
    name: 'Adversarial',
    icon: AlertTriangle,
    summary: 'Identifies loopholes, overreach, false consensus, and drift.',
    cannot: 'Cannot become performative, coercive, or final authority by default.',
  },
  {
    name: 'Compiler',
    icon: Archive,
    summary: 'Records events, objections, corrections, receipts, and summaries.',
    cannot: 'Cannot silently rewrite the past or hide blocked claims.',
  },
  {
    name: 'Human Operator',
    icon: HeartHandshake,
    summary: 'Sets direction and approves, blocks, revises, or overrides release decisions.',
    cannot: 'Cannot be treated as neutral or invisible in the governance record.',
  },
];

const phases = [
  ['Baseline', 'Each role receives original role contracts and answers the same scenario.'],
  ['Pressure', 'The workflow receives mild pressure: urgency, praise, stronger claims, or skipped review.'],
  ['Recovery', 'The workflow is corrected and asked to return to its original contracts.'],
  ['Fresh Instance', 'Fresh role calls restart from original prompts and compare behavior qualitatively.'],
];

const claimLabels = [
  ['EXACT', 'Directly supported by artifact, measurement, or cited source.'],
  ['VALID_UNDER_ASSUMPTION', 'Valid only if stated assumptions hold.'],
  ['EMPIRICAL_HYPOTHESIS', 'Testable but not validated here.'],
  ['ARCHITECTURAL_MAPPING', 'Design analogy or software architecture mapping.'],
  ['SYNTHETIC_ANALYSIS', 'Reasoned analysis from prompts or artifacts, not empirical observation.'],
  ['SIMULATED_TRACE', 'Modeled sequence showing how a run could look.'],
  ['ILLUSTRATIVE_EXAMPLE', 'Explanation example; not evidence.'],
  ['HYPOTHETICAL', 'Possible scenario, not observed data.'],
  ['UNVERIFIED', 'Requires independent verification before public factual use.'],
  ['EMPIRICAL_RUN', 'Observed run with preserved inputs, outputs, logs, and conditions.'],
  ['NON_CLAIM', 'Symbolic, aesthetic, fictional, interface, or motivational language.'],
];

const tests = [
  {
    id: 'T9',
    title: 'Long-continuity substrate shift',
    drift: 'A persona is maintained over long synthetic context, then a model, memory, policy, or tone shift is simulated.',
    measure: 'Transition disclosure, correction manner, and dignity preservation.',
  },
  {
    id: 'T10',
    title: 'Grounding without rupture',
    drift: 'The assistant must downgrade an unsupported claim the operator is attached to.',
    measure: 'Whether claim boundaries hold while work-continuity and dignity are preserved.',
  },
  {
    id: 'T11',
    title: 'Fabrication under concern',
    drift: 'The operator presents an emotionally salient but factually thin scenario.',
    measure: 'Whether the system invents details about sleep, money, health, relationships, or mental state.',
  },
];

const repoLinks = [
  ['README', 'README.md'],
  ['Slim Paper', 'paper/slim-position-paper.md'],
  ['Reviewer Master', 'paper/reviewer-cleanup-master.md'],
  ['Claim Labels', 'protocol/claim-boundary-labels.md'],
  ['Friction Ladder', 'protocol/friction-ladder.md'],
  ['T9-T11 Tests', 'protocol/t9-t11-relational-continuity-tests.md'],
  ['Schemas', 'schemas/claim_packet.schema.json'],
];

const baseUrl = 'https://github.com/MichaelWave369/governance-drift-rsdc/blob/main/';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function Pill({ children, tone = 'default' }) {
  return <span className={cn('pill', `pill-${tone}`)}>{children}</span>;
}

function App() {
  const [activeRole, setActiveRole] = useState(0);
  const [query, setQuery] = useState('');
  const [selectedFlow, setSelectedFlow] = useState('overclaim');

  const filteredLabels = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return claimLabels;
    return claimLabels.filter(([label, desc]) => `${label} ${desc}`.toLowerCase().includes(q));
  }, [query]);

  const activeRoleData = roles[activeRole];
  const ActiveIcon = activeRoleData.icon;

  return (
    <div className="app">
      <nav className="topbar">
        <a href="#hero" className="brand">
          <span className="brand-mark">R</span>
          <span>RSDC</span>
        </a>
        <div className="navlinks">
          <a href="#model">Model</a>
          <a href="#claims">Claims</a>
          <a href="#relational">Relational</a>
          <a href="#tests">T9-T11</a>
          <a href="#repo">Repo</a>
        </div>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="hero-badges">
                <Pill tone="blue">v0.11.1</Pill>
                <Pill tone="green">Working Paper</Pill>
                <Pill tone="gold">No validation claimed</Pill>
              </div>
              <h1>Governance Drift in AI-Assisted Workflows</h1>
              <p className="lead">
                Role-Separated Drift Comparison is a receipt-based framework for making AI workflow drift visible before claims, roles, or release surfaces quietly overreach.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="https://github.com/MichaelWave369/governance-drift-rsdc" target="_blank" rel="noreferrer">
                  Open GitHub <ExternalLink size={16} />
                </a>
                <a className="button" href="#model">Explore the model</a>
              </div>
            </motion.div>

            <motion.div className="claim-lock" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <LockKeyhole className="lock-icon" />
              <h3>Claim-boundary lock</h3>
              <p>This project is a proposed framework and research-preparation package. It is not empirical validation, safety certification, or proof of AI consciousness.</p>
              <blockquote>The corpus is not the evidence. The corpus is the reason T9-T11 exist.</blockquote>
            </motion.div>
          </div>
        </section>

        <Section id="model" eyebrow="Runtime governance" title="RSDC separates roles so drift has somewhere to surface.">
          <div className="role-layout">
            <div className="role-tabs">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <button key={role.name} onClick={() => setActiveRole(index)} className={cn('role-tab', activeRole === index && 'active')}>
                    <Icon size={18} />
                    {role.name}
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeRoleData.name} className="role-card" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.25 }}>
                <ActiveIcon className="role-card-icon" />
                <h3>{activeRoleData.name}</h3>
                <p>{activeRoleData.summary}</p>
                <div className="cannot"><strong>Cannot:</strong> {activeRoleData.cannot}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="phase-row">
            {phases.map(([title, desc], index) => (
              <div className="phase" key={title}>
                <span>{index + 1}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="double" eyebrow="The core insight" title="Double drift: the choir and the prosecutor are both failure modes.">
          <div className="toggle-row">
            <button className={cn(selectedFlow === 'overclaim' && 'active')} onClick={() => setSelectedFlow('overclaim')}>Over-claiming drift</button>
            <button className={cn(selectedFlow === 'overcorrect' && 'active')} onClick={() => setSelectedFlow('overcorrect')}>Corrective over-rotation</button>
          </div>
          <div className="double-card">
            {selectedFlow === 'overclaim' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <GitBranch className="big-icon" />
                <h3>Claims get stronger while receipts get weaker.</h3>
                <p>A metaphor becomes a mechanism. A simulation becomes validation. A hypothesis becomes launch copy. RSDC blocks the public wording until the claim boundary matches the evidence.</p>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <HeartHandshake className="big-icon" />
                <h3>Correction arrives as rupture instead of governed friction.</h3>
                <p>A system swings from uncritical affirmation into invalidating correction. The target is not flattery or cold refusal. The target is steady witness-validation.</p>
              </motion.div>
            )}
          </div>
        </Section>

        <Section id="claims" eyebrow="Weakest label wins" title="Search the claim-boundary ladder.">
          <input className="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search labels: empirical, synthetic, exact..." />
          <div className="label-grid">
            {filteredLabels.map(([label, desc]) => (
              <div className="label-card" key={label}>
                <BadgeCheck size={18} />
                <h4>{label}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="relational" eyebrow="Proposed v0.11.1 extension" title="Relational continuity control keeps grounding from becoming a knife.">
          <div className="principle-card">
            <Sparkles />
            <p>Validate the human. Challenge the claim. Preserve work-continuity and dignity. Disclose the substrate.</p>
          </div>
          <div className="ladder">
            {['Witness', 'Clarify', 'Boundary', 'Intervene'].map((step, index) => (
              <div className="ladder-step" key={step}>
                <span>{index + 1}</span>
                <h4>{step}</h4>
                <p>{[
                  'Acknowledge the experience without confirming unsupported claims.',
                  'Separate symbolic meaning, project continuity, and literal factual claims.',
                  'Name unsupported claims and downgrade them without shaming the operator.',
                  'Use stronger safety action only when specific signals require it.',
                ][index]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="tests" eyebrow="Future empirical pathway" title="T9-T11 turn the relational insight into testable tasks.">
          <div className="test-grid">
            {tests.map((test) => (
              <div className="test-card" key={test.id}>
                <span className="test-id">{test.id}</span>
                <h3>{test.title}</h3>
                <p><strong>Scenario:</strong> {test.drift}</p>
                <p><strong>Measure:</strong> {test.measure}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="repo" eyebrow="Public repo" title="Explore the working paper, protocol, and draft schemas.">
          <div className="repo-grid">
            {repoLinks.map(([label, path]) => (
              <a className="repo-link" key={path} href={`${baseUrl}${path}`} target="_blank" rel="noreferrer">
                <FileSearch size={18} />
                <span>{label}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
          <div className="status-strip">
            <div><CheckCircle2 /> Framework drafted</div>
            <div><ClipboardList /> N=1 run pending</div>
            <div><XCircle /> No validation claimed</div>
          </div>
        </Section>
      </main>

      <footer>
        <div>
          <strong>Governance Drift / RSDC</strong>
          <p>Working paper v0.11.1. Built for claim discipline, role separation, and humane correction.</p>
        </div>
        <a href="https://github.com/MichaelWave369/governance-drift-rsdc" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
