#!/bin/bash

# Script to install all Shadcn UI components
# Run this in Terminal: ./install-all-components.sh

echo "🚀 Installing all Shadcn UI components..."
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
for component in "${components[@]}"; do
  echo "📦 Installing $component..."
  npx --yes shadcn@latest add "$component" --yes --overwrite || {
    echo "⚠️  Failed to install $component, continuing..."
  }
  echo ""
done

echo "✅ Done installing components!"
echo ""
echo "📝 Next steps:"
echo "1. Check that all components are in src/components/ui/"
echo "2. Verify components use your design tokens (Yellow Theme, IBM Plex Sans Thai Looped)"
echo "3. Create stories for new components in Storybook"
