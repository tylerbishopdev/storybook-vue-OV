# Storybook Vue Project with shadcn/vue Components

This project is a comprehensive Storybook setup featuring Vue 3, TailwindCSS, and all available shadcn/vue components.

## Features

- ⚡️ Vue 3 with TypeScript
- 🎨 TailwindCSS v4 for styling
- 📚 Storybook for component documentation
- 🧩 Complete shadcn/vue component library
- 🔧 ESLint + Prettier for code quality
- ⚡ Vite for fast development

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm run storybook

# Start development server
pnpm run dev
```

### Build

```bash
# Build the project
pnpm run build

# Build Storybook
pnpm run build-storybook
```

## Available Components

This project includes stories for all major shadcn/vue components:

### Form Components

- Button
- Input
- Select
- Checkbox
- Switch
- Slider
- Textarea
- Radio Group

### Data Display

- Badge
- Card
- Table
- Avatar
- Progress
- Skeleton

### Navigation

- Breadcrumb
- Tabs
- Command
- Navigation Menu

### Feedback

- Alert
- Dialog
- Popover
- Toast

### Layout

- Accordion
- Collapsible
- Separator

### Advanced

- Calendar
- Date Picker
- Form components
- Context Menu
- Dropdown Menu

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/vue components
├── stories/         # Storybook stories
└── style.css       # TailwindCSS imports

.storybook/          # Storybook configuration
```

## Configuration

### TailwindCSS

The project uses TailwindCSS v4 with PostCSS configuration. All components are styled using the shadcn/vue design system.

### Storybook

Stories are organized by component type and include comprehensive examples showing different variants and use cases.

## Development

- All components follow the shadcn/vue patterns
- Stories include interactive controls where applicable
- Components are fully typed with TypeScript
- TailwindCSS classes are used for consistent styling

## Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run storybook` - Start Storybook
- `pnpm run build-storybook` - Build Storybook

## Contributing

When adding new components:

1. Add the component to `src/components/ui/`
2. Create a corresponding story in `src/stories/`
3. Follow the existing patterns for story structure
4. Include multiple variants and examples

## License

MIT
