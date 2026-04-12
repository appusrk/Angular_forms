# Angular Forms Demo: Template-Driven vs Reactive

A comprehensive demonstration of Angular's two form approaches with side-by-side comparison, validation demos, and best practices guidance.

## Project Overview

This project demonstrates the differences between Template-driven and Reactive forms in Angular, including:

- **Side-by-side comparison** of both form types
- **Validation demonstrations** with various validation rules
- **Best practices guidance** on when to use each approach
- **Interactive examples** with real-time form state display

## Features

### Template-Driven Form
- Uses `ngModel` for two-way data binding
- Validation defined in template using HTML attributes
- Automatic form control creation
- Simple setup for basic forms

### Reactive Form
- Explicit form control creation using `FormBuilder`
- Validation defined in component using `Validators`
- Custom cross-field validation (password confirmation)
- Better control over form state and testing

## Form Validation Examples

Both forms include validation for:
- **Required fields** - Name, email, age, password
- **Email format** - Valid email address format
- **Minimum length** - Name (2 chars), password (6 chars)
- **Numeric range** - Age between 18-100
- **Custom validation** - Password confirmation (Reactive form only)

## When to Use Which

### Template-Driven Forms
✅ **Best for:**
- Simple forms with basic validation
- Rapid prototyping
- Forms that mirror data model closely
- Declarative approach preference

❌ **Avoid when:**
- Complex validation needed
- Extensive unit testing required
- Dynamic form generation needed
- Cross-field validation required

### Reactive Forms
✅ **Best for:**
- Complex forms with custom validation
- Dynamic forms that change at runtime
- Extensive unit testing requirements
- Cross-field validation needs

❌ **Avoid when:**
- Simple forms with basic validation
- Rapid prototyping needed
- Minimal setup preferred
- Team unfamiliar with reactive patterns

## Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   ng serve
   ```

3. **Open browser:**
   Navigate to `http://localhost:4200`

## Project Structure

```
src/app/
├── forms-comparison/          # Main comparison component
├── template-form/            # Template-driven form demo
├── reactive-form/            # Reactive form demo
├── app.config.ts            # App configuration with form modules
└── app.routes.ts            # Routing configuration
```

## Key Learning Points

1. **Setup Differences:**
   - Template-driven: Import `FormsModule`
   - Reactive: Import `ReactiveFormsModule`

2. **Data Binding:**
   - Template-driven: `[(ngModel)]="property"`
   - Reactive: `formControlName="controlName"`

3. **Validation:**
   - Template-driven: HTML attributes + template reference variables
   - Reactive: Validators in component + FormGroup methods

4. **Form State:**
   - Template-driven: Access via template reference (`#form="ngForm"`)
   - Reactive: Direct access via FormGroup instance

## Testing the Validation

Try these scenarios to see validation in action:

1. **Submit empty forms** - See required field validation
2. **Enter invalid email** - See email format validation
3. **Enter short names/passwords** - See minimum length validation
4. **Enter invalid age** - See numeric range validation
5. **Mismatched passwords** (Reactive form) - See custom validation

## Technologies Used

- Angular 18+
- TypeScript
- CSS3 with Grid and Flexbox
- Reactive Forms API
- Template-driven Forms API

## Best Practices Demonstrated

- Proper form validation patterns
- Error message display
- Form state management
- Responsive design
- Accessibility considerations
- Clean component architecture