/**
 * Basic Usage Examples for Awwwards Todo System
 */

// Import the system (Node.js)
// const { AwwwardsTodoSystem, PersistentTodoManager } = require('../AwwwardsTodoSystem.js');

// Example 1: Basic Todo Creation
console.log('📝 EXAMPLE 1: Basic Todo Creation\n');

const basicSystem = new AwwwardsTodoSystem();

const simpleTodos = [
  { content: "Learn Swiss Grid principles", status: "completed", priority: "high" },
  { content: "Study typography hierarchy", status: "in_progress", priority: "medium" },
  { content: "Apply Awwwards criteria", status: "pending", priority: "high" }
];

const result = basicSystem.createEvaluatedTodo("learning-session", simpleTodos);
console.log(result.display);
console.log(`\nAchievement: ${result.awwwardsLevel}`);

// Example 2: Style Variations
console.log('\n🎨 EXAMPLE 2: Style Variations\n');

const styles = ['minimalist', 'brutalist', 'terminal', 'modern'];
styles.forEach(style => {
  const styleResult = basicSystem.generateTodo("style-test", simpleTodos, style);
  console.log(`${style.toUpperCase()} (${styleResult.evaluation.overall.toFixed(1)}/10):`);
  console.log(styleResult.display);
  console.log('');
});

// Example 3: Evaluation Analysis
console.log('\n📊 EXAMPLE 3: Detailed Evaluation\n');

const evaluation = basicSystem.evaluateInterface(
  result.display.split('\n\n')[0], // Just the todo display
  simpleTodos
);

console.log('Evaluation Breakdown:');
console.log(`• Design:     ${evaluation.design.toFixed(1)}/10 (Visual + Layout)`);
console.log(`• Usability:  ${evaluation.usability.toFixed(1)}/10 (UX + Navigation)`);
console.log(`• Creativity: ${evaluation.creativity.toFixed(1)}/10 (Innovation)`);
console.log(`• Content:    ${evaluation.content.toFixed(1)}/10 (Information Quality)`);
console.log(`• Overall:    ${evaluation.overall.toFixed(1)}/10`);

// Example 4: Custom Todo Data
console.log('\n🔧 EXAMPLE 4: Custom Todo Data\n');

const projectTodos = [
  { 
    content: "Research competitor design systems", 
    status: "completed", 
    priority: "high",
    tags: ["research", "design"],
    estimatedHours: 4
  },
  { 
    content: "Create component library structure", 
    status: "in_progress", 
    priority: "high",
    tags: ["development", "architecture"],
    estimatedHours: 8
  },
  { 
    content: "Design token system implementation", 
    status: "pending", 
    priority: "medium",
    tags: ["design", "development"],
    estimatedHours: 6
  },
  { 
    content: "Write documentation and guidelines", 
    status: "pending", 
    priority: "low",
    tags: ["documentation"],
    estimatedHours: 3
  }
];

const projectResult = basicSystem.createEvaluatedTodo("design-system-project", projectTodos, "minimalist", true);
console.log(projectResult.display);

// Example 5: Status Symbol Demonstration
console.log('\n🔣 EXAMPLE 5: Status Symbols\n');

const statusExamples = [
  { content: "Pending task example", status: "pending", priority: "medium" },
  { content: "In progress task example", status: "in_progress", priority: "high" },
  { content: "Completed task example", status: "completed", priority: "low" },
  { content: "Cancelled task example", status: "cancelled", priority: "low" }
];

const statusResult = basicSystem.generateTodo("status-demo", statusExamples, "minimalist");
console.log('Status Symbol Guide:');
console.log('[ ] = Pending');
console.log('[~] = In Progress');
console.log('[✓] = Completed');
console.log('[×] = Cancelled');
console.log('\nDisplay:');
console.log(statusResult.display);

console.log('\n✅ Basic usage examples completed!');
console.log('\nNext steps:');
console.log('• Try persistence-demo.js for cross-chat features');
console.log('• Check evaluation-examples.js for scoring details');
console.log('• Open index.html for interactive browser demo');
