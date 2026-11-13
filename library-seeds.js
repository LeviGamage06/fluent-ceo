const PRACTICE_SITUATIONS = [
 {
  "title": "Choosing one strategic priority",
  "topic": "Strategy",
  "problem": "Our teams are working on six projects, and none is receiving enough attention.",
  "evidence": "The project review shows that three projects compete for the same specialists and customer problem.",
  "proposal": "Choose one customer outcome for the next month and pause work that does not support it.",
  "question": "Which project would we stop if we had to protect the most valuable outcome?",
  "guardrail": "Do not call every project essential or quietly ask the same team to do all six."
 },
 {
  "title": "Entering a new region",
  "topic": "Strategy",
  "problem": "We have enquiries from a new region but no proof that we can serve it profitably.",
  "evidence": "The enquiries describe strong interest, while delivery costs and local support needs remain unknown.",
  "proposal": "Run a small paid pilot before creating a permanent regional team.",
  "question": "What evidence would justify expansion, and what would make us stop?",
  "guardrail": "Interest is not an order, and a pilot is not a promise of a full launch."
 },
 {
  "title": "Closing an unprofitable product",
  "topic": "Strategy",
  "problem": "A familiar product uses resources that could support better customer outcomes.",
  "evidence": "The product has loyal users, but support effort has grown faster than the value it creates.",
  "proposal": "Compare repair, a limited maintenance plan, and a carefully managed closure.",
  "question": "How will we protect customers who depend on the product while changing our commitment?",
  "guardrail": "Do not abandon existing obligations or present a difficult closure as a simple victory."
 },
 {
  "title": "Explaining a change of direction",
  "topic": "Strategy",
  "problem": "Our old plan no longer matches what customers are asking us to solve.",
  "evidence": "Recent interviews show that customers value a different outcome from the one our roadmap assumed.",
  "proposal": "Explain what we learned, what we will change, and which commitments remain firm.",
  "question": "Which part of the original reasoning changed, and what remains uncertain?",
  "guardrail": "A change in direction should follow evidence rather than a new slogan."
 },
 {
  "title": "Choosing between two investments",
  "topic": "Strategy",
  "problem": "Two teams have proposed useful investments, but we can fund only one this quarter.",
  "evidence": "One proposal has clearer short-term savings, while the other could improve long-term customer retention.",
  "proposal": "Compare both proposals against the same measures and document the cost of waiting.",
  "question": "What are we giving up by choosing one option now?",
  "guardrail": "Do not hide the weaker evidence behind a confident presentation."
 },
 {
  "title": "Defining a customer promise",
  "topic": "Strategy",
  "problem": "Different teams describe our service in ways that create different expectations.",
  "evidence": "Customers report that the sales promise does not always match the delivery team's understanding.",
  "proposal": "Agree on a promise we can explain simply and deliver consistently.",
  "question": "Which claim can every team support with evidence today?",
  "guardrail": "Do not promise an outcome that depends on conditions we have not explained."
 },
 {
  "title": "Understanding a lost customer",
  "topic": "Customers",
  "problem": "A long-standing customer has left without giving the team a full explanation.",
  "evidence": "Their final message mentions slow responses, while our records show that several requests changed owners.",
  "proposal": "Ask for a learning conversation and trace the handoffs before proposing a fix.",
  "question": "What did the customer experience that our internal measures missed?",
  "guardrail": "Do not pressure the customer to return before understanding why trust was lost."
 },
 {
  "title": "Responding to a complaint",
  "topic": "Customers",
  "problem": "A customer feels ignored after receiving several incomplete answers.",
  "evidence": "The message history shows replies were sent, but none answered the customer's main question.",
  "proposal": "Acknowledge the unresolved issue, name one owner, and agree on the next useful update.",
  "question": "What does a complete answer look like from the customer's point of view?",
  "guardrail": "Sending another polite reply is not the same as resolving the problem."
 },
 {
  "title": "Testing an unfamiliar customer need",
  "topic": "Customers",
  "problem": "A few vocal customers want a feature that may not help the wider customer base.",
  "evidence": "The requests contain clear examples, but we have not checked how common the underlying problem is.",
  "proposal": "Test the problem with a varied group before committing to a feature.",
  "question": "Are customers asking for the same solution, or describing different problems?",
  "guardrail": "Do not treat the loudest feedback as a representative sample."
 },
 {
  "title": "Repairing an onboarding process",
  "topic": "Customers",
  "problem": "New customers struggle to reach their first useful result.",
  "evidence": "The first-week support questions repeat the same setup issues, even though training material is available.",
  "proposal": "Observe a new customer using the service and simplify the first essential steps.",
  "question": "Where does the customer lose confidence before receiving value?",
  "guardrail": "Adding more instructions may increase the burden rather than remove it."
 },
 {
  "title": "Setting a realistic service promise",
  "topic": "Customers",
  "problem": "The team is under pressure to promise immediate replies to every request.",
  "evidence": "Urgent and routine requests currently share the same queue, making response times unpredictable.",
  "proposal": "Define urgency clearly and publish service commitments that match our actual capacity.",
  "question": "What response can we reliably provide for each kind of request?",
  "guardrail": "Do not confuse an acknowledgement with a complete solution."
 },
 {
  "title": "Renewing an important account",
  "topic": "Customers",
  "problem": "A major customer is deciding whether to renew our service.",
  "evidence": "They use the service regularly but cannot clearly connect it to their business outcomes.",
  "proposal": "Review the value delivered, acknowledge the gaps, and agree on a measurable next stage.",
  "question": "What evidence would make renewal a sensible decision for the customer?",
  "guardrail": "Do not use the relationship to avoid discussing disappointing results."
 },
 {
  "title": "Fixing a repeated delivery delay",
  "topic": "Operations",
  "problem": "Projects keep slipping even when each team reports that its own work is on schedule.",
  "evidence": "The delivery map shows that work waits between teams longer than it spends being completed.",
  "proposal": "Assign ownership to the handoffs and measure the whole delivery time.",
  "question": "Who is responsible when a task leaves one team but has not reached the next?",
  "guardrail": "Improving one team's speed may not improve the customer's actual waiting time."
 },
 {
  "title": "Reducing meeting overload",
  "topic": "Operations",
  "problem": "The team has too little focused work time because updates fill the calendar.",
  "evidence": "A calendar review shows several meetings repeat information without producing decisions.",
  "proposal": "Replace routine updates with short notes and protect meetings that require discussion.",
  "question": "What decision or shared understanding would be lost if this meeting disappeared?",
  "guardrail": "Do not remove useful conversations simply to reduce a meeting count."
 },
 {
  "title": "Choosing a supplier",
  "topic": "Operations",
  "problem": "We need a supplier whose reliability matters as much as its price.",
  "evidence": "The lowest quotation excludes some support, while another supplier has stronger delivery evidence.",
  "proposal": "Compare total cost, reliability, support, and a practical fallback plan.",
  "question": "Which failure would be hardest for our customers to absorb?",
  "guardrail": "A low initial price does not prove low total cost."
 },
 {
  "title": "Introducing an internal tool",
  "topic": "Operations",
  "problem": "A new tool could help the team, but earlier tools were introduced and then abandoned.",
  "evidence": "Employees say the tools added duplicate entry and did not replace the old process.",
  "proposal": "Test one workflow, remove a competing step, and let the users evaluate the change.",
  "question": "What work will disappear if the new tool succeeds?",
  "guardrail": "Buying a tool is not the same as improving a process."
 },
 {
  "title": "Improving quality before release",
  "topic": "Operations",
  "problem": "A release date is approaching while important quality checks remain open.",
  "evidence": "Testing has identified a problem that could prevent some customers from finishing a key task.",
  "proposal": "Set clear release conditions and compare a limited launch with a short delay.",
  "question": "What must be true before we can responsibly ask customers to depend on this release?",
  "guardrail": "A deadline does not remove the responsibility to communicate known limitations."
 },
 {
  "title": "Removing an approval bottleneck",
  "topic": "Operations",
  "problem": "Routine decisions wait for the founder even when team leads have the relevant knowledge.",
  "evidence": "The decision log shows delays on low-risk requests and unclear authority for exceptions.",
  "proposal": "Delegate defined decisions and keep escalation rules for serious risks.",
  "question": "Which decisions can the team make safely without waiting for me?",
  "guardrail": "Delegation needs boundaries and support rather than a sudden withdrawal of leadership."
 },
 {
  "title": "Explaining cash priorities",
  "topic": "Finance",
  "problem": "The business needs to protect cash while keeping important customer commitments.",
  "evidence": "Expected receipts arrive later than planned, while several nonessential purchases are still scheduled.",
  "proposal": "Review payment timing and pause discretionary spending before making broader changes.",
  "question": "Which cash commitments are essential, and which can be changed without breaking trust?",
  "guardrail": "Do not present uncertain receipts as money already available."
 },
 {
  "title": "Discussing a price increase",
  "topic": "Finance",
  "problem": "Our service costs have risen, and the current price no longer supports the promised level of support.",
  "evidence": "Cost records show a sustained increase rather than a short temporary spike.",
  "proposal": "Explain the reason, provide notice, and offer a clear choice of service scope.",
  "question": "How will customers understand the value and the alternatives available to them?",
  "guardrail": "A price increase should not be hidden in vague language or surprise invoices."
 },
 {
  "title": "Reviewing a missed forecast",
  "topic": "Finance",
  "problem": "Actual results are below the forecast shared with the leadership team.",
  "evidence": "The forecast assumed faster customer decisions and did not include a realistic delay range.",
  "proposal": "Explain the assumptions, show the variance, and improve the next forecasting process.",
  "question": "Which assumption failed, and how will the new forecast expose uncertainty?",
  "guardrail": "Do not rewrite the old prediction to make it appear more accurate."
 },
 {
  "title": "Allocating a smaller budget",
  "topic": "Finance",
  "problem": "Each department has a reasonable plan, but the combined requests exceed available funds.",
  "evidence": "The proposals use different definitions of value, making a fair comparison difficult.",
  "proposal": "Agree on shared criteria and protect the work most closely connected to customer outcomes.",
  "question": "What would be the practical consequence of delaying each proposal?",
  "guardrail": "Do not reward the strongest presentation instead of the strongest evidence."
 },
 {
  "title": "Explaining business measures",
  "topic": "Finance",
  "problem": "The team sees a dashboard of numbers without understanding which decisions those numbers should guide.",
  "evidence": "Different departments optimise different measures and sometimes work against one another.",
  "proposal": "Choose a small set of shared measures and explain what each can and cannot show.",
  "question": "Which action should change when this measure changes?",
  "guardrail": "A measure is a signal, not a complete description of the business."
 },
 {
  "title": "Responding to a funding rejection",
  "topic": "Finance",
  "problem": "A potential investor has declined to proceed after reviewing our proposal.",
  "evidence": "Their feedback questions the evidence for repeat demand and the resources required to deliver.",
  "proposal": "Ask for specific feedback, revise the assumptions, and plan the next evidence-gathering step.",
  "question": "What can we learn from the decision without treating every opinion as fact?",
  "guardrail": "Do not promise a future funding outcome that no one has agreed to."
 },
 {
  "title": "Giving feedback on missed updates",
  "topic": "People",
  "problem": "A team lead regularly sends updates after decisions have already been made.",
  "evidence": "Two recent updates omitted open risks because the lead wanted to provide complete answers.",
  "proposal": "Describe the observed pattern, explain its impact, and agree on earlier risk reporting.",
  "question": "What support would make a timely and honest update easier?",
  "guardrail": "Feedback should focus on observed behaviour rather than a judgement about character."
 },
 {
  "title": "Delegating a visible project",
  "topic": "People",
  "problem": "A capable manager is ready for responsibility, but the founder keeps intervening in small choices.",
  "evidence": "The manager owns the deadline on paper while approvals still return to the founder.",
  "proposal": "Agree on the outcome, authority, support, and moments for review.",
  "question": "Which decisions truly belong to the manager after this conversation?",
  "guardrail": "Do not delegate accountability while keeping every decision."
 },
 {
  "title": "Resolving disagreement between teams",
  "topic": "People",
  "problem": "Two teams disagree about priorities and now interpret each other's actions negatively.",
  "evidence": "Both teams are pursuing valid goals, but the shared dependency and decision owner are unclear.",
  "proposal": "Restate the shared outcome and compare the trade-offs without assigning blame.",
  "question": "What would each team need to understand about the other's constraint?",
  "guardrail": "A quick compromise may leave the underlying conflict unresolved."
 },
 {
  "title": "Welcoming a new leader",
  "topic": "People",
  "problem": "A new department leader needs authority without dismissing the work already done.",
  "evidence": "Employees are uncertain whether existing commitments will continue and how decisions will change.",
  "proposal": "Explain the leader's role, recognise the team's experience, and establish a listening period.",
  "question": "What should the new leader understand before making their first major change?",
  "guardrail": "Do not promise continuity on matters that still need review."
 },
 {
  "title": "Addressing an unsustainable workload",
  "topic": "People",
  "problem": "The team is delivering important work through a pattern of late evenings that cannot continue.",
  "evidence": "Employees report fatigue, while the work list still treats every request as equally urgent.",
  "proposal": "Reduce competing priorities and agree on realistic capacity before asking for more effort.",
  "question": "Which commitment will we change to make the workload genuinely sustainable?",
  "guardrail": "A wellbeing message is not useful if the workload remains unchanged."
 },
 {
  "title": "Explaining a promotion decision",
  "topic": "People",
  "problem": "A promotion decision has left some colleagues confused about what leadership requires.",
  "evidence": "The role needs coaching and coordination, but the informal discussion focused only on individual results.",
  "proposal": "Explain the role criteria and offer useful development feedback without discussing private assessments.",
  "question": "How can we make future expectations clear before the next selection decision?",
  "guardrail": "Do not disclose another employee's confidential feedback."
 },
 {
  "title": "Negotiating a lower fee",
  "topic": "Negotiation",
  "problem": "A customer wants a lower fee while keeping the same delivery promise.",
  "evidence": "The customer's budget is fixed, but some requested features are less urgent than the core outcome.",
  "proposal": "Offer a phased scope in exchange for a lower initial fee.",
  "question": "Which part of the outcome must remain protected if the price changes?",
  "guardrail": "A discount should not silently remove the support needed for success."
 },
 {
  "title": "Negotiating a delivery date",
  "topic": "Negotiation",
  "problem": "A customer requests an earlier delivery date that would disrupt existing commitments.",
  "evidence": "Some work can be reordered, but the quality review cannot be completed responsibly in the shortened period.",
  "proposal": "Discuss a smaller first delivery and keep the necessary checks for the full release.",
  "question": "What useful result could arrive earlier without pretending the whole project is complete?",
  "guardrail": "Do not trade a hidden quality risk for a more attractive date."
 },
 {
  "title": "Renegotiating a partnership role",
  "topic": "Negotiation",
  "problem": "A partnership has grown, but the division of responsibility still reflects the original small pilot.",
  "evidence": "Both partners now handle customer issues, creating duplicated work and conflicting promises.",
  "proposal": "Agree on distinct responsibilities and one process for shared decisions.",
  "question": "Which commitments can each partner make without checking with the other?",
  "guardrail": "A friendly relationship does not replace a clear operating agreement."
 },
 {
  "title": "Responding to an exclusivity request",
  "topic": "Negotiation",
  "problem": "A potential partner wants exclusive access before committing enough work to support the arrangement.",
  "evidence": "The opportunity is attractive, but exclusivity could limit other relationships for an uncertain return.",
  "proposal": "Explore a limited term, a defined scope, and clear performance conditions.",
  "question": "What commitment would make exclusivity a fair exchange for both sides?",
  "guardrail": "Do not give away a broad future option for a vague promise."
 },
 {
  "title": "Agreeing on a pilot contract",
  "topic": "Negotiation",
  "problem": "A new customer wants a pilot but expects the support of a full service contract.",
  "evidence": "Both sides want to learn, yet the purpose, time limit, and success measures are not written down.",
  "proposal": "Define the learning goal, support boundaries, review date, and decision after the pilot.",
  "question": "What exactly will each side decide when the pilot ends?",
  "guardrail": "A pilot should not become an indefinite unpaid commitment."
 },
 {
  "title": "Refusing a request respectfully",
  "topic": "Negotiation",
  "problem": "A valuable customer asks for work outside our expertise and available capacity.",
  "evidence": "Accepting the request would require us to reduce support for work already promised.",
  "proposal": "Explain the limit, offer a useful alternative, and protect the relationship with a clear reason.",
  "question": "How can we be helpful without pretending we can responsibly deliver this request?",
  "guardrail": "A respectful refusal is better than an unreliable agreement."
 },
 {
  "title": "Responding to a service interruption",
  "topic": "Trust",
  "problem": "A service interruption has affected customers who depend on a time-sensitive process.",
  "evidence": "The team has confirmed the impact but has not yet established the full cause.",
  "proposal": "State what is known, provide a temporary option, and commit to the next update time.",
  "question": "What can customers do now while we work on restoring the service?",
  "guardrail": "Do not announce a cause or recovery time before the evidence supports it."
 },
 {
  "title": "Correcting a public mistake",
  "topic": "Trust",
  "problem": "A public message contains an inaccurate statement about our service.",
  "evidence": "The error has been identified, and some customers may already have relied on it.",
  "proposal": "Correct the statement visibly, explain the practical impact, and contact affected customers.",
  "question": "Who might need a direct correction rather than a general public update?",
  "guardrail": "Do not quietly edit the message and assume the misunderstanding has disappeared."
 },
 {
  "title": "Explaining a delayed launch",
  "topic": "Trust",
  "problem": "A launch has been delayed after the team discovered a problem during final testing.",
  "evidence": "The customer-facing task works in most cases but fails under a condition we must address.",
  "proposal": "Acknowledge the delay and explain the specific release conditions without blaming an individual.",
  "question": "What do customers need to know to plan around the change?",
  "guardrail": "Do not use technical detail to avoid taking responsibility for the decision."
 },
 {
  "title": "Rebuilding trust after silence",
  "topic": "Trust",
  "problem": "Stakeholders have not received an update during a difficult period and now assume the worst.",
  "evidence": "The team waited for certainty, but unanswered questions have increased concern.",
  "proposal": "Acknowledge the communication gap and establish a predictable update routine.",
  "question": "What can we explain honestly now even if the full answer is not ready?",
  "guardrail": "Silence is not a neutral response when people are waiting for information."
 },
 {
  "title": "Discussing an unresolved risk",
  "topic": "Trust",
  "problem": "The team has identified a serious risk but disagrees on how likely it is to occur.",
  "evidence": "The evidence is incomplete, and the potential impact is large enough to require attention.",
  "proposal": "Explain the range of possible outcomes and agree on an immediate protective step.",
  "question": "What action is justified by the possible impact even before we know the exact probability?",
  "guardrail": "Do not confuse an uncertain probability with an unimportant risk."
 },
 {
  "title": "Learning from a project failure",
  "topic": "Trust",
  "problem": "A project has ended without the outcome the organisation expected.",
  "evidence": "Several assumptions changed during delivery, while concerns were raised too late to alter the plan.",
  "proposal": "Review decisions and incentives, document the lessons, and change one part of the operating process.",
  "question": "What would we do differently at the first warning sign next time?",
  "guardrail": "A learning review should not become either a blame exercise or an excuse to change nothing."
 },
 {
  "title": "Introducing the business to a partner",
  "topic": "Stakeholders",
  "problem": "A potential partner understands our product category but not the problem we solve.",
  "evidence": "The conversation is short, and a list of features would leave little time to learn about their work.",
  "proposal": "Give a brief customer-focused introduction and ask one useful question about their priorities.",
  "question": "Where might our work connect to a need the partner already understands?",
  "guardrail": "Do not assume that a polite response is evidence of a partnership opportunity."
 },
 {
  "title": "Reporting to the board",
  "topic": "Stakeholders",
  "problem": "The board needs a decision-focused update rather than a long account of team activity.",
  "evidence": "The current report includes many tasks but does not separate results, risks, and decisions needed.",
  "proposal": "Present the main outcome, explain the material uncertainty, and make a specific request.",
  "question": "Which decision should the board be able to make after reading this update?",
  "guardrail": "Do not bury an important risk near the end of a long presentation."
 },
 {
  "title": "Explaining a technical product simply",
  "topic": "Stakeholders",
  "problem": "A nontechnical audience needs to understand a product before deciding whether to explore it.",
  "evidence": "The current explanation focuses on components and uses terms the audience does not recognise.",
  "proposal": "Start with the customer's task and explain the outcome before describing how the product works.",
  "question": "What could the audience explain accurately to a colleague after hearing us?",
  "guardrail": "Simplifying an explanation should not remove an important limitation."
 },
 {
  "title": "Presenting an evidence-based pitch",
  "topic": "Stakeholders",
  "problem": "We need to make a persuasive proposal without exaggerating what the evidence proves.",
  "evidence": "Early feedback is encouraging, but repeat use and willingness to pay remain uncertain.",
  "proposal": "Separate observed facts from assumptions and ask for the next step the evidence can support.",
  "question": "What can we confidently say today, and what still requires a test?",
  "guardrail": "A persuasive pitch should make uncertainty understandable rather than hide it."
 },
 {
  "title": "Closing a promising conversation",
  "topic": "Stakeholders",
  "problem": "A useful conversation is ending without a clear agreement about what happens next.",
  "evidence": "Both sides have expressed interest, but no owner or time has been assigned to the follow-up.",
  "proposal": "Summarise the shared interest and propose one small, specific next action.",
  "question": "Who will do what next, and when will the other person hear from them?",
  "guardrail": "Do not describe general enthusiasm as an agreed commitment."
 },
 {
  "title": "Thanking a team after a milestone",
  "topic": "Stakeholders",
  "problem": "The team has reached a milestone, and the message should recognise effort without implying that all problems are solved.",
  "evidence": "The result depended on customer feedback, support work, and cooperation across several teams.",
  "proposal": "Recognise specific contributions, explain what the milestone means, and set a calm next priority.",
  "question": "Which less visible contribution should be recognised alongside the visible result?",
  "guardrail": "Do not turn appreciation into an immediate demand for even more effort."
 }
];
const PRACTICE_CONSTRAINTS = [
 {
  "title": "A decision before tomorrow",
  "level": "Develop leadership",
  "pressure": "The audience needs a useful decision before tomorrow, while some information will arrive later.",
  "adaptation": "Separate the decision that must happen now from the one that can wait. Use a reversible first step and name the condition that would change it.",
  "question": "Which choice actually expires tomorrow, and which only feels urgent?",
  "measure": "Check the immediate outcome tomorrow and revisit the uncertain part when the missing evidence arrives."
 },
 {
  "title": "A smaller available budget",
  "level": "Develop leadership",
  "pressure": "The money available for this work is lower than the original plan assumed.",
  "adaptation": "Protect the essential outcome, compare a smaller scope with a later start, and state what will not be included.",
  "question": "What can we remove without pretending the outcome is unchanged?",
  "measure": "Track both the reduced cost and the effect on the customer outcome."
 },
 {
  "title": "An exhausted team",
  "level": "Develop leadership",
  "pressure": "The people expected to deliver the work are already stretched by existing commitments.",
  "adaptation": "Change the work plan before asking for additional effort. Identify a commitment to pause and confirm the team's actual capacity.",
  "question": "Which existing promise will change if we accept this new work?",
  "measure": "Review workload as well as delivery, rather than rewarding success that depends on continued exhaustion."
 },
 {
  "title": "A sceptical audience",
  "level": "Think strategically",
  "pressure": "Some listeners have heard similar promises before and do not believe another confident message will help.",
  "adaptation": "Acknowledge the earlier gap, provide specific evidence, and make a smaller commitment that can be checked soon.",
  "question": "What would we accept as evidence that this time is different?",
  "measure": "Report whether the small promise was kept before asking for greater trust."
 },
 {
  "title": "Incomplete evidence",
  "level": "Think strategically",
  "pressure": "The information points in more than one direction, and we cannot responsibly present one interpretation as certain.",
  "adaptation": "Explain the strongest competing explanations and choose a test that could distinguish between them.",
  "question": "What observation would make us change our current view?",
  "measure": "Record the prediction before the test so we can compare it fairly with the result."
 },
 {
  "title": "Two departments in conflict",
  "level": "Develop leadership",
  "pressure": "Two departments want different outcomes and each believes the other is blocking progress.",
  "adaptation": "Restate the shared purpose, give both constraints a fair hearing, and clarify who owns the final decision.",
  "question": "Which shared outcome matters more than either department's preferred method?",
  "measure": "Check whether the agreed handoff works for both teams in practice."
 },
 {
  "title": "A remote international team",
  "level": "Develop leadership",
  "pressure": "The people involved work in different time zones and do not share the same background assumptions.",
  "adaptation": "Use explicit dates, simple language, and a written summary of decisions. Invite people to correct their understanding without embarrassment.",
  "question": "Which word, date, or responsibility could be interpreted differently by another team?",
  "measure": "Ask each owner to confirm the action and local deadline in their own words."
 },
 {
  "title": "A large power difference",
  "level": "Think strategically",
  "pressure": "A less senior colleague may understand the practical problem but feel unsafe disagreeing with the leader.",
  "adaptation": "Ask for contrary evidence before stating a strong preference, and thank the person who raises an uncomfortable point.",
  "question": "What would a person closest to the work tell us if there were no cost to disagreeing?",
  "measure": "Check whether concerns are raised earlier after the conversation."
 },
 {
  "title": "An uncertain estimate",
  "level": "Think strategically",
  "pressure": "The estimate is based on limited experience and should not be treated as a guaranteed result.",
  "adaptation": "Give a range, explain the assumptions, and identify which uncertainty has the largest effect on the estimate.",
  "question": "What would push the result toward either end of the range?",
  "measure": "Compare the actual result with the range and update the assumptions rather than just the final number."
 },
 {
  "title": "A disappointed long-term customer",
  "level": "Develop leadership",
  "pressure": "A long-term customer believes that their loyalty has not been matched by the attention they receive.",
  "adaptation": "Acknowledge the specific experience, avoid relying on the length of the relationship, and agree on one visible improvement.",
  "question": "What would make the next interaction feel meaningfully different to this customer?",
  "measure": "Ask the customer about the actual improvement rather than assuming that an apology restored trust."
 },
 {
  "title": "A concern about fairness",
  "level": "Think strategically",
  "pressure": "People believe that the decision process may favour one group over another.",
  "adaptation": "Explain the criteria before defending the result, show how they apply consistently, and allow a route for relevant new evidence.",
  "question": "Would we use the same criteria if the people involved changed?",
  "measure": "Review the decision process as well as whether the immediate result was accepted."
 },
 {
  "title": "A problem discovered late",
  "level": "Develop leadership",
  "pressure": "A relevant problem has been discovered after the team expected the plan to be settled.",
  "adaptation": "Explain the new information promptly and compare the cost of changing now with the cost of ignoring it.",
  "question": "What becomes harder to repair if we continue without addressing this information?",
  "measure": "Agree on the smallest immediate protective action and review it before the next irreversible step."
 },
 {
  "title": "A competing attractive opportunity",
  "level": "Think strategically",
  "pressure": "Another attractive opportunity is drawing attention away from the work already promised.",
  "adaptation": "Compare the opportunities against the same purpose and make the cost of switching explicit.",
  "question": "Which promise will we stop or renegotiate if we change direction?",
  "measure": "Track whether the chosen priority receives the resources that the decision assumed."
 },
 {
  "title": "A history of failed changes",
  "level": "Develop leadership",
  "pressure": "Earlier changes created extra work and were later abandoned, so the team has good reasons to be cautious.",
  "adaptation": "Explain what is different in the design of this change and invite users to identify a reason it might fail.",
  "question": "Which part of the old failure have we actually removed rather than renamed?",
  "measure": "Review adoption and the work removed, not just whether the new approach was announced."
 },
 {
  "title": "A new employee in the room",
  "level": "Build confidence",
  "pressure": "A new employee does not yet understand the background, the abbreviations, or the informal decision process.",
  "adaptation": "Explain the context in plain language and make the question safe to ask. Name the roles instead of assuming everyone knows them.",
  "question": "What would someone need to know to join this decision responsibly?",
  "measure": "Ask whether the new colleague can explain the outcome and their next action without guessing."
 },
 {
  "title": "A nontechnical audience",
  "level": "Build confidence",
  "pressure": "The audience needs a business explanation and cannot assess a detailed technical argument.",
  "adaptation": "Describe the practical outcome, use one concrete example, and state the limitation in ordinary language.",
  "question": "What does this change let a person do that they could not do before?",
  "measure": "Ask a listener to explain the value and the limit back without using our specialist terms."
 },
 {
  "title": "A highly technical audience",
  "level": "Think strategically",
  "pressure": "The audience wants to inspect assumptions and will not be satisfied by broad claims.",
  "adaptation": "Give the operational definition, explain what was measured, and invite scrutiny of the weakest assumption.",
  "question": "Which detail would a knowledgeable listener need before accepting the conclusion?",
  "measure": "Keep a record of unresolved technical questions and assign an owner to each."
 },
 {
  "title": "A sensitive personal impact",
  "level": "Develop leadership",
  "pressure": "The decision affects people's working arrangements, and a general announcement may miss important individual circumstances.",
  "adaptation": "Acknowledge the impact, distinguish what is decided from what can be discussed, and offer a private follow-up route.",
  "question": "Which concern should be handled privately rather than in front of the group?",
  "measure": "Confirm that affected people know where to ask questions and when they will receive an answer."
 },
 {
  "title": "A public promise already made",
  "level": "Think strategically",
  "pressure": "A public promise has created expectations that the current evidence may no longer support.",
  "adaptation": "Explain the difference between the earlier promise and the present facts, then offer an accountable correction.",
  "question": "Who may have acted on the original promise and needs a direct update?",
  "measure": "Check that the correction reaches the people affected, not only the people following our latest message."
 },
 {
  "title": "A partner with different incentives",
  "level": "Think strategically",
  "pressure": "The other organisation benefits from a different measure of success and may interpret our proposal differently.",
  "adaptation": "Name the two sets of incentives and look for an agreement that can work without assuming identical priorities.",
  "question": "What could look like success to one partner while creating a problem for the other?",
  "measure": "Review each side's outcome separately before describing the partnership as successful."
 },
 {
  "title": "A fixed customer deadline",
  "level": "Develop leadership",
  "pressure": "The customer has a real external deadline, so a simple request for more time may not solve their problem.",
  "adaptation": "Find the smallest useful result that can arrive on time and be explicit about what follows later.",
  "question": "What must the customer be able to do by the fixed date?",
  "measure": "Confirm the customer's essential task is possible, not merely that we delivered something before the deadline."
 },
 {
  "title": "A request for certainty",
  "level": "Build confidence",
  "pressure": "A listener asks for an absolute guarantee even though an important part of the result is outside our control.",
  "adaptation": "Explain what we can commit to, name the dependency, and provide a useful update schedule.",
  "question": "Which part of the result can we guarantee through our own actions?",
  "measure": "Check the commitment we control and communicate changes in the dependency promptly."
 },
 {
  "title": "An early positive result",
  "level": "Think strategically",
  "pressure": "The first result is encouraging, but the small sample may not represent normal conditions.",
  "adaptation": "Celebrate the learning while explaining why more observations are needed before a broad claim.",
  "question": "What would we need to see again before calling this a reliable pattern?",
  "measure": "Repeat the observation under different conditions and report both positive and disappointing results."
 },
 {
  "title": "A result below expectations",
  "level": "Develop leadership",
  "pressure": "The first result is weaker than expected, and people are tempted either to give up or to defend the plan.",
  "adaptation": "Compare the result with the original prediction and investigate the most important difference before deciding what to change.",
  "question": "Did the approach fail, or did a necessary condition never occur?",
  "measure": "Agree on a specific revision or stop decision rather than repeating the same work without a new reason."
 },
 {
  "title": "A disputed measure",
  "level": "Think strategically",
  "pressure": "People disagree about the meaning of the main measure, so an apparent improvement may hide a different problem.",
  "adaptation": "Define the measure together, examine what it excludes, and add a check for the outcome that matters.",
  "question": "Could this number improve while the customer experience becomes worse?",
  "measure": "Review the measure alongside a direct observation of the actual outcome."
 },
 {
  "title": "A need to rebuild confidence",
  "level": "Build confidence",
  "pressure": "A recent setback has made the team uncertain about its ability to make useful progress.",
  "adaptation": "Recognise what is difficult, identify evidence of capability, and agree on one manageable next action.",
  "question": "What small result could the team achieve without pretending the whole problem is solved?",
  "measure": "Notice and discuss the completed action before increasing the size of the next commitment."
 },
 {
  "title": "A rapidly changing situation",
  "level": "Think strategically",
  "pressure": "Relevant conditions are changing quickly, so an accurate statement today may be incomplete tomorrow.",
  "adaptation": "Time-stamp the update, separate current facts from forecasts, and set a predictable review interval.",
  "question": "What new event would make this update materially out of date?",
  "measure": "Recheck the changing assumption at the agreed interval and revise the message visibly."
 },
 {
  "title": "A need for a simple first explanation",
  "level": "Build confidence",
  "pressure": "The audience has little time and needs a clear first explanation before deciding whether to explore the detail.",
  "adaptation": "Use one main point, one supporting fact, and one next action. Save secondary detail for questions.",
  "question": "What is the single idea the listener should remember after this conversation?",
  "measure": "Ask whether the listener can state the point and the proposed next step in a short sentence."
 }
];
