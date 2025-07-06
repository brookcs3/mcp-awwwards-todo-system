# 🏆 MCP Awwwards-Evaluated Todo System

**Professional MCP server for Claude Desktop** with systematic design principles and award-winning interface standards.

An MCP (Model Context Protocol) server for Claude Desktop that provides professional todo management with systematic design principles and maintains award-winning interface standards across conversations.

## 🎯 Overview

This **MCP server** integrates seamlessly with **Claude Desktop** to provide intelligent todo management.

This system combines foundational design principles with modern evaluation criteria to create a todo interface that meets professional standards:

- **Swiss Grid System** (Josef Müller-Brockmann) → Mathematical precision, modular layout
- **Typography Hierarchy** (Ellen Lupton - "Thinking with Type") → Clear information structure  
- **Awwwards Evaluation** → Industry-standard assessment (40% Design, 30% Usability, 20% Creativity, 10% Content)
- **Cross-Chat Persistence** → Never lose progress between conversations
- **Contextual Triggers** → Smart auto-display based on conversation flow

## ✨ Features

### 🎨 **Design Excellence**
- Four style variations: Minimalist, Brutalist, Terminal, Modern
- Swiss Grid mathematical consistency
- Typography hierarchy with optimal reading measures
- Functional symbol system for status clarity

### 📊 **Awwwards Evaluation System**
Every todo display is automatically evaluated against professional criteria:
- **Design (40%)**: Visual aesthetics, layout quality, typography hierarchy
- **Usability (30%)**: UX clarity, navigation, functional efficiency  
- **Creativity (20%)**: Innovation, originality, systematic approach
- **Content (10%)**: Information quality, meaningful organization

### 🔄 **Persistent Cross-Chat System**
- Todos persist across all conversations
- Smart initialization loads most recent incomplete session
- Multi-session management with easy switching
- Automatic progress tracking

### 🔥 **Contextual Auto-Display**
Todos appear automatically when:
- User explicitly requests (`"show todos"`)
- Every 10 messages in conversation
- Item completed (celebration style)
- Significant progress made
- Partial task completion
- Topic shifts in conversation

## 🚀 Installation & Setup

### For Claude Desktop (MCP)

1. **Clone the repository:**
```bash
git clone https://github.com/brookcs3/mcp-awwwards-todo-system.git
cd mcp-awwwards-todo-system
```

2. **Add to your Claude Desktop MCP configuration:**
```json
{
  "mcpServers": {
    "mcp-awwwards-todo": {
      "command": "node",
      "args": ["path/to/mcp-awwwards-todo-system/AwwwardsTodoSystem.js"]
    }
  }
}
```

3. **Restart Claude Desktop**

### Standalone Usage

### Basic Usage

```javascript
// Initialize the system
const todoSystem = new PersistentTodoManager();

// Create a todo session
const todos = [
  { content: "Design system review", status: "pending", priority: "high" },
  { content: "Typography guide", status: "in_progress", priority: "medium" },
  { content: "Color palette", status: "completed", priority: "low" }
];

// Generate evaluated todo display
const result = todoSystem.createEvaluatedTodo("my-project", todos, "minimalist", true);
console.log(result.display);
```

### New Chat Initialization

```javascript
// Automatically load and display most recent incomplete session
const initResult = todoSystem.initializeNewChat();

if (initResult.hasIncompleteTodos) {
  console.log(initResult.initMessage); // Shows current progress + other sessions
} else {
  console.log("🎯 No active todos found. Ready to create a new session!");
}
```

### Contextual Triggers

```javascript
// Check if todo should display based on context
const shouldShow = todoSystem.shouldDisplayTodo({
  itemCompleted: true,  // Just finished a task
  progressMade: false,
  topicChanged: false
});

if (shouldShow) {
  const display = todoSystem.displayIfTriggered("session-id", todos, {
    itemCompleted: true
  });
  console.log(display.output); // Celebration-style display
}
```

## 🎨 Style Variations

### Minimalist (Default)
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ [ ] Design system review                 ▓
▓ [~] Typography guide                     ▓  
▓ [✓] Color palette                        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

### Brutalist (Celebrations)
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓ [ ] Design system review                 ▓▓
▓▓ [~] Typography guide                     ▓▓  
▓▓ [✓] Color palette                        ▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

### Terminal (Progress Energy)
```
░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░
▓ [ ] Design system review                 ▓
▓ [~] Typography guide                     ▓  
▓ [✓] Color palette                        ▓
░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░
```

### Modern (Topic Shifts)
```
▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
▫ [ ] Design system review                 ▫
▫ [~] Typography guide                     ▫  
▫ [✓] Color palette                        ▫
▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
```

## 📊 Evaluation Scorecard

Each todo display includes an automatic Awwwards-style evaluation:

```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ DESIGN:     9.2/10 (Swiss Grid + Typography)   ▓
▓ USABILITY:  8.8/10 (Clear symbols + scanning)  ▓
▓ CREATIVITY: 8.5/10 (Functional minimalism)     ▓
▓ CONTENT:    8.0/10 (Meaningful organization)   ▓
▓                                                ▓
▓ OVERALL:    8.9/10 → SITE OF THE DAY LEVEL     ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

Achievement levels:
- **9.0+**: Site of the Day 🏆
- **8.5+**: Developer Award 🥇
- **6.5+**: Honorable Mention 🎖️
- **<6.5**: Keep Improving 📈

## 🏗️ Architecture

### Core Classes

- **`AwwwardsTodoSystem`**: Base system with evaluation engine
- **`PersistentTodoManager`**: Extends base with persistence and contextual triggers

### Design Principles Applied

1. **Mathematical Precision**: 48-character optimal reading measure
2. **Grid Consistency**: Monospace fonts ensure uniform character width
3. **Visual Hierarchy**: Status symbols, typography weights, spacing
4. **Functional Clarity**: Each element serves communication purpose
5. **Systematic Approach**: Modular, repeatable, scalable design

## 🔧 API Reference

### Core Methods

#### `createEvaluatedTodo(sessionId, todos, style, showScorecard)`
Generates a complete todo display with Awwwards evaluation.

**Parameters:**
- `sessionId` (string): Unique session identifier
- `todos` (array): Array of todo objects
- `style` (string): 'minimalist' | 'brutalist' | 'terminal' | 'modern'
- `showScorecard` (boolean): Include evaluation scorecard

#### `initializeNewChat()`
Smart initialization for new conversations.

**Returns:**
- `hasIncompleteTodos` (boolean): Whether active sessions exist
- `initMessage` (string): Formatted initialization display
- `currentSession` (object): Most recent active session
- `otherSessions` (array): Other available sessions

#### `displayIfTriggered(sessionId, todos, context)`
Contextual display based on trigger conditions.

**Context options:**
- `userAsked`: User explicitly requested
- `itemCompleted`: Task was just completed
- `progressMade`: Significant progress detected
- `topicChanged`: Conversation topic shifted

### Todo Object Structure

```javascript
{
  content: "Task description",           // string
  status: "pending",                     // 'pending' | 'in_progress' | 'completed' | 'cancelled'
  priority: "high"                       // 'high' | 'medium' | 'low'
}
```

## 📁 File Structure

```
awwwards-todo-system/
├── AwwwardsTodoSystem.js    # Core system classes
├── demo.js                  # Demonstration script
├── index.html              # Browser demo page
├── package.json            # Node.js package configuration
├── README.md               # This documentation
└── examples/               # Usage examples
    ├── basic-usage.js
    ├── persistence-demo.js
    └── evaluation-examples.js
```

## 🧪 Running the Demo

### Node.js
```bash
node demo.js
```

### Browser
Open `index.html` in your browser and check the console.

## 🎯 Design Philosophy

This system embodies the principle that **functional design can be beautiful design**. By applying systematic approaches from masters like Müller-Brockmann and Lupton, combined with modern evaluation standards from Awwwards, we create interfaces that are:

- **Systematically Beautiful**: Mathematical precision creates natural harmony
- **Functionally Clear**: Every element serves communication purpose
- **Professionally Evaluated**: Industry-standard assessment ensures quality
- **Contextually Intelligent**: Appears when most relevant to user needs

## 🤝 Contributing

This system represents a synthesis of foundational design principles with modern implementation. Contributions should maintain the systematic approach and professional standards established.

## 📚 Design References

- **"Grid Systems in Graphic Design"** by Josef Müller-Brockmann
- **"Thinking with Type"** by Ellen Lupton  
- **Awwwards Evaluation Criteria** - Professional web design standards
- **Swiss International Typographic Style** - Objective clarity principles

## 📄 License

Open source - built to demonstrate systematic design principles in action.

---

**✨ Created with systematic design thinking and professional evaluation standards**
