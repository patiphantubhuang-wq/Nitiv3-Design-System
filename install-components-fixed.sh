#!/bin/bash

# Fixed installation script - Make sure you're in the project directory
# Run: cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem" && ./install-components-fixed.sh

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found!"
  echo "Please run this script from the project directory:"
  echo "cd \"/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem\""
  exit 1
fi

echo "✅ Found package.json - Proceeding with installation..."
echo ""

# List of all Shadcn UI components (excluding button and card which already exist)
components=(
  "accordion"
  "alert"
  "alert-dialog"
  "aspect-ratio"
  "avatar"
  "badge"
  "breadcrumb"
  "calendar"
  "carousel"
  "checkbox"
  "collapsible"
  "command"
  "context-menu"
  "dialog"
  "drawer"
  "dropdown-menu"
  "form"
  "hover-card"
  "input"
  "label"
  "menubar"
  "navigation-menu"
  "pagination"
  "popover"
  "progress"
  "radio-group"
  "resizable"
  "scroll-area"
  "select"
  "separator"
  "sheet"
  "skeleton"
  "slider"
  "sonner"
  "switch"
  "table"
  "tabs"
  "textarea"
  "toast"
  "toggle"
  "toggle-group"
  "tooltip"
)

# Install each component
success_count=0
fail_count=0

for component in "${components[@]}"; do
  echo "📦 Installing $component..."
  if npx --yes shadcn@latest add "$component" --yes --overwrite 2>&1 | grep -q "Added"; then
    echo "✅ Successfully installed $component"
    ((success_count++))
  else
    echo "⚠️  Failed or skipped $component"
    ((fail_count++))
  fi
  echo ""
done

echo "=========================================="
echo "✅ Successfully installed: $success_count components"
echo "⚠️  Failed/Skipped: $fail_count components"
echo "=========================================="
echo ""
echo "📝 Next steps:"
echo "1. Check components in: src/components/ui/"
echo "2. Verify design tokens are applied correctly"
echo "3. Create stories for new components"
