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
1. Clear intent
2. Use the right tool
3. Bite-size logic
4. Sometimes code isn't the answer

### Boolean Comparison
- Dirty
```
if (loggeIn == true) {}
```
- Clean

```
if (loggedIn) {}
```



### Boolean Assignment
- Dirty
```
bool goingToChipotleForLunch;
if ( cashInWallet > 6.00) { goingToChipotleForLunch = true; }
else { goingToChipotleForLunch = false }
```
- Clean

```
bool goingToChipotleForLunch = cashInWallet > 6.00;
```

> 1. Fewer Lines
> 2. No separate initialization
> 3. No repitition
> 4. Reads like speech

### Positive Conditionals
> Don't be Anti-negative
> In other words, use positive conditionals.
- Dirty
```
if (!isNotLoggedIn)
```
- Clean

```
if (loggedIn)
```

### Ternary Elegance

- Dirty
```
int registrationFee;

if ( isSpeaker) {
    registrationFee = 0;
} else {
    regitrationFee = 50;
}
```
- Clean

```
int registrationFee = isSpeaker ? 0 : 50;
```

### Stringly Typed
- Dirty
```
if (employeeType == "manager")
```
- Clean

```
if (employee.Type === EmployeeType.Manager)
```

### Magic Numbers

- Dirty
```
if (age > 21) {}

if (status === 2) {}
```
- Clean

```
const int legalDrinkingAge = 21;
if (age > legalDrinkingAge) { // body here}

if (status === Status.Active) {}
```

### Complex Conditionals
- Dirty
```
if (car.Year > 1980
    && (car.Make === 'Ford' || car.Make === 'Chevrolet')
    && car.Odometer < 100000
    && car.Vin.StartsWith('V2') || car.Vin.StartsWith('IA3'))
    {
        // do lof of things here
    }

if (employee.Age > 55
    && employee.YearsEMployed > 10
    && employee.isRetired === true) 
{
 // do things   
}

if ((fileExtension === 'mp4' ||
    fileExtension === 'mpg' ||
    fileExtension === 'avi)
    && (isAdmin || isActiveFile)) {}
```
- Clean

```
// Intermediate Variable
bool eligibleForPension = employee.Age > 55
    && employee.YearsEMployed > 10 && employee.isRetired === true;

// Encapsulate via function

if (ValidFileRequest(fileExtension, isActiveFile, isAdmin))

private bool ValidFileRequest ( string fileExtension, bool isActiveFile, bool isAdmin) {
    return (fileExtension === 'mp4' ||
        fileExtension === 'mpg' ||
        fileExtension === 'avi)
        && (isAdmin || isActiveFile);
}
```

### Polymorphism vs Enums
- Dirty
```
private void LoginUser(User user) 
{
    switch (user.Status)
    {
        case Status.Active:
            // active user's logic
            break;
        case Status.Inactive:
            // inactive user's logic
            break;
        case Status.Locked:
            // locked user's logic
            break;
    }
}
```
- Clean

```
private void LoginUser(User user)
{
    user.Login();
}

private abstract class User
{
    public string FirstName;
    public string LastName;
    public Status status;
    public int AccountBalance;

    public abstract void login();

}

private class ActiveUser : User
{
    public void Login() {
        // Active user logic here
    }
}

private class InactiveUser : User
{
    public void Login() {
        // Inactive user logic here
    }
}

private class LockedUser : User
{
    public void Login() {
        // Locked user logic here
    }
}

```

### Be Declarative
- Dirty
```
List<User> matchingUsers = new List<User>();

foreach (var user in users)
{
    if (user.AccountBalance <minimumAccountBalance
        && user.Status == Status.Active)
    {
        matchingUsers.Add(user);
    }

    return matchingUsers;
}
```
- Clean

```
return users
    .Where(u => u.AccountBalance < minimumAccountBalance)
    .Where(u => u.Status == Status.Active)

```

### Table Driven Methods
- Dirty
```
if (age < 20)
{
    return 345.60;
}
else if (age < 30)
{
    return 419.5;
}
else if (age < 40)
{
    return 478.36;
}
else if (age < 50)
{
    return 516.25;
}

```
- Clean

| InsuranceRateId | MaximumAge | Rate |
|:---:|:---:|:---:|
| 1 | 20 | 346.60 |
| 2 | 30 | 420.50 |
| 3 | 40 | 476.38 |
| 4 | 50 | 516.25 |
```
return Repository.GetInsuranceRate(age)
```

## Functions
## Classes
## Comments
## Demo
## Stay Clean

