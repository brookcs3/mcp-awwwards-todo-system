#!/usr/bin/env node

/**
 * MCP Awwwards-Evaluated Todo System
 * Professional MCP server for Claude Desktop
 * 
 * Applies systematic design principles:
 * - Swiss Grid System (Müller-Brockmann)
 * - Typography Hierarchy (Ellen Lupton)
 * - Awwwards Evaluation Criteria
 * - Cross-chat persistence with contextual triggers
 */

const { PersistentTodoManager } = require('./AwwwardsTodoSystem.js');

class MCPAwwwardsTodoServer {
  constructor() {
    this.name = "MCP Awwwards Todo System";
    this.version = "1.0.0";
    this.description = "🏆 Professional todo management with Swiss Grid principles and Awwwards evaluation";
    this.todoManager = new PersistentTodoManager();
    
    // MCP server identification
    this.serverInfo = {
      name: this.name,
      version: this.version,
      vendor: "Claude AI System for MCP",
      capabilities: [
        "cross-chat-persistence",
        "awwwards-evaluation", 
        "contextual-triggers",
        "swiss-grid-design",
        "typography-hierarchy"
      ]
    };
  }

  // Add system branding to all todo displays
  brandedTodoDisplay(sessionId, todos, context = {}) {
    const result = this.todoManager.displayIfTriggered(sessionId, todos, context);
    
    if (result.shouldDisplay) {
      // Add MCP system header
      const header = `
╔══════════════════════════════════════════════════╗
║  🏆 MCP AWWWARDS TODO SYSTEM v${this.version}          ║
║  Professional design • Claude Desktop MCP        ║
╚══════════════════════════════════════════════════╝
`;
      
      result.output = header + result.output;
      
      // Add system footer
      const footer = `
┌─ MCP System Info ─────────────────────────────────┐
│ Server: ${this.name.padEnd(34)} │
│ Design: Swiss Grid + Typography Hierarchy        │  
│ Standards: Awwwards Professional Evaluation      │
└───────────────────────────────────────────────────┘`;
      
      result.output += footer;
    }
    
    return result;
  }

  // Enhanced todo creation with MCP branding
  createBrandedTodo(sessionId, todos, style = 'minimalist', showScorecard = true) {
    const result = this.todoManager.createEvaluatedTodo(sessionId, todos, style, showScorecard);
    
    // Add MCP system identification header
    const mcpHeader = `
╔══════════════════════════════════════════════════╗
║  🏆 MCP AWWWARDS TODO SYSTEM v${this.version}          ║  
║  Professional MCP Server for Claude Desktop      ║
╚══════════════════════════════════════════════════╝

📋 Session: ${sessionId}
🎨 Style: ${style.toUpperCase()}
📊 Evaluation: Live Awwwards Scoring

`;

    result.display = mcpHeader + result.display;
    
    // Add achievement badge
    const achievementBadge = `
╭─ Achievement Level ───────────────────────────────╮
│ 🏆 ${result.awwwardsLevel.padEnd(42)} │
│ Score: ${result.evaluation.overall.toFixed(1)}/10 - Meeting professional standards │
╰───────────────────────────────────────────────────╯

┌─ MCP Server Features ─────────────────────────────┐
│ ✅ Swiss Grid mathematical precision              │
│ ✅ Typography hierarchy (Lupton principles)       │
│ ✅ Awwwards evaluation (40/30/20/10 weighting)    │
│ ✅ Cross-chat persistence                         │
│ ✅ Contextual auto-display triggers               │
│ ✅ Professional achievement levels                │
└───────────────────────────────────────────────────┘

🤖 Generated by MCP Awwwards Todo System for Claude Desktop`;

    result.display += achievementBadge;
    
    return result;
  }

  // Initialize new chat with MCP branding
  initializeWithBranding() {
    const initResult = this.todoManager.initializeNewChat();
    
    if (initResult && initResult.hasIncompleteTodos) {
      // Replace the basic display with branded version
      const todos = initResult.currentSession.todos;
      const brandedResult = this.createBrandedTodo(
        initResult.currentSession.id, 
        todos, 
        'minimalist', 
        true
      );
      
      initResult.initMessage = `🔄 **MCP AWWWARDS TODO SYSTEM - CONTINUING FROM PREVIOUS CHAT**

Most recent active session: **${initResult.currentSession.title || initResult.currentSession.id}**

${brandedResult.display}`;

      if (initResult.otherSessions && initResult.otherSessions.length > 0) {
        initResult.initMessage += `\n\n📋 **OTHER ACTIVE SESSIONS (${initResult.otherSessions.length}):**\n`;
        const overviews = this.todoManager.generateSessionOverview({
          [initResult.currentSession.id]: initResult.currentSession, 
          ...Object.fromEntries(initResult.otherSessions.map(s => [s.id, s]))
        });
        
        overviews.slice(1).forEach(overview => {
          initResult.initMessage += `• ${overview.title} - ${overview.progress} (${overview.lastWorked})\n`;
        });
        
        initResult.initMessage += `\n❓ Would you like to switch to a different session, or continue with "${initResult.currentSession.title || initResult.currentSession.id}"?`;
      }
    } else if (initResult) {
      initResult.message = `
╔══════════════════════════════════════════════════╗
║  🏆 MCP AWWWARDS TODO SYSTEM v${this.version}          ║
║  Professional MCP Server for Claude Desktop      ║
╚══════════════════════════════════════════════════╝

🎯 No active todos found. Ready to create a new session!

🚀 MCP Server Features:
✅ Swiss Grid mathematical precision
✅ Typography hierarchy (Lupton principles)  
✅ Awwwards evaluation (40/30/20/10 weighting)
✅ Cross-chat persistence
✅ Contextual auto-display triggers
✅ Professional achievement levels

Ready to create professional-grade todos with award-winning design!`;
    }
    
    return initResult;
  }

  // Get server information for MCP protocol
  getServerInfo() {
    return this.serverInfo;
  }
}

// Export for MCP usage
module.exports = { MCPAwwwardsTodoServer };

// CLI usage for testing
if (require.main === module) {
  console.log('🏆 MCP Awwwards Todo System - Server Starting...\n');
  
  const server = new MCPAwwwardsTodoServer();
  console.log('Server Info:', server.getServerInfo());
  
  // Demo the branded system
  const sampleTodos = [
    { content: "Review MCP server documentation", status: "completed", priority: "high" },
    { content: "Test Swiss Grid implementation", status: "in_progress", priority: "medium" },
    { content: "Apply Awwwards evaluation criteria", status: "pending", priority: "high" }
  ];
  
  console.log('\n🎯 DEMO: MCP Branded Todo Display\n');
  const result = server.createBrandedTodo("mcp-demo-session", sampleTodos, "minimalist", true);
  console.log(result.display);
}
