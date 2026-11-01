*Working capability draft. “Bounded AI” is the confirmed capability name; this document is not yet a finalized canonical definition.*

# Purpose

**Definition:** Bounded AI is the organizational capability to reduce drift in AI tasks, AI agents and coordinated workflows by establishing and maintaining explicit boundaries for their inputs, reasoning responsibilities, execution flow, outputs and resource use.

Its primary objective is to keep work aligned with its intended purpose as it progresses. Here, drift means an unintended departure from the agreed scope, context, responsibilities, result requirements or permitted progression. This concerns drift in reasoning and execution, rather than statistical data or model drift.

For enterprises, this means retaining control of the intended contribution as reasoning and execution pass between activities, systems and teams. Preparation, validation, controlled progression, observability and resource planning support that ability. The aim is useful judgment within defined conditions, not predetermined answers or autonomy for its own sake.

# Enterprise need and consequences

Enterprises introduce AI tasks and agents into processes that already carry business purposes, operating requirements and dependencies. A useful demonstration is not enough when people or subsequent activities rely on the result. Business and process owners need confidence that the work being performed remains the work intended, including across handoffs and exceptions.

That alignment can weaken without an obvious execution failure. General domain knowledge does not establish an enterprise’s own definitions, relationships, rules, exceptions or current operating state. If a task or agent substitutes general assumptions for the context and reasoning conditions required by its responsibility, it may return a plausible but unsuitable result. The boundary must make these conditions explicit so general plausibility is not substituted for suitability to the assigned enterprise responsibility.

A task may also change a requirement, omit a qualification or introduce an unsupported assumption. When that output becomes another task’s input, the departure can propagate into reports, recommendations, operational records or actions. The enterprise concern is not simply a poor response: it is downstream work proceeding on an altered meaning or an unmet condition.

Process reliability is also affected when required validation is bypassed, unresolved findings are treated as completed work, or delegated discretion expands beyond its purpose. Repeated correction and unnecessary continuation can consume time and budget without producing an acceptable result. If operators cannot locate the departure, containment and recovery become harder and rework can spread across the process.

Organizations therefore need to preserve intended meaning and scope, control progression, identify exceptions and relate resource consumption to accepted work. These needs connect Bounded AI to process management, operational reliability, quality assurance and resource planning wherever AI tasks or agents participate. The capability contributes bounded execution within those enterprise responsibilities; it does not replace them.

# Situations in which the capability matters

Bounded AI becomes particularly relevant when:

- **An experimental use becomes an operational dependency.** Business and process owners need repeatable conditions for accepting work, handling exceptions and limiting continuation before relying on it in routine operations. The practical question is whether recurring results meet the intended business requirement before reports, operational records or subsequent actions depend on them.

- **Several tasks or agents contribute to one result.** Handoffs can lose qualifications, change scope or treat provisional findings as settled. The need is to preserve each contribution’s meaning and status while maintaining the purpose of the enclosing workflow. Before downstream work continues, does each contribution still meet its assigned requirement, with its qualifications and unresolved findings intact?

- **An agent gains discretion to act on enterprise systems.** Permitted actions, targets and effects need to remain connected to the assigned purpose so adaptive execution does not become uncontrolled scope expansion. Which actions remain within the delegated responsibility, and when would the next step require restriction or review?

- **Work repeatedly fails, changes or exceeds its planned effort.** Operators need to distinguish input gaps, reasoning failures, invalid transitions and exhausted resource allowances so they can determine whether to correct, restrict, pause or reassess the work. Would further execution still serve the intended business contribution within the applicable time, token and cost limits?

# Application across tasks, agents and workflows

Bounded AI applies to individual AI tasks, AI agents and coordinated workflows. Its application depends on where discretion and control reside:

- **AI tasks:** defined reasoning responsibilities with specified inputs and result expectations.

- **AI agents:** delegated discretion to choose or adapt subsequent actions toward an objective.

- **Multi-agent systems:** multiple agents coordinating their delegated responsibilities.

- **Bounded agentic workflows:** coordinated processes that permit agent discretion within explicit responsibilities, handoffs, progression rules and limits. In multi-agent workflows, these boundaries cover each agent and the enclosing process.

**Clarification:** Sophisticated reasoning or multiple model calls do not alone make a process agentic or multi-agent. A workflow of predefined AI tasks can apply the same boundary discipline without being relabelled as a system of agents.

Specialized tasks and agents apply domain- or responsibility-specific knowledge and reasoning methods. Specialization does not determine autonomy: a specialized agent may choose subsequent actions within its assigned bounds, while a specialized task may return its result to a controlled workflow. Neither specialization nor multiple agents removes the need for explicit boundaries and validation.

# What the capability establishes

## Prepared inputs and explicit result expectations

Business requirements need to remain recognizable when translated into a task or delegated to an agent. Input and output contracts make the responsibility explicit: what information is required, what contribution is permitted, what the result must contain and mean, and the conditions for its use. This helps prevent a technically complete response from being mistaken for fulfillment of the business requirement.

The organization can prepare and validate the permitted data, enterprise context, definitions and constraints needed for each responsibility. The boundary identifies what may be used and inferred, and when missing or conflicting context requires clarification, a limited result or stopping rather than substitution with unsupported assumptions. Bounded AI governs the use of that context in the work; it does not assume responsibility for building or preserving the enterprise’s knowledge.

The capability includes assessing the complete request as well as its prepared inputs. This establishes whether instructions, context, expected output, available actions and resource allowance are consistent with the assigned responsibility; suitable inputs alone do not establish that consistency.

## Bounded reasoning and reusable guidance

Delegation should provide the discretion needed for a responsibility without allowing that responsibility to be silently redefined. A task or agent may interpret, compare, generate or recommend within its assigned scope. Permitted inference, proposed alternatives and established facts remain distinguishable. Where actions are delegated, the permitted actions and effects are explicit.

Reusable reasoning guidance, such as a skill, makes the applicable methods, business rules and permitted interpretations explicit. It remains distinguishable from the particular request or prompt carrying the current task and context. Input and output contracts remain explicit rather than being silently changed through instruction revisions.

This separation supports reuse and improvement: reasoning guidance can be refined while preserving the agreed responsibility and interfaces. A material change to those agreements requires an explicit revision and renewed validation.

## Controlled flow and validation

Connected work requires more than individually plausible outputs. The organization can define and maintain permitted progression across dependencies, handoffs, branches, correction paths and stopping conditions, preserving the requirements of the overall process. It can distinguish choices governed by established rules from those delegated to an agent.

Validation must take place where it can prevent unsuitable work from continuing. Checking output structure and completeness is distinct from assessing meaning, source support or fitness for the intended use. Where work depends on enterprise-specific definitions or rules, review considers whether the result respects them rather than merely appearing generally plausible. The checks required depend on the responsibility, not on whether a component is labelled a task or an agent.

Generated results, validation findings and accepted results remain distinguishable. Acceptance and continuation may be automated under explicit rules, delegated within defined authority, or subject to human review. A reviewer’s judgment does not create authority beyond what was assigned.

Missing prerequisites, failed checks and unresolved findings lead to a defined disposition, such as correction, restricted continuation, review or stopping. Corrections remain within the applicable scope and limits; they do not justify bypassing or silently weakening applicable checks. Handoffs preserve the status and limitations of the result.

## Observability of execution

The organization can identify what ran, which responsibility it performed, the conditions that applied, its current state, its validation outcome and what happened next. This visibility connects individual operations to the task or agent and to the overall workflow.

This visibility helps operators and process owners identify where work departed from its intended path and where intervention or recovery is needed. It distinguishes an incomplete run from an accepted result and supports investigation of repeated failures, rather than restarting the process without understanding which responsibility or handoff failed.

The capability includes relating execution outcomes to their inputs, instructions and progression. Activity logs alone do not establish correct reasoning, and observability does not imply access to every internal model reasoning step.

## Token, budget and cost planning

Process owners need to assess whether repeated or delegated work remains proportionate to its intended contribution. Resource planning covers expected token usage, execution time and cost for individual tasks or agents and the complete workflow, including validation and bounded correction attempts. This supports capacity and spending decisions without treating every additional call as useful progress.

The organization can use estimates to plan and admit work, compare actual usage against those estimates, and maintain cumulative budgets across retries and delegation. It can determine when work should pause, stop or require additional allowance.

Estimates remain distinguishable from measured consumption and confirmed charges. Where usage is unavailable or cost cannot be known precisely in advance, that uncertainty remains visible rather than being presented as a fixed execution cost.

# Reuse and sustained alignment

The same boundary discipline can be reused across different processes without requiring the same model, provider, programming language, orchestration framework or deployment environment.

Reuse does not mean identical inputs, reasoning guidance, validation or budgets. Each responsibility retains its own requirements while using a consistent approach to preparation, execution, result handling and observation.

Responsibility must be assigned for maintaining boundaries and acceptance conditions, authorizing material revisions and determining exception dispositions. Changes to contracts, instructions, context, delegated discretion or workflow progression are assessed for their effect on alignment. The conditions used for a run remain identifiable so results can be interpreted and compared without assuming that different versions performed the same work.

# Outcomes and evidence

Bounded AI aims to preserve the intended business contribution across reasoning and execution, reduce propagation of unsuitable results, and make exceptions and resource consumption manageable. For process owners and operators, this can support less avoidable rework, more repeatable delivery, clearer recovery decisions and better-informed cost planning.

These outcomes support dependable adoption of AI tasks and agents in enterprise processes. They do not establish that every process should become agentic, or that more autonomy, more agents or more validation stages necessarily improve the outcome.

Evidence of the capability includes whether unsuitable requests are caught before execution, required checks govern continuation, deviations receive the defined response, and cumulative usage remains visible against the applicable limits. Demonstrating conformance to boundaries is distinct from demonstrating a reduction in drift. A reduction claim requires a stated baseline or justified comparator and comparable, representative runs assessed against explicit expectations, not merely the presence of contracts or successful completion.

The capability does not guarantee zero drift, factual correctness or predictable cost in every run. Its effectiveness depends on the quality of the boundaries, validation and operating controls. It is a reusable organizational capability, not a prescribed technical architecture or a general framework for every aspect of AI governance.

# Supporting reference

The [ShiftBy Market Research report](https://app.notion.com/p/3c117667df54809e9158d1d2f5406b43) informs the enterprise relevance of the capability described here, including context suitability, constrained delegation, workflow design, observability and validation. It is not the origin or authority of the capability definition and does not establish the effectiveness of a particular implementation.

The report's underlying external sources have not been independently revalidated for this draft.
