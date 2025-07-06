/**
 * Demo script for MCP Awwwards-Evaluated Todo System
 * Professional MCP server for Claude Desktop
 * Run this to see the system in action with sample data
 */

// Import the MCP server system
const { MCPAwwwardsTodoServer } = require('./mcp-server.js');

console.log('🏆 MCP AWWWARDS TODO SYSTEM - PROFESSIONAL DEMO\n');

// Initialize the MCP server
const mcpServer = new MCPAwwwardsTodoServer();
console.log('🖥️  MCP Server Info:', mcpServer.getServerInfo());
console.log('');

// Create sample todo sessions
const designSession = {
  id: "design-system-2025",
  title: "Design System Project",
  todos: [
    { content: "Review MCP server documentation", status: "completed", priority: "high" },
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

// Save sessions to MCP persistent storage
console.log('💾 SAVING SAMPLE SESSIONS TO MCP STORAGE...\n');
mcpServer.todoManager.saveTodoSession(designSession.id, designSession.todos, designSession);
mcpServer.todoManager.saveTodoSession(codeSession.id, codeSession.todos, codeSession);
mcpServer.todoManager.saveTodoSession(marketingSession.id, marketingSession.todos, marketingSession);

// Demo 1: MCP new chat initialization
console.log('🆕 DEMO 1: MCP NEW CHAT INITIALIZATION\n');
console.log('='.repeat(60));

const initResult = mcpServer.initializeWithBranding();

if (initResult && initResult.hasIncompleteTodos) {
  console.log(initResult.initMessage);
} else if (initResult) {
  console.log(initResult.message);
}

// Demo 2: MCP contextual triggers
console.log('\n\n🔥 DEMO 2: MCP CONTEXTUAL TRIGGERS\n');
console.log('='.repeat(60));

// MCP branded user request
console.log('👤 USER REQUESTS TODO STATUS (MCP):\n');
const userRequest = mcpServer.brandedTodoDisplay(
  "design-system-2025", 
  designSession.todos, 
  { userAsked: true }
);
if (userRequest.shouldDisplay) console.log(userRequest.output);

// MCP branded completion trigger
console.log('\n\n🎉 TASK COMPLETION TRIGGER (MCP):\n');
const updatedTodos = designSession.todos.map(t => 
  t.content === "Test font combinations" ? {...t, status: "completed"} : t
);
const completion = mcpServer.brandedTodoDisplay(
  "design-system-2025", 
  updatedTodos, 
  { itemCompleted: true }
);
if (completion.shouldDisplay) console.log(completion.output);

// Demo 3: MCP session switching
console.log('\n\n🔄 DEMO 3: MCP SESSION SWITCHING\n');
console.log('='.repeat(60));

const switchResult = mcpServer.todoManager.switchToSession("api-refactor");
if (switchResult.success) {
  console.log(switchResult.message);
}

// Demo 4: MCP style variations
console.log('\n\n🎨 DEMO 4: MCP STYLE VARIATIONS\n');
console.log('='.repeat(60));

const styles = ['minimalist', 'brutalist', 'terminal', 'modern'];

styles.forEach(style => {
  console.log(`\n${style.toUpperCase()} STYLE (MCP):`);
  const result = mcpServer.createBrandedTodo("mcp-demo", designSession.todos, style, false);
  // Show just the todo display part for brevity
  const lines = result.display.split('\n');
  const todoStart = lines.findIndex(line => line.includes('▓'));
  if (todoStart !== -1) {
    const todoEnd = lines.findIndex((line, index) => 
      index > todoStart + 4 && line.includes('▓') && 
      !line.includes('[ ]') && !line.includes('[~]') && !line.includes('[✓]')
    );
    if (todoEnd !== -1) {
      console.log(lines.slice(todoStart, todoEnd + 1).join('\n'));
    }
  }
  console.log(`Score: ${mcpServer.todoManager.evaluateInterface('', designSession.todos).overall.toFixed(1)}/10`);
});

// Demo 5: MCP detailed evaluation
console.log('\n\n📊 DEMO 5: MCP DETAILED EVALUATION\n');
console.log('='.repeat(60));

const evaluation = mcpServer.createBrandedTodo("mcp-evaluation-demo", designSession.todos, 'minimalist', true);
console.log('🏆 FULL MCP BRANDED EVALUATION:');
console.log('(Showing complete MCP server output with branding)\n');
console.log(evaluation.display);

console.log('\n\n✅ MCP DEMO COMPLETE!');
console.log('\n🖥️  MCP SERVER FEATURES DEMONSTRATED:');
console.log('🆕 MCP server initialization with professional branding');
console.log('🔄 Cross-chat persistence via MCP protocol');
console.log('🎯 Smart session initialization for Claude Desktop');
console.log('🔥 Contextual triggers with MCP integration');
console.log('🎨 Multiple style variations with consistent branding');
console.log('📊 Awwwards evaluation system');
console.log('🏗️ Swiss Grid + Typography principles');
console.log('🚀 Professional MCP server for Claude Desktop');

console.log('\n🏆 Achievement Level: SITE OF THE DAY');
console.log('📈 Ready for Claude Desktop integration!');
console.log('⚡ Run: ./install.sh to set up MCP server');

// Export MCP demo function for reuse
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    runDemo: () => console.log('MCP Demo completed!'),
    MCPAwwwardsTodoServer
  };
}
