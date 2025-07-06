/**
 * MCP Server Examples for Awwwards Todo System
 * Professional usage examples for Claude Desktop integration
 */

// Import the MCP server system
const { MCPAwwwardsTodoServer } = require('../mcp-server.js');

console.log('📝 MCP AWWWARDS TODO SYSTEM - USAGE EXAMPLES\n');

// Example 1: Basic MCP Server Setup
console.log('1️⃣ EXAMPLE 1: MCP Server Initialization\n');

const mcpServer = new MCPAwwwardsTodoServer();
console.log('Server Info:', mcpServer.getServerInfo());
console.log('✅ MCP server ready for Claude Desktop integration\n');

// Example 2: Creating Professional Todos
console.log('2️⃣ EXAMPLE 2: Professional Todo Creation\n');

const projectTodos = [
  { content: "Set up MCP server configuration", status: "completed", priority: "high" },
  { content: "Implement Swiss Grid layout system", status: "in_progress", priority: "high" },
  { content: "Apply typography hierarchy principles", status: "pending", priority: "medium" },
  { content: "Test Awwwards evaluation criteria", status: "pending", priority: "medium" }
];

const result = mcpServer.createBrandedTodo("mcp-project", projectTodos, "minimalist", true);
console.log(result.display);
console.log(`\n🏆 Achievement: ${result.awwwardsLevel}\n`);

// Example 3: MCP Style Variations Demo
console.log('3️⃣ EXAMPLE 3: MCP Style Variations\n');

const sampleTodos = [
  { content: "Configure Claude Desktop MCP settings", status: "completed", priority: "high" },
  { content: "Install MCP Awwwards Todo System", status: "in_progress", priority: "medium" },
  { content: "Test cross-chat persistence", status: "pending", priority: "low" }
];

const styles = [
  { name: 'minimalist', context: 'daily use' },
  { name: 'brutalist', context: 'celebrations' },
  { name: 'terminal', context: 'progress updates' },
  { name: 'modern', context: 'topic shifts' }
];

styles.forEach(({ name, context }) => {
  console.log(`${name.toUpperCase()} Style (${context}):`);
  const styleResult = mcpServer.createBrandedTodo("style-demo", sampleTodos, name, false);
  
  // Extract just the todo display portion
  const lines = styleResult.display.split('\n');
  const startIdx = lines.findIndex(line => line.includes('▓') || line.includes('▫') || line.includes('░'));
  const endIdx = lines.findIndex((line, idx) => 
    idx > startIdx + 3 && (line.includes('▓') || line.includes('▫') || line.includes('░')) &&
    !line.includes('[') && line.length > 20
  );
  
  if (startIdx !== -1 && endIdx !== -1) {
    console.log(lines.slice(startIdx, endIdx + 1).join('\n'));
  }
  console.log('');
});

// Example 4: MCP Session Management
console.log('4️⃣ EXAMPLE 4: MCP Session Management\n');

// Create multiple sessions
const sessions = [
  {
    id: "frontend-development",
    title: "Frontend Development Sprint",
    todos: [
      { content: "Set up React component library", status: "completed", priority: "high" },
      { content: "Implement design system tokens", status: "in_progress", priority: "high" },
      { content: "Create responsive layouts", status: "pending", priority: "medium" }
    ]
  },
  {
    id: "backend-optimization",
    title: "Backend Performance Optimization", 
    todos: [
      { content: "Profile database queries", status: "completed", priority: "high" },
      { content: "Implement caching strategy", status: "in_progress", priority: "high" },
      { content: "Set up monitoring", status: "pending", priority: "medium" }
    ]
  }
];

// Save sessions to MCP storage
sessions.forEach(session => {
  mcpServer.todoManager.saveTodoSession(session.id, session.todos, session);
  console.log(`✅ Saved session: ${session.title}`);
});

// Demonstrate session switching
console.log('\n🔄 Switching sessions:');
const switchResult = mcpServer.todoManager.switchToSession("backend-optimization");
if (switchResult.success) {
  console.log('Session switched successfully!');
  console.log('New active session:', switchResult.session.title);
}

// Example 5: MCP Contextual Triggers
console.log('\n5️⃣ EXAMPLE 5: MCP Contextual Triggers\n');

const contexts = [
  { name: 'User Request', trigger: { userAsked: true } },
  { name: 'Task Completion', trigger: { itemCompleted: true } },
  { name: 'Progress Update', trigger: { progressMade: true } },
  { name: 'Topic Shift', trigger: { topicChanged: true } }
];

contexts.forEach(({ name, trigger }) => {
  console.log(`${name} Trigger:`);
  const contextResult = mcpServer.brandedTodoDisplay("example-session", sampleTodos, trigger);
  
  if (contextResult.shouldDisplay) {
    // Show just the header and trigger info
    const lines = contextResult.output.split('\n');
    const headerLines = lines.slice(0, 8);
    console.log(headerLines.join('\n'));
    console.log('...[todo display]...');
    console.log(`🔥 Trigger: ${contextResult.triggerReason.toUpperCase()}`);
  }
  console.log('');
});

// Example 6: MCP Evaluation Breakdown
console.log('6️⃣ EXAMPLE 6: MCP Evaluation System\n');

const evaluationDemo = mcpServer.createBrandedTodo("evaluation-demo", projectTodos, "minimalist", false);
const scores = evaluationDemo.evaluation;

console.log('📊 AWWWARDS EVALUATION BREAKDOWN:');
console.log(`🎨 Design:     ${scores.design.toFixed(1)}/10 (40% weight) - Swiss Grid + Typography`);
console.log(`⚡ Usability:  ${scores.usability.toFixed(1)}/10 (30% weight) - Clear symbols + scanning`);
console.log(`💡 Creativity: ${scores.creativity.toFixed(1)}/10 (20% weight) - Functional minimalism`);
console.log(`📝 Content:    ${scores.content.toFixed(1)}/10 (10% weight) - Meaningful organization`);
console.log(`🏆 OVERALL:    ${scores.overall.toFixed(1)}/10 → ${evaluationDemo.awwwardsLevel}`);

console.log('\n📈 Achievement Levels:');
console.log('• 9.0+: Site of the Day 🏆');
console.log('• 8.5+: Developer Award 🥇');
console.log('• 6.5+: Honorable Mention 🎖️');
console.log('• <6.5: Keep Improving 📈');

// Example 7: MCP New Chat Initialization
console.log('\n7️⃣ EXAMPLE 7: MCP New Chat Initialization\n');

const initDemo = mcpServer.initializeWithBranding();
if (initDemo && initDemo.hasIncompleteTodos) {
  console.log('✅ MCP initialization successful');
  console.log(`📋 Found ${initDemo.sessionCount} active session(s)`);
  console.log(`🎯 Current: ${initDemo.currentSession.title}`);
  if (initDemo.otherSessions) {
    console.log(`📚 Other sessions: ${initDemo.otherSessions.length}`);
  }
} else {
  console.log('🎯 No active sessions - ready for new projects');
}

console.log('\n✅ MCP USAGE EXAMPLES COMPLETED!');
console.log('\n🚀 NEXT STEPS:');
console.log('1. Run ./install.sh to set up MCP server');
console.log('2. Restart Claude Desktop');
console.log('3. Start a new conversation');
console.log('4. The MCP Awwwards Todo System will auto-initialize');

console.log('\n🏆 READY FOR PROFESSIONAL TODO MANAGEMENT!');
console.log('🎨 Swiss Grid + Typography + Awwwards Standards');
console.log('🖥️  Integrated with Claude Desktop via MCP');

// Export for reuse
module.exports = {
  MCPAwwwardsTodoServer,
  examples: {
    basicSetup: () => new MCPAwwwardsTodoServer(),
    createProject: (todos) => mcpServer.createBrandedTodo("example", todos),
    switchSession: (id) => mcpServer.todoManager.switchToSession(id)
  }
};
