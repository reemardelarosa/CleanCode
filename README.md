# CleanCode
- [Clean Code](https://app.pluralsight.com/library/courses/writing-clean-code-humans/table-of-contents)
- [Solid Code](https://www.pluralsight.com/courses/principles-oo-design)
- [Automated Testing](https://app.pluralsight.com/library/courses/automated-testing-fraidy-cats/table-of-contents)
- [Refactoring](https://www.pluralsight.com/courses/refactoring-fundamentals)
- [Domain Driven Design(DDD)](https://www.pluralsight.com/courses/patterns-library)
- [Test Driven Development](https://www.pluralsight.com/courses/outside-in-tdd)
- [Design Patterns](https://app.pluralsight.com/library/courses/patterns-library/)

## Books
- [Code Complete by Steve McConnell](https://www.stevemcconnell.com)
- [Clean Code by Rober S. Martin](https://www.objectmentor.com)
- [The Pragmatic Programmer by Andrew Hunt, David Thomas](https://www.pragprog.com)

## Principles

### Right tool for the job.

#### Boundaries Matter
> HTML, JS, CSS should be written in their own respective file type.

#### Stay Native
- Cached
- Code Colored
- Syntax Checked
- Separation of concerns
- Reusable
- Avoid string parsing
- Can minify and obfuscate

##### Avoid using one language to write another language/format via strings. e.g Using strings in C#, Java, PHP, etc. to create
- Javascript
- XML
- HTML
- JSON
- CSS

#### Leverage Libraries
- One Language per file
- Every Tech is Potential Evil

### Maximize signal to noise ratio.

#### Signal
> Logic that folows the TED rule:
- **T**erse - should not excessively wordy.
- **E**xpressive - clear on what code is trying to do
- **D**o one thing - clear and one thing responsibility.

#### Noise
- High Cyclomatic Complexity
- Excessive Indentation
- Zombie Code
- Unnecessary Comments
- Poorly Named Structures
- Huge Classes
- Long Methods
- Repetition
- No Whitespace
- Overly Verbose

#### Why is signal to noise ration so important?
1. Our brain is the compiler.
> We can process 7 items
2. The mess builds quietly.
3. Copy and paste is often a design problem.

### Self-documenting.
> Understanding the original programmer's intent is the most difficult prooblem.

> Well written code is self-documenting.

1. CLEAR INTENT
2. LAYERS OF ABSTRACTIONS
3. FORMAT FOR RELIABILITY
4. FAVOR CODE OVER COMMENTS

## Naming
### Classes
| Dirty | Clean |
| :-------------: |:-------------:|
| WebSiteBO | User |
| Utility | Account |
| Common | QueryBuilder |
| MyFunctions | ProductRepository |

#### Guidelines
- Noun
- Be specific
- Single Responsibility
- Avoid Generic Suffixes

### The Method Name Should Say It All

| Say what | Clean |
|---|---|
| Get | GetRegisteredUsers |
| Process | IsValidSubmission |
|Pending | ImportDocument |
| Dolt | SendEmail |

### Naming Warning Sign
#### Watch out for
- And
- If
- Or

#### Watch for Side Effects
- CheckPassword shouldn't log users out.
- ValidateSubmission shouldn't save.
- GetUser shouldn't create their session.
- ChargeCreditCard shouldn't send emails.

### Avd Abbr

- It's not the 80's
- No Standard
- We talk about code

### Booleans
 . Booleans names should sound like true/false questions.

| *Dirty* | _Clean_ |
|-----|-----|
| open | isOpen |
| start | done |
| status | isActive |
| login | loggedIn |
| ```if (login) {}``` | ```if (loggedIn) {}``` |

### Be symmetrical
> When dealing with states that toggle, consistently use matching pairs.

| _Dirty_ | _Clean_ |
|:-----:|:----:|
| on/disable | on/off |
| quick/slow | fast/slow |
| lock/open | lock/unlock |
| slow/max | min/max |

## Conditionals
### Boolean Comparison


### Boolean Assignment
### Positive Conditionals
### Ternary Elegance
### Stringly Typed
### Magic Numbers
### Complex Conditionals
### Polymorphism vs Enums
### Be Declarative
### Table Driven Methods

## Functions
## Classes
## Comments
## Demo
## Stay Clean

