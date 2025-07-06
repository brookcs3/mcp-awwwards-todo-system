#!/bin/bash

# MCP Awwwards Todo System Installation Script
# Professional MCP server for Claude Desktop

echo "🏆 Installing MCP Awwwards Todo System..."
echo "Professional todo management for Claude Desktop"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Get current directory
INSTALL_DIR="$(pwd)"
echo "📁 Installation directory: $INSTALL_DIR"
echo "🖥️  Server location: /Users/cameronbrooks/Server/MCP/mcp-awwwards-todo"

# Check if mcp-server.js exists
if [ ! -f "mcp-server.js" ]; then
    echo "❌ mcp-server.js not found. Make sure you're in the correct directory."
    exit 1
fi

echo "✅ MCP server files found"

# Test the server
echo "🧪 Testing MCP server..."
if node mcp-server.js > /dev/null 2>&1; then
    echo "✅ MCP server test successful"
else
    echo "❌ MCP server test failed"
    exit 1
fi

# Claude Desktop configuration path
CLAUDE_CONFIG_DIR="$HOME/Library/Application Support/Claude"
CLAUDE_CONFIG_FILE="$CLAUDE_CONFIG_DIR/claude_desktop_config.json"

echo ""
echo "📋 Claude Desktop Configuration:"
echo "Config file: $CLAUDE_CONFIG_FILE"

# Create Claude config directory if it doesn't exist
if [ ! -d "$CLAUDE_CONFIG_DIR" ]; then
    echo "📁 Creating Claude config directory..."
    mkdir -p "$CLAUDE_CONFIG_DIR"
fi

# Check if config file exists
if [ -f "$CLAUDE_CONFIG_FILE" ]; then
    echo "⚠️  Claude Desktop config file already exists."
    echo "You'll need to manually add the MCP server configuration."
    echo ""
    echo "Add this to your claude_desktop_config.json:"
    echo "{"
    echo "  \"mcpServers\": {"
    echo "    \"mcp-awwwards-todo\": {"
    echo "      \"command\": \"node\","
    echo "      \"args\": [\"$INSTALL_DIR/mcp-server.js\"]"
    echo "    }"
    echo "  }"
    echo "}"
else
    echo "📝 Creating new Claude Desktop config file..."
    cat > "$CLAUDE_CONFIG_FILE" << EOF
{
  "mcpServers": {
    "mcp-awwwards-todo": {
      "command": "node",
      "args": ["$INSTALL_DIR/mcp-server.js"]
    }
  }
}
EOF
    echo "✅ Claude Desktop config file created"
fi

echo ""
echo "🎉 Installation Complete!"
echo ""
echo "🚀 Next Steps:"
echo "1. Restart Claude Desktop"
echo "2. Open a new conversation"
echo "3. The MCP Awwwards Todo System will automatically initialize"
echo ""
echo "✨ Features Available:"
echo "• 🎨 Swiss Grid mathematical precision"
echo "• 📝 Typography hierarchy (Lupton principles)"
echo "• 📊 Awwwards evaluation (40/30/20/10 weighting)"
echo "• 🔄 Cross-chat persistence"
echo "• 🔥 Contextual auto-display triggers"
echo "• 🏆 Professional achievement levels"
echo ""
echo "🏆 Achievement Level: SITE OF THE DAY"
echo "Ready to create award-winning todos!"
