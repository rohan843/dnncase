# Suggested Top Level Modules and Their Possible Events (Hierarchically Arranged)

## Contents

- [Suggested Top Level Modules and Their Possible Events (Hierarchically Arranged)](#suggested-top-level-modules-and-their-possible-events-hierarchically-arranged)
  - [Contents](#contents)
  - [Feature Requirements](#feature-requirements)
    - [Groupings as a Mindmap](#groupings-as-a-mindmap)
  - [Suggested Modules](#suggested-modules)
    - [Module 1](#module-1)
      - [Description](#description)
      - [Events](#events)
        - [Event 1 hierarchy root](#event-1-hierarchy-root)

## Feature Requirements

_Group these together to identify potential top level modules._

1. A desktop app that can run as a self contained system on any platform.
2. The application should have multiple toolbars. One containing the project name, app icon, close/minimize/maximize keys. Another containing the menus (`File`, `Edit`...). A third containing quick access options such as undo/redo and command pallette. Another showing the tabs currently open in the current workspace. There should be a bottom bar showing warnings, errors, git pull/push status and output format (`.ipynb` or `.py`). The main work area should display contents of the open file. In case the open file is a NN graph, it should show side bars for element selection (e.g., layer) and parameter selection (e.g., hyperparameters specification).
3. 

### Groupings as a Mindmap

```mermaid
mindmap
  root((Features))
    Module 1
        Feature 1
        Feature 3
    Module 2
        Feature 2
```

## Suggested Modules

### Module 1

#### Description

#### Events

##### Event 1 hierarchy root

```mermaid
classDiagram
    Event1Root <|-- Event1Child
```
