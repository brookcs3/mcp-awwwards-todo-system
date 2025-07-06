/**
 * Demo script for Awwwards-Evaluated Persistent Todo System
 * Run this to see the system in action with sample data
 */

// Import the todo system (in Node.js environment)
// const { AwwwardsTodoSystem, PersistentTodoManager } = require('./AwwwardsTodoSystem.js');

// For browser environment, the classes are available globally

console.log('🎯 AWWWARDS-EVALUATED PERSISTENT TODO SYSTEM DEMO\n');

// Initialize the persistent todo manager
const persistentSystem = new PersistentTodoManager();

// Create sample todo sessions
const designSession = {
  id: "design-system-2025",
  title: "Design System Project",
  todos: [
    { content: "Review design system documentation", status: "completed", priority: "high" },
    { content: "Create typography style guide", status: "in_progress", priority: "medium" },
    { content: "Test font combinations", status: "pending", priority: "medium" },
    { content: "Apply Awwwards evaluation criteria", status: "pending", priority: "high" }
  ],
  lastWorkedOn: "2025-07-06T10:30:00Z"
};

const codeSession = {
  id: "api-refactor",
  title: "API Refactor Sprint",
  todos: [
    { content: "Audit existing endpoints", status: "completed", priority: "high" },
    { content: "Design new schema", status: "completed", priority: "high" },
    { content: "Implement user endpoints", status: "in_progress", priority: "high" },
    { content: "Write integration tests", status: "pending", priority: "medium" }
  ],
  lastWorkedOn: "2025-07-05T14:20:00Z"
};

const marketingSession = {
  id: "marketing-campaign",
  title: "Q3 Marketing Campaign",
  todos: [
    { content: "Research target audience demographics", status: "completed", priority: "high" },
    { content: "Create brand messaging framework", status: "completed", priority: "high" },
    { content: "Design social media templates", status: "in_progress", priority: "medium" },
    { content: "Plan content calendar", status: "pending", priority: "medium" },
    { content: "Set up analytics tracking", status: "pending", priority: "low" }
  ],
  lastWorkedOn: "2025-07-04T16:45:00Z"
};

// Save sessions to persistent storage
console.log('💾 SAVING SAMPLE SESSIONS...\n');
persistentSystem.saveTodoSession(designSession.id, designSession.todos, designSession);
persistentSystem.saveTodoSession(codeSession.id, codeSession.todos, codeSession);
persistentSystem.saveTodoSession(marketingSession.id, marketingSession.todos, marketingSession);

// Demo 1: New chat initialization
console.log('🆕 DEMO 1: NEW CHAT INITIALIZATION\n');
console.log('='.repeat(60));

const initResult = persistentSystem.initializeNewChat();

if (initResult.hasIncompleteTodos) {
  console.log(initResult.initMessage);
} else {
  console.log(initResult.message);
}

// Demo 2: Contextual triggers
console.log('\n\n🔥 DEMO 2: CONTEXTUAL TRIGGERS\n');
console.log('='.repeat(60));

// User explicitly requests todo
console.log('👤 USER REQUESTS TODO STATUS:\n');
const userRequest = persistentSystem.displayIfTriggered(
  "design-system-2025", 
  designSession.todos, 
  { userAsked: true }
);
if (userRequest.shouldDisplay) console.log(userRequest.output);

// Task completion trigger
console.log('\n\n🎉 TASK COMPLETION TRIGGER:\n');
const updatedTodos = designSession.todos.map(t => 
  t.content === "Test font combinations" ? {...t, status: "completed"} : t
);
const completion = persistentSystem.displayIfTriggered(
  "design-system-2025", 
  updatedTodos, 
  { itemCompleted: true }
);
if (completion.shouldDisplay) console.log(completion.output);

// Demo 3: Session switching
console.log('\n\n🔄 DEMO 3: SESSION SWITCHING\n');
console.log('='.repeat(60));

const switchResult = persistentSystem.switchToSession("api-refactor");
if (switchResult.success) {
  console.log(switchResult.message);
}

// Demo 4: Different style variations
console.log('\n\n🎨 DEMO 4: STYLE VARIATIONS\n');
console.log('='.repeat(60));

const basicSystem = new AwwwardsTodoSystem();
const styles = ['minimalist', 'brutalist', 'terminal', 'modern'];

styles.forEach(style => {
  console.log(`\n${style.toUpperCase()} STYLE:`);
  const result = basicSystem.generateTodo("demo", designSession.todos, style);
  console.log(result.display);
  console.log(`Score: ${result.evaluation.overall.toFixed(1)}/10 (${result.awwwardsLevel})`);
});

// Demo 5: Evaluation breakdown
console.log('\n\n📊 DEMO 5: DETAILED EVALUATION\n');
console.log('='.repeat(60));

const evaluation = basicSystem.createEvaluatedTodo("demo", designSession.todos, 'minimalist', true);
console.log('EVALUATION BREAKDOWN:');
console.log(`• Design:     ${evaluation.evaluation.design.toFixed(1)}/10 (40% weight)`);
console.log(`• Usability:  ${evaluation.evaluation.usability.toFixed(1)}/10 (30% weight)`);
console.log(`• Creativity: ${evaluation.evaluation.creativity.toFixed(1)}/10 (20% weight)`);
console.log(`• Content:    ${evaluation.evaluation.content.toFixed(1)}/10 (10% weight)`);
console.log(`• OVERALL:    ${evaluation.evaluation.overall.toFixed(1)}/10`);
console.log(`• ACHIEVEMENT: ${evaluation.awwwardsLevel}`);

console.log('\n\n✅ DEMO COMPLETE!');
console.log('\nSYSTEM FEATURES DEMONSTRATED:');
console.log('🔄 Cross-chat persistence');
console.log('🎯 Smart session initialization');
console.log('🔥 Contextual triggers');
console.log('🎨 Multiple style variations');
console.log('📊 Awwwards evaluation system');
console.log('🏗️ Swiss Grid + Typography principles');
console.log('🚀 Professional design standards');

// Export demo function for reuse
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runDemo: () => console.log('Demo completed!') };
}
