# Git Branching Strategy

The EventSphere project follows a Git branching strategy to support collaborative development.

## Branches

### main
Contains stable and production-ready code.

### develop
Used for integrating and testing new features.

### Feature Branches

Each new feature is developed in a separate branch.

Examples:

- feature/student-login
- feature/event-registration
- feature/create-event
- feature/admin-dashboard

## Workflow

1. Create a feature branch from develop.
2. Implement the feature.
3. Test the feature.
4. Create a Pull Request.
5. Merge into develop.
6. Merge develop into main after successful testing.